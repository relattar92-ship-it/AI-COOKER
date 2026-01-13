import { motion } from 'framer-motion';

interface PreferencePillProps {
  label: string;
  selected: boolean;
  onSelect: () => void;
}

export const PreferencePill: React.FC<PreferencePillProps> = ({
  label,
  selected,
  onSelect,
}) => {
  return (
    <motion.button
      onClick={onSelect}
      initial={false}
      animate={{
        scale: selected ? 1.08 : 1,
        boxShadow: selected
          ? '0 0 0 1px rgba(255,182,193,0.5), 0 0 25px rgba(255,182,193,0.35)'
          : '0 0 0 1px rgba(255,255,255,0.15)',
        backgroundColor: selected
          ? 'rgba(255,182,193,0.05)'
          : 'transparent',
      }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        px-6 py-3
        rounded-full
        text-[11px]
        uppercase
        tracking-[0.35em]
        text-white/80
        backdrop-blur-md
        border border-white/10
        select-none
      "
    >
      {label}
    </motion.button>
  );
};
