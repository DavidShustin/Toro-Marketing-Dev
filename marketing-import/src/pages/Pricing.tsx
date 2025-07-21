import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-toro-light to-gray-50">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold text-toro-dark mb-6">
              🌍Geo-Targeted <span className="text-toro-gold">Social Media Campaigns</span>
            </h1>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
              <Card className="border-toro-gold/20">
                <CardHeader>
                  <CardTitle className="text-toro-gold text-xl">What is it?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-toro-grey">
                    Geo-targeted ads focus your content on high-intent audiences based on location, age, interests, and behavior. By placing your brand on the platforms your ideal customer actually uses most, we boost relevance, increase conversions, and eliminate wasted spend efficiently.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-toro-gold/20">
                <CardHeader>
                  <CardTitle className="text-toro-gold text-xl">Why Do They Matter?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-toro-grey">
                    Geo-targeted campaigns focus your budget on high-potential audiences in your area. It's a smarter, more efficient way to boost visibility, drive engagement, and generate leads while maximizing your investment. By targeting the right people in the right places, you get stronger results, and maximize your investment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="border-toro-gold/20 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-toro-gold">🥉The Bronze Package</CardTitle>
                  <div className="text-4xl font-bold text-toro-dark mt-4">$1,000-$2,000<span className="text-lg text-toro-grey">/month</span></div>
                </CardHeader>
                <CardContent>
                  <p className="text-toro-grey text-sm mb-6 leading-relaxed">
                    This package is designed for small businesses with modest budgets and limited capacity to handle high lead volume. It provides an initial basic exposure campaign while preparing you for the increased lead flows — ideal for businesses that need a light, progressive and controlled flow of inquiries rather than sharp immediate growth.
                  </p>
                  <Button className="w-full bg-toro-gold hover:bg-toro-gold/90 text-toro-dark font-semibold">
                    Get Started
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-toro-gold hover:shadow-xl transition-shadow relative">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-toro-gold text-toro-dark">Most Popular</Badge>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-toro-gold">🥇The Gold Package</CardTitle>
                  <div className="text-4xl font-bold text-toro-dark mt-4">$2,500-$5,000<span className="text-lg text-toro-grey">/month</span></div>
                </CardHeader>
                <CardContent>
                  <p className="text-toro-grey text-sm mb-6 leading-relaxed">
                    Recommended for businesses looking to increase visibility, generate a steady stream of leads, and grow confidently within their market. With more flexibility in budget and targeting, it supports consistent performance without stretching your internal capacity too quickly. It's ideal for brands ready to elevate their presence while maintaining control over their pace of growth.
                  </p>
                  <Button className="w-full bg-toro-gold hover:bg-toro-gold/90 text-toro-dark font-semibold">
                    Get Started
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-toro-gold/20 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-toro-gold">💎The Platinum Package</CardTitle>
                  <div className="text-4xl font-bold text-toro-dark mt-4">$5,000-$10,000<span className="text-lg text-toro-grey">/month</span></div>
                </CardHeader>
                <CardContent>
                  <p className="text-toro-grey text-sm mb-6 leading-relaxed">
                    Designed for businesses ready to lead, not just compete. The Platinum Package delivers unmatched visibility, consistent brand dominance, and high-impact reach across every major platform. With maximum ad frequency and strategic volume, your brand stays top-of-mind wherever your audience scrolls. This package is built for companies with the capacity, confidence, and ambition to scale fast and own their market.
                  </p>
                  <Button className="w-full bg-toro-gold hover:bg-toro-gold/90 text-toro-dark font-semibold">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Project Objectives */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <Card className="border-toro-gold/20 max-w-4xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-toro-gold">Project Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold text-toro-dark mb-4">Here's What We Do With Your Budget:</h3>
                <ul className="space-y-3 text-toro-grey">
                  <li className="flex items-start">• Target your ideal customers by location, behavior, and interests</li>
                  <li className="flex items-start">• Design and run high-converting ad content</li>
                  <li className="flex items-start">• Allocate spend strategically across platforms (IG, TikTok, FB, LinkedIn)</li>
                  <li className="flex items-start">• Monitor performance, optimize daily, and scale what's working</li>
                  <li className="flex items-start">• Deliver detailed reports so you can see the ROI in real numbers</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;