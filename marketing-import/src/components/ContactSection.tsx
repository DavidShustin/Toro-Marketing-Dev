import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ContactSection: React.FC = () => {
  return (
    <section className="py-20 bg-toro-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-toro-light mb-6">
            Ready to <span className="text-toro-gold">Get Started?</span>
          </h2>
          <p className="text-xl text-toro-light/80 max-w-3xl mx-auto mb-8">
            Contact Toro Marketing today and let's discuss how we can help grow your business.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="bg-toro-grey border-toro-gold/20">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-toro-light mb-4">Get Your Free Consultation</h3>
                <p className="text-toro-light/80 mb-6">
                  Schedule a free consultation to discuss your marketing needs and discover how Toro Marketing can help your business thrive.
                </p>
                <Button size="lg" className="btn-gold text-toro-dark font-semibold px-8 py-3">
                  Schedule Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;