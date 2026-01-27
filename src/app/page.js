import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import TrustBanner from '@/components/sections/TrustBanner';
import ProblemStory from '@/components/sections/ProblemStory';
import SolutionShowcase from '@/components/sections/SolutionShowcase';
import BeforeAfter from '@/components/sections/BeforeAfter';
import HowItWorks from '@/components/sections/HowItWorks';
import MarketOpportunity from '@/components/sections/MarketOpportunity';
import SocialProof from '@/components/sections/SocialProof';
import CTASection from '@/components/sections/CTASection';
import PartnerStrip from '@/components/sections/PartnerStrip';

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#0a0a0a]">
        <Hero />
        <PartnerStrip />
        <div id="features">
          <ProblemStory />
        </div>
        <div id="solutions">
          <SolutionShowcase />
          <HowItWorks />
        </div>
        <div id="transformation">
          <BeforeAfter />
        </div>
        <SocialProof />
        <TrustBanner />
        <div id="market">
          <MarketOpportunity />
        </div>
        <div id="demo">
          <CTASection />
        </div>
      </main>
      <Footer />
    </>
  );
}