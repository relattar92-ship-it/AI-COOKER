import { VertexAI } from "@google-cloud/vertexai";
import { extractText } from "./utils";

const vertex = new VertexAI({
  project: "R2H-COOKER-AI",
  location: "us-central1",
});

export async function composeMenu(params: {
  ingredients: string[];
  language: "ar" | "en";
}) {
  const model = vertex.preview.getGenerativeModel({
    model: "gemini-1.5-pro",
  });

  const prompt = `
You are a Michelin-star chef.

Ingredients:
${params.ingredients.join(", ")}

Language: ${params.language}

Return STRICT JSON only:
{
  "title": "",
  "description": "",
  "ingredients": [],
  "instructions": [],
  "prepTime": "",
  "servings": 2
}
`;

  const result = await model.generateContent(prompt);
  const text = extractText(result);

  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}
