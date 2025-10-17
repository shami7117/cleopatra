import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { name: "Twitter", icon: "https://cdn.simpleicons.org/x/white", url: "#" },
    // { name: 'LinkedIn', icon: 'https://cdn.simpleicons.org/linkedin/white', url: '#' },
    {
      name: "YouTube",
      icon: "https://cdn.simpleicons.org/youtube/white",
      url: "#",
    },
    {
      name: "TikTok",
      icon: "https://cdn.simpleicons.org/tiktok/white",
      url: "#",
    },
    {
      name: "Instagram",
      icon: "https://cdn.simpleicons.org/instagram/white",
      url: "#",
    },
    {
      name: "Facebook",
      icon: "https://cdn.simpleicons.org/facebook/white",
      url: "#",
    },
  ];
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
    <footer className={`footer ${poppins.className}`}>
      <div className="footer-container">
        {/* Apps Section */}
        <div className="footer-section">
          <h4 className="">Apps</h4>
          <ul className="">
            {footerLinks.apps.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Help & Support Column */}
        <div className="footer-section">
          <h4 className="">Help & Support</h4>
          <ul className="">
            {footerLinks.helpSupport.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-section">
          <div className="">
            <h4 className="">Privacy & Terms</h4>
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
        </div>
        {/* Socials Column */}
        <div className="footer-section">
          <h4 className="">Socials</h4>
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

      {/* Copyright */}
      <hr className="footer-divider" />
      <div className="footer-bottom">
        © 2025 Cleopatra Inc. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
