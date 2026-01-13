import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ObsidianOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const ObsidianOverlay: React.FC<ObsidianOverlayProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            fixed inset-0 z-50
            flex items-center justify-center
            bg-black/70
            backdrop-blur-2xl
          "
        >
          {/* Click outside to close */}
          <div
            className="absolute inset-0"
            onClick={onClose}
          />

          {/* Glass Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative z-10
              w-[90%] max-w-md
              rounded-[2.5rem]
              bg-white/[0.05]
              border border-white/10
              backdrop-blur-xl
              px-10 py-12
              text-center
            "
          >
            {/* Close */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="
                absolute top-6 right-6
                w-9 h-9
                rounded-full
                flex items-center justify-center
                bg-white/5
                border border-white/10
              "
            >
              <X
                size={14}
                strokeWidth={1.5}
                className="text-white/70"
              />
            </motion.button>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                serif-luxury text-3xl italic
                text-white mb-10
              "
            >
              {title}
            </motion.h2>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="space-y-6"
            >
              {children}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
