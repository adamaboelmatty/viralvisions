import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

const DiamondCalculatorComponent = dynamic(
  () => import('./components/DiamondCalculatorComponent'),
  { ssr: true }
);

export const metadata: Metadata = {
  title: 'TikTok Diamonds Calculator | Calculate LIVE Stream Earnings | ViralVisions',
  description: 'Use our free TikTok Diamonds Calculator to estimate your potential earnings from LIVE streams. Get accurate conversion rates and expert tips to maximize your TikTok earnings.',
  keywords: 'TikTok diamonds calculator, TikTok live earnings, TikTok coins conversion, diamonds to USD, TikTok creator earnings, ViralVisions',
  openGraph: {
    title: 'TikTok Diamonds Calculator | ViralVisions',
    description: 'Calculate your potential TikTok LIVE earnings and learn how to maximize your diamond revenue.',
    type: 'website',
    url: 'https://viralvisions.live/tiktok-diamonds-calculator',
    siteName: 'ViralVisions',
  },
};

export default function Page() {
  return <DiamondCalculatorComponent />;
}