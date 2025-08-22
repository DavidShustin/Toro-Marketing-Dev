import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-toro-dark">
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 px-4 bg-toro-light">
          <div className="container mx-auto text-center max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">💼 Pricing That Reflects Growth, Not Guesswork</h1>
            <p className="text-lg text-toro-grey">
              We design marketing systems for established businesses to grow faster, look sharper, and attract the right clients—consistently. This isn’t an expense; it’s an investment built to multiply.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <Link to="/contact"><Button variant="gold">📞 Book a Strategy Call</Button></Link>
              <Link to="/contact"><Button variant="goldOutline">Contact Our Team</Button></Link>
            </div>
          </div>
        </section>


        {/* Focus on ROI */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-8">
            <Card className="border-toro-gold/25">
              <CardHeader><CardTitle className="text-toro-gold">🎯 Our Focus: ROI, Not Activity</CardTitle></CardHeader>
              <CardContent className="text-toro-grey space-y-3">
                <p>Most agencies charge to “keep your page active.” That’s not us. We charge for strategy that works, execution that delivers, and results that drive revenue.</p>
                <ul className="space-y-2">
                  <li>• A dedicated marketing partner—not a vendor</li>
                  <li>• Custom video + content production built around your brand</li>
                  <li>• High‑performing, geo‑targeted campaigns</li>
                  <li>• A process built to generate demand—not just views</li>
                  <li>• Marketing that makes you look and perform like the market leader</li>
                </ul>
              </CardContent>
            </Card>


            <Card className="border-toro-gold/25">
              <CardHeader><CardTitle className="text-toro-gold">🔍 What Influences Pricing</CardTitle></CardHeader>
              <CardContent className="text-toro-grey">
                <ul className="space-y-2">
                  <li>• Content volume and production needs</li>
                  <li>• Platform management (Instagram, Facebook, TikTok, Google, etc.)</li>
                  <li>• Ad strategy and paid media budget</li>
                  <li>• Your current marketing infrastructure</li>
                  <li>• The level of scale you’re ready for</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>


        {/* Fit */}
        <section className="py-16 px-4 bg-toro-light">
          <div className="container mx-auto max-w-5xl">
            <Card className="border-toro-gold/25">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-toro-gold">🤝 Who We Work Best With</CardTitle>
              </CardHeader>
              <CardContent className="text-toro-grey">
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "You’ve built a solid reputation—but want more visibility",
                    "You’re ready to invest in marketing that brings real clients",
                    "You value long‑term results over vanity metrics",
                    "You want a proactive partner—not someone waiting for direction",
                    "You understand marketing is a lever, not a luxury",
                  ].map((t) => (
                    <div key={t} className="flex items-start gap-3">
                      <span className="mt-1 grid h-6 w-6 place-content-center rounded-full bg-toro-gold/15 text-toro-gold">✓</span>
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>


        {/* Clarity CTA */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-3xl font-bold mb-3">📞 Let’s Build Your Growth Plan</h2>
            <p className="text-toro-grey">We don’t quote prices before understanding your business. After a strategy call, you’ll know exactly what you need, why it matters, and what it will take to get it done.</p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Link to="/contact"><Button variant="gold">Book a Strategy Call</Button></Link>
              <Link to="/contact"><Button variant="goldOutline">Contact Our Team</Button></Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};


export default Pricing;