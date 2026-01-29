// src/components/footer/CareersModal.js
'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CareersModal({ isOpen, onClose }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

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
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" />

                    {/* Close Button */}
                    <button
                      onClick={onClose}
                      className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-gray-400 hover:text-white z-10"
                      aria-label="Close careers modal"
                      type="button"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>

                    {/* Title */}
                    <div className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 mb-4">
                      <span className="text-violet-400 text-xs font-semibold uppercase tracking-wider">
                        Careers
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
                      Join Us in Building the Future
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base">
                      We&apos;re transforming video commerce, one platform at a time
                    </p>
                  </div>

                  {/* Content */}
                  <div className="px-8 py-12">
                    {/* Main Message */}
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 mb-6">
                        <svg
                          className="w-10 h-10 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                        No Open Positions Right Now
                      </h3>

                      <p className="text-lg text-gray-300 max-w-xl mx-auto leading-relaxed mb-6">
                        We&apos;re currently focused on scaling our existing team, but
                        we&apos;re always interested in hearing from talented people who
                        share our vision.
                      </p>

                      <p className="text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
                        If you&apos;re passionate about video commerce, AI, and building
                        technology that transforms industries, reach out to us.
                        We&apos;ll keep your information on file for future opportunities.
                      </p>
                    </div>

                    {/* Contact Button */}
                    <div className="flex justify-center">
                      <a
                        href="mailto:Contact@videovogue.ai?subject=Career%20Interest%20at%20VideoVogue"
                        className="px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-500 text-white font-bold text-base rounded-full hover:shadow-lg hover:shadow-violet-500/50 transition-all"
                      >
                        Send Us Your Resume
                      </a>
                    </div>

                    <p className="text-sm text-gray-500 mt-6 text-center">
                      We&apos;ll reach out when the right opportunity opens up
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
