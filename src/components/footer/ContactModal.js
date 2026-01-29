// src/components/footer/ContactModal.js
'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactModal({ isOpen, onClose, onOpenDemoForm }) {
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

  const handleScheduleDemo = () => {
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
                    <div className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 mb-4">
                      <span className="text-teal-400 text-xs font-semibold uppercase tracking-wider">Get in Touch</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
                      Let&apos;s Talk
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base">
                      Ready to transform your video platform?
                    </p>
                  </div>

                  {/* Content */}
                  <div className="px-8 py-12">
                    {/* Contact Methods */}
                    <div className="space-y-6 mb-10">
                      {/* Email */}
                      <a 
                        href="mailto:Contact@videovogue.ai"
                        className="flex items-start gap-4 p-5 bg-white/[0.03] border border-white/10 rounded-xl hover:bg-white/[0.05] hover:border-white/20 transition-all group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-white mb-1 group-hover:text-teal-400 transition-colors">
                            Email Us
                          </h4>
                          <p className="text-sm text-gray-400">
                            Contact@videovogue.ai
                          </p>
                        </div>
                      </a>

                      {/* Phone */}
                      <a 
                        href="tel:+14086340911"
                        className="flex items-start gap-4 p-5 bg-white/[0.03] border border-white/10 rounded-xl hover:bg-white/[0.05] hover:border-white/20 transition-all group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                            Call Us
                          </h4>
                          <p className="text-sm text-gray-400">
                            +1 (408) 634-0911
                          </p>
                        </div>
                      </a>

                      {/* Address */}
                      <div className="flex items-start gap-4 p-5 bg-white/[0.03] border border-white/10 rounded-xl">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-white mb-1">
                            Our Office
                          </h4>
                          <p className="text-sm text-gray-400">
                            131 Continental Drive<br />
                            Newark, Delaware 19713<br />
                            United States
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="text-center">
                      <p className="text-gray-400 text-sm mb-4">
                        Or schedule a personalized demo
                      </p>
                      <button
                        onClick={handleScheduleDemo}
                        className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold text-base rounded-full hover:shadow-lg hover:shadow-teal-500/50 transition-all"
                      >
                        Schedule a Demo
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