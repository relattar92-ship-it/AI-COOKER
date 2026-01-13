export async function createMenu(payload: {
  ingredientsText: string;
  mealType: string;
  cuisine: string;
  preference: string;
  language: 'en' | 'ar';
}) {
  const res = await fetch('/api/create-menu', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error('API_FAILED');
  }

  return res.json();
}
