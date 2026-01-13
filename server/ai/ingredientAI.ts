import { VertexAI } from "@google-cloud/vertexai";
import { extractText } from "./utils";

const vertex = new VertexAI({
  project: "R2H-COOKER-AI",
  location: "us-central1",
});

export async function analyzeIngredients(
  input: string,
  language: "ar" | "en"
): Promise<string[]> {
  const model = vertex.preview.getGenerativeModel({
    model: "gemini-1.5-pro",
  });

  const prompt = `
Extract ONLY edible cooking ingredients.
No tools, no brands.

Language: ${language}
Text: ${input}

Return STRICT JSON:
{ "ingredients": ["ingredient1", "ingredient2"] }
`;

  const result = await model.generateContent(prompt);
  const text = extractText(result);

  try {
    const parsed = JSON.parse(text);
    return Array.isArray(parsed.ingredients) ? parsed.ingredients : [];
  } catch {
    return [];
  }
}
