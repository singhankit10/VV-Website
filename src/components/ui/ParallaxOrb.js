'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/animations/gsapConfig';

export default function ParallaxOrb({ color, size, position, blur = 'blur-3xl', speed = 0.5 }) {
  const orbRef = useRef(null);

  useEffect(() => {
    gsap.to(orbRef.current, {
      yPercent: -50 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: orbRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });
  }, [speed]);

  return (
    <div
      ref={orbRef}
      className={`absolute ${position} ${size} ${color} ${blur} rounded-full pointer-events-none`}
    />
  );
}