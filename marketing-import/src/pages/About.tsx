import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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

        <section className="relative pt-28 pb-16 md:pb-24">
          {/* glow accents */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-toro-gold/10 blur-3xl" />
          </div>

          <div className="container mx-auto max-w-6xl px-6 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs tracking-wide">
              <ShieldCheck className="h-4 w-4 text-toro-gold" />
              Built for operators, not spectators
            </span>

            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-tight [text-wrap:balance]">
              We’re Not a Marketing Agency.
              <br className="hidden md:block" />
              We’re the Growth Partner You’ve Been Missing.
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-white/85 text-lg md:text-xl">
              Most agencies check boxes and call it strategy. TORO ends the fluff and builds marketing that actually moves the needle.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link to="/contact">
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
      <section id="real" className="py-16 md:py-20 px-6 bg-white">
        <div className="container mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.25fr,0.75fr] items-start">
          {/* Left: the full copy, intact */}
          <article className="prose prose-neutral max-w-none md:prose-lg">
            <h2 className="!mb-4 text-3xl md:text-4xl font-bold tracking-tight">Let’s be real.</h2>
            <p>Most marketing companies out there are just checking boxes.</p>
            <p>Posting filler content. Reusing templates. Telling clients their “social media presence is active”—as if that means anything.</p>
            <p>You’ve probably dealt with one. Maybe two.</p>
            <p>They burned the clock, drained the budget, and gave you nothing to show for it.</p>
            <p>That’s exactly why TORO exists.</p>
            <p>We’re here to end the fluff and build marketing that actually moves the needle.</p>
          </article>

          {/* Right: quick-hit value panel */}
          <div
            className="
              rounded-2xl border border-toro-gold/20 bg-white shadow-sm p-6 md:p-8
              transition-all hover:shadow-lg
            "
          >
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-toro-gold" /> What working with us feels like
            </h3>
            <ul className="space-y-3 text-toro-dark/85">
              {[
                "Clear direction > endless activity",
                "Operators > order-takers",
                "Demand > vanity metrics",
                "Ownership > excuses",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-toro-gold shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ====== Origin story (impact stat highlight) ====== */}
      <section className="py-16 px-6 bg-toro-light">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 items-stretch">
            <Card className="rounded-2xl border-toro-gold/25">
              <CardHeader>
                <CardTitle className="text-toro-gold">📈 Where We Started: One Lawyer. Zero Marketing. 300+ Cases in 7 Days.</CardTitle>
              </CardHeader>
              <CardContent className="text-toro-grey leading-relaxed">
                <p>
                  Before TORO, we were on the inside—working for a law office that relied completely on word of mouth.
                </p>
                <p className="mt-3">
                  No ads. No content. No digital footprint. Just good service and hope people would refer.
                </p>
                <p className="mt-3">
                  We decided to change that.
                </p>
                <p className="mt-3">
                  We started from scratch—building their brand online, learning the platforms, testing content, and creating strategy from the ground up. After months of figuring out what worked, we launched video campaigns.
                </p>
                <p className="mt-3">
                  In 7 days, it brought in over <strong>300 signed cases</strong>.
                </p>
                <p className="mt-3">
                  That wasn’t a fluke. That was proof.
                </p>
                <p className="mt-3">
                  And it became the foundation of TORO:
                </p>
                <p className="mt-3 font-semibold text-toro-dark">
                  Marketing done right can change everything.
                </p>
              </CardContent>
            </Card>

            {/* Impact Tile */}
            <div className="rounded-2xl border border-toro-gold/25 bg-white p-8 flex flex-col justify-center">
              <div className="mx-auto grid place-items-center">
                <div className="grid h-20 w-20 place-content-center rounded-2xl bg-toro-gold/15 text-toro-gold">
                  <Rocket className="h-10 w-10" />
                </div>
              </div>
              <h4 className="mt-6 text-center text-3xl font-bold">Proof → Playbook</h4>
              <p className="mt-3 text-center text-toro-grey">
                The approach became a repeatable system we now tailor to each client’s market, message, and momentum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== Why TORO Exists (dark band + icons) ====== */}
      <section className="py-20 px-6 bg-toro-dark text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] items-stretch">
            {/* Full original copy on the left */}
            <div className="rounded-2xl border border-white/15 bg-white/5 p-8 md:p-10">
              <h2 className="text-3xl font-bold mb-4">🧠 Why TORO Exists</h2>
              <div className="space-y-4 text-white/85 leading-relaxed">
                <p>We started TORO because we saw a massive problem in the industry:</p>
                <p>Agencies selling “strategy” but delivering shortcuts.</p>
                <p>Charging premium retainers to “keep accounts active,” while putting in the least amount of effort possible.</p>
                <p>That’s not just dishonest—it’s disrespectful to real business owners doing real work.</p>
                <p>TORO was built to flip the script.</p>
                <p>We believe marketing should be direct, measurable, and growth-focused.</p>
                <p>You don’t need a digital babysitter. You need a team that takes ownership.</p>
                <p>We don’t do fluff. We don’t sell vanity.</p>
                <p>We build marketing machines that bring in new clients, strengthen your brand, and help you scale.</p>
              </div>
            </div>

            {/* Visual pillars on the right */}
            <div className="grid gap-6">
              {[
                { icon: <Target className="h-5 w-5" />, h: "Direct & Measurable", d: "Every action is tied to pipeline and revenue outcomes." },
                { icon: <Zap className="h-5 w-5" />, h: "Ownership & Speed", d: "We execute like in-house operators, not vendors." },
                { icon: <Users className="h-5 w-5" />, h: "Partnership Mindset", d: "We win when you do—no fluff, no babysitting." },
              ].map((x) => (
                <div
                  key={x.h}
                  className="group rounded-2xl border border-white/15 bg-white/5 p-6 transition-all hover:bg-white/10 hover:shadow-[0_18px_60px_rgba(0,0,0,0.45)]"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-content-center rounded-lg bg-white/10 ring-1 ring-white/15 text-white/90 group-hover:text-toro-gold">
                      {x.icon}
                    </span>
                    <h3 className="text-lg font-semibold">{x.h}</h3>
                  </div>
                  <p className="mt-2 text-white/75">{x.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====== What Makes TORO Different + What to expect ====== */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">⚙️ What Makes TORO Different</h2>

          {/* Compare lines (your exact lines) */}
          <div className="grid gap-4">
            {[
              { l: "Most agencies focus on content.", r: "We focus on conversion." },
              { l: "Most agencies build timelines.", r: "We build momentum." },
              { l: "Most agencies want to justify their invoice.", r: "We want to justify your next hire." },
            ].map((row) => (
              <div
                key={row.l}
                className="rounded-xl border border-toro-gold/20 bg-white p-5 md:p-6 flex items-center justify-between gap-4"
              >
                <span className="text-toro-grey">{row.l}</span>
                <MoveRight className="hidden md:block h-5 w-5 text-toro-gold/80" />
                <span className="font-semibold">{row.r}</span>
              </div>
            ))}
          </div>

          {/* What you can expect */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <Users className="h-5 w-5" />,
                h: "We onboard like employees",
                d: "Learning your brand, your goals, your audience.",
              },
              {
                icon: <Zap className="h-5 w-5" />,
                h: "We move like operators",
                d: "Plugging into your workflow and executing without being chased.",
              },
              {
                icon: <CheckCircle2 className="h-5 w-5" />,
                h: "We deliver like owners",
                d: "We only win if you do. This is deep work that leads to real results.",
              },
            ].map((c) => (
              <Card
                key={c.h}
                className="rounded-2xl border-toro-gold/20 bg-white transition-all hover:shadow-lg"
              >
                <CardHeader className="flex-row items-center gap-3">
                  <span className="grid h-10 w-10 place-content-center rounded-lg bg-toro-gold/10 text-toro-gold">
                    {c.icon}
                  </span>
                  <CardTitle>{c.h}</CardTitle>
                </CardHeader>
                <CardContent className="text-toro-grey">{c.d}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ====== Mission flow (arrows) ====== */}
      <section className="py-16 px-6 bg-toro-light">
        <div className="container mx-auto max-w-6xl">
          <div className="rounded-2xl border border-toro-gold/20 bg-white p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-center">🚀 Our Mission</h2>
            <p className="mt-3 text-center text-toro-grey">
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

            <p className="mt-6 text-center text-toro-grey">
              We’re here to help businesses that were built on word of mouth break out of their bubble—and dominate the digital space.
              Your competitors are online. Your customers are on their phones. We make sure they find you—first.
            </p>
          </div>
        </div>
      </section>

      {/* ====== No Pretenders CTA (dark) ====== */}
      <section className="py-20 px-6 bg-toro-dark text-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold">🔥 No Pretenders. No Excuses. Just Results.</h2>
          <div className="prose prose-invert mx-auto mt-5 max-w-3xl">
            <p>
              If you want to look like you're doing marketing, there are hundreds of agencies for that.
            </p>
            <p>
              If you want to grow, scale, and stand out—TORO is the partner you’ve been looking for.
            </p>
            <p>
              Let’s take your reputation and make it work for you, everywhere your audience looks.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/contact">
              <Button variant="gold" className="px-8 py-3 font-semibold">📞 Book a Strategy Call</Button>
            </Link>
            <Link to="/contact">
              <Button variant="goldOutline" className="px-8 py-3 font-semibold">📩 Contact Our Team</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
