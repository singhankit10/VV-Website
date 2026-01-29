// src/components/footer/FeaturesModal.js
'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FeaturesModal({ isOpen, onClose }) {
  const [activeCategory, setActiveCategory] = useState('all');

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

  const categories = [
    { id: 'all', label: 'All Features' },
    { id: 'ai', label: 'AI & Automation' },
    { id: 'commerce', label: 'Commerce' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'security', label: 'Security' },
  ];

  const features = [
    {
      category: 'ai',
      title: 'AI Product Tagging',
      description: 'Automatically identify and catalog products in your video content using advanced computer vision.',
      stats: '68% faster cataloging',
      icon: '🏷️',
    },
    {
      category: 'commerce',
      title: 'Virtual Product Placement',
      description: 'Transform any scene into a shopping moment with dynamic, non-intrusive product overlays.',
      stats: '30%+ conversion boost',
      icon: '🎯',
    },
    {
      category: 'commerce',
      title: 'Multi-Platform Integration',
      description: 'Seamlessly connect with Shopify, WooCommerce, Amazon, and 50+ e-commerce platforms.',
      stats: '50+ platforms supported',
      icon: '🔗',
    },
    {
      category: 'commerce',
      title: 'Inventory Management',
      description: 'Centralized dashboard for campaigns, partnerships, and shoppable content.',
      stats: 'Complete campaign control',
      icon: '📦',
    },
    {
      category: 'analytics',
      title: 'Real-Time Analytics',
      description: 'Track viewer engagement, product interactions, and conversions as they happen.',
      stats: 'Frame-level tracking',
      icon: '📊',
    },
    {
      category: 'analytics',
      title: 'Attribution Modeling',
      description: 'Understand the complete customer journey from view to purchase.',
      stats: 'Multi-touch attribution',
      icon: '🎯',
    },
    {
      category: 'security',
      title: 'Copyright Protection',
      description: 'Built-in safeguards to protect intellectual property and ensure brand safety.',
      stats: 'Automated monitoring',
      icon: '🛡️',
    },
    {
      category: 'security',
      title: 'Enterprise Security',
      description: 'SOC 2 certified infrastructure with enterprise-grade security.',
      stats: 'SOC 2 Type II certified',
      icon: '🔒',
    },
    {
      category: 'ai',
      title: 'Smart Scene Detection',
      description: 'AI-powered analysis to identify optimal moments for product placement.',
      stats: 'Context-aware timing',
      icon: '👁️',
    },
    {
      category: 'ai',
      title: 'Predictive Recommendations',
      description: 'Machine learning suggests products based on viewer behavior.',
      stats: '2.8x higher engagement',
      icon: '💡',
    },
    {
      category: 'commerce',
      title: 'One-Click Checkout',
      description: 'Frictionless purchasing without leaving the video player.',
      stats: '40% less abandonment',
      icon: '💳',
    },
    {
      category: 'analytics',
      title: 'A/B Testing Suite',
      description: 'Optimize placement, timing, and design with comprehensive testing.',
      stats: 'Multivariate testing',
      icon: '🧪',
    },
  ];

  const filteredFeatures = activeCategory === 'all' 
    ? features 
    : features.filter(f => f.category === activeCategory);

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

          {/* Modal - Prevent background scroll */}
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
                  className="relative w-full max-w-7xl my-8"
                  onClick={(e) => e.stopPropagation()}
                  onWheel={(e) => e.stopPropagation()}
                >
                {/* Modal Container */}
                <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border border-white/10 rounded-3xl shadow-2xl">
                  
                  {/* Header - Fixed at top */}
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
                    <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
                      <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">Full Feature Suite</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
                      Everything You Need to Monetize Video Content
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base">
                      From AI-powered product tagging to enterprise-grade security
                    </p>
                  </div>

                  {/* Category Filter - Fixed below header */}
                  <div className="px-8 py-6 border-b border-white/10 bg-white/[0.02]">
                    <div className="flex flex-wrap gap-3">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => setActiveCategory(category.id)}
                          className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${
                            activeCategory === category.id
                              ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                              : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                          }`}
                        >
                          {category.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Scrollable Content Area */}
                  <div className="px-8 py-8 max-h-[50vh] overflow-y-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredFeatures.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-white/20 hover:bg-white/[0.05] transition-all"
                        >
                          <div className="text-3xl mb-3">{feature.icon}</div>
                          
                          <h3 className="text-lg font-bold text-white mb-2">
                            {feature.title}
                          </h3>
                          
                          <p className="text-gray-400 text-sm leading-relaxed mb-3">
                            {feature.description}
                          </p>

                          <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
                            <span className="text-xs font-semibold text-cyan-400">
                              {feature.stats}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Footer CTA - Fixed at bottom */}
                  <div className="px-8 py-6 border-t border-white/10 bg-white/[0.02]">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                      <div>
                        <p className="text-white font-semibold text-lg mb-1">
                          Ready to get started?
                        </p>
                        <p className="text-gray-400 text-sm">
                          See all features in action with a personalized demo
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
                        Schedule Demo
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