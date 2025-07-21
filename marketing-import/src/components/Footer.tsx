import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-toro-dark text-toro-light py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="https://d64gsuwffb70l.cloudfront.net/68436cb49f05d486fb67687f_1753122568533_4b693e69.png" 
                alt="Toro Marketing Logo" 
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl font-bold text-toro-gold">TORO MARKETING</span>
            </div>
            <p className="text-toro-light/80">Full-scale video content creation, digital platform management, and targeted campaigns.</p>
          </div>
          <div>
            <h4 className="font-semibold text-toro-gold mb-4">Services</h4>
            <ul className="space-y-2 text-toro-light/80">
              <li>Video Content Creation</li>
              <li>Social Media Campaigns</li>
              <li>Digital Platform Management</li>
              <li>Recruiting Services</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-toro-gold mb-4">Contact Info</h4>
            <div className="space-y-2 text-toro-light/80">
              <p>📧 info@toromarketing.com</p>
              <p>📱 (555) 123-4567</p>
              <p>📍 123 Business Ave, Suite 100</p>
              <p className="ml-4">Marketing City, MC 12345</p>
              <div className="mt-4">
                <p className="text-toro-gold font-semibold">Ready to grow your business?</p>
                <p className="text-sm">Let's create consistent sales growth together.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-toro-grey/30 mt-8 pt-8 text-center text-toro-light/60">
          <p>&copy; 2024 Toro Marketing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;