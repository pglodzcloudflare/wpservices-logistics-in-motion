import React from 'react';
import { motion } from 'framer-motion';
export const AnimatedLogisticsBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
      <svg
        className="w-full h-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Animated Logistics Routes */}
        <motion.path
          d="M-50,200 C200,100 400,300 600,200 S900,100 1050,250"
          fill="transparent"
          stroke="#1E3A8A"
          strokeWidth="2"
          strokeDasharray="10,10"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 0.3,
            strokeDashoffset: [0, -100]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "linear",
            opacity: { duration: 2 }
          }}
        />
        <motion.path
          d="M-100,600 C150,500 350,800 600,650 S850,500 1100,700"
          fill="transparent"
          stroke="#F97316"
          strokeWidth="1.5"
          strokeDasharray="8,8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 0.2,
            strokeDashoffset: [0, 100]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "linear",
            opacity: { duration: 2 }
          }}
        />
        {/* Floating Paper Airplane */}
        <motion.g
          animate={{
            x: [0, 1000],
            y: [300, 200, 400, 300],
            rotate: [0, -10, 10, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-logistics-navy"
        >
          <path
            d="M0,0 L20,10 L0,20 L5,10 Z"
            fill="currentColor"
            opacity="0.6"
          />
        </motion.g>
        {/* Sketched Clouds */}
        <motion.g
          initial={{ x: -100 }}
          animate={{ x: 1100 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="text-logistics-navy"
        >
          <circle cx="100" cy="150" r="30" fill="currentColor" opacity="0.1" />
          <circle cx="130" cy="150" r="40" fill="currentColor" opacity="0.1" />
          <circle cx="160" cy="150" r="30" fill="currentColor" opacity="0.1" />
        </motion.g>
        <motion.g
          initial={{ x: 1100 }}
          animate={{ x: -200 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="text-logistics-orange"
        >
          <circle cx="400" cy="750" r="20" fill="currentColor" opacity="0.05" />
          <circle cx="430" cy="750" r="25" fill="currentColor" opacity="0.05" />
          <circle cx="460" cy="750" r="20" fill="currentColor" opacity="0.05" />
        </motion.g>
      </svg>
    </div>
  );
};