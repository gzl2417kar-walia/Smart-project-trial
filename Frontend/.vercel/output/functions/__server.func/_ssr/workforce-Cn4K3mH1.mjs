import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as agents, u as useNow, b as buildActiveCalls, A as AppShell, S as StatusBadge, f as formatDuration, w as weeklySchedule, c as AgentSheet, r as relativeTime } from "./AppShell-BfArXEjQ.mjs";
import { C as ChartTooltip } from "./ChartTooltip-oFbL61da.mjs";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, d as DialogDescription } from "./dialog-C7uktFrI.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { u as useServerFn, g as getAgentsList } from "./data.functions-DROTDFPC.mjs";
import "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
import { U as Users, S as Sparkles, a as UserCheck, A as Activity, P as Phone } from "../_libs/lucide-react.mjs";
import { R as ResponsiveContainer, B as BarChart, C as CartesianGrid, X as XAxis, Y as YAxis, T as Tooltip, L as Legend, a as Bar } from "../_libs/recharts.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "./auth-DY81u7GG.mjs";
import "../_libs/radix-ui__react-dropdown-menu.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-menu.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-roving-focus.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/tanstack__query-core.mjs";
import "./server-CCc1zDOh.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/zod.mjs";
import "../_libs/lodash.mjs";
import "../_libs/react-smooth.mjs";
import "../_libs/prop-types.mjs";
import "../_libs/fast-equals.mjs";
import "../_libs/tiny-invariant.mjs";
import "../_libs/react-is.mjs";
import "../_libs/d3-shape.mjs";
import "../_libs/d3-path.mjs";
import "../_libs/victory-vendor.mjs";
import "../_libs/d3-scale.mjs";
import "../_libs/internmap.mjs";
import "../_libs/d3-array.mjs";
import "../_libs/d3-time-format.mjs";
import "../_libs/d3-time.mjs";
import "../_libs/d3-interpolate.mjs";
import "../_libs/d3-color.mjs";
import "../_libs/d3-format.mjs";
import "../_libs/recharts-scale.mjs";
import "../_libs/decimal.js-light.mjs";
import "../_libs/eventemitter3.mjs";
function WorkforcePage() {
  const fetchAgents = useServerFn(getAgentsList);
  const agentsQuery = useQuery({
    queryKey: ["agents"],
    queryFn: () => fetchAgents(),
    refetchInterval: 6e4
  });
  const agents$1 = reactExports.useMemo(() => {
    const live = agentsQuery.data?.source === "supabase" ? agentsQuery.data.data : [];
    if (live.length === 0) return agents;
    return live.map((r, i) => {
      const name = String(r.agent_name ?? r.name ?? `Agent ${i + 1}`);
      const statusRaw = String(r.status ?? "Available");
      const status = ["Available", "On Call", "Break", "Offline"].includes(statusRaw) ? statusRaw : "Available";
      const num = (v, d = 0) => typeof v === "number" ? v : typeof v === "string" && !isNaN(Number(v)) ? Number(v) : d;
      return {
        id: String(r.id ?? `AG-${String(i + 1).padStart(2, "0")}`),
        name,
        avatar: name.split(" ").map((p) => p[0]).filter(Boolean).slice(0, 2).join("").toUpperCase() || "AG",
        calls: num(r.calls_handled ?? r.calls),
        tickets: num(r.tickets_resolved ?? r.tickets),
        csat: num(r.csat ?? r.average_csat, 0),
        resolutionRate: num(r.resolution_rate, 0),
        status,
        shift: String(r.shift_timing ?? r.shift ?? "—")
      };
    });
  }, [agentsQuery.data]);
  const available = agents$1.filter((a) => a.status === "Available").length;
  const onCall = agents$1.filter((a) => a.status === "On Call").length;
  const onBreak = agents$1.filter((a) => a.status === "Break").length;
  const offline = agents$1.filter((a) => a.status === "Offline").length;
  const coverage = Math.round((available + onCall) / agents$1.length * 100);
  const [filter, setFilter] = reactExports.useState("all");
  const [selectedAgent, setSelectedAgent] = reactExports.useState(null);
  const [activeCallDetail, setActiveCallDetail] = reactExports.useState(null);
  const now = useNow();
  const activeCalls = reactExports.useMemo(() => buildActiveCalls(), []);
  const callByAgent = reactExports.useMemo(() => Object.fromEntries(activeCalls.map((c) => [c.agentId, c])), [activeCalls]);
  const displayed = reactExports.useMemo(() => filter === "all" ? agents$1 : agents$1.filter((a) => a.status === filter), [filter]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { title: "Workforce", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid grid-cols-2 md:grid-cols-5 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CoverageCard, { label: "All", value: agents$1.length, tone: "cyan", active: filter === "all", onClick: () => setFilter("all") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CoverageCard, { label: "Available", value: available, tone: "emerald", active: filter === "Available", onClick: () => setFilter("Available") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CoverageCard, { label: "On Call", value: onCall, tone: "cyan", active: filter === "On Call", onClick: () => setFilter("On Call") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CoverageCard, { label: "On Break", value: onBreak, tone: "amber", active: filter === "Break", onClick: () => setFilter("Break") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CoverageCard, { label: "Offline", value: offline, tone: "muted", active: filter === "Offline", onClick: () => setFilter("Offline") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid grid-cols-1 xl:grid-cols-3 gap-5 mt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "xl:col-span-2 rounded-2xl border border-border/60 bg-card overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 border-b border-border/60 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold", children: "Agent shifts" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              filter === "all" ? "All agents" : `Filtered: ${filter}`,
              " — click an On Call row to view the live customer."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-3.5 w-3.5" }),
            " ",
            displayed.length,
            " shown"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "text-[11px] uppercase tracking-wider text-muted-foreground border-b border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left font-medium px-5 py-3", children: "Agent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left font-medium px-3 py-3", children: "Shift" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left font-medium px-3 py-3", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left font-medium px-3 py-3", children: "Customer" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left font-medium px-3 py-3", children: "Phone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right font-medium px-5 py-3", children: "Duration" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
            displayed.map((a) => {
              const call = callByAgent[a.id];
              const isOnCall = a.status === "On Call" && !!call;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { onClick: () => isOnCall ? setActiveCallDetail(call) : setSelectedAgent(a), className: "border-b border-border/40 last:border-0 hover:bg-muted/40 cursor-pointer transition", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-full grid place-items-center text-xs font-semibold text-primary-foreground", style: {
                    background: "var(--gradient-violet)"
                  }, children: a.avatar }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: a.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: a.id })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3 text-muted-foreground", children: a.shift }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: a.status }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3", children: isOnCall ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: call.customer }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "—" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3 font-mono text-xs", children: isOnCall ? call.phone : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "—" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3 text-right tabular-nums", children: isOnCall ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-medium", children: formatDuration(Math.floor((now.getTime() - call.startedAt) / 1e3)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "—" }) })
              ] }, a.id);
            }),
            displayed.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 6, className: "px-5 py-8 text-center text-muted-foreground text-sm", children: "No agents in this status." }) })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border/60 p-5 relative overflow-hidden", style: {
          background: "var(--gradient-card)"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-30 blur-2xl", style: {
            background: "var(--gradient-cyan)"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 text-xs uppercase tracking-wider text-primary font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
              " AI shift recommendation"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold mt-2", children: "Reinforce evening coverage" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/85 mt-2", children: "Add 1 floating agent between 19:00 and 21:00 to address the late-evening CSAT dip detected over the last 7 days." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "mt-4 h-9 px-4 rounded-lg font-medium text-primary-foreground text-sm inline-flex items-center gap-1.5", style: {
              background: "var(--gradient-cyan)"
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(UserCheck, { className: "h-4 w-4" }),
              " Apply recommendation"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border/60 bg-card p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold", children: "Current coverage" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            coverage,
            "% of agents actively working"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 h-3 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full rounded-full transition-all", style: {
            width: `${coverage}%`,
            background: "var(--gradient-cyan)"
          } }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex justify-between text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "0%" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-foreground", children: [
              coverage,
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "100%" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-6 rounded-2xl border border-border/60 bg-card p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold", children: "Weekly schedule preview" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Agents scheduled per shift block" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 260, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: weeklySchedule, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { stroke: "var(--border)", strokeDasharray: "3 3", vertical: false }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "day", stroke: "var(--muted-foreground)", fontSize: 11, tickLine: false, axisLine: false }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: "var(--muted-foreground)", fontSize: 11, tickLine: false, axisLine: false }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { content: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartTooltip, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { iconType: "circle", wrapperStyle: {
          fontSize: 12
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "morning", stackId: "a", fill: "var(--chart-1)", radius: [0, 0, 0, 0] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "afternoon", stackId: "a", fill: "var(--chart-2)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "evening", stackId: "a", fill: "var(--chart-3)", radius: [4, 4, 0, 0] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AgentSheet, { agent: selectedAgent, onClose: () => setSelectedAgent(null) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: !!activeCallDetail, onOpenChange: (o) => !o && setActiveCallDetail(null), children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { className: "max-w-md bg-card border-border/60", children: activeCallDetail && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-lg grid place-items-center text-primary-foreground", style: {
          background: "var(--gradient-cyan)"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-5 w-5 animate-pulse" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "font-display", children: [
            "Live call · ",
            activeCallDetail.agentName
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "Click outside to close." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border/60 p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-wider text-muted-foreground", children: "Customer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg font-semibold mt-0.5", children: activeCallDetail.customer }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground inline-flex items-center gap-1.5 mt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: activeCallDetail.phone })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border/60 p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-wider text-muted-foreground", children: "Duration" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-semibold tabular-nums mt-1", children: formatDuration(Math.floor((now.getTime() - activeCallDetail.startedAt) / 1e3)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border/60 p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-wider text-muted-foreground", children: "Started" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium mt-1.5", children: relativeTime(activeCallDetail.startedAt, now.getTime()) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border/60 p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-wider text-muted-foreground mb-1", children: "Topic" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm", children: activeCallDetail.topic })
        ] })
      ] })
    ] }) }) })
  ] });
}
function CoverageCard({
  label,
  value,
  tone,
  active,
  onClick
}) {
  const toneClass = tone === "emerald" ? "text-emerald" : tone === "cyan" ? "text-primary" : tone === "amber" ? "text-chart-4" : "text-muted-foreground";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick, type: "button", className: `text-left rounded-2xl border bg-card p-5 transition hover:-translate-y-0.5 hover:border-primary/40 ${active ? "border-primary shadow-[var(--shadow-glow)]" : "border-border/60"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-wider text-muted-foreground font-medium", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `font-display text-3xl font-semibold mt-2 ${toneClass}`, children: value })
  ] });
}
export {
  WorkforcePage as component
};
