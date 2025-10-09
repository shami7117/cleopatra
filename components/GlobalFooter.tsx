import React from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
const socialLinks = [
    { name: 'Twitter', icon: 'https://cdn.simpleicons.org/x/white', url: '#' },
    // { name: 'LinkedIn', icon: 'https://cdn.simpleicons.org/linkedin/white', url: '#' },
    { name: 'YouTube', icon: 'https://cdn.simpleicons.org/youtube/white', url: '#' },
    { name: 'TikTok', icon: 'https://cdn.simpleicons.org/tiktok/white', url: '#' },
    { name: 'Instagram', icon: 'https://cdn.simpleicons.org/instagram/white', url: '#' },
    { name: 'Facebook', icon: 'https://cdn.simpleicons.org/facebook/white', url: '#' },
  ];
  const appLinks = [
    { name: 'Cleopatra for Android', url: '#' },
    { name: 'CLEOPATRA FOR IOS', url: '#' },
    { name: 'HELP CENTER', url: '#' },
  ];

  const footerLinks = [
    { name: 'TERMS OF SERVICE', url: '#' },
    { name: 'PRIVACY POLICY', url: '#' },
    { name: 'COOKIE POLICY', url: '#' },
    { name: 'NOTICE AT COLLECTION', url: '#' },
    { name: 'OUR LOCATIONS', url: '#' },
    { name: 'OUR BLOG', url: '/blogs' },
    { name: 'CREATOR PROGRAM', url: '#' },
  ];

  return (
  <footer className={`bg-[#FD037E] text-white ${poppins.className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Logo and Social Section */}
          <div className="space-y-6">
            {/* Logo Placeholder */}
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              {/* Add your logo here */}
        <Image alt='logo' src={'/footer.png'} width={270} height={44} className='' />
            </div>

             {/* Social Icons */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white transition-all duration-200 p-2"
                  aria-label={social.name}
                >
                  <img src={social.icon} alt={social.name} className="w-full h-full" />
                </a>
              ))}
            </div>
          </div>

          {/* Apps Section */}
          <div>
            <h3 className="text-[24px] font-medium mb-6">Apps</h3>
            <ul className="space-y-4">
              {appLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="flex items-center justify-between group hover:translate-x-1 transition-transform duration-200"
                  >
                    <span className="text-sm sm:text-[20px] font-normal">{link.name}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Section */}
          <div>
            <ul className="space-y-3 sm:space-y-4">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-sm sm:text-[20px] font-normal hover:underline transition-all duration-200 block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-sm">
            © 2025 Cleopatra Inc. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;