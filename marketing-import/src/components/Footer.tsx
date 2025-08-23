import React from "react";
import footerLogo from "@/assets/footerLogo.png";

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-toro-dark text-toro-light">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Center each column in the grid, but left-align content inside a fixed-width wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center items-start">
          {/* Logo */}
          <div className="flex justify-center">
            <img
              src={footerLogo}
              alt="Toro Marketing Logo"
              className="h-[150px] w-auto object-contain"
            />
          </div>

          {/* Our Services — centered column, left-aligned content */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-[320px] text-left">
              <h4 className="font-semibold text-toro-gold mb-4 text-[1.1875rem] md:text-[1.375rem]">Our Services</h4>
              <ul className="space-y-2 text-toro-light/80">
                <li>Video Content Creation</li>
                <li>Social Media Campaigns</li>
                <li>Digital Platform Management</li>
                <li>Recruiting Services</li>
              </ul>
            </div>
          </div>

          {/* Contact Info — centered column, left-aligned content */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-[320px] text-left">
              <h4 className="font-semibold text-toro-gold mb-4 text-[1.1875rem] md:text-[1.375rem]">Contact Info</h4>
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
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-toro-grey/30 pt-8 text-center text-toro-light/60">
          <p>&copy; 2025 Toro Marketing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
