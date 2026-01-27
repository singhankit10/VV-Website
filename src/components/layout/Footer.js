// src/components/layout/Footer.js
'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/[0.08]">
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Section - Larger */}
          <div className="lg:col-span-5">
            <div className="mb-6">
              <h3 className="text-2xl font-black text-white mb-3">
                VideoVogue
              </h3>
              <p className="text-base text-gray-400 mb-4 max-w-md">
                Turn Every Frame Into Revenue
              </p>
              <p className="text-sm text-gray-500 leading-relaxed max-w-md">
                Transforming entertainment commerce with AI-powered shoppable video experiences.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a 
                href="tel:+14086340911" 
                className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/[0.1] flex items-center justify-center group-hover:border-cyan-500/30 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">+1 (408) 634-0911</span>
              </a>

              <a 
                href="mailto:Contact@videovogue.ai" 
                className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/[0.1] flex items-center justify-center group-hover:border-cyan-500/30 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Contact@videovogue.ai</span>
              </a>

              <div className="flex items-start gap-3 text-gray-500">
                <div className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/[0.1] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-sm leading-relaxed pt-2">
                  <div>131 Continental Drive,</div>
                  <div>Newark, Delaware 19713</div>
                  <div>United States</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-gray-400 hover:text-white hover:border-white/[0.2] hover:bg-white/[0.08] transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-gray-400 hover:text-white hover:border-white/[0.2] hover:bg-white/[0.08] transition-all"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-gray-400 hover:text-white hover:border-white/[0.2] hover:bg-white/[0.08] transition-all"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#demo" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Demo
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#blog" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#careers" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#cookies" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/[0.08]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {currentYear} VideoVogue. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>Contact@videovogue.ai</span>
              <span className="hidden md:inline">•</span>
              <span>Delaware, US</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}