'use client';

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Key, Shield, DollarSign, Headphones } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      title: "Stream Keys",
      description: "Access to special features for enhanced streaming",
      icon: Key,
    },
    {
      title: "False Ban Protection",
      description: "Safeguard your account against unwarranted bans",
      icon: Shield,
    },
    {
      title: "Monetization Strategies",
      description: "Maximize your earnings from TikTok Live",
      icon: DollarSign,
    },
    {
      title: "Training & Support",
      description: "Comprehensive guidance and 24/7 assistance",
      icon: Headphones,
    },
  ];

  const benefitsComparison = [
    { feature: "Stream Key", before: "❌", after: "✅" },
    { feature: "False Ban Protection", before: "❌", after: "✅" },
    { feature: "Training", before: "❌", after: "✅" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Key Features
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <feature.icon className="h-10 w-10 text-purple-600 mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <h3 className="text-2xl font-bold text-center mb-8">
          Benefits Comparison
        </h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Feature</TableHead>
              <TableHead>Before Joining Agency</TableHead>
              <TableHead>After Joining Agency</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {benefitsComparison.map((benefit, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  {benefit.feature}
                </TableCell>
                <TableCell>{benefit.before}</TableCell>
                <TableCell
                  className="text-purple-600 font-semibold"
                >
                  {benefit.after}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
