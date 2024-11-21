'use client';

import React from "react";
import { Trophy, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Modal } from './modal';

// Types
interface User {
  id: string;
  username: string;
  avatarUrl: string;
  diamondCount: number;
  currentStreak: number;
  validDays: number;
}

interface Milestone {
  label: string;
  diamonds: number;
  reward: boolean;
  rewardAmount: number;
}

export default function Rankings() {
  const [selectedMilestone, setSelectedMilestone] = React.useState<number | null>(null);

  const allMilestones = Array.from({ length: 20 }, (_, i) => {
    const value = (i + 1) * 100000;
    const label = value >= 1000000 ? 
      `${(value / 1000000).toFixed(1)}M` : 
      `${value / 1000}K`;

    const isReward = [1, 5, 9, 14, 19].includes(i);
    const rewardAmount = isReward ? 
      i === 1 ? 100 : 
      i === 5 ? 250 : 
      i === 9 ? 500 : 
      i === 14 ? 750 : 
      1000 : 0;

    return {
      label,
      diamonds: value,
      reward: isReward,
      rewardAmount
    };
  });

  const users = [
    {
      id: "7430639971188523025",
      username: "blondielift",
      avatarUrl: "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/f279f03c55f2e3283caedbde37748069~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=75706&refresh_token=7d0eaecda5e3468bffdd6f90b916d0e5&x-expires=1732233600&x-signature=cQZ%2BgIrTmBD7OkfUXiDLL14No3s%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 287335,
      currentStreak: 11,
      validDays: 11
    },
    {
      id: "7430599854776156176",
      username: "treasurerinaldi",
      avatarUrl: "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/d138a0ac7d63fb18963ff01f7d5f5f28~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=50940&refresh_token=553fd0eca8c2f1b49834465486e4bea5&x-expires=1732233600&x-signature=tERP6IcZ7I91J9YkAf2g9b1TQgs%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 101770,
      currentStreak: 6,
      validDays: 6
    },
    {
      id: "7429910374083805201",
      username: "_ryan10101_",
      avatarUrl: "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/b630c5982ed3b26e5441c4f4308e9b0a~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=98597&refresh_token=e6c60df3011d84f83d0a4ba6ef41b197&x-expires=1732233600&x-signature=zxHFXZ6IBcVOLp7y%2BZ2GYagXMBk%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 90082,
      currentStreak: 8,
      validDays: 8
    },
    {
      id: "7434529706084663297",
      username: "hill.andrew",
      avatarUrl: "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/5f9e20ea62693a9c07ddc68651a91413~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=9502&refresh_token=1ea5f67969416d3ecfb3f8f565bc6728&x-expires=1732233600&x-signature=xOlZgvecWeANX1juExPDbr3t63M%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 75122,
      currentStreak: 5,
      validDays: 5
    },
    {
      id: "7428762234568081424",
      username: "_juliannaortiz",
      avatarUrl: "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/a821c34283898af48002ab9e7d8e0edc~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=6406&refresh_token=48f0e4fc750de5cbbbe9911ce9e97361&x-expires=1732233600&x-signature=gstosqgAxH2hmSUGNXX92zP4rMk%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 49371,
      currentStreak: 5,
      validDays: 5
    },
    {
      id: "7428778607167717393",
      username: "meggan_horn",
      avatarUrl: "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/921df000bb99f72264c08d607eae7102~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=71533&refresh_token=e336a3d79a7418787ae3429339a31f37&x-expires=1732233600&x-signature=GOylSwQBx%2Br5ljTPFV5nR%2FLtrRk%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 24315,
      currentStreak: 9,
      validDays: 9
    },
    {
      id: "7429909675828625409",
      username: "zboocka",
      avatarUrl: "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/51aa50d9451289ee7e226cb7e380a6ea~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=22795&refresh_token=0f0aff7e46cf46d80451da65ba4a621c&x-expires=1732233600&x-signature=HiReaX01bokXzpOpY0YIla0ccuQ%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 21405,
      currentStreak: 4,
      validDays: 4
    },
    {
      id: "7434692820197457937",
      username: "josiebae9",
      avatarUrl: "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/8c7b533a793cd23f99b5ba2ec0e250db~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=74760&refresh_token=7aa9692b0382e3bfb40dcc725706ce73&x-expires=1732233600&x-signature=3TirRKkqRb1V0juBXA58i0%2BslU0%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 20841,
      currentStreak: 1,
      validDays: 1
    },
    {
      id: "7433525532181921809",
      username: "graceschouvieller",
      avatarUrl: "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/9788d959487ce02871bcea13a6492511~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=75775&refresh_token=a4c55c8276043a310c7ea1553f8874b3&x-expires=1732233600&x-signature=WAfqYq11rJlGENOvZ5GVDcQ236s%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 17726,
      currentStreak: 6,
      validDays: 6
    },
    {
      id: "7433967653015797776",
      username: "samthomas_1",
      avatarUrl: "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/cb90aa792569e17f0697defa6250b070~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=55154&refresh_token=5427170b7f4565b0bf8540e1d35a1678&x-expires=1732233600&x-signature=UCvbVVlkJPxxC2hQGVIwY2xuAMc%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 10686,
      currentStreak: 2,
      validDays: 2
    },
    {
      id: "7429916855852122129",
      username: "matthardy88",
      avatarUrl: "https://p19-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/2f883ab2ea8cdb1223ffbca1b582390b~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=105&refresh_token=9a17ea6dea8c510830d7b698bf0377c4&x-expires=1732233600&x-signature=eucyT9kzLEd8HlAiDTI%2BcgFC6%2FE%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 9670,
      currentStreak: 4,
      validDays: 4
    },
    {
      id: "7428778451936542736",
      username: "theportersonntag",
      avatarUrl: "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/10094ef56d1c5c825d7c56a2808ece67~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=45971&refresh_token=35f6a3b180e5b97349818af0ea26af8d&x-expires=1732233600&x-signature=VvMS6aryGFGogJLncCxeWMGWBRk%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 228211,
      currentStreak: 2,
      validDays: 2
    },
    {
      id: "7435873073317888001",
      username: "lexaaajane",
      avatarUrl: "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/db6cc1bdf54e8f141b9b5ebec6811da7~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=53459&refresh_token=85d8aaec53c7a35904e5dccbf22d8bc4&x-expires=1732233600&x-signature=0EHQkhN9nHG0IicNjz%2BxnPdtsm0%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 1183,
      currentStreak: 0,
      validDays: 0
    },
    {
      id: "7430624377831702544",
      username: "brilampert",
      avatarUrl: "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/0065528a58dbf9935402dbd7586caff3~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=71567&refresh_token=0d417f94de614fa0d7116a583164691c&x-expires=1732233600&x-signature=LRjPl54c7cT1n96FoE1OmmMM%2B1A%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 129,
      currentStreak: 1,
      validDays: 1
    },
    {
      id: "7436547557267914768",
      username: "glen.tb8",
      avatarUrl: "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/73d409675002199617239aaecf687df8~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=25023&refresh_token=2c9175191d653040da9cc68fbc147597&x-expires=1732233600&x-signature=WKjVDoti8ZTIuqqYY306H0tDzlo%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 0,
      currentStreak: 0,
      validDays: 0
    },
    {
      id: "7433839668661059601",
      username: "mariahbarelaa",
      avatarUrl: "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/c2f23a54273c6ab8b200fc7b28f40fbc~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=66824&refresh_token=f6c4b8d559a4cb4a9b61eaf2d5228866&x-expires=1732233600&x-signature=S85IAqZyr4rPFidkaI3W%2FBevaSo%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 0,
      currentStreak: 0,
      validDays: 0
    },
    {
      id: "7433827434425843729",
      username: "haileybattista",
      avatarUrl: "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/e80fd296b0ff98d14d2fe18f78fe329d~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=41871&refresh_token=14837bedf7c080c2d604ae6c7836c691&x-expires=1732233600&x-signature=MQfS%2FN5jGiznCU6uMhoT7xUMH7Q%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 0,
      currentStreak: 0,
      validDays: 0
    }
  ].sort((a, b) => b.diamondCount - a.diamondCount);

  const getMilestonePosition = (diamonds: number) => {
    const milestoneRanges = [
      100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000,
      1000000, 1100000, 1200000, 1300000, 1400000, 1500000, 1600000, 1700000,
      1800000, 1900000, 2000000
    ];

    return milestoneRanges.findIndex(range => diamonds < range);
  };

  const getUsersAtMilestone = (milestoneIndex: number) => {
    return users.filter(user => getMilestonePosition(user.diamondCount) === milestoneIndex);
  };

  const getStreakBadge = (days: number) => {
    if (days >= 30) return `👑${days}`;
    if (days >= 10) return `🌟${days}`;
    if (days >= 3) return `🔥${days}`;
    return null;
  };

  const renderMilestoneSquare = (milestone: Milestone, index: number) => {
    const usersAtMilestone = getUsersAtMilestone(index);
    const maxDisplayAvatars = 4;
    const remainingCount = usersAtMilestone.length - maxDisplayAvatars;

    return (
      <div
        key={index}
        onClick={() => setSelectedMilestone(index)}
        className={`rounded-lg p-2 flex flex-col justify-between cursor-pointer hover:scale-105 transition-all duration-300 h-full ${
          milestone.reward ? 'bg-yellow-400 hover:bg-yellow-300' : 'bg-purple-600 hover:bg-purple-500'
        } animate-fade-in relative`}
      >
        <div className="text-white text-center">
          <div className="font-bold text-xl">{milestone.label}</div>
          {milestone.reward && (
            <div className="text-base font-semibold">${milestone.rewardAmount}</div>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2 justify-center items-center mt-2">
          {usersAtMilestone.slice(0, maxDisplayAvatars).map((user) => {
            const streakBadge = getStreakBadge(user.validDays);
            return (
              <div key={user.id} className="relative group">
                <div className="relative">
                  <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center border-2 border-white">
                    <img 
                      src={user.avatarUrl} 
                      alt={user.username}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {streakBadge && (
                    <Badge 
                      className="absolute -top-2 -right-2 text-xs px-1 py-0.5 bg-white text-purple-600"
                    >
                      {streakBadge}
                    </Badge>
                  )}
                </div>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 w-44 p-2 bg-black text-white text-xs rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <p className="font-bold">@{user.username}</p>
                  <p>Diamonds: {user.diamondCount.toLocaleString()}</p>
                  <p>Active Days: {user.validDays}</p>
                </div>
              </div>
            );
          })}
          
          {remainingCount > 0 && (
            <div className="h-12 w-12 rounded-full bg-gray-200 bg-opacity-50 flex items-center justify-center border-2 border-white text-white">
              <span className="text-base font-semibold">+{remainingCount}</span>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col">
      {/* Days Legend */}
      <div className="flex justify-end mb-4">
        <div className="flex gap-2 text-sm">
          <div className="bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
            <span>🔥 3+ Days</span>
          </div>
          <div className="bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
            <span>⭐ 10+ Days</span>
          </div>
          <div className="bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
            <span>👑 30+ Days</span>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="flex-1">
        <div className="grid grid-rows-4 gap-4">
          {[0, 1, 2, 3].map((row) => (
            <div key={row} className="grid grid-cols-5 gap-4">
              {allMilestones
                .slice(row * 5, (row + 1) * 5)
                .map((milestone, index) => renderMilestoneSquare(milestone, row * 5 + index))}
            </div>
          ))}
        </div>
      </div>

      {/* Reward Milestones */}
      <div className="mt-8 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Trophy className="h-5 w-5 text-yellow-500" />
          <h2 className="text-xl font-bold">Reward Milestones</h2>
        </div>
        <div className="grid grid-cols-5 gap-4 bg-yellow-50 p-4 rounded-lg">
          {allMilestones
            .filter(m => m.reward)
            .map((milestone, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg text-center shadow-sm border border-yellow-200"
              >
                <div className="font-bold text-xl mb-1">{milestone.label}</div>
                <div className="text-purple-600">
                  Reward: ${milestone.rewardAmount}
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Important Notes and Legend Section */}
      <div className="bg-white rounded-lg shadow-sm p-6 mt-4">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 mt-1 text-gray-600 flex-shrink-0" />
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-3">Important Notes:</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Rewards reset monthly and are not stackable</li>
                <li>• Diamond counts must be achieved within a single calendar month</li>
                <li>• Each milestone must be verified by our team</li>
                <li>• Payouts are processed at the end of that calendar month</li>
              </ul>
            </div>
            
            <div className="flex gap-6 pt-2 border-t">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-yellow-400"></span>
                <span>Reward Milestone</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-purple-600"></span>
                <span>Progress Milestone</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedMilestone !== null && (
        <Modal
          isOpen={selectedMilestone !== null}
          onClose={() => setSelectedMilestone(null)}
          milestone={allMilestones[selectedMilestone]}
          users={getUsersAtMilestone(selectedMilestone)}
        />
      )}
    </div>
  );
}