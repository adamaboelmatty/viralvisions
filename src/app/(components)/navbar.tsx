'use client';

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Image
              src="/logo.png"
              alt="ViralVisions Logo"
              width={40}
              height={40}
            />
            <span className="ml-2 text-xl font-bold text-purple-600">
              ViralVisions
            </span>
          </div>
          <div className="flex items-center">
          <Button
            variant="ghost"
            onClick={() => window.location.href = 'https://viralvisions.live'}
            className={
              currentPage === "home"
                ? "text-purple-600"
                : "text-gray-600 hover:text-purple-600"
            }
          >
            Home
          </Button>
            <Button
              variant="ghost"
              onClick={() => setCurrentPage("live-creators")}
              className={
                currentPage === "live-creators"
                  ? "text-purple-600"
                  : "text-gray-600 hover:text-purple-600"
              }
            >
              Live Creators
            </Button>
            <Button
              variant="ghost"
              onClick={() => setCurrentPage("live-creator-agents")}
              className={
                currentPage === "live-creator-agents"
                  ? "text-purple-600"
                  : "text-gray-600 hover:text-purple-600"
              }
            >
              Live Creator Agents
            </Button>
            <Button
              className="ml-4 bg-purple-600 text-white hover:bg-purple-700"
              onClick={() => setCurrentPage("eligibility")}
            >
              Apply
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}