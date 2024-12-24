import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Script from 'next/script';

const DiamondCalculatorComponent = dynamic(
  () => import('./components/DiamondCalculatorComponent'),
  { ssr: true }
);

export const metadata: Metadata = {
  title: 'TikTok Diamonds Calculator | Free LIVE Stream Earnings Calculator',
  description: 'Calculate your TikTok LIVE diamonds to USD instantly. Get exact diamond rates, conversion calculators, and expert tips to maximize your earnings. Updated for 2024.',
  keywords: 'TikTok diamonds calculator, TikTok LIVE earnings, diamonds to USD, TikTok creator earnings, diamond rate calculator',
  openGraph: {
    title: 'TikTok Diamonds Calculator | Free LIVE Stream Earnings Calculator',
    description: 'Calculate your TikTok LIVE diamonds to USD instantly. Get exact diamond rates and maximize your earnings.',
    type: 'website',
    url: 'https://viralvisions.live/tiktok-diamonds-calculator',
    siteName: 'ViralVisions',
  },
};

// JSON-LD Schema
const calculatorSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'TikTok Diamonds Calculator',
  applicationCategory: 'Calculator',
  description: 'Free calculator to convert TikTok diamonds to USD and estimate LIVE stream earnings',
  operatingSystem: 'Web-based',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  author: {
    '@type': 'Organization',
    name: 'ViralVisions',
    url: 'https://viralvisions.live',
  },
  dateModified: '2024-12-23', // Update this regularly
  browserRequirements: 'Requires JavaScript. Works on all modern browsers.',
  url: 'https://viralvisions.live/tiktok-diamonds-calculator',
  image: 'public/logo.png', // Add your actual logo URL
};

export default function Page() {
  return (
    <>
      <Script
        id="calculator-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }}
      />
      <DiamondCalculatorComponent />
    </>
  );
}