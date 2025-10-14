import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SparklerOfMonth from "./SparklerOfMonth";

const SparklBusiness = () => {
  return (
    <section className="Businesssparkl_businessMainDiv__rGdVq">
      <div className="Businesssparkl_container__mNAJ3">
        {/* Text Content */}
        <div className="Businesssparkl_content__zd1qC">
          <div className="Businesssparkl_businessSection__8pthh">
            <div className="Businesssparkl_businessContent__zvI9Y">
              <div className="Businesssparkl_businessHeading__G6FJg">
                <img
                  src="/sparklforbusinesstitle.png"
                  alt="sparkle businnes image"
                  className="Businesssparkl_businessImageTitle__rD6v8"
                />
              </div>

              <p className="Businesssparkl_businessText__XJm-v">
                Whether it’s offices, gyms, or retail spaces, Cleopatra for
                Business is coming soon to bring trusted, on-demand cleanings to
                your workplace with flexible scheduling, vetted pros, and no
                contracts.
              </p>

              <a href="#">
                <button className="font-torus Businesssparkl_comingSoonButton__Bwzdm">
                  join the wishlist
                </button>
              </a>
            </div>

            {/* Image instead of Illustration */}
            <div className="Businesssparkl_businessImageContainer__fOugo">
              <img
                src="/business.png"
                alt="Sparkl Business"
                className="Businesssparkl_businessImage__4Xvzp"
              />
            </div>
          </div>
          <SparklerOfMonth />
        </div>
      </div>
    </section>
  );
};

export default SparklBusiness;
