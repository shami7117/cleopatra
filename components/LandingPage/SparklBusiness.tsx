import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const SparklBusiness = () => {
  return (
    <section className="w-full px-4 md:px-8 lg:px-16 py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="text-[#FD037E]">✨ sparkl for business</span>
          </h2>
          
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Whether it's offices, gyms, or retail spaces, Cleopatra for Business is coming soon to bring trusted, on-demand cleanings to your workplace with flexible scheduling, vetted pros, and no contracts.
          </p>

          <div>
            <Button 
              variant="outline"
              className="border-2 border-pink-600 text-[#FD037E] hover:bg-pink-50 font-bold px-8 py-6 rounded-full text-base"
            >
              COMING SOON
            </Button>
          </div>
        </div>

        {/* Image instead of Illustration */}
        <div className="flex justify-center md:justify-end">
          <Image 
            src="/business.png" 
            alt="Sparkl Business"
            width={400}
            height={400}
            className="rounded-xl object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default SparklBusiness;
