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

interface AvatarProps {
  user: User;
  getStreakBadge: (days: number) => string | null;
  isMobile?: boolean;
}

// Helper component for avatar and tooltip
const AvatarWithTooltip: React.FC<AvatarProps> = ({ user, getStreakBadge, isMobile }) => (
  <div className="relative group">
    <div className="relative">
      <div className={`
        rounded-full overflow-hidden bg-gray-200 flex items-center justify-center border-2 border-white
        ${isMobile ? 'h-16 w-16' : 'h-12 w-12'} // Larger size only on mobile
      `}>
        <img 
          src={user.avatarUrl} 
          alt={user.username}
          className="w-full h-full object-cover"
        />
      </div>
      {getStreakBadge(user.validDays) && (
        <div className={`
          absolute bg-white text-purple-600 rounded-full border border-purple-200
          ${isMobile ? '-top-2 -right-2 text-sm px-2 py-0.5' : '-top-1 -right-1 text-xs px-1 py-0.5'}
        `}>
          {getStreakBadge(user.validDays)}
        </div>
      )}
    </div>
    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-36 sm:w-44 bg-black/90 text-white text-xs rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 p-2">
      <p className="font-bold">@{user.username}</p>
      <p>Diamonds: {user.diamondCount.toLocaleString()}</p>
      <p>Active Days: {user.validDays}</p>
      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/90 rotate-45"></div>
    </div>
  </div>
);

