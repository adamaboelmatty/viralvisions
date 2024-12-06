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
      avatarUrl: "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/f279f03c55f2e3283caedbde37748069~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=33958&refresh_token=e2d4869fd663a01cb92e0d627416b290&x-expires=1733104800&x-signature=mMd7SFd6n66Vz0aVwMl99Ut2iIs%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 53948,
      currentStreak: 2,
      validDays: 2
    },
  {
      id: "7431305555609829392",
      username: "biggergoofy",
      avatarUrl: "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/826ed54ced4174ba2ce33a3d9c9e1ab4~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=30711&refresh_token=1fe5719ab4350912d626060ce3b33277&x-expires=1733104800&x-signature=PmOldsjaj9ehU4vi2LEUuuidHn0%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 33531,
      currentStreak: 3,
      validDays: 3
    },
  {
      id: "7434529706084663297",
      username: "hill.andrew",
      avatarUrl: "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/5f9e20ea62693a9c07ddc68651a91413~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=85232&refresh_token=ae7d5d221b9137a4a8049adad0137abc&x-expires=1733104800&x-signature=u4uhFE%2FUGCyui0yUghIo7NYRqg8%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 13782,
      currentStreak: 2,
      validDays: 2
    },
  {
      id: "7430599854776156176",
      username: "treasurerinaldi",
      avatarUrl: "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/d138a0ac7d63fb18963ff01f7d5f5f28~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=69085&refresh_token=d16cdfbc018747866f1a71d8b44c1c77&x-expires=1733104800&x-signature=M6nzAkybaesxZzcjqfL1V8WJ8LA%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 17924,
      currentStreak: 3,
      validDays: 3
    },
  {
      id: "7428762234568081424",
      username: "_juliannaortiz",
      avatarUrl: "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/a821c34283898af48002ab9e7d8e0edc~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=20450&refresh_token=41163f7dc052a8c095d12bf6e5a67c45&x-expires=1733104800&x-signature=KFGT6sN%2BjZoj%2BZOxQ24r3cq%2Fg0k%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 45278,
      currentStreak: 3,
      validDays: 3
    },
  {
      id: "7429910374083805201",
      username: "_ryan10101_",
      avatarUrl: "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/b630c5982ed3b26e5441c4f4308e9b0a~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=66513&refresh_token=89097f942a8801f6e25a1a65e9c71656&x-expires=1733104800&x-signature=h5gLNmo2s2%2BktKzqJFbQ2VEa%2Bqo%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 3111,
      currentStreak: 0,
      validDays: 0
    },
  {
      id: "7428778607167717393",
      username: "meggan_horn",
      avatarUrl: "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/921df000bb99f72264c08d607eae7102~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=63788&refresh_token=429c762a4adb853d7acf9fef859f81f2&x-expires=1733104800&x-signature=H%2BNNkr4VPsVZdl3eRPewseKl2ZU%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 21701,
      currentStreak: 4,
      validDays: 4
    },
  {
      id: "7433525532181921809",
      username: "graceschouvieller",
      avatarUrl: "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/9788d959487ce02871bcea13a6492511~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=12314&refresh_token=c5dfbdfe88f62c2efe83352756191a16&x-expires=1733104800&x-signature=3KpiWuE3gwK6vUnlEPCf6ZI8Su4%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 72568,
      currentStreak: 2,
      validDays: 2
    },
  {
      id: "7429916855852122129",
      username: "matthardy88",
      avatarUrl: "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/da0fb3e1a055583b8fa9cd0cbe82c788~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=18990&refresh_token=3ffe03b36d5409c311e2e1acdf43e949&x-expires=1733104800&x-signature=wpNVFxB3%2FqS2ySwJlhTT8f3DkRo%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 1006,
      currentStreak: 0,
      validDays: 0
    },
  {
      id: "7429909675828625409",
      username: "zboocka",
      avatarUrl: "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/51aa50d9451289ee7e226cb7e380a6ea~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=39606&refresh_token=5d6e18eb099845dc0df9d4fdb9c8c363&x-expires=1733104800&x-signature=NZBpVrxGbk6CzMbb4dXxtxjSDig%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 416,
      currentStreak: 2,
      validDays: 2
    },
  {
      id: "7428778451936542736",
      username: "theportersonntag",
      avatarUrl: "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/10094ef56d1c5c825d7c56a2808ece67~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=25349&refresh_token=5da6d652db7b7d3520d070c0b926f02f&x-expires=1733104800&x-signature=g56zrCuwCM1CjbUL0BhsdUTTzls%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 7071,
      currentStreak: 3,
      validDays: 3
    },
  {
      id: "7435873073317888001",
      username: "lexaaajane",
      avatarUrl: "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/db6cc1bdf54e8f141b9b5ebec6811da7~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=40110&refresh_token=d8be9c2baae6037b1aa11bb16bc1c78f&x-expires=1733104800&x-signature=TAeuzARL3dArd%2BMSH1vTpGAsOj8%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 4244,
      currentStreak: 0,
      validDays: 0
    },
  {
      id: "7429931422900666385",
      username: "rhayatherton",
      avatarUrl: "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/cc8f208da0f505d2df524e97ed4ed509~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=7500&refresh_token=3fe518d66e7e49befbca61b49064704b&x-expires=1733104800&x-signature=xsvdDthinT8ecJ8%2BT%2FQsrJsw2QU%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 10693,
      currentStreak: 1,
      validDays: 1
    },
  {
      id: "7429943544455938064",
      username: "milenajoycee",
      avatarUrl: "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/252cf912dbb1df042d429f872d274252~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=10282&refresh_token=4d066e1602453c46a4b53c7501032cba&x-expires=1733104800&x-signature=GLwNUSNucQ3sp9PzJvdZA%2FfXg8o%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 0,
      currentStreak: 0,
      validDays: 0
    },
  {
      id: "7434692820197457937",
      username: "josiebae9",
      avatarUrl: "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/8c7b533a793cd23f99b5ba2ec0e250db~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=62307&refresh_token=913047d549bda6ce3f6781a79f763fc8&x-expires=1733104800&x-signature=FlMMCQiO%2FjDHMwDxdLLoim79SGY%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 0,
      currentStreak: 0,
      validDays: 0
    },
  {
      id: "7433967653015797776",
      username: "samthomas_1",
      avatarUrl: "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/cb90aa792569e17f0697defa6250b070~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=68532&refresh_token=a0289ac4f4cadfbd1cd16d7f86029245&x-expires=1732665600&x-signature=4WanYSQHwhAmxDBxcHjFsENuvv0%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 0,
      currentStreak: 0,
      validDays: 0
    },
  {
      id: "7438773484378947585",
      username: "swagmaster1738",
      avatarUrl: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/fd05f71f6011fa25bfb0fa9e6e350241~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=85692&refresh_token=2ec39c31e47e7c2ee54d43f4dfde43d7&x-expires=1732665600&x-signature=U69U7wTMuDDhHAqPJZUwYracUVI%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 0,
      currentStreak: 0,
      validDays: 0
  },
  {
    id: "7435452847371698192",
    username: "haileygracieee",
    avatarUrl: "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/10ce84005f31b58bb3e299e71d838190~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=24964&refresh_token=ab45e810331a708dbf7577fe36271006&x-expires=1732665600&x-signature=ev76BiK7w7azvEUKo6XwOyMfuJM%3D&shp=a5d48078&shcp=81f88b70",
    diamondCount: 0,
    currentStreak: 0,
    validDays: 0
  },
  {
    id: "7433515005670064129",
    username: "hevbev_3",
    avatarUrl: "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/16cf2b05c0fb907c2d6e4382d9747dd7~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=23173&refresh_token=f9a082489b374c5eeb2a5c3da5c649cc&x-expires=1732665600&x-signature=UGdwK%2FHETpkZ55uKzb02ZQ%2BtdaM%3D&shp=a5d48078&shcp=81f88b70",
    diamondCount: 1920,
    currentStreak: 2,
    validDays: 2
  },
  {
    id: "7440258052529373200",
    username: "sillyrabiitrixare4kids",
    avatarUrl: "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/df6bd41963164e71de76ace162817787~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=87466&refresh_token=00fb5bbdc95dab539b1107524ebdc07c&x-expires=1732665600&x-signature=v0%2FXXDsHmPOb94nABHwqCj%2B1srg%3D&shp=a5d48078&shcp=81f88b70",
    diamondCount: 71554,
    currentStreak: 2,
    validDays: 2
  },
  {
    id: "7438773724033122321",
    username: ".aubbie",
    avatarUrl: "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/1e38b2d232186645d38f63d000b2c222~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=98262&refresh_token=0e0fb5349f577774c8536fbf9be5dfed&x-expires=1732665600&x-signature=TIfT9X%2BcFEsyGvD%2B13wc3wexIKc%3D&shp=a5d48078&shcp=81f88b70",
    diamondCount: 0,
    currentStreak: 0,
    validDays: 0
  },
  {
    id: "7429932355579789313",
    username: ".nqlan",
    avatarUrl: "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/74ac40e807d05c7f80f7c7ada66032c9~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=15590&refresh_token=3323a55f5c1dc76641cb25e9405464c6&x-expires=1732665600&x-signature=0rvhOZMhsSricRB0laJsF7Dj%2B9A%3D&shp=a5d48078&shcp=81f88b70",
    diamondCount: 14877,
    currentStreak: 1,
    validDays: 1
  },
  {
    id: "7436547557267914768",
    username: "glen.tb8",
    avatarUrl: "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/fb5741a67af92ac9ea413655c6919f29~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=11460&refresh_token=d792a468f10210562bf1b478c915ac43&x-expires=1732665600&x-signature=1ke0fxqRLpst%2Frz73cKie6vdWYc%3D&shp=a5d48078&shcp=81f88b70",
    diamondCount: 0,
    currentStreak: 0,
    validDays: 0
  },
  {
    id: "7428922710903865345",
    username: "kendraamckee",
    avatarUrl: "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/9d45c7e29f38b99fb3fe39e2afe91141~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=61119&refresh_token=c1fa87e908739cfd17c69f546cbe62f3&x-expires=1732665600&x-signature=BwIhJH0RtZdBV8P7x3KKB5fAZWc%3D&shp=a5d48078&shcp=81f88b70",
    diamondCount: 0,
    currentStreak: 0,
    validDays: 0
  },
  {
    id: "7439177061366857744",
    username: "tyler.mac1",
    avatarUrl: "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/e2c6b67db4873ef4df3464488d586f6e~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=35467&refresh_token=b4109d39e8871212689f36c274c82f45&x-expires=1732665600&x-signature=lsK3ctdrJ3BnqNe5vHy0czJpkwc%3D&shp=a5d48078&shcp=81f88b70",
    diamondCount: 0,
    currentStreak: 0,
    validDays: 0
  },
  {
    id: "7433839668661059601",
    username: "mariahbarelaa",
    avatarUrl: "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/c2f23a54273c6ab8b200fc7b28f40fbc~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=58876&refresh_token=5cd1cee36f9027417c003dea3cd4f66b&x-expires=1732665600&x-signature=zGZjBQB%2BHyCx%2FJsC6ETXxtOAR2s%3D&shp=a5d48078&shcp=81f88b70",
    diamondCount: 0,
    currentStreak: 0,
    validDays: 0
  },
  {
    id: "7430624377831702544",
    username: "brilampert",
    avatarUrl: "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/0065528a58dbf9935402dbd7586caff3~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=91174&refresh_token=4dc0db72c6683529709879f2614fc7d9&x-expires=1732665600&x-signature=rVLTjfirVZbZnwvyIzfRVJib1z0%3D&shp=a5d48078&shcp=81f88b70",
    diamondCount: 0,
    currentStreak: 0,
    validDays: 0
  },
  {
    id: "7431261077935112208",
    username: "j.f.banks",
    avatarUrl: "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/08a796f36b62b78d5fb4f6ff5adad678~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=9002&refresh_token=b64e70ae8d9e26974b9025b9bef57351&x-expires=1732665600&x-signature=xrUSI0GdxQ8kM7YdtBaYQuPPxrQ%3D&shp=a5d48078&shcp=81f88b70",
    diamondCount: 0,
    currentStreak: 0,
    validDays: 0
  },
  {
    id: "7429963165842079745",
    username: "sydney.erin27",
    avatarUrl: "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/dee9a96b30945aa66c20156c44db732e~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=17697&refresh_token=10c996c977505f3f1ec5fa7414063f73&x-expires=1732665600&x-signature=RZhesvtxgk1%2BMtltrKCjGtjARVU%3D&shp=a5d48078&shcp=81f88b70",
    diamondCount: 0,
    currentStreak: 0,
    validDays: 0
  },
  {
    id: "7430141664343408657",
    username: "aaron.s16",
    avatarUrl: "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/9c0cb8760a0ef956f444a789891a798b~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=48850&refresh_token=76dc546341397c4efc5b011371b08f28&x-expires=1732849200&x-signature=oQNdJ1zLNI3g556xLSi2Y9UwJqs%3D&shp=a5d48078&shcp=81f88b70",
    diamondCount: 0,
    currentStreak: 0,
    validDays: 0
  },
  {
    id: "7430981145426247681",
    username: "bbellabarreras",
    avatarUrl: "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/cb80d3f18e8db2c4a55fc71228aa257e~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=68928&refresh_token=fd673deaa6d8c26cfcca226371008e00&x-expires=1732665600&x-signature=Yi8eT2HIE1VLz6EstK8YZrTTLoM%3D&shp=a5d48078&shcp=81f88b70",
    diamondCount: 0,
    currentStreak: 0,
    validDays: 0
  },
  {
    id: "7431259659777884161",
    username: "elainabenoit",
    avatarUrl: "https://p19-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/8940f9cb9b20fd1f74628cdfebd0f056~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=58056&refresh_token=00ee0c8366e251180d79f02a5e3d28ed&x-expires=1732665600&x-signature=9fsH%2FTdjzLgDqXSrS%2Fh1xxJA34g%3D&shp=a5d48078&shcp=81f88b70",
    diamondCount: 0,
    currentStreak: 0,
    validDays: 0
  },
  {
    id: "7433827434425843729",
    username: "haileybattista",
    avatarUrl: "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/e80fd296b0ff98d14d2fe18f78fe329d~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=29283&refresh_token=7c91a24d4e68ce31b7eda0faf55b049b&x-expires=1732665600&x-signature=R76Y4SIA6NdPs4ZSlJ29nfL7Ltg%3D&shp=a5d48078&shcp=81f88b70",
    diamondCount: 0,
    currentStreak: 0,
    validDays: 0
  },
  {
    id: "7429912297612673040",
    username: "mariangelikmunoz",
    avatarUrl: "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/551c411b2b88c5c830047cf550dfc6b8~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=15325&refresh_token=4acf3f68bfe5efdbc1e725297db91dc3&x-expires=1732849200&x-signature=bQyMHOQqtqCPOvm7QSJ0jae1JmE%3D&shp=a5d48078&shcp=81f88b70",
    diamondCount: 0,
    currentStreak: 0,
    validDays: 0
  },
  {
    id: "7429910374083739665",
  username: "aboelmatty",
  avatarUrl: "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/3d9c708e8d1375ad9d5ac891e8a7773e~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=58065&refresh_token=c3a18ef5023ee5af8e31091f6eed3150&x-expires=1732665600&x-signature=vK0UXm90SKeua6sSF8j3PV%2BudgQ%3D&shp=a5d48078&shcp=81f88b70",
  diamondCount: 0,
  currentStreak: 0,
  validDays: 0
},
  {
  id: "7430872876708020241",
  username: "valen10sanchez",
  avatarUrl: "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/e776076c4188d8b7f4e565d5dfc65d91~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=45119&refresh_token=27932a475433ee08a53455dd724632c9&x-expires=1732665600&x-signature=FkB6J%2BHPxbZTFPibBZcOvm764N8%3D&shp=a5d48078&shcp=81f88b70",
  diamondCount: 0,
  currentStreak: 0,
  validDays: 0
},
  {
  id: "7437312779440242705",
  username: "zencleans",
  avatarUrl: "https://p19-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/8681e4b2bf7cb71172453f66464af979~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=68975&refresh_token=b86a102bc81b3311a56cf2d9f7e600d8&x-expires=1732665600&x-signature=3dLvsYff6p44aDXmH8ZJWf3OmLA%3D&shp=a5d48078&shcp=81f88b70",
  diamondCount: 1052,
  currentStreak: 0,
  validDays: 0
},
  {
  id: "7432033197124288529",
  username: ".brazipapi",
  avatarUrl: "https://p19-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/cdf3373463db4317f2277416a3033377~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=96775&refresh_token=656d7da88ade48be1f38dd3acec0b75b&x-expires=1732849200&x-signature=CGo43JpZV%2BnimrgGJWwFdG92pZA%3D&shp=a5d48078&shcp=81f88b70",
  diamondCount: 0,
  currentStreak: 0,
  validDays: 0
},
  {
  id: "7439373292738809361",
  username: "babygjerv",
  avatarUrl: "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/465d61e7e7815525c8c8ebee5a8652cc~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=82704&refresh_token=4ebf30fd728c6939402a88fe58d54a1d&x-expires=1733104800&x-signature=9%2BI%2FsyojltFe4Y2%2BYt1TP8fPAFM%3D&shp=a5d48078&shcp=81f88b70",
  diamondCount: 0,
  currentStreak: 0,
  validDays: 0
},
  {
  id: "7440258372751966225",
  username: "taylormayberry",
  avatarUrl: "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/8ca13cd7e6e2b255e0256db37f50a093~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=42997&refresh_token=cc5e33330558e0740223f5ec08f1af2c&x-expires=1733104800&x-signature=dIoIDga%2FDo4ePpoirheowQ2hoOc%3D&shp=a5d48078&shcp=81f88b70",
  diamondCount: 97599,
  currentStreak: 4,
  validDays: 4
},
  {
  id: "7441742358129000464",
  username: "hannah.grace0928",
  avatarUrl: "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/d715726e75cc334bf87538c6aebc975b~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=25028&refresh_token=5b1fdf9abe719f9d151fb3768f34fe4a&x-expires=1733104800&x-signature=yiSeKIbQqdiJXqjJ%2B%2FQvZZht1Uc%3D&shp=a5d48078&shcp=81f88b70",
  diamondCount: 0,
  currentStreak: 0,
  validDays: 0
},
  {
  id: "7442114490004455425",
  username: ".whoslain3y",
  avatarUrl: "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/12a7359c6405d6c8b46ab3c8806b271e~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=33222&refresh_token=a739a1e9f438fac5530d554a80142071&x-expires=1733104800&x-signature=MPvG6wAUzsRQffLHyrZo7zlXplo%3D&shp=a5d48078&shcp=81f88b70",
  diamondCount: 0,
  currentStreak: 0,
  validDays: 0
},
  {
  id: "7436601847793582097",
  username: "ethanvnmber1",
  avatarUrl: "https://p16-sign-useast7.tiktokcdn-us.com/tos-useast5-avt-0068-tx/PLACEHOLDER.jpeg",
  diamondCount: 16266,
  currentStreak: 0,
  validDays: 0
},
  {
  id: "7442114465077690385",
  username: "crossoliverr",
  avatarUrl: "https://p16-sign-useast7.tiktokcdn-us.com/tos-useast5-avt-0068-tx/PLACEHOLDER.jpeg",
  diamondCount: 0,
  currentStreak: 0,
  validDays: 0
},
  {
  id: "7437289492555382800",
  username: "savybrooks",
  avatarUrl: "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/87c4ce87b1192768b86fbbe4668ac572~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=12457&refresh_token=a6e1685bfc1f073827364b10545f58dc&x-expires=1733104800&x-signature=JZnkfJEWrS874qFuRJ4ABde6RkQ%3D&shp=a5d48078&shcp=81f88b70",
  diamondCount: 0,
  currentStreak: 0,
  validDays: 0
},
  {
  id: "7437098060410257425",
  username: "soothingscrubs",
  avatarUrl: "https://p16-sign-useast7.tiktokcdn-us.com/tos-useast5-avt-0068-tx/PLACEHOLDER.jpeg",
  diamondCount: 0,
  currentStreak: 0,
  validDays: 0
},
  {
  id: "7439900229362745360",
  username: "jehadalsafer_",
  avatarUrl: "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/fcbd141d946eb0c3ffe61fdf354dc0b1~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=69753&refresh_token=3c071aeffd68a7d068755ac111281df9&x-expires=1733104800&x-signature=sda8LSOeRmtnG6aX9MaIFuYDgNg%3D&shp=a5d48078&shcp=81f88b70",
  diamondCount: 836,
  currentStreak: 0,
  validDays: 0
},
  {
  id: "The creator has quit the network",
  username: "sydney.rei",
  avatarUrl: "https://p16-sign-useast7.tiktokcdn-us.com/tos-useast5-avt-0068-tx/PLACEHOLDER.jpeg",
  diamondCount: 12442,
  currentStreak: 2,
  validDays: 2
},
  {
  id: "7432836201645768705",
  username: "marc12345marc12345",
  avatarUrl: "https://p16-sign-useast7.tiktokcdn-us.com/tos-useast5-avt-0068-tx/PLACEHOLDER.jpeg",
  diamondCount: 0,
  currentStreak: 0,
  validDays: 0
},
  {
  id: "7439937329738809361",
  username: "babygjerv",
  avatarUrl: "https://p16-sign-useast7.tiktokcdn-us.com/tos-useast5-avt-0068-tx/PLACEHOLDER.jpeg",
  diamondCount: 13227,
  currentStreak: 2,
  validDays: 2
},
  {
  id: "7443969055595315216",
  username: "itzklayton",
  avatarUrl: "https://p16-sign-useast7.tiktokcdn-us.com/tos-useast5-avt-0068-tx/PLACEHOLDER.jpeg",
  diamondCount: 29080,
  currentStreak: 1,
  validDays: 1
},
  {
  id: "7444058578182258689",
  username: "girlypopalex.777",
  avatarUrl: "https://p16-sign-useast7.tiktokcdn-us.com/tos-useast5-avt-0068-tx/PLACEHOLDER.jpeg",
  diamondCount: 7,
  currentStreak: 2,
  validDays: 2
},
  {
  id: "7443942389472837648",
  username: "mform1721",
  avatarUrl: "https://p16-sign-useast7.tiktokcdn-us.com/tos-useast5-avt-0068-tx/PLACEHOLDER.jpeg",
  diamondCount: 2,
  currentStreak: 0,
  validDays: 0
},
  {
  id: "7444326296559206416",
  username: "_aidensims",
  avatarUrl: "https://p16-sign-useast7.tiktokcdn-us.com/tos-useast5-avt-0068-tx/PLACEHOLDER.jpeg",
  diamondCount: 0,
  currentStreak: 0,
  validDays: 0
},
  {
  id: "7442005622943678465",
  username: "jessesbiggestfanmwah",
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