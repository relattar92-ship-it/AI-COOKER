import { motion, AnimatePresence } from 'framer-motion';
import { motionTokens } from '../../utils/motionTokens';

interface Props {
  label: string;
  loading?: boolean;
  onPress: () => void;
}

export const GlassActionButton = ({ label, loading = false, onPress }: Props) => {
  return (
    <motion.button
      onClick={onPress}
      disabled={loading}
      whileTap={{ scale: motionTokens.scale.press }}
      className="
        relative w-full h-24
        rounded-[3rem]
        overflow-hidden
        bg-[#070707]
        border border-white/10
      "
    >
      <motion.div
        animate={{
          opacity: loading
            ? motionTokens.glow.focusOpacity
            : motionTokens.glow.softOpacity,
        }}
        transition={{
          duration: motionTokens.glow.breath,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: motionTokens.easing.soft,
        }}
        className="
          absolute inset-0
          bg-gradient-to-r
          from-pink-300/30 via-transparent to-pink-300/30
          blur-2xl
        "
      />

      <div className="relative z-10 flex items-center justify-center h-full">
        <AnimatePresence mode="wait">
          {!loading && (
            <motion.span
              key="label"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                duration: motionTokens.duration.normal,
                ease: motionTokens.easing.luxury,
              }}
              className="serif-luxury text-3xl italic text-white"
            >
              {label}
            </motion.span>
          )}

          {loading && (
            <motion.span
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              className="text-[10px] tracking-[0.5em] uppercase text-pink-200"
            >
              THE CHEF IS COMPOSING
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </motion.button>
  );
};
