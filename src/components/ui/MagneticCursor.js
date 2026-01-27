'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function MagneticCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = (e) => {
      if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseout', handleMouseOut, true);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseout', handleMouseOut, true);
    };
  }, []);

  // Only show on desktop
  if (typeof window !== 'undefined' && window.innerWidth < 1024) {
    return null;
  }

  return (
    <>
      {/* Hide default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Custom cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHovering ? 2 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
        style={{
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div className="w-6 h-6 bg-white rounded-full" />
      </motion.div>
    </>
  );
}