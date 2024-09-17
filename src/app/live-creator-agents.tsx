'use client';

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Calculator, Users, DollarSign } from "lucide-react";

export default function LiveCreatorAgentPage() {
  const [referralCreators, setReferralCreators] = useState(1);
  const [managingTotal, setManagingTotal] = useState(20);
  const [tiktokKnowledge, setTiktokKnowledge] = useState(1);

  const calculateReferralEarnings = (creators: number) => {
    return creators * 60; // 60 per referral
  };

  const calculateManagingEarnings = (
    totalManaged: number,
    knowledge: number,
  ) => {
    return (totalManaged * 50) + (knowledge * 30);
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center mb-6">
        For Agents
      </h1>
      <p className="text-xl text-center text-muted-foreground mb-8">
        Join our network as an agent and unlock your earning potential
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <Card
          className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900"
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-6 w-6" />
              Managing Agent
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Badge variant="secondary">
                  1
                </Badge>
                Manage talents directly
              </li>
              <li className="flex items-center gap-2">
                <Badge variant="secondary">
                  2
                </Badge>
                Source and recruit creators
              </li>
              <li className="flex items-center gap-2">
                <Badge variant="secondary">
                  3
                </Badge>
                Develop growth strategies
              </li>
            </ul>
            <h3 className="font-semibold mt-4">
              Benefits:
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                High-return opportunity
              </li>
              <li className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                No location restrictions
              </li>
              <li className="flex items-center gap-2">
                <Calculator className="h-4 w-4" />
                Valuable experience
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card
          className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900 dark:to-teal-900"
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-6 w-6" />
              Referral Agent
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Badge variant="secondary">
                  1
                </Badge>
                Refer talents to our network
              </li>
              <li className="flex items-center gap-2">
                <Badge variant="secondary">
                  2
                </Badge>
                No management required
              </li>
            </ul>
            <h3 className="font-semibold mt-4">
              Benefits:
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Lifetime referral bonuses
              </li>
              <li className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Passive income potential
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="managing" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="managing">
            Managing Agent Calculator
          </TabsTrigger>
          <TabsTrigger value="referral">
            Referral Agent Calculator
          </TabsTrigger>
        </TabsList>
        <TabsContent value="managing">
          <Card>
            <CardHeader>
              <CardTitle>
                Managing Agent Earnings Calculator
              </CardTitle>
              <CardDescription>
                Estimate your potential earnings as a Managing Agent
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Total influencers managed:
                  </label>
                  <Input
                    type="number"
                    value={managingTotal}
                    onChange={(e) => setManagingTotal(Number(e.target.value))}
                    className="w-full"
                    min="0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    TikTok knowledge level (1-5):
                  </label>
                  <Slider
                    value={[tiktokKnowledge]}
                    onValueChange={(value) => setTiktokKnowledge(value[0])}
                    max={5}
                    step={1}
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Level: {tiktokKnowledge}
                  </p>
                </div>
                <div className="border-t pt-4">
                  <h3 className="text-lg font-semibold">
                    Potential Weekly Earnings
                  </h3>
                  <p className="text-4xl font-bold text-purple-600">
                    $
                    {calculateManagingEarnings(
                      managingTotal,
                      tiktokKnowledge,
                    ).toFixed(2)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="referral">
          <Card>
            <CardHeader>
              <CardTitle>
                Referral Agent Earnings Calculator
              </CardTitle>
              <CardDescription>
                Estimate your potential earnings as a Referral Agent
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Number of influencers you can bring on board per week:
                  </label>
                  <Input
                    type="number"
                    value={referralCreators}
                    onChange={(e) => setReferralCreators(Number(e.target.value))}
                    className="w-full"
                    min="0"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Average: 1 talent per week
                </p>
                <div className="border-t pt-4">
                  <h3 className="text-lg font-semibold">
                    Potential Monthly Earnings
                  </h3>
                  <p className="text-4xl font-bold text-purple-600">
                    ${calculateReferralEarnings(referralCreators).toFixed(2)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <p className="text-sm text-center text-muted-foreground mt-4">
        *This calculator provides estimates for demonstration purposes only.
        Actual income may vary.
      </p>
    </div>
  );
}