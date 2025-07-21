import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Marketing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Marketing <span className="text-orange-600">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive marketing strategies designed to drive growth and maximize ROI.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-orange-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-orange-600">Digital Marketing</CardTitle>
                  <CardDescription>Comprehensive online presence management</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Social media management, content creation, and digital advertising campaigns.</p>
                  <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-orange-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-orange-600">Brand Strategy</CardTitle>
                  <CardDescription>Build a powerful brand identity</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Logo design, brand guidelines, and market positioning strategies.</p>
                  <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-orange-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-orange-600">Analytics & Insights</CardTitle>
                  <CardDescription>Data-driven marketing decisions</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Performance tracking, market research, and strategic recommendations.</p>
                  <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Marketing;