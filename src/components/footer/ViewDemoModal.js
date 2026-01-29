// src/components/footer/ViewDemoModal.js
'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ViewDemoModal({ isOpen, onClose, onOpenDemoForm }) {
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

  const handleWatchVideo = () => {
    onClose();
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  };

  const handleContactUs = () => {
    onClose();
    setTimeout(() => {
      onOpenDemoForm();
    }, 300);
  };

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
                className="relative w-full max-w-2xl"
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
                    <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
                      <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider">See It In Action</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
                      Experience VideoVogue
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base">
                      Watch our demo or schedule a personalized walkthrough
                    </p>
                  </div>

                  {/* Content */}
                  <div className="px-8 py-12">
                    {/* Main Message */}
                    <div className="text-center mb-10">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 mb-6">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                        See VideoVogue in Action
                      </h3>
                      
                      <p className="text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
                        Watch our quick 30-second demo on the homepage, or schedule a personalized session with our team.
                      </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button
                        onClick={handleWatchVideo}
                        className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-base rounded-full hover:bg-white/10 hover:border-white/20 transition-all"
                      >
                        <span className="flex items-center justify-center gap-2">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                          Watch Video Demo
                        </span>
                      </button>
                      
                      <button
                        onClick={handleContactUs}
                        className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-base rounded-full hover:shadow-lg hover:shadow-pink-500/50 transition-all"
                      >
                        Schedule Live Demo
                      </button>
                    </div>
                    
                    <p className="text-sm text-gray-500 mt-6 text-center">
                      Live demos include personalized feature walkthrough
                    </p>
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