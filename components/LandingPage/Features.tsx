import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Features = () => {
  const features = [
    { icon: '/cleaner.png', text: 'VETTED CLEANERS', color: 'bg-pink-100' },
    { icon: '/pricing.png', text: 'TRANSPARENT PRICING', color: 'bg-purple-100' },
    { icon: '/booking.png', text: 'FAST BOOKING', color: 'bg-pink-100' },
    { icon: '/premium.png', text: 'PREMIUM SERVICE', color: 'bg-red-100' },
    { icon: '/24.png', text: '24/7 SUPPORT', color: 'bg-purple-100' }
  ];

  return (
    <section className="w-full px-4 md:px-8 lg:px-16 py-8 border-t border-b border-gray-200">
      <div className="max-w-[950px] mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-6 ">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className={`w-10 h-10 md:w-12 md:h-12 ${feature.color} rounded-full flex items-center justify-center`}
              >
                <Image
                  src={feature.icon}
                  alt={feature.text}
                  width={24}
                  height={24}
                  className="w-6 h-6 md:w-8 md:h-8 object-contain"
                />
              </div>
              <span className="text-[14px]  font-bold text-[#777777] whitespace-nowrap">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
