import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const BookCleaningCTA = () => {
  return (
    <section className="w-full bg-white">
      {/* Content Section */}
      <div className="px-4 md:px-8 lg:px-16 pt-16 md:pt-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Title */}
          <h2 className="text-3xl md:text-[44px] text-center  lg:text-[52px] font-semibold text-[#FD037E] leading-tight">
            Book a Cleaning
            <br />
            with Sparkl
          </h2>

          {/* CTA Button */}
          <div>
            <Button className="bg-[#FD037E] hover:bg-pink-700 text-white font-medium px-12 py-6 rounded-[10px] text-base md:text-lg shadow-lg hover:shadow-xl transition-all">
              GET STARTED
            </Button>
          </div>
        </div>
      </div>

      {/* Wavy Bottom Border Image - Option 2: Using width/height */}
      {/* <div className="w-full overflow-hidden">
        <Image
          src="/curve1.png"
          alt="Wave decoration"
          width={1920}
          height={200}
          className="w-full h-auto"
          priority
        />
      </div> */}
    </section>
  );
};

export default BookCleaningCTA;
