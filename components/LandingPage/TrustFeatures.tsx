import React from "react";
import Image from "next/image";

const TrustFeatures = () => {
  const features = [
    {
      title: "Powered by Trust",
      description:
        "Every CleoCrew member (what we call our cleaners) is vetted and tested in-app. We run background checks and review job photos to ensure every clean meets our standards.",
      position: "left",
      image: "/trust.png", // 👉 replace with your own
    },
    {
      title: "Routine Made Easy",
      description:
        "Recurring cleanings, smart reminders, and quick rebooking make it simple to keep your space consistently clean without having to think twice.",
      position: "right",
      image: "/routine.png", // 👉 replace with your own
    },
    {
      title: "Tailored for You",
      description:
        "We match you with the right Sparkler based on your location, preferences, and past feedback, so every clean feels just right for your space and your routine.",
      position: "left",
      image: "/tailored.png", // 👉 replace with your own
    },
  ];

  return (
    <section className="Tailoredprocess_featureContent__T6a-x">
      <div className="max-w-[950px] mx-auto space-y-16 md:space-y-24 ">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${
              feature.position === "right" ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Illustration */}
            <div
              className={`flex ${
                feature.position === "right"
                  ? "md:order-2 justify-center md:justify-end"
                  : "justify-center md:justify-between "
              }`}
            >
              <div className="relative ">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={426}
                  height={423}
                  className="Tailoredprocess_sectionImage__d1nX7"
                  priority={index === 0}
                />
              </div>
            </div>

            {/* Text Content */}
            <div
              className={`text-center md:text-left ${
                feature.position === "right" ? "md:order-1" : ""
              }`}
            >
              <h2 className="Tailoredprocess_featureTitle__y89Oo">
                {feature.title}
              </h2>
              <p className="Tailoredprocess_featureDescription__gwnN1">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustFeatures;
