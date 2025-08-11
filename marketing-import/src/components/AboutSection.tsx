import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-toro-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-toro-dark mb-6">
            About <span className="text-toro-gold">Toro Marketing</span>
          </h2>
          <p className="text-xl text-toro-grey max-w-3xl mx-auto mb-8">
            We are a dynamic marketing agency dedicated to helping businesses grow through innovative strategies, creative solutions, and data-driven results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center p-8 hover:shadow-lg transition-shadow border-toro-gold/20 bg-white">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-toro-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-toro-gold">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-toro-dark">Strategic Planning</h3>
              <p className="text-toro-grey">
                Comprehensive market analysis and strategic planning to maximize your brand's potential and reach your target audience effectively.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-8 hover:shadow-lg transition-shadow border-toro-gold/20 bg-white">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-toro-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-toro-gold">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-toro-dark">Digital Growth</h3>
              <p className="text-toro-grey">
                Accelerate your digital presence with cutting-edge marketing techniques, social media management, and performance optimization.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-8 hover:shadow-lg transition-shadow border-toro-gold/20 bg-white">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-toro-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-toro-gold">💡</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-toro-dark">Creative Solutions</h3>
              <p className="text-toro-grey">
                Innovative creative campaigns that capture attention, drive engagement, and deliver measurable results for your business.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;