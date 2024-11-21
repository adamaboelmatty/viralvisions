import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy } from "lucide-react";

const milestones = [
  { diamonds: 100000, reward: null },
  { diamonds: 200000, reward: 100 },
  { diamonds: 300000, reward: null },
  { diamonds: 400000, reward: null },
  { diamonds: 500000, reward: null },
  { diamonds: 600000, reward: 250 },
  { diamonds: 700000, reward: null },
  { diamonds: 800000, reward: null },
  { diamonds: 900000, reward: null },
  { diamonds: 1000000, reward: 500 },
  { diamonds: 1200000, reward: null },
  { diamonds: 1300000, reward: null },
  { diamonds: 1400000, reward: null },
  { diamonds: 1500000, reward: 750 },
  { diamonds: 1600000, reward: null },
  { diamonds: 1700000, reward: null },
  { diamonds: 1800000, reward: null },
  { diamonds: 1900000, reward: null },
  { diamonds: 2000000, reward: 1000 },
];

const creators = [
  { username: "glen.tb8", diamondCount: 100000, currentStreak: 5 },
  { username: "lexaaajane", diamondCount: 150000, currentStreak: 12 },
  { username: "haileygracieee", diamondCount: 200000, currentStreak: 8 },
  { username: "josiebae9", diamondCount: 250000, currentStreak: 15 },
  { username: "hill.andrew", diamondCount: 300000, currentStreak: 20 },
  { username: "samthomas_1", diamondCount: 350000, currentStreak: 4 },
  { username: "mariahbarelaa", diamondCount: 400000, currentStreak: 25 },
  { username: "haileybattista", diamondCount: 450000, currentStreak: 18 },
  { username: "graceschouvieller", diamondCount: 500000, currentStreak: 30 },
  { username: "hevbev_3", diamondCount: 550000, currentStreak: 7 },
  { username: ".brazipapi", diamondCount: 600000, currentStreak: 22 },
  { username: "biggergoofy", diamondCount: 650000, currentStreak: 9 },
  { username: "j.f.banks", diamondCount: 700000, currentStreak: 14 },
  { username: "elainabenoit", diamondCount: 750000, currentStreak: 28 },
  { username: "bbellabarreras", diamondCount: 800000, currentStreak: 11 },
  { username: "valen10sanchez", diamondCount: 850000, currentStreak: 16 },
  { username: "blondielift", diamondCount: 900000, currentStreak: 21 },
  { username: "brilampert", diamondCount: 950000, currentStreak: 6 },
  { username: "treasurerinaldi", diamondCount: 1000000, currentStreak: 19 },
  { username: "aaron.s16", diamondCount: 1100000, currentStreak: 24 },
  { username: "sydney.erin27", diamondCount: 1200000, currentStreak: 13 },
  { username: "milenajoycee", diamondCount: 1300000, currentStreak: 17 },
  { username: "nqlan", diamondCount: 1400000, currentStreak: 23 },
  { username: "rhayatherton", diamondCount: 1500000, currentStreak: 10 },
  { username: "matthardy88", diamondCount: 1600000, currentStreak: 26 },
  { username: "mariangelikmunoz", diamondCount: 1700000, currentStreak: 29 },
  { username: "_ryan10101_", diamondCount: 1800000, currentStreak: 8 },
  { username: "aboelmatty", diamondCount: 1900000, currentStreak: 15 },
  { username: "zboocka", diamondCount: 2000000, currentStreak: 31 },
  { username: "kendraamckee", diamondCount: 100000, currentStreak: 4 },
  { username: "meggan_horn", diamondCount: 100000, currentStreak: 7 },
  { username: "theportersonntag", diamondCount: 100000, currentStreak: 9 },
  { username: "_juliannaortiz", diamondCount: 100000, currentStreak: 5 },
];

export function MilestoneBoard() {
  const getStreakEmoji = (days: number) => {
    if (days >= 30) return "👑";
    if (days >= 10) return "🌟";
    if (days >= 3) return "🔥";
    return null;
  };

  const getDaysUntilNextTier = (currentStreak: number) => {
    if (currentStreak < 3) return `${3 - currentStreak} days until 🔥`;
    if (currentStreak < 10) return `${10 - currentStreak} days until 🌟`;
    if (currentStreak < 30) return `${30 - currentStreak} days until 👑`;
    return "Maximum streak tier achieved!";
  };

  const formatDiamondCount = (count: number) => {
    return `${(count / 1000).toFixed(0)}K`;
  };

  const getCreatorsForMilestone = (milestone: number) => {
    return creators
      .filter(
        (creator) =>
          creator.diamondCount >= milestone &&
          creator.diamondCount < milestone + 100000,
      )
      .sort((a, b) => b.currentStreak - a.currentStreak);
  };

  return (
    <div className="space-y-8">
      {/* Change grid-cols-10 to be responsive */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-2 sm:gap-3">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className={`relative min-h-[160px] sm:h-32 rounded-lg flex flex-col items-center justify-between p-2 sm:p-4 ${
              milestone.reward ? "bg-[#FFD700]" : "bg-[#7B2CBF]"
            } ${milestone.reward ? "text-black" : "text-white"}`}
          >
            <div className="text-center w-full">
              <div className="text-lg sm:text-xl font-bold">
                {(milestone.diamonds / 1000).toFixed(0)}K
              </div>
              {milestone.reward && (
                <div className="bg-white rounded-lg py-1 px-2 mx-auto w-fit mt-1">
                  <div className="text-purple-600 font-semibold">
                    ${milestone.reward}
                  </div>
                </div>
              )}
            </div>

            <div className="w-full px-1 overflow-y-auto">
              <div className="flex flex-wrap justify-center gap-1">
                {getCreatorsForMilestone(milestone.diamonds).slice(0, 4).map((creator) => (
                  <div key={creator.username} className="relative group">
                    <div className="relative">
                      <Avatar className="h-8 w-8 sm:h-10 sm:w-10 border-2 border-white">
                        <AvatarImage
                          src={`https://picsum.photos/seed/${creator.username}/40/40`}
                        />
                        <AvatarFallback>
                          {creator.username[0].toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      {getStreakEmoji(creator.currentStreak) && (
                        <div className="absolute -top-1 -right-1 text-xs sm:text-sm">
                          {getStreakEmoji(creator.currentStreak)}
                        </div>
                      )}
                    </div>
                    {/* Mobile-friendly tooltip positioning */}
                    <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 w-48 sm:w-64 bg-black/90 text-white text-xs rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 p-2">
                      <div className="space-y-1">
                        <h4 className="font-semibold">{creator.username}</h4>
                        <p>Diamonds: {formatDiamondCount(creator.diamondCount)}</p>
                        <p>Streak: {creator.currentStreak} days</p>
                      </div>
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/90 rotate-45"></div>
                    </div>
                  </div>
                ))}
                {getCreatorsForMilestone(milestone.diamonds).length > 4 && (
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-white/20 flex items-center justify-center text-white text-sm">
                    +{getCreatorsForMilestone(milestone.diamonds).length - 4}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-500" />
            Reward Milestones
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {milestones
              .filter((m) => m.reward)
              .map((milestone, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-gradient-to-br from-yellow-100 to-yellow-200 text-center"
                  id={`el_27_${index}`}
                >
                  <div className="font-bold text-lg" id={`el_28_${index}`}>
                    {(milestone.diamonds / 1000).toFixed(0)}K
                  </div>
                  <div className="text-sm text-gray-700" id={`el_29_${index}`}>
                    Reward: ${milestone.reward}
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}