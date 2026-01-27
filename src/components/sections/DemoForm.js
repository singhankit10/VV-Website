// src/components/sections/DemoModal.js
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DemoModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    platformType: '',
    goals: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Prevent body scroll when modal is open
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

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to API
      const response = await fetch('/api/schedule-demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        // Reset and close after success
        setTimeout(() => {
          setSubmitSuccess(false);
          setFormData({
            fullName: '',
            workEmail: '',
            companyName: '',
            platformType: '',
            goals: ''
          });
          onClose();
        }, 3000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setIsSubmitting(false);
      alert('Failed to submit. Please try again or contact us directly.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Form Container */}
              <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="relative px-8 pt-8 pb-6 border-b border-white/10">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"></div>
                  
                  <button
                    onClick={onClose}
                    className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  <div className="inline-block px-4 py-1.5 rounded-full bg-[#FF3B30]/10 border border-[#FF3B30]/20 mb-4">
                    <span className="text-[#FF3B30] text-xs font-semibold uppercase tracking-wider">Get Started</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
                    Schedule Your Demo
                  </h2>
                  <p className="text-gray-400">
                    See VideoVogue in action. Our team will show you how to unlock 30%+ revenue growth.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="px-8 py-8">
                  {submitSuccess ? (
                    // Success Message
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-12 text-center"
                    >
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                        <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Demo Scheduled!</h3>
                      <p className="text-gray-400 mb-2">We&apos;ll contact you within 24 hours.</p>
                      <p className="text-sm text-gray-500">Check your email for confirmation.</p>
                    </motion.div>
                  ) : (
                    <div className="space-y-6">
                      {/* Row 1: Name & Email */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="fullName" className="block text-sm font-semibold text-gray-300 mb-2">
                            Full Name <span className="text-[#FF3B30]">*</span>
                          </label>
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            placeholder="John Doe"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                          />
                        </div>

                        <div>
                          <label htmlFor="workEmail" className="block text-sm font-semibold text-gray-300 mb-2">
                            Work Email <span className="text-[#FF3B30]">*</span>
                          </label>
                          <input
                            type="email"
                            id="workEmail"
                            name="workEmail"
                            value={formData.workEmail}
                            onChange={handleChange}
                            required
                            placeholder="john@company.com"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                          />
                        </div>
                      </div>

                      {/* Row 2: Company & Platform */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="companyName" className="block text-sm font-semibold text-gray-300 mb-2">
                            Company Name <span className="text-[#FF3B30]">*</span>
                          </label>
                          <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            required
                            placeholder="Your Company"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                          />
                        </div>

                        <div>
                          <label htmlFor="platformType" className="block text-sm font-semibold text-gray-300 mb-2">
                            Platform Type
                          </label>
                          <select
                            id="platformType"
                            name="platformType"
                            value={formData.platformType}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all appearance-none cursor-pointer"
                          >
                            <option value="" className="bg-[#1a1a2e]">Select platform type</option>
                            <option value="streaming" className="bg-[#1a1a2e]">Streaming/OTT</option>
                            <option value="broadcaster" className="bg-[#1a1a2e]">Broadcaster</option>
                            <option value="content-creator" className="bg-[#1a1a2e]">Content Creator</option>
                            <option value="brand" className="bg-[#1a1a2e]">Brand/Advertiser</option>
                            <option value="other" className="bg-[#1a1a2e]">Other</option>
                          </select>
                        </div>
                      </div>

                      {/* Row 3: Goals */}
                      <div>
                        <label htmlFor="goals" className="block text-sm font-semibold text-gray-300 mb-2">
                          Tell us about your goals <span className="text-gray-500">(Optional)</span>
                        </label>
                        <textarea
                          id="goals"
                          name="goals"
                          value={formData.goals}
                          onChange={handleChange}
                          rows="4"
                          placeholder="What challenges are you looking to solve? What are your revenue goals?"
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all resize-none"
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-[#FF3B30] to-[#FF6B6B] text-white font-bold py-4 rounded-xl hover:shadow-xl hover:shadow-red-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Scheduling...
                          </span>
                        ) : (
                          'Schedule Demo'
                        )}
                      </button>

                      {/* Footer Text */}
                      <p className="text-center text-sm text-gray-500 pt-2">
                        We&apos;ll contact you within 24 hours • No commitment required
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}