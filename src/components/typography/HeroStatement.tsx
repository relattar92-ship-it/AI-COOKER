import { motion } from 'framer-motion';
import { MealType } from '../../types';

interface HeroStatementProps {
  mealType: MealType;
  language: 'ar' | 'en';
}

export const HeroStatement: React.FC<HeroStatementProps> = ({
  mealType,
  language,
}) => {
  const content = {
    ar: {
      titles: {
        Breakfast: 'بداية فاخرة',
        Lunch: 'منتصف راقٍ',
        Dinner: 'ختام أنيق',
      },
      subtitles: {
        breakfast: 'حيث يبدأ الإيقاع',
        lunch: 'توازن في القلب',
        dinner: 'طقس المساء',
      },
    },
    en: {
      titles: {
        Breakfast: 'A Refined Beginning',
        Lunch: 'A Balanced Interlude',
        Dinner: 'An Elegant Finale',
      },
      subtitles: {
        breakfast: 'Where rhythm begins',
        lunch: 'Balance at the center',
        dinner: 'An evening ritual',
      },
    },
  };

  const subtitleKey =
    mealType === MealType.Breakfast
      ? 'breakfast'
      : mealType === MealType.Lunch
      ? 'lunch'
      : 'dinner';

  return (
    <div className="text-center mt-32 mb-20">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="serif-luxury text-6xl italic mb-6"
      >
        {content[language].titles[mealType]}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="text-sm tracking-widest uppercase"
      >
        {content[language].subtitles[subtitleKey]}
      </motion.p>
    </div>
  );
};
