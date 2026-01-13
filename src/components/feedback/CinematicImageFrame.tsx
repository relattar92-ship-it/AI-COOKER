import { motion } from 'framer-motion';
import { motionTokens } from '../../utils/motionTokens';

interface Props {
  src: string;
  alt: string;
}

export const CinematicImageFrame = ({ src, alt }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: motionTokens.duration.ultraSlow,
        ease: motionTokens.easing.luxury,
      }}
      className="
        relative
        rounded-[3rem]
        overflow-hidden
        bg-white/5
        border border-white/10
        backdrop-blur-xl
        max-w-4xl mx-auto
      "
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </motion.div>
  );
};
