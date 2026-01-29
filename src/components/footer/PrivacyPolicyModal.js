// src/components/footer/PrivacyPolicyModal.js
'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PrivacyPolicyModal({ isOpen, onClose }) {
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
                    <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
                      <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider">Legal</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
                      Privacy Policy
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
                          VideoVogue, Inc. (&quot;VideoVogue,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                          By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
                        </p>
                      </div>

                      {/* Section 1 */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-3">1. Information We Collect</h3>
                        
                        <h4 className="text-lg font-semibold text-white mb-2 mt-4">Personal Information</h4>
                        <p className="text-gray-300 leading-relaxed mb-3">
                          We may collect personal information that you voluntarily provide to us when you:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
                          <li>Register for an account or request a demo</li>
                          <li>Subscribe to our newsletter or communications</li>
                          <li>Contact us through our website or support channels</li>
                          <li>Participate in surveys or promotional activities</li>
                        </ul>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          This information may include: name, email address, phone number, company name, job title, and any other information you choose to provide.
                        </p>

                        <h4 className="text-lg font-semibold text-white mb-2 mt-4">Automatically Collected Information</h4>
                        <p className="text-gray-300 leading-relaxed mb-3">
                          When you access our services, we automatically collect certain information, including:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
                          <li>Device information (IP address, browser type, operating system)</li>
                          <li>Usage data (pages visited, time spent, referring URLs)</li>
                          <li>Cookies and similar tracking technologies</li>
                          <li>Location data (based on IP address)</li>
                        </ul>
                      </div>

                      {/* Section 2 */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-3">2. How We Use Your Information</h3>
                        <p className="text-gray-300 leading-relaxed mb-3">
                          We use the information we collect to:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
                          <li>Provide, maintain, and improve our services</li>
                          <li>Process transactions and send related information</li>
                          <li>Send administrative information, updates, and security alerts</li>
                          <li>Respond to inquiries and provide customer support</li>
                          <li>Send marketing and promotional communications (with your consent)</li>
                          <li>Monitor and analyze usage patterns and trends</li>
                          <li>Detect, prevent, and address technical issues and security threats</li>
                          <li>Comply with legal obligations and enforce our terms</li>
                        </ul>
                      </div>

                      {/* Section 3 */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-3">3. Information Sharing and Disclosure</h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          We do not sell your personal information. We may share your information in the following circumstances:
                        </p>
                        
                        <h4 className="text-lg font-semibold text-white mb-2 mt-4">Service Providers</h4>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          We may share your information with third-party service providers who perform services on our behalf, such as hosting, data analysis, payment processing, email delivery, and customer service. These providers are contractually obligated to protect your information and use it only for the purposes we specify.
                        </p>

                        <h4 className="text-lg font-semibold text-white mb-2 mt-4">Business Transfers</h4>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          If we are involved in a merger, acquisition, financing, reorganization, bankruptcy, or sale of assets, your information may be transferred as part of that transaction.
                        </p>

                        <h4 className="text-lg font-semibold text-white mb-2 mt-4">Legal Requirements</h4>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          We may disclose your information if required by law, court order, or governmental request, or to protect our rights, property, or safety, or that of others.
                        </p>
                      </div>

                      {/* Section 4 */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-3">4. Data Security</h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          We implement appropriate technical and organizational security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
                          <li>Encryption of data in transit and at rest</li>
                          <li>Regular security assessments and audits</li>
                          <li>Access controls and authentication procedures</li>
                          <li>Employee training on data protection practices</li>
                          <li>SOC 2 Type II compliance</li>
                        </ul>
                        <p className="text-gray-300 leading-relaxed">
                          However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                        </p>
                      </div>

                      {/* Section 5 */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-3">5. Your Privacy Rights</h3>
                        <p className="text-gray-300 leading-relaxed mb-3">
                          Depending on your location, you may have the following rights regarding your personal information:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
                          <li><strong className="text-white">Access:</strong> Request access to the personal information we hold about you</li>
                          <li><strong className="text-white">Correction:</strong> Request correction of inaccurate or incomplete information</li>
                          <li><strong className="text-white">Deletion:</strong> Request deletion of your personal information</li>
                          <li><strong className="text-white">Restriction:</strong> Request restriction of processing your information</li>
                          <li><strong className="text-white">Portability:</strong> Request a copy of your information in a structured format</li>
                          <li><strong className="text-white">Objection:</strong> Object to processing of your information</li>
                          <li><strong className="text-white">Withdrawal:</strong> Withdraw consent at any time (where processing is based on consent)</li>
                        </ul>
                        <p className="text-gray-300 leading-relaxed">
                          To exercise these rights, please contact us at Contact@videovogue.ai. We will respond to your request within 30 days.
                        </p>
                      </div>

                      {/* Section 6 */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-3">6. Cookies and Tracking Technologies</h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          We use cookies and similar tracking technologies to collect and track information about your use of our services. Cookies are small data files stored on your device. You can control cookie preferences through your browser settings, though disabling cookies may affect your ability to use certain features.
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-3">
                          We use the following types of cookies:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
                          <li><strong className="text-white">Essential Cookies:</strong> Required for basic site functionality</li>
                          <li><strong className="text-white">Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                          <li><strong className="text-white">Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                        </ul>
                      </div>

                      {/* Section 7 */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-3">7. Third-Party Services</h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          Our services may contain links to third-party websites or services that are not owned or controlled by VideoVogue. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.
                        </p>
                      </div>

                      {/* Section 8 */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-3">8. International Data Transfers</h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws different from your jurisdiction. We take appropriate safeguards to ensure your information receives adequate protection, including using Standard Contractual Clauses approved by the European Commission.
                        </p>
                      </div>

                      {/* Section 9 */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-3">9. Children&apos;s Privacy</h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will take steps to delete such information. If you believe we have collected information from a child, please contact us immediately.
                        </p>
                      </div>

                      {/* Section 10 */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-3">10. Data Retention</h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
                        </p>
                      </div>

                      {/* Section 11 */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-3">11. Changes to This Privacy Policy</h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date. Your continued use of our services after such modifications constitutes your acknowledgment and acceptance of the updated policy.
                        </p>
                      </div>

                      {/* Section 12 */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-3">12. Contact Us</h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
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