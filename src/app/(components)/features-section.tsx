'use client';

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Key,
  Shield,
  DollarSign,
  Headphones,
  Users,
  Briefcase,
  TrendingUp,
  Award,
} from "lucide-react";

export function FeaturesSection() {
  const [activeTab, setActiveTab] = useState("live-creator");

  const liveCreatorFeatures = [
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

  const liveCreatorAgentFeatures = [
    {
      title: "Manage Talents",
      description: "Directly manage and guide TikTok Live creators",
      icon: Users,
    },
    {
      title: "Recruitment",
      description: "Source and recruit new creators for the platform",
      icon: Briefcase,
    },
    {
      title: "Growth Strategies",
      description: "Develop and implement strategies for creator growth",
      icon: TrendingUp,
    },
    {
      title: "Earning Potential",
      description: "High-return opportunity based on creator success",
      icon: Award,
    },
  ];

  const liveCreatorBenefits = [
    { feature: "Stream Key", before: "❌", after: "✅" },
    { feature: "False Ban Protection", before: "❌", after: "✅" },
    { feature: "Professional Training", before: "❌", after: "✅" },
    { feature: "Monetization Assistance", before: "❌", after: "✅" },
  ];

  const liveCreatorAgentBenefits = [
    { feature: "Manage Multiple Creators", before: "❌", after: "✅" },
    { feature: "Recruitment Tools", before: "❌", after: "✅" },
    { feature: "Performance Analytics", before: "❌", after: "✅" },
    { feature: "Commission-based Earnings", before: "❌", after: "✅" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Key Benefits
        </h2>
        <Tabs
          defaultValue="live-creator"
          className="mb-12"
          onValueChange={setActiveTab}
        >
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="live-creator">
              Live Creator
            </TabsTrigger>
            <TabsTrigger value="live-creator-agent">
              Live Creator Agent
            </TabsTrigger>
          </TabsList>
          <TabsContent value="live-creator">
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
            >
              {liveCreatorFeatures.map((feature, index) => (
                <Card key={index} id={`r9zv2a-${index}`}>
                  <CardHeader id={`f2exd1-${index}`}>
                    <feature.icon className="h-10 w-10 text-purple-600 mb-4" />
                    <CardTitle id={`1ip2h5-${index}`}>
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent id={`jvduhd-${index}`}>
                    <p className="text-gray-600" id={`rbr9fu-${index}`}>
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="live-creator-agent">
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
            >
              {liveCreatorAgentFeatures.map((feature, index) => (
                <Card key={index} id={`agent-card-${index}`}>
                  <CardHeader id={`agent-header-${index}`}>
                    <feature.icon className="h-10 w-10 text-purple-600 mb-4" />
                    <CardTitle id={`agent-title-${index}`}>
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent id={`agent-content-${index}`}>
                    <p className="text-gray-600" id={`agent-desc-${index}`}>
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        <h3 className="text-2xl font-bold text-center mb-8">
          Benefits Comparison
        </h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Feature</TableHead>
              <TableHead>Before Joining</TableHead>
              <TableHead>After Joining</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {(activeTab === "live-creator"
              ? liveCreatorBenefits
              : liveCreatorAgentBenefits
            ).map((benefit, index) => (
              <TableRow key={index} id={`bhumcu-${index}`}>
                <TableCell className="font-medium" id={`kwz5et-${index}`}>
                  {benefit.feature}
                </TableCell>
                <TableCell id={`qzzr33-${index}`}>{benefit.before}</TableCell>
                <TableCell
                  className="text-purple-600 font-semibold"
                  id={`rx713w-${index}`}
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
