// marketing-import/src/pages/Pricing.tsx
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  CheckCircle2, Video, Target, Megaphone, TrendingUp, Users, Layers, Globe,
  DollarSign, Settings2, Gauge, Camera, Info,
  Rocket, Lightbulb, Handshake, PhoneCall, ListChecks, Wrench
} from "lucide-react";
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
              Pricing That Reflects Growth,
            </h1>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Not Guesswork
            </h1>
            <div className="space-y-3 text-toro-light/90">
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {["Custom scope", "Outcome-driven", "Transparent"].map(t => (
                  <span key={t} className="rounded-full border border-white/20 px-3 py-1 text-sm text-white/80">{t}</span>
                ))}
              </div>
              <p>This isn’t an expense. It’s an investment in your future.</p>
              <p>And like any good investment, it’s built to multiply.</p>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3 text-center">
              <Link to="/schedule" className="w-full sm:w-auto">
                <Button variant="gold" className="w-full sm:w-auto px-8 py-3 font-semibold">
                  📅 Book a Strategy Call
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ============ MERGED WHITE SECTION WITH WAVES ============ */}
        <section className="bg-waves-gold-soft text-toro-dark">
          <div className="container mx-auto max-w-7xl px-4 py-16">
            {/* --- Row 1: ROI + What Influences --- */}
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 items-stretch">
              {/* ROI */}
              <div className="flex flex-col gap-6">
                {/* Card 1 — ROI message */}
                <Card className="h-full rounded-2xl border-toro-gold/25 bg-white/95">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl text-toro-dark text-center">🎯 Our Focus: ROI, Not Activity</CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-5 text-base">
                    {/* Value points */}
                    <div className="grid gap-4">
                      <div className="flex items-start gap-3">
                        <span className="grid h-10 w-10 place-content-center rounded-lg bg-toro-gold/10 text-toro-gold">
                          <Target className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="font-semibold text-toro-dark">Strategy that works</p>
                          <p className="text-sm text-toro-grey">Clear positioning, offers, and channels that actually convert.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="grid h-10 w-10 place-content-center rounded-lg bg-toro-gold/10 text-toro-gold">
                          <Video className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="font-semibold text-toro-dark">Content that sells</p>
                          <p className="text-sm text-toro-grey">Short-form video + creative built for attention and action.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="grid h-10 w-10 place-content-center rounded-lg bg-toro-gold/10 text-toro-gold">
                          <Megaphone className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="font-semibold text-toro-dark">Execution that delivers</p>
                          <p className="text-sm text-toro-grey">Always-on management across the channels that matter most.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="grid h-10 w-10 place-content-center rounded-lg bg-toro-gold/10 text-toro-gold">
                          <TrendingUp className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="font-semibold text-toro-dark">Results you can measure</p>
                          <p className="text-sm text-toro-grey">Leads, pipeline, and revenue—not vanity metrics.</p>
                        </div>
                      </div>
                    </div>

                    {/* What you’re investing in */}
                    <div className="rounded-xl border border-toro-gold/20 bg-toro-gold/5 p-4">
                      <p className="font-semibold text-toro-dark mb-2">What you’re investing in:</p>
                      <ul className="grid gap-2 text-sm text-toro-grey">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-toro-gold" /> A dedicated marketing partner—not a vendor
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-toro-gold" /> Custom video & content production around your brand
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-toro-gold" /> Geo-targeted, high-performing ad campaigns
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-toro-gold" /> A proven demand-gen process—not just views
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-toro-gold" /> A brand that looks, feels & performs like #1
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* What Influences Pricing */}
              <Card className="h-full flex flex-col rounded-2xl border-toro-gold/25 bg-white/95 relative overflow-hidden">
                {/* subtle top accent line */}


                <CardHeader className="pb-3">
                  <CardTitle className="text-2xl text-toro-dark text-center">🔍 What Influences Pricing</CardTitle>
                  <p className="mt-1 text-sm text-toro-grey">
                    We scope around your goals—no one-size-fits-all. These are the levers that typically drive effort and cost.
                  </p>
                </CardHeader>

                {/* Make content fill available space */}
                <CardContent className="flex-1 flex flex-col gap-5 text-base text-toro-grey">
                  {/* Highlight chips */}
                  <div className="flex flex-wrap gap-2">
                    {["Custom scope", "Outcome-driven", "Transparent"].map((label) => (
                      <span
                        key={label}
                        className="inline-flex items-center rounded-full border border-toro-gold/25 bg-toro-gold/5 px-3 py-1 text-xs font-medium text-toro-dark/80"
                      >
                        {label}
                      </span>
                    ))}
                  </div>

                  {/* Key drivers (2-col on sm+) */}
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      { Icon: Video, title: "Content & production", info: "Volume, formats, on-site shoots, revisions" },
                      { Icon: Users, title: "Platform management", info: "Instagram, Facebook, TikTok, Google, etc." },
                      { Icon: DollarSign, title: "Ad budget & pacing", info: "Media mix, testing cadence, flighting" },
                      { Icon: Settings2, title: "Infrastructure", info: "Tracking, CRM/GBM, landing pages, offers" },
                      { Icon: Layers, title: "Scope & deliverables", info: "Channels covered, deliverable count" },
                      { Icon: Gauge, title: "Timeline & speed", info: "Launch urgency, iteration velocity" },
                    ].map(({ Icon, title, info }) => (
                      <div
                        key={title}
                        className="flex items-start gap-3 rounded-xl border border-toro-gold/20 bg-white/70 px-3 py-2"
                      >
                        <span className="mt-0.5 grid h-9 w-9 place-content-center rounded-lg bg-toro-gold/10 text-toro-gold shrink-0">
                          <Icon className="h-4.5 w-4.5" />
                        </span>
                        <div>
                          <p className="font-semibold text-toro-dark">{title}</p>
                          <p className="text-sm">{info}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Context note */}
                  <div className="mt-1 rounded-lg border border-toro-gold/25 bg-toro-gold/5 px-3 py-2 text-sm text-toro-dark/85">
                    <div className="flex items-center gap-2">
                      <Info className="h-4 w-4 text-toro-gold" />
                      <strong className="text-toro-dark">How we scope</strong>
                    </div>
                    <p className="mt-1">
                      After a short discovery, you’ll get a clear, tailored plan aligned to targets—with the first levers we’ll pull for the fastest lift.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* spacer between rows */}
            <div className="h-10 md:h-12" />

            {/* --- Row 2: Who We Work + Growth Plan + CTA --- */}
            {/* --- Row 2: Who We Work + Growth Plan --- */}
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 items-stretch">
              {/* LEFT: Who We Work Best With */}
              <Card className="h-full min-h-[28rem] md:min-h-[32rem] rounded-2xl border border-toro-gold/25 bg-white/95 flex flex-col">
                <CardHeader className="mt-8">
                  <div className="flex items-center justify-center gap-3 ">
                    <CardTitle className="text-3xl font-bold text-center">🤝 Who We Work Best With</CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="flex-1">
                  <p className="text-toro-grey mb-5">
                    Toro Marketing is built for growth-minded business owners who are serious about leveling up their brand,
                    presence, and performance.
                  </p>
                  <p className="text-toro-grey mb-4 font-medium">You’re a strong fit if:</p>

                  <ul className="grid gap-3">
                    <li className="flex items-start gap-3 rounded-lg bg-toro-gold/5 p-3">
                      <span className="mt-0.5 grid h-8 w-8 place-content-center rounded-md bg-white ring-1 ring-toro-gold/30">
                        <Megaphone className="h-4 w-4 text-toro-gold" />
                      </span>
                      <span className="text-toro-dark/90">You’ve built a solid reputation—but want more visibility</span>
                    </li>
                    <li className="flex items-start gap-3 rounded-lg bg-toro-gold/5 p-3">
                      <span className="mt-0.5 grid h-8 w-8 place-content-center rounded-md bg-white ring-1 ring-toro-gold/30">
                        <DollarSign className="h-4 w-4 text-toro-gold" />
                      </span>
                      <span className="text-toro-dark/90">You’re ready to invest in marketing that brings in real clients</span>
                    </li>
                    <li className="flex items-start gap-3 rounded-lg bg-toro-gold/5 p-3">
                      <span className="mt-0.5 grid h-8 w-8 place-content-center rounded-md bg-white ring-1 ring-toro-gold/30">
                        <TrendingUp className="h-4 w-4 text-toro-gold" />
                      </span>
                      <span className="text-toro-dark/90">You value long-term results over short-term vanity metrics</span>
                    </li>
                    <li className="flex items-start gap-3 rounded-lg bg-toro-gold/5 p-3">
                      <span className="mt-0.5 grid h-8 w-8 place-content-center rounded-md bg-white ring-1 ring-toro-gold/30">
                        <Rocket className="h-4 w-4 text-toro-gold" />
                      </span>
                      <span className="text-toro-dark/90">You want a proactive partner—not someone who waits for direction</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* RIGHT: Let’s Build Your Growth Plan */}
              <Card className="relative h-full min-h-[28rem] md:min-h-[32rem] rounded-2xl border border-toro-gold/25 bg-white overflow-hidden">
                {/* soft gold orbs (visual only) */}
                <div aria-hidden className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-toro-gold/20 blur-3xl" />
                <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-24 h-52 w-52 rounded-full bg-toro-gold/10 blur-3xl" />

                <div className="relative p-10 md:p-12 text-center flex flex-col">
                  <h2 className="text-3xl font-bold mb-4">📞 Let’s Build Your Growth Plan</h2>

                  {/* keep EXACT text */}
                  <div className="space-y-3 text-toro-grey">
                    <p>We don’t quote prices before understanding your business.</p>
                    <p>But we do offer one thing from the start: clarity.</p>
                    <p>You’ll walk away from your strategy call knowing exactly:</p>
                  </div>

                  {/* icon trio band (no visible extra text; purely visual) */}
                  <div className="mt-6 grid grid-cols-3 gap-3 place-items-center">
                    <span className="sr-only">Call</span>
                    <span className="sr-only">Plan</span>
                    <span className="sr-only">Launch</span>

                    <span className="grid h-12 w-12 place-content-center rounded-xl bg-toro-gold/10 ring-1 ring-toro-gold/20 text-toro-gold">
                      <PhoneCall className="h-5 w-5" />
                    </span>
                    <span className="grid h-12 w-12 place-content-center rounded-xl bg-toro-gold/10 ring-1 ring-toro-gold/20 text-toro-gold">
                      <Lightbulb className="h-5 w-5" />
                    </span>
                    <span className="grid h-12 w-12 place-content-center rounded-xl bg-toro-gold/10 ring-1 ring-toro-gold/20 text-toro-gold">
                      <Rocket className="h-5 w-5" />
                    </span>
                  </div>

                  {/* the 3 chips you already had, just styled up */}
                  <ul className="mt-6 grid gap-3 sm:grid-cols-3 justify-items-center">
                    {["What you need", "Why it matters", "What it takes to get it done"].map((line) => (
                      <li
                        key={line}
                        className="inline-flex items-center gap-2 rounded-full border border-toro-dark/10 bg-white/80 shadow-sm px-4 py-2 text-toro-dark/90 backdrop-blur-[2px]"
                      >
                        <CheckCircle2 className="h-5 w-5 text-toro-gold shrink-0" />
                        <span className="text-center">{line}</span>
                      </li>
                    ))}
                  </ul>

                  {/* keep EXACT closing sentence */}
                  <p className="text-toro-grey mt-6">
                    Let’s turn your reputation into revenue—and your marketing into your most valuable asset.
                  </p>
                  <div className="mt-auto pt-6">
                    <Link to="/schedule" className="inline-block">
                      <Button variant="gold" className="px-7 py-3 font-semibold">
                        📅 Book a Strategy Call
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
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
