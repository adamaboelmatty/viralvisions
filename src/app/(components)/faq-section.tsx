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
      question: "What if I'm new to TikTok/Social Media?",
      answer:
        "ViralVisions is designed to help you get started and succeed with Social Media/TikTok Livestream. Our program will guide you through setting up your first Livestream on day 1 to massively scaling your Livestream quickly and profitably. We deliberately cover a wide range of topics to ensure you understand how to create an amazing community, grow your audience, and optimize your livestream. No matter your level of experience, ViralVisions aims to provide super valuable, comprehensive insights and strategies to help you make the most of your Social Media and Livestream grow.",
    },
    {
      question: "Will this teach me how to grow my Following on TikTok?",
      answer:
        "Absolutely! You shouldn't have a great Livestream without great content! ViralVisions will teach you best-practices and strategies on what to post, how much, and when to post, for the best TikTok content (even if you don't have prior video editing experience) - Ensuring that your social media account is effective, engaging, and built for TikTok's complex algorithm.",
    },
    {
      question: "How would ViralVisions help me?",
      answer:
        "When you join ViralVisions, you get the Livestream Masterclass for free (29 powerful videos on how to effectively start going Live), a Kickstart Call with a Livestream Expert for free, and access to our amazing community of Live-streamers to connect with for free. ViralVisions is a community of positive people helping lift each other up and growing together to make the world a better place.",
    },
    {
      question: "Is it actually free?",
      answer:
        "Yes, ViralVisions is actually free. You do not have to sign any contract, or pay any money to join today! There is absolutely no risk in joining, and you have everything to gain if you discover that you love it!",
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
