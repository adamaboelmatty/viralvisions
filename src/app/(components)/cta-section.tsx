// cta-section.tsx
'use client';

import React from "react";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title: string;
  description: string;
}

export function CTASection({ title, description }: CTASectionProps) {
  const handleApply = () => {
    window.location.href = 'https://aboelmatty.notion.site/12e71460c3cb8056be60d14315388005';
  };

  return (
    <section className="bg-purple-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          {title}
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          {description}
        </p>
        <Button
          size="lg"
          className="bg-white text-purple-600 hover:bg-gray-100"
          onClick={handleApply}
        >
          Get Started Now
        </Button>
      </div>
    </section>
  );
}