import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-toro-dark mb-6">
            Our <span className="text-toro-gold">Services</span>
          </h2>
          <p className="text-xl text-toro-grey max-w-3xl mx-auto mb-8">
            Comprehensive marketing solutions designed to grow your business and maximize your ROI.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow border-toro-gold/20">
            <CardHeader>
              <CardTitle className="text-toro-gold">Digital Marketing</CardTitle>
              <CardDescription className="text-toro-grey">Complete online presence management</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-toro-grey">Social media management, content creation, SEO optimization, and digital advertising campaigns.</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-toro-gold/20">
            <CardHeader>
              <CardTitle className="text-toro-gold">Brand Strategy</CardTitle>
              <CardDescription className="text-toro-grey">Build a powerful brand identity</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-toro-grey">Logo design, brand guidelines, market positioning, and comprehensive brand development.</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-toro-gold/20">
            <CardHeader>
              <CardTitle className="text-toro-gold">Analytics & Insights</CardTitle>
              <CardDescription className="text-toro-grey">Data-driven marketing decisions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-toro-grey">Performance tracking, market research, competitor analysis, and strategic recommendations.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;