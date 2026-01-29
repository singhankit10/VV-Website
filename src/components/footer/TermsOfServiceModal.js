// src/components/footer/TermsOfServiceModal.js
'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TermsOfServiceModal({ isOpen, onClose }) {
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
                    <div className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
                      <span className="text-purple-400 text-xs font-semibold uppercase tracking-wider">Legal</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
                      Terms of Service
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
                          These Terms of Service (&quot;Terms&quot;) govern your access to and use of the VideoVogue platform, website, and related services (collectively, the &quot;Services&quot;) provided by VideoVogue, Inc. (&quot;VideoVogue,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                          By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use our Services.
                        </p>
                      </div>

                      {/* Section 1 */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-3">1. Acceptance of Terms</h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          By creating an account, accessing our website, or using our Services in any manner, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you are using the Services on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.
                        </p>
                      </div>

                      {/* Section 2 */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-3">2. Description of Service</h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          VideoVogue provides a commerce layer platform for TV, streaming, and video content providers, enabling in-content shopping, AI-powered product tagging, virtual product placement, and related commerce features. Our Services are designed for business use and may be subject to additional agreements between VideoVogue and your organization.
                        </p>
                      </div>

                      {/* Section 3 */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-3">3. Account Registration and Security</h3>
                        
                        <h4 className="text-lg font-semibold text-white mb-2 mt-4">Account Creation</h4>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          To access certain features of our Services, you may be required to create an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate and current.
                        </p>

                        <h4 className="text-lg font-semibold text-white mb-2 mt-4">Account Security</h4>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must immediately notify us of any unauthorized use of your account or any other security breach. VideoVogue will not be liable for any loss or damage arising from your failure to protect your account information.
                        </p>
                      </div>

                      {/* Section 4 */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-3">4. Acceptable Use Policy</h3>
                        <p className="text-gray-300 leading-relaxed mb-3">
                          You agree not to use the Services to:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
                          <li>Violate any applicable laws, regulations, or third-party rights</li>
                          <li>Distribute malware, viruses, or any harmful code</li>
                          <li>Engage in fraudulent, misleading, or deceptive practices</li>
                          <li>Interfere with or disrupt the Services or servers</li>
                          <li>Attempt to gain unauthorized access to any part of the Services</li>
                          <li>Use the Services for any unlawful or prohibited purpose</li>
                          <li>Reverse engineer, decompile, or disassemble any part of the Services</li>
                          <li>Remove or modify any proprietary notices or labels</li>
                          <li>Use the Services to compete with VideoVogue or create a similar service</li>
                        </ul>
                      </div>

                      {/* Section 5 */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-3">5. Intellectual Property Rights</h3>
                        
                        <h4 className="text-lg font-semibold text-white mb-2 mt-4">VideoVogue Property</h4>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          The Services, including all software, technology, content, trademarks, logos, and materials, are owned by VideoVogue or its licensors and are protected by intellectual property laws. You are granted a limited, non-exclusive, non-transferable, revocable license to access and use the Services in accordance with these Terms.
                        </p>

                        <h4 className="text-lg font-semibold text-white mb-2 mt-4">Your Content</h4>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          You retain all rights to any content, data, or materials you upload or submit to the Services (&quot;Your Content&quot;). By submitting Your Content, you grant VideoVogue a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display Your Content solely to provide and improve the Services. You represent and warrant that you have all necessary rights to grant this license.
                        </p>

                        <h4 className="text-lg font-semibold text-white mb-2 mt-4">Feedback</h4>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          If you provide feedback, suggestions, or ideas about the Services, you grant VideoVogue the right to use such feedback without any obligation or compensation to you.
                        </p>
                      </div>

                      {/* Section 6 */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-3">6. Payment and Fees</h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          Certain Services may require payment of fees. If applicable, you agree to pay all fees as specified in your agreement with VideoVogue or as displayed on our website. All fees are non-refundable unless otherwise stated. We reserve the right to modify our fees upon notice to you. Failure to pay fees may result in suspension or termination of your access to the Services.
                        </p>
                      </div>

                      {/* Section 7 */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-3">7. Service Availability and Modifications</h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          We strive to provide reliable Services, but we do not guarantee that the Services will be uninterrupted, secure, or error-free. We reserve the right to modify, suspend, or discontinue any part of the Services at any time, with or without notice. We may also impose limits on certain features or restrict access to parts of the Services without liability.
                        </p>
                      </div>

                      {/* Section 8 */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-3">8. Disclaimers and Warranties</h3>
                        <p className="text-gray-300 leading-relaxed mb-4 uppercase font-semibold">
                          THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR COURSE OF PERFORMANCE.
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          VideoVogue does not warrant that the Services will meet your requirements, be secure, or be free from errors, viruses, or other harmful components. Your use of the Services is at your sole risk.
                        </p>
                      </div>

                      {/* Section 9 */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-3">9. Limitation of Liability</h3>
                        <p className="text-gray-300 leading-relaxed mb-4 uppercase font-semibold">
                          TO THE MAXIMUM EXTENT PERMITTED BY LAW, VIDEOVOGUE AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
                          <li>Your access to or use of (or inability to access or use) the Services</li>
                          <li>Any conduct or content of any third party on the Services</li>
                          <li>Any content obtained from the Services</li>
                          <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                        </ul>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          In no event shall VideoVogue&apos;s total liability exceed the amount you paid to VideoVogue in the twelve (12) months preceding the claim, or one hundred dollars ($100), whichever is greater.
                        </p>
                      </div>

                      {/* Section 10 */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-3">10. Indemnification</h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          You agree to indemnify, defend, and hold harmless VideoVogue and its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys&apos; fees) arising out of or related to:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
                          <li>Your use of the Services</li>
                          <li>Your violation of these Terms</li>
                          <li>Your violation of any rights of another party</li>
                          <li>Your Content</li>
                        </ul>
                      </div>

                      {/* Section 11 */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-3">11. Termination</h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          We may terminate or suspend your access to the Services immediately, without prior notice or liability, for any reason, including if you breach these Terms. You may terminate your account at any time by contacting us. Upon termination, your right to use the Services will immediately cease, and we may delete your account and content.
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          Sections that by their nature should survive termination shall survive, including but not limited to intellectual property provisions, disclaimers, limitations of liability, and dispute resolution provisions.
                        </p>
                      </div>

                      {/* Section 12 */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-3">12. Governing Law and Dispute Resolution</h3>
                        
                        <h4 className="text-lg font-semibold text-white mb-2 mt-4">Governing Law</h4>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.
                        </p>

                        <h4 className="text-lg font-semibold text-white mb-2 mt-4">Dispute Resolution</h4>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          Any dispute arising out of or relating to these Terms or the Services shall be resolved through binding arbitration in accordance with the American Arbitration Association&apos;s Commercial Arbitration Rules. The arbitration shall be conducted in Delaware, and judgment on the arbitration award may be entered in any court having jurisdiction.
                        </p>

                        <h4 className="text-lg font-semibold text-white mb-2 mt-4">Class Action Waiver</h4>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          You agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action.
                        </p>
                      </div>

                      {/* Section 13 */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-3">13. General Provisions</h3>
                        
                        <h4 className="text-lg font-semibold text-white mb-2 mt-4">Entire Agreement</h4>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          These Terms, together with our Privacy Policy and any additional agreements you enter into with VideoVogue, constitute the entire agreement between you and VideoVogue regarding the Services.
                        </p>

                        <h4 className="text-lg font-semibold text-white mb-2 mt-4">Modifications</h4>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          We reserve the right to modify these Terms at any time. We will provide notice of material changes by posting the updated Terms on our website and updating the &quot;Last Updated&quot; date. Your continued use of the Services after such modifications constitutes your acceptance of the updated Terms.
                        </p>

                        <h4 className="text-lg font-semibold text-white mb-2 mt-4">Severability</h4>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
                        </p>

                        <h4 className="text-lg font-semibold text-white mb-2 mt-4">Waiver</h4>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          No waiver of any term of these Terms shall be deemed a further or continuing waiver of such term or any other term, and VideoVogue&apos;s failure to assert any right or provision under these Terms shall not constitute a waiver of such right or provision.
                        </p>

                        <h4 className="text-lg font-semibold text-white mb-2 mt-4">Assignment</h4>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          You may not assign or transfer these Terms or your rights hereunder without our prior written consent. VideoVogue may assign these Terms without restriction.
                        </p>
                      </div>

                      {/* Section 14 */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-3">14. Contact Information</h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          If you have any questions about these Terms, please contact us at:
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