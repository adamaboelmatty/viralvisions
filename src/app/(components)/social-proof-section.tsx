import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function SocialProofSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
        {
      name: "Savannah Hazlewood",
      role: "TikTok LIVE Creator",
      avatar: "/savannah-hazlewood.png",
      content: `"Joining ViralVisions was a game-changer for my TikTok career. Within my first 30 days, I saw my earnings skyrocket to <span class="text-purple-600 font-semibold">$8,000, averaging $75 per hour</span>. The support and strategies provided were invaluable."`,
      description: `ViralVisions didn't just help me grow my following; they taught me how to monetize effectively. Their personalized approach and expert guidance helped me navigate the complexities of TikTok's algorithm and audience engagement. Even with a modest following, I was able to achieve remarkable results. ViralVisions truly empowers creators to turn their passion into a profitable venture.`,
      stats: [
        { value: "$8,000+", label: "First Month" },
        { value: "$75/hour", label: "Average Earnings" },
        { value: "33,000+", label: "Followers" },
      ],
    },
    {
      name: "Scott Newkirk",
      role: "Co-founder, ViralVisions",
      avatar: "/scott-newkirk.png",
      content: `"I transformed my TikTok live streaming hobby into a lucrative career. In my first month of livestreaming, I went from earning nothing to making <span class="text-purple-600 font-semibold">$6,000, with an average of $60 per hour</span>. This unexpected success became the foundation of ViralVisions."`,
      description: `At ViralVisions, we're not just sharing a success story – we're offering you a blueprint for your own TikTok triumph. Our mission is to equip aspiring live streamers with the strategies, tools, and support needed to unlock their full potential on the platform. What's truly remarkable is that these results were achieved with less than 3,500 followers, proving that a large following isn't necessary to start earning. Imagine what you could achieve with our proven methods and dedicated guidance.`,
      stats: [
        { value: "$6,000+", label: "First Month" },
        { value: "$60/hour", label: "Average Earnings" },
        { value: "<3,500", label: "Followers" },
      ],
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const currentProfile = testimonials[currentTestimonial];

  return (
    <section className="bg-purple-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          From Novice to TikTok Pro: The ViralVisions Story
        </h2>
        <Card className="bg-white p-6 rounded-lg shadow-md">
          <CardContent>
            <div
              className="flex flex-col md:flex-row items-start gap-6"
            >
              <Avatar className="h-24 w-24 md:h-32 md:w-32">
                <AvatarImage
                  src={currentProfile.avatar}
                  alt={currentProfile.name}
                />

                <AvatarFallback>
                  {currentProfile.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p
                  className="text-gray-700 mb-4"
                  dangerouslySetInnerHTML={{ __html: currentProfile.content }}
                ></p>
                <p className="text-gray-700 mb-4">
                  {currentProfile.description}
                </p>
                <div className="flex items-center">
                  <p className="font-semibold mr-2">
                    {currentProfile.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {currentProfile.role}
                  </p>
                </div>
                <div className="flex items-center mt-2">
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-between mt-8">
              {currentProfile.stats.map((stat, index) => (
                <div className="text-center" key={index} id={`stat-${index}`}>
                  <p
                    className="text-2xl font-bold text-purple-600"
                    id={`stat-value-${index}`}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-sm text-gray-500"
                    id={`stat-label-${index}`}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6 space-x-4">
              <Button
                onClick={prevTestimonial}
                variant="outline"
                size="icon"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                onClick={nextTestimonial}
                variant="outline"
                size="icon"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}