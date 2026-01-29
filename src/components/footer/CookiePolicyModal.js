// src/components/footer/CookiePolicyModal.js
'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookiePolicyModal({ isOpen, onClose }) {
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
                    <div className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
                      <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Legal</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
                      Cookie Policy
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base">
                      Last Updated: January 29, 2026
                    </p>
                  </div>

                  {/* Content - Scrollable */}
                  <div className="px-8 py-8 max-h-[60vh] overflow-y-auto">
                    <div className="prose prose-invert max-w-none">
                      
                      {/* Introduction */}
                      <div className="mb-8">
                        <p className="text-gray-300 leading-relaxed mb-4">
                          This Cookie Policy explains how VideoVogue, Inc. (&quot;VideoVogue,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) uses cookies and similar tracking technologies when you visit our website or use our services. This policy should be read together with our Privacy Policy and Terms of Service.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                          By continuing to browse or use our website, you agree to our use of cookies as described in this policy.
                        </p>
                      </div>

                      {/* Section 1 */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-3">1. What Are Cookies?</h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          Cookies are small text files that are placed on your device (computer, smartphone, tablet, or other electronic device) when you visit a website. Cookies are widely used to make websites work more efficiently and to provide information to website owners.
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          Cookies can be &quot;persistent&quot; or &quot;session&quot; cookies. Persistent cookies remain on your device after you close your browser and are used when you make subsequent visits to the website. Session cookies are temporary and are deleted when you close your browser.
                        </p>
                      </div>

                      {/* Section 2 */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-3">2. Why We Use Cookies</h3>
                        <p className="text-gray-300 leading-relaxed mb-3">
                          We use cookies for several important reasons:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
                          <li>To enable certain functions of our website and services</li>
                          <li>To provide analytics and understand how visitors use our website</li>
                          <li>To improve your user experience by remembering your preferences</li>
                          <li>To deliver relevant advertising and marketing communications</li>
                          <li>To enhance the security of our website</li>
                          <li>To diagnose technical issues and prevent fraud</li>
                        </ul>
                      </div>

                      {/* Section 3 */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-3">3. Types of Cookies We Use</h3>
                        
                        <div className="space-y-6">
                          {/* Essential Cookies */}
                          <div className="p-5 bg-white/[0.03] border border-white/10 rounded-xl">
                            <div className="flex items-start gap-3 mb-3">
                              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                              </div>
                              <div className="flex-1">
                                <h4 className="text-lg font-bold text-white mb-2">Essential Cookies (Required)</h4>
                                <p className="text-sm text-gray-400 mb-3">
                                  These cookies are necessary for the website to function properly and cannot be disabled in our systems.
                                </p>
                                <div className="text-sm text-gray-300">
                                  <p className="mb-2"><strong className="text-white">Purpose:</strong></p>
                                  <ul className="list-disc list-inside space-y-1 ml-4">
                                    <li>Authentication and account access</li>
                                    <li>Security and fraud prevention</li>
                                    <li>Load balancing and performance</li>
                                    <li>Remembering cookie consent preferences</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Analytics Cookies */}
                          <div className="p-5 bg-white/[0.03] border border-white/10 rounded-xl">
                            <div className="flex items-start gap-3 mb-3">
                              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                              </div>
                              <div className="flex-1">
                                <h4 className="text-lg font-bold text-white mb-2">Analytics and Performance Cookies</h4>
                                <p className="text-sm text-gray-400 mb-3">
                                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                                </p>
                                <div className="text-sm text-gray-300">
                                  <p className="mb-2"><strong className="text-white">Purpose:</strong></p>
                                  <ul className="list-disc list-inside space-y-1 ml-4">
                                    <li>Counting visits and traffic sources</li>
                                    <li>Measuring and improving website performance</li>
                                    <li>Understanding which pages are most popular</li>
                                    <li>Identifying technical issues</li>
                                  </ul>
                                  <p className="mt-3 text-xs text-gray-500">
                                    <strong>Examples:</strong> Google Analytics, Mixpanel, Amplitude
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Functional Cookies */}
                          <div className="p-5 bg-white/[0.03] border border-white/10 rounded-xl">
                            <div className="flex items-start gap-3 mb-3">
                              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                              </div>
                              <div className="flex-1">
                                <h4 className="text-lg font-bold text-white mb-2">Functional Cookies</h4>
                                <p className="text-sm text-gray-400 mb-3">
                                  These cookies enable enhanced functionality and personalization, such as remembering your preferences.
                                </p>
                                <div className="text-sm text-gray-300">
                                  <p className="mb-2"><strong className="text-white">Purpose:</strong></p>
                                  <ul className="list-disc list-inside space-y-1 ml-4">
                                    <li>Remembering your language preference</li>
                                    <li>Storing your display settings</li>
                                    <li>Maintaining your session across pages</li>
                                    <li>Remembering your form inputs</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Marketing Cookies */}
                          <div className="p-5 bg-white/[0.03] border border-white/10 rounded-xl">
                            <div className="flex items-start gap-3 mb-3">
                              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                                </svg>
                              </div>
                              <div className="flex-1">
                                <h4 className="text-lg font-bold text-white mb-2">Marketing and Advertising Cookies</h4>
                                <p className="text-sm text-gray-400 mb-3">
                                  These cookies are used to deliver advertisements relevant to you and your interests, and to measure the effectiveness of advertising campaigns.
                                </p>
                                <div className="text-sm text-gray-300">
                                  <p className="mb-2"><strong className="text-white">Purpose:</strong></p>
                                  <ul className="list-disc list-inside space-y-1 ml-4">
                                    <li>Delivering personalized advertisements</li>
                                    <li>Limiting the number of times you see an ad</li>
                                    <li>Measuring advertising campaign effectiveness</li>
                                    <li>Tracking conversions and retargeting</li>
                                  </ul>
                                  <p className="mt-3 text-xs text-gray-500">
                                    <strong>Examples:</strong> Google Ads, Facebook Pixel, LinkedIn Insights
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Section 4 */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-3">4. Third-Party Cookies</h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          In addition to our own cookies, we may use various third-party cookies to report usage statistics, deliver advertisements, and improve our services. These third-party services have their own privacy policies and cookie policies.
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-3">
                          Common third-party services we use include:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
                          <li><strong className="text-white">Google Analytics:</strong> Web analytics service to understand user behavior</li>
                          <li><strong className="text-white">Google Ads:</strong> Advertising platform for remarketing and conversion tracking</li>
                          <li><strong className="text-white">LinkedIn Insights:</strong> Analytics and advertising for LinkedIn</li>
                          <li><strong className="text-white">Facebook Pixel:</strong> Analytics and advertising for Facebook</li>
                          <li><strong className="text-white">Intercom:</strong> Customer messaging and support platform</li>
                        </ul>
                      </div>

                      {/* Section 5 */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-3">5. How to Control Cookies</h3>
                        
                        <h4 className="text-lg font-semibold text-white mb-2 mt-4">Browser Settings</h4>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or delete certain cookies. Please note that if you disable or refuse cookies, some parts of our website may become inaccessible or not function properly.
                        </p>
                        
                        <div className="p-4 bg-white/[0.03] border border-white/10 rounded-xl mb-4">
                          <p className="text-white font-semibold mb-2">Browser Cookie Settings:</p>
                          <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm ml-4">
                            <li><strong className="text-white">Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
                            <li><strong className="text-white">Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                            <li><strong className="text-white">Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                            <li><strong className="text-white">Edge:</strong> Settings → Privacy, search, and services → Cookies</li>
                          </ul>
                        </div>

                        <h4 className="text-lg font-semibold text-white mb-2 mt-4">Opt-Out Tools</h4>
                        <p className="text-gray-300 leading-relaxed mb-3">
                          You can also opt out of certain third-party cookies:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4 text-sm">
                          <li>Google Analytics: <span className="text-cyan-400">tools.google.com/dlpage/gaoptout</span></li>
                          <li>Network Advertising Initiative: <span className="text-cyan-400">optout.networkadvertising.org</span></li>
                          <li>Digital Advertising Alliance: <span className="text-cyan-400">optout.aboutads.info</span></li>
                        </ul>

                        <h4 className="text-lg font-semibold text-white mb-2 mt-4">Mobile Devices</h4>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          On mobile devices, you can manage advertising preferences through your device settings. Look for &quot;Limit Ad Tracking&quot; (iOS) or &quot;Opt out of Ads Personalization&quot; (Android).
                        </p>
                      </div>

                      {/* Section 6 */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-3">6. Do Not Track Signals</h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          Some browsers have a &quot;Do Not Track&quot; feature that lets you tell websites that you do not want to have your online activities tracked. Currently, our website does not respond to Do Not Track signals, as there is no industry standard for how to respond to such signals.
                        </p>
                      </div>

                      {/* Section 7 */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-3">7. Updates to This Cookie Policy</h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Cookie Policy on this page and updating the &quot;Last Updated&quot; date.
                        </p>
                      </div>

                      {/* Section 8 */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-3">8. Contact Us</h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
                        </p>
                        <div className="p-4 bg-white/[0.03] border border-white/10 rounded-xl">
                          <p className="text-white font-semibold mb-2">VideoVogue, Inc.</p>
                          <p className="text-gray-300 text-sm">131 Continental Drive</p>
                          <p className="text-gray-300 text-sm">Newark, Delaware 19713</p>
                          <p className="text-gray-300 text-sm">United States</p>
                          <p className="text-gray-300 text-sm mt-3">Email: Contact@videovogue.ai</p>
                          <p className="text-gray-300 text-sm">Phone: +1 (408) 634-0911</p>
                        </div>
                      </div>

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