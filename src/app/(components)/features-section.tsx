import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Key,
  Shield,
  DollarSign,
  Headphones,
  Star,
  ChevronRight,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function FeaturesSection() {
    const scrollToHowItWorks = () => {
      const element = document.getElementById('how-it-works');
      element?.scrollIntoView({ behavior: 'smooth' });
    };
  
    const scrollToSocialProof = () => {
      const element = document.getElementById('social-proof');
      element?.scrollIntoView({ behavior: 'smooth' });
    };

  const features = [
    {
      icon: Key,
      title: "Stream Keys",
      description:
        "Unlock advanced streaming capabilities with our proprietary technology",
      benefits: [
        "Higher retention rates",
        "Better engagement",
        "Exclusive features",
      ],

      exclusive: true,
      testimonial: {
        quote: "3x increase in viewer retention",
        author: "@zboocka",
        avatar: "/zach.png",
      },
    },
    {
      icon: Shield,
      title: "Ban Protection",
      description:
        "Advanced 24/7 account security system with proactive monitoring",
      benefits: ["Real-time monitoring", "Instant support", "Risk prevention"],
      exclusive: true,
      testimonial: {
        quote: "Haven't had a single issue since joining",
        author: "@matthardy88",
        avatar: "/matthardy.png"
      },
    },
    {
      icon: DollarSign,
      title: "Monetization Support",
      description: "Strategic revenue optimization with proven methods",
      benefits: ["Revenue strategies", "Gift optimization", "Growth planning"],
      exclusive: false,
      testimonial: {
        quote: "Doubled my earnings in first month",
        author: "@blondielift",
        avatar: "/deanna.png",
      },
    },
    {
      icon: Headphones,
      title: "Expert Training",
      description: "Personalized mentorship program with industry experts",
      benefits: ["1-on-1 coaching", "Weekly workshops", "Resource library"],
      exclusive: true,
      testimonial: {
        quote: "The training transformed my approach",
        author: "@_ryan10101_",
        avatar: "/ryan.png",
      },
    },
  ];

  const comparisonData = [
    {
      feature: "Stream Keys",
      before: "Limited viewer retention",
      after: "Proprietary technology boosting engagement",
      impact: "2-3x viewer retention increase",
    },
    {
      feature: "Ban Protection",
      before: "Account vulnerability",
      after: "24/7 advanced protection system",
      impact: "99.9% account security rate",
    },
    {
      feature: "Monetization Support",
      before: "Inconsistent earnings",
      after: "Strategic revenue optimization",
      impact: "Average $5,000+ monthly earnings",
    },
    {
      feature: "Expert Training",
      before: "Self-guided learning",
      after: "Personalized mentorship program",
      impact: "Proven success roadmap",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Key Benefits
        </h2>

        {/* Feature Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <Card
              key={index}
              className="relative transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
<CardHeader className="flex flex-row items-start space-x-4 pb-2 relative"> {/* Added relative */}
  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-purple-100">
    <feature.icon className="w-8 h-8 text-purple-600" />
  </div>
  <div className="flex-1">
    <CardTitle className="text-xl mb-2">
      {feature.title}
    </CardTitle>
  </div>
  {feature.exclusive && (
    <Badge className="absolute -top-4 -right-2 bg-purple-600"> {/* Updated positioning */}
      Exclusive
    </Badge>
  )}
</CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {feature.benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm"
                    >
                      <Star
                        className="w-4 h-4 text-purple-600 mr-2"
                      />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="border-t pt-4">
                  <div
                    className="flex items-center space-x-3"
                  >
                    <Avatar className="w-8 h-8">
                      <AvatarImage
                        src={feature.testimonial.avatar}
                      />
                      <AvatarFallback>
                        {feature.testimonial.author[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p
                        className="text-sm italic"
                      >
                        {feature.testimonial.quote}
                      </p>
                      <p
                        className="text-xs text-gray-500"
                      >
                        {feature.testimonial.author}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mt-16">
          <h3
            className="text-2xl font-bold text-center mb-8"
          >
            Before & After Comparison
          </h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Feature</TableHead>
                <TableHead>
                  Before ViralVisions
                </TableHead>
                <TableHead>
                  With ViralVisions
                </TableHead>
                <TableHead>Impact</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell
                    className="font-medium"
                  >
                    {row.feature}
                  </TableCell>
                  <TableCell
                    className="text-red-500"
                  >
                    <span
                      className="flex items-center"
                    >
                      <span className="mr-2">
                        ✕
                      </span>
                      {row.before}
                    </span>
                  </TableCell>
                  <TableCell
                    className="text-green-600"
                  >
                    <span
                      className="flex items-center"
                    >
                      <span className="mr-2">
                        ✓
                      </span>
                      {row.after}
                    </span>
                  </TableCell>
                  <TableCell
                    className="text-purple-600 font-semibold"
                  >
                    {row.impact}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Call-to-Action Buttons */}
 <div className="flex justify-center space-x-6 mt-12">
          <Button
            size="lg"
            className="bg-purple-600 text-white hover:bg-purple-700 transform transition-all duration-300 hover:scale-105"
            onClick={scrollToHowItWorks}
          >
            See How It Works
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
          variant="outline"
          size="lg"
          className="hover:bg-purple-50 transform transition-all duration-300 hover:scale-105"
          onClick={() => window.location.href = 'https://viralvisions.live/testimonials'}
        >
          View Success Stories
        </Button>
        </div>
      </div>
    </section>
  );
}
