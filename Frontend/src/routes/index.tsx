import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Activity, ArrowRight, Eye, EyeOff, Lock, Mail, Sparkles, User } from "lucide-react";
import { auth } from "@/lib/auth";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Smart Reporter — Sign in" },
      { name: "description", content: "Sign in to the Smart Reporter AI operations dashboard." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (auth.isAuthed()) navigate({ to: "/dashboard", replace: true });
  }, [navigate]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    setTimeout(() => {
      const result = mode === "signup"
        ? auth.register(name, email, password)
        : auth.login(email, password);
      setLoading(false);
      if (!result.ok) { setError(result.error ?? "Something went wrong."); return; }
      navigate({ to: "/dashboard", replace: true });
    }, 350);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      {/* ambient orbs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full opacity-40 blur-[120px]" style={{ background: "var(--gradient-cyan)" }} />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full opacity-30 blur-[120px]" style={{ background: "var(--gradient-violet)" }} />
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: "linear-gradient(oklch(0.9 0.05 250) 1px, transparent 1px), linear-gradient(90deg, oklch(0.9 0.05 250) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }} />

      <div className="relative z-10 min-h-screen grid lg:grid-cols-2">
        {/* Left brand panel */}
        <div className="hidden lg:flex flex-col justify-between p-12">
          <div className="flex items-center gap-3">
            <div className="grid place-items-center h-11 w-11 rounded-xl" style={{ background: "var(--gradient-cyan)", boxShadow: "var(--shadow-glow)" }}>
              <Activity className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <div className="font-display font-semibold text-lg">Smart Reporter</div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">AI Operations</div>
            </div>
          </div>

          <div className="max-w-md">
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs glass mb-6">
              <Sparkles className="h-3.5 w-3.5 text-primary" /> AI-powered reporting engine
            </div>
            <h2 className="font-display text-4xl xl:text-5xl font-semibold tracking-tight leading-[1.05]">
              Workforce intelligence <span className="gradient-text">for modern operations.</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-[15px] leading-relaxed">
              Monitor live KPIs, surface anomalies, and let the AI engine draft executive reports — all from one premium command center.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { k: "112", l: "Calls today" },
                { k: "4.6", l: "Avg CSAT" },
                { k: "94%", l: "Resolution" },
              ].map(s => (
                <div key={s.l} className="rounded-xl p-4 glass">
                  <div className="font-display text-2xl font-semibold">{s.k}</div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-xs text-muted-foreground">© 2026 Smart Reporter · Enterprise Edition</div>
        </div>

        {/* Right login card */}
        <div className="flex items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-md rounded-2xl border border-border/60 p-8 glass" style={{ boxShadow: "var(--shadow-elevated)" }}>
            <div className="lg:hidden flex items-center gap-2.5 mb-6">
              <div className="grid place-items-center h-9 w-9 rounded-lg" style={{ background: "var(--gradient-cyan)" }}>
                <Activity className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-display font-semibold">Smart Reporter</span>
            </div>

            <h1 className="font-display text-2xl font-semibold tracking-tight">
              {mode === "login" ? "Welcome back" : "Create your account"}
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              {mode === "login" ? "Sign in to access your operations command center." : "Set up Smart Reporter in seconds — no demo required."}
            </p>

            <div className="mt-6 inline-flex rounded-lg bg-muted/40 p-1 text-sm">
              <button type="button" onClick={() => { setMode("login"); setError(null); }}
                className={`px-4 py-1.5 rounded-md font-medium transition ${mode === "login" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"}`}>Sign in</button>
              <button type="button" onClick={() => { setMode("signup"); setError(null); }}
                className={`px-4 py-1.5 rounded-md font-medium transition ${mode === "signup" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"}`}>Create account</button>
            </div>

            <form onSubmit={submit} className="mt-5 space-y-4">
              {mode === "signup" && (
                <div>
                  <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Full name</label>
                  <div className="relative mt-1.5">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      required value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Jordan Smith"
                      className="w-full h-11 pl-10 pr-3 rounded-lg bg-input/60 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/60 transition"
                    />
                  </div>
                </div>
              )}
              <div>
                <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Email</label>
                <div className="relative mt-1.5">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="you@company.com"
                    className="w-full h-11 pl-10 pr-3 rounded-lg bg-input/60 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/60 transition"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Password</label>
                <div className="relative mt-1.5">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type={show ? "text" : "password"} required value={password} onChange={e => setPassword(e.target.value)}
                    placeholder={mode === "signup" ? "At least 6 characters" : "Your password"} minLength={mode === "signup" ? 6 : 1}
                    className="w-full h-11 pl-10 pr-10 rounded-lg bg-input/60 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/60 transition"
                  />
                  <button type="button" onClick={() => setShow(s => !s)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition">
                    {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="text-xs text-destructive border border-destructive/40 bg-destructive/10 rounded-md px-3 py-2">{error}</div>
              )}

              <button
                type="submit" disabled={loading}
                className="group w-full h-11 rounded-lg font-medium text-primary-foreground inline-flex items-center justify-center gap-2 transition-all hover:shadow-[var(--shadow-glow)] disabled:opacity-70"
                style={{ background: "var(--gradient-cyan)" }}
              >
                {loading
                  ? (mode === "signup" ? "Creating account…" : "Signing in…")
                  : <>{mode === "signup" ? "Create account" : "Sign in"} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></>}
              </button>
            </form>

            <p className="mt-6 text-xs text-muted-foreground text-center inline-flex items-center justify-center gap-1.5 w-full">
              <Sparkles className="h-3 w-3 text-accent" />
              Accounts are stored locally until Lovable Cloud is connected.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
