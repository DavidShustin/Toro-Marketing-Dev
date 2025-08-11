import { AlignCenter, AlignCenterVertical } from 'lucide-react';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-toro-dark text-toro-light">
       <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Equal-width columns, centered in the page */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-items-center">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <img
              src="https://d64gsuwffb70l.cloudfront.net/68436cb49f05d486fb67687f_1753122568533_4b693e69.png"
              alt="Toro Marketing Logo"
              className="h-[150px] w-auto object-contain"
            />
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-toro-gold mb-4">Our Services</h4>
            <ul className="space-y-2 text-toro-light/80">
              <li>Video Content Creation</li>
              <li>Social Media Campaigns</li>
              <li>Digital Platform Management</li>
              <li>Recruiting Services</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-toro-gold mb-4">Contact Info</h4>
            <div className="space-y-2 text-toro-light/80">
              <p>📧 kyle@toro-marketing.com</p>
              <p>📱 (561) 923-5287</p>
              <p>📍 Boca Raton, FL 33433</p>
              <div className="mt-4">
                <p className="text-toro-gold font-semibold">Ready to grow your business?</p>
                <p className="text-sm">Let's create consistent sales growth together.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-toro-grey/30 pt-8 text-center text-toro-light/60">
          <p>&copy; 2024 Toro Marketing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;