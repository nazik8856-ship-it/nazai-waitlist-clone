import { ArrowRight, Check, ChevronLeft, Mail, Music2, X, Youtube } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

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

export default function Index() {
  const [open, setOpen] = useState(false);
  const [introDone, setIntroDone] = useState(false);
  const openModal = () => setOpen(true);
  useEffect(() => {
    document.title = "NazAI — Orchestrates Any Business Function";
    const t = setTimeout(() => setIntroDone(true), 3900);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      {!introDone && <IntroOverlay />}
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
          <JoinButton onClick={openModal} />
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative mx-auto max-w-7xl px-6 pt-24 pb-32 text-center"
        style={{ animation: "blur-rise 1.0s cubic-bezier(0.22, 1, 0.36, 1) 3.3s both" }}
      >
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
          <JoinButton onClick={openModal} />
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
            <JoinButton onClick={openModal} />
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
      <footer className="border-t border-border/40 mt-16"
        style={{ background: "radial-gradient(ellipse at bottom left, oklch(0.2 0.08 290 / 0.4), transparent 60%), oklch(0.1 0.02 270)" }}>
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">Built for the Future.</p>
            <div className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--cyan)]">AI Business OS</div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">Product</div>
            <ul className="mt-5 space-y-3 text-sm">
              <li><a href="#product" className="text-foreground/80 transition hover:text-foreground">Domain Master</a></li>
              <li><a href="#product" className="text-foreground/80 transition hover:text-foreground">Brand-Snap Canvas</a></li>
              <li><a href="#usecases" className="text-foreground/80 transition hover:text-foreground">Operations</a></li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">Company</div>
            <ul className="mt-5 space-y-3 text-sm">
              <li><a href="https://www.youtube.com/@NazAI-n8b" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-foreground/80 transition hover:text-foreground"><Youtube className="h-4 w-4" /> YouTube</a></li>
              <li><a href="https://www.tiktok.com/@nazai.ai.business" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-foreground/80 transition hover:text-foreground"><Music2 className="h-4 w-4" /> TikTok</a></li>
              <li><a href="mailto:nazai8832@gmail.com" className="inline-flex items-center gap-2 text-foreground/80 transition hover:text-foreground"><Mail className="h-4 w-4" /> Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">Legal</div>
            <ul className="mt-5 space-y-3 text-sm">
              <li><a href="#" className="text-foreground/80 transition hover:text-foreground">Terms</a></li>
              <li><a href="#" className="text-foreground/80 transition hover:text-foreground">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/40">
          <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-muted-foreground">© {new Date().getFullYear()} NazAI. All rights reserved.</div>
        </div>
      </footer>
      <WaitlistModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}

function IntroOverlay() {
  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black overflow-hidden"
      style={{ animation: "intro-fade-out 0.7s ease-in 3.1s forwards" }}
      aria-hidden
    >
      {/* Orbiting purple dot — rotator centered, dot offset on its arm */}
      <div
        className="absolute left-1/2 top-1/2"
        style={{
          width: 0,
          height: 0,
          animation: "orbit-once 1.8s cubic-bezier(0.65, 0, 0.35, 1) forwards",
        }}
      >
        <div
          className="absolute h-3 w-3 rounded-full"
          style={{
            top: -6,
            left: 180,
            background: "oklch(0.72 0.27 305)",
            boxShadow: "0 0 18px 4px oklch(0.7 0.27 305 / 0.85), 0 0 40px 10px oklch(0.6 0.25 290 / 0.5)",
          }}
        />
      </div>
      {/* Logo appears after the orbit */}
      <div
        className="relative z-10 flex flex-col items-center text-center px-6"
        style={{ animation: "fade-in 0.7s ease-out 1.9s both" }}
      >
        <div className="scale-150">
          <Logo />
        </div>
      </div>
    </div>
  );
}

type Answers = { role: string; revenue: string; urgency: string; name: string; email: string; phone: string };

const STEPS = [
  { key: "role" as const, title: "What's your role?", subtitle: "Help us tailor NazAI for you.", options: ["Founder/CEO", "COO", "CTO", "CMO", "Other"] },
  { key: "revenue" as const, title: "What's your annual revenue?", subtitle: "We'll match you to the right NazAI tier.", options: ["<$100K", "$100K - $1M", "$1M - $5M", "$5M - $10M", "$10M+"] },
  { key: "urgency" as const, title: "How urgent is AI automation?", subtitle: "Based on your current operations.", options: ["Critical", "High", "Medium", "Low"] },
];

function WaitlistModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [position, setPosition] = useState<number>(0);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Answers>({ role: "", revenue: "", urgency: "", name: "", email: "", phone: "" });
  const [mode, setMode] = useState<"signup" | "lookup">("signup");
  const [lookupEmail, setLookupEmail] = useState("");
  const [lookupError, setLookupError] = useState<string | null>(null);
  const [lookupLoading, setLookupLoading] = useState(false);

  if (!open) return null;

  const reset = () => {
    setStep(0); setDone(false); setError(null);
    setAnswers({ role: "", revenue: "", urgency: "", name: "", email: "", phone: "" });
    setMode("signup"); setLookupEmail(""); setLookupError(null); setLookupLoading(false);
  };
  const close = () => { onClose(); setTimeout(reset, 300); };

  const selectOption = (key: keyof Answers, value: string) => {
    setAnswers((a) => ({ ...a, [key]: value }));
    setTimeout(() => setStep((s) => s + 1), 150);
  };

  const handleLookup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!lookupEmail.trim()) return;
    setLookupLoading(true); setLookupError(null);
    const { data, error: rpcError } = await supabase.rpc("lookup_waitlist_position", {
      _email: lookupEmail.trim().toLowerCase(),
    });
    setLookupLoading(false);
    if (rpcError) { setLookupError(rpcError.message || "Lookup failed."); return; }
    if (data == null) { setLookupError("We couldn't find that email on the waitlist."); return; }
    setAnswers((a) => ({ ...a, name: a.name || lookupEmail.split("@")[0], email: lookupEmail.trim().toLowerCase() }));
    setPosition(Number(data));
    setDone(true);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!answers.name || !answers.email) return;
    setSubmitting(true);
    setError(null);
    const { data, error: rpcError } = await supabase.rpc("join_waitlist", {
      _name: answers.name.trim(),
      _email: answers.email.trim().toLowerCase(),
      _phone: answers.phone || undefined,
      _role: answers.role || undefined,
      _revenue: answers.revenue || undefined,
      _urgency: answers.urgency || undefined,
    });

    if (rpcError) {
      setError(rpcError.message || "Something went wrong. Please try again.");
      setSubmitting(false);
      return;
    }

    setPosition(Number(data));
    setDone(true);
    setSubmitting(false);

    // Fire-and-forget confirmation emails (don't block UX on failure)
    const pos = Number(data);
    const userEmail = answers.email.trim().toLowerCase();
    const userName = answers.name.trim();
    const userHtml = `
      <div style="font-family:Arial,sans-serif;background:#000;color:#fff;padding:32px;border-radius:12px;max-width:560px;margin:auto">
        <h1 style="color:#c084fc;margin:0 0 16px;font-size:24px">Welcome to NazAI, ${userName}.</h1>
        <p style="color:#d4d4d8;line-height:1.6">You're officially on the waitlist.</p>
        <p style="color:#fff;font-size:18px;margin:24px 0">Your position: <strong style="color:#c084fc">#${pos}</strong></p>
        <p style="color:#a1a1aa;font-size:14px">We'll be in touch as spots open up. Stay sharp.</p>
        <p style="color:#71717a;font-size:12px;margin-top:32px">— The NazAI Team</p>
      </div>`;
    const adminHtml = `
      <div style="font-family:Arial,sans-serif;padding:16px">
        <h2>New NazAI waitlist signup (#${pos})</h2>
        <ul>
          <li><strong>Name:</strong> ${userName}</li>
          <li><strong>Email:</strong> ${userEmail}</li>
          <li><strong>Phone:</strong> ${answers.phone || "—"}</li>
          <li><strong>Role:</strong> ${answers.role || "—"}</li>
          <li><strong>Revenue:</strong> ${answers.revenue || "—"}</li>
          <li><strong>Urgency:</strong> ${answers.urgency || "—"}</li>
        </ul>
      </div>`;
    void supabase.functions.invoke("send-email", {
      body: { to: userEmail, subject: `You're on the NazAI waitlist — #${pos}`, html: userHtml },
    });
    void supabase.functions.invoke("send-email", {
      body: { to: "__admin__", subject: `New signup #${pos} — ${userName}`, html: adminHtml },
    }).catch(() => {});
  };

  const totalSteps = 4;
  const activeStep = done ? totalSteps : step;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto p-3 sm:items-center sm:p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={close} />
      <div
        className="relative my-4 max-h-[calc(100vh-2rem)] w-full max-w-xl overflow-y-auto rounded-2xl border border-border/60 p-5 sm:my-0 sm:max-h-[90vh] sm:p-8"
        style={{
          background: "oklch(0.14 0.03 270)",
          boxShadow: "0 0 0 1px oklch(0.5 0.15 270 / 0.3), 0 30px 80px oklch(0 0 0 / 0.6), 0 0 60px oklch(0.7 0.25 320 / 0.15)",
        }}
      >
        {!done && (
          <button onClick={close} className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-background/40 text-muted-foreground transition hover:text-foreground sm:right-4 sm:top-4">
            <X className="h-4 w-4" />
          </button>
        )}

        {!done ? (
          <>
            <div className="flex items-center gap-3">
              <Logo />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--magenta)]">Join Waitlist</span>
            </div>

            {mode === "signup" && <div className="mt-6 flex items-center justify-center gap-2">
              {Array.from({ length: totalSteps }).map((_, i) => {
                const isActive = i === activeStep;
                const isPast = i < activeStep;
                return (
                  <span
                    key={i}
                    className="h-1.5 rounded-full transition-all"
                    style={{
                      width: isActive ? 28 : 8,
                      background: isActive ? "var(--magenta)" : isPast ? "var(--cyan)" : "oklch(0.3 0.04 270)",
                      boxShadow: isActive ? "0 0 12px var(--magenta)" : "none",
                    }}
                  />
                );
              })}
            </div>}

            {mode === "lookup" ? (
              <form onSubmit={handleLookup} className="mt-6 animate-[fade-in_0.4s_ease-out] sm:mt-8">
                <h3 className="text-xl font-bold tracking-tight sm:text-2xl">Welcome back.</h3>
                <p className="mt-1 text-sm text-muted-foreground">Enter your email to view your waitlist position.</p>
                <div className="mt-5">
                  <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Email Address</label>
                  <input
                    type="email"
                    value={lookupEmail}
                    onChange={(e) => setLookupEmail(e.target.value)}
                    placeholder="john@company.com"
                    autoFocus
                    className="mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:border-[var(--magenta)]"
                    style={{ borderColor: "oklch(0.3 0.04 270 / 60%)", background: "oklch(0.17 0.03 270)" }}
                  />
                </div>
                {lookupError && <p className="mt-4 text-sm text-destructive">{lookupError}</p>}
                <div className="mt-7 flex items-center justify-between gap-3">
                  <button type="button" onClick={() => { setMode("signup"); setLookupError(null); }} className="inline-flex items-center gap-1 text-sm text-muted-foreground transition hover:text-foreground">
                    <ChevronLeft className="h-4 w-4" /> Back
                  </button>
                  <button
                    type="submit"
                    disabled={lookupLoading}
                    className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-60 sm:px-6 sm:py-3"
                    style={{ background: "var(--gradient-cta)", boxShadow: "var(--shadow-glow)" }}
                  >
                    {lookupLoading ? "Checking…" : "View My Spot"} <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            ) : step < 3 ? (
              <StepChoice
                key={step}
                step={STEPS[step]}
                value={answers[STEPS[step].key]}
                onSelect={(v) => selectOption(STEPS[step].key, v)}
                onBack={step > 0 ? () => setStep((s) => s - 1) : undefined}
              />
            ) : (
              <StepContact
                key="contact"
                answers={answers}
                setAnswers={setAnswers}
                onBack={() => setStep(2)}
                onSubmit={submit}
                submitting={submitting}
                error={error}
              />
            )}
            {mode === "signup" && step === 0 && (
              <p className="mt-6 text-center text-xs text-muted-foreground" style={{ animation: "fade-in 0.5s ease-out 0.4s both" }}>
                Already on the list?{" "}
                <button type="button" onClick={() => setMode("lookup")} className="font-semibold text-[var(--magenta)] underline-offset-4 hover:underline">
                  Check your spot
                </button>
              </p>
            )}
          </>
        ) : (
          <SuccessView answers={answers} position={position} onClose={close} />
        )}
      </div>
    </div>
  );
}

