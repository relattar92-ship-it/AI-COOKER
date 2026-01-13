export enum MealType {
  Breakfast = 'Breakfast',
  Lunch = 'Lunch',
  Dinner = 'Dinner',
}

export enum CuisineType {
  Egyptian = 'Egyptian',
  Moroccan = 'Moroccan',
  Asian = 'Asian',
}

export enum PreferenceType {
  Healthy = 'Healthy',
  Spicy = 'Spicy',
  Rich = 'Rich',
}

export interface NutrientInfo {
  name: string;
  value: string;
}

export interface Recipe {
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  cookingTips: string[];
  prepTime: string;
  difficulty: string;
  servings: number;
  chefSecret: string;
  pairing: string;
  imageUrl?: string;
  nutrients: {
    calories: string;
    protein: string;
    carbs: string;
    fats: string;
    fiber: string;
    sugar: string;
    sodium: string;
    micronutrients: NutrientInfo[];
  };
}

export interface AppState {
  ingredients: string;
  image: File | null;
  mealType: MealType;
  cuisine: CuisineType;
  preference: PreferenceType;
  recipes: Recipe[];
  loading: boolean;
  error: string | null;
  language: 'en' | 'ar';
}
