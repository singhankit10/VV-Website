// src/lib/animations/gsapConfig.js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  
  // Performance optimization
  ScrollTrigger.config({
    limitCallbacks: true,
    syncInterval: 30,
  });
}

export { gsap, ScrollTrigger };