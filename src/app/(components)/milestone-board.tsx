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
      <div className="grid grid-cols-10 gap-2">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className={`relative h-32 rounded-lg flex flex-col items-center justify-between p-4 ${
              milestone.reward ? "bg-[#FFD700]" : "bg-[#7B2CBF]"
            } ${milestone.reward ? "text-black" : "text-white"}`}
            id={`el_2_${index}`}
          >
            <div className="text-center" id={`el_3_${index}`}>
              <div className="text-sm font-bold" id={`el_4_${index}`}>
                {(milestone.diamonds / 1000).toFixed(0)}K
              </div>
              {milestone.reward && (
                <div className="text-xs font-semibold" id={`el_5_${index}`}>
                  ${milestone.reward}
                </div>
              )}
            </div>

            <ScrollArea className="h-20 w-full px-1" id={`el_6_${index}`}>
              <div className="grid grid-cols-2 gap-1" id={`el_7_${index}`}>
                {getCreatorsForMilestone(milestone.diamonds).map(
                  (creator, idx) => (
                    <HoverCard key={creator.username} id={`el_8_${index}`}>
                      <HoverCardTrigger id={`el_9_${index}`}>
                        <div className="relative" id={`el_10_${index}`}>
                          <Avatar
                            className="h-10 w-10 border-2 border-white"
                            id={`el_11_${index}`}
                          >
                            <AvatarImage
                              src={`https://picsum.photos/seed/${creator.username}/40/40`}
                              id={`el_12_${index}`}
                            />

                            <AvatarFallback id={`el_13_${index}`}>
                              {creator.username[0].toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          {getStreakEmoji(creator.currentStreak) && (
                            <div
                              className="absolute -top-2 -right-2 text-sm"
                              id={`el_14_${index}`}
                            >
                              {getStreakEmoji(creator.currentStreak)}
                            </div>
                          )}
                        </div>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-64" id={`el_15_${index}`}>
                        <div className="space-y-2" id={`el_16_${index}`}>
                          <h4
                            className="text-sm font-semibold"
                            id={`el_17_${index}`}
                          >
                            {creator.username}
                          </h4>
                          <p className="text-sm" id={`el_18_${index}`}>
                            Diamonds: {formatDiamondCount(creator.diamondCount)}
                          </p>
                          <p className="text-sm" id={`el_19_${index}`}>
                            Current Streak: {creator.currentStreak} days
                          </p>
                          <p
                            className="text-xs text-muted-foreground"
                            id={`el_20_${index}`}
                          >
                            {getDaysUntilNextTier(creator.currentStreak)}
                          </p>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  ),
                )}
              </div>
            </ScrollArea>
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