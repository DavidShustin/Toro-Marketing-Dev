import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroMp4 from "@/assets/videos/hero.mp4";
import {
  Rocket,
  ShieldCheck,
  TrendingUp,
  Target,
  Users,
  Zap,
  CheckCircle2,
  MoveRight,
  ChevronDown,
  Sparkles,
  BarChart3,
} from "lucide-react";

// Bigger horizontal arrow used in the Mission flow
const FlowArrow: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 100 12" className={className} aria-hidden="true">
    <line x1="0" y1="6" x2="86" y2="6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
    <polyline
      points="86,2 100,6 86,10"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FlowPill: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="rounded-full border border-toro-gold/30 bg-toro-gold/10 px-4 py-1.5 text-sm font-semibold text-toro-gold">
    {children}
  </div>
);

const About: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-toro-dark">
      {/* ====== HERO (dark, layered, with scroll cue) ====== */}
      <div className="relative overflow-hidden bg-gradient-to-b from-toro-dark via-[#1f1f1f] to-toro-dark text-white">
        <Navigation />

        {/* soft gold glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-toro-gold/10 blur-3xl" />
        </div>

        <section className="relative pt-28 pb-16 md:pb-24">
          <div className="container mx-auto max-w-6xl px-6 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs tracking-wide">
              <ShieldCheck className="h-4 w-4 text-toro-gold" />
              Built for operators, not spectators
            </span>

            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-tight [text-wrap:balance]">
              We’re Not Just a Marketing Agency.
              <br className="hidden md:block" />
              We’re the Growth Partner You’ve Been Missing.
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-white/85 text-lg md:text-xl">
              Most agencies check boxes and call it strategy. Toro Marketing ends the fluff and builds marketing that actually moves the needle.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link to="/schedul">
                <Button variant="gold" className="px-7 py-3 font-semibold">📞 Book a Strategy Call</Button>
              </Link>
              <Link to="/pricing">
                <Button variant="goldOutline" className="px-7 py-3 font-semibold">See How We Scope</Button>
              </Link>
            </div>

            {/* scroll cue */}
            <button
              onClick={() => scrollTo("real")}
              className="mt-10 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 p-2 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-toro-gold/50"
              aria-label="Scroll to next section"
            >
              <ChevronDown className="h-5 w-5" />
            </button>
          </div>
        </section>
      </div>

      {/* ====== “Let’s be real.” (split layout, emphasis) ====== */}
      <section id="real" className="scroll-mt-24 py-16 md:py-20 px-6 bg-waves-gold-soft text-toro-dark">
        <div className="container mx-auto max-w-6xl">
          <div className="rounded-2xl border border-toro-gold/20 bg-white/95 shadow-sm p-6 md:p-10">
            <div className="grid gap-10 md:grid-cols-[1.25fr,0.75fr] items-start">

              {/* Left: copy (unchanged text, nicer framing) */}
              <article className="prose prose-neutral max-w-none">
                {/* small chips */}


                <h2 className="!mb-4 text-3xl md:text-4xl font-bold tracking-tight">Let’s be real.</h2>
                <p className="text-lg text-toro-dark/90">Most marketing companies out there are just checking boxes.</p>
                <p>Posting filler content. Reusing templates. Telling clients their “social media presence is active”—as if that means anything.</p>
                <p>You’ve probably dealt with one. Maybe two.</p>
                <p>They burned the clock, drained the budget, and gave you nothing to show for it.</p>

                {/* highlighted pull-quote */}
                <div className="my-6 rounded-xl border-l-4 border-toro-gold/70 bg-toro-gold/[0.06] p-4">
                  <p className="m-0 font-semibold text-toro-dark">That’s exactly why Toro Marketing exists.</p>
                  <p className="m-0 text-toro-dark/85">
                    We’re here to end the fluff and build marketing that actually moves the needle.
                  </p>
                </div>
              </article>

              {/* Right: quick-hit value panel */}
              <aside className="rounded-2xl border border-toro-gold/20 bg-white/80 backdrop-blur-sm p-6 md:p-7">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-toro-gold" />
                  What working with us feels like
                </h3>

                <ul className="space-y-3 text-toro-dark/90">
                  {[
                    "Clear direction > endless activity",
                    "Operators > order-takers",
                    "Demand > vanity metrics",
                    "Ownership > excuses",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <span className="grid h-8 w-8 place-content-center rounded-lg bg-toro-gold/10 text-toro-gold shrink-0">
                        <CheckCircle2 className="h-4 w-4" />
                      </span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5">
                  <Link to="/pricing">
                    <Button variant="goldOutline" size="sm" className="w-full">See how we scope</Button>
                  </Link>
                </div>
              </aside>

            </div>
          </div>
        </div>
      </section>


      {/* ====== Origin story (impact stat highlight) ====== */}
      <section className="py-16 px-6 bg-toro-dark text-white">
        <div className="container mx-auto max-w-6xl">
          <Card className="rounded-2xl border-white/15 bg-white/5 backdrop-blur-[2px]">
            {/* Header */}
            <CardHeader className="pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-content-center rounded-xl bg-white/10 text-toro-gold ring-1 ring-white/15">
                  <Rocket className="h-5 w-5" />
                </span>
                <CardTitle className="text-xl md:text-2xl text-white">
                  📈 Where We Started: One Lawyer. Zero Marketing. 300+ Cases in 7 Days.
                </CardTitle>
              </div>
            </CardHeader>

            {/* Body */}
            <CardContent className="p-6 md:p-8">
              <div className="grid items-start gap-8 md:grid-cols-[1.4fr_auto_1fr]">
                {/* Left column — unchanged copy */}
                <div className="leading-relaxed space-y-3 text-white/80 text-base">
                  <p>Before Toro Marketing, we were on the inside—working for a law office that relied completely on word of mouth.</p>
                  <p>No ads. No content. No digital footprint. Just good service and hope people would refer.</p>
                  <p>We decided to change that.</p>
                  <p>We started from scratch—building their brand online, learning the platforms, testing content, and creating strategy from the ground up. After months of figuring out what worked, we launched video campaigns.</p>

                  {/* Key stat callout */}
                  <p className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white/90">
                    In 7 days, it brought in over <strong className="text-toro-gold">300 signed cases</strong>.
                  </p>

                  <p>That wasn’t a fluke. That was proof.</p>
                  <p>And it became the foundation of Toro Marketing:</p>
                  <p className="font-semibold text-white">Marketing done right can change everything.</p>
                </div>

                {/* Vertical divider */}
                <div className="hidden md:block h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent rounded-full" />

                {/* Right column — impact tile */}
                <aside className="flex flex-col items-center text-center justify-center rounded-2xl border border-white/15 bg-white/5 p-8">
                  <div className="grid h-20 w-20 place-content-center rounded-2xl bg-white/10 text-toro-gold ring-1 ring-white/15">
                    <Rocket className="h-10 w-10" />
                  </div>
                  <h4 className="mt-6 text-3xl font-bold text-white">Proof → Playbook</h4>
                  <p className="mt-3 text-white/75">
                    The approach became a repeatable system we now tailor to each client’s market, message, and momentum.
                  </p>
                </aside>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ====== Why TORO Exists (dark band + icons) ====== */}
      <section className="py-16 px-6 bg-waves-gold-soft text-toro-dark">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1.15fr,0.85fr] items-start">
            {/* LEFT: your full copy in one comfy card */}
            <div className="rounded-2xl border border-toro-gold/25 bg-white/95 p-8 md:p-10 shadow-sm">
              <h2 className="text-3xl font-bold mb-4">🧠 Why Toro Marketing Exists</h2>

              <div className="space-y-4 text-toro-grey leading-relaxed">
                <p>We started Toro Marketing because we saw a massive problem in the industry:</p>
                <p>Agencies selling “strategy” but delivering shortcuts.</p>
                <p>Charging premium retainers to “keep accounts active,” while putting in the least amount of effort possible.</p>

                {/* subtle callout keeps rhythm + scans well */}
                <div className="rounded-xl border border-toro-gold/25 bg-toro-gold/5 px-4 py-3 text-toro-dark/90">
                  That’s not just dishonest—it’s disrespectful to real business owners doing real work.
                </div>

                <p>Toro Marketing was built to flip the script.</p>
                <p>We believe marketing should be direct, measurable, and growth-focused.</p>
                <p>You don’t need a digital babysitter. You need a team that takes ownership.</p>
                <p>We don’t do fluff. We don’t sell vanity.</p>
                <p className="font-semibold text-toro-dark">
                  We build marketing machines that bring in new clients, strengthen your brand, and help you scale.
                </p>
              </div>
            </div>

            {/* RIGHT: tidy vertical spine with matched cards */}
            <aside className="rounded-2xl border border-toro-gold/20 bg-white p-0 overflow-hidden h-full">
              <ul className="divide-y divide-toro-gold/15">
                {[
                  { icon: <Target className="h-5 w-5" />, h: "Direct & Measurable", d: "Every action is tied to pipeline and revenue outcomes." },
                  { icon: <Zap className="h-5 w-5" />, h: "Ownership & Speed", d: "We execute like in-house operators, not vendors." },
                  { icon: <Users className="h-5 w-5" />, h: "Partnership Mindset", d: "We win when you do—no fluff, no babysitting." },
                  { icon: <BarChart3 className="h-5 w-5" />, h: "Clarity & Reporting", d: "Clear dashboards, plain-English insights, no vanity metrics." },
                ].map((x) => (
                  <li key={x.h} className="p-6 md:p-8">
                    <div className="flex items-start gap-5">
                      {/* gold “rail” */}
                      <div className="relative">
                        <span className="grid h-11 w-11 place-content-center rounded-full bg-toro-gold/15 text-toro-gold ring-1 ring-toro-gold/25">
                          {x.icon}
                        </span>
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-base font-semibold">{x.h}</h3>
                        <p className="mt-1 text-toro-grey">{x.d}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>



      {/* ====== What Makes TORO Different + What to expect ====== */}
      <section className="py-16 px-6 bg-toro-dark text-white">
        <div className="container mx-auto max-w-6xl">
          {/* Heading + soft gold glow */}
          <div className="relative mb-10">
            <div className="pointer-events-none absolute -top-6 left-1/2 h-28 w-72 -translate-x-1/2 rounded-full bg-toro-gold/10 blur-3xl" />
            <h2 className="relative text-center text-3xl md:text-4xl font-bold">⚙️ What Makes Toro Marketing Different</h2>
          </div>

          {/* Compare lines */}
          <div className="grid gap-4">
            {[
              { l: "Most agencies focus on content.", r: "We focus on conversion." },
              { l: "Most agencies build timelines.", r: "We build momentum." },
              { l: "Most agencies want to justify their invoice.", r: "We want to justify your next hire." },
            ].map((row) => (
              <div
                key={row.l}
                className="rounded-2xl border border-white/12 bg-white/[0.06] p-6 md:p-7 shadow-sm transition-all hover:bg-white/[0.08]"
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-6">
                  <span className="text-white/80 md:text-lg text-center md:text-left">{row.l}</span>

                  {/* Bigger arrow in a gold badge */}
                  <span className="shrink-0 grid h-12 w-12 md:h-14 md:w-14 place-content-center rounded-full bg-toro-gold/20 text-toro-gold ring-1 ring-toro-gold/35">
                    <MoveRight className="h-7 w-7" />
                  </span>

                  <span className="font-semibold text-white md:text-lg text-center md:text-right">{row.r}</span>
                </div>
              </div>
            ))}
          </div>

          {/* What you can expect */}
          <div className="mt-10 grid gap-6 md:grid-cols-3 items-stretch">
            {[
              {
                icon: <Users className="h-6 w-6" />,
                h: "We onboard like employees",
                d: "Learning your brand, your goals, your audience.",
              },
              {
                icon: <Zap className="h-6 w-6" />,
                h: "We move like operators",
                d: "Plugging into your workflow and executing without being chased.",
              },
              {
                icon: <CheckCircle2 className="h-6 w-6" />,
                h: "We deliver like owners",
                d: "We only win if you do. This is deep work that leads to real results.",
              },
            ].map((c) => (
              <div
                key={c.h}
                className="group h-full rounded-2xl border border-white/12 bg-white/[0.06] p-6 transition-all hover:bg-white/[0.09] hover:shadow-[0_18px_60px_rgba(0,0,0,0.45)]"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-content-center rounded-lg bg-white/10 text-toro-gold ring-1 ring-white/15">
                    {c.icon}
                  </span>
                  <h3 className="text-lg font-semibold">{c.h}</h3>
                </div>
                <p className="mt-2 text-white/85 text-sm leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission block (kept on dark, matched styling) */}
        <div className="container mt-10 mx-auto max-w-6xl">
          <div className="rounded-2xl border border-white/12 bg-white/[0.06] p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
            <h2 className="text-2xl md:text-3xl font-bold text-center">🚀 Our Mission</h2>
            <p className="mt-3 text-center text-white/85">
              To turn reputation into visibility. To turn visibility into trust. To turn trust into qualified leads, new clients, and serious growth.
            </p>

            <div className="mt-8 flex flex-nowrap items-center justify-center gap-x-5 md:gap-x-6 overflow-x-auto">
              <FlowPill>Reputation</FlowPill>
              <FlowArrow className="text-toro-gold/80 h-5 md:h-6 w-16 md:w-24" />
              <FlowPill>Visibility</FlowPill>
              <FlowArrow className="text-toro-gold/80 h-5 md:h-6 w-16 md:w-24" />
              <FlowPill>Trust</FlowPill>
              <FlowArrow className="text-toro-gold/80 h-5 md:h-6 w-16 md:w-24" />
              <FlowPill>Growth</FlowPill>
            </div>

            <p className="mt-6 text-center text-white/80">
              We’re here to help businesses that were built on word of mouth break out of their bubble—and dominate the digital space.
              Your competitors are online. Your customers are on their phones. We make sure they find you—first.
            </p>
          </div>
        </div>
      </section>


      {/* ====== No Pretenders CTA (dark) ====== */}
      <section className="py-20 px-6 bg-waves-gold-soft text-toro-dark">
        <div className="container mx-auto max-w-6xl">
          <div
            className="
        relative mx-auto max-w-3xl overflow-hidden rounded-3xl
        border border-toro-gold/25 bg-white 
      "
          >
            {/* soft gold top accent */}


            {/* subtle background glow (decorative) */}


            <div className="relative z-10 p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold">
                🔥 No Pretenders. No Excuses. Just Results.
              </h2>

              <div className="mx-auto mt-5 max-w-3xl text-base md:text-lg leading-relaxed">
                <p>
                  If you want to look like you're doing marketing, there are hundreds of agencies for that.
                </p>
                <p className="mt-3">
                  If you want to grow, scale, and stand out—Toro Marketing is the partner you’ve been looking for.
                </p>
                <p className="mt-3">
                  Let’s take your reputation and make it work for you, everywhere your audience looks.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link to="/schedule">
                  <Button
                    variant="gold"
                    className="px-8 py-3 font-semibold transition-transform motion-safe:hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-toro-gold/50"
                    aria-label="Book a strategy call"
                  >
                    📞 Book a Strategy Call
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
};

export default About;
