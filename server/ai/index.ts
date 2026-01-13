import express from 'express';
import { createLuxuryMenu } from './aiOrchestrator';

const router = express.Router();

router.post('/create-menu', async (req, res) => {
  try {
    const { ingredients, language = 'en' } = req.body;

    if (!ingredients || !ingredients.trim()) {
      return res.status(400).json({ error: 'Ingredients required' });
    }

    const result = await createLuxuryMenu({
      ingredients,
      language,
    });

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'AI generation failed' });
  }
});

export default router;
