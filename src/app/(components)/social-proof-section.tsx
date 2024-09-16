'use client';

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TikTokIcon } from "./tiktok-icon";

export function SocialProofSection() {
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
                  src="/scott-newkirk.png"
                  alt="Scott Newkirk"
                />

                <AvatarFallback>SN</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-gray-700 mb-4">
                  "I transformed my TikTok live streaming hobby into a lucrative
                  career. In my first month of livestreaming, I went from
                  earning nothing to making{" "}
                  <span className="text-purple-600 font-semibold">
                    $6,000, with an average of $60 per hour
                  </span>
                  . This unexpected success became the foundation of
                  ViralVisions."
                </p>
                <p className="text-gray-700 mb-4">
                  At ViralVisions, we're not just sharing a success story –
                  we're offering you a blueprint for your own TikTok triumph.
                  Our mission is to equip aspiring live streamers with the
                  strategies, tools, and support needed to unlock their full
                  potential on the platform. What's truly remarkable is that
                  these results were achieved with less than 3,500 followers,
                  proving that a large following isn't necessary to start
                  earning. Imagine what you could achieve with our proven
                  methods and dedicated guidance.
                </p>
                <div className="flex items-center">
                  <p className="font-semibold mr-2">
                    Scott Newkirk
                  </p>
                  <p className="text-sm text-gray-500">
                    Co-founder, ViralVisions
                  </p>
                </div>
                <div className="flex items-center mt-2">
                  <TikTokIcon className="h-5 w-5 mr-2" />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-between mt-8">
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-600">
                  $6,000+
                </p>
                <p className="text-sm text-gray-500">
                  First Month
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-600">
                  $60/hour
                </p>
                <p className="text-sm text-gray-500">
                  Average Earnings
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-600">
                  &lt;3,500
                </p>
                <p className="text-sm text-gray-500">
                  Followers
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
