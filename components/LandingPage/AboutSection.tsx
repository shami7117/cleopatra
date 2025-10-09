import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section className="w-full px-4 md:px-8 lg:px-16 py-16 md:py-24">
      <div className="max-w-[950px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-[44px] lg:text-[52px] text-center md:text-left font-bold">
            <span className="text-pink-600">Clean. Simple.</span><br />
            <span className="text-pink-600">Stress-Free.</span>
          </h2>
          
          <p className="text-[#777777] leading-relaxed text-center md:text-left  text-sm md:text-[18px]">
            Cleopatra makes it easy to book a cleaner you can trust. No more stress. Just fast, reliable service with a few taps and total peace of mind.
          </p>

          <p className="text-[#777777] leading-relaxed text-center md:text-left text-sm md:text-[18px]">
            We built Cleopatra for people who value their time and want to feel in control of their spaces or service. If someone needs a cleaner with an excellent cleaning background and dependable price who strives wisely to shine, Cleopatra lets you skip the stress and get back to what matters most.
          </p>
          
          <div className="space-y-3 text-center md:text-left ">
            <p className="text-[#777777] text-sm md:text-[18px]">How Booking Works:</p>
            <ol className="space-y-2 text-[#777777] text-sm md:text-[18px]">
              <li>1. Tell us about your space and cleaning needs</li>
              <li>2. We'll match you with a top-rated cleaner nearby</li>
              <li>3. Pay securely and relax</li>
            </ol>
          </div>
        </div>

        {/* Illustration with Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            <div className=" rounded-3xl p-8 md:p-12  flex items-center justify-center">
              <Image
                src="/stress-free.png" 
                alt="Cleaning illustration"
                width={426}
                height={423}
                className="rounded-2xl object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
