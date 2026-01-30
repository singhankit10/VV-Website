// src/components/sections/SuccessStories.js
'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from '@/lib/animations/gsapConfig';

export default function SuccessStories() {
  const sectionRef = useRef(null);

  const stories = [
    {
      company: 'Leading OTT Platform',
      industry: 'Entertainment & Streaming',
      location: 'India',
      primaryMetric: { value: '34%', label: 'Revenue Lift' },
      secondaryMetrics: [
        { value: '4 Days', label: 'to Launch' },
        { value: '3.2x', label: 'Conversion' },
      ],
      quote: 'This changed our entire monetization strategy. We saw results within the first week.',
      role: 'VP Digital Products',
      accentColor: 'cyan',
    },
    {
      company: 'Fortune 500 Media',
      industry: 'Media & Entertainment',
      location: 'Global',
      primaryMetric: { value: '28%', label: 'Engagement' },
      secondaryMetrics: [
        { value: '2M+', label: 'Transactions' },
        { value: '15%', label: 'Retention' },
      ],
      quote: 'Seamless integration, immediate results. Our viewers love the non-intrusive shopping experience.',
      role: 'Head of Digital Innovation',
      accentColor: 'blue',
    },
    {
      company: 'Global Fashion Retailer',
      industry: 'Fashion & Retail',
      location: 'Europe',
      primaryMetric: { value: '42%', label: 'Add-to-Cart' },
      secondaryMetrics: [
        { value: '3.2x', label: 'vs Ads' },
        { value: '89%', label: 'Satisfaction' },
      ],
      quote: "Finally, commerce that doesn't interrupt content. This is the future of shoppable media.",
      role: 'Chief Digital Officer',
      accentColor: 'purple',
    },
    {
      company: 'Regional Sports Network',
      industry: 'Sports & Entertainment',
      location: 'North America',
      primaryMetric: { value: '51%', label: 'Ad Revenue' },
      secondaryMetrics: [
        { value: '6 Weeks', label: 'Deployment' },
        { value: '2.8x', label: 'CTR' },
      ],
      quote: "Our sponsors are thrilled. We've unlocked a revenue stream we didn't know existed.",
      role: 'VP Revenue Operations',
      accentColor: 'pink',
    },
  ];

  const getAccentColors = (color) => {
    const colors = {
      cyan: {
        border: 'border-cyan-500/30',
        bg: 'bg-cyan-500/10',
        text: 'text-cyan-400',
        glow: 'shadow-cyan-500/20',
      },
      blue: {
        border: 'border-blue-500/30',
        bg: 'bg-blue-500/10',
        text: 'text-blue-400',
        glow: 'shadow-blue-500/20',
      },
      purple: {
        border: 'border-purple-500/30',
        bg: 'bg-purple-500/10',
        text: 'text-purple-400',
        glow: 'shadow-purple-500/20',
      },
      pink: {
        border: 'border-pink-500/30',
        bg: 'bg-pink-500/10',
        text: 'text-pink-400',
        glow: 'shadow-pink-500/20',
      },
    };
    return colors[color] || colors.cyan;
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.stories-header', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.stories-section',
          start: 'top 70%',
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="stories-section pt-12 md:pt-16 pb-20 md:pb-28 relative bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.02),transparent_70%)]" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="stories-header text-center mb-16 container-custom">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-6 py-3 bg-cyan-500/10 rounded-full mb-4 border border-cyan-500/20"
          >
            <span className="text-sm font-bold text-cyan-400 uppercase tracking-wider">
              Success Stories
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5 tracking-tight">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Real platforms, real results, real transformation
          </p>
        </div>

        {/* Infinite Scrolling Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            {/* Continuous scrolling container */}
            <motion.div
              className="flex gap-6"
              animate={{
                x: [0, -1704],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 30,
                  ease: 'linear',
                },
              }}
            >
              {/* Duplicate stories for seamless infinite loop */}
              {[...stories, ...stories, ...stories].map((story, index) => {
                const colors = getAccentColors(story.accentColor);
                
                return (
                  <div
                    key={index}
                    className="flex-shrink-0 h-full"
                    style={{ width: '420px' }}
                  >
                    <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.03] backdrop-blur-sm border border-white/[0.12] rounded-2xl overflow-hidden group hover:border-white/[0.2] transition-all duration-500 h-full">
                      {/* No header - starts directly with content */}
                      <div className="p-8">
                        {/* Company Info - Top of card */}
                        <div className="mb-6">
                          <div className="text-[10px] uppercase tracking-wider text-gray-500 mb-3">
                            {story.industry} • {story.location}
                          </div>
                          <h3 className="text-2xl font-bold text-white leading-tight mb-6">
                            {story.company}
                          </h3>

                          {/* Primary Metric - Redesigned */}
                          <div className={`relative border-2 ${colors.border} ${colors.bg} rounded-xl p-5 ${colors.glow} shadow-lg`}>
                            <div className="flex items-baseline justify-between">
                              <div>
                                <div className={`text-5xl font-black ${colors.text} leading-none mb-2`}>
                                  {story.primaryMetric.value}
                                </div>
                                <div className="text-xs text-gray-400 uppercase tracking-wider">
                                  {story.primaryMetric.label}
                                </div>
                              </div>
                              {/* Decorative icon */}
                              <div className={`w-12 h-12 rounded-lg ${colors.bg} border ${colors.border} flex items-center justify-center`}>
                                <svg className={`w-6 h-6 ${colors.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                              </div>
                            </div>
                            {/* Bottom accent line */}
                            <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-${story.accentColor}-500 to-transparent`} />
                          </div>
                        </div>

                        {/* Quote */}
                        <div className="mb-6 pb-6 border-b border-white/[0.1]">
                          <p className="text-sm text-white/90 leading-relaxed mb-3">
                            {story.quote}
                          </p>
                          <div className={`text-xs ${colors.text} font-medium`}>
                            — {story.role}
                          </div>
                        </div>

                        {/* Secondary Metrics */}
                        <div className="grid grid-cols-2 gap-6">
                          {story.secondaryMetrics.map((metric, metricIndex) => (
                            <div key={metricIndex}>
                              <div className="text-xl font-bold text-white mb-1">
                                {metric.value}
                              </div>
                              <div className="text-[10px] text-gray-500 uppercase tracking-wide">
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom accent line matching card color */}
                      <div className={`h-[2px] bg-gradient-to-r from-transparent via-${story.accentColor}-500 to-transparent`} />
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Fade edges for billboard effect */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />
        </div>

        {/* Bottom Statement */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            These arent projections—theyre proven results from real platforms using VideoVogue
          </p>
        </motion.div> */}
      </div>
    </section>
  );
}