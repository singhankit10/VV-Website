// src/components/ui/FloatingCTA.js
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after a short delay
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTransformation = () => {
    const section = document.getElementById('transformation');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-8 right-8 z-50 group"
        >
          {/* Pulsing ring effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF3B30] to-[#FF2D92] opacity-75 blur-xl animate-pulse" />
          
          {/* Outer glow ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#FF3B30]"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />

          {/* Main button - Desktop */}
          <button
            onClick={scrollToTransformation}
            className="hidden md:flex relative items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#FF3B30] to-[#FF2D92] rounded-full shadow-2xl shadow-primary/50 hover:shadow-primary/70 transition-all duration-300 group-hover:scale-105"
          >
            {/* Icon */}
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </motion.div>

            {/* Text */}
            <div className="text-left">
              <div className="text-white font-bold text-sm leading-tight whitespace-nowrap">
                See Results
              </div>
              <div className="text-white/90 text-xs font-medium">
                30% Revenue Lift
              </div>
            </div>
          </button>

          {/* Mobile version - icon only */}
          <button
            onClick={scrollToTransformation}
            className="md:hidden relative w-16 h-16 bg-gradient-to-r from-[#FF3B30] to-[#FF2D92] rounded-full shadow-2xl shadow-primary/50 hover:shadow-primary/70 transition-all duration-300 group-hover:scale-105 flex items-center justify-center"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </motion.div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}