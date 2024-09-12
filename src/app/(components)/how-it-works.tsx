'use client';

import React from "react";
import { Button } from "@/components/ui/button";

interface HowItWorksProps {
  setCurrentPage: (page: string) => void;
}

export function HowItWorks({ setCurrentPage }: HowItWorksProps) {
  const steps = [
    {
      number: "01",
      title: "Check Eligibility",
      description: "See if you qualify to join ViralVisions",
      action: "Check Eligibility",
    },
    {
      number: "02",
      title: "Profile assessment",
      description:
        "A member of our team will share your profile with TikTok to assess whether you are eligible to join the agency.",
    },
    {
      number: "03",
      title: "Receive invitation",
      description:
        "You will receive an invitation directly on your TikTok app if your profile is validated. Once you accept the invitation, you will be part of the agency!",
    },
  ];

  return (
    <section
      className="py-16 bg-gradient-to-br from-purple-100 to-indigo-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          How it Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div
                className="text-3xl font-bold text-purple-600 mb-4"
              >
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {step.description}
              </p>
              {step.action && (
                <Button
                  className="bg-purple-600 text-white hover:bg-purple-700"
                  onClick={() => setCurrentPage("eligibility")}
                >
                  {step.action}
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
