import React from 'react';
import { motion } from 'framer-motion';
import { useScrollProgress } from '@/hooks/useAnimations';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2.5px] z-[100] origin-left bg-[#68F795]"
      style={{
        scaleX: progress,
        boxShadow: '0 0 10px rgba(104, 247, 149, 0.6)',
      }}
      aria-hidden="true"
    />
  );
}
