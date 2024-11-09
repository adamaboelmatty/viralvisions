import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

const LiveEarningsCounter = ({ floating = false }) => {
  const [count, setCount] = useState(10224); // Updated starting amount
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => {
        const increment = Math.floor(Math.random() * (100 - 50) + 50); // Increment between 50-250
        return prevCount + increment;
      });
    }, 15000); // Updates every 5 minutes (300000ms)

    return () => clearInterval(interval);
  }, []);

  const formattedCount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(count);

  if (floating) {
    return (
      <div className="fixed bottom-4 right-4 z-50 animate-fade-in">
        <Card className="bg-purple-600 text-white p-4 shadow-lg">
          <div className="flex items-center space-x-2">
            <DollarSign className="w-5 h-5" />
            <div>
              <div className="text-sm font-medium">Creator Bonuses Distributed</div>
              <div className="text-xl font-bold">{formattedCount}</div>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-[280px]">
      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg flex items-center gap-3">
        <div className="bg-purple-600 rounded-full p-2">
          <DollarSign className="w-6 h-6 text-white" />
        </div>
        <div className="text-left">
          <div className="text-sm text-gray-600 font-medium">Creator Bonuses Distributed</div>
          <div className="text-2xl font-bold text-purple-600">{formattedCount}</div>
        </div>
      </div>
    </div>
  );
};

export default LiveEarningsCounter;