export default function Rankings() {
  const [selectedMilestone, setSelectedMilestone] = React.useState<number | null>(null);

  // New milestone ranges definition
  const getMilestoneRanges = [
    { min: 0, max: 199999, label: "100K" },         // 0-100K
    { min: 200000, max: 299999, label: "200K" },    // 200K-300K
    { min: 300000, max: 399999, label: "300K" },    // 300K-400K
    { min: 400000, max: 499999, label: "400K" },    // 400K-500K
    { min: 500000, max: 599999, label: "500K" },    // 500K-600K
    { min: 600000, max: 699999, label: "600K" },    // 600K-700K
    { min: 700000, max: 799999, label: "700K" },    // 700K-800K
    { min: 800000, max: 899999, label: "800K" },    // 800K-900K
    { min: 900000, max: 999999, label: "900K" },    // 900K-1M
    { min: 1000000, max: 1099999, label: "1.0M" },   // 1M-1.1M
    { min: 1100000, max: 1199999, label: "1.1M" },  // 1.1-1.2M
    { min: 1200000, max: 1299999, label: "1.2M" },  // 1.2M-1.3M
    { min: 1300000, max: 1399999, label: "1.3M" },  // 1.3M-1.4M
    { min: 1400000, max: 1499999, label: "1.4M" },  // 1.4M-1.5M
    { min: 1500000, max: 1599999, label: "1.5M" },  // 1.5M-1.6M
    { min: 1600000, max: 1699999, label: "1.6M" },  // 1.6M-1.7M
    { min: 1700000, max: 1799999, label: "1.7M" },  // 1.7M-1.8M
    { min: 1800000, max: 1899999, label: "1.8M" },  // 1.8M-1.9M
    { min: 1900000, max: 1999999, label: "1.9M" },  // 1.9M-1.9M
    { min: 2000000, max: Infinity, label: "2.0M" }, // 1.9M+
  ];

  // Updated milestone generation
  const allMilestones = getMilestoneRanges.map((range, index) => {
    const isReward = [1, 5, 9, 14, 19].includes(index);
    const rewardAmount = isReward ? 
      index === 1 ? 100 : 
      index === 5 ? 250 : 
      index === 9 ? 500 : 
      index === 14 ? 750 : 
      1000 : 0;

    return {
      label: range.label,
      diamonds: range.min,
      reward: isReward,
      rewardAmount
    };
  });

  const users = [{
      id: "7430639971188523025",
      diamondCount: 359486,
      validDays: 16,
      // Other properties...
    },
{
      id: "7431305555609829392",
      diamondCount: 301346,
      validDays: 21,
      // Other properties...
    },
{
      id: "7434529706084663297",
      diamondCount: 295485,
      validDays: 13,
      // Other properties...
    },
{
      id: "7430599854776156176",
      diamondCount: 230226,
      validDays: 10,
      // Other properties...
    },
{
      id: "7428762234568081424",
      diamondCount: 176713,
      validDays: 12,
      // Other properties...
    },
{
      id: "7429910374083805201",
      diamondCount: 91400,
      validDays: 9,
      // Other properties...
    },
{
      id: "7428778607167717393",
      diamondCount: 90516,
      validDays: 18,
      // Other properties...
    },
{
      id: "7433525532181921809",
      diamondCount: 78959,
      validDays: 12,
      // Other properties...
    },
{
      id: "7429916855852122129",
      diamondCount: 56391,
      validDays: 8,
      // Other properties...
    },
{
      id: "7429909675828625409",
      diamondCount: 46057,
      validDays: 7,
      // Other properties...
    },
{
      id: "7428778451936542736",
      diamondCount: 54230,
      validDays: 8,
      // Other properties...
    },
{
      id: "7435873073317888001",
      diamondCount: 93898,
      validDays: 4,
      // Other properties...
    },
{
      id: "7429931422900666385",
      diamondCount: 24246,
      validDays: 2,
      // Other properties...
    },
{
      id: "7429943544455938064",
      diamondCount: 22952,
      validDays: 2,
      // Other properties...
    },
{
      id: "7434692820197457937",
      diamondCount: 23673,
      validDays: 1,
      // Other properties...
    },
{
      id: "7440258372751966208",
      diamondCount: 16785,
      validDays: 1,
      // Other properties...
    },
{
      id: "7433967653015797776",
      diamondCount: 10686,
      validDays: 2,
      // Other properties...
    },
{
      id: "7438773484378947585",
      diamondCount: 3483,
      validDays: 2,
      // Other properties...
    },
{
      id: "7435452847371698192",
      diamondCount: 10065,
      validDays: 6,
      // Other properties...
    },
{
      id: "7433515005670064129",
      diamondCount: 2180,
      validDays: 5,
      // Other properties...
    },
{
      id: "7440258052529373200",
      diamondCount: 4969,
      validDays: 0,
      // Other properties...
    },
{
      id: "7438773724033122321",
      diamondCount: 908,
      validDays: 1,
      // Other properties...
    },
{
      id: "7429932355579789313",
      diamondCount: 894,
      validDays: 1,
      // Other properties...
    },
{
      id: "7436547557267914768",
      diamondCount: 858,
      validDays: 4,
      // Other properties...
    },
{
      id: "7428922710903865345",
      diamondCount: 794,
      validDays: 0,
      // Other properties...
    },
{
      id: "7439177061366857744",
      diamondCount: 655,
      validDays: 1,
      // Other properties...
    },
{
      id: "7399002293627454360",
      diamondCount: 347,
      validDays: 2,
      // Other properties...
    },
{
      id: "7433839668661059601",
      diamondCount: 332,
      validDays: 2,
      // Other properties...
    },
{
      id: "7430624377831702544",
      diamondCount: 214,
      validDays: 2,
      // Other properties...
    },
{
      id: "7431261077935112208",
      diamondCount: 43,
      validDays: 1,
      // Other properties...
    },
{
      id: "7429963165842079745",
      diamondCount: 35,
      validDays: 0,
      // Other properties...
    },
{
      id: "7430141664343408657",
      diamondCount: 10,
      validDays: 0,
      // Other properties...
    },
{
      id: "7430981145426247681",
      diamondCount: 0,
      validDays: 0,
      // Other properties...
    },
{
      id: "7431259659777884161",
      diamondCount: 0,
      validDays: 0,
      // Other properties...
    },
{
      id: "7433827434425843729",
      diamondCount: 0,
      validDays: 0,
      // Other properties...
    },
{
      id: "7429912297612673040",
      diamondCount: 0,
      validDays: 0,
      // Other properties...
    },
{
      id: "7429910374083739665",
      diamondCount: 0,
      validDays: 0,
      // Other properties...
    },
{
      id: "7430872876708020241",
      diamondCount: 0,
      validDays: 0,
      // Other properties...
    },
{
      id: "7437312779440242705",
      diamondCount: 0,
      validDays: 0,
      // Other properties...
    },
{
      id: "7432033197124288529",
      diamondCount: 0,
      validDays: 1,
      // Other properties...
    },
{
      id: "7439373292738809361",
      diamondCount: 0,
      validDays: 0,
      // Other properties...
    },
{
      id: "7440258476385026049",
      diamondCount: 0,
      validDays: 0,
      // Other properties...
    },
{
      id: "7437289492555382800",
      diamondCount: 0,
      validDays: 0,
      // Other properties...
    },
{
      id: "7437098060410257425",
      diamondCount: 0,
      validDays: 0,
      // Other properties...
    }];
    if (!milestone) return []; // Safety check if the index is invalid
    return users.filter(
      user => user.diamondCount >= milestone.diamonds && user.diamondCount < (index + 1 < allMilestones.length ? allMilestones[index + 1].diamonds : Infinity)
    );
  };

  const getStreakBadge = (days: number) => {
    if (days >= 30) return `👑${days}`;
    if (days >= 10) return `🌟${days}`;
    if (days >= 3) return `🔥${days}`;
    return null;
  };

  const renderMilestoneSquare = (milestone: Milestone, index: number) => {
    const usersAtMilestone = getUsersAtMilestone(index);
    const remainingCount = usersAtMilestone.length - 1;

    return (
      <div
        key={index}
        onClick={() => setSelectedMilestone(index)}
        className={`aspect-square rounded-lg p-2 flex flex-col justify-between cursor-pointer hover:scale-105 transition-all duration-300 ${
          milestone.reward ? 'bg-yellow-400 hover:bg-yellow-300' : 'bg-purple-600 hover:bg-purple-500'
        } animate-fade-in relative`}
      >
        <div className="text-white text-center">
          <div className="font-bold text-lg sm:text-xl">{milestone.label}</div>
          {milestone.reward && (
            <div className="bg-white rounded-lg py-1 px-2 mx-auto w-fit mt-1">
              <div className="text-purple-600 font-semibold text-sm sm:text-base">
                ${milestone.rewardAmount}
              </div>
            </div>
          )}
        </div>
        
        <div className="flex flex-wrap gap-1 justify-center items-center">
          {/* Mobile view - single larger avatar */}
          <div className="block md:hidden">
            {usersAtMilestone.slice(0, 1).map((user) => (
              <AvatarWithTooltip 
                key={user.id} 
                user={user} 
                getStreakBadge={getStreakBadge}
                isMobile={true}
              />
            ))}
            {usersAtMilestone.length > 1 && (
              <div className="h-8 w-8 rounded-full bg-gray-200 bg-opacity-50 flex items-center justify-center border-2 border-white text-white absolute bottom-2 right-2">
                <span className="text-xs font-semibold">+{usersAtMilestone.length - 1}</span>
              </div>
            )}
          </div>

          {/* Desktop view - regular sized avatars */}
          <div className="hidden md:flex flex-wrap gap-1 justify-center items-center">
            {usersAtMilestone.slice(0, 12).map((user) => (
              <AvatarWithTooltip 
                key={user.id} 
                user={user} 
                getStreakBadge={getStreakBadge}
                isMobile={false}
              />
            ))}
            {usersAtMilestone.length > 12 && (
              <div className="h-12 w-12 rounded-full bg-gray-200 bg-opacity-50 flex items-center justify-center border-2 border-white text-white">
                <span className="text-base font-semibold">+{usersAtMilestone.length - 12}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-4 sm:py-8 min-h-screen flex flex-col">
      {/* Days Legend */}
      <div className="flex justify-end mb-4 overflow-x-auto pb-2">
        <div className="flex gap-2 text-xs sm:text-sm whitespace-nowrap">
          <div className="bg-white rounded-full px-2 sm:px-3 py-1 border border-gray-200 shadow-sm">
            <span>🔥 3+ Days</span>
          </div>
          <div className="bg-white rounded-full px-2 sm:px-3 py-1 border border-gray-200 shadow-sm">
            <span>⭐ 10+ Days</span>
          </div>
          <div className="bg-white rounded-full px-2 sm:px-3 py-1 border border-gray-200 shadow-sm">
            <span>👑 30+ Days</span>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="flex-1">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4">
          {allMilestones.map((milestone, index) => renderMilestoneSquare(milestone, index))}
        </div>
      </div>

      {/* Reward Milestones */}
      <div className="mt-4 sm:mt-8">
        <div className="flex items-center gap-2 mb-4">
          <Trophy className="h-5 w-5 text-yellow-500" />
          <h2 className="text-lg sm:text-xl font-bold">Reward Milestones</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-4 bg-yellow-50 p-2 sm:p-4 rounded-lg">
          {allMilestones
            .filter(m => m.reward)
            .map((milestone, index) => (
              <div
                key={index}
                className="bg-white p-2 sm:p-4 rounded-lg text-center shadow-sm border border-yellow-200"
              >
                <div className="font-bold text-base sm:text-xl mb-1">{milestone.label}</div>
                <div className="text-purple-600 text-sm sm:text-base">
                  ${milestone.rewardAmount}
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Important Notes and Legend Section */}
      <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mt-4">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 mt-1 text-gray-600 flex-shrink-0" />
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Important Notes:</h2>
              <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700">
                <li>• Rewards reset monthly and are not stackable</li>
                <li>• Diamond counts must be achieved within a single calendar month</li>
                <li>• Each milestone must be verified by our team</li>
                <li>• Payouts are processed at the end of that calendar month</li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 pt-2 border-t">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-yellow-400"></span>
                <span className="text-sm sm:text-base">Reward Milestone</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-purple-600"></span>
                <span className="text-sm sm:text-base">Progress Milestone</span>
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