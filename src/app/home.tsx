'use client';

import React from "react";
import { HeroSection } from "./(components)/hero-section";
import { SocialProofSection } from "./(components)/social-proof-section";
import { CTASection } from "./(components)/cta-section";
import { FeaturesSection } from "./(components)/features-section";
import { HowItWorks } from "./(components)/how-it-works";
import { FAQSection } from "./(components)/faq-section";

export default function Home() {
  return (
    <div className="space-y-16 py-16">
      <HeroSection />
      <SocialProofSection />
      <CTASection
        title="Join Now for Exclusive Benefits"
        description="Get access to Stream Keys, Ban Protection, and more!"
      />

      <FeaturesSection />
      <HowItWorks />
      <CTASection
        title="Unlock the Full Potential of Your TikTok Live Streams"
        description="Take your TikTok Live presence to new heights with ViralVisions"
      />

      <FAQSection />
    </div>
  );
}
