// src/components/sections/HowItWorks.js
'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from '@/lib/animations/gsapConfig';

export default function HowItWorks() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hiw-title', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.hiw-section',
          start: 'top 70%',
          once: true,
        },
      });

      gsap.from('.step-card', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.steps-wrapper',
          start: 'top 70%',
          once: true,
        },
      });

      gsap.from('.connector-path', {
        strokeDashoffset: 500,
        duration: 1.5,
        stagger: 0.3,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '.steps-wrapper',
          start: 'top 65%',
          once: true,
        },
      });

      gsap.from('.feature-badge', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.features-strip',
          start: 'top 85%',
          once: true,
        },
      });

      // Professional animations
      gsap.to('.api-signal', {
        scale: 1.5,
        opacity: 0,
        duration: 2,
        repeat: -1,
        ease: 'power2.out',
      });

      gsap.to('.data-flow', {
        x: 80,
        opacity: 0,
        duration: 2,
        stagger: 0.3,
        repeat: -1,
        ease: 'none',
      });

      gsap.to('.ai-scanner', {
        y: 60,
        duration: 2.5,
        repeat: -1,
        ease: 'none',
      });

      gsap.to('.tag-appear', {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.2,
        repeat: -1,
        repeatDelay: 2,
        ease: 'back.out(1.5)',
      });

      gsap.to('.booking-fill', {
        opacity: 1,
        duration: 0.4,
        stagger: {
          each: 0.2,
          repeat: -1,
          repeatDelay: 2,
        },
      });

      gsap.to('.dollar-float', {
        y: -15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      title: 'Connect Your Platform',
      illustration: (
        <svg viewBox="0 0 240 200" className="w-full h-full">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
          
          {/* Video CMS Platform */}
          <rect x="20" y="50" width="90" height="100" rx="8" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="2"/>
          <rect x="20" y="50" width="90" height="20" rx="8" fill="#0f0f0f"/>
          <circle cx="30" cy="60" r="3" fill="#10B981"/>
          <rect x="40" y="57" width="30" height="6" rx="3" fill="#06B6D4"/>
          
          {/* Video thumbnails */}
          <rect x="28" y="80" width="35" height="25" rx="4" fill="#2a2a2a"/>
          <rect x="28" y="85" width="10" height="6" rx="2" fill="#10B981"/>
          <rect x="70" y="80" width="35" height="25" rx="4" fill="#2a2a2a"/>
          
          <rect x="28" y="115" width="35" height="25" rx="4" fill="#2a2a2a"/>
          <rect x="70" y="115" width="35" height="25" rx="4" fill="#2a2a2a"/>
          <rect x="70" y="120" width="10" height="6" rx="2" fill="#10B981"/>
          
          {/* API Connection Visualization */}
          <g>
            {/* Data flow particles */}
            <circle className="data-flow" cx="115" cy="90" r="3" fill="#06B6D4" opacity="0.8"/>
            <circle className="data-flow" cx="115" cy="100" r="3" fill="#3B82F6" opacity="0.8"/>
            <circle className="data-flow" cx="115" cy="110" r="3" fill="#06B6D4" opacity="0.8"/>
            
            {/* Connection line */}
            <line x1="110" y1="100" x2="130" y2="100" stroke="url(#grad1)" strokeWidth="2" strokeDasharray="4,4" opacity="0.6"/>
            
            {/* API Signal */}
            <circle className="api-signal" cx="120" cy="100" r="6" fill="none" stroke="#06B6D4" strokeWidth="2" opacity="0.6"/>
            <circle cx="120" cy="100" r="3" fill="#06B6D4"/>
          </g>
          
          {/* VideoVogue API Box */}
          <rect x="130" y="60" width="90" height="80" rx="8" fill="#0f0f0f" stroke="#06B6D4" strokeWidth="2"/>
          
          {/* API Endpoints */}
          <text x="175" y="85" fill="#06B6D4" fontSize="12" fontWeight="bold" textAnchor="middle">API</text>
          <rect x="140" y="95" width="70" height="8" rx="4" fill="#06B6D4" opacity="0.3"/>
          <text x="145" y="101" fill="#06B6D4" fontSize="8" opacity="0.8">/v1/connect</text>
          
          <rect x="140" y="108" width="65" height="8" rx="4" fill="#3B82F6" opacity="0.3"/>
          <text x="145" y="114" fill="#3B82F6" fontSize="8" opacity="0.8">/v1/sync</text>
          
          <rect x="140" y="121" width="60" height="8" rx="4" fill="#10B981" opacity="0.3"/>
          <text x="145" y="127" fill="#10B981" fontSize="8" opacity="0.8">/v1/events</text>
          
          {/* SDK Badge */}
          <rect x="145" y="135" width="25" height="12" rx="6" fill="#06B6D4" opacity="0.2"/>
          <text x="157.5" y="143" fill="#06B6D4" fontSize="8" fontWeight="bold" textAnchor="middle">SDK</text>
          
          {/* Status indicator */}
          <circle cx="210" cy="70" r="4" fill="#10B981">
            <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
          </circle>
        </svg>
      ),
    },
    {
      title: 'AI Processes Content',
      illustration: (
        <svg viewBox="0 0 240 200" className="w-full h-full">
          {/* Video Frame Being Analyzed */}
          <rect x="40" y="40" width="160" height="90" rx="8" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="2"/>
          
          {/* AI Scanning Beam */}
          <line className="ai-scanner" x1="45" y1="45" x2="195" y2="45" stroke="#06B6D4" strokeWidth="3" opacity="0.6"/>
          <rect className="ai-scanner" x="45" y="43" width="150" height="4" fill="url(#grad1)" opacity="0.2"/>
          
          {/* Product Detection Boxes */}
          <rect x="60" y="60" width="40" height="40" rx="4" fill="none" stroke="#10B981" strokeWidth="2" strokeDasharray="4,4"/>
          <circle cx="65" cy="65" r="2" fill="#10B981"/>
          <text x="80" y="68" fill="#10B981" fontSize="8">Product</text>
          
          <rect x="110" y="70" width="35" height="35" rx="4" fill="none" stroke="#3B82F6" strokeWidth="2" strokeDasharray="4,4"/>
          <circle cx="115" cy="75" r="2" fill="#3B82F6"/>
          
          <rect x="155" y="65" width="38" height="38" rx="4" fill="none" stroke="#06B6D4" strokeWidth="2" strokeDasharray="4,4"/>
          <circle cx="160" cy="70" r="2" fill="#06B6D4"/>
          
          {/* AI Processing Indicator */}
          <g transform="translate(120, 145)">
            <circle cx="0" cy="0" r="15" fill="none" stroke="#06B6D4" strokeWidth="2" opacity="0.3"/>
            <circle cx="0" cy="0" r="10" fill="#06B6D4" opacity="0.1"/>
            <text x="0" y="5" fill="#06B6D4" fontSize="14" fontWeight="bold" textAnchor="middle">AI</text>
          </g>
          
          {/* Generated Tags */}
          <g>
            <rect className="tag-appear" x="50" y="140" width="45" height="14" rx="7" fill="#10B981" opacity="0" transform="scale(0.8)" style={{transformOrigin: '72.5px 147px'}}/>
            <text x="72.5" y="149" fill="white" fontSize="8" textAnchor="middle" opacity="0.9">Telephone</text>
            
            <rect className="tag-appear" x="100" y="140" width="38" height="14" rx="7" fill="#3B82F6" opacity="0" transform="scale(0.8)" style={{transformOrigin: '119px 147px'}}/>
            <text x="119" y="149" fill="white" fontSize="8" textAnchor="middle" opacity="0.9">Fashion</text>
            
            <rect className="tag-appear" x="143" y="140" width="42" height="14" rx="7" fill="#06B6D4" opacity="0" transform="scale(0.8)" style={{transformOrigin: '164px 147px'}}/>
            <text x="164" y="149" fill="white" fontSize="8" textAnchor="middle" opacity="0.9">Lifestyle</text>
          </g>
          
          {/* Processing Speed */}
          <text x="200" y="185" fill="#10B981" fontSize="10" fontWeight="bold" opacity="0.7">68% faster</text>
        </svg>
      ),
    },
    {
      title: 'Brands Book Inventory',
      illustration: (
        <svg viewBox="0 0 240 200" className="w-full h-full">
          {/* Booking Dashboard */}
          <rect x="30" y="40" width="180" height="120" rx="8" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="2"/>
          
          {/* Header */}
          <rect x="30" y="40" width="180" height="25" rx="8" fill="#0f0f0f"/>
          <rect x="40" y="49" width="60" height="8" rx="4" fill="#10B981"/>
          <text x="70" y="55" fill="white" fontSize="9" textAnchor="middle">Inventory</text>
          
          {/* Calendar Grid */}
          <g transform="translate(40, 75)">
            {/* Time slots */}
            {[0, 1, 2].map(row => 
              [0, 1, 2, 3].map(col => (
                <rect 
                  key={`${row}-${col}`}
                  className="booking-fill"
                  x={col * 42} 
                  y={row * 24} 
                  width="38" 
                  height="20" 
                  rx="4" 
                  fill={row === 0 && col < 2 ? "#10B981" : row === 1 && col === 1 ? "#3B82F6" : row === 2 && col === 0 ? "#10B981" : "#2a2a2a"}
                  opacity={row === 0 && col < 2 ? "0.7" : row === 1 && col === 1 ? "0.7" : row === 2 && col === 0 ? "0.7" : "0.3"}
                />
              ))
            )}
            
            {/* Brand indicators on booked slots */}
            <circle cx="10" cy="10" r="3" fill="white"/>
            <circle cx="52" cy="10" r="3" fill="white"/>
            <circle cx="73" cy="34" r="3" fill="white"/>
            <circle cx="10" cy="58" r="3" fill="white"/>
          </g>
          
          {/* Booking Stats */}
          <g transform="translate(35, 150)">
            <rect x="0" y="0" width="50" height="18" rx="4" fill="#10B981" opacity="0.2"/>
            <text x="5" y="12" fill="#10B981" fontSize="9" fontWeight="bold">8 Booked</text>
            
            <rect x="55" y="0" width="55" height="18" rx="4" fill="#3B82F6" opacity="0.2"/>
            <text x="60" y="12" fill="#3B82F6" fontSize="9" fontWeight="bold">4 Available</text>
            
            <rect x="115" y="0" width="60" height="18" rx="4" fill="#06B6D4" opacity="0.2"/>
            <text x="120" y="12" fill="#06B6D4" fontSize="9" fontWeight="bold">$12K/mo</text>
          </g>
          
          {/* Revenue projection */}
          <text x="195" y="185" fill="#10B981" fontSize="10" fontWeight="bold" textAnchor="end">+43% rev</text>
        </svg>
      ),
    },
    {
      title: 'Go Live & Monetize',
      illustration: (
        <svg viewBox="0 0 240 200" className="w-full h-full">
          {/* Revenue Dashboard */}
          <rect x="30" y="35" width="180" height="130" rx="8" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="2"/>
          
          {/* Header with live indicator */}
          <rect x="30" y="35" width="180" height="25" rx="8" fill="#0f0f0f"/>
          <circle cx="45" cy="47.5" r="4" fill="#10B981">
            <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/>
          </circle>
          <text x="55" y="51" fill="white" fontSize="10" fontWeight="bold">LIVE</text>
          
          {/* Revenue Chart */}
          <g transform="translate(50, 120)">
            {/* Chart bars */}
            <rect className="revenue-bar" x="0" y="25" width="18" height="30" rx="3" fill="#10B981" opacity="0.6" transform="scaleY(0)" style={{transformOrigin: '9px 55px'}}/>
            <rect className="revenue-bar" x="25" y="15" width="18" height="40" rx="3" fill="#10B981" opacity="0.7" transform="scaleY(0)" style={{transformOrigin: '34px 55px'}}/>
            <rect className="revenue-bar" x="50" y="10" width="18" height="45" rx="3" fill="#10B981" opacity="0.8" transform="scaleY(0)" style={{transformOrigin: '59px 55px'}}/>
            <rect className="revenue-bar" x="75" y="5" width="18" height="50" rx="3" fill="#10B981" opacity="0.9" transform="scaleY(0)" style={{transformOrigin: '84px 55px'}}/>
            <rect className="revenue-bar" x="100" y="0" width="18" height="55" rx="3" fill="#10B981" transform="scaleY(0)" style={{transformOrigin: '109px 55px'}}/>
            
            {/* Baseline */}
            <line x1="-5" y1="60" x2="125" y2="60" stroke="#333" strokeWidth="1"/>
            
            {/* Trend line */}
            <polyline points="9,40 34,30 59,25 84,20 109,15" fill="none" stroke="#06B6D4" strokeWidth="2" opacity="0.5"/>
          </g>
          
          {/* Revenue Metrics */}
          <g transform="translate(40, 75)">
            <text x="0" y="0" fill="#10B981" fontSize="24" fontWeight="bold">$47.2K</text>
            <text x="0" y="15" fill="#gray-400" fontSize="9" opacity="0.6">This month</text>
            
            <rect x="90" y="-8" width="40" height="16" rx="4" fill="#10B981" opacity="0.2"/>
            <text x="110" y="4" fill="#10B981" fontSize="10" fontWeight="bold" textAnchor="middle">↑ 32%</text>
          </g>
          
          {/* Real-time transactions */}
          <g transform="translate(145, 70)">
            <circle cx="0" cy="0" r="20" fill="#06B6D4" opacity="0.2"/>
            <circle cx="0" cy="0" r="15" fill="none" stroke="#06B6D4" strokeWidth="2"/>
            <path d="M -5 0 L -2 4 L 6 -6" fill="none" stroke="#06B6D4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <text x="0" y="30" fill="#06B6D4" fontSize="8" textAnchor="middle">Real-time</text>
          </g>
          
          {/* Floating dollar signs */}
          <text className="dollar-float" x="160" y="105" fill="#10B981" fontSize="16" opacity="0.6">$</text>
          <text className="dollar-float" x="180" y="115" fill="#10B981" fontSize="14" opacity="0.5">$</text>
          <text className="dollar-float" x="170" y="95" fill="#10B981" fontSize="18" opacity="0.7">$</text>
        </svg>
      ),
    },
  ];

  const features = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      text: 'Privacy-First, Cookieless'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      text: 'Copyright Protected'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      text: '48-72 Hour Integration'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      text: 'Data Resilience'
    },
  ];

  return (
    <section ref={sectionRef} className="hiw-section relative py-20 md:py-28 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.05),transparent_60%)]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-20 md:mb-24">
          <div className="hiw-title">
            <div className="flex items-center justify-center mb-6">
              <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5">
              How It Works
            </h2>
            <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              From integration to revenue in 4 simple steps
            </p>
          </div>
        </div>

        <div className="steps-wrapper max-w-7xl mx-auto relative mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-6 relative">
            {steps.map((step, index) => (
              <div key={index} className={`step-card step-${index + 1} relative`}>
                <div className="relative group">
                  <div className="relative bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 mb-8 overflow-hidden aspect-[4/3] flex items-center justify-center group-hover:border-white/[0.15] transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative w-full h-full flex items-center justify-center">
                      {step.illustration}
                    </div>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-white text-center px-2">
                    {step.title}
                  </h3>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-[35%] left-[calc(100%+12px)] w-24 h-32 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 120" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.4" />
                        </linearGradient>
                      </defs>
                      
                      <path
                        className="connector-path"
                        d={index % 2 === 0 ? "M 0 60 Q 50 20, 100 60" : "M 0 60 Q 50 100, 100 60"}
                        fill="none"
                        stroke={`url(#grad-${index})`}
                        strokeWidth="2"
                        strokeDasharray="6,6"
                        strokeDashoffset="0"
                      />
                      
                      <polygon points={index % 2 === 0 ? "95,58 100,60 95,62" : "95,58 100,60 95,62"} fill="#3B82F6" opacity="0.6"/>
                      
                      <circle className="flow-dot" r="3" fill="#06B6D4">
                        <animateMotion dur="3s" repeatCount="indefinite" path={index % 2 === 0 ? "M 0 60 Q 50 20, 100 60" : "M 0 60 Q 50 100, 100 60"}/>
                      </circle>
                    </svg>
                  </div>
                )}

                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-6">
                    <svg className="w-8 h-8 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Features Strip */}
        <div className="features-strip max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-badge group"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3 p-4 rounded-lg border border-white/5 bg-white/[0.02] group-hover:border-white/10 transition-all duration-300">
                  <div className="text-gray-500 group-hover:text-cyan-400 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <span className="text-sm text-gray-400 group-hover:text-gray-300 font-medium transition-colors duration-300">
                    {feature.text}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}