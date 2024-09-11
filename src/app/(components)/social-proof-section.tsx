'use client';

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function SocialProofSection() {
  const testimonials = [
    {
      name: "Alex Johnson",
      handle: "@alexjohnson",
      content:
        "ViralVisions helped me grow my TikTok following from 1K to 100K in just 3 months!",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "Sarah Lee",
      handle: "@sarahlee",
      content:
        "The strategies provided by ViralVisions have been game-changing for my live streams.",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      name: "Mike Chen",
      handle: "@mikechen",
      content:
        "I've seen a 500% increase in engagement since working with ViralVisions. Highly recommended!",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <p className="text-gray-600 mb-4">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />

                  <AvatarFallback>
                    {testimonial.name[0]}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonial.handle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
