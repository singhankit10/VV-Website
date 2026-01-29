// src/components/footer/CaseStudiesModal.js
'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CaseStudiesModal({ isOpen, onClose }) {
  const [activeStudy, setActiveStudy] = useState(0);

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

  const caseStudies = [
    {
      company: 'Leading OTT Platform',
      industry: 'Entertainment & Streaming',
      location: 'India',
      challenge: 'Limited monetization beyond subscriptions, struggling to compete with social media platforms that offered direct shopping experiences.',
      solution: 'Implemented VideoVogue\'s AI-powered product tagging and in-content shopping across their entire content library of 10,000+ hours.',
      results: [
        { metric: '34%', label: 'Revenue Increase' },
        { metric: '4 Days', label: 'to Launch' },
        { metric: '3.2x', label: 'Conversion Rate' },
      ],
      quote: 'This changed our entire monetization strategy. We saw results within the first week.',
      role: 'VP Digital Products',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      company: 'Fortune 500 Media',
      industry: 'Media & Entertainment',
      location: 'Global',
      challenge: 'Traditional ad revenue declining, needed new ways to engage viewers without disrupting content experience.',
      solution: 'Deployed VideoVogue\'s virtual product placement system across live broadcasts and VOD content, with seamless cross-device shopping.',
      results: [
        { metric: '28%', label: 'Engagement Lift' },
        { metric: '2M+', label: 'Transactions' },
        { metric: '15%', label: 'Retention Boost' },
      ],
      quote: 'Seamless integration, immediate results. Our viewers love the non-intrusive shopping experience.',
      role: 'Head of Digital Innovation',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      company: 'Regional Sports Network',
      industry: 'Sports & Entertainment',
      location: 'North America',
      challenge: 'Sponsors demanded better ROI metrics and direct sales attribution from broadcast placements.',
      solution: 'Integrated VideoVogue\'s live commerce platform for real-time merchandise and sponsor product sales during games.',
      results: [
        { metric: '51%', label: 'Sponsor Revenue' },
        { metric: '6 Weeks', label: 'Full Deployment' },
        { metric: '2.8x', label: 'Click-Through Rate' },
      ],
      quote: 'Our sponsors are thrilled. We\'ve unlocked a revenue stream we didn\'t know existed.',
      role: 'VP Revenue Operations',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const currentStudy = caseStudies[activeStudy];

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
                className="relative w-full max-w-5xl"
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
                    <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
                      <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">Case Studies</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
                      Real Results, Real Platforms
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base">
                      See how leading platforms transformed their revenue with VideoVogue
                    </p>
                  </div>

                  {/* Case Study Selector */}
                  <div className="px-8 py-6 border-b border-white/10 bg-white/[0.02]">
                    <div className="flex gap-3 overflow-x-auto">
                      {caseStudies.map((study, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveStudy(index)}
                          className={`px-5 py-3 rounded-xl font-semibold text-sm transition-all whitespace-nowrap flex-shrink-0 ${
                            activeStudy === index
                              ? `bg-gradient-to-r ${study.gradient} text-white shadow-lg`
                              : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                          }`}
                        >
                          {study.company}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Case Study Content - Scrollable */}
                  <div className="px-8 py-8 max-h-[50vh] overflow-y-auto">
                    <motion.div
                      key={activeStudy}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Company Info */}
                      <div className="mb-8">
                        <h3 className="text-3xl font-black text-white mb-2">
                          {currentStudy.company}
                        </h3>
                        <div className="flex items-center gap-3 text-sm text-gray-400">
                          <span>{currentStudy.industry}</span>
                          <span>•</span>
                          <span>{currentStudy.location}</span>
                        </div>
                      </div>

                      {/* Results Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-8">
                        {currentStudy.results.map((result, index) => (
                          <div key={index} className={`p-4 rounded-xl bg-gradient-to-br ${currentStudy.gradient} bg-opacity-10 border border-white/10`}>
                            <div className="text-3xl font-black text-white mb-1">
                              {result.metric}
                            </div>
                            <div className="text-xs text-white uppercase tracking-wider">
                              {result.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Challenge */}
                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                          <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                          The Challenge
                        </h4>
                        <p className="text-gray-300 leading-relaxed pl-7">
                          {currentStudy.challenge}
                        </p>
                      </div>

                      {/* Solution */}
                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                          <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          The Solution
                        </h4>
                        <p className="text-gray-300 leading-relaxed pl-7">
                          {currentStudy.solution}
                        </p>
                      </div>

                      {/* Quote */}
                      <div className={`p-6 rounded-xl bg-gradient-to-br ${currentStudy.gradient} bg-opacity-5 border border-white/10`}>
                        <svg className="w-8 h-8 text-white/20 mb-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        <p className="text-white text-lg leading-relaxed mb-4 italic">
                          &quot;{currentStudy.quote}&quot;
                        </p>
                        <div className="text-sm font-semibold text-white">
                          — {currentStudy.role}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Footer CTA */}
                  <div className="px-8 py-6 border-t border-white/10 bg-white/[0.02]">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                      <div>
                        <p className="text-white font-semibold text-lg mb-1">
                          Ready for similar results?
                        </p>
                        <p className="text-gray-400 text-sm">
                          See how VideoVogue can transform your platform
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
                        className={`px-8 py-3 bg-gradient-to-r ${currentStudy.gradient} text-white font-bold rounded-full hover:shadow-lg transition-all whitespace-nowrap`}
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