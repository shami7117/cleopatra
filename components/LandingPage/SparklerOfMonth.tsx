import React from "react";
import Image from "next/image";

const SparklerOfMonth = () => {
  return (
    <section className="Businesssparkl_sparklerSection__Y-1Td">
      {/* Image instead of Illustration */}
      <div className="Businesssparkl_sparklerImageContainer__Bpj8P">
        <img
          src="/month.png"
          alt="Sparkler of the Month"
          height={350}
          className="Businesssparkl_newbusinessImage__hOnSf"
        />
      </div>

      {/* Text Content */}
      <div className="Businesssparkl_sparklerContent__GqbLJ">
        <h2 className="Businesssparkl_sparklerHeading__WNHCL">
          The Cleopatra Method™
        </h2>

        <p className="Businesssparkl_sparklerText__672R2">
          An elite cleaning standard crafted for those who expect more. Each
          CleoCrew member follows a precise, proven system designed to deliver
          exceptional results. From first impression to final walkthrough, every
          detail is handled with care, precision, and pride, delivering a
          cleaning fit for royalty.
        </p>
        {/* <a href="#">
          <button className="font-torus Businesssparkl_comingSoonButton__Bwzdm">
            Learn more
          </button>
        </a> */}
      </div>
    </section>
  );
};

export default SparklerOfMonth;
