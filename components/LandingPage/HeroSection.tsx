import React from "react";
import { Button } from "@/components/ui/button";
// Hero Section Component
const HeroSection = () => {
  return (
    <section className="Herosection_heroBanner__4mxYV">
      <div className="Herosection_heroBannerSubDiv__6PTKU">
        {/* Image Section */}
        <div className="Herosection_contentLeft__2uYGD">
          <div className="Herosection_illustrationContainer__MGAgA">
            {/* Replace inner divs with an image */}
            <img
              src="/hero1.png"
              alt="Cleopatra Cleaning"
              height={350}
              width={400}
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="Herosection_contentRight__znChi">
          <div className="Herosection_heroRightTextDiv__Xf0lW ">
            <h1 className="Herosection_heroTextHeading__N-PRZ ">
              The easiest, most trusted way to book your next cleaning.
            </h1>

            <div className="Herosection_appBothButtons__tGRVa">
              <div className="Herosection_appButton__vDhKV">
                <img
                  src="/appstore.svg"
                  alt="appstore"
                  width={100}
                  className="Herosection_appleIcon__QpGrX"
                />
                <div className="Herosection_buttonText__+kwEp">
                  <div className="Herosection_smallText__ZI3CF">
                    Download on the
                  </div>
                  <div className="Herosection_largeText__68HwB">App Store</div>
                </div>
              </div>
              <div className="Herosection_appButton__vDhKV">
                <img
                  src="/playstore.svg"
                  alt="playstore"
                  width={100}
                  className="Herosection_googleIcon__kWAGG"
                />
                <div className="Herosection_buttonText__+kwEp">
                  <div className="Herosection_smallText__ZI3CF">Get it on</div>
                  <div className="Herosection_largeText__68HwB">
                    Google Play
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
