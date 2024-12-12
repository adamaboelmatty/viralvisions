'use client';

import React from 'react';
import Image from 'next/image';

export function LogoBannerSection() {  // Make sure to export the component
  const logos = [
    { src: '/bang.png', alt: 'Bang' },
    { src: '/monster.png', alt: 'Monster' },
    { src: '/amika.png', alt: 'Amika' },
  ];

  return (
    <div className="w-full bg-white pt-10 pb-10 overflow-hidden"> {/* Reduced pt from py-8 to pt-2 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Title Section */}
        <div className="relative mb-12">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          
          <div className="relative flex justify-center">
            <span className="bg-white px-6 py-1 text-center">
              <h3 className="text-xl font-extrabold text-gray-800"> {/* Reverted to original styling */}
                OUR CREATORS HAVE WORKED WITH
              </h3>
            </span>
          </div>
        </div>
        
        {/* Logo Scroll Section */}
        <div className="relative">
          <div className="flex space-x-12 animate-scroll">
            {logos.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                className="flex items-center justify-center min-w-[150px] grayscale hover:grayscale-0 transition-all duration-200"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={60}
                  className="object-contain h-12"
                />
              </div>
            ))}
            
            {/* Duplicate set for seamless scrolling */}
            {logos.map((logo, index) => (
              <div
                key={`logo-2-${index}`}
                className="flex items-center justify-center min-w-[150px] grayscale hover:grayscale-0 transition-all duration-200"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={60}
                  className="object-contain h-12"
                />
              </div>
            ))}

                        {/* Duplicate set for seamless scrolling */}
                        {logos.map((logo, index) => (
              <div
                key={`logo-2-${index}`}
                className="flex items-center justify-center min-w-[150px] grayscale hover:grayscale-0 transition-all duration-200"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={60}
                  className="object-contain h-12"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}