import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Recipe } from '../../types';
import { CinematicImageFrame } from './CinematicImageFrame';
import { motionTokens } from '../../utils/motionTokens';

interface Props {
  recipe: Recipe | null;
  language: 'ar' | 'en';
}

export const CinematicResultReveal = ({ recipe, language }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (recipe && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [recipe]);

  if (!recipe) return null;

  return (
    <section ref={ref} className="mt-40 flex flex-col items-center text-center gap-20">
      {recipe.imageUrl && (
        <CinematicImageFrame src={recipe.imageUrl} alt={recipe.title} />
      )}

      <motion.h2
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: motionTokens.duration.slow,
          ease: motionTokens.easing.luxury,
        }}
        className="text-5xl serif-luxury silver-glow"
      >
        {recipe.title}
      </motion.h2>
    </section>
  );
};
