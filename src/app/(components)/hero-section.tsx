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
<<<<<<< HEAD
          Unlock Your TikTok Live Potential with ViralVisions
        </h1>
        <p className="text-xl sm:text-2xl mb-8 max-w-4xl mx-auto">
        Boost Your Earnings and Influence: Expert Strategies for TikTok Live Success
=======
          Transform Your TikTok LIVE into a Lucrative Career
        </h1>
        <p className="text-xl sm:text-2xl mb-8 max-w-4xl mx-auto">
        Join 100+ creators who transformed their LIVE streams into profitable businesses with our proven system
>>>>>>> 68e4be4 (Added logo banner section showcasing brand partnerships)
        </p>
        <Button
          size="lg"
          className="bg-white text-purple-600 hover:bg-gray-100"
          onClick={() => setCurrentPage("eligibility")}
        >
<<<<<<< HEAD
          Get Started
=======
          Start Earning Now
>>>>>>> 68e4be4 (Added logo banner section showcasing brand partnerships)
        </Button>
      </div>
    </section>
  );
}