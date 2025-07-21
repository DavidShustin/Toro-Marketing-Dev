import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-toro-light to-gray-50">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold text-toro-dark mb-6">
              About <span className="text-toro-gold">Toro Marketing</span>
            </h1>
            <p className="text-xl text-toro-grey mb-8 max-w-3xl mx-auto">
              At Toro Marketing, we don't believe in quick wins or one-size-fits-all solutions. We believe in long-term growth, strong partnerships, and strategies that work, over and over again. Whether you're scaling your brand, growing your audience, or expanding your team, we're here to help you do it with purpose, clarity, and results.
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <Card className="border-toro-gold/20 mb-12">
                <CardHeader>
                  <CardTitle className="text-3xl text-toro-gold text-center">Our Strategy, Your Success</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-toro-grey leading-relaxed">
                    Toro Marketing offers full-scale video content creation, digital platform management, targeted social media campaigns, and recruiting services designed to help businesses grow their brand, increase revenue, and build reliable partners. This proposal outlines our services, pricing, and how we help you create consistent sales growth in today's digital world.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Six-Phase Success Model */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-toro-dark mb-12">Our Six-Phase Success Model</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="border-toro-gold/20 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-toro-gold">1. Strategy & Planning</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-toro-grey space-y-1 text-sm">
                    <li>• Market research and audience targeting</li>
                    <li>• Monthly content calendar</li>
                    <li>• Niche-specific campaigns and brand positioning</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-toro-gold/20 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-toro-gold">2. Script Writing</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-toro-grey space-y-1 text-sm">
                    <li>• Custom scripts aligned with your brand voice</li>
                    <li>• Attention-grabbing hooks + clear calls to action</li>
                    <li>• Structured for social video storytelling</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-toro-gold/20 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-toro-gold">3. Content Production</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-toro-grey space-y-1 text-sm">
                    <li>• Professional video filming</li>
                    <li>• Mobile-first formats ideal for Reels, TikTok, Shorts</li>
                    <li>• Visually engaging and built for retention</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-toro-gold/20 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-toro-gold">4. Editing & Post-Production</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-toro-grey space-y-1 text-sm">
                    <li>• Clean cuts, smooth transitions, and branded visuals</li>
                    <li>• Captions, music, and on-screen text for engagement</li>
                    <li>• Tailored exports for maximum reach</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-toro-gold/20 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-toro-gold">5. Platform & Community Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-toro-grey space-y-1 text-sm">
                    <li>• Daily scheduling and publishing on all platforms</li>
                    <li>• Compelling messaging designed to drive engagement</li>
                    <li>• Structured for social video storytelling</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-toro-gold/20 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-toro-gold">6. Content Strategy: Blogs & Posts</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-toro-grey space-y-1 text-sm">
                    <li>• SEO blog articles tailored to your industry</li>
                    <li>• Content posts that showcase your expertise</li>
                    <li>• Builds long-term visibility, trust, and engagement</li>
                  </ul>
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

export default About;