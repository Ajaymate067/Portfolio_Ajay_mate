import React from 'react';
import { motion } from 'framer-motion';
import { useScrollProgress } from '@/hooks/useAnimations';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2.5px] z-[100] origin-left bg-[#FF453A]"
      style={{
        scaleX: progress,
        boxShadow: '0 0 12px rgba(255, 69, 58, 0.7)',
      }}
      aria-hidden="true"
    />
  );
}
