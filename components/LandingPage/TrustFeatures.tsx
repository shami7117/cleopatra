import React from 'react';
import Image from 'next/image';

const TrustFeatures = () => {
  const features = [
    {
      title: 'Powered by Trust',
      description:
        'Every cleaner is background-checked, reviewed, and trained so you can feel confident inviting them into your home.',
      position: 'left',
      image: '/trust.png', // 👉 replace with your own
    },
    {
      title: 'Routine Made Easy',
      description:
        'Skip the hassle of coordinating schedules. Just book your recurring or one-time cleaning in a few simple taps.',
      position: 'right',
      image: '/routine.png', // 👉 replace with your own
    },
    {
      title: 'Tailored for You',
      description:
        'Choose your cleaner, set your schedule, and customize your service. Your home, your way, with just a few taps on your phone.',
      position: 'left',
      image: '/tailored.png', // 👉 replace with your own
    },
  ];

  return (
    <section className="w-full px-4 md:px-8 lg:px-16 py-16 md:py-24">
      <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${
              feature.position === 'right' ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Illustration */}
            <div
              className={`flex justify-center ${
                feature.position === 'right' ? 'md:order-2' : ''
              }`}
            >
              <div className="relative w-48 h-48 md:w-64 md:h-64">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
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
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
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
