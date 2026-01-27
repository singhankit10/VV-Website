// src/components/sections/CTASection.js
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import DemoModal from './DemoForm';

export default function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#0a0a0a] py-24 md:py-32 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              Ready to Transform Your Platform?
            </h2>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed">
              See VideoVogue in action. Our team will show you how to unlock 30%+ 
              revenue growth in under 30 minutes.
            </p>

            {/* CTA Button - Opens Modal */}
            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#FF3B30] to-[#FF6B6B] px-12 py-5 rounded-full text-white font-bold text-lg hover:shadow-2xl hover:shadow-red-500/20 transition-all inline-block mb-8"
            >
              Schedule Demo
            </motion.button>

            {/* Subtext */}
            <p className="text-sm text-gray-500 mb-12">
              No commitment required • Live in 4 days • Enterprise-ready
            </p>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-sm text-gray-400"
            >
              {/* SOC 2 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">SOC 2 Certified</div>
                  <div className="text-xs text-gray-500">Enterprise Security</div>
                </div>
              </div>

              {/* Backed By */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">Rapid Integration</div>
                  <div className="text-xs text-gray-500">Live Within Days</div>
                </div>
              </div>

              {/* Uptime */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">99.9% Uptime SLA</div>
                  <div className="text-xs text-gray-500">Production Ready</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16 pt-12 border-t border-white/5"
          >
            <p className="text-gray-500 mb-4">
              Prefer to talk directly?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="tel:+14086340911" 
                className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +1 (408) 634-0911
              </a>
              <span className="hidden sm:inline text-gray-700">•</span>
              <a 
                href="mailto:Contact@videovogue.ai" 
                className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact@videovogue.ai
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Demo Modal */}
      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}