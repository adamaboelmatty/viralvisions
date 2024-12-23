'use client';

import React from "react";
import { HeroSection } from "./(components)/hero-section";
import { SocialProofSection } from "./(components)/social-proof-section";
import { CTASection } from "./(components)/cta-section";
import { FeaturesSection } from "./(components)/features-section";
import { HowItWorks } from "./(components)/how-it-works";
import { FAQSection } from "./(components)/faq-section";
import { LogoBannerSection } from './(components)/logo-banner-section';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

export default function Home({ setCurrentPage }: HomeProps) {
  return (
    <div className="space-y-0 py-16">
      <HeroSection setCurrentPage={setCurrentPage} />
      <LogoBannerSection />
      <SocialProofSection />
      <CTASection
        title="Join Now for Exclusive Benefits"
        description="Gain instant access to essential resources like Stream Keys, Ban Protection, and more."
        setCurrentPage={setCurrentPage}
      />

      <FeaturesSection />
      <HowItWorks setCurrentPage={setCurrentPage} />
      <CTASection
        title="Unlock the Full Potential of Your TikTok Live Streams"
        description="Take your TikTok Live earnings to new heights with ViralVisions"
        setCurrentPage={setCurrentPage}
      />

      <FAQSection />
    </div>
  );
}
