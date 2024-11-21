'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";

export function RankingsNavbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4"> {/* Matched container and padding with main grid */}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="ViralVisions Logo"
              width={40}
              height={40}
              className="flex-shrink-0"
            />
            <span className="ml-2 text-3xl font-bold text-purple-600">
              RANKINGS
            </span>
          </div>
          <Button
            variant="ghost"
            onClick={() => window.location.href = 'https://viralvisions.live'}
            className="text-gray-600 hover:text-purple-600"
          >
            Home
          </Button>
        </div>
      </div>
    </nav>
  );
}