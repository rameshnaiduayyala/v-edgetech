import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import Logo from "/assets/v edge tech.png"
import bg from "/assets/hero-bg.svg"


const Footer: React.FC = () => {
  return (
    <footer
      id="contact"
      className="relative w-full py-16 text-white overflow-hidden"
    >
      <img
        src={bg}
        alt="Background"
        className="absolute left-1/2 top-0 w-[2842px] max-w-none -translate-x-1/2 object-cover"
      />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 z-10 relative">
        {/* Brand & Description */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <a href="/" className="flex items-center space-x-2">
              <img
                src={Logo}
                alt="Logo"
                className="h-12 w-auto object-contain"
              />
            </a>
          </div>
          <p className="text-white/60 dark:text-neutral-400 text-sm leading-relaxed">
            Empowering machines to see, understand, and act.
            <br />
            Vision AI for a smarter, automated world.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 text-white/90 dark:text-white tracking-wide">Quick Links</h4>
          <ul className="space-y-2 text-white/60 dark:text-neutral-400 text-sm">
            {[
              { label: 'What We Do', href: '#services' },
              { label: 'Features', href: '#features' },
              { label: 'Pricing', href: '#pricing' },
              { label: 'Contact', href: '#contact' },
            ].map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  className="hover:text-cyan-400 transition duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Offices */}
        <div>
          <h4 className="font-semibold mb-4 text-white/90 dark:text-white tracking-wide">Office Address</h4>
          <div className="text-white/60 dark:text-neutral-400 text-sm space-y-4">
            <div className="flex gap-2 items-start">
              <MapPin size={18} className="mt-0.5 text-cyan-500" />
              <div>
                Vertical Edge Private Limited
                <br />
                Hitech Park, 4th Floor,
                <br />
                Street No 1, Sector 1,
                <br />
                Madhapur,
                <br />
                Hyderabad, Telangana 500081
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-white/90 dark:text-white tracking-wide">Contact</h4>
          <div className="text-white/60 dark:text-neutral-400 text-sm space-y-3">
            <div className="flex items-center gap-2 group">
              <Mail size={18} className="text-cyan-500 group-hover:scale-110 transition" />
              <a
                href="mailto:ramesh.ayyala@digitelescope.com"
                className="hover:text-cyan-400 transition duration-200"
              >
                ayyalarameshnaidu@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 group">
              <Phone size={18} className="text-purple-400 group-hover:scale-110 transition" />
              <span className="hover:text-purple-300 transition duration-200">
                +91 79894-19864
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 border-t border-white/10 dark:border-white/5 pt-6 text-center text-white/40 dark:text-white/30 text-xs z-10 relative">
        © {new Date().getFullYear()} Vertical Edge. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
