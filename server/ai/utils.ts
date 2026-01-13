import { GenerateContentResponse } from "@google/generative-ai";

export function extractText(result: any): string {
  return (
    result?.response?.candidates?.[0]?.content?.parts?.[0]?.text ?? ""
  );
}
