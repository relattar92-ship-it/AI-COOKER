import { analyzeIngredients } from './ingredientAI';
import { composeMenu } from './menuAI';
import { buildImagePrompt } from './imagePromptAI';
import { generateDishImage } from './imagenAI';

interface Params {
  ingredients: string;
  language: 'ar' | 'en';
}

export async function createLuxuryMenu(params: Params) {
  const analyzed = await analyzeIngredients(
    params.ingredients,
    params.language
  );

  const menu = await composeMenu({
    ingredients: analyzed,
    language: params.language,
  });

  const imagePrompt = buildImagePrompt(menu);
  const imageUrl = await generateDishImage(imagePrompt);

  return {
    title: menu.title,
    description: menu.description,
    ingredients: menu.ingredients,
    instructions: menu.instructions,
    prepTime: menu.prepTime,
    servings: menu.servings,
    imageUrl,
  };
}
