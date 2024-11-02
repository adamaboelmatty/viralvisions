// hero-section.tsx
'use client';

import React from "react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  setCurrentPage: (page: string) => void;
}

export function HeroSection({ setCurrentPage }: HeroSectionProps) {
  return (
    <section
      className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center"
      >
        <h1
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6"
        >
          Transform Your TikTok LIVE into a Lucrative Career
        </h1>
        <p className="text-xl sm:text-2xl mb-8 max-w-4xl mx-auto">
          Join 100+ creators who transformed their LIVE streams into profitable businesses with our proven system
        </p>
        <Button
          size="lg"
          className="bg-white text-purple-600 hover:bg-gray-100"
          onClick={() => setCurrentPage("eligibility")}
        >
          Start Earning Now
        </Button>
      </div>
    </section>
  );
}