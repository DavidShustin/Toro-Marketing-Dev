import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Marketing: React.FC = () => {
  const scrollToFooter = () => {
    const el = document.getElementById("footer");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-toro-light to-gray-50">
      <Navigation />

      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold text-toro-dark mb-6">
              How Toro <span className="text-toro-gold">Markets Your Brand</span>
            </h1>
            <p className="text-xl text-toro-grey mb-8 max-w-3xl mx-auto">
              Our playbook blends 📍 precision targeting, 🎥 high-performing content, and 📊 daily optimization—
              so the right people see the right message at the right time.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link to="/about">
                <Button
                  variant="goldOutline"
                  className="px-8 py-3 font-semibold" // keep only sizing/weight if needed
                >
                  How We Work ⚙️
                </Button>
              </Link>
              <Button className="btn-gold text-toro-dark font-semibold" onClick={scrollToFooter}>
                Talk To Us
              </Button>
            </div>
          </div>
        </section>

        {/* Toro Growth Framework (distinct from the About “Six-Phase” section) */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-toro-dark mb-12">🧭 Toro Growth Framework</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  t: '🔎 Discovery & Audience Mapping',
                  d: 'Clarify ideal customers, buying triggers, and objections. Build practical personas from real platform behavior.'
                },
                {
                  t: '🧠 Message Architecture',
                  d: 'Hooks, angles, and offers aligned to each persona—so every asset knows exactly who it’s talking to.'
                },
                {
                  t: '🎬 Content Engine',
                  d: 'Batch shoot high-impact short-form. Script → film → edit captions/music/overlays → export for each platform.'
                },
                {
                  t: '📅 Channel Orchestration',
                  d: 'Plan weekly calendars per platform. Right format, right length, right timing—no copy-paste blasts.'
                },
                {
                  t: '📈 Test → Learn → Scale',
                  d: 'A/B test hooks, creatives, and audiences. Kill losers fast, feed winners more budget and reach.'
                },
                {
                  t: '🤝 Community & Retention',
                  d: 'Thoughtful replies, DM workflows, and remarketing to turn attention into pipeline and repeat buyers.'
                },
              ].map((c) => (
                <Card key={c.t} className="border-toro-gold/20 bg-white hover:shadow-lg transition-shadow">
                  <CardHeader><CardTitle className="text-toro-gold">{c.t}</CardTitle></CardHeader>
                  <CardContent className="text-toro-grey">{c.d}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Geo-Targeting Playbook (methods only, no pricing) */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-toro-dark mb-12">📍 Geo-Targeting Playbook</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="border-toro-gold/20 bg-white">
                <CardHeader><CardTitle className="text-toro-gold">🎯 Precision Targeting</CardTitle></CardHeader>
                <CardContent className="text-toro-grey">
                  Layer location + demographics + interests + platform behavior. Prioritize high-intent pockets over broad waste.
                </CardContent>
              </Card>
              <Card className="border-toro-gold/20 bg-white">
                <CardHeader><CardTitle className="text-toro-gold">🗺️ Local Relevance</CardTitle></CardHeader>
                <CardContent className="text-toro-grey">
                  Localized hooks, landmarks, and use-cases. Creative feels “for me,” not “for everyone.” Higher CTR, lower CPL.
                </CardContent>
              </Card>
              <Card className="border-toro-gold/20 bg-white">
                <CardHeader><CardTitle className="text-toro-gold">🔁 Always-On Optimization</CardTitle></CardHeader>
                <CardContent className="text-toro-grey">
                  Daily bid/placement tuning. Shift spend to winning geos and creatives. Protect efficiency as you scale.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Video Production Workflow (no pricing) */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-toro-dark mb-12">🎥 Video Production Workflow</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { t: '✍️ Scripts & Hooks', d: 'Brand-consistent scripts with clear CTAs and strong first-second hooks.' },
                { t: '📸 Shoot Day', d: 'Batch filming, scene lists, and sound/lighting to keep production smooth.' },
                { t: '✂️ Edit for Platform', d: 'Captions, cuts, pacing, and overlays tuned per channel (IG/TikTok/FB/LinkedIn).' },
                { t: '🗓️ Schedule & Publish', d: 'Platform-native scheduling and thumb-stopper thumbnails to maximize reach.' },
              ].map((c) => (
                <Card key={c.t} className="border-toro-gold/20 bg-white hover:shadow-lg transition-shadow">
                  <CardHeader><CardTitle className="text-toro-gold">{c.t}</CardTitle></CardHeader>
                  <CardContent className="text-toro-grey">{c.d}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Measurement & Reporting (methods, metrics) */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-toro-dark mb-12">📊 Measurement & Reporting</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="border-toro-gold/20 bg-white">
                <CardHeader><CardTitle className="text-toro-gold">Core Metrics</CardTitle></CardHeader>
                <CardContent className="text-toro-grey">
                  Hook rate, watch-through, CTR, CPC, CPL. Track what predicts revenue, not vanity likes.
                </CardContent>
              </Card>
              <Card className="border-toro-gold/20 bg-white">
                <CardHeader><CardTitle className="text-toro-gold">Learning Agenda</CardTitle></CardHeader>
                <CardContent className="text-toro-grey">
                  Weekly experiments across hooks, creatives, and audiences. Document wins and retire losers.
                </CardContent>
              </Card>
              <Card className="border-toro-gold/20 bg-white">
                <CardHeader><CardTitle className="text-toro-gold">Clarity & Cadence</CardTitle></CardHeader>
                <CardContent className="text-toro-grey">
                  Simple dashboards + monthly summaries so stakeholders see progress and next moves at a glance.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Brand Safety & Voice (only how, not price) */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-toro-dark mb-12">🛡️ Brand Safety & Voice</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="border-toro-gold/20 bg-white">
                <CardHeader><CardTitle className="text-toro-gold">Guidelines & QA</CardTitle></CardHeader>
                <CardContent className="text-toro-grey">
                  Clear do/don’t lists, compliance checks, and approvals before anything goes live.
                </CardContent>
              </Card>
              <Card className="border-toro-gold/20 bg-white">
                <CardHeader><CardTitle className="text-toro-gold">Consistent Voice</CardTitle></CardHeader>
                <CardContent className="text-toro-grey">
                  Tone boards and phrasing pillars keep messaging on-brand across every channel and touchpoint.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <Card className="border-toro-gold/20 max-w-4xl mx-auto bg-white">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-toro-gold">
                  “If they’re not seeing you, they’re buying from someone else.”
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link to="/about">
                    <Button
                      variant="goldOutline"
                      className="px-8 py-3 font-semibold" // keep only sizing/weight if needed
                    >
                      See The Process
                    </Button>
                  </Link>
                  <Link to="/pricing">
                    <Button className="btn-gold text-toro-dark font-semibold">
                      Packages Overview
                    </Button>
                  </Link>
                  <Button onClick={scrollToFooter} className="btn-gold text-toro-dark font-semibold">
                    Contact Our Team
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Marketing;
