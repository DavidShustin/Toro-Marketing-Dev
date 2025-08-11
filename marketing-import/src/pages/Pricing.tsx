import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  const scrollToFooter = () => {
    const el = document.getElementById('footer');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-toro-light to-gray-50">
      <Navigation />

      <main className="pt-20">

        {/* GEO-TARGETED SOCIAL MEDIA CAMPAIGNS */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h1 className="flex items-center justify-center text-5xl font-bold text-toro-dark mb-10">
              🌍 Geo-Targeted Social Media Campaigns
            </h1>

            {/* Intro pair */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              <Card className="border-toro-gold/20">
                <CardHeader><CardTitle className="text-toro-gold text-xl">What is it?</CardTitle></CardHeader>
                <CardContent className="text-toro-grey">
                  We target by 📍location, 👥demographics, and 🧠behavior to reach high-intent audiences on the platforms they actually use.
                </CardContent>
              </Card>
              <Card className="border-toro-gold/20">
                <CardHeader><CardTitle className="text-toro-gold text-xl">Choose your reach. Set your pace.</CardTitle></CardHeader>
                <CardContent className="text-toro-grey">
                  We handle the rest—creative, placement, optimization, and reporting—so you get efficient growth and clear ROI 📈.
                </CardContent>
              </Card>
            </div>

            {/* Packages */}
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Bronze */}
              <Card className="border-toro-gold/20 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-toro-gold">🥉 Bronze</CardTitle>
                  <div className="text-4xl font-bold text-toro-dark mt-4">
                    $1,000–$2,000<span className="text-lg text-toro-grey">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-toro-grey text-sm mb-6 leading-relaxed">
                    For modest budgets and controlled lead flow. Establish presence while preparing for steady growth.
                  </p>
                  <Link to="/about">
                    <Button className="w-full btn-gold text-toro-dark font-semibold">What’s Included 🎬</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Gold */}
              <Card className="border-toro-gold hover:shadow-xl transition-shadow relative">
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-toro-gold text-toro-dark">Most Popular</Badge>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-toro-gold">🥇 Gold</CardTitle>
                  <div className="text-4xl font-bold text-toro-dark mt-4">
                    $2,500–$5,000<span className="text-lg text-toro-grey">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-toro-grey text-sm mb-6 leading-relaxed">
                    Increase visibility and generate steady, qualified leads while maintaining operational balance.
                  </p>
                  <Link to="/marketing">
                    <Button className="w-full btn-gold text-toro-dark font-semibold">See Services 🤝</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Platinum */}
              <Card className="border-toro-gold/20 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-toro-gold">💎 Platinum</CardTitle>
                  <div className="text-4xl font-bold text-toro-dark mt-4">
                    $5,000–$10,000<span className="text-lg text-toro-grey">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-toro-grey text-sm mb-6 leading-relaxed">
                    Maximum reach and frequency across major platforms—own your market and scale fast.
                  </p>
                  <Button onClick={scrollToFooter} className="w-full btn-gold text-toro-dark font-semibold">Talk to Us ✉️</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* PROJECT OBJECTIVES */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <Card className="border-toro-gold/20 max-w-4xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-toro-gold">🎯 Project Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-toro-grey">
                  <li>• 📍 Target ideal customers by location, behavior, and interests</li>
                  <li>• 🧪 Test creatives & audiences; scale what wins</li>
                  <li>• 🗂️ Allocate spend across IG, TikTok, FB, LinkedIn strategically</li>
                  <li>• 🔧 Optimize daily to reduce wasted spend</li>
                  <li>• 📈 Report clearly on CPL, CTR, ROAS</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Hero */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold text-toro-dark mb-4">
              Investment Packages <span className="text-toro-gold">&amp; Pricing</span>
            </h1>
            <p className="text-toro-grey max-w-3xl mx-auto">
              Same strategy. Different pace. Professional scripting, filming, editing, and platform optimization included in every tier.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <Link to="/marketing">
                <Button className="btn-gold text-toro-dark font-semibold">Explore Services</Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="border-toro-gold text-toro-gold hover:bg-toro-gold hover:text-toro-dark">
                  How We Work
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* VIDEO CONTENT PACKAGES */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-toro-dark mb-12">📹 Video Content Packages</h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Conquest */}
              <Card className="border-toro-gold/20 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-toro-gold">🚀 Conquest</CardTitle>
                  <div className="text-4xl font-bold text-toro-dark mt-4">
                    $3,500<span className="text-lg text-toro-grey">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-toro-grey text-sm leading-relaxed mb-6">
                    Start building your empire. With consistent production each month, you’ll create steady momentum and visibility across platforms.
                  </p>
                  <Link to="/marketing">
                    <Button className="w-full btn-gold text-toro-dark font-semibold">See What’s Included</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Dominion */}
              <Card className="border-toro-gold hover:shadow-xl transition-shadow relative">
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-toro-gold text-toro-dark">Most Popular</Badge>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-toro-gold">🏆 Dominion</CardTitle>
                  <div className="text-4xl font-bold text-toro-dark mt-4">
                    $5,500<span className="text-lg text-toro-grey">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-toro-grey text-sm leading-relaxed mb-6">
                    Build frequency and dominate your market with more content, more distribution, and consistent audience conversations.
                  </p>
                  <Link to="/marketing">
                    <Button className="w-full btn-gold text-toro-dark font-semibold">See What’s Included</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Imperator */}
              <Card className="border-toro-gold/20 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-toro-gold">⚡ Imperator</CardTitle>
                  <div className="text-4xl font-bold text-toro-dark mt-4">
                    $7,500<span className="text-lg text-toro-grey">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-toro-grey text-sm leading-relaxed mb-6">
                    Reign without limits. High-frequency output and strategy built to scale—own your category with depth and reach.
                  </p>
                  <Link to="/marketing">
                    <Button className="w-full btn-gold text-toro-dark font-semibold">See What’s Included</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            <p className="text-center text-sm text-toro-grey mt-6">
              “If they’re not seeing you, they’re buying from someone else.” — Toro Marketing
            </p>
          </div>
        </section>

        {/* VIDEO PACKAGE INCLUDES */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <Card className="border-toro-gold/20 max-w-4xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-toro-gold">🎬 Video Package Includes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-toro-grey">
                  <li>• 🎥 Filming & direction (short-form, mobile-first)</li>
                  <li>• ✂️ Editing: captions, music, transitions, on-screen text</li>
                  <li>• 🗓️ Scheduling & publishing across IG/TikTok/FB/LinkedIn</li>
                  <li>• 📊 Weekly performance checks & monthly reports</li>
                  <li>• 🔁 Iteration on hooks, CTAs, and creatives</li>
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