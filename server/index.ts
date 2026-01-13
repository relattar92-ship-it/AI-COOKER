import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { GoogleGenerativeAI } from "@google/generative-ai";
require("dotenv").config();


/* ===============================
   AI SETUP
================================ */
const googleAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = googleAI.getGenerativeModel({ model: "gemini-2.0-flash" });

/* ===============================
   APP SETUP
================================ */
const app = express();
app.use(cors());
app.use(bodyParser.json());

/* ===============================
   HELPERS
================================ */
function safeJsonParse<T>(text: string): T | null {
  try {
    const clean = text.replace(/```json|```/g, "").trim();
    return JSON.parse(clean);
  } catch {
    const match = text.match(/\{[\s\S]*\}/);
    if (!match) return null;
    try {
      return JSON.parse(match[0]);
    } catch {
      return null;
    }
  }
}

/* ===============================
   INGREDIENT EXTRACTION
================================ */
async function extractIngredients(
  text: string,
  language: string
): Promise<string[]> {
  const prompt = `
Return ONLY valid JSON in this format:
{ "ingredients": ["ingredient1", "ingredient2"] }

Extract food ingredients from:
"${text}"

Language: ${language}
`;

  try {
    const result = await model.generateContent(prompt);
    const raw = result.response.text();
    const parsed = safeJsonParse<{ ingredients: string[] }>(raw);
    return parsed?.ingredients ?? [];
  } catch {
    return [];
  }
}

/* ===============================
   RECIPE GENERATION (FINAL SHAPE)
================================ */
interface Recipe {
  name: string;
  servings: number;
  time_minutes: number;
  ingredients: {
    name: string;
    quantity: string;
    unit: string;
  }[];
  steps: string[];
}

async function composeRecipe(
  ingredients: string[],
  language: string
): Promise<Recipe | null> {
  const prompt = `
You are a professional chef.

Using ONLY these ingredients:
${ingredients.join(", ")}

Return ONLY valid JSON in this exact format:
{
  "name": "Recipe name",
  "servings": 2,
  "time_minutes": 15,
  "ingredients": [
    { "name": "Tomato", "quantity": "2", "unit": "pcs" }
  ],
  "steps": [
    "Step one",
    "Step two"
  ]
}

Language: ${language}
`;

  try {
    const result = await model.generateContent(prompt);
    const raw = result.response.text();
    return safeJsonParse<Recipe>(raw);
  } catch {
    return null;
  }
}

/* ===============================
   FINAL API (LOCKED CONTRACT)
================================ */
app.post("/api/create-menu", async (req, res): Promise<any> => {
  try {
    const { text, language = "en" } = req.body;

    if (!text || typeof text !== "string") {
      return res.status(400).json({
        status: "error",
        error: {
          code: "INVALID_INPUT",
          message: "Text is required"
        }
      });
    }

    console.log(`📥 Request: ${text.slice(0, 40)}...`);

    const ingredients = await extractIngredients(text, language);

    if (ingredients.length === 0) {
      return res.json({
        status: "error",
        error: {
          code: "NO_INGREDIENTS",
          message: "No ingredients detected"
        }
      });
    }

    const recipe = await composeRecipe(ingredients, language);

    if (!recipe) {
      return res.json({
        status: "error",
        error: {
          code: "RECIPE_FAILED",
          message: "Failed to generate recipe"
        }
      });
    }

    return res.json({
      status: "success",
      data: {
        recipe
      },
      meta: {
        ai_model: "gemini-2.0-flash",
        generated_at: new Date().toISOString()
      }
    });
  } catch (err: any) {
    return res.status(500).json({
      status: "error",
      error: {
        code: "SERVER_ERROR",
        message: err.message || "Unknown error"
      }
    });
  }
});

/* ===============================
   START SERVER
================================ */
app.listen(3333, '0.0.0.0', () => {
  console.log('🚀 AI-Cooker API READY on http://0.0.0.0:3333');
});
