// src/components/ritual/IngredientRitualField.tsx
import { motion } from 'framer-motion';

interface Props {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}

export const IngredientRitualField = ({
  value,
  onChange,
  placeholder,
}: Props) => {
  return (
    <motion.textarea
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      className="
        w-full h-56 mt-32
        bg-transparent
        border border-white/10
        rounded-[2.5rem]
        p-10
        text-center text-xl italic
        placeholder-white/20
        outline-none
        focus:border-white/30
        obsidian-glass
      "
    />
  );
};
