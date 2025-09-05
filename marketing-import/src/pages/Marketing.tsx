// src/pages/Marketing.tsx
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import poserImg from "@/assets/photos/poser.jpg";

import {
  Megaphone,
  Monitor,
  Settings,
  MapPin,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Video,
  BarChart3,
  CheckCircle2,
  ShieldCheck,
  Users,
  Zap,
  KeyRound,
  ChevronDown,
  Camera,
} from "lucide-react";

import logo1 from "@/assets/logos/logo1.png";
import logo2 from "@/assets/logos/logo2.png";
import logo3 from "@/assets/logos/logo3.png";
import logo4 from "@/assets/logos/logo4.png";

const clientLogos = [logo1, logo2, logo3, logo4];

// Reusable, longer/thicker connector arrow (fills the arrow column)
const ConnectorArrow: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 100 10" className={className} aria-hidden="true">
    <line x1="0" y1="5" x2="86" y2="5" stroke="currentColor" strokeWidth={3} strokeLinecap="round" />
    <polyline
      points="86,1 100,5 86,9"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Marketing: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name") as string;
    const business = data.get("business") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const message = data.get("message") as string;

    const lines = [
      `Name: ${name || "-"}`,
      `Business: ${business || "-"}`,
      `Email: ${email || "-"}`,
      `Phone: ${phone || "-"}`,
      "",
      "How can we help?",
      message || "-",
    ];
    const body = encodeURIComponent(lines.join("\n"));
    const subject = encodeURIComponent("New Inquiry — Marketing Page");
    // TODO: replace with real endpoint when ready.
    window.location.href = `mailto:kyle@toro-marketing.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-white text-toro-dark">
      <Navigation />

      <main className="pt-16">
        {/* =========================== */}
        {/* HERO WITH VIDEO + CTA       */}
        {/* =========================== */}
        <section className="relative min-h-[72vh] md:min-h-[78vh] overflow-hidden">
          {/* Background video */}
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/assets/hero-poster.jpg"
          >
            <source src="/assets/hero.mp4" type="video/mp4" />
          </video>

          {/* Layered scrims for contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/70" />
          <div className="absolute inset-0 pointer-events-none bg-black/25 [mask-image:radial-gradient(120%_80%_at_50%_40%,#000_60%,transparent_100%)]" />

          {/* Content */}
          <div className="relative z-10 container mx-auto px-6 py-20 md:py-28 flex h-full flex-col items-center justify-center text-center text-white">


            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight [text-wrap:balance] max-w-5xl">
              <span className="text-white">Your Reputation Built Your Business.</span>
              <br className="hidden md:block" />
              <span className="text-toro-gold">We Scale It Online.</span>
            </h1>

            <p className="mt-5 text-lg md:text-xl max-w-3xl text-white/90">
              You’re busy running your business with a thousand things on your plate. Chasing leads and managing social
              media shouldn’t be one of them. That’s where Toro Marketing comes in.
            </p>
            <p className="mt-3 max-w-4xl text-base md:text-lg text-white/80">
              It used to be Yellow Pages, mailers, and billboards. Today it’s mobile-first and digital everything. We take the reputation
              you’ve earned and make sure it shows up online—so when your ideal customer is ready to buy, they already know who to call.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild variant="gold" className="px-6 py-3 font-semibold">
                <Link to="/schedule">Let’s Talk</Link>
              </Button>
              <Link to="/about">
                <Button variant="goldOutline" className="px-6 py-3 font-semibold">
                  How We Work
                </Button>
              </Link>
            </div>

            {/* Quick benefits */}
            <div className="mt-10 hidden md:flex items-center justify-center gap-8 text-white/80">
              <span className="flex items-center gap-2">
                <Video className="h-5 w-5 text-toro-gold" /> Content Production
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-toro-gold" /> Geo-Targeted Ads
              </span>
              <span className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-toro-gold" /> Clear Reporting
              </span>
            </div>

            {/* Scroll cue */}
            <button
              onClick={() => document.getElementById("positioning")?.scrollIntoView({ behavior: "smooth", block: "start" })}
              className="mt-8 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 p-2 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-toro-gold/50"
              aria-label="Scroll to next section"
            >
              <ChevronDown className="h-5 w-5" />
            </button>
          </div>
        </section>

        {/* =========================== */}
        {/* POST-HERO COPY BLOCK        */}
        {/* =========================== */}
        {/* ===== Combined section (one background) ===== */}
        <section id="positioning" className="scroll-mt-24 bg-waves-gold-soft text-toro-dark">
          <div className="container mx-auto max-w-6xl px-6 py-16 space-y-12 md:space-y-16">

            {/* Block A: Intro card + trust logos */}
            <Card className="rounded-2xl border border-toro-gold/25 bg-white/95 shadow-sm">
              <CardContent className="p-6 md:p-10">
                <div className="grid items-center gap-10 md:grid-cols-[1.15fr,0.85fr]">
                  {/* Copy side (keeps your exact text, adds small icons & polish) */}
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-toro-gold/30 bg-toro-gold/10 px-3 py-1 text-[13px] font-medium text-toro-dark mb-4">
                      <ShieldCheck className="h-4 w-4 text-toro-gold" />
                      Authority-led growth
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight [text-wrap:balance]">
                      Digital marketing agency built to
                      <span className="bg-gradient-to-r from-toro-gold/20 to-transparent rounded px-1">
                        {" "}position you as the expert
                      </span>
                      —so when they’re ready to buy, they come straight to you.
                    </h2>

                    <div className="mt-5 space-y-4 text-toro-grey leading-relaxed">
                      <div className="flex gap-3">
                        <Sparkles className="mt-1 h-5 w-5 text-toro-gold shrink-0" />
                        <p>
                          We don’t just run ads or post content—we build your digital presence so customers
                          recognize your name, trust your brand, and reach out ready to buy.
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <TrendingUp className="mt-1 h-5 w-5 text-toro-gold shrink-0" />
                        <p>
                          You’ve built a reputation offline. Now it’s time to amplify it online—so instead of
                          chasing customers, they come to you.
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <Users className="mt-1 h-5 w-5 text-toro-gold shrink-0" />
                        <p>You know your market. We know how to grow it.</p>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link to="/pricing">
                        <Button variant="gold" className="px-6">
                          See the plan
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Value card + logos */}
                  <div>
                    <div className="rounded-2xl border border-toro-gold/20 bg-white/90 shadow-sm p-6">
                      <h3 className="text-lg font-semibold mb-3">Why clients choose Toro Marketing</h3>
                      <ul className="space-y-3 text-sm text-toro-dark/85">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-toro-gold" /> Content that looks great and sells
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-toro-gold" /> Always-on social management
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-toro-gold" /> Smarter local targeting (no wasted spend)
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-toro-gold" /> Clarity on what’s working (and what’s not)
                        </li>
                      </ul>
                    </div>

                    <Card className="mt-6 rounded-2xl border-0 bg-transparent shadow-none">
                      <CardContent className="p-0">
                        <div className="grid grid-cols-2 gap-x-16 gap-y-8 place-items-center">
                          {[logo1, logo2, logo3, logo4].map((src, i) => (
                            <div key={i} className="flex items-center justify-center h-20 md:h-24">
                              <img
                                src={src}
                                alt={`Client logo ${i + 1}`}
                                className="object-contain max-h-[72px] md:max-h-[84px] max-w-[200px] md:max-w-[240px]"
                                loading="lazy"
                                decoding="async"
                              />
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Optional subtle divider (remove if you don’t want it) */}
            {/* <div className="h-px bg-toro-gold/15" /> */}

            {/* Block B: How we help */}
            <div>
              <h3 className="text-center text-2xl md:text-3xl font-bold">How We Help You Double Your Business</h3>
              <p className="mt-1 text-center text-toro-dark/70">Your Business Growth, Engineered in 3 Phases</p>

              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {/* Card 1 */}
                <Card className="rounded-2xl border-toro-gold/25 bg-white/95">
                  <CardHeader className="flex-row items-center gap-3 pb-2">
                    <span className="grid h-9 w-9 place-content-center rounded-lg bg-toro-gold/10 text-toro-gold">
                      <Camera className="h-4 w-4" />
                    </span>
                    <CardTitle>Social Media Content Production</CardTitle>
                  </CardHeader>
                  <CardContent className="text-toro-dark/80 text-sm">
                    We create custom video content that stops the scroll. From scripting and filming to editing and posting, we handle it all—so your brand shows up sharp, professional, and consistent.
                  </CardContent>
                </Card>

                {/* Card 2 */}
                <Card className="rounded-2xl border-toro-gold/25 bg-white/95">
                  <CardHeader className="flex-row items-center gap-3 pb-2">
                    <span className="grid h-9 w-9 place-content-center rounded-lg bg-toro-gold/10 text-toro-gold">
                      <Users className="h-4 w-4" />
                    </span>
                    <CardTitle>Social Media Management</CardTitle>
                  </CardHeader>
                  <CardContent className="text-toro-dark/80 text-sm">
                    No time to manage your pages or engage with comments and DMs? We’ve got it covered. Toro Marketing runs your Instagram, Facebook, TikTok, and more—keeping your brand active and visible.
                  </CardContent>
                </Card>

                {/* Card 3 */}
                <Card className="rounded-2xl border-toro-gold/25 bg-white/95">
                  <CardHeader className="flex-row items-center gap-3 pb-2">
                    <span className="grid h-9 w-9 place-content-center rounded-lg bg-toro-gold/10 text-toro-gold">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <CardTitle>Geo-Targeted Campaigns</CardTitle>
                  </CardHeader>
                  <CardContent className="text-toro-dark/80 text-sm">
                    Why waste ad dollars on the wrong people? We run smart, local-focused campaigns that target your real customer base, wherever they are—by zip code, interest, and behavior.
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================= */}
        {/* WHAT WE ACTUALLY DO (with hover + arrows) */}
        {/* ======================================= */}
        <section className="py-20 px-4 bg-toro-dark text-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold">What We Actually Do</h2>
              <p className="mt-2 text-white/70">We work across the 3 core marketing functions.</p>
            </div>

            {/* 5-column grid on lg: card | arrow | card | arrow | card */}
            <div className="grid gap-y-10 lg:gap-y-0 lg:gap-x-8 xl:gap-x-10 lg:grid-cols-[1fr_6rem_1fr_6rem_1fr] items-stretch">
              {/* Card 1 — Social Media Content Production */}
              <div className="relative">
                <div
                  tabIndex={0}
                  className="
            group h-full rounded-2xl border border-white/15 bg-white/5 p-6 md:p-7 backdrop-blur-[2px]
            transition-all duration-300 ease-out transform-gpu
            motion-safe:hover:-translate-y-1 motion-safe:focus:-translate-y-1
            hover:border-white/30 hover:bg-white/[0.07]
            hover:shadow-[0_18px_60px_rgba(0,0,0,0.45)]
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-toro-gold/50
            before:content-[''] before:absolute before:inset-0 before:rounded-[inherit]
            before:bg-[radial-gradient(140px_100px_at_50%_-20%,rgba(255,255,255,0.12),transparent)]
            before:opacity-0 motion-safe:group-hover:before:opacity-100 before:transition-opacity before:duration-300
          "
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-content-center rounded-xl bg-white/10 ring-1 ring-white/15 transition-colors duration-300 group-hover:bg-toro-gold/15 group-hover:text-toro-gold">
                      <Video className="h-5 w-5" />
                    </span>
                    <h3 className="text-xl font-semibold">Social Media Content Production</h3>
                  </div>
                  <p className="mt-3 text-white/70 text-sm leading-relaxed">
                    We create custom video content that stops the scroll. From scripting and filming to editing and posting,
                    we handle it all—so your brand shows up sharp, professional, and consistent.
                  </p>
                </div>
              </div>

              {/* Arrow 1 */}
              <div className="hidden lg:flex items-center justify-center">
                <ConnectorArrow className="w-full text-white/50" />
              </div>

              {/* Card 2 — Social Media Management */}
              <div className="relative">
                <div
                  tabIndex={0}
                  className="
            group h-full rounded-2xl border border-white/15 bg-white/5 p-6 md:p-7 backdrop-blur-[2px]
            transition-all duration-300 ease-out transform-gpu
            motion-safe:hover:-translate-y-1 motion-safe:focus:-translate-y-1
            hover:border-white/30 hover:bg-white/[0.07]
            hover:shadow-[0_18px_60px_rgba(0,0,0,0.45)]
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-toro-gold/50
            before:content-[''] before:absolute before:inset-0 before:rounded-[inherit]
            before:bg-[radial-gradient(140px_100px_at_50%_-20%,rgba(255,255,255,0.12),transparent)]
            before:opacity-0 motion-safe:group-hover:before:opacity-100 before:transition-opacity before:duration-300
          "
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-content-center rounded-xl bg-white/10 ring-1 ring-white/15 transition-colors duration-300 group-hover:bg-toro-gold/15 group-hover:text-toro-gold">
                      <Users className="h-5 w-5" />
                    </span>
                    <h3 className="text-xl font-semibold">Social Media Management</h3>
                  </div>
                  <p className="mt-3 text-white/70 text-sm leading-relaxed">
                    No time to manage your pages or engage with comments and DMs? We’ve got it covered. Toro Marketing runs your Instagram,
                    Facebook, TikTok, and more—keeping your brand active and visible.
                  </p>
                </div>
              </div>

              {/* Arrow 2 */}
              <div className="hidden lg:flex items-center justify-center">
                <ConnectorArrow className="w-full text-white/50" />
              </div>

              {/* Card 3 — Geo-Targeted Campaigns */}
              <div className="relative">
                <div
                  tabIndex={0}
                  className="
            group h-full rounded-2xl border border-white/15 bg-white/5 p-6 md:p-7 backdrop-blur-[2px]
            transition-all duration-300 ease-out transform-gpu
            motion-safe:hover:-translate-y-1 motion-safe:focus:-translate-y-1
            hover:border-white/30 hover:bg-white/[0.07]
            hover:shadow-[0_18px_60px_rgba(0,0,0,0.45)]
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-toro-gold/50
            before:content-[''] before:absolute before:inset-0 before:rounded-[inherit]
            before:bg-[radial-gradient(140px_100px_at_50%_-20%,rgba(255,255,255,0.12),transparent)]
            before:opacity-0 motion-safe:group-hover:before:opacity-100 before:transition-opacity before:duration-300
          "
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-content-center rounded-xl bg-white/10 ring-1 ring-white/15 transition-colors duration-300 group-hover:bg-toro-gold/15 group-hover:text-toro-gold">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <h3 className="text-xl font-semibold">Geo-Targeted Campaigns</h3>
                  </div>
                  <p className="mt-3 text-white/70 text-sm leading-relaxed">
                    Why waste ad dollars on the wrong people? We run smart, local-focused campaigns that target your real
                    customer base, wherever they are—by zip code, interest, and behavior.
                  </p>
                </div>
              </div>
            </div>

            {/* Infrastructure bar */}
            <div className="mt-10 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-[2px] shadow-[0_10px_40px_rgba(0,0,0,0.35)] p-6 md:p-7">
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs uppercase tracking-wide text-white/80">
                Infrastructure
              </span>
              <h4 className="mt-3 text-lg font-semibold">Your Business Deserves More Than Just Posts.</h4>

              <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
                {[
                  "Branding",
                  "Social Media Content & Production",
                  "Social Media Management",
                  "Geo-Targeted Ads",
                  "Google Ads",
                  "Google Business Page Optimization",
                  "SEO Fundamentals",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-toro-gold shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* =========================== */}
        {/* POSER-FREE ZONE (white)     */}
        {/* =========================== */}
        {/* =========================== */}
        {/* POSER-FREE ZONE (white card) */}
        {/* =========================== */}
        <section className="py-16 px-4 bg-waves-gold-soft text-toro-dark">
          <div className="container mx-auto max-w-5xl">
            <Card className="rounded-2xl border border-toro-gold/20 bg-white shadow-sm">
              <CardContent className="p-6 md:p-10">
                <div className="grid md:grid-cols-[1fr,2fr] gap-8 items-center">
                  {/* Image (no circle, no outline) */}
                  <div className="flex items-center justify-center">
                    <img
                      src={poserImg}
                      alt="Poser-free"
                      className="w-full max-w-[28rem] h-auto object-contain rounded-xl"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-3xl font-bold mb-2">🚫 Poser-Free Zone</h3>
                    <p className="text-toro-grey">
                      Most marketing agencies do the bare minimum and call it strategy. They set up a few posts a week and
                      pretend it’s moving the needle. They serve fluff and call it marketing.
                    </p>
                    <p className="text-toro-grey mt-3">
                      We don’t believe in filler content, fake results, or phoning it in. We build marketing that drives
                      attention, builds demand, and brings you real clients. If they aren't buying from you, they are buying from someone else.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        {/* =========================== */}
        {/* HOW WE WORK (dark + hover)  */}
        {/* =========================== */}
        <section className="py-20 px-4 bg-toro-dark text-white border-b border-white/15">
          <div className="container mx-auto max-w-6xl">
            <h3 className="text-3xl font-bold text-center mb-10">How We Work</h3>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {/* Card 1 */}
              <Card
                tabIndex={0}
                className="
                  group relative rounded-2xl border border-white/20 bg-white/5 text-white
                  transition-all duration-300 ease-out transform-gpu
                  motion-safe:hover:-translate-y-1 motion-safe:focus:-translate-y-1
                  hover:border-white/30 hover:bg-white/[0.07]
                  hover:shadow-[0_18px_60px_rgba(0,0,0,0.45)]
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-toro-gold/50
                  before:content-[''] before:absolute before:inset-0 before:rounded-[inherit]
                  before:bg-[radial-gradient(120px_80px_at_50%_-20%,rgba(255,255,255,0.12),transparent)]
                  before:opacity-0 motion-safe:group-hover:before:opacity-100 before:transition-opacity before:duration-300
                "
              >
                <CardHeader className="flex-row items-center gap-3">
                  <span className="grid h-9 w-9 place-content-center rounded-lg bg-white/10 ring-1 ring-white/15 transition-colors duration-300 group-hover:bg-toro-gold/15 group-hover:text-toro-gold">
                    <Users className="h-4 w-4" />
                  </span>
                  <CardTitle className="text-white">We Think Like Partners</CardTitle>
                </CardHeader>
                <CardContent className="text-white/75 text-sm">
                  We onboard like we’re joining your team—because we are. No fluff, no guesswork.
                </CardContent>
              </Card>

              {/* Card 2 */}
              <Card
                tabIndex={0}
                className="
                  group relative rounded-2xl border border-white/20 bg-white/5 text-white
                  transition-all duration-300 ease-out transform-gpu
                  motion-safe:hover:-translate-y-1 motion-safe:focus:-translate-y-1
                  hover:border-white/30 hover:bg-white/[0.07]
                  hover:shadow-[0_18px_60px_rgba(0,0,0,0.45)]
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-toro-gold/50
                  before:content-[''] before:absolute before:inset-0 before:rounded-[inherit]
                  before:bg-[radial-gradient(120px_80px_at_50%_-20%,rgba(255,255,255,0.12),transparent)]
                  before:opacity-0 motion-safe:group-hover:before:opacity-100 before:transition-opacity before:duration-300
                "
              >
                <CardHeader className="flex-row items-center gap-3">
                  <span className="grid h-9 w-9 place-content-center rounded-lg bg-white/10 ring-1 ring-white/15 transition-colors duration-300 group-hover:bg-toro-gold/15 group-hover:text-toro-gold">
                    <Zap className="h-4 w-4" />
                  </span>
                  <CardTitle className="text-white">We Move Like Operators</CardTitle>
                </CardHeader>
                <CardContent className="text-white/75 text-sm">
                  We plug into your workflow, tools, and schedule. You don’t chase us—we show up and execute.
                </CardContent>
              </Card>

              {/* Card 3 */}
              <Card
                tabIndex={0}
                className="
                  group relative rounded-2xl border border-white/20 bg-white/5 text-white
                  transition-all duration-300 ease-out transform-gpu
                  motion-safe:hover:-translate-y-1 motion-safe:focus:-translate-y-1
                  hover:border-white/30 hover:bg-white/[0.07]
                  hover:shadow-[0_18px_60px_rgba(0,0,0,0.45)]
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-toro-gold/50
                  before:content-[''] before:absolute before:inset-0 before:rounded-[inherit]
                  before:bg-[radial-gradient(120px_80px_at_50%_-20%,rgba(255,255,255,0.12),transparent)]
                  before:opacity-0 motion-safe:group-hover:before:opacity-100 before:transition-opacity before:duration-300
                "
              >
                <CardHeader className="flex-row items-center gap-3">
                  <span className="grid h-9 w-9 place-content-center rounded-lg bg-white/10 ring-1 ring-white/15 transition-colors duration-300 group-hover:bg-toro-gold/15 group-hover:text-toro-gold">
                    <KeyRound className="h-4 w-4" />
                  </span>
                  <CardTitle className="text-white">We Deliver Like Owners</CardTitle>
                </CardHeader>
                <CardContent className="text-white/75 text-sm">
                  Content to campaigns—built, tested, and adjusted in real time with people who care.
                </CardContent>
              </Card>

              {/* Card 4 */}
              <Card
                tabIndex={0}
                className="
                  group relative rounded-2xl border border-white/20 bg-white/5 text-white
                  transition-all duration-300 ease-out transform-gpu
                  motion-safe:hover:-translate-y-1 motion-safe:focus:-translate-y-1
                  hover:border-white/30 hover:bg-white/[0.07]
                  hover:shadow-[0_18px_60px_rgba(0,0,0,0.45)]
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-toro-gold/50
                  before:content-[''] before:absolute before:inset-0 before:rounded-[inherit]
                  before:bg-[radial-gradient(120px_80px_at_50%_-20%,rgba(255,255,255,0.12),transparent)]
                  before:opacity-0 motion-safe:group-hover:before:opacity-100 before:transition-opacity before:duration-300
                "
              >
                <CardHeader className="flex-row items-center gap-3">
                  <span className="grid h-9 w-9 place-content-center rounded-lg bg-white/10 ring-1 ring-white/15 transition-colors duration-300 group-hover:bg-toro-gold/15 group-hover:text-toro-gold">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  <CardTitle className="text-white">What’s Included</CardTitle>
                </CardHeader>
                <CardContent className="text-white/75 text-sm">
                  Goals &amp; growth tracking, budget/ad spend planning, competitor research, campaign strategy, Martech setup &amp; support.
                </CardContent>
              </Card>
            </div>

            {/* Included (explicit list) */}
            <div className="mt-8 rounded-2xl border border-white/15 bg-white/5 p-6 md:p-7">
              <h4 className="text-lg font-semibold">✅ What’s Included (And Always Should Be):</h4>
              <ul className="mt-3 grid md:grid-cols-2 gap-x-8 gap-y-2 text-white/80 text-sm">
                {[
                  "Goal setting & growth tracking",
                  "Budget and ad spend planning",
                  "Competitor research",
                  "Campaign strategy",
                  "Martech setup & support",
                  "Real results. No hand-holding.",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-toro-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* NEW: Let's Double Your Business (light) */}
        <section id="double-your-business" className="py-16 md:py-20 px-4 bg-waves-gold-soft text-toro-dark">
          <div className="container mx-auto max-w-6xl ">
            <div className="text-center">
              <h3 className="text-3xl font-bold">📣 Let’s Double Your Business</h3>
              <p className="mt-4 max-w-3xl mx-auto text-toro-dark/80">
                You’ve done the hard part—built a great reputation, delivered real value, and kept your clients happy.
                Now it’s time to turn that into visibility and growth. Toro Marketing isn’t just marketing. We’re the partner that
                helps you go from word-of-mouth to widely known.
              </p>

              <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-3">
                <Link to="/pricing">
                  <Button variant="gold" className="px-8 py-3 font-semibold">
                    See How We Scope
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =========================== */}
        {/* LET'S DOUBLE YOUR BUSINESS  */}
        {/* =========================== */}

        {/* =========================== */}
        {/* CONTACT FORM (anchor)       */}
        {/* =========================== */}
        {/* <section id="contact" className="py-12 px-4 bg-white">
          <div className="container mx-auto max-w-2xl">
            <Card className="rounded-2xl border-toro-gold/20">
              <CardHeader className="p-5">
                <CardTitle className="text-xl md:text-2xl">📬 Contact Our Team</CardTitle>
              </CardHeader>
              <CardContent className="p-5 pt-0">
                <form onSubmit={handleContactSubmit} className="grid gap-3">
                  <div className="grid gap-3 md:grid-cols-2">
                    <input
                      name="name"
                      placeholder="Name"
                      className="h-10 rounded-md border border-toro-gold/20 px-3"
                      required
                    />
                    <input
                      name="business"
                      placeholder="Business Name"
                      className="h-10 rounded-md border border-toro-gold/20 px-3"
                    />
                  </div>
                  <div className="grid gap-3 md:grid-cols-2">
                    <input
                      name="email"
                      type="email"
                      placeholder="Email"
                      className="h-10 rounded-md border border-toro-gold/20 px-3"
                      required
                    />
                    <input
                      name="phone"
                      placeholder="Phone Number (Optional)"
                      className="h-10 rounded-md border border-toro-gold/20 px-3"
                    />
                  </div>
                  <textarea
                    name="message"
                    placeholder="How can we help?"
                    rows={4}
                    className="rounded-md border border-toro-gold/20 p-3"
                  />
                  <div className="text-center">
                    <Button type="submit" variant="gold" className="px-6 py-3 font-semibold">
                      🚀 Submit Inquiry
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section> */}
      </main>

      {/* Footer wrapper for a subtle white bottom border */}
      <div className="border-b border-white/15 bg-toro-dark">
        <Footer />
      </div>
    </div >
  );
};

export default Marketing;
