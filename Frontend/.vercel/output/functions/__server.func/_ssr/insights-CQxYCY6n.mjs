import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { s as insights, A as AppShell, t as operationalTrends } from "./AppShell-BfArXEjQ.mjs";
import { C as ChartTooltip } from "./ChartTooltip-oFbL61da.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { u as useServerFn, e as getPatternInsights } from "./data.functions-DROTDFPC.mjs";
import "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
import { S as Sparkles, T as TriangleAlert, C as CircleCheck, m as Clock, o as TrendingUp } from "../_libs/lucide-react.mjs";
import { R as ResponsiveContainer, b as LineChart, C as CartesianGrid, X as XAxis, Y as YAxis, T as Tooltip, c as Line } from "../_libs/recharts.mjs";
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
const sev = {
  high: {
    icon: TriangleAlert,
    color: "text-destructive",
    bg: "bg-destructive/15",
    label: "High risk"
  },
  medium: {
    icon: Clock,
    color: "text-chart-4",
    bg: "bg-chart-4/15",
    label: "Watch"
  },
  low: {
    icon: CircleCheck,
    color: "text-emerald",
    bg: "bg-emerald/15",
    label: "Positive"
  }
};
function InsightsPage() {
  const fetchInsights = useServerFn(getPatternInsights);
  const q = useQuery({
    queryKey: ["pattern_insights"],
    queryFn: () => fetchInsights(),
    refetchInterval: 6e4
  });
  const insights$1 = reactExports.useMemo(() => {
    const live = q.data?.source === "supabase" ? q.data.data : [];
    if (live.length === 0) return insights;
    return live.map((r, i) => {
      const sevRaw = String(r.severity ?? "low").toLowerCase();
      const severity = ["low", "medium", "high"].includes(sevRaw) ? sevRaw : "low";
      const text = String(r.insight_text ?? r.summary ?? "");
      const createdAt = r.created_at ? String(r.created_at).slice(0, 10) : "";
      return {
        id: String(r.id ?? `I-${String(i + 1).padStart(2, "0")}`),
        title: text.split(/[.!?\n]/)[0].slice(0, 80) || `Insight ${i + 1}`,
        severity,
        summary: text,
        recommendation: String(r.recommendation ?? createdAt ? `Detected ${createdAt}` : "Review and action.")
      };
    });
  }, [q.data]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { title: "Insights", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid grid-cols-1 lg:grid-cols-3 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 rounded-2xl border border-border/60 bg-card p-6 relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-25 blur-3xl", style: {
          background: "var(--gradient-violet)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 text-xs uppercase tracking-wider text-accent font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
            " AI trend summary"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-semibold mt-2", children: "Operations are stabilizing after last week's staffing change." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2 max-w-2xl", children: "Resolution rate is up 7%, CSAT is holding above 4.6, and the only persistent risk is a recurring late-evening satisfaction dip." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 180, className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(LineChart, { data: operationalTrends, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { stroke: "var(--border)", strokeDasharray: "3 3", vertical: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "time", stroke: "var(--muted-foreground)", fontSize: 11, tickLine: false, axisLine: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: "var(--muted-foreground)", fontSize: 11, tickLine: false, axisLine: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { content: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartTooltip, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Line, { type: "monotone", dataKey: "csat", stroke: "var(--chart-3)", strokeWidth: 2.5, dot: {
            r: 3
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Line, { type: "monotone", dataKey: "utilization", stroke: "var(--chart-2)", strokeWidth: 2.5, dot: {
            r: 3
          } })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border/60 bg-card p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-lg font-semibold flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4 text-destructive" }),
          " Risk alerts"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-3", children: insights$1.filter((i) => i.severity === "high" || i.severity === "medium").map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "rounded-xl border border-border/60 p-3 hover:bg-muted/40 transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: i.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: i.summary })
        ] }, i.id)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5", children: insights$1.map((i) => {
      const S = sev[i.severity];
      const Icon = S.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group rounded-2xl border border-border/60 bg-card p-5 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[var(--shadow-elevated)] transition cursor-default", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium ${S.bg} ${S.color}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3 w-3" }),
            " ",
            S.label
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: i.id })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-base font-semibold mt-3", children: i.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1.5", children: i.summary }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-4 border-t border-border/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground mb-1", children: "Recommendation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-4 w-4 text-primary shrink-0 mt-0.5" }),
            " ",
            i.recommendation
          ] })
        ] })
      ] }, i.id);
    }) })
  ] });
}
export {
  InsightsPage as component
};
