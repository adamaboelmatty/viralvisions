'use client';

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      question: "What if I'm not a TikTok expert yet?",
      answer:
        "Starting from zero? Perfect! Many of our most successful creators had no TikTok experience when they joined. Our comprehensive training system is designed specifically for beginners, walking you through every step of becoming a successful LIVE streamer. We've helped hundreds of complete beginners transform into confident creators earning consistent income. Take Sarah, who started with zero followers and now earns over $5,000 monthly through our proven system. Your dedication combined with our guidance is all you need to succeed.",
    },
    {
      question: "How quickly can I grow my audience?",
      answer:
        "While rapid follower growth is exciting, we focus on something more valuable: engaged viewers who become loyal supporters. Our creators typically see their viewer counts double or triple in their first week using our strategies. We help you build genuine connections that convert to real earnings, not just empty numbers. Most importantly, we'll teach you how to maintain and grow these relationships over time, creating a sustainable income stream. Within 30 days, our average creator reaches over 100 concurrent viewers - the sweet spot for consistent earnings.",
    },
    {
      question: "What makes ViralVisions different?",
      answer:
        "We pride ourselves on being the agency that gives back the most to our creators in the industry. Through our unique revenue-sharing model of TikTok's platform fee, we're able to offer creators the most favorable terms available. Beyond our industry-leading compensation model, we provide comprehensive support including 24/7 access to our dedicated strategy team, complete ban protection, and a proven success system that's helped over 100 creators achieve their goals. We succeed when you succeed, which is why we invest so heavily in your growth and protection.",
    },
    {
      question: "Is there really no catch?",
      answer:
        "We believe in total transparency: our partnership is completely free to join because we've aligned our success with yours. You keep 100% of your earnings, and we share in TikTok's platform fee - with an industry-leading split that puts more money in your pocket. There are no hidden fees, no surprise charges, and no long-term contracts. You can cancel anytime. Our model is built on trust and mutual success, which is why we invest so heavily in your growth from day one.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <p className="mt-8 text-sm text-gray-500 text-center">
          Disclaimer: Personal earning figures and results listed above or in my
          marketing materials are not always typical and are the result of hard
          work training, experimenting, and learning from mistakes. These
          figures and results are used specifically as examples. Your results
          will vary depending on a wide variety of variables and factors.
        </p>
      </div>
    </section>
  );
}
