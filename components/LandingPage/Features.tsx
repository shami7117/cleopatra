import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Features = () => {
  const features = [
    { icon: "/cleaner.png", text: "VETTED CLEANERS", color: "bg-pink-100" },
    {
      icon: "/pricing.png",
      text: "TRANSPARENT PRICING",
      color: "bg-purple-100",
    },
    { icon: "/booking.png", text: "FAST BOOKING", color: "bg-pink-100" },
    { icon: "/premium.png", text: "PREMIUM SERVICE", color: "bg-red-100" },
    { icon: "/24.png", text: "24/7 SUPPORT", color: "bg-purple-100" },
  ];

  return (
    <section className="Herosection_featuresBarContainer__if+wh">
      <div className="Herosection_featuresBarWrapper__pSa3+">
        <div className="Herosection_featuresBar__hd2I6">
          {features.map((feature, index) => (
            <div key={index} className="Herosection_feature__PNtrU">
              <div>
                <Image
                  src={feature.icon}
                  alt={feature.text}
                  width={24}
                  height={24}
                  className="Herosection_featureIcon__7R9tm"
                />
              </div>
              <span className="">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
