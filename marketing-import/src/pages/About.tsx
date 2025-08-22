import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-toro-dark">
      <div className="bg-toro-dark text-toro-light">
        <Navigation />
        {/* Hero */}
        <section className="py-24 px-4 text-center">
          <div className="container mx-auto max-w-5xl">
            <h1 className="text-5xl font-extrabold mb-4">We’re Not a Marketing Agency. We’re the Growth Partner You’ve Been Missing.</h1>
            <p className="text-xl text-toro-light/90 max-w-4xl mx-auto">
              Most agencies check boxes and call it strategy. TORO ends the fluff and builds marketing that actually moves the needle.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <Link to="/contact"><Button variant="gold">Book a Strategy Call</Button></Link>
              <Link to="/pricing"><Button variant="goldOutline">See How We Scope</Button></Link>
            </div>
          </div>
        </section>
      </div>


      {/* Origin story */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl grid lg:grid-cols-2 gap-8">
          <Card className="border-toro-gold/25">
            <CardHeader><CardTitle className="text-toro-gold">📈 Where We Started</CardTitle></CardHeader>
            <CardContent className="text-toro-grey">
              Before TORO, we were on the inside—working for a law office built on word of mouth. We started from scratch: brand, content, platforms, and strategy. After months of testing, we launched video campaigns. In <strong>7 days</strong>, it brought in <strong>300+ signed cases</strong>. Not a fluke—proof. And the foundation of TORO.
            </CardContent>
          </Card>
          <Card className="border-toro-gold/25">
            <CardHeader><CardTitle className="text-toro-gold">🧠 Why TORO Exists</CardTitle></CardHeader>
            <CardContent className="text-toro-grey">
              Too many agencies sell “strategy” and deliver shortcuts—charging premium retainers to keep accounts “active.” That’s disrespectful to real operators. We built TORO to flip the script: direct, measurable, growth‑focused marketing owned by a team that takes ownership.
            </CardContent>
          </Card>
        </div>
      </section>


      {/* What makes us different */}
      <section className="py-16 px-4 bg-toro-light">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-10">⚙️ What Makes TORO Different</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { h: "We focus on conversion, not just content.", d: "Every asset is engineered to generate demand and qualified conversations." },
              { h: "We build momentum, not timelines.", d: "Tight feedback loops and rapid iteration—ship, learn, scale." },
              { h: "We justify your next hire.", d: "Our goal isn’t to justify our invoice; it’s to grow your business so you grow your team." },
            ].map((b) => (
              <Card key={b.h} className="border-toro-gold/25">
                <CardHeader><CardTitle className="text-toro-gold">{b.h}</CardTitle></CardHeader>
                <CardContent className="text-toro-grey">{b.d}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Mission */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <Card className="border-toro-gold/25">
            <CardHeader className="text-center"><CardTitle className="text-2xl text-toro-gold">🚀 Our Mission</CardTitle></CardHeader>
            <CardContent className="text-toro-grey text-lg">
              To turn reputation into visibility. Visibility into trust. And trust into qualified leads, new clients, and serious growth. If you want to grow, scale, and stand out—TORO is your partner.
            </CardContent>
          </Card>
          <div className="mt-8 text-center">
            <Link to="/contact"><Button variant="gold">📞 Book a Strategy Call</Button></Link>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};


export default About;