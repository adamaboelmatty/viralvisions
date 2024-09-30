'use client';

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function LiveCreators() {
  const offerings = [
    {
      number: "1",
      title: "Livestream on TikTok",
      description:
        "Personal team + profesisonal guidance. Guiding creators through everything they need to know about TikTok Live.",
    },
    {
      number: "2",
      title: "Exclusive Events",
      description:
        "Get exclusive traffic boosts and access to TikTok LIVE's official campaigns to maximize reach.",
    },
    {
      number: "3",
      title: "Monetization Assistance",
      description:
        "ViralVisions helps creators align their content with TikTok LIVE's monetization models.",
    },
    {
      number: "4",
      title: "Content Guidance",
      description:
        "Creators will receive personalized guidance on content production teams to help with logistics.",
    },
  ];

  const faqs = [
    {
      question: "What's in it for me? Do you take a cut of my profits?",
      answer:
        "You keep 100% of what you make on the platform. TikTok pays us directly proportional to what our streamers make. So, the bigger you are and the better you perform in your streams, the better it is for us :)",
    },
    {
      question:
        "Can I leave the ViralVisions anytime I want or am I stuck in a contract?",
      answer:
        "This partnership is completely voluntary. We offer a 14-day trial period with the option to remove yourself from our roster. After the 14 days, either party can remove themselves from the partnership.",
    },
    {
      question:
        "I don't get it, how do we make money from going Live on Tiktok?",
      answer:
        "Gifts through personal branding and community building! Gifts received on TikTok Live equate to money that you can cash out every week. For example: 100 coins (or diamonds) = $1 USD, creators make 50% of every gift sent, so for every $1 USD you'd make 50 cents.",
    },
    {
      question: "How can ViralVisions help me monetize?",
      answer:
        "We will be your strategy team through every step of the way. We have proven methods on traffic, monetization, and community building, all of which to be covered throughout our 4 week program. Some examples of this are activate your viewers to light up gift galleries, assisting with gift goals and live battles to win big!",
    },
  ];

  return (
    <div className="space-y-16 py-16">
      <section
        className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-24"
      >
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-8">
            TikTok Livestream Creator Program
          </h1>
          <p
            className="text-xl text-center mb-12 max-w-3xl mx-auto"
          >
            As TikTok Live's official partner, ViralVisions helps creators grow
            a following, and monetize their talent with our FREE creator
            partnership.
          </p>
          <div className="text-center">
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100"
            >
              Join Now
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offerings.map((offering, index) => (
            <Card key={index} className="bg-gray-100">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div
                    className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0"
                  >
                    {offering.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {offering.title}
                    </h3>
                    <p className="text-gray-600">
                      {offering.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}
