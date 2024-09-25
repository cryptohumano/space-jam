// src/components/AnimatedSection.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className, style }) => {
  return (
    <motion.section
      className={className}
      style={style}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;