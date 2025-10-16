import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });
import { Card, CardContent } from "@/components/ui/card";

export default function EarningsSection() {
  const features = [
    {
      title: "Paid Per Job",
      description:
        "Every Mission on Sparkl has a clear payout. On average, Sparkl$quad members earn around $25 per hour, depending on the size of the job and how many you take on.",
      imageSrc: "/mobile-1.png", // Replace with your image path
    },
    {
      title: "Fast Weekly Payouts",
      description:
        "No waiting around. You'll get paid every week for the jobs you complete.",
      imageSrc: "/mobile-1.png", // Replace with your image path
    },
    {
      title: "No Upfront Fees",
      description:
        "It's free to join. There are no hidden costs or fees to get started. Just apply, get approved, and start working.",
      imageSrc: "/mobile-1.png", // Replace with your image path
    },
  ];

  return (
    <div
      className={`w-full bg-gradient-to-b from-pink-50 mt-[48px] to-pink-100 py-12 px-4 sm:py-16 md:py-20 ${poppins.className}`}
    >
      <div className="max-w-[950px] mx-auto">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-semibold text-center mb-12 sm:mb-16 md:mb-20">
          How much can I <span className="text-[#FD037E]">earn?</span>
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col  items-center">
              {/* Mobile Image */}
              <div className="w-full  mb-6 sm:mb-8">
                <div
                  className="relative w-full"
                  style={{ paddingBottom: "180%" }}
                >
                  <img
                    src={feature.imageSrc}
                    alt={feature.title}
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Feature Content */}
              <div className="text-center max-w-md">
                <h3 className="text-xl sm:text-[24px] font-bold mb-3 sm:mb-4 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-[18px] text-[#777777] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
