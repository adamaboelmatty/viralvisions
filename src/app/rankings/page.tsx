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

  // Milestone ranges definition
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

  const getStreakBadge = (days: number) => {
    if (days >= 30) return `👑${days}`;
    if (days >= 10) return `🌟${days}`;
    if (days >= 3) return `🔥${days}`;
    return null;
  };

  const getUsersAtMilestone = (index: number) => {
    const range = getMilestoneRanges[index];
    return users.filter(
      user => user.diamondCount >= range.min && user.diamondCount < range.max
    );
  };

  const users = [
  {
      id: "7430639971188523025",
      username: "blondielift",
      avatarUrl: "/deanna.jpeg", // Updated to link to the local image
      diamondCount: 167369,
      currentStreak: 4,
      validDays: 4
    },
  {
      id: "7431305555609829392",
      username: "biggergoofy",
      avatarUrl: "/max.jpeg",
      diamondCount: 115641,
      currentStreak: 8,
      validDays: 8
    },
  {
      id: "7434529706084663297",
      username: "hill.andrew",
      avatarUrl: "/andrewhill.jpeg",
      diamondCount: 24250,
      currentStreak: 3,
      validDays: 3
    },
  {
      id: "7430599854776156176",
      username: "treasurerinaldi",
      avatarUrl: "/treasure.jpeg",
      diamondCount: 49687,
      currentStreak: 6,
      validDays: 6
    },
  {
      id: "7428762234568081424",
      username: "_juliannaortiz",
      avatarUrl: "/julianna.jpeg",
      diamondCount: 266756,
      currentStreak: 10,
      validDays: 10
    },
  {
      id: "7429910374083805201",
      username: "_ryan10101_",
      avatarUrl: "/ryan.png",
      diamondCount: 4600,
      currentStreak: 0,
      validDays: 0
    },
  {
      id: "7428778607167717393",
      username: "meggan_horn",
      avatarUrl: "/meggan_horn.jpeg",
      diamondCount: 63311,
      currentStreak: 10,
      validDays: 10
    },
  {
      id: "7433525532181921809",
      username: "graceschouvieller",
      avatarUrl: "/graceschouvieller.jpeg",
      diamondCount: 195052,
      currentStreak: 7,
      validDays: 7
    },
  {
      id: "7429916855852122129",
      username: "matthardy88",
      avatarUrl: "/matthardy.png",
      diamondCount: 1006,
      currentStreak: 0,
      validDays: 0
    },
  {
      id: "7429909675828625409",
      username: "zboocka",
      avatarUrl: "/zach.png",
      diamondCount: 555,
      currentStreak: 2,
      validDays: 2
    },
  {
      id: "7428778451936542736",
      username: "theportersonntag",
      avatarUrl: "/theportersonntag.jpeg",
      diamondCount: 43839,
      currentStreak: 6,
      validDays: 6
    },
  {
      id: "7435873073317888001",
      username: "lexaaajane",
      avatarUrl: "/lexa.jpeg",
      diamondCount: 38156,
      currentStreak: 0,
      validDays: 0
    },
  {
      id: "7429931422900666385",
      username: "rhayatherton",
      avatarUrl: "/rhayatherton.jpeg",
      diamondCount: 15285,
      currentStreak: 2,
      validDays: 2
    },
  {
      id: "7429943544455938064",
      username: "milenajoycee",
      avatarUrl: "/milenajoycee.jpeg",
      diamondCount: 5146,
      currentStreak: 1,
      validDays: 1
    },
  {
      id: "7434692820197457937",
      username: "josiebae9",
      avatarUrl: "/josiebae9.jpeg",
      diamondCount: 3586,
      currentStreak: 1,
      validDays: 1
    },
  {
      id: "7433967653015797776",
      username: "samthomas_1",
      avatarUrl: "/sam.jpeg",
      diamondCount: 0,
      currentStreak: 0,
      validDays: 0
    },
  {
      id: "7438773484378947585",
      username: "swagmaster1738",
      avatarUrl: "/swagmaster1738.jpeg",
      diamondCount: 4602,
      currentStreak: 3,
      validDays: 3
  },
  {
    id: "7435452847371698192",
    username: "haileygracieee",
    avatarUrl: "/haileygracieee.jpeg",
    diamondCount: 1514,
    currentStreak: 1,
    validDays: 1
  },
  {
    id: "7433515005670064129",
    username: "hevbev_3",
    avatarUrl: "/hevbev_3.jpeg",
    diamondCount: 5298,
    currentStreak: 8,
    validDays: 8
  },
  {
    id: "7440258052529373200",
    username: "sillyrabiitrixare4kids",
    avatarUrl: "/lillian.jpeg",
    diamondCount: 267301,
    currentStreak: 4,
    validDays: 4
  },
  {
    id: "7438773724033122321",
    username: ".aubbie",
    avatarUrl: "/aubbie.jpeg",
    diamondCount: 0,
    currentStreak: 0,
    validDays: 0
  },
  {
    id: "7429932355579789313",
    username: ".nqlan",
    avatarUrl: "/nolan.jpeg",
    diamondCount: 18417,
    currentStreak: 2,
    validDays: 2
  },
  {
    id: "7436547557267914768",
    username: "glen.tb8",
    avatarUrl: "/glen.tb8.jpeg",
    diamondCount: 0,
    currentStreak: 0,
    validDays: 0
  },
  {
    id: "7428922710903865345",
    username: "kendraamckee",
    avatarUrl: "/kendraamckee.jpeg",
    diamondCount: 12,
    currentStreak: 0,
    validDays: 0
  },
  {
    id: "7439177061366857744",
    username: "tyler.mac1",
    avatarUrl: "/tyler.mac1.jpeg",
    diamondCount: 23,
    currentStreak: 0,
    validDays: 0
  },
  {
    id: "7433839668661059601",
    username: "mariahbarelaa",
    avatarUrl: "/mariahbarelaa.jpeg",
    diamondCount: 0,
    currentStreak: 0,
    validDays: 0
  },
  {
    id: "7430624377831702544",
    username: "brilampert",
    avatarUrl: "/brilampert.jpeg",
    diamondCount: 0,
    currentStreak: 0,
    validDays: 0
  },
  {
    id: "7431261077935112208",
    username: "j.f.banks",
    avatarUrl: "/j.f.banks.jpeg",
    diamondCount: 0,
    currentStreak: 0,
    validDays: 0
  },
  {
    id: "7429963165842079745",
    username: "sydney.erin27",
    avatarUrl: "/sydney.erin27.jpeg",
    diamondCount: 2501,
    currentStreak: 0,
    validDays: 0
  },
  {
    id: "7430141664343408657",
    username: "aaron.s16",
    avatarUrl: "/aaron.s16.jpeg",
    diamondCount: 0,
    currentStreak: 0,
    validDays: 0
  },
  {
    id: "7430981145426247681",
    username: "bbellabarreras",
    avatarUrl: "/bbellabarreras.jpeg",
    diamondCount: 0,
    currentStreak: 0,
    validDays: 0
  },
  {
    id: "7431259659777884161",
    username: "elainabenoit",
    avatarUrl: "/elainabenoit.jpeg",
    diamondCount: 0,
    currentStreak: 0,
    validDays: 0
  },
  {
    id: "7433827434425843729",
    username: "haileybattista",
    avatarUrl: "/haileybattista.jpeg",
    diamondCount: 0,
    currentStreak: 0,
    validDays: 0
  },
  {
    id: "7429912297612673040",
    username: "mariangelikmunoz",
    avatarUrl: "/mariangelikmunoz.jpeg",
    diamondCount: 0,
    currentStreak: 0,
    validDays: 0
  },
  {
    id: "7429910374083739665",
  username: "aboelmatty",
  avatarUrl: "/aboelmatty.jpeg",
  diamondCount: 0,
  currentStreak: 0,
  validDays: 0
},
  {
  id: "7430872876708020241",
  username: "valen10sanchez",
  avatarUrl: "/valen10sanchez.jpeg",
  diamondCount: 0,
  currentStreak: 0,
  validDays: 0
},
  {
  id: "7437312779440242705",
  username: "zencleans",
  avatarUrl: "/zencleans.jpeg",
  diamondCount: 1052,
  currentStreak: 0,
  validDays: 0
},
  {
  id: "7432033197124288529",
  username: ".brazipapi",
  avatarUrl: "/brazipapi.jpeg",
  diamondCount: 0,
  currentStreak: 0,
  validDays: 0
},
  {
  id: "7440258372751966225",
  username: "taylormayberry",
  avatarUrl: "/taylormayberry.jpeg",
  diamondCount: 190406,
  currentStreak: 12,
  validDays: 12
},
  {
  id: "7441742358129000464",
  username: "hannah.grace0928",
  avatarUrl: "/hannah.grace0928 .jpeg",
  diamondCount: 5092,
  currentStreak: 9,
  validDays: 9
},
  {
  id: "7442114490004455425",
  username: ".whoslain3y",
  avatarUrl: "/whoslain3y.jpeg",
  diamondCount: 227,
  currentStreak: 0,
  validDays: 0
},
  {
  id: "7436601847793582097",
  username: "ethanvnmber1",
  avatarUrl: "/ethanvnmber1.jpeg",
  diamondCount: 16455,
  currentStreak: 0,
  validDays: 0
},
  {
  id: "7437289492555382800",
  username: "savybrooks",
  avatarUrl: "/savybrooks.jpeg",
  diamondCount: 0,
  currentStreak: 0,
  validDays: 0
},
  {
  id: "7437098060410257425",
  username: "soothingscrubs",
  avatarUrl: "/soothingscrubs.jpeg",
  diamondCount: 0,
  currentStreak: 0,
  validDays: 0
},
  {
  id: "7439900229362745360",
  username: "jehadalsafer_",
  avatarUrl: "/jehadalsafer_.jpeg",
  diamondCount: 24004,
  currentStreak: 6,
  validDays: 6
},
  {
  id: "7432836201645768705",
  username: "marc12345marc12345",
  avatarUrl: "/marc.jpeg",
  diamondCount: 75810,
  currentStreak: 7,
  validDays: 7
},
  {
  id: "7439937329738809361",
  username: "babygjerv",
  avatarUrl: "/babygjerv.jpeg",
  diamondCount: 102340,
  currentStreak: 7,
  validDays: 7
},
  {
  id: "7443969055595315216",
  username: "itzklayton",
  avatarUrl: "/itzklayton.jpeg",
  diamondCount: 257046,
  currentStreak: 9,
  validDays: 9
},
  {
  id: "7444058578182258689",
  username: "girlypopalex.777",
  avatarUrl: "/girlypopalex.777.jpeg",
  diamondCount: 993,
  currentStreak: 6,
  validDays: 6
},
  {
  id: "7443942389472837648",
  username: "mform1721",
  avatarUrl: "/mform1721.jpeg",
  diamondCount: 1025,
  currentStreak: 0,
  validDays: 0
},
  {
  id: "7444326296559206416",
  username: "_aidensims",
  avatarUrl: "/_aidensims.jpeg",
  diamondCount: 2771,
  currentStreak: 2,
  validDays: 2
},
  {
  id: "7444720446387273729",
  username: "sarah.e.k",
  avatarUrl: "/sarah.e.k.png",
  diamondCount: 14939,
  currentStreak: 1,
  validDays: 1
},
  {
  id: "7444790638912258049",
  username: "mayaaislinzenith",
  avatarUrl: "/mayaaislinzenith.jpeg",
  diamondCount: 10900,
  currentStreak: 4,
  validDays: 4
},
  {
  id: "7445082973390716944",
  username: "tyler.settelmyer",
  avatarUrl: "/tyler.settelmyer.jpeg",
  diamondCount: 113551,
  currentStreak: 6,
  validDays: 6
},
  {
  id: "7443978588136833041",
  username: "igorkiev2016",
  avatarUrl: "/igorkiev2016.jpeg",
  diamondCount: 217,
  currentStreak: 4,
  validDays: 4
},
  {
  id: "7444710935601725457",
  username: "theaddilynwilson",
  avatarUrl: "/theaddilynwilson.jpeg",
  diamondCount: 26,
  currentStreak: 1,
  validDays: 1
},
  {
  id: "7443830766225768449",
  username: "mark_headtrix",
  avatarUrl: "/mark_headtrix.jpeg",
  diamondCount: 101,
  currentStreak: 4,
  validDays: 4
},
  {
  id: "7444711009409056785",
  username: "aaroncolletti_",
  avatarUrl: "/aaroncolletti_.jpeg",
  diamondCount: 317,
  currentStreak: 0,
  validDays: 0
},
  {
  id: "7446804875616485392",
  username: "sports.center.06",
  avatarUrl: "/sports.center.06.jpeg",
  diamondCount: 112997,
  currentStreak: 3,
  validDays: 3
},
  {
  id: "7442005622943678465",
  username: "jessesbiggestfanmwah",
  avatarUrl: "https://p16-sign-useast7.tiktokcdn-us.com/tos-useast5-avt-0068-tx/PLACEHOLDER.jpeg",
  diamondCount: 129,
  currentStreak: 1,
  validDays: 1
},
  {
  id: "7447308784210509840",
  username: "peppers513",
  avatarUrl: "https://p16-sign-useast7.tiktokcdn-us.com/tos-useast5-avt-0068-tx/PLACEHOLDER.jpeg",
  diamondCount: 0,
  currentStreak: 0,
  validDays: 0
}
].sort((a, b) => b.diamondCount - a.diamondCount);

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