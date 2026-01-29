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
  title: 'VideoVogue - AI-Powered Video Commerce Platform',
  description: 'Transform any video into a shoppable storefront with AI-driven tagging. Reduce manual effort by 80% and boost conversions by up to 3x. Live in 48-72 hours.',
  keywords: 'video commerce, AI product tagging, shoppable video, OTT platform, streaming commerce, interactive video',
  authors: [{ name: 'VideoVogue' }],
  creator: 'VideoVogue',
  publisher: 'VideoVogue',
  metadataBase: new URL('https://videovogue.ai'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'VideoVogue - AI-Powered Video Commerce Platform',
    description: 'Transform any video into a shoppable storefront with AI-driven tagging. Reduce manual effort by 80% and boost conversions by up to 3x.',
    url: 'https://videovogue.ai',
    siteName: 'VideoVogue',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'VideoVogue Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VideoVogue - AI-Powered Video Commerce Platform',
    description: 'Transform any video into a shoppable storefront with AI-driven tagging. Reduce manual effort by 80% and boost conversions by up to 3x.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

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