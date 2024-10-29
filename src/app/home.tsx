'use client';

import React from "react";
import { HeroSection } from "./(components)/hero-section";
import { SocialProofSection } from "./(components)/social-proof-section";
import { CTASection } from "./(components)/cta-section";
import { FeaturesSection } from "./(components)/features-section";
import { HowItWorks } from "./(components)/how-it-works";
import { FAQSection } from "./(components)/faq-section";
<<<<<<< HEAD
=======
import { LogoBannerSection } from './(components)/logo-banner-section';
>>>>>>> 68e4be4 (Added logo banner section showcasing brand partnerships)

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

export default function Home({ setCurrentPage }: HomeProps) {
  return (
    <div className="space-y-16 py-16">
      <HeroSection setCurrentPage={setCurrentPage} />
<<<<<<< HEAD
=======
      <LogoBannerSection />
>>>>>>> 68e4be4 (Added logo banner section showcasing brand partnerships)
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
