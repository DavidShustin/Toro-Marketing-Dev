// src/pages/Marketing.tsx
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Megaphone,
  Monitor,
  Settings,
  MapPin,
  Video,
  BarChart3,
  CheckCircle2,
  ShieldCheck,
  Users,
  Zap,
  KeyRound,
  ChevronDown,
} from "lucide-react";

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
              media shouldn’t be one of them. That’s where TORO comes in.
            </p>
            <p className="mt-3 max-w-4xl text-base md:text-lg text-white/80">
              It used to be Yellow Pages, mailers, and billboards. Today it’s mobile-first and digital everything. We take the reputation
              you’ve earned and make sure it shows up online—so when your ideal customer is ready to buy, they already know who to call.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button variant="gold" className="px-6 py-3 font-semibold" onClick={scrollToContact}>
                Let’s Talk
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
              onClick={() => document.getElementById("positioning")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-8 hidden md:inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 p-2 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-toro-gold/50"
              aria-label="Scroll to next section"
            >
              <ChevronDown className="h-5 w-5" />
            </button>
          </div>
        </section>

        {/* =========================== */}
        {/* POST-HERO COPY BLOCK        */}
        {/* =========================== */}
        <section id="positioning" className="py-16 md:py-20 px-6 bg-white text-toro-dark">
          <div className="container mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.15fr,0.85fr]">
            {/* Copy side */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight [text-wrap:balance]">
                Digital marketing agency built to position you as the expert—so when they’re ready to buy, they come
                straight to you.
              </h2>
              <div className="mt-5 space-y-4 text-toro-grey leading-relaxed">
                <p>
                  We don’t just run ads or post content—we build your digital presence so customers recognize your name,
                  trust your brand, and reach out ready to buy.
                </p>
                <p>
                  You’ve built a reputation offline. Now it’s time to amplify it online—so instead of chasing customers,
                  they come to you.
                </p>
                <p>You know your market. We know how to grow it.</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/pricing">
                  <Button variant="goldOutline">See the plan</Button>
                </Link>
              </div>
            </div>

            {/* Value card + (optional) trust bar */}
            <div>
              <div className="rounded-2xl border border-toro-gold/20 bg-white shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-3">Why clients choose TORO</h3>
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

              {/* Swap these with real client logos when ready */}
              <div
                className="
    mt-6 max-w-lg mx-auto
    grid grid-cols-1 gap-y-5
    [&>img]:h-8 [&>img]:w-auto [&>img]:object-contain [&>img]:opacity-80 hover:[&>img]:opacity-100
    [&>img:nth-child(odd)]:justify-self-start
    [&>img:nth-child(even)]:justify-self-end
  "
              >
                <img src="/assets/logo1.svg" alt="Client logo 1" />
                <img src="/assets/logo2.svg" alt="Client logo 2" />
                <img src="/assets/logo3.svg" alt="Client logo 3" />
                <img src="/assets/logo4.svg" alt="Client logo 4" />
              </div>
            </div>
          </div>
        </section>

        {/* =========================== */}
        {/* 3 PHASES                    */}
        {/* =========================== */}
        <section id="phases" className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold">How We Help You Double Your Business</h3>
              <p className="text-toro-grey">Your Business Growth, Engineered in 3 Phases</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Phase 1 */}
              <Card className="group rounded-2xl border-toro-gold/20 bg-white hover:shadow-lg transition-all">
                <CardHeader className="flex-row items-center gap-3">
                  <span className="grid h-10 w-10 place-content-center rounded-lg bg-toro-gold/10 text-toro-gold">🎥</span>
                  <CardTitle>Social Media Content Production</CardTitle>
                </CardHeader>
                <CardContent className="text-toro-grey">
                  We create custom video content that stops the scroll. From scripting and filming to editing and
                  posting, we handle it all—so your brand shows up sharp, professional, and consistent.
                </CardContent>
              </Card>

              {/* Phase 2 */}
              <Card className="group rounded-2xl border-toro-gold/20 bg-white hover:shadow-lg transition-all">
                <CardHeader className="flex-row items-center gap-3">
                  <span className="grid h-10 w-10 place-content-center rounded-lg bg-toro-gold/10 text-toro-gold">📱</span>
                  <CardTitle>Social Media Management</CardTitle>
                </CardHeader>
                <CardContent className="text-toro-grey">
                  No time to manage your pages or engage with comments and DMs? We’ve got it covered. TORO runs your
                  Instagram, Facebook, TikTok, and more—keeping your brand active and visible.
                </CardContent>
              </Card>

              {/* Phase 3 */}
              <Card className="group rounded-2xl border-toro-gold/20 bg-white hover:shadow-lg transition-all">
                <CardHeader className="flex-row items-center gap-3">
                  <span className="grid h-10 w-10 place-content-center rounded-lg bg-toro-gold/10 text-toro-gold">📍</span>
                  <CardTitle>Geo-Targeted Campaigns</CardTitle>
                </CardHeader>
                <CardContent className="text-toro-grey">
                  Why waste ad dollars on the wrong people? We run smart, local-focused campaigns that target your real
                  customer base—by zip code, interest, and behavior.
                </CardContent>
              </Card>
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
              {/* Card 1 */}
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
                      <Megaphone className="h-5 w-5" />
                    </span>
                    <h3 className="text-xl font-semibold">Demand Generation</h3>
                  </div>
                  <p className="mt-2 text-white/70 text-sm">Not just MQLs—the kind sales actually wants to call.</p>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-toro-gold" />Paid Social &amp; Search</li>
                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-toro-gold" />Geo-targeted campaigns <MapPin className="h-3.5 w-3.5 opacity-70" /></li>
                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-toro-gold" />Short-form video ads <Video className="h-3.5 w-3.5 opacity-70" /></li>
                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-toro-gold" />Reporting on CPL/ROAS <BarChart3 className="h-3.5 w-3.5 opacity-70" /></li>
                  </ul>
                </div>
              </div>

              {/* Arrow col 1 */}
              <div className="hidden lg:flex items-center justify-center">
                <ConnectorArrow className="w-full text-white/50" />
              </div>

              {/* Card 2 */}
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
                      <Monitor className="h-5 w-5" />
                    </span>
                    <h3 className="text-xl font-semibold">Website</h3>
                  </div>
                  <p className="mt-2 text-white/70 text-sm">
                    From bottleneck to growth engine—modern, personal, built to convert and evolve.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-toro-gold" />UX &amp; landing pages</li>
                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-toro-gold" />Site performance &amp; CRO</li>
                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-toro-gold" />Messaging &amp; offers</li>
                  </ul>
                </div>
              </div>

              {/* Arrow col 2 */}
              <div className="hidden lg:flex items-center justify-center">
                <ConnectorArrow className="w-full text-white/50" />
              </div>

              {/* Card 3 */}
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
                      <Settings className="h-5 w-5" />
                    </span>
                    <h3 className="text-xl font-semibold">Marketing Operations</h3>
                  </div>
                  <p className="mt-2 text-white/70 text-sm">
                    Clean CRM. Smart routing. Automations running. Sales—mostly—happy.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-toro-gold" />Lead scoring &amp; list management</li>
                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-toro-gold" />Nurtures &amp; remarketing</li>
                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-toro-gold" />Clear, actionable dashboards</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Infrastructure bar (your version) */}
            <div className="mt-10 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-[2px] shadow-[0_10px_40px_rgba(0,0,0,0.35)] p-6 md:p-7">
              <h4 className="text-lg font-semibold">Your Business Deserves More Than Just Posts.</h4>
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
                    <span className="h-1.5 w-1.5 rounded-full bg-toro-gold" />
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
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-5xl grid md:grid-cols-[1fr,2fr] gap-8 items-center">
            <div className="flex items-center justify-center">
              <div className="h-40 w-40 rounded-full border-2 border-toro-gold/30 grid place-content-center">
                <ShieldCheck className="h-16 w-16 text-toro-gold" />
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">🚫 Poser-Free Zone</h3>
              <p className="text-toro-grey">
                Most marketing agencies do the bare minimum and call it strategy. They set up a few posts a week and
                pretend it’s moving the needle. They serve fluff and call it marketing.
              </p>
              <p className="text-toro-grey mt-3">
                We don’t believe in filler content, fake results, or phoning it in. We build marketing that drives
                attention, builds demand, and brings you real clients. If your business isn’t growing, we’re not doing our job.
              </p>
            </div>
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

            <div className="mt-16 md:mt-20 border-t border-white/10" />

            {/* =========================== */}
            {/* LET'S DOUBLE YOUR BUSINESS  */}
            {/* =========================== */}
            <div className="pt-10 md:pt-12 text-center">
              <h3 className="text-3xl font-bold">📣 Let’s Double Your Business</h3>
              <p className="mt-4 max-w-3xl mx-auto text-white/75">
                You’ve done the hard part—built a great reputation, delivered real value, and kept your clients happy.
                Now it’s time to turn that into visibility and growth. TORO isn’t just marketing. We’re the partner that
                helps you go from word-of-mouth to widely known.
              </p>
            </div>

            <div className="mt-10 text-center">
              <div className="inline-flex flex-wrap items-center justify-center gap-3">
                <Link to="/pricing">
                  <Button variant="goldOutline" className="px-8 py-3 font-semibold">
                    See How We Scope
                  </Button>
                </Link>
                <Button variant="gold" className="px-8 py-3 font-semibold" onClick={scrollToContact}>
                  Contact Our Team
                </Button>
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
    </div>
  );
};

export default Marketing;
