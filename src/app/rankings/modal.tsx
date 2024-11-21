'use client';

import React from "react";

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
  React.useEffect(() => {
    // Prevent background scrolling when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div 
      onClick={onClose}
    >
      <div 
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-full max-w-md rounded-2xl max-h-[90vh] flex flex-col overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 border-b flex items-center justify-between sticky top-0 bg-white z-10">
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
            className="text-2xl text-gray-500 hover:text-gray-700 w-8 h-8 flex items-center justify-center"
          >
            ×
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          {users.length > 0 ? (
            <div className="divide-y">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center gap-4 p-4 hover:bg-gray-50"
                >
                  {/* Avatar */}
                  <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src={user.avatarUrl} 
                      alt={user.username}
                      className="w-full h-full object-cover"
                    />
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

                  {/* Streak Badge - Moved to right side */}
                  {user.validDays >= 3 && (
                    <div className="flex-shrink-0 bg-white rounded-full px-3 py-1.5 shadow-sm border">
                      <span className="text-sm whitespace-nowrap">
                        {user.validDays >= 30 ? '👑' : user.validDays >= 10 ? '🌟' : '🔥'}
                        <span className="ml-1">{user.validDays}</span>
                      </span>
                    </div>
                  )}
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