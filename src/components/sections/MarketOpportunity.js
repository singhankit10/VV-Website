// src/components/sections/MarketOpportunity.js
'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from '@/lib/animations/gsapConfig';

export default function MarketOpportunity() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.market-number', {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.market-container',
          start: 'top 70%',
          once: true,
        },
      });

      gsap.from('.stat-card', {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.stats-grid',
          start: 'top 80%',
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: '$8.9B+', label: 'Monthly SVoD subscription revenue' },
    { value: '$1.4B+', label: 'Monthly SVoD ad spending' },
    { value: '26B Hrs', label: 'Content streamed monthly' },
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-24 relative bg-[#0a0a0a] overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.06),transparent_70%)]" />
      </div>

      <div className="container-custom market-container relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-6 py-3 bg-cyan-500/10 rounded-full mb-8 border border-cyan-500/20"
          >
            <span className="text-sm font-bold text-cyan-400 uppercase tracking-wider">
              The Opportunity
            </span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight tracking-tight">
              Unlock Scalable Revenue<br />Across Every Touchpoint
            </h2>
          </motion.div>

          {/* Giant Number - Compact */}
          <div className="market-number mb-8">
            <div className="text-[6rem] md:text-[10rem] lg:text-[14rem] font-black leading-none tracking-tighter">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                $824B+
              </span>
            </div>
            <p className="text-xl md:text-2xl text-gray-400 font-light mt-2 max-w-4xl mx-auto">
              in scalable revenue streams waiting to be unlocked
            </p>
          </div>

          {/* Bottom text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base text-gray-500 mt-4"
          >
            VideoVogue transforms these untapped opportunities into measurable revenue growth
          </motion.p>
        </div>
      </div>
    </section>
  );
}