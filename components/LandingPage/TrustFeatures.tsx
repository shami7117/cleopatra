import React from 'react';
import Image from 'next/image';

const TrustFeatures = () => {
  const features = [
    {
      title: 'Powered by Trust',
      description:
        'Every CleoCrew member (what we call our cleaners) is vetted and tested in-app. We run background checks and review job photos to ensure every clean meets our standards.',
      position: 'left',
      image: '/trust.png', // 👉 replace with your own
    },
    {
      title: 'Routine Made Easy',
      description:
        'Recurring cleanings, smart reminders, and quick rebooking make it simple to keep your space consistently clean without having to think twice.',
      position: 'right',
      image: '/routine.png', // 👉 replace with your own
    },
    {
      title: 'Tailored for You',
      description:
        'We match you with the right Sparkler based on your location, preferences, and past feedback, so every clean feels just right for your space and your routine.',
      position: 'left',
      image: '/tailored.png', // 👉 replace with your own
    },
  ];

  return (
    <section className="w-full px-4 md:px-8 lg:px-16 py-16 md:py-24">
      <div className="max-w-[950px] mx-auto space-y-16 md:space-y-24">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${
              feature.position === 'right' ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Illustration */}
            <div
              className={`flex ${
                feature.position === 'right' ? 'md:order-2 justify-center md:justify-end' : 'justify-center md:justify-between '
              }`}
            >
              <div className="relative ">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={426}
                  height={423}
                  className="object-contain rounded-2xl"
                  priority={index === 0}
                />
              </div>
            </div>

            {/* Text Content */}
            <div
              className={`text-center md:text-left ${
                feature.position === 'right' ? 'md:order-1' : ''
              }`}
            >
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-pink-600 mb-4">
                {feature.title}
              </h3>
              <p className="text-[#777777] text-sm md:text-[18px] leading-relaxed">
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
