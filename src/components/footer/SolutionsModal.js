// src/components/footer/SolutionsModal.js
'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SolutionsModal({ isOpen, onClose }) {
  const [activeSolution, setActiveSolution] = useState('streaming');

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

  const solutions = [
    {
      id: 'streaming',
      title: 'Streaming & OTT Platforms',
      tagline: 'Transform entertainment into commerce',
      icon: '📺',
      gradient: 'from-purple-500 to-pink-500',
      challenges: [
        'Limited monetization beyond subscriptions and ads',
        'Viewer engagement drops during ad breaks',
        'No direct path from content to purchase',
        'Difficulty measuring content ROI',
      ],
      solutions: [
        {
          title: 'In-Content Shopping',
          description: 'Turn every show, movie, and series into a shoppable experience without disrupting viewing.',
          benefit: '30%+ new revenue stream',
        },
        {
          title: 'Brand Partnership Platform',
          description: 'Monetize your content library through strategic product placements and brand collaborations.',
          benefit: 'Automated booking & attribution',
        },
        {
          title: 'Viewer Analytics',
          description: 'Understand what products resonate with your audience and optimize placement strategy.',
          benefit: 'Frame-level engagement data',
        },
      ],
      stats: {
        revenue: '30%+ revenue increase',
        retention: '2.8x higher engagement',
        integration: '48-72 hour setup',
      },
    },
    {
      id: 'broadcasters',
      title: 'TV Broadcasters',
      tagline: 'Modernize traditional TV commerce',
      icon: '📡',
      gradient: 'from-cyan-500 to-blue-500',
      challenges: [
        'Competing with digital-native platforms',
        'Declining traditional ad revenue',
        'Limited audience interaction capabilities',
        'Complex attribution across channels',
      ],
      solutions: [
        {
          title: 'Live Commerce Integration',
          description: 'Enable real-time shopping during live broadcasts and replays across all distribution channels.',
          benefit: 'Multi-platform sync',
        },
        {
          title: 'Second-Screen Activation',
          description: 'Drive mobile engagement while viewers watch on TV, creating seamless cross-device experiences.',
          benefit: 'QR code & deep linking',
        },
        {
          title: 'Ad Replacement Alternative',
          description: 'Generate revenue without disruptive ad breaks through native in-content commerce.',
          benefit: '40% less viewer drop-off',
        },
      ],
      stats: {
        revenue: '28% ad revenue boost',
        retention: '15% better retention',
        integration: 'Works with existing stack',
      },
    },
    {
      id: 'creators',
      title: 'Content Creators & Influencers',
      tagline: 'Monetize your audience directly',
      icon: '🎬',
      gradient: 'from-pink-500 to-red-500',
      challenges: [
        'Dependence on platform ad revenue',
        'Limited control over monetization',
        'Difficulty tracking affiliate conversions',
        'Time-consuming product integration',
      ],
      solutions: [
        {
          title: 'Automatic Product Tagging',
          description: 'AI identifies products in your videos and creates shoppable moments automatically.',
          benefit: '68% time saved',
        },
        {
          title: 'Multi-Platform Publishing',
          description: 'Deploy shoppable videos across YouTube, Instagram, TikTok, and your own site simultaneously.',
          benefit: 'One upload, everywhere',
        },
        {
          title: 'Creator Dashboard',
          description: 'Track revenue, engagement, and top-performing products across all your content.',
          benefit: 'Real-time earnings',
        },
      ],
      stats: {
        revenue: '3.2x affiliate revenue',
        retention: '5-10 min setup per video',
        integration: 'No coding required',
      },
    },
    {
      id: 'brands',
      title: 'Brands & Advertisers',
      tagline: 'Reach audiences in premium content',
      icon: '🏢',
      gradient: 'from-orange-500 to-yellow-500',
      challenges: [
        'Ad fatigue and banner blindness',
        'Poor attribution in video campaigns',
        'Limited inventory on premium content',
        'Difficulty measuring true ROI',
      ],
      solutions: [
        {
          title: 'Native Product Placement',
          description: 'Place products naturally within premium video content without disrupting the viewing experience.',
          benefit: 'Context-aware placement',
        },
        {
          title: 'Performance Marketing',
          description: 'Pay only for actual engagement and conversions, not just impressions.',
          benefit: 'CPA-based pricing available',
        },
        {
          title: 'Campaign Analytics',
          description: 'Track every interaction from view to purchase with complete attribution.',
          benefit: 'Full-funnel visibility',
        },
      ],
      stats: {
        revenue: '2.5x better ROAS',
        retention: '89% brand recall',
        integration: 'Self-serve platform',
      },
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce Platforms',
      tagline: 'Add video commerce to your store',
      icon: '🛍️',
      gradient: 'from-green-500 to-emerald-500',
      challenges: [
        'Low conversion from product pages',
        'High cart abandonment rates',
        'Difficulty showcasing products effectively',
        'Limited engagement on product pages',
      ],
      solutions: [
        {
          title: 'Shoppable Video Gallery',
          description: 'Transform product videos into interactive shopping experiences with one-click checkout.',
          benefit: 'Embedded on any page',
        },
        {
          title: 'User-Generated Content',
          description: 'Turn customer videos and reviews into shoppable content automatically.',
          benefit: '3x conversion boost',
        },
        {
          title: 'Live Shopping Events',
          description: 'Host live shopping streams with real-time product tagging and checkout.',
          benefit: 'Live QVC-style selling',
        },
      ],
      stats: {
        revenue: '40% higher conversion',
        retention: '60% less abandonment',
        integration: 'Shopify, WooCommerce, custom',
      },
    },
    {
      id: 'sports',
      title: 'Sports & Entertainment',
      tagline: 'Monetize live events and highlights',
      icon: '⚽',
      gradient: 'from-indigo-500 to-purple-500',
      challenges: [
        'Limited monetization during live events',
        'Sponsor visibility difficult to measure',
        'Missed revenue from highlight content',
        'Complex rights management',
      ],
      solutions: [
        {
          title: 'Live Event Commerce',
          description: 'Enable merchandise and sponsor product sales during live games and events.',
          benefit: 'Real-time sales spikes',
        },
        {
          title: 'Highlight Monetization',
          description: 'Automatically tag products in game highlights and viral moments.',
          benefit: 'Passive revenue from clips',
        },
        {
          title: 'Sponsor ROI Tracking',
          description: 'Prove sponsor value with detailed engagement and conversion metrics.',
          benefit: 'Increase sponsorship rates',
        },
      ],
      stats: {
        revenue: '51% sponsorship revenue',
        retention: '2.1x merchandise sales',
        integration: 'Works with existing broadcast',
      },
    },
  ];

  const currentSolution = solutions.find(s => s.id === activeSolution) || solutions[0];

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
                    <div className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
                      <span className="text-purple-400 text-xs font-semibold uppercase tracking-wider">Industry Solutions</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
                      Solutions Built for Your Industry
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base">
                      Tailored video commerce strategies for every platform type
                    </p>
                  </div>

                  {/* Solution Tabs - Scrollable horizontally on mobile */}
                  <div className="px-8 py-6 border-b border-white/10 bg-white/[0.02] overflow-x-auto">
                    <div className="flex gap-3 min-w-max">
                      {solutions.map((solution) => (
                        <button
                          key={solution.id}
                          onClick={() => setActiveSolution(solution.id)}
                          className={`px-5 py-3 rounded-xl font-semibold text-sm transition-all whitespace-nowrap ${
                            activeSolution === solution.id
                              ? `bg-gradient-to-r ${solution.gradient} text-white shadow-lg`
                              : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                          }`}
                        >
                          <span className="mr-2">{solution.icon}</span>
                          {solution.title}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Scrollable Content Area */}
                  <div className="px-8 py-8 max-h-[50vh] overflow-y-auto">
                    <motion.div
                      key={activeSolution}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Solution Header */}
                      <div className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`text-6xl w-20 h-20 rounded-2xl bg-gradient-to-br ${currentSolution.gradient} flex items-center justify-center`}>
                            {currentSolution.icon}
                          </div>
                          <div>
                            <h3 className="text-3xl font-black text-white mb-1">
                              {currentSolution.title}
                            </h3>
                            <p className="text-lg text-gray-400">
                              {currentSolution.tagline}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Stats Bar */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        <div className={`p-4 rounded-xl bg-gradient-to-br ${currentSolution.gradient} bg-opacity-10 border border-white/10`}>
                          <div className="text-2xl font-black text-white mb-1">
                            {currentSolution.stats.revenue}
                          </div>
                          <div className="text-xs text-white uppercase tracking-wider">
                            Revenue Impact
                          </div>
                        </div>
                        <div className={`p-4 rounded-xl bg-gradient-to-br ${currentSolution.gradient} bg-opacity-10 border border-white/10`}>
                          <div className="text-2xl font-black text-white mb-1">
                            {currentSolution.stats.retention}
                          </div>
                          <div className="text-xs text-white uppercase tracking-wider">
                            Performance
                          </div>
                        </div>
                        <div className={`p-4 rounded-xl bg-gradient-to-br ${currentSolution.gradient} bg-opacity-10 border border-white/10`}>
                          <div className="text-2xl font-black text-white mb-1">
                            {currentSolution.stats.integration}
                          </div>
                          <div className="text-xs text-white uppercase tracking-wider">
                            Integration
                          </div>
                        </div>
                      </div>

                      {/* Challenges */}
                      <div className="mb-8">
                        <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                          <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                          Common Challenges
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {currentSolution.challenges.map((challenge, index) => (
                            <div key={index} className="flex items-start gap-3 p-3 bg-red-500/5 border border-red-500/20 rounded-lg">
                              <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                              <span className="text-sm text-gray-300">{challenge}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Solutions */}
                      <div>
                        <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                          <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          How VideoVogue Helps
                        </h4>
                        <div className="space-y-4">
                          {currentSolution.solutions.map((solution, index) => (
                            <div key={index} className="p-5 bg-white/[0.03] border border-white/10 rounded-xl hover:border-white/20 transition-all">
                              <div className="flex items-start justify-between gap-4 mb-3">
                                <h5 className="text-lg font-bold text-white">
                                  {solution.title}
                                </h5>
                                <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${currentSolution.gradient} bg-opacity-20 border border-white/10 text-xs font-semibold text-white whitespace-nowrap`}>
                                  {solution.benefit}
                                </span>
                              </div>
                              <p className="text-sm text-gray-400 leading-relaxed">
                                {solution.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Footer CTA - Fixed at bottom */}
                  <div className="px-8 py-6 border-t border-white/10 bg-white/[0.02]">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                      <div>
                        <p className="text-white font-semibold text-lg mb-1">
                          Ready to transform your platform?
                        </p>
                        <p className="text-gray-400 text-sm">
                          Get a personalized demo for {currentSolution.title.toLowerCase()}
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
                        className={`px-8 py-3 bg-gradient-to-r ${currentSolution.gradient} text-white font-bold rounded-full hover:shadow-lg transition-all whitespace-nowrap`}
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