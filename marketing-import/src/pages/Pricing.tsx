// marketing-import/src/pages/Pricing.tsx
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const Pricing: React.FC = () => {
  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const body = encodeURIComponent(
      [
        `Name: ${fd.get("name") || "-"}`,
        `Business: ${fd.get("business") || "-"}`,
        `Email: ${fd.get("email") || "-"}`,
        `Phone: ${fd.get("phone") || "-"}`,
        "",
        "How can we help?",
        (fd.get("message") as string) || "-",
      ].join("\n")
    );
    const subject = encodeURIComponent("New Inquiry — Pricing Page");
    window.location.href = `mailto:kyle@toro-marketing.com?subject=${subject}&body=${body}`;
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-white text-toro-dark">
      <Navigation />

      <main className="pt-16">
        {/* ============ HERO (DARK) ============ */}
        <section className="bg-toro-dark text-toro-light">
          <div className="container mx-auto max-w-4xl px-4 py-20 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              💼 Pricing That Reflects Growth, Not Guesswork
            </h1>

            <div className="space-y-3 text-toro-light/90">
              <p>At TORO, we don’t offer pre-built packages or surface-level solutions.</p>
              <p>
                We design marketing systems that help established businesses grow faster, look sharper, and attract the
                right clients—consistently.
              </p>
              <p>This isn’t an expense. It’s an investment in your future.</p>
              <p>And like any good investment, it’s built to multiply.</p>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3 text-center">
              <Link to="/schedule" className="w-full sm:w-auto">
                <Button variant="gold" className="w-full sm:w-auto px-8 py-3 font-semibold">
                  📅 Book a Strategy Call
                </Button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button variant="goldOutline" className="w-full sm:w-auto px-8 py-3 font-semibold">
                  📩 Contact Our Team
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ============ ROI + WHAT INFLUENCES (LIGHT) ============ */}
        <section className="bg-white">
          <div className="container mx-auto max-w-7xl px-4 py-16">
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 items-stretch">              {/* ROI */}
              <Card className="h-full rounded-2xl border-toro-gold/25">
                <CardHeader>
                  <CardTitle className="text-2xl text-toro-gold">🎯 Our Focus: ROI, Not Activity</CardTitle>
                </CardHeader>
                <CardContent className="text-toro-grey space-y-3 text-base">
                  <p>Most agencies charge to “keep your page active.”</p>
                  <p>That’s not us.</p>
                  <p>We charge for strategy that works.</p>
                  <p>Execution that delivers.</p>
                  <p>And results that drive revenue.</p>

                  <div className="pt-2">
                    <p className="font-semibold text-toro-dark mb-2">What you’re investing in:</p>
                    <ul className="space-y-2">
                      <li>• A dedicated marketing partner—not a vendor</li>
                      <li>• Custom video and content production built around your brand</li>
                      <li>• High-performing ad campaigns with geo-targeted precision</li>
                      <li>• A proven process to generate demand, not just views</li>
                      <li>• Marketing that makes your business look, feel, and perform like the market leader</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* What Influences Pricing */}
              <Card className="h-full rounded-2xl border-toro-gold/25">
                <CardHeader>
                  <CardTitle className="text-2xl text-toro-gold">🔍 What Influences Pricing</CardTitle>
                </CardHeader>
                <CardContent className="text-toro-grey space-y-3 text-base">
                  <p>No two businesses are the same, so no two strategies should be either.</p>
                  <p>We build around your goals, not a fixed template.</p>
                  <p>Here’s what we consider when scoping a project:</p>
                  <ul className="space-y-2">
                    <li>• Content volume and production needs</li>
                    <li>• Platform management (Instagram, Facebook, TikTok, Google, etc.)</li>
                    <li>• Ad strategy and paid media budget</li>
                    <li>• Your current marketing infrastructure</li>
                    <li>• The level of scale you're ready for</li>
                  </ul>
                  <p className="pt-1">
                    Once we understand your goals, we’ll present a tailored plan—one that’s aligned with your targets and
                    built to get results.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* ============ SIDE-BY-SIDE ON DARK: WHO WE WORK + GROWTH PLAN ============ */}
        <section className="bg-toro-dark text-toro-light">
          <div className="container mx-auto max-w-7xl px-4 py-20">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
              {/* LEFT: Who We Work Best With */}
              <div className="h-full min-h-[28rem] md:min-h-[32rem] rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm p-10 md:p-12 flex flex-col">
                <h2 className="text-3xl font-bold mb-6 text-center">🤝 Who We Work Best With</h2>
                <p className="text-toro-light/90 mb-5">
                  TORO is built for growth-minded business owners who are serious about leveling up their brand,
                  presence, and performance.
                </p>
                <p className="text-toro-light/90 mb-4 font-medium">You’re a strong fit if:</p>

                <div className="grid gap-3">
                  {[
                    "You’ve built a solid reputation—but want more visibility",
                    "You’re ready to invest in marketing that brings in real clients",
                    "You value long-term results over short-term vanity metrics",
                    "You want a proactive partner—not someone who waits for direction",
                    "You understand marketing is a lever, not a luxury",
                  ].map((t) => (
                    <div key={t} className="flex items-start gap-3">
                      <span className="mt-0.5 shrink-0">
                        <CheckCircle2 className="h-6 w-6 text-toro-gold" />
                      </span>
                      <span className="text-toro-light/90">{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT: Let’s Build Your Growth Plan */}
              <div className="h-full min-h-[28rem] md:min-h-[32rem] rounded-2xl border border-white/15 bg-white/5 p-10 md:p-12 text-center flex flex-col">
                <h2 className="text-3xl font-bold mb-4">📞 Let’s Build Your Growth Plan</h2>

                <div className="space-y-3 text-white/80">
                  <p>We don’t quote prices before understanding your business.</p>
                  <p>But we do offer one thing from the start: clarity.</p>
                  <p>You’ll walk away from your strategy call knowing exactly:</p>
                </div>

                <ul className="mt-6 grid gap-3 sm:grid-cols-3 justify-items-center">
                  {["What you need", "Why it matters", "What it takes to get it done"].map((line) => (
                    <li
                      key={line}
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-white/90"
                    >
                      <CheckCircle2 className="h-5 w-5 text-toro-gold shrink-0" />
                      <span className="text-center">{line}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-white/70 mt-6">
                  Let’s turn your reputation into revenue—and your marketing into your most valuable asset.
                </p>
              </div>

              {/* ✅ CTA row aligned with cards */}
              <div className="md:col-span-2 md:justify-self-center">
                <div className="w-fit mx-auto -mt-3 md:-mt-4 pt-5 flex items-center justify-center gap-10 -translate-x-2">
                  <Link to="/schedule" className="w-full sm:w-auto">
                    <Button variant="gold" className="w-full sm:w-auto px-8 py-3 font-semibold">
                      📅 Book a Strategy Call
                    </Button>
                  </Link>
                  <Link to="/contact" className="w-full sm:w-auto">
                    <Button variant="goldOutline" className="w-full sm:w-auto px-8 py-3 font-semibold">
                      📩 Contact Our Team
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ CONTACT FORM — COMPACT INLINE (LIGHT) ============ */}
        <section id="contact" className="py-12 px-4 bg-white">
          <div className="container mx-auto max-w-2xl">
            <Card className="rounded-2xl border-toro-gold/20">
              <CardHeader className="p-5">
                <CardTitle className="text-xl md:text-2xl">📬 Contact Our Team</CardTitle>
              </CardHeader>
              <CardContent className="p-5 pt-0">
                <form onSubmit={handleContactSubmit} className="grid gap-3">
                  <div className="grid gap-3 md:grid-cols-2">
                    <input name="name" placeholder="Name" className="h-10 rounded-md border border-toro-gold/20 px-3" required />
                    <input name="business" placeholder="Business Name" className="h-10 rounded-md border border-toro-gold/20 px-3" />
                  </div>
                  <div className="grid gap-3 md:grid-cols-2">
                    <input name="email" type="email" placeholder="Email" className="h-10 rounded-md border border-toro-gold/20 px-3" required />
                    <input name="phone" placeholder="Phone Number (Optional)" className="h-10 rounded-md border border-toro-gold/20 px-3" />
                  </div>
                  <textarea name="message" placeholder="How can we help?" rows={4} className="rounded-md border border-toro-gold/20 p-3" />
                  <div className="text-center">
                    <Button type="submit" variant="gold" className="px-6 py-3 font-semibold">
                      🚀 Submit Inquiry
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ============ FOOTER (DARK) ============ */}
        <section className="bg-toro-dark">
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default Pricing;
