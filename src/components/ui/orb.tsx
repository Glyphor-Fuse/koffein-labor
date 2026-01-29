import React from 'react';
import { motion } from 'framer-motion';

interface OrbProps {
  className?: string;
  color?: string;
}

export const Orb = ({ className = "", color = "hsl(var(--accent))" }: OrbProps) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0.3 }}
      animate={{ 
        scale: [0.8, 1.1, 0.8],
        opacity: [0.3, 0.6, 0.3],
        x: [0, 20, 0],
        y: [0, -20, 0]
      }}
      transition={{ 
        duration: 8, 
        repeat: Infinity,
        ease: "easeInOut" 
      }}
      className={`absolute rounded-full blur-[80px] pointer-events-none ${className}`}
      style={{ 
        backgroundColor: color,
        width: '300px',
        height: '300px'
      }}
    />
  );
};
