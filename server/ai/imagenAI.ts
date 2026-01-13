import { VertexAI } from '@google-cloud/vertexai';

const vertex = new VertexAI({
  project: 'R2H-COOKER-AI',
  location: 'us-central1',
});

export async function generateDishImage(prompt: string): Promise<string> {
  const model = vertex.preview.getGenerativeModel({
    model: 'imagegeneration@002',
  });

  const res = await model.generateContent({
    contents: [{ role: 'user', parts: [{ text: prompt }] }],
  });

  const img = res.response.candidates?.[0]?.content?.parts?.[0]?.inlineData;

  if (!img) throw new Error('Imagen failed');

  return `data:image/png;base64,${img.data}`;
}
