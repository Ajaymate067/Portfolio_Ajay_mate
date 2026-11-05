import { motion } from 'framer-motion';
import { useScrollProgress } from '@/hooks/useAnimations';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[100] origin-left"
      style={{
        scaleX: progress,
        background: 'linear-gradient(90deg, #3B82F6, #60A5FA)',
      }}
    />
  );
}

