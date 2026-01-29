// src/components/sections/Hero.js
'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from '@/lib/animations/gsapConfig';
import Image from 'next/image';

export default function Hero() {
  const heroRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Only background elements have parallax, not content
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  // Generate particle positions once
  const [particles] = useState(() =>
    [...Array(30)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 1}px`,
      delay: `${Math.random() * 5}s`,
    }))
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Subtle gradient breathing
      gsap.to('.gradient-orb', {
        scale: 1.1,
        opacity: 0.4,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 2,
      });

      // Subtle text reveal - no crazy movements
      gsap.from('.hero-text-line', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2,
      });

      gsap.from('.hero-subtitle', {
        opacity: 0,
        duration: 0.8,
        delay: 0.8,
        ease: 'power2.out',
      });

      gsap.from('.hero-cta', {
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 1.2,
        ease: 'power2.out',
      });

      gsap.from('.hero-stat', {
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 1.5,
        ease: 'power2.out',
      });

      // Video container subtle reveal
      gsap.from('.video-container', {
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: 'power2.out',
      });

      // Very subtle particle float
      gsap.to('.particle', {
        y: '+=30',
        duration: 'random(20, 30)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: {
          each: 0.3,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handlePlayClick = () => {
    window.open('https://experience.videovogue.ai', '_blank');
  };

  const stats = [
    { value: '30%', label: 'REVENUE LIFT', color: 'from-cyan-400 to-blue-500' },
    { value: '4', label: 'DAYS TO INTEGRATE', color: 'from-[#FF3B9A] to-[#E91E63]' },
    { value: 'API', label: 'ENTERPRISE READY', color: 'from-[#A855F7] to-[#EC4899]' },
  ];

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background layer - only this moves with parallax */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0"
      >
        {/* Subtle gradient orbs */}
        <div className="absolute inset-0 opacity-20">
          <div className="gradient-orb absolute top-[20%] left-[15%] w-[500px] h-[500px] bg-gradient-to-br from-primary/40 to-transparent rounded-full blur-3xl" />
          <div className="gradient-orb absolute bottom-[20%] right-[15%] w-[600px] h-[600px] bg-gradient-to-br from-purple-500/30 to-transparent rounded-full blur-3xl" />
          <div className="gradient-orb absolute top-[50%] left-[50%] w-[400px] h-[400px] bg-gradient-to-br from-cyan-500/25 to-transparent rounded-full blur-3xl" />
        </div>

        {/* Floating particles - subtle */}
        <div className="absolute inset-0 opacity-30">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="particle absolute rounded-full bg-white"
              style={{
                left: particle.left,
                top: particle.top,
                width: particle.size,
                height: particle.size,
                animationDelay: particle.delay,
              }}
            />
          ))}
        </div>

        {/* Grid overlay - storytelling element */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* Diagonal lines - visual interest */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(135deg,transparent_49%,rgba(255,255,255,0.3)_49.5%,rgba(255,255,255,0.3)_50.5%,transparent_51%)] bg-[size:40px_40px]" />
        </div>
      </motion.div>

      {/* Content - NO parallax, stays fixed */}
      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left side - Content */}
          <div className="text-left">
            {/* Main headline - SMALLER */}
            <div className="mb-6 overflow-hidden">
              <div className="hero-text-line">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-1">
                  The Commerce Layer
                </h1>
              </div>
              <div className="hero-text-line">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1]">
                  <span className="bg-gradient-to-r from-[#C2185B] via-[#9C27B0] to-[#C2185B] bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
                    for TV & OTT
                  </span>
                </h1>
              </div>
            </div>

            {/* Subtitle - SMALLER */}
            <p className="hero-subtitle text-lg md:text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
              We give streaming platforms the same commerce power as Instagram and TikTok. 
              API-first infrastructure for the television ecosystem.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={handlePlayClick}
                className="hero-cta group relative px-7 py-3.5 bg-gradient-to-r from-[#FF3B30] to-[#FF2D92] text-white font-semibold rounded-full overflow-hidden hover:shadow-lg hover:shadow-primary/25 transition-shadow duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 text-sm">
                  See 30s Demo
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </span>
              </button>

              <button className="hero-cta px-7 py-3.5 border-2 border-white/20 text-white font-semibold rounded-full hover:border-white/40 hover:bg-white/5 transition-all duration-300 text-sm">
                Schedule Call
              </button>
            </div>

            {/* Stats - SMALLER */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="hero-stat text-center">
                  <div className={`text-3xl md:text-4xl font-black mb-1 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - GRAPHIC HEAVY Video Demo */}
          <div className="video-container relative">
            {/* Live demo badge */}
            <div className="absolute -top-3 -left-3 z-20 px-3 py-1.5 bg-red-500/20 backdrop-blur-md border border-red-500/30 rounded-full flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="text-xs font-bold text-white uppercase tracking-wider">Live Demo</span>
            </div>

            {/* Main video container */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-1 transition-transform duration-300 hover:scale-[1.02]">
              <div 
                onClick={handlePlayClick}
                className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl relative overflow-hidden group cursor-pointer"
              >
                
                {/* Thumbnail Image */}
                <div className="absolute inset-0">
                  <Image
                    src="/images/thumbnail.png"
                    alt="Video Demo"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Reduced opacity overlay */}
                  <div className="absolute inset-0 bg-black/30" />
                </div>

                {/* Background graphic elements - STORYTELLING */}
                <div className="absolute inset-0 opacity-10">
                  {/* Network nodes visualization */}
                  <svg className="w-full h-full" viewBox="0 0 800 450">
                    <defs>
                      <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FF3B30" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>
                    {/* Connection lines */}
                    <motion.line
                      x1="100" y1="100" x2="300" y2="200"
                      stroke="url(#line-gradient)"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                    <motion.line
                      x1="300" y1="200" x2="500" y2="150"
                      stroke="url(#line-gradient)"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 1.5 }}
                    />
                    <motion.line
                      x1="500" y1="150" x2="700" y2="250"
                      stroke="url(#line-gradient)"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 2 }}
                    />
                    {/* Nodes */}
                    <motion.circle
                      cx="100" cy="100" r="8"
                      fill="#FF3B30"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1 }}
                    />
                    <motion.circle
                      cx="300" cy="200" r="8"
                      fill="#FF2D92"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.5 }}
                    />
                    <motion.circle
                      cx="500" cy="150" r="8"
                      fill="#8B5CF6"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 2 }}
                    />
                    <motion.circle
                      cx="700" cy="250" r="8"
                      fill="#3B82F6"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 2.5 }}
                    />
                  </svg>
                </div>

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    className="w-16 h-16 rounded-full bg-gradient-to-r from-[#FF3B30] to-[#FF2D92] flex items-center justify-center shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-shadow duration-300"
                  >
                    <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                </div>

                {/* Interactive product tag */}
                {/* <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5 }}
                  className="absolute top-4 left-4 px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs font-semibold text-white">Wall</span>
                </motion.div> */}

                {/* Bottom instruction */}
                <div className="absolute bottom-6 left-0 right-0 text-center">
                  <p className="text-white text-sm font-medium">Click to experience</p>
                </div>
              </div>
            </div>

            {/* Floating graphic elements - HEAVY GRAPHICS, SUBTLE ANIMATION */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-4 top-1/4 w-24 h-24 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-lg"
            >
              <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </motion.div>

            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-4 bottom-1/4 w-20 h-20 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-lg"
            >
              <svg className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </motion.div>

            {/* Data visualization graphic - top right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2 }}
              className="absolute -top-8 right-12 w-32 h-16 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 rounded-lg p-2 shadow-lg"
            >
              <div className="flex items-end justify-between h-full gap-1">
                {[40, 60, 35, 80, 55, 70].map((height, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-primary to-accent-pink rounded-sm"
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ delay: 2 + i * 0.1, duration: 0.5 }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - subtle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-wider text-gray-600 font-semibold">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}