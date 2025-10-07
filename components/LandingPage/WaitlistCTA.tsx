import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const WaitlistCTA = () => {
  return (
    <section className="w-full bg-[#C70163] px-4 md:px-8 lg:px-16 py-20 md:py-32 lg:py-40">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        
        {/* Illustration replaced with Image */}
        <div className="flex justify-center md:justify-start order-2 md:order-1">
          <div className="relative w-64 h-80 md:w-80 md:h-96">
            <Image
              src="/waitlist.png" // 👉 replace with your image path
              alt="Cleopatra character illustration"
              fill
              className="object-contain rounded-2xl"
              priority
            />
          </div>
        </div>

        {/* CTA Content */}
        <div className="text-center md:text-left text-white order-1 md:order-2 space-y-6">
          <p className="text-sm md:text-base lg:text-lg font-bold tracking-wider">
            GET READY FOR SPARKL
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#FF4CB5]">
            JOIN OUR WAITLIST
          </h2>
          
          <div className="pt-4">
            <Button 
              className="bg-white text-[#FD037E] hover:bg-gray-100 font-bold px-8 py-6 rounded-full text-base md:text-lg"
            >
              GET $60 FREE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistCTA;
