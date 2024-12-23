import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calculator, Diamond, Coins, Clock, DollarSign, Users, Gift } from 'lucide-react';

export const metadata = {
  title: 'TikTok Diamonds Calculator | Calculate LIVE Stream Earnings | ViralVisions',
  description: 'Use our free TikTok Diamonds Calculator to estimate your potential earnings from LIVE streams. Get accurate conversion rates and expert tips to maximize your TikTok earnings.',
  keywords: 'TikTok diamonds calculator, TikTok live earnings, TikTok coins conversion, diamonds to USD, TikTok creator earnings, ViralVisions'
};

export default function DiamondCalculator() {
  const [diamonds, setDiamonds] = useState('');
  const [earnings, setEarnings] = useState(0);
  const [level, setLevel] = useState('');

  const calculateEarnings = () => {
    const diamondCount = parseInt(diamonds) || 0;
    const estimatedEarnings = diamondCount * 0.005;
    setEarnings(estimatedEarnings);

    if (diamondCount < 100000) setLevel('Beginner Creator');
    else if (diamondCount < 500000) setLevel('Rising Star');
    else if (diamondCount < 1000000) setLevel('Pro Creator');
    else setLevel('Elite Creator');
  };

  return (
    <div className="min-h-screen bg-[#F8F7FF]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white bg-[#2D3748]/10 p-4 rounded-lg inline-block">
            Calculate Your TikTok LIVE Earnings
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90 bg-[#2D3748]/10 p-4 rounded-lg">
            Get instant calculations for your diamond earnings and learn how to maximize your TikTok LIVE income
          </p>
        </div>
      </div>

      {/* Calculator Section */}
      <div className="container mx-auto px-4 -mt-10">
        <Card className="bg-white shadow-xl">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Calculator Input */}
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-[#2D3748]">
                  Calculate Your Earnings
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Enter your total diamonds received:
                    </label>
                    <Input
                      type="number"
                      value={diamonds}
                      onChange={(e) => setDiamonds(e.target.value)}
                      placeholder="e.g., 50000"
                      className="w-full border-purple-200 focus:border-purple-500"
                    />
                  </div>
                  <Button 
                    onClick={calculateEarnings}
                    className="w-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white"
                  >
                    <Calculator className="mr-2 h-4 w-4" />
                    Calculate Earnings
                  </Button>
                </div>
              </div>

              {/* Results Display */}
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-[#2D3748]">Your Results</h3>
                {earnings > 0 && (
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-700">Estimated Earnings:</p>
                      <p className="text-3xl font-bold text-[#8B5CF6]">
                        ${earnings.toFixed(2)} USD
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-700">Creator Level:</p>
                      <p className="text-xl font-semibold text-[#7C3AED]">
                        {level}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-purple-200">
                      <p className="text-sm text-gray-700 font-medium">
                        Want to earn more? Join ViralVisions to unlock your full earning potential!
                      </p>
                      <Button 
                        className="mt-2 bg-[#8B5CF6] text-white hover:bg-[#7C3AED] shadow-md"
                        onClick={() => window.location.href = '/apply'}
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Information Sections */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Understanding TikTok Coins */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-[#2D3748]">Understanding TikTok's Virtual Currency System</h2>
            
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">What Are TikTok Coins?</h3>
                <p className="text-gray-700 mb-4">
                  TikTok coins are the primary virtual currency used to purchase gifts during LIVE streams. These coins can be bought with real money and are essential for supporting your favorite creators.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Coin Purchase Options</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• 100 coins: $0.99</li>
                      <li>• 500 coins: $4.99</li>
                      <li>• 1,000 coins: $9.99</li>
                      <li>• 2,000 coins: $19.99</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Important Notes</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Purchases through web portal may have different rates</li>
                      <li>• Platform fees may apply</li>
                      <li>• Bulk purchases often offer better value</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Converting Diamonds to USD</h3>
                <p className="text-gray-700 mb-4">
                  When viewers send gifts during your LIVE streams, these are converted to diamonds in your creator account. The current conversion rates are:
                </p>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <ul className="space-y-2 text-gray-700">
                    <li>• 1 Diamond = $0.005 USD</li>
                    <li>• 1,000 Diamonds = $5 USD</li>
                    <li>• 10,000 Diamonds = $50 USD</li>
                    <li>• 100,000 Diamonds = $500 USD</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Maximizing Your Diamond Earnings</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Best Practices</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Stream during peak hours</li>
                      <li>• Engage actively with viewers</li>
                      <li>• Create consistent streaming schedules</li>
                      <li>• Build a loyal viewer base</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Advanced Strategies</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Host interactive events</li>
                      <li>• Collaborate with other creators</li>
                      <li>• Use trending hashtags</li>
                      <li>• Optimize your LIVE title and description</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Maximize Your TikTok LIVE Earnings?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join ViralVisions and get expert guidance to grow your TikTok LIVE income
          </p>
          <Button 
            className="bg-white text-[#8B5CF6] hover:bg-gray-100 shadow-lg"
            onClick={() => window.location.href = '/apply'}
          >
            Start Your Journey
          </Button>
        </div>
      </div>

      {/* FAQs */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">When can I withdraw my diamond earnings?</h3>
              <p className="text-gray-700">
                You can withdraw your earnings once you reach the minimum threshold of $100 USD. Payments are typically processed monthly by TikTok. Make sure your payment information is properly set up in your creator account.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">How do I start earning diamonds?</h3>
              <p className="text-gray-700">
                To start earning diamonds, you need to meet TikTok's LIVE streaming requirements and build an engaged audience. Join ViralVisions to learn proven strategies for growing your LIVE viewership and increasing your diamond earnings.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">Are diamond values the same worldwide?</h3>
              <p className="text-gray-700">
                Diamond values can vary slightly by region and may be affected by exchange rates. The calculator above uses standard USD rates, but actual earnings might vary based on your location and local currency.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}