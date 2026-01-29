import { Inter } from 'next/font/google';
import './globals.css';
import SmoothScrollProvider from '@/components/animations/SmoothScrollProvider';
// import MagneticCursor from '@/components/ui/MagneticCursor';
import FloatingCTA from '@/components/ui/FloatingCTA';
import { SITE_CONFIG } from '@/lib/constants/site';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
  description: SITE_CONFIG.description,
  keywords: ['video commerce', 'shoppable video', 'OTT platform', 'AR try-on', 'video monetization', 'entertainment commerce'],
  authors: [{ name: SITE_CONFIG.name }],
  openGraph: {
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: 'en_US',
    type: 'website',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {/* <MagneticCursor /> */}
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        <FloatingCTA />
      </body>
    </html>
  );
}