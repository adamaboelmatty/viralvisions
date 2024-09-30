'use client';

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ChartContainer } from "@/components/ui/chart";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { Users, DollarSign, TrendingUp, HelpCircle } from "lucide-react";

const AgentDashboard = () => {
  const agentData = {
    name: "John Doe",
    avatar: "https://github.com/yusufhilmi.png",
    creatorsManaged: 15,
    recruitmentStats: 3,
    earningsStatus: "Eligible",
    eligibilityProgress: 85,
    pendingPayout: 1250,
  };

  const performanceData = [
    { date: "2023-01", hours: 120 },
    { date: "2023-02", hours: 150 },
    { date: "2023-03", hours: 180 },
    { date: "2023-04", hours: 200 },
    { date: "2023-05", hours: 220 },
    { date: "2023-06", hours: 250 },
  ];

  return (
    <div className="flex flex-col h-screen bg-background">
      <header
        className="flex justify-between items-center p-4 border-b"
      >
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage
              src={agentData.avatar}
              alt={agentData.name}
            />

            <AvatarFallback>
              {agentData.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold">
              {agentData.name}
            </h1>
            <p className="text-muted-foreground">
              Live Creator Agent
            </p>
          </div>
        </div>
      </header>
      <main className="flex-1 p-6 overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Agent Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Creators Managed:</span>
                  <span className="font-bold">
                    {agentData.creatorsManaged}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Recruitment Stats:</span>
                  <span className="font-bold">
                    {agentData.recruitmentStats} this month
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Earnings Status:</span>
                  <Badge
                    variant={
                      agentData.earningsStatus === "Eligible"
                        ? "default"
                        : "secondary"
                    }
                  >
                    {agentData.earningsStatus}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Eligibility Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Progress
                  value={agentData.eligibilityProgress}
                  className="w-full"
                />

                <p
                  className="text-sm text-muted-foreground text-center"
                >
                  {agentData.eligibilityProgress}% of monthly goals completed
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Payout Tracker</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Pending Payout:</span>
                  <span className="font-bold">
                    ${agentData.pendingPayout}
                  </span>
                </div>
                <Button className="w-full">
                  View Payout History
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Performance Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}} className="h-[300px]">
              <AreaChart
                data={performanceData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="hours"
                  stroke="hsl(var(--primary))"
                  fill="hsl(var(--primary))"
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </main>
      <nav className="flex justify-around p-4 bg-muted">
        <Button variant="ghost">
          <Users className="h-5 w-5 mr-2" />
          Creators
        </Button>
        <Button variant="ghost">
          <DollarSign className="h-5 w-5 mr-2" />
          Earnings
        </Button>
        <Button variant="ghost">
          <TrendingUp className="h-5 w-5 mr-2" />
          Analytics
        </Button>
        <Button variant="ghost">
          <HelpCircle className="h-5 w-5 mr-2" />
          Support
        </Button>
      </nav>
    </div>
  );
};

export default AgentDashboard;
