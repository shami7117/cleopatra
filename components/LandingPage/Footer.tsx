import React from 'react';

const Footer = () => {
  const footerLinks = {
    apps: [
      { name: 'Cleopatra for Android', href: '#' },
      { name: 'Cleopatra for iOS', href: '#' }
    ],
    helpSupport: [
      { name: 'Client Support', href: '#' },
      { name: 'CleoCrew Support', href: '#' },
      { name: 'Our Locations', href: '#' },
      { name: 'Join Our Team', href: '#' },
      { name: 'Creator Program', href: '#' },
      { name: 'Our Blog', href: '#' }
    ],
    privacyTerms: [
      { name: 'Terms of Service', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Notice at Collection', href: '#' }
    ],
    socials: [
      { name: 'Instagram', href: '#' },
      { name: 'TikTok', href: '#' },
      { name: 'Twitter / X', href: '#' },
      { name: 'YouTube', href: '#' },
      { name: 'LinkedIn', href: '#' },
      { name: 'Facebook', href: '#' },
      { name: 'Pinterest', href: '#' }
    ]
  };

  return (
    <footer className="w-full bg-[#C70163] mt-[-12px] text-white">
    

      {/* Footer Content */}
      <div className="px-4 md:px-8 lg:px-16 pb-8">
        <div className="max-w-7xl mx-auto">
          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
            {/* Apps Column */}
            <div>
              <h3 className="font-bold text-base md:text-lg mb-4">Apps</h3>
              <ul className="space-y-2">
                {footerLinks.apps.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-sm md:text-base text-white hover:text-pink-200 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help & Support Column */}
            <div>
              <h3 className="font-bold text-base md:text-lg mb-4">Help & Support</h3>
              <ul className="space-y-2">
                {footerLinks.helpSupport.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-sm md:text-base text-white hover:text-pink-200 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Privacy & Terms Column */}
            <div>
              <h3 className="font-bold text-base md:text-lg mb-4">Privacy & Terms</h3>
              <ul className="space-y-2">
                {footerLinks.privacyTerms.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-sm md:text-base text-white hover:text-pink-200 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials Column */}
            <div>
              <h3 className="font-bold text-base md:text-lg mb-4">Socials</h3>
              <ul className="space-y-2">
                {footerLinks.socials.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-sm md:text-base text-white hover:text-pink-200 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-pink-500 pt-8 text-center">
            <p className="text-sm md:text-base text-white">
              © 2025 Cleopatra Inc. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;