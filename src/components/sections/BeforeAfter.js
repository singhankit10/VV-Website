'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from '@/lib/animations/gsapConfig';
import Image from 'next/image';

export default function BeforeAfter() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.comparison-title', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.comparison-title',
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (moveEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = moveEvent.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section id="transformation" ref={sectionRef} className="section-padding relative bg-[#0a0a0a]">
      <div className="container-custom">
        {/* Title */}
        <div className="comparison-title mb-20 text-center">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight">
            The Transformation
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light">
            See how VideoVogue turns ordinary content into revenue-generating experiences
          </p>
        </div>

        {/* Before/After Slider */}
        <div className="max-w-6xl mx-auto">
          <div 
            ref={containerRef}
            className="relative aspect-video bg-[#1a1a1a] rounded-3xl overflow-hidden shadow-2xl cursor-ew-resize"
          >
            {/* After State - Base Layer */}
            <div className="absolute inset-0">
              <Image
                src="/images/after-videovogue.jpg"
                alt="Interactive video player with VideoVogue features"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Before State - Clipped Layer */}
            <motion.div 
              className="absolute inset-0"
              style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
            >
              <Image
                src="/images/before-videovogue.jpg"
                alt="Traditional video player before VideoVogue"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* After Label - Left Side */}
            {sliderPosition > 15 && (
              <div className="absolute top-8 left-8 bg-primary/90 backdrop-blur-sm px-6 py-3 rounded-full z-10 pointer-events-none">
                <span className="text-white font-bold text-lg uppercase tracking-wider">After</span>
              </div>
            )}

            {/* Before Label - Right Side */}
            {sliderPosition < 85 && (
              <div className="absolute top-8 right-8 bg-black/60 backdrop-blur-sm px-6 py-3 rounded-full z-10 pointer-events-none">
                <span className="text-white font-bold text-lg uppercase tracking-wider">Before</span>
              </div>
            )}

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-2xl"
              style={{ left: `${sliderPosition}%` }}
              onMouseDown={handleMouseDown}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center cursor-ew-resize hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <p className="text-center text-gray-400 mt-8 text-lg">
            ← Drag the slider to compare →
          </p>
        </div>
      </div>
    </section>
  );
}