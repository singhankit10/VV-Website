// src/components/sections/ProblemStory.js
'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from '@/lib/animations/gsapConfig';

export default function ProblemStory() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animations
      gsap.from('.problem-badge', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.problem-section',
          start: 'top 70%',
          once: true,
        },
      });

      gsap.from('.problem-headline span', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.problem-headline',
          start: 'top 75%',
          once: true,
        },
      });

      gsap.from('.problem-subtitle', {
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.problem-subtitle',
          start: 'top 80%',
          once: true,
        },
      });

      // Split panels slide in
      gsap.from('.split-left', {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.split-container',
          start: 'top 70%',
          once: true,
        },
      });

      gsap.from('.split-right', {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.split-container',
          start: 'top 70%',
          once: true,
        },
      });

      // Divider slides down
      gsap.from('.divider-line', {
        scaleY: 0,
        duration: 1.2,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '.split-container',
          start: 'top 70%',
          once: true,
        },
      });

      // VV badge fades in
      gsap.from('.vv-badge', {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: 'back.out(2)',
        scrollTrigger: {
          trigger: '.vv-badge',
          start: 'top 80%',
          once: true,
        },
      });

      // Feature items stagger
      gsap.from('.feature-row', {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.features-list',
          start: 'top 75%',
          once: true,
        },
      });

      // Animated inequality bars
      gsap.from('.inequality-bar-left', {
        width: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.inequality-visual',
          start: 'top 80%',
          once: true,
        },
      });

      gsap.from('.inequality-bar-right', {
        width: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.inequality-visual',
          start: 'top 80%',
          once: true,
        },
      });

      // Stats banner
      gsap.from('.stat-card', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.stats-banner',
          start: 'top 80%',
          once: true,
        },
      });

      // Pulsing warning icons
      gsap.to('.warning-icon', {
        scale: 1.2,
        opacity: 0.6,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      social: { text: 'Every post is ad inventory', metric: '100%' },
      tv: { text: 'Fixed ad breaks only', metric: '~8 min' },
    },
    {
      social: { text: 'Instant purchase path', metric: '<1s' },
      tv: { text: 'No direct purchase path', metric: '0%' },
    },
    {
      social: { text: 'Real-time optimization', metric: 'Live' },
      tv: { text: 'Weeks/months of planning', metric: '30+ days' },
    },
    {
      social: { text: 'Frame-level attribution', metric: 'Precise' },
      tv: { text: 'Show-level attribution', metric: 'Rough' },
    },
  ];

  return (
    <section ref={sectionRef} className="problem-section relative pt-16 md:pt-24 pb-8 md:pb-2 bg-[#0a0a0a] overflow-hidden">
      {/* Minimal background */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(236,72,153,0.1),transparent_50%)]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Stats Banner - MOVED TO TOP */}
        <div className="stats-banner max-w-6xl mx-auto mb-16 md:mb-20">
          {/* Header */}
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-3">
              We level the playing field
            </h3>
            <p className="text-base md:text-lg text-gray-400">
              TV gets what social media has, finally
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <motion.div
              className="stat-card text-center p-8 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 rounded-2xl group hover:border-primary/30 transition-colors"
              whileHover={{ y: -5 }}
            >
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-br from-primary to-pink-500 bg-clip-text text-transparent mb-3">
                $824B
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold">
                Video Commerce Market
              </div>
            </motion.div>

            <motion.div
              className="stat-card text-center p-8 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 rounded-2xl group hover:border-primary/30 transition-colors"
              whileHover={{ y: -5 }}
            >
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-br from-primary to-pink-500 bg-clip-text text-transparent mb-3">
                79%
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold">
                Want In-Video Shopping
              </div>
            </motion.div>

            <motion.div
              className="stat-card text-center p-8 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 rounded-2xl group hover:border-primary/30 transition-colors"
              whileHover={{ y: -5 }}
            >
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-br from-primary to-pink-500 bg-clip-text text-transparent mb-3">
                68%
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold">
                Skip Traditional Ads
              </div>
            </motion.div>
          </div>
        </div>

        {/* Header - COMPACT */}
        <div className="text-center mb-12 md:mb-16">
          {/* <motion.div
            className="problem-badge inline-block mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <div className="px-6 py-2 bg-gradient-to-r from-primary/20 to-pink-500/20 border border-primary/30 rounded-full">
              <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-white">
                The $824B Problem
              </span>
            </div>
          </motion.div> */}

          <div className="problem-headline mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-snug">
              <span className="block text-white">Social media won</span>
              <span className="block bg-gradient-to-r from-pink-500 via-pink-400 to-purple-500 bg-clip-text text-transparent pb-2">
                TV got left behind
              </span>
            </h2>
          </div>

          <p className="problem-subtitle text-base md:text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
            26 billion hours watched monthly. Zero commerce paths. 1.4 billion SVOD subscribers with no way to buy what they see.
          </p>
        </div>

        {/* Split Screen Container - COMPACT */}
        <div className="split-container max-w-7xl mx-auto relative mb-12 md:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[500px]">
            
            {/* LEFT PANEL - Social Media (Teal) */}
            <div className="split-left relative bg-gradient-to-br from-[#0a3d3d] to-[#051f1f] p-8 md:p-10 lg:p-12">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cyan-950/20 pointer-events-none" />
              
              {/* Success indicator graphic */}
              <div className="absolute top-4 right-4 opacity-20">
                <svg className="w-24 h-24 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              
              <div className="relative z-10">
                {/* Title */}
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                    Social Media
                  </h3>
                  <div className="h-[1px] w-20 bg-cyan-400/40" />
                </div>

                {/* Badge */}
                <div className="mb-8">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-cyan-400/80 font-semibold">
                    Full Commerce Power
                  </span>
                </div>

                {/* Features List */}
                <div className="features-list space-y-6">
                  {features.map((feature, index) => (
                    <div key={index} className="feature-row">
                      <div className="flex items-baseline justify-between gap-4 pb-5 border-b border-white/5">
                        <span className="text-white/90 text-sm md:text-base font-light leading-relaxed">
                          {feature.social.text}
                        </span>
                        <span className="text-cyan-400 text-xs font-mono font-semibold whitespace-nowrap">
                          {feature.social.metric}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Left side of inequality visual */}
              <div className="absolute bottom-4 left-4 right-4 inequality-visual">
                <div className="flex items-center gap-2">
                  <div className="inequality-bar-left h-2 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full" style={{ width: '100%' }} />
                  <span className="text-cyan-400 text-xs font-bold">100%</span>
                </div>
              </div>
            </div>

            {/* RIGHT PANEL - TV/OTT (Purple) */}
            <div className="split-right relative bg-gradient-to-br from-[#2d1a3d] to-[#1a0f26] p-8 md:p-10 lg:p-12">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-purple-950/20 pointer-events-none" />
              
              {/* Warning indicator graphics */}
              <div className="absolute top-4 right-4 opacity-10">
                <svg className="warning-icon w-24 h-24 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16h2v2h-2v-2zm0-6h2v4h-2v-4z"/>
                </svg>
              </div>
              
              <div className="relative z-10">
                {/* Title */}
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                    TV / OTT
                  </h3>
                  <div className="h-[1px] w-20 bg-pink-400/40" />
                </div>

                {/* Badge */}
                <div className="mb-8">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-pink-400/80 font-semibold">
                    Limited Today
                  </span>
                </div>

                {/* Limitations List */}
                <div className="features-list space-y-6">
                  {features.map((feature, index) => (
                    <div key={index} className="feature-row">
                      <div className="flex items-baseline justify-between gap-4 pb-5 border-b border-white/5">
                        <span className="text-white/50 text-sm md:text-base font-light leading-relaxed line-through decoration-pink-500/40">
                          {feature.tv.text}
                        </span>
                        <span className="text-pink-400/70 text-xs font-mono font-semibold whitespace-nowrap">
                          {feature.tv.metric}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side of inequality visual */}
              <div className="absolute bottom-4 left-4 right-4 inequality-visual">
                <div className="flex items-center gap-2">
                  <div className="inequality-bar-right h-2 bg-gradient-to-r from-pink-500/40 to-pink-600/40 rounded-full" style={{ width: '30%' }} />
                  <span className="text-pink-400/70 text-xs font-bold">30%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Center Divider with VV Badge */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 hidden lg:flex items-center justify-center pointer-events-none">
            {/* Vertical line */}
            <div className="divider-line absolute inset-y-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent origin-top" />
            
            {/* VV Badge */}
            <motion.div
              className="vv-badge relative z-20 w-16 h-16 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-xl border border-white/20 flex items-center justify-center pointer-events-auto"
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-lg font-black bg-gradient-to-br from-pink-400 to-purple-400 bg-clip-text text-transparent">
                VV
              </span>
            </motion.div>

            {/* Small label below badge */}
            <div className="absolute top-[calc(50%+40px)] left-1/2 -translate-x-1/2 px-2.5 py-1 bg-black/60 backdrop-blur-sm border border-white/10 rounded-full">
              <span className="text-[9px] uppercase tracking-wider text-gray-400 font-semibold whitespace-nowrap">
                We bridge this gap
              </span>
            </div>
          </div>
        </div>

        {/* Mobile VV Badge */}
        <div className="lg:hidden flex justify-center">
          <div className="px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-white/20 rounded-full flex items-center gap-3">
            <span className="text-lg font-black bg-gradient-to-br from-pink-400 to-purple-400 bg-clip-text text-transparent">
              VV
            </span>
            <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
              We bridge this gap
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}