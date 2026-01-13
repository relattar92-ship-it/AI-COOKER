export function buildImagePrompt(menu: any): string {
  return `
Ultra photorealistic food photography.
Fine dining.
Dark background.
Soft studio lighting.
No text. No watermark.

Dish:
${menu.title}

Description:
${menu.description}
`;
}
