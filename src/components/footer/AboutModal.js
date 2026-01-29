// src/components/footer/AboutModal.js
'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AboutModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const stats = [
    { value: '$824B', label: 'Video Commerce Market' },
    { value: '30%+', label: 'Average Revenue Lift' },
    { value: '48-72h', label: 'Integration Time' },
  ];

  const values = [
    {
      icon: '🚀',
      title: 'Innovation First',
      description: 'Pushing boundaries in video commerce technology',
    },
    {
      icon: '🤝',
      title: 'Partnership Focused',
      description: 'Your success is our success',
    },
    {
      icon: '⚡',
      title: 'Speed to Market',
      description: 'Live in days, not months',
    },
    {
      icon: '🔒',
      title: 'Enterprise Ready',
      description: 'SOC 2 certified security and compliance',
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div 
            className="fixed inset-0 z-50 overflow-y-auto"
            onWheel={(e) => e.stopPropagation()}
          >
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.2 }}
                className="relative w-full max-w-4xl"
                onClick={(e) => e.stopPropagation()}
                onWheel={(e) => e.stopPropagation()}
              >
                {/* Modal Container */}
                <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border border-white/10 rounded-3xl shadow-2xl">
                  
                  {/* Header */}
                  <div className="relative px-8 pt-8 pb-6 border-b border-white/10">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"></div>
                    
                    {/* Close Button */}
                    <button
                      onClick={onClose}
                      className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-gray-400 hover:text-white z-10"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>

                    {/* Title */}
                    <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-4">
                      <span className="text-indigo-400 text-xs font-semibold uppercase tracking-wider">About Us</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
                      Transforming Video Into Commerce
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base">
                      Bringing social media&apos;s commerce power to TV and streaming
                    </p>
                  </div>

                  {/* Content - Scrollable */}
                  <div className="px-8 py-8 max-h-[60vh] overflow-y-auto">
                    {/* Mission */}
                    <div className="mb-10">
                      <h3 className="text-2xl font-black text-white mb-4">Our Mission</h3>
                      <p className="text-lg text-gray-300 leading-relaxed mb-4">
                        VideoVogue is the commerce layer for TV and OTT platforms. We give streaming services, broadcasters, and content creators the same powerful commerce tools that Instagram and TikTok have — making every frame shoppable.
                      </p>
                      <p className="text-base text-gray-400 leading-relaxed">
                        Founded by ex-Google engineers and Strathclyde alumni, we&apos;re building the infrastructure that transforms passive viewing into active revenue streams.
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6 mb-10">
                      {stats.map((stat, index) => (
                        <div key={index} className="text-center p-4 bg-white/[0.03] border border-white/10 rounded-xl">
                          <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                            {stat.value}
                          </div>
                          <div className="text-xs text-gray-400 uppercase tracking-wider">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Values */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-black text-white mb-6">What Drives Us</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {values.map((value, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-4 p-4 bg-white/[0.03] border border-white/10 rounded-xl"
                          >
                            <div className="text-4xl flex-shrink-0">
                              {value.icon}
                            </div>
                            <div>
                              <h4 className="text-base font-bold text-white mb-1">
                                {value.title}
                              </h4>
                              <p className="text-sm text-gray-400">
                                {value.description}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Location */}
                    <div className="border-t border-white/10 pt-8">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-white mb-2">Headquartered in Delaware</h4>
                          <p className="text-sm text-gray-400 leading-relaxed">
                            131 Continental Drive, Newark, Delaware 19713, United States
                          </p>
                          <div className="flex items-center gap-4 mt-4">
                            <a href="tel:+14086340911" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                              +1 (408) 634-0911
                            </a>
                            <span className="text-gray-600">•</span>
                            <a href="mailto:Contact@videovogue.ai" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                              Contact@videovogue.ai
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer CTA */}
                  <div className="px-8 py-6 border-t border-white/10 bg-white/[0.02]">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                      <div>
                        <p className="text-white font-semibold text-lg mb-1">
                          Ready to work with us?
                        </p>
                        <p className="text-gray-400 text-sm">
                          Let&apos;s transform your platform together
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          onClose();
                          setTimeout(() => {
                            const demoSection = document.getElementById('demo');
                            if (demoSection) {
                              demoSection.scrollIntoView({ behavior: 'smooth' });
                            }
                          }, 300);
                        }}
                        className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all whitespace-nowrap"
                      >
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}