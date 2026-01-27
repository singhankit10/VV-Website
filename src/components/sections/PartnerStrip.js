// src/components/sections/PartnerStrip.js
'use client';

import Image from 'next/image';

export default function PartnerStrip() {
  const partners = [
    { name: 'CJ Affiliate', logo: '/images/partners/cj-affiliate.png' },
    { name: 'Rakuten Advertising', logo: '/images/partners/rakuten.png' },
    { name: 'Impact.com', logo: '/images/partners/impact.png' },
    { name: 'Awin', logo: '/images/partners/awin.png' },
    { name: 'Optimise Media', logo: '/images/partners/optimise.png' },
    { name: 'Flex Offers', logo: '/images/partners/flexoffers.png' },
    { name: 'Commission Junction', logo: '/images/partners/commission-junction.png' },
  ];

  return (
    <section className="relative bg-[#0a0a0a] py-12 overflow-hidden border-t border-white/5">
      {/* Scrolling container */}
      <div className="relative">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

        {/* Infinite scroll wrapper */}
        <div className="flex animate-scroll">
          {/* First set of logos */}
          {partners.map((partner, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-12 flex items-center justify-center"
            >
              <div className="relative h-12 w-32 opacity-60 hover:opacity-100 transition-opacity duration-300">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {partners.map((partner, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-12 flex items-center justify-center"
            >
              <div className="relative h-12 w-32 opacity-60 hover:opacity-100 transition-opacity duration-300">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}

          {/* Third set for extra smoothness */}
          {partners.map((partner, index) => (
            <div
              key={`third-${index}`}
              className="flex-shrink-0 mx-12 flex items-center justify-center"
            >
              <div className="relative h-12 w-32 opacity-60 hover:opacity-100 transition-opacity duration-300">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes partner-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.33%);
          }
        }

        .animate-scroll {
          animation: partner-scroll 25s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}