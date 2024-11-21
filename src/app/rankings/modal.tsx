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
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" 
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto" 
        onClick={e => e.stopPropagation()}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">
              {milestone.label} Milestone
              {milestone.reward && (
                <span className="ml-2 text-purple-600">
                  (Reward: ${milestone.rewardAmount})
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
          <div className="space-y-2">
            {users.length > 0 ? (
              users.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center border-2 border-white">
                      {user.avatarUrl ? (
                        <img 
                          src={user.avatarUrl} 
                          alt={user.username}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-lg font-semibold text-gray-700">
                          {user.username[0].toUpperCase()}
                        </span>
                      )}
                    </div>
                    <div>
                      <p className="font-bold">@{user.username}</p>
                      <p className="text-gray-600">
                        {user.diamondCount.toLocaleString()} Diamonds
                        <span className="ml-2">· Active Days: {user.validDays}</span>
                      </p>
                    </div>
                  </div>
                  {user.validDays >= 3 && (
                    <Badge className="text-sm px-2 py-1">
                      {user.validDays >= 30 ? '👑' : user.validDays >= 10 ? '🌟' : '🔥'}
                      {user.validDays} days
                    </Badge>
                  )}
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 text-base py-6">
                No creators at this milestone yet
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}