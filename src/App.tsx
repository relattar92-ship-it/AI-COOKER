// src/App.tsx
import { useState, useEffect } from 'react';
import {
  MealType,
  CuisineType,
  PreferenceType,
  AppState,
  Recipe,
} from './types';

import { SilentHeader } from './components/layout/SilentHeader';
import { IngredientRitualField } from './components/ritual/IngredientRitualField';
import { GlassActionButton } from './components/action/GlassActionButton';
import { CinematicResultReveal } from './components/feedback/CinematicResultReveal';

export default function App() {
  const [state, setState] = useState<AppState>({
    ingredients: '',
    image: null,
    mealType: MealType.Lunch,
    cuisine: CuisineType.Egyptian,
    preference: PreferenceType.Healthy,
    recipes: [],
    loading: false,
    error: null,
    language: 'en',
  });

  useEffect(() => {
    document.documentElement.dir =
      state.language === 'ar' ? 'rtl' : 'ltr';
  }, [state.language]);

  const handleGenerate = async () => {
    if (!state.ingredients || state.loading) return;

    setState(s => ({ ...s, loading: true }));

    const recipe: Recipe = {
      title: 'Luxury Signature Dish',
      description: '',
      ingredients: state.ingredients.split(','),
      instructions: [
        'Prepare ingredients carefully.',
        'Cook slowly to perfection.',
      ],
      cookingTips: [],
      prepTime: '20 minutes',
      difficulty: 'Medium',
      servings: 2,
      chefSecret: 'Luxury lives in restraint.',
      pairing: 'Sparkling water',
      imageUrl: 'https://picsum.photos/1200/800',
      nutrients: {
        calories: '—',
        protein: '—',
        carbs: '—',
        fats: '—',
        fiber: '—',
        sugar: '—',
        sodium: '—',
        micronutrients: [],
      },
    };

    setTimeout(() => {
      setState(s => ({
        ...s,
        loading: false,
        recipes: [recipe],
      }));
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <SilentHeader onOpenSettings={() => {}} />

      <main className="max-w-6xl mx-auto px-6 pb-40">
        <IngredientRitualField
          value={state.ingredients}
          onChange={v =>
            setState(s => ({ ...s, ingredients: v }))
          }
          placeholder="Enter your ingredients…"
        />

        <div className="mt-24">
          <GlassActionButton
            label="Create the Menu"
            loading={state.loading}
            onPress={handleGenerate}
          />
        </div>

        <CinematicResultReveal
          recipe={state.recipes[0] ?? null}
          language={state.language}
        />
      </main>
    </div>
  );
}
