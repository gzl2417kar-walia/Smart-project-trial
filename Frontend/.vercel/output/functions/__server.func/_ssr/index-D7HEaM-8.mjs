import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { a as auth } from "./auth-DY81u7GG.mjs";
import { A as Activity, S as Sparkles, N as User, r as Mail, O as Lock, Q as EyeOff, V as Eye, t as ArrowRight } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
function LoginPage() {
  const navigate = useNavigate();
  const [mode, setMode] = reactExports.useState("login");
  const [name, setName] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [show, setShow] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (auth.isAuthed()) navigate({
      to: "/dashboard",
      replace: true
    });
  }, [navigate]);
  const submit = (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    setTimeout(() => {
      const result = mode === "signup" ? auth.register(name, email, password) : auth.login(email, password);
      setLoading(false);
      if (!result.ok) {
        setError(result.error ?? "Something went wrong.");
        return;
      }
      navigate({
        to: "/dashboard",
        replace: true
      });
    }, 350);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen w-full overflow-hidden", style: {
    background: "var(--gradient-hero)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full opacity-40 blur-[120px]", style: {
      background: "var(--gradient-cyan)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full opacity-30 blur-[120px]", style: {
      background: "var(--gradient-violet)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 opacity-[0.07]", style: {
      backgroundImage: "linear-gradient(oklch(0.9 0.05 250) 1px, transparent 1px), linear-gradient(90deg, oklch(0.9 0.05 250) 1px, transparent 1px)",
      backgroundSize: "48px 48px"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 min-h-screen grid lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex flex-col justify-between p-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid place-items-center h-11 w-11 rounded-xl", style: {
            background: "var(--gradient-cyan)",
            boxShadow: "var(--shadow-glow)"
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-6 w-6 text-primary-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-semibold text-lg", children: "Smart Reporter" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.2em] text-muted-foreground", children: "AI Operations" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs glass mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5 text-primary" }),
            " AI-powered reporting engine"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl xl:text-5xl font-semibold tracking-tight leading-[1.05]", children: [
            "Workforce intelligence ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "for modern operations." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground text-[15px] leading-relaxed", children: "Monitor live KPIs, surface anomalies, and let the AI engine draft executive reports — all from one premium command center." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-3 gap-4", children: [{
            k: "112",
            l: "Calls today"
          }, {
            k: "4.6",
            l: "Avg CSAT"
          }, {
            k: "94%",
            l: "Resolution"
          }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl p-4 glass", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-semibold", children: s.k }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-wider text-muted-foreground mt-1", children: s.l })
          ] }, s.l)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "© 2026 Smart Reporter · Enterprise Edition" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center p-6 lg:p-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md rounded-2xl border border-border/60 p-8 glass", style: {
        boxShadow: "var(--shadow-elevated)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:hidden flex items-center gap-2.5 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid place-items-center h-9 w-9 rounded-lg", style: {
            background: "var(--gradient-cyan)"
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-5 w-5 text-primary-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold", children: "Smart Reporter" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-semibold tracking-tight", children: mode === "login" ? "Welcome back" : "Create your account" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: mode === "login" ? "Sign in to access your operations command center." : "Set up Smart Reporter in seconds — no demo required." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 inline-flex rounded-lg bg-muted/40 p-1 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => {
            setMode("login");
            setError(null);
          }, className: `px-4 py-1.5 rounded-md font-medium transition ${mode === "login" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"}`, children: "Sign in" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => {
            setMode("signup");
            setError(null);
          }, className: `px-4 py-1.5 rounded-md font-medium transition ${mode === "signup" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"}`, children: "Create account" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "mt-5 space-y-4", children: [
          mode === "signup" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-medium uppercase tracking-wider text-muted-foreground", children: "Full name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, value: name, onChange: (e) => setName(e.target.value), placeholder: "e.g. Jordan Smith", className: "w-full h-11 pl-10 pr-3 rounded-lg bg-input/60 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/60 transition" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-medium uppercase tracking-wider text-muted-foreground", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", required: true, value: email, onChange: (e) => setEmail(e.target.value), placeholder: "you@company.com", className: "w-full h-11 pl-10 pr-3 rounded-lg bg-input/60 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/60 transition" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-medium uppercase tracking-wider text-muted-foreground", children: "Password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: show ? "text" : "password", required: true, value: password, onChange: (e) => setPassword(e.target.value), placeholder: mode === "signup" ? "At least 6 characters" : "Your password", minLength: mode === "signup" ? 6 : 1, className: "w-full h-11 pl-10 pr-10 rounded-lg bg-input/60 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/60 transition" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setShow((s) => !s), className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition", children: show ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }) })
            ] })
          ] }),
          error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-destructive border border-destructive/40 bg-destructive/10 rounded-md px-3 py-2", children: error }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: loading, className: "group w-full h-11 rounded-lg font-medium text-primary-foreground inline-flex items-center justify-center gap-2 transition-all hover:shadow-[var(--shadow-glow)] disabled:opacity-70", style: {
            background: "var(--gradient-cyan)"
          }, children: loading ? mode === "signup" ? "Creating account…" : "Signing in…" : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            mode === "signup" ? "Create account" : "Sign in",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-xs text-muted-foreground text-center inline-flex items-center justify-center gap-1.5 w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3 text-accent" }),
          "Accounts are stored locally until Lovable Cloud is connected."
        ] })
      ] }) })
    ] })
  ] });
}
export {
  LoginPage as component
};
