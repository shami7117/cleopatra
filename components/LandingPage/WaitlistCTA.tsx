import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const WaitlistCTA = () => {
  return (
    <section className="Waitlist_waitlistMainDiv__2b821">
      <div className="Waitlist_container__qSbUy">
        {/* Illustration replaced with Image */}
        <div className="Waitlist_content__+Pg++">
          <div className="Waitlist_imageContainer__-y4Da">
            <div className="Waitlist_imageWrapper__tBDqb">
              <img
                src="/waitlist.png" // 👉 replace with your image path
                alt="Cleopatra character illustration"
                className=""
              />
            </div>
          </div>

          {/* CTA Content */}
          <div className="Waitlist_textContent__ic21M ">
            <h3 className="Waitlist_title__S1SrQ">
              If you’re not happy with your cleaning, you don’t pay
            </h3>
            <h2 className="Waitlist_subtitle__mz7BD">
              Use code "NEWCOMER" for 50% off on your first cleaning
            </h2>

            <button className="Waitlist_button__79Yzu">Book Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistCTA;
