// src/components/sections/TrustBanner.js
'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from '@/lib/animations/gsapConfig';

export default function TrustBanner() {
  const sectionRef = useRef(null);

  const clients = [
    { title: 'Tier-1 Broadcaster', status: 'In Pilot', color: '#6366F1' },
    { title: 'Top Streaming Platforms', status: 'Partnership', color: '#EC4899' },
    { title: 'Global CPG Brand', status: 'Integration', color: '#F59E0B' },
    { title: 'Regional OTT Leader', status: 'In Contract', color: '#10B981' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger items with subtle movement
      gsap.from('.trust-item', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.trust-grid',
          start: 'top 85%',
          once: true,
        },
      });

      // Credentials fade in
      gsap.from('.cred-item', {
        opacity: 0,
        y: 10,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.credentials',
          start: 'top 90%',
          once: true,
        },
      });

      // Floating animation for status dots
      gsap.to('.status-dot', {
        scale: 1.2,
        opacity: 0.7,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: {
          each: 0.3,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="trust-section relative py-8 md:py-10 bg-[#0a0a0a] border-y border-white/[0.06] overflow-hidden"
    >
      {/* Subtle pulse effect */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Subtle radial gradient */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,59,48,0.15),transparent_60%)]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Grid with enhanced effects */}
        <div className="trust-grid max-w-6xl mx-auto mb-8 md:mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-gradient-to-r from-white/[0.03] via-white/[0.06] to-white/[0.03] p-[1px] rounded-lg overflow-hidden">
            {clients.map((client, index) => (
              <motion.div
                key={client.title}
                className="trust-item relative group bg-[#0a0a0a] p-6 md:p-8 overflow-hidden"
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.015)' }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow effect on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${client.color}08, transparent 70%)`
                  }}
                />

                {/* Status indicator with pulsing dot */}
                <div className="flex items-center gap-2.5 mb-5 relative z-10">
                  <div className="relative">
                    <div 
                      className="status-dot w-2 h-2 rounded-full"
                      style={{ 
                        backgroundColor: client.color,
                        boxShadow: `0 0 12px ${client.color}80, 0 0 24px ${client.color}40`
                      }}
                    />
                    {/* Outer ring animation */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2"
                      style={{ borderColor: client.color }}
                      animate={{
                        scale: [1, 1.8, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeOut',
                      }}
                    />
                  </div>
                  <span 
                    className="text-[10px] md:text-xs font-semibold uppercase tracking-wider"
                    style={{ color: client.color }}
                  >
                    {client.status}
                  </span>
                </div>

                {/* Title with subtle gradient on hover */}
                <h3 className="text-sm md:text-base font-medium text-white/90 group-hover:text-white leading-snug transition-colors duration-300 relative z-10">
                  {client.title}
                </h3>

                {/* Animated bottom accent */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-[2px]"
                  style={{ 
                    background: `linear-gradient(90deg, transparent, ${client.color}, transparent)`
                  }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Corner accent */}
                <div 
                  className="absolute top-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at top right, ${client.color}15, transparent 70%)`
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced credentials with subtle effects */}
        <div className="credentials flex flex-wrap items-center justify-center gap-6 md:gap-10">
          <motion.div 
            className="cred-item flex items-center gap-2.5 group"
            whileHover={{ x: 2 }}
            transition={{ duration: 0.2 }}
          >
            <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
            <span className="text-sm text-gray-500 group-hover:text-gray-400 font-medium transition-colors">
              Strathclyde Alumni
            </span>
            <motion.div 
              className="w-1 h-1 rounded-full bg-cyan-500/50"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          <div className="hidden md:block w-[1px] h-4 bg-white/5" />

          <motion.div 
            className="cred-item flex items-center gap-2.5 group"
            whileHover={{ x: 2 }}
            transition={{ duration: 0.2 }}
          >
            <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-sm text-gray-500 group-hover:text-gray-400 font-medium transition-colors">
              Ex-Google Team
            </span>
            <motion.div 
              className="w-1 h-1 rounded-full bg-cyan-500/50"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            />
          </motion.div>

          <div className="hidden md:block w-[1px] h-4 bg-white/5" />

          <motion.div 
            className="cred-item flex items-center gap-2.5 group"
            whileHover={{ x: 2 }}
            transition={{ duration: 0.2 }}
          >
            <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm text-gray-500 group-hover:text-gray-400 font-medium transition-colors">
              Delaware, USA
            </span>
            <motion.div 
              className="w-1 h-1 rounded-full bg-cyan-500/50"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}