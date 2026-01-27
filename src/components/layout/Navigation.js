// src/components/layout/Navigation.js
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { NAV_LINKS, CTA_LINK } from '@/lib/constants/navigation';
import { SITE_CONFIG } from '@/lib/constants/site';
import { cn } from '@/lib/utils/cn';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' 
          : 'bg-transparent'
      )}
    >
      <nav className="container-custom py-4 md:py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group">
            <span className="text-xl md:text-2xl font-black text-white group-hover:text-primary transition-colors duration-300">
              {SITE_CONFIG.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent-pink group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            
            <Link href={CTA_LINK.href}>
              <button className="px-6 py-2.5 bg-gradient-to-r from-[#FF3B30] to-[#FF2D92] text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
                {CTA_LINK.label}
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center relative z-50"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={cn(
                "w-full h-0.5 bg-white transition-all duration-300 origin-center",
                isMobileMenuOpen && "rotate-45 translate-y-2"
              )} />
              <span className={cn(
                "w-full h-0.5 bg-white transition-all duration-300",
                isMobileMenuOpen && "opacity-0"
              )} />
              <span className={cn(
                "w-full h-0.5 bg-white transition-all duration-300 origin-center",
                isMobileMenuOpen && "-rotate-45 -translate-y-2"
              )} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <div className="container-custom py-8">
              <div className="flex flex-col gap-6">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-white/80 hover:text-white transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                ))}
                
                <Link href={CTA_LINK.href} onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="w-full mt-4 px-6 py-4 bg-gradient-to-r from-[#FF3B30] to-[#FF2D92] text-white text-base font-semibold rounded-full">
                    {CTA_LINK.label}
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}