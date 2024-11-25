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

  const users = [
    {
      id: "7430639971188523025",
      username: "blondielift",
      avatarUrl: "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/f279f03c55f2e3283caedbde37748069~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=92262&refresh_token=a2ef3493d929268f7fd1d4f7c665c5e6&x-expires=1732665600&x-signature=BmXQHDJ%2FrRUwjuOzEImbznyWb60%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 359486,
      currentStreak: 16,
      validDays: 16
    },
    {
      id: "7431305555609829392",
      username: "biggergoofy",
      avatarUrl: "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/826ed54ced4174ba2ce33a3d9c9e1ab4~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=2525&refresh_token=36ba2d2a2c4a739beb4d29944af049fb&x-expires=1732665600&x-signature=f%2BbA6LlJkZFXxXLzYzjMXGKaueY%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 301346,
      currentStreak: 21,
      validDays: 21
    },
    {
      id: "7434529706084663297",
      username: "hill.andrew",
      avatarUrl: "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/5f9e20ea62693a9c07ddc68651a91413~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=9502&refresh_token=1ea5f67969416d3ecfb3f8f565bc6728&x-expires=1732233600&x-signature=xOlZgvecWeANX1juExPDbr3t63M%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 280401,
      currentStreak: 12,
      validDays: 12
    },
    {
      id: "7430599854776156176",
      username: "treasurerinaldi",
      avatarUrl: "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/d138a0ac7d63fb18963ff01f7d5f5f28~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=50940&refresh_token=553fd0eca8c2f1b49834465486e4bea5&x-expires=1732233600&x-signature=tERP6IcZ7I91J9YkAf2g9b1TQgs%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 214757,
      currentStreak: 10,
      validDays: 10
    },
    {
      id: "7428762234568081424",
      username: "_juliannaortiz",
      avatarUrl: "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/a821c34283898af48002ab9e7d8e0edc~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=41082&refresh_token=0fc4da7da48ffafd3dbfb2a354852995&x-expires=1732665600&x-signature=c7Zk2kpNNApO3o98G1o2dyJN2fo%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 176713,
      currentStreak: 12,
      validDays: 12
    },
    {
      id: "7429910374083805201",
      username: "_ryan10101_",
      avatarUrl: "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/b630c5982ed3b26e5441c4f4308e9b0a~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=98597&refresh_token=e6c60df3011d84f83d0a4ba6ef41b197&x-expires=1732233600&x-signature=zxHFXZ6IBcVOLp7y%2BZ2GYagXMBk%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 91400,
      currentStreak: 9,
      validDays: 9
    },
    {
      id: "7428778607167717393",
      username: "meggan_horn",
      avatarUrl: "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/921df000bb99f72264c08d607eae7102~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=12043&refresh_token=de956f2d1e6ba6af006c0ecef0c78cff&x-expires=1732665600&x-signature=DMMsRxCeUrevX7OhdWoPUH%2FyECc%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 90512,
      currentStreak: 17,
      validDays: 17
    },
    {
      id: "7433525532181921809",
      username: "graceschouvieller",
      avatarUrl: "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/9788d959487ce02871bcea13a6492511~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=17837&refresh_token=3bba530a935eff9ca34c042ca822fb00&x-expires=1732665600&x-signature=Sygu%2BglBovmU5pLkrqAIfAjSWFc%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 63483,
      currentStreak: 11,
      validDays: 11
    },
    {
      id: "7429916855852122129",
      username: "matthardy88",
      avatarUrl: "https://p19-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/2f883ab2ea8cdb1223ffbca1b582390b~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=105&refresh_token=9a17ea6dea8c510830d7b698bf0377c4&x-expires=1732233600&x-signature=eucyT9kzLEd8HlAiDTI%2BcgFC6%2FE%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 56391,
      currentStreak: 8,
      validDays: 8
    },
    {
      id: "7429909675828625409",
      username: "zboocka",
      avatarUrl: "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/51aa50d9451289ee7e226cb7e380a6ea~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=5404&refresh_token=9f0c8fe9a45aee008dfe58acc376ab4d&x-expires=1732665600&x-signature=00T6%2BGPArtDx3bvLaZSg2qKgpNw%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 46057,
      currentStreak: 7,
      validDays: 7
    },
    {
      id: "7428778451936542736",
      username: "theportersonntag",
      avatarUrl: "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/10094ef56d1c5c825d7c56a2808ece67~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=45971&refresh_token=35f6a3b180e5b97349818af0ea26af8d&x-expires=1732233600&x-signature=VvMS6aryGFGogJLncCxeWMGWBRk%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 45742,
      currentStreak: 8,
      validDays: 8
    },
    {
      id: "7435873073317888001",
      username: "lexaaajane",
      avatarUrl: "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/db6cc1bdf54e8f141b9b5ebec6811da7~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=53459&refresh_token=85d8aaec53c7a35904e5dccbf22d8bc4&x-expires=1732233600&x-signature=0EHQkhN9nHG0IicNjz%2BxnPdtsm0%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 43884,
      currentStreak: 3,
      validDays: 3
    },
    {
      id: "7429931422900666385",
      username: "rhayatherton",
      avatarUrl: "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/cc8f208da0f505d2df524e97ed4ed509~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=32839&refresh_token=c84b7fbfcde999cd361051e987d86e63&x-expires=1732392000&x-signature=GoxVUva5vaE0%2BfUTVzi50lmwc7g%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 24246,
      currentStreak: 2,
      validDays: 2
    },
    {
      id: "7429943544455938064",
      username: "milenajoycee",
      avatarUrl: "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/252cf912dbb1df042d429f872d274252~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=4677&refresh_token=77a062ef7e238ac0e78cf4cbe698e7e5&x-expires=1732665600&x-signature=oWBfuE7jYC1tpQDja5cKM4kX8L4%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 22952,
      currentStreak: 2,
      validDays: 2
    },
    {
      id: "7434692820197457937",
      username: "josiebae9",
      avatarUrl: "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/8c7b533a793cd23f99b5ba2ec0e250db~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=74760&refresh_token=7aa9692b0382e3bfb40dcc725706ce73&x-expires=1732233600&x-signature=3TirRKkqRb1V0juBXA58i0%2BslU0%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 21303,
      currentStreak: 1,
      validDays: 1
    },
    {
      id: "7440258372751966208",
      username: "taylormayberry",
      avatarUrl: "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/8ca13cd7e6e2b255e0256db37f50a093~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=30372&refresh_token=7d0c3135a0b5d4b3a158f8a02f4f80cf&x-expires=1732665600&x-signature=64hUIOYmusUzBYsr5IXwHeHj7O4%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 16373,
      currentStreak: 1,
      validDays: 1
    },
    {
      id: "7433967653015797776",
      username: "samthomas_1",
      avatarUrl: "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/cb90aa792569e17f0697defa6250b070~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=68532&refresh_token=a0289ac4f4cadfbd1cd16d7f86029245&x-expires=1732665600&x-signature=4WanYSQHwhAmxDBxcHjFsENuvv0%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 10686,
      currentStreak: 2,
      validDays: 2
    },
    {
      id: "7438773484378947585",
      username: "swagmaster1738",
      avatarUrl: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/fd05f71f6011fa25bfb0fa9e6e350241~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=81380&refresh_token=d6dd7fa12ed4b1e26c0e6cd43acf2628&x-expires=1732392000&x-signature=QECv%2BurkitPkjTiPJTkGHgMh4Ek%3D&shp=a5d48078&shcp=81f88b70",
      diamondCount: 3483,
      currentStreak: 2,
      validDays: 2
  },
  {
    id: "7435452847371698192",
    username: "haileygracieee",
    avatarUrl: "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/10ce84005f31b58bb3e299e71d838190~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=24964&refresh_token=ab45e810331a708dbf7577fe36271006&x-expires=1732665600&x-signature=ev76BiK7w7azvEUKo6XwOyMfuJM%3D&shp=a5d48078&shcp=81f88b70",
    diamondCount: 3467,
    currentStreak: 4,
    validDays: 4
  },
  {
    id: "7433515005670064129",
    username: "hevbev_3",
    avatarUrl: "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/16cf2b05c0fb907c2d6e4382d9747dd7~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=36008&refresh_token=f0571be38179e5cb70a405e9da167def&x-expires=1732392000&x-signature=yfUpzd3ynbPPvfHNmYQ%2F5F0kfaw%3D&shp=a5d48078&shcp=81f88b70",
    diamondCount: 2070,
    currentStreak: 4,
    validDays: 4
  },
  {
    id: "7440258052529373200",
    username: "sillyrabiitrixare4kids",
    avatarUrl: "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/df6bd41963164e71de76ace162817787~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=87466&refresh_token=00fb5bbdc95dab539b1107524ebdc07c&x-expires=1732665600&x-signature=v0%2FXXDsHmPOb94nABHwqCj%2B1srg%3D&shp=a5d48078&shcp=81f88b70",
    diamondCount: 1001,
    currentStreak: 0,
    validDays: 0
  },
  {
    id: "7438773724033122321",
    username: ".aubbie",
    avatarUrl: "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/1e38b2d232186645d38f63d000b2c222~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=25822&refresh_token=344a6aa67018f0bd75a2f98301949cee&x-expires=1732392000&x-signature=iKmq9o1TI%2FSEiJDcQzxiYG6SMUw%3D&shp=a5d48078&shcp=81f88b70",
    diamondCount: 908,
    currentStreak: 1,
    validDays: 1
  },
  {
    id: "7429932355579789313",
    username: ".nqlan",
    avatarUrl: "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/74ac40e807d05c7f80f7c7ada66032c9~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=88480&refresh_token=bd724165e0694498e692112604918015&x-expires=1732392000&x-signature=9KYmttQSxF%2Bf7xgoPdzRpOR%2Btbw%3D&shp=a5d48078&shcp=81f88b70",
    diamondCount: 894,
    currentStreak: 1,
    validDays: 1
  },
  {
    id: "7436547557267914768",
    username: "glen.tb8",
    avatarUrl: "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/fb5741a67af92ac9ea413655c6919f29~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=11460&refresh_token=d792a468f10210562bf1b478c915ac43&x-expires=1732665600&x-signature=1ke0fxqRLpst%2Frz73cKie6vdWYc%3D&shp=a5d48078&shcp=81f88b70",
    diamondCount: 858,
    currentStreak: 4,
    validDays: 4
  },
  {
    id: "7428922710903865345",
    username: "kendraamckee",
    avatarUrl: "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/9d45c7e29f38b99fb3fe39e2afe91141~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=61119&refresh_token=c1fa87e908739cfd17c69f546cbe62f3&x-expires=1732665600&x-signature=BwIhJH0RtZdBV8P7x3KKB5fAZWc%3D&shp=a5d48078&shcp=81f88b70",
    diamondCount: 794,
    currentStreak: 0,
    validDays: 0
  },
  {
    id: "7439177061366857744",
    username: "tyler.mac1",
    avatarUrl: "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/e2c6b67db4873ef4df3464488d586f6e~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=94440&refresh_token=d13addaece7091e45e6baba30d7bb51e&x-expires=1732392000&x-signature=VZSFIgdrfH0EByDYqfuOdZ%2FwBHo%3D&shp=a5d48078&shcp=81f88b70",
    diamondCount: 650,
    currentStreak: 1,
    validDays: 1
  },
  {
    id: "7399002293627454360",
    username: "jehadshafer_",
    avatarUrl: "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/fcbd141d946eb0c3ffe61fdf354dc0b1~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=2752&refresh_token=a37bfa5cbf0e9f4fc9b1f2e418a73fb9&x-expires=1732665600&x-signature=9TqDCQTqVS3gz65b%2BTLXDQGlkmk%3D&shp=a5d48078&shcp=81f88b70",
    diamondCount: 347,
    currentStreak: 2,
    validDays: 2
  },
  {
    id: "7433839668661059601",
    username: "mariahbarelaa",
    avatarUrl: "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/c2f23a54273c6ab8b200fc7b28f40fbc~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=66824&refresh_token=f6c4b8d559a4cb4a9b61eaf2d5228866&x-expires=1732233600&x-signature=S85IAqZyr4rPFidkaI3W%2FBevaSo%3D&shp=a5d48078&shcp=81f88b70",
    diamondCount: 332,
    currentStreak: 2,
    validDays: 2
  },
  {
    id: "7430624377831702544",
    username: "brilampert",
    avatarUrl: "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/0065528a58dbf9935402dbd7586caff3~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=71567&refresh_token=0d417f94de614fa0d7116a583164691c&x-expires=1732233600&x-signature=LRjPl54c7cT1n96FoE1OmmMM%2B1A%3D&shp=a5d48078&shcp=81f88b70",
    diamondCount: 214,
    currentStreak: 2,
    validDays: 2
  },
  {
    id: "7431261077935112208",
    username: "j.f.banks",
    avatarUrl: "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/08a796f36b62b78d5fb4f6ff5adad678~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=9002&refresh_token=b64e70ae8d9e26974b9025b9bef57351&x-expires=1732665600&x-signature=xrUSI0GdxQ8kM7YdtBaYQuPPxrQ%3D&shp=a5d48078&shcp=81f88b70",
    diamondCount: 43,
    currentStreak: 1,
    validDays: 1
  },
  {
    id: "7429963165842079745",
    username: "sydney.erin27",
    avatarUrl: "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/dee9a96b30945aa66c20156c44db732e~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=17697&refresh_token=10c996c977505f3f1ec5fa7414063f73&x-expires=1732665600&x-signature=RZhesvtxgk1%2BMtltrKCjGtjARVU%3D&shp=a5d48078&shcp=81f88b70",
    diamondCount: 35,
    currentStreak: 0,
    validDays: 0
  },
  {
    id: "7430141664343408657",
    username: "aaron.s16",
    avatarUrl: "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/9c0cb8760a0ef956f444a789891a798b~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=53927&refresh_token=16e4f91fdab6aba7595cf23f90b0804c&x-expires=1732392000&x-signature=%2BOBorZJGBisSKfWaLXpnWdAINO4%3D&shp=a5d48078&shcp=81f88b70",
    diamondCount: 10,
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
    avatarUrl: "https://p19-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/8940f9cb9b20fd1f74628cdfebd0f056~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=42677&refresh_token=23f01d58217a351f2a3ebee7596ff1dc&x-expires=1732392000&x-signature=QsIqDJnF3JJXFEwpOBzlifVfj4E%3D&shp=a5d48078&shcp=81f88b70",
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
    avatarUrl: "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/551c411b2b88c5c830047cf550dfc6b8~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=57268&refresh_token=71f6a7a8435382fcd819cd09cc31dad2&x-expires=1732392000&x-signature=oIjT7rFJip%2F3V2U8nafpGUDLwqE%3D&shp=a5d48078&shcp=81f88b70",
    diamondCount: 0,
    currentStreak: 0,
    validDays: 0
  },
 {id: "7429910374083739665",
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
  diamondCount: 0,
  currentStreak: 0,
  validDays: 0
},
{
  id: "7432033197124288529",
  username: ".brazipapi",
  avatarUrl: "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/cdf3373463db4317f2277416a3033377~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=37639&refresh_token=b1f70d21d04fc107f4dceeb1384b13c2&x-expires=1732392000&x-signature=ALq%2Fl76il7ItdrqtNfubN2Jhk98%3D&shp=a5d48078&shcp=81f88b70",
  diamondCount: 0,
  currentStreak: 1,
  validDays: 1
},
{
  id: "7439373292738809361",
  username: "babygjenv",
  avatarUrl: "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/465d61e7e7815525c8c8ebee5a8652cc~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=8184&refresh_token=6c8228b5c5ec6bfe0e65cfcb429e67b7&x-expires=1732665600&x-signature=c%2FgjNqQKXnv0w9EU2HVQuRmo8uo%3D&shp=a5d48078&shcp=81f88b70",
  diamondCount: 0,
  currentStreak: 0,
  validDays: 0
},
{
  id: "7440258476385026049",
  username: "sydney.rei",
  avatarUrl: "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/ad04cf76cb83d3a28a2cf4ddaf2d0dd3~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=54280&refresh_token=c0a7d4ead8422925a27b3a63ea59a608&x-expires=1732665600&x-signature=ZjuNBUFC1LQpgCbZ%2FnDzoJ8o9yw%3D&shp=a5d48078&shcp=81f88b70",
  diamondCount: 0,
  currentStreak: 0,
  validDays: 0
},
{
  id: "7437289492555382800",
  username: "savybrooks",
  avatarUrl: "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/87c4ce87b1192768b86fbbe4668ac572~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=54086&refresh_token=14456f671efba4e8b6132c955edab2ef&x-expires=1732665600&x-signature=voHlCuyfUFkBs49mcVnOO%2BJ3I80%3D&shp=a5d48078&shcp=81f88b70",
  diamondCount: 0,
  currentStreak: 0,
  validDays: 0
},
{
  id: "7437098060410257425",
  username: "soothingscrubs",
  avatarUrl: "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/26766b47b1e7d723154c4ca8ceebeb11~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=94881&refresh_token=270eee39f2d95ad1fa58c5c8715a0ef1&x-expires=1732392000&x-signature=f6ZON50guxgqg6aCZR3kS%2FPjvJI%3D&shp=a5d48078&shcp=81f88b70",
  diamondCount: 0,
  currentStreak: 0,
  validDays: 0
}
  ].sort((a, b) => b.diamondCount - a.diamondCount);

  // Updated milestone position logic
  const getMilestonePosition = (diamonds: number) => {
    return getMilestoneRanges.findIndex(
      range => diamonds >= range.min && diamonds < range.max
    );
  };

  // Updated users at milestone logic
  const getUsersAtMilestone = (milestoneIndex: number) => {
    const range = getMilestoneRanges[milestoneIndex];
    return users.filter(
      user => user.diamondCount >= range.min && user.diamondCount < range.max
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