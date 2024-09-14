import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function SocialProofSection() {
  return (
    <section className="bg-gradient-to-r from-purple-100 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">
          From Novice to TikTok Pro: The ViralVisions Story
        </h2>
        <Card className="bg-white p-6 rounded-lg shadow-lg">
          <CardContent>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="flex flex-col items-center justify-between h-full">
                <Avatar className="h-24 w-24 md:h-32 md:w-32">
                  <AvatarImage src="/scott-newkirk.png" alt="Scott Newkirk" />
                  <AvatarFallback>SN</AvatarFallback>
                </Avatar>
                <a href="https://www.tiktok.com/@scottyjfit" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 mt-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
              <div>
                <blockquote className="text-lg text-gray-700 mb-6 italic">
                  "I transformed my TikTok live streaming hobby into a lucrative career. In my first month of livestreaming, I went from earning nothing to making <span className="font-bold text-purple-600">$6,000, with an average of $60 per hour</span>. This unexpected success became the foundation of ViralVisions."
                </blockquote>
                <p className="text-gray-700 mb-6">
                  At ViralVisions, we're not just sharing a success story – we're offering you a blueprint for your own TikTok triumph. Our mission is to equip aspiring live streamers with the strategies, tools, and support needed to unlock their full potential on the platform. What's truly remarkable is that these results were achieved with less than 3,500 followers, proving that a large following isn't necessary to start earning. Imagine what you could achieve with our proven methods and dedicated guidance.
                </p>
                <div className="flex items-center mb-6">
                  <p className="font-semibold mr-2">Scott Newkirk</p>
                  <p className="text-sm text-gray-500">Co-founder, ViralVisions</p>
                </div>
                <div className="flex justify-between text-center">
                  <div>
                    <p className="font-bold text-purple-800 text-2xl">$6,000+</p>
                    <p className="text-gray-600">First Month</p>
                  </div>
                  <div>
                    <p className="font-bold text-purple-800 text-2xl">$60/hour</p>
                    <p className="text-gray-600">Average Earnings</p>
                  </div>
                  <div>
                    <p className="font-bold text-purple-800 text-2xl">&lt;3,500</p>
                    <p className="text-gray-600">Followers</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}