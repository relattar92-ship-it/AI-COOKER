import { motion } from 'framer-motion';
import { Coffee, Sun, Moon } from 'lucide-react';

interface MealTypeCardProps {
  title: string;
  subtitle: string;
  type: 'breakfast' | 'lunch' | 'dinner';
  selected: boolean;
  onSelect: () => void;
}

const ICONS = {
  breakfast: Coffee,
  lunch: Sun,
  dinner: Moon,
};

export const MealTypeCard: React.FC<MealTypeCardProps> = ({
  title,
  subtitle,
  type,
  selected,
  onSelect,
}) => {
  const Icon = ICONS[type];

  return (
    <motion.button
      onClick={onSelect}
      initial={false}
      animate={{
        scale: selected ? 1.04 : 1,
        boxShadow: selected
          ? '0 0 0 1px rgba(255,255,255,0.35), 0 0 40px rgba(255,182,193,0.25)'
          : '0 0 0 1px rgba(255,255,255,0.08)',
        backgroundColor: selected
          ? 'rgba(255,255,255,0.06)'
          : 'rgba(255,255,255,0.03)',
      }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative w-full
        px-6 py-6
        rounded-3xl
        backdrop-blur-xl
        border border-white/10
        text-left
        overflow-hidden
      "
    >
      {/* Icon */}
      <motion.div
        animate={{
          opacity: selected ? 1 : 0.6,
          y: selected ? 0 : 4,
        }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mb-4"
      >
        <Icon
          size={22}
          strokeWidth={1.5}
          className="text-pink-300"
        />
      </motion.div>

      {/* Text */}
      <div className="space-y-1">
        <span className="block text-sm uppercase tracking-[0.35em] text-white/80">
          {title}
        </span>
        <span className="block text-[11px] italic text-white/50">
          {subtitle}
        </span>
      </div>

      {/* Ambient glow */}
      {selected && (
        <motion.div
          layoutId="meal-glow"
          className="
            absolute inset-0
            bg-gradient-to-br from-pink-300/10 via-transparent to-transparent
            pointer-events-none
          "
        />
      )}
    </motion.button>
  );
};
