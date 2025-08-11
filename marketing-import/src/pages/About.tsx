import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  const scrollToFooter = () => {
    const el = document.getElementById("footer");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Dark wrapper includes the nav and hero */}
      <div className="bg-toro-dark text-toro-light">
        <Navigation />

        {/* Hero */}
        <section className="py-28 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              About <span className="text-toro-gold">Toro Marketing</span>
            </h1>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              We help brands grow with consistent, high-quality content, smart geo-targeting, and data-driven strategy. Long-term partnerships, repeatable results.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link to="/pricing">
                <Button
                  className="btn-gold text-toro-dark hover:bg-toro-gold font-semibold px-8 py-3">

                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Who We Are */}
      <section className="py-16 px-4 bg-toro-light text-toro-dark">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="border-toro-gold/20">
              <CardHeader>
                <CardTitle className="text-3xl text-toro-gold">Who We Are 💡</CardTitle>
              </CardHeader>
              <CardContent className="text-toro-grey text-lg">
                We’re a full-service team focused on consistent growth: 🎥 video content that converts, 📍 geo-targeted distribution, and 📊 analytics that steer every decision. We plan, produce, edit, and publish — then iterate to keep you winning.
              </CardContent>
            </Card>
            <Card className="border-toro-gold/20">
              <CardHeader>
                <CardTitle className="text-3xl text-toro-gold">Our Strategy, Your Success</CardTitle>
              </CardHeader>
              <CardContent className="text-toro-grey text-lg">
                Full-scale content creation, platform management, targeted campaigns, and recruiting support to help you grow revenue and build reliable partnerships.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Six-Phase Success Model */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-toro-dark mb-12">
            Our Six-Phase Success Model
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { t: "1. Strategy & Planning", items: ["Market research & audience targeting", "Monthly content calendar", "Clear positioning & goals"] },
              { t: "2. Script Writing", items: ["Brand-aligned scripts", "Strong hooks & CTAs", "Short-form storytelling"] },
              { t: "3. Content Production", items: ["On-site/remote filming 🎥", "Mobile-first formats", "Designed for retention"] },
              { t: "4. Editing & Post-Production", items: ["Captions, music, overlays", "Branded visuals & pacing", "Platform-specific exports"] },
              { t: "5. Platform & Community", items: ["Daily scheduling & publishing", "Engaging copy & replies", "Performance monitoring"] },
              { t: "6. Blogs & Posts", items: ["SEO articles", "Thought-leadership posts", "Compounding visibility"] },
            ].map((c, i) => (
              <Card key={i} className="border-toro-gold/20 hover:shadow-lg transition-shadow">
                <CardHeader><CardTitle className="text-toro-gold">{c.t}</CardTitle></CardHeader>
                <CardContent>
                  <ul className="text-toro-grey space-y-1 text-sm">
                    {c.items.map((it, j) => <li key={j}>• {it}</li>)}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA row */}
          <div className="text-center mt-12">

          </div>
        </div>
      </section>

      {/* ONBOARDING / NEXT STEPS */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Card className="max-w-3xl mx-auto rounded-2xl border-toro-gold/20 shadow-sm bg-white">
            <CardHeader className="text-center space-y-2">
              <div className="mx-auto w-12 h-12 rounded-full bg-toro-gold/10 grid place-content-center">
                <span className="text-xl">✅</span>
              </div>
              <CardTitle className="text-2xl md:text-3xl text-toro-gold">
                Your Success Starts Now
              </CardTitle>
              <p className="text-toro-grey">
                A simple, fast onboarding—built for momentum.
              </p>
            </CardHeader>

            <CardContent className="grid place-items-center">
                <ol className="space-y-3 w-fit">
                  <li className="flex items-center justify-center gap-3 w-fit mx-auto">
                    <span className="w-7 h-7 rounded-full bg-toro-gold text-toro-dark font-bold grid place-content-center">1</span>
                    <span className="text-toro-dark text-center leading-relaxed max-w-[52ch]">
                      Choose your package that fits your goals &amp; budget.
                    </span>
                  </li>

                  <li className="flex items-center justify-center gap-3 w-fit mx-auto">
                    <span className="w-7 h-7 rounded-full bg-toro-gold text-toro-dark font-bold grid place-content-center">2</span>
                    <span className="text-toro-dark text-center leading-relaxed max-w-[52ch]">
                      Schedule your strategy call — direction, tone, targeting, timing.
                    </span>
                  </li>

                  <li className="flex items-center justify-center gap-3 w-fit mx-auto">
                    <span className="w-7 h-7 rounded-full bg-toro-gold text-toro-dark font-bold grid place-content-center">3</span>
                    <span className="text-toro-dark text-center leading-relaxed max-w-[52ch]">
                      Lock in the plan — creative angles, audiences, platforms.
                    </span>
                  </li>

                  <li className="flex items-center justify-center gap-3 w-fit mx-auto">
                    <span className="w-7 h-7 rounded-full bg-toro-gold text-toro-dark font-bold grid place-content-center">4</span>
                    <span className="text-toro-dark text-center leading-relaxed max-w-[52ch]">
                      Launch &amp; grow — publish, optimize, measure, and scale.
                    </span>
                  </li>
                </ol>
             
              {/* Divider + contact line */}
              <div className="mt-8 pt-4 border-t border-toro-grey/20 text-center text-sm text-toro-grey">
                Kyle S. Arenas — Founder/CEO • kyle@toro-marketing.com • (561) 923-5287 • https://toro-marketing.com
              </div>

              {/* Optional CTA row that uses your fixed variants */}

            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;