'use client';

import React from "react";
import { Button } from "@/components/ui/button";

export function HeroSection({ setCurrentPage }) {
  return (
    <section
      className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center"
      >
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6"
        >
          Empower Your TikTok Live Journey with ViralVisions
        </h1>
        <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
          Take your TikTok Live presence to the next level with expert
          strategies and support.
        </p>
        <Button
          size="lg"
          className="bg-white text-purple-600 hover:bg-gray-100"
          onClick={() => setCurrentPage("eligibility")}
        >
          Get Started
        </Button>
      </div>
    </section>
  );
}
