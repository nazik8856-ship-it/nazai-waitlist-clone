import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronLeft, X } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NazAI — Orchestrates Any Business Function" },
      { name: "description", content: "Join the NazAI early access waitlist. AI Business OS for strategy, operations, finance, marketing, tech, and scaling." },
      { property: "og:title", content: "NazAI — Orchestrates Any Business Function" },
      { property: "og:description", content: "Join the NazAI early access waitlist." },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "2,400+", label: "Early Members" },
  { value: "94%", label: "Would Recommend" },
  { value: "48 hrs", label: "Avg. Onboarding" },
  { value: "#1", label: "AI Business OS" },
];

const domains = [
  { icon: "◎", title: "Strategy", desc: "Market research, SWOT, 5-year forecasting." },
  { icon: "⇌", title: "Operations", desc: "Workflow automation, CRM, HR processes." },
  { icon: "▣", title: "Finance", desc: "Cash flow modeling, tax optimization, contracts." },
  { icon: "◂", title: "Marketing", desc: "Lead gen agents, email sequences, SEO." },
  { icon: "</>", title: "Tech", desc: "SaaS building, app deployment, API orchestration." },
  { icon: "↗", title: "Scaling", desc: "Hiring plans, international expansion, org design." },
];

const testimonials = [
  { match: "90.1%", quote: "Our 12-month cash-flow model and hiring plan landed in the Vault before our standup ended.", metric: "Cut planning time 87%", initials: "PS", name: "Priya Sharma", role: "Ops Lead · NorthBeam" },
  { match: "91.0%", quote: "Asset Synthesis nailed our palette on the first pass. Every iteration archived to the Vault — replayable any time.", metric: "Saved 18 hrs/week", initials: "AN", name: "Alex Nguyen", role: "Indie Developer · Pixelmint" },
  { match: "96.8%", quote: "Mission Briefs are a cheat code. Successful generation with every prompt — no wasted credits.", metric: "200 SEO pages in one afternoon", initials: "JT", name: "Jordan Tate", role: "Head of Growth · Helo Studio" },
  { match: "94.2%", quote: "NazAI auto-corrected three briefs I've shipped. Felt like a senior strategist was right beside me.", metric: "3x output velocity", initials: "SK", name: "Sasha Keller", role: "Founder · Keller Studio" },
];

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div
        className="flex h-9 w-9 items-center justify-center rounded-xl text-base font-extrabold text-[oklch(0.7_0.2_250)]"
        style={{
          background: "oklch(0.16 0.03 270)",
          boxShadow: "0 0 0 1px oklch(0.5 0.15 250 / 0.5), 0 0 18px oklch(0.6 0.2 260 / 0.45)",
        }}
      >
        N
      </div>
      <span className="text-base font-semibold tracking-tight">NazAI</span>
    </div>
  );
}

function JoinButton({ className = "", onClick }: { className?: string; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 ${className}`}
      style={{ background: "var(--gradient-cta)", boxShadow: "var(--shadow-glow)" }}
    >
      Join Waitlist <ArrowRight className="h-4 w-4" />
    </button>
  );
}

function AvatarStack() {
  return (
    <div className="flex -space-x-2">
      <div className="h-6 w-6 rounded-full border-2 border-background bg-[var(--orange)]" />
      <div className="h-6 w-6 rounded-full border-2 border-background bg-[var(--magenta)]" />
      <div className="h-6 w-6 rounded-full border-2 border-background bg-[var(--cyan)]" />
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, oklch(0.6 0.25 290 / 0.5), transparent 70%)" }} />
        <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, oklch(0.78 0.15 200 / 0.5), transparent 70%)" }} />
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/60 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Logo />
          <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#product" className="transition hover:text-foreground">Product</a>
            <a href="#usecases" className="transition hover:text-foreground">Use Cases</a>
            <a href="#pricing" className="transition hover:text-foreground">Pricing</a>
          </nav>
          <JoinButton />
        </div>
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-6 pt-24 pb-32 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--cyan)]/40 bg-[var(--cyan)]/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-[var(--cyan)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--cyan)]" /> Early Access · Limited Spots
        </div>
        <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
          NazAI Orchestrates{" "}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-hero)" }}>
            Any Business Function.
          </span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground">
          Unlike simple website builders, NazAI uses its{" "}
          <span className="text-[var(--cyan)]">Logic Gate</span> and{" "}
          <span className="text-[var(--magenta)]">Auto Engine</span> for deep reasoning across all business domains.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
          <JoinButton />
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <AvatarStack /> <span><span className="font-semibold text-foreground">3</span> already on the list</span>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/40 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-background/80 px-6 py-8 backdrop-blur">
              <div className="text-3xl font-bold tracking-tight md:text-4xl" style={{ backgroundImage: "var(--gradient-hero)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                {s.value}
              </div>
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What NazAI Handles */}
      <section id="product" className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-[var(--cyan)]">What NazAI Handles</div>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            Every domain.{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-hero)" }}>
              One intelligence.
            </span>
          </h2>
        </div>
        <div id="usecases" className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/40 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map((d) => (
            <div key={d.title} className="group relative bg-background/80 p-8 backdrop-blur transition-all hover:bg-background">
              <div className="text-3xl text-[var(--magenta)]">{d.icon}</div>
              <h3 className="mt-6 text-xl font-semibold">{d.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="waitlist" className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 px-8 py-20 text-center"
          style={{ background: "radial-gradient(ellipse at top, oklch(0.7 0.25 320 / 0.15), transparent 60%), oklch(0.16 0.03 270)" }}>
          <div className="text-xs uppercase tracking-[0.3em] text-[var(--cyan)]">Waitlist Open</div>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            Secure your spot.{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-hero)" }}>
              Be first to launch.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            NazAI is launching to select founders first. Join the waitlist and get early access, priority onboarding, and a founding member price lock.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
            <JoinButton />
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <AvatarStack /> <span><span className="font-semibold text-foreground">3</span> founders already waiting</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="pricing" className="py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-[var(--cyan)]">Neural Feedback</div>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            Verified missions,{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-hero)" }}>
              calibrated by operators.
            </span>
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">Hover to pause. Every card is a real mission logged in the Vault.</p>
        </div>
        <div className="group relative mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max gap-6 animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="w-[360px] shrink-0 rounded-2xl border border-border/60 bg-background/60 p-6 backdrop-blur">
                <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-widest">
                  <span className="rounded-full border border-[var(--cyan)]/40 bg-[var(--cyan)]/10 px-2 py-0.5 text-[var(--cyan)]">Verified Mission</span>
                  <span className="text-[var(--magenta)]">{t.match} Match</span>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-foreground/90">"{t.quote}"</p>
                <div className="mt-5 text-xs font-medium text-[var(--cyan)]">{t.metric}</div>
                <div className="mt-5 flex items-center gap-3 border-t border-border/40 pt-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[var(--magenta)] to-[var(--violet)] text-xs font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 mt-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-12 md:flex-row">
          <Logo />
          <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} NazAI. All rights reserved.</div>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
