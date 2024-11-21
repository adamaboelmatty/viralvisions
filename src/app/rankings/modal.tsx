'use client';

import React from "react";
import { Badge } from "@/components/ui/badge";

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

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  milestone: Milestone;
  users: User[];
}

export function Modal({ isOpen, onClose, milestone, users }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" 
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-md w-full max-h-[80vh] overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">
              {milestone.label} Milestone
              {milestone.reward && (
                <span className="ml-2 text-purple-600">
                  (${milestone.rewardAmount})
                </span>
              )}
            </h2>
            <button
              onClick={onClose}
              className="text-2xl text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>
        </div>

        {/* User List */}
        <div className="overflow-y-auto">
          {users.length > 0 ? (
            <div className="divide-y">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center gap-4 p-4 hover:bg-gray-50"
                >
                  {/* Avatar */}
                  <div className="relative flex-shrink-0">
                    <div className="w-14 h-14 rounded-full overflow-hidden">
                      <img 
                        src={user.avatarUrl} 
                        alt={user.username}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {user.validDays >= 3 && (
                      <div className="absolute -top-2 -right-2 bg-white rounded-full px-2 py-0.5 border shadow-sm">
                        <span className="text-sm">
                          {user.validDays >= 30 ? '👑' : user.validDays >= 10 ? '🌟' : '🔥'}
                          <span className="ml-1">{user.validDays}</span>
                        </span>
                      </div>
                    )}
                  </div>

                  {/* User Info */}
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-base">@{user.username}</div>
                    <div className="text-gray-500 text-sm">
                      {user.diamondCount.toLocaleString()} Diamonds
                    </div>
                    <div className="text-gray-500 text-sm">
                      Active Days: {user.validDays}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-gray-500">
              No creators at this milestone yet
            </div>
          )}
        </div>
      </div>
    </div>
  );
}