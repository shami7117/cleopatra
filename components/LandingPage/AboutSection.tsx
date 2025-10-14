import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import TrustFeatures from "./TrustFeatures";

const AboutSection = () => {
  return (
    <section className="Tailoredprocess_featureMainDiv__w1W5n">
      <div className="Tailoredprocess_featuresContainer__Gu9-z">
        {/* Text Content */}
        <div className="Tailoredprocess_featureSubDiv__FHTUh">
          <div className="Tailoredprocess_featureContent__T6a-x">
            <div className="font-torus Tailoredprocess_featureText__88C38">
              <h2 className="Tailoredprocess_featureTitle__y89Oo">
                <span>Clean. Simple.</span>

                <span> Stress-Free.</span>
              </h2>

              <p className="Tailoredprocess_featureDescription__gwnN1">
                Cleopatra makes it easy to book a cleaner you can trust. No back
                and forth, no hidden fees. Just fast, reliable service with a
                few taps and total peace of mind.
              </p>

              <p className="Tailoredprocess_featureDescription__gwnN1">
                We built Cleopatra for people who value their time and don’t
                want to chase down quotes or wonder if someone will actually
                show up. With a streamlined booking experience and dependable
                pros who arrive ready to shine, Cleopatra lets you skip the
                stress and get back to what matters most.
              </p>

              <div className="Tailoredprocess_bookingSteps__-K1el ">
                <p className="Tailoredprocess_featureDescription__gwnN1">
                  How Booking Works:
                </p>
                <ol className="Tailoredprocess_stepsList__vsAZQ">
                  <li> Tell us about your space and cleaning needs</li>
                  <li> We'll match you with a top-rated cleaner nearby</li>
                  <li> Pay securely and relax</li>
                </ol>
              </div>
            </div>

            {/* Illustration with Image */}
            <div className="Tailoredprocess_featureImage__97OHd">
              <img
                src="/stress-free.png"
                alt="Cleaning illustration"
                className="Tailoredprocess_sectionImage__d1nX7"
              />
            </div>
          </div>
          <TrustFeatures />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
