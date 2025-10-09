import React from 'react';
import Image from 'next/image';

const SparklerOfMonth = () => {
  return (
    <section className="w-full px-4 md:px-8 lg:px-16 py-16 md:py-24 bg-gray-50">
      <div className="max-w-[950px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        
        {/* Image instead of Illustration */}
        <div className="flex justify-center md:justify-start order-2 md:order-1">
          <Image
            src="/month.png" 
            alt="Sparkler of the Month"
            width={400}
            height={500}
            className="rounded-xl object-contain"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="space-y-6 order-1 md:order-2">
          <h2 className="text-3xl md:text-[44px] text-center md:text-left text-[#FD037E]  lg:text-[52px] leading-tight font-semibold">
            Sparkler of the Month - Jackeline R.
          </h2>
          
          <p className="text-gray-700 text-center md:text-left  text-sm md:text-[18px] leading-relaxed">
           An elite cleaning standard crafted for those who expect more. Each CleoCrew member follows a precise, proven system designed to deliver exceptional results. From first impression to final walkthrough, every detail is handled with care, precision, and pride, delivering a cleaning fit for royalty.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SparklerOfMonth;
