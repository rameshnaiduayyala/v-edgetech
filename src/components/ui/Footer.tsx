import React from 'react'
import { MapPin, Mail, Phone } from 'lucide-react'
import Logo from '/assets/v edge tech.png'

const Footer: React.FC = () => {
  return (
    <footer
      id="contact"
      className="bg-white dark:bg-zinc-950 border-t border-neutral-200 dark:border-neutral-800"
    >
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <img
              src={Logo}
              alt="Vertical Edge"
              className="h-10 w-auto mb-6"
            />
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-sm">
              Enterprise-grade computer vision and AI systems built
              for real-world industrial deployment.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-5 tracking-wide">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
              {[
                { label: 'Services', href: '#services' },
                { label: 'Platform', href: '#features' },
                { label: 'Industries', href: '#industries' },
                { label: 'Contact', href: '#contact' },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="hover:text-neutral-900 dark:hover:text-white transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Office */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-5 tracking-wide">
              Office
            </h4>
            <div className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 text-neutral-500" />
                <span>
                  Vertical Edge Private Limited<br />
                  Hitech Park, Madhapur<br />
                  Hyderabad, Telangana 500081
                </span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-5 tracking-wide">
              Contact
            </h4>
            <div className="space-y-4 text-sm text-neutral-600 dark:text-neutral-400">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-neutral-500" />
                <a
                  href="mailto:ayyalarameshnaidu@gmail.com"
                  className="hover:text-neutral-900 dark:hover:text-white transition"
                >
                  ayyalarameshnaidu@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-neutral-500" />
                <span>+91 79894 19864</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-neutral-200 dark:border-neutral-800
                        flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500">
          <span>
            © {new Date().getFullYear()} Vertical Edge. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
