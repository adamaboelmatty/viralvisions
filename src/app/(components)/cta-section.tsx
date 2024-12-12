'use client';

import React from "react";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title: string;
  description: string;
  setCurrentPage: (page: string) => void;
}

export function CTASection({ title, description, setCurrentPage }: CTASectionProps) {
  return (
    <section className="animated-cta-gradient text-white py-16 m-0">
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
          onClick={() => setCurrentPage("eligibility")}
        >
          Get Started Now
        </Button>
      </div>
    </section>
  );
}