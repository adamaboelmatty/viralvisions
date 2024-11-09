// hero-section.tsx
'use client';

import React from "react";
import { Button } from "@/components/ui/button";
import LiveEarningsCounter from "@/components/LiveEarningsCounter";
import { DollarSign, Play as PlayIcon } from "lucide-react";

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

        {/* Side by side container with equal widths */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <LiveEarningsCounter />
          
          <div className="bg-white rounded-lg p-4 shadow-lg flex items-center gap-3 hover:bg-gray-50 transition-colors cursor-pointer w-[280px]" onClick={() => setCurrentPage("eligibility")}>
            <div className="bg-purple-600 rounded-full p-2">
              <PlayIcon className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <div className="text-sm text-gray-600 font-medium">Ready to Earn?</div>
              <div className="text-2xl font-bold text-purple-600">Apply Now</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}