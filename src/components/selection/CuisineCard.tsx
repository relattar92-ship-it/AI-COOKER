import { motion } from 'framer-motion';

interface CuisineCardProps {
  name: string;
  description: string;
  selected: boolean;
  onSelect: () => void;
}

export const CuisineCard: React.FC<CuisineCardProps> = ({
  name,
  description,
  selected,
  onSelect,
}) => {
  return (
    <motion.button
      onClick={onSelect}
      initial={false}
      animate={{
        scale: selected ? 1.05 : 1,
        backgroundColor: selected
          ? 'rgba(255,255,255,0.06)'
          : 'rgba(255,255,255,0.03)',
        boxShadow: selected
          ? '0 0 0 1px rgba(255,255,255,0.3), 0 0 50px rgba(255,182,193,0.22)'
          : '0 0 0 1px rgba(255,255,255,0.08)',
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative min-w-[240px]
        px-6 py-8
        rounded-3xl
        backdrop-blur-xl
        border border-white/10
        text-left
        overflow-hidden
        select-none
      "
    >
      {/* Name */}
      <motion.h3
        animate={{
          opacity: selected ? 1 : 0.8,
          y: selected ? 0 : 4,
        }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="serif-luxury text-xl italic text-white mb-3"
      >
        {name}
      </motion.h3>

      {/* Description */}
      <motion.p
        animate={{
          opacity: selected ? 0.75 : 0.45,
        }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="text-[11px] tracking-wide leading-relaxed text-white/70"
      >
        {description}
      </motion.p>

      {/* Ambient poetic glow */}
      {selected && (
        <motion.div
          layoutId="cuisine-glow"
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
