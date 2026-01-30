'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from '@/lib/animations/gsapConfig';
import Image from 'next/image';

export default function SolutionShowcase() {
  const sectionRef = useRef(null);
  const [activeFeature, setActiveFeature] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const intervalRef = useRef(null);

  const features = [
    {
      title: 'AI Product Tagging',
      description: 'Automatically catalog every product in your video content with machine learning',
      benefit: '68% faster product cataloging',
      imagePlaceholder: 'ai-tagging-demo.png',
    },
    {
      title: 'Virtual Product Placement',
      description: 'Transform any scene into an interactive shopping moment with dynamic overlays',
      benefit: '30%+ boost in sales conversions',
      imagePlaceholder: 'product-placement-demo.png',
    },
    {
      title: 'Multi-Platform Commerce Integration',
      description: 'Seamlessly connects with Shopify, WooCommerce, and major e-commerce platforms',
      benefit: 'Integration with 50+ platforms',
      imagePlaceholder: 'platform-integration-demo.png',
    },
    {
      title: 'Inventory Management',
      description: 'Turn your content library into shoppable inventory. Schedule campaigns, manage brand partnerships, track attribution.',
      benefit: 'Complete campaign control',
      imagePlaceholder: 'inventory-management-demo.png',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
            setActiveFeature(0);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const startInterval = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      
      intervalRef.current = setInterval(() => {
        setActiveFeature((prev) => (prev + 1) % features.length);
      }, 6000);
    };

    startInterval();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [hasStarted, features.length]);

  const handleFeatureClick = (index) => {
    setActiveFeature(index);
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    intervalRef.current = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 6000);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.solution-title', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.solution-title',
          start: 'top 80%',
        },
      });

      gsap.from('.demo-container', {
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.demo-container',
          start: 'top 75%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="pt-12 md:pt-16 pb-6 md:pb-8 relative bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]">
      <div className="container-custom">
        {/* Title */}
        <div className="solution-title mb-8 md:mb-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 tracking-tight">
              What Our Platform Does?
            </h2>
            <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
              Four powerful features that transform passive viewing into active shopping
            </p>
          </motion.div>
        </div>

        {/* Demo Container */}
        <div className="demo-container max-w-5xl mx-auto">
          {/* Image Demo Area - Reduced Height */}
          <div className="mb-6 bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <div className="relative h-[55vh] md:h-[60vh] bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f]">
              {/* Image Display */}
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={`/images/${features[activeFeature].imagePlaceholder}`}
                  alt={features[activeFeature].title}
                  fill
                  className="object-cover"
                  priority={activeFeature === 0}
                />
              </motion.div>

              {/* Feature Info Overlay */}
              <motion.div 
                key={`overlay-${activeFeature}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10"
              >
                <div className="max-w-2xl">
                  <h4 
                    className="text-2xl md:text-3xl font-bold text-white mb-2"
                    style={{
                      filter: 'drop-shadow(0 0 8px rgba(0,0,0,0.6)) drop-shadow(0 0 16px rgba(0,0,0,0.5)) drop-shadow(0 0 24px rgba(0,0,0,0.4))',
                      textShadow: '0 0 12px rgba(0,0,0,0.6), 0 0 24px rgba(0,0,0,0.5)'
                    }}
                  >
                    {features[activeFeature].title}
                  </h4>
                  <p 
                    className="text-white text-base md:text-lg mb-2"
                    style={{
                      filter: 'drop-shadow(0 0 8px rgba(0,0,0,0.6)) drop-shadow(0 0 16px rgba(0,0,0,0.5))',
                      textShadow: '0 0 12px rgba(0,0,0,0.6), 0 0 20px rgba(0,0,0,0.5)'
                    }}
                  >
                    {features[activeFeature].description}
                  </p>
                  <div 
                    className="inline-block px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full border border-white/20"
                    style={{
                      filter: 'drop-shadow(0 0 8px rgba(0,0,0,0.5))'
                    }}
                  >
                    <span className="text-white text-sm font-semibold">
                      ⚡ {features[activeFeature].benefit}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Feature Navigation - Compact */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => handleFeatureClick(index)}
                className={`group relative p-4 md:p-6 rounded-xl text-left transition-all duration-500 ${
                  activeFeature === index
                    ? 'bg-white text-black scale-105'
                    : 'bg-[#1a1a1a] text-white hover:bg-[#222222] border border-white/10'
                }`}
              >
                <div className="relative z-10">
                  {/* <div className="text-xs font-semibold uppercase tracking-wider mb-2 opacity-60">
                    Feature {index + 1}
                  </div> */}
                  <h5 className="text-base md:text-lg font-bold mb-1">
                    {feature.title}
                  </h5>
                  <p className={`text-xs md:text-sm ${activeFeature === index ? 'text-black/70' : 'text-gray-400'}`}>
                    {feature.benefit}
                  </p>
                </div>

                {activeFeature === index && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-primary"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 6, ease: 'linear' }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Integration Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-8 text-center"
        >
          <div className="inline-block bg-[#1a1a1a] border border-white/10 rounded-2xl px-6 py-4 shadow-lg">
            <p className="text-sm md:text-base text-gray-400">
              <span className="font-bold text-white">API-ready in 48-72 hours</span> • No coding expertise needed • Works with all major platforms
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}