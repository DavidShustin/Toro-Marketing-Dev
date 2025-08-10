import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-toro-dark via-toro-grey to-toro-dark flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23d4af37%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-toro-light mb-6">
          TORO
          <span className="block text-toro-gold">
            MARKETING
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-toro-light/80 mb-8 max-w-2xl mx-auto">
          Elevating brands through strategic marketing solutions, creative excellence, and data-driven results that transform businesses.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/marketing">
            <Button size="lg" className="bg-toro-gold hover:bg-toro-gold-dark text-toro-dark font-semibold px-8 py-3">
              Explore Our Services
            </Button>
          </Link>
          <Link to="/about">
            <Button size="lg" variant="outline" className="border-toro-gold text-toro-gold hover:bg-toro-gold hover:text-toro-dark px-8 py-3">
              Learn About Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;