function StepChoice({ step, value, onSelect, onBack }: { step: typeof STEPS[number]; value: string; onSelect: (v: string) => void; onBack?: () => void }) {
  return (
    <div className="mt-6 animate-[fade-in_0.4s_ease-out] sm:mt-8">
      <h3 className="text-xl font-bold tracking-tight sm:text-2xl" style={{ animation: "fade-in 0.45s ease-out both" }}>{step.title}</h3>
      <p className="mt-1 text-sm text-muted-foreground" style={{ animation: "fade-in 0.5s ease-out 0.05s both" }}>{step.subtitle}</p>
      <div className="mt-5 space-y-2.5 sm:space-y-3">
        {step.options.map((opt, i) => {
          const active = value === opt;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onSelect(opt)}
              className="block w-full rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--magenta)]/60 hover:bg-[var(--magenta)]/5 hover:shadow-[0_8px_24px_-12px_oklch(0.7_0.25_320/0.6)] sm:px-5 sm:py-4"
              style={{
                borderColor: active ? "var(--magenta)" : "oklch(0.3 0.04 270 / 60%)",
                background: active ? "oklch(0.7 0.25 320 / 0.1)" : "oklch(0.17 0.03 270)",
                animation: `fade-in 0.45s ease-out ${0.08 + i * 0.06}s both`,
              }}
            >
              {opt}
            </button>
          );
        })}
      </div>
      {onBack && (
        <button onClick={onBack} className="mt-5 inline-flex items-center gap-1 text-sm text-muted-foreground transition hover:text-foreground" style={{ animation: "fade-in 0.5s ease-out 0.35s both" }}>
          <ChevronLeft className="h-4 w-4" /> Back
        </button>
      )}
    </div>
  );
}

function StepContact({ answers, setAnswers, onBack, onSubmit, submitting, error }: { answers: Answers; setAnswers: React.Dispatch<React.SetStateAction<Answers>>; onBack: () => void; onSubmit: (e: React.FormEvent) => void; submitting: boolean; error: string | null }) {
  const field = (label: string, key: keyof Answers, type: string, placeholder: string, delay: number) => (
    <div style={{ animation: `fade-in 0.45s ease-out ${delay}s both` }}>
      <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        type={type}
        value={answers[key]}
        onChange={(e) => setAnswers((a) => ({ ...a, [key]: e.target.value }))}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:border-[var(--magenta)]"
        style={{ borderColor: "oklch(0.3 0.04 270 / 60%)", background: "oklch(0.17 0.03 270)" }}
      />
    </div>
  );
  return (
    <form onSubmit={onSubmit} className="mt-6 animate-[fade-in_0.4s_ease-out] sm:mt-8">
      <h3 className="text-xl font-bold tracking-tight sm:text-2xl" style={{ animation: "fade-in 0.45s ease-out both" }}>Almost Done!</h3>
      <p className="mt-1 text-sm text-muted-foreground" style={{ animation: "fade-in 0.5s ease-out 0.05s both" }}>We'll send your access confirmation here.</p>
      <div className="mt-5 space-y-4">
        {field("Full Name", "name", "text", "John Smith", 0.1)}
        {field("Email Address", "email", "email", "john@company.com", 0.18)}
        {field("Phone Number", "phone", "tel", "+1 (555) 000-0000", 0.26)}
      </div>
      {error && <p className="mt-4 text-sm text-destructive">{error}</p>}
      <div className="mt-7 flex items-center justify-between gap-3" style={{ animation: "fade-in 0.5s ease-out 0.34s both" }}>
        <button type="button" onClick={onBack} className="inline-flex items-center gap-1 text-sm text-muted-foreground transition hover:text-foreground">
          <ChevronLeft className="h-4 w-4" /> Back
        </button>
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-60 sm:px-6 sm:py-3"
          style={{ background: "var(--gradient-cta)", boxShadow: "var(--shadow-glow)" }}
        >
          {submitting ? "Securing…" : "Claim My Spot"} <Check className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}

function SuccessView({ answers, position, onClose }: { answers: Answers; position: number; onClose: () => void }) {
  const name = answers.name?.trim() || "founder";
  return (
    <div className="py-4 text-center animate-[fade-in_0.5s_ease-out]">
      <button onClick={onClose} className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-background/40 text-muted-foreground transition hover:text-foreground sm:right-4 sm:top-4">
        <X className="h-4 w-4" />
      </button>
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full"
        style={{ background: "oklch(0.7 0.25 320 / 0.15)", boxShadow: "0 0 40px oklch(0.7 0.25 320 / 0.4)" }}>
        <Check className="h-8 w-8 text-[var(--magenta)]" />
      </div>
      <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--magenta)]/40 bg-[var(--magenta)]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--magenta)]">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--magenta)]" /> Position #{position.toLocaleString()} Secured
      </div>
      <h3 className="mx-auto mt-6 max-w-md text-2xl font-bold leading-tight sm:text-3xl">
        Welcome to the list, <span className="text-[var(--magenta)]">{name}.</span>
        <br />We're glad you're here.
      </h3>
      <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
        You've officially joined the NazAI waitlist — and that means a lot to us. We're building something we believe in, and knowing you're waiting makes it even more worth building. We'll be in touch soon.
      </p>
      <div className="mx-auto mt-6 max-w-md rounded-2xl border border-border/60 p-5 text-left"
        style={{ background: "oklch(0.17 0.03 270)" }}>
        <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">Your Waitlist Position</div>
        <div className="mt-2 flex items-center gap-4">
          <div className="text-4xl font-extrabold bg-clip-text text-transparent sm:text-5xl" style={{ backgroundImage: "var(--gradient-hero)" }}>
            #{position.toLocaleString()}
          </div>
          <div>
            <div className="text-sm font-semibold">{name}</div>
            <div className="text-xs text-muted-foreground">Access confirmation will be sent by email when we launch.</div>
          </div>
        </div>
      </div>
    </div>
  );
}