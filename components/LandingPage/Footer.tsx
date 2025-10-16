import React from "react";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const Footer = () => {
  const footerLinks = {
    apps: [
      { name: "Cleopatra for Android", href: "#" },
      { name: "Cleopatra for iOS", href: "#" },
    ],
    helpSupport: [
      { name: "Client Support", href: "#" },
      { name: "CleoCrew Support", href: "#" },
      { name: "Our Locations", href: "#" },
      { name: "Join Our Team", href: "#" },
      { name: "Creator Program", href: "#" },
      { name: "Our Blog", href: "/blogs" },
    ],
    privacyTerms: [
      { name: "Terms of Service", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Notice at Collection", href: "#" },
    ],
    socials: [
      { name: "Instagram", href: "#" },
      { name: "TikTok", href: "#" },
      { name: "Twitter / X", href: "#" },
      { name: "YouTube", href: "#" },
      { name: "LinkedIn", href: "#" },
      { name: "Facebook", href: "#" },
      { name: "Pinterest", href: "#" },
    ],
  };

  return (
    <footer className={`Footer_footerMain__Swlnc ${quicksand.className}`}>
      {/* Footer Content */}
      <div className="Footer_footerContainer__WPMg8">
        <div className="Footer_footerSub__7A5W1">
          {/* Links Grid */}
          <div className="Footer_footerLeft__YPuN2">
            {/* Apps Column */}
            <div className="Footer_footerCol__zjQUX">
              <h3 className="font-bold text-[18px] md:text-[20px] mb-4">
                Apps
              </h3>
              <ul className="">
                {footerLinks.apps.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm md:text-[18px] font-normal text-white hover:text-pink-200 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help & Support Column */}
            <div className="Footer_footerCol__zjQUX">
              <h3 className="Footer_footerRightLastUl__rqoo0">
                Help & Support
              </h3>
              <ul className="Footer_footerRightLastUl__rqoo0">
                {footerLinks.helpSupport.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm md:text-[18px] font-normal text-white hover:text-pink-200 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Privacy & Terms Column */}
          <div className="Footer_footerRight__63mUT">
            <div className="Footer_footerCol__zjQUX">
              <h3 className="">Privacy & Terms</h3>
              <ul className="">
                {footerLinks.privacyTerms.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials Column */}
            <div className="Footer_footerCol__zjQUX">
              <h3 className="">Socials</h3>
              <ul className="">
                {footerLinks.socials.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="Footer_footerCopyDiv__5kyj-">
        <p className="">© 2025 Cleopatra Inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
