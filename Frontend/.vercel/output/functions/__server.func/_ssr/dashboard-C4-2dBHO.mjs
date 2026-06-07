import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { u as useServerFn, a as getKpiMetrics } from "./data.functions-DROTDFPC.mjs";
import { l as liveReports, b as buildActiveCalls, v as buildMissedCalls, x as buildRecentCalls, A as AppShell, t as operationalTrends, a as agents, S as StatusBadge, s as insights, c as AgentSheet, u as useNow, f as formatDuration, r as relativeTime, h as cn } from "./AppShell-BfArXEjQ.mjs";
import { P as Provider, R as Root3, T as Trigger, a as Portal, C as Content2 } from "../_libs/radix-ui__react-tooltip.mjs";
import { C as ChartTooltip } from "./ChartTooltip-oFbL61da.mjs";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, d as DialogDescription } from "./dialog-C7uktFrI.mjs";
import "../_libs/seroval.mjs";
import "../_libs/sonner.mjs";
import { P as Phone, p as Ticket, q as Smile, U as Users, r as Mail, s as PhoneMissed, S as Sparkles, t as ArrowRight, T as TriangleAlert, m as Clock, C as CircleCheck, u as PhoneCall, v as PhoneOff, X, o as TrendingUp, w as TrendingDown } from "../_libs/lucide-react.mjs";
import { R as ResponsiveContainer, A as AreaChart, C as CartesianGrid, X as XAxis, Y as YAxis, T as Tooltip$1, d as Area, b as LineChart, c as Line, B as BarChart, a as Bar } from "../_libs/recharts.mjs";
import "../_libs/tanstack__query-core.mjs";
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
import "./server-CCc1zDOh.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/zod.mjs";
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
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
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
const TooltipProvider = Provider;
const Tooltip = Root3;
const TooltipTrigger = Trigger;
const TooltipContent = reactExports.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-tooltip-content-transform-origin)",
      className
    ),
    ...props
  }
) }));
TooltipContent.displayName = Content2.displayName;
const toneMap = {
  cyan: "var(--gradient-cyan)",
  violet: "var(--gradient-violet)",
  emerald: "linear-gradient(135deg, oklch(0.74 0.16 165), oklch(0.6 0.14 180))",
  amber: "linear-gradient(135deg, oklch(0.78 0.15 75),  oklch(0.7 0.18 50))",
  rose: "linear-gradient(135deg, oklch(0.7 0.2 340),   oklch(0.6 0.22 10))"
};
function KpiCard({ label, value, delta, icon: Icon, tone = "cyan", hint }) {
  const up = delta >= 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipProvider, { delayDuration: 150, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tooltip, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[var(--shadow-elevated)] cursor-default", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-40", style: { background: toneMap[tone] } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground font-medium", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl font-semibold mt-2 tracking-tight", children: value })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl grid place-items-center text-primary-foreground", style: { background: toneMap[tone] }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-1.5 text-xs relative", children: [
        up ? /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-3.5 w-3.5 text-emerald" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "h-3.5 w-3.5 text-destructive" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: up ? "text-emerald font-medium" : "text-destructive font-medium", children: [
          up ? "+" : "",
          delta,
          "%"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "vs last period" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipContent, { side: "bottom", className: "max-w-xs", children: hint ?? `${label}: trending ${up ? "up" : "down"} ${Math.abs(delta)}% over the last 7 days.` })
  ] }) });
}
function Dashboard() {
  const [selectedAgent, setSelectedAgent] = reactExports.useState(null);
  const [reportOpen, setReportOpen] = reactExports.useState(false);
  const [kpiDialog, setKpiDialog] = reactExports.useState(null);
  const reports = reactExports.useMemo(() => liveReports(), []);
  const latest = reports.find((r) => r.status === "Ready");
  const activeCalls = reactExports.useMemo(() => buildActiveCalls(), []);
  const missedCalls = reactExports.useMemo(() => buildMissedCalls(), []);
  const recentCalls = reactExports.useMemo(() => buildRecentCalls(12), []);
  const fetchKpis = useServerFn(getKpiMetrics);
  const kpiQuery = useQuery({
    queryKey: ["kpi_metrics"],
    queryFn: () => fetchKpis(),
    staleTime: 5 * 6e4,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    placeholderData: (prev) => prev
  });
  const live = kpiQuery.data?.source === "supabase" ? kpiQuery.data.data ?? null : null;
  const toNum = (x) => {
    if (typeof x === "number") return x;
    if (typeof x === "string" && x.trim() !== "" && !isNaN(Number(x))) return Number(x);
    return "—";
  };
  const v = {
    totalCalls: live ? toNum(live.total_calls_handled) : "—",
    ticketsResolved: live ? toNum(live.tickets_resolved) : "—",
    avgCsat: live ? toNum(live.average_csat) : "—",
    activeAgents: live ? toNum(live.active_agents) : "—",
    emailsPending: live ? toNum(live.emails_pending) : "—",
    missedCalls: live ? toNum(live.missed_calls) : "—"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { title: "Dashboard", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(LiveStatusBanner, { state: kpiQuery.isLoading ? "loading" : kpiQuery.data?.source ?? "unavailable" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onClick: () => setKpiDialog("calls"), className: "cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { label: "Total Calls", value: v.totalCalls, delta: 6, icon: Phone, tone: "cyan", hint: "Click to view recent inbound calls." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { label: "Tickets Resolved", value: v.ticketsResolved, delta: 9, icon: Ticket, tone: "violet", hint: "Tickets resolved across all channels today." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { label: "Average CSAT", value: v.avgCsat, delta: 3, icon: Smile, tone: "emerald", hint: "Team CSAT trending up over the last 24h." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onClick: () => setKpiDialog("active"), className: "cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { label: "Active Agents", value: v.activeAgents, delta: 0, icon: Users, tone: "cyan", hint: "Click to view who is currently online." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { label: "Emails Pending", value: v.emailsPending, delta: -12, icon: Mail, tone: "amber", hint: "Emails awaiting first response." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onClick: () => setKpiDialog("missed"), className: "cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { label: "Missed Calls", value: v.missedCalls, delta: 2, icon: PhoneMissed, tone: "rose", hint: "Click to view missed callers and times." }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid grid-cols-1 xl:grid-cols-3 gap-5 mt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "xl:col-span-2 rounded-2xl border border-border/60 bg-card p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold", children: "Operational trends" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Calls handled and tickets resolved across today's shifts" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5 text-xs", children: [{
            label: "Calls",
            color: "var(--chart-1)"
          }, {
            label: "Tickets",
            color: "var(--chart-2)"
          }].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-muted/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full", style: {
              background: l.color
            } }),
            l.label
          ] }, l.label)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 280, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AreaChart, { data: operationalTrends, margin: {
          top: 10,
          right: 10,
          left: -20,
          bottom: 0
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "g1", x1: "0", y1: "0", x2: "0", y2: "1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "var(--chart-1)", stopOpacity: 0.5 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "var(--chart-1)", stopOpacity: 0 })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "g2", x1: "0", y1: "0", x2: "0", y2: "1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "var(--chart-2)", stopOpacity: 0.4 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "var(--chart-2)", stopOpacity: 0 })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { stroke: "var(--border)", strokeDasharray: "3 3", vertical: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "time", stroke: "var(--muted-foreground)", fontSize: 11, tickLine: false, axisLine: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: "var(--muted-foreground)", fontSize: 11, tickLine: false, axisLine: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip$1, { content: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartTooltip, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", dataKey: "calls", stroke: "var(--chart-1)", strokeWidth: 2.5, fill: "url(#g1)", isAnimationActive: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", dataKey: "tickets", stroke: "var(--chart-2)", strokeWidth: 2.5, fill: "url(#g2)", isAnimationActive: false })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border/60 bg-card p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold", children: "CSAT trend" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Customer satisfaction across the day" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 130, className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(LineChart, { data: operationalTrends, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip$1, { content: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartTooltip, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Line, { type: "monotone", dataKey: "csat", stroke: "var(--chart-3)", strokeWidth: 2.5, dot: {
            r: 3,
            fill: "var(--chart-3)"
          }, activeDot: {
            r: 5
          }, isAnimationActive: false })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border/60 mt-4 pt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-sm font-semibold mb-2", children: "Agent utilization" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 120, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: operationalTrends, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip$1, { content: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartTooltip, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "utilization", fill: "var(--chart-2)", radius: [4, 4, 0, 0], isAnimationActive: false })
          ] }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid grid-cols-1 xl:grid-cols-3 gap-5 mt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "xl:col-span-2 rounded-2xl border border-border/60 bg-card overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-5 border-b border-border/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold", children: "Team performance" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Click an agent to view live details" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
            agents.length,
            " agents"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "text-[11px] uppercase tracking-wider text-muted-foreground border-b border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left font-medium px-5 py-3", children: "Agent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right font-medium px-3 py-3", children: "Calls" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right font-medium px-3 py-3", children: "Tickets" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right font-medium px-3 py-3", children: "CSAT" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left  font-medium px-3 py-3", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left  font-medium px-5 py-3", children: "Shift" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: agents.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { onClick: () => setSelectedAgent(a), className: "border-b border-border/40 last:border-0 hover:bg-muted/40 cursor-pointer transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-full grid place-items-center text-xs font-semibold text-primary-foreground", style: {
                background: "var(--gradient-violet)"
              }, children: a.avatar }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: a.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: a.id })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3 text-right tabular-nums", children: a.calls }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3 text-right tabular-nums", children: a.tickets }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3 text-right tabular-nums font-medium text-emerald", children: a.csat }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: a.status }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3 text-muted-foreground text-xs", children: a.shift })
          ] }, a.id)) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border/60 bg-card p-5 group hover:border-primary/40 transition cursor-pointer", onClick: () => setReportOpen(true), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs uppercase tracking-wider text-primary font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
            " Latest AI report"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-lg font-semibold mt-2", children: [
            latest.id,
            " · ",
            latest.type
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: latest.period }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-3 text-foreground/85 line-clamp-3", children: latest.summary }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 inline-flex items-center gap-1 text-sm text-primary font-medium", children: [
            "Open report ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border/60 bg-card p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold", children: "Pattern insights" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent/15 text-accent", children: "AI" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: insights.slice(0, 3).map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 p-3 rounded-xl bg-muted/30 hover:bg-muted/60 transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5", children: i.severity === "high" ? /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4 text-destructive" }) : i.severity === "medium" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 text-chart-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-emerald" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: i.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5 line-clamp-2", children: i.summary })
            ] })
          ] }, i.id)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AgentSheet, { agent: selectedAgent, onClose: () => setSelectedAgent(null) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: kpiDialog !== null, onOpenChange: (o) => !o && setKpiDialog(null), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-2xl bg-card border-border/60", children: [
      kpiDialog === "calls" && /* @__PURE__ */ jsxRuntimeExports.jsx(KpiDialogShell, { title: "Recent calls", icon: PhoneCall, description: "Latest inbound calls handled by your team today.", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CallList, { rows: recentCalls }) }),
      kpiDialog === "active" && /* @__PURE__ */ jsxRuntimeExports.jsx(KpiDialogShell, { title: "Active agents", icon: Users, description: "Agents currently online and reachable.", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ActiveAgentList, { active: activeCalls }) }),
      kpiDialog === "missed" && /* @__PURE__ */ jsxRuntimeExports.jsx(KpiDialogShell, { title: "Missed calls", icon: PhoneOff, description: "Numbers that hung up before being connected.", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MissedList, { rows: missedCalls }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: reportOpen, onOpenChange: setReportOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-2xl bg-card border-border/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "font-display text-xl", children: [
          latest.id,
          " — ",
          latest.type,
          " Report"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogDescription, { children: [
          latest.period,
          " · Generated by ",
          latest.generatedBy
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ReportBody, { report: latest })
    ] }) })
  ] });
}
function ReportBody({
  report
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 max-h-[60vh] overflow-y-auto pr-2 -mr-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Executive summary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed", children: report.summary }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "KPI observations", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bullets, { items: report.observations }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Operational risks", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bullets, { items: report.risks, icon: "alert" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Recommendations", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bullets, { items: report.recommendations, icon: "check" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "AI-generated insights", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bullets, { items: report.insights, icon: "sparkles" }) })
  ] });
}
function LiveStatusBanner({
  state
}) {
  if (state === "supabase" || state === "loading") return null;
  const text = state === "empty" ? "No KPI rows in Supabase yet — showing sample values. New rows will populate automatically." : "Database not reachable — showing sample values.";
  const tone = state === "empty" ? "text-chart-4" : "text-destructive";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `mb-4 text-xs ${tone} inline-flex items-center gap-2`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-current opacity-70 animate-pulse" }),
    text
  ] });
}
function Section({
  title,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[11px] uppercase tracking-wider text-muted-foreground font-medium mb-2", children: title }),
    children
  ] });
}
function Bullets({
  items,
  icon
}) {
  if (!items.length) return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground italic", children: "No items." });
  const Icon = icon === "alert" ? TriangleAlert : icon === "check" ? CircleCheck : icon === "sparkles" ? Sparkles : X;
  const color = icon === "alert" ? "text-destructive" : icon === "check" ? "text-emerald" : icon === "sparkles" ? "text-accent" : "text-primary";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: items.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2.5 text-sm", children: [
    icon ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `h-4 w-4 mt-0.5 shrink-0 ${color}` }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/85", children: t })
  ] }, i)) });
}
function KpiDialogShell({
  title,
  description,
  icon: Icon,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-lg grid place-items-center text-primary-foreground", style: {
        background: "var(--gradient-cyan)"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display text-xl", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: description })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-[60vh] overflow-y-auto pr-2 -mr-2", children })
  ] });
}
function CallList({
  rows
}) {
  const now = useNow(15e3);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-border/60", children: rows.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "py-3 flex items-center gap-4 hover:bg-muted/40 px-2 -mx-2 rounded transition", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-full grid place-items-center text-xs font-semibold text-primary-foreground", style: {
      background: "var(--gradient-violet)"
    }, children: r.agentName.split(" ").map((p) => p[0]).slice(0, 2).join("") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium truncate", children: r.customer }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground font-mono", children: r.phone })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground hidden sm:block", children: r.agentName }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground tabular-nums", children: formatDuration(r.durationSec) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground whitespace-nowrap min-w-[88px] text-right", children: relativeTime(r.at, now.getTime()) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] uppercase px-2 py-0.5 rounded-full border ${r.outcome === "Resolved" ? "bg-emerald/15 text-emerald border-emerald/30" : r.outcome === "Escalated" ? "bg-destructive/15 text-destructive border-destructive/30" : "bg-chart-4/15 text-chart-4 border-chart-4/30"}`, children: r.outcome })
  ] }, r.id)) });
}
function ActiveAgentList({
  active
}) {
  const activeAgents = agents.filter((a) => a.status !== "Offline");
  const byId = Object.fromEntries(active.map((c) => [c.agentId, c]));
  const now = useNow();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-border/60", children: activeAgents.map((a) => {
    const c = byId[a.id];
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "py-3 flex items-center gap-3 px-2 -mx-2 rounded hover:bg-muted/40 transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-full grid place-items-center text-xs font-semibold text-primary-foreground", style: {
        background: "var(--gradient-violet)"
      }, children: a.avatar }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium truncate", children: a.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground", children: [
          a.id,
          " · ",
          a.shift
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: a.status }),
      c && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground hidden md:flex flex-col items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: c.phone }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tabular-nums", children: formatDuration(Math.floor((now.getTime() - c.startedAt) / 1e3)) })
      ] })
    ] }, a.id);
  }) });
}
function MissedList({
  rows
}) {
  const now = useNow(15e3);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-border/60", children: rows.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "py-3 flex items-center gap-4 px-2 -mx-2 rounded hover:bg-muted/40 transition", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-lg grid place-items-center bg-destructive/15 text-destructive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PhoneOff, { className: "h-4 w-4" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium truncate", children: r.customer }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground font-mono", children: r.phone })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border", children: r.reason }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground whitespace-nowrap min-w-[88px] text-right", children: relativeTime(r.at, now.getTime()) })
  ] }, r.id)) });
}
export {
  ReportBody,
  Dashboard as component
};
