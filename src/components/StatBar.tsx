import React from 'react';
import { motion } from 'framer-motion';

interface StatBarProps {
  label: string;          // Name of the stat (e.g., Strength, Speed)
  value: number;           // Percentage value (0-100)
  color?: string;          // Optional bar color, default is Marvel red
  delay?: number;          // Animation delay for staggered effect
}

export const StatBar: React.FC<StatBarProps> = ({ label, value, color = "bg-marvel-red", delay = 0 }) => {
  return (
    <div className="mb-4">

      {/* Label and Value */}
      <div className="flex justify-between mb-1">
        <span className="text-sm font-semibold uppercase tracking-wider text-marvel-light/80">{label}</span>
        <span className="text-sm font-bold text-marvel-light">{value}%</span>
      </div>

      {/* Animated Bar */}
      <div className="w-full bg-marvel-gray rounded-full h-2.5 overflow-hidden">
        <motion.div
          className={`h-2.5 rounded-full ${color}`}
          initial={{ width: 0 }}                     // start from 0 width
          whileInView={{ width: `${value}%` }}       // animate to value%
          viewport={{ once: true }}                  // animate once
          transition={{ duration: 1, delay: delay, ease: "easeOut" }} // smooth animation
        />
      </div>
    </div>
  );
};
