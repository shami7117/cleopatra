import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const WaitlistCTA = () => {
  return (
    <section className="w-full bg-[#C70163] px-4 md:px-8 lg:px-16 py-20 md:py-32 lg:py-40">
      <div className="max-w-[950px] mx-auto flex flex-col md:flex-row justify-center md:justify-betwwen items-center">
        
        {/* Illustration replaced with Image */}
        <div className="flex justify-center mt-6 md:mt-0 md:justify-start order-2 md:order-1">
            <Image
              src="/waitlist.png" // 👉 replace with your image path
              alt="Cleopatra character illustration"
              width={563}
              height={534}
              className="object-contain rounded-2xl"
              priority
            />
        </div>

        {/* CTA Content */}
        <div className="text-center w-full  text-white order-1 md:order-2 ">
          <p className="text-sm md:text-[42px] font-medium italic">
            GET READY FOR SPARKL
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-[66px] font-bold italic leading-tight text-[#FF4CB5]">
            JOIN OUR WAITLIST
          </h2>
          
          <div className="pt-4">
            <Button 
              className="bg-white text-[#FD037E] hover:bg-gray-100 font-semibold px-8 py-6 rounded-[10px] text-[18px]"
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
