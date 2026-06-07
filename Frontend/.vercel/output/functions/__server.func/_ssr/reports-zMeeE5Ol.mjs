import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { l as liveReports, d as useSettings, A as AppShell, h as cn } from "./AppShell-BfArXEjQ.mjs";
import { R as ReportBody } from "./router-B1-3qRBV.mjs";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, d as DialogDescription } from "./dialog-C7uktFrI.mjs";
import { S as Select$1, a as SelectValue$1, b as SelectTrigger$1, c as SelectIcon, d as SelectPortal, e as SelectContent$1, f as SelectViewport, g as SelectItem$1, h as SelectItemIndicator, i as SelectItemText, j as SelectScrollUpButton$1, k as SelectScrollDownButton$1, l as SelectLabel$1, m as SelectSeparator$1 } from "../_libs/radix-ui__react-select.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { u as useServerFn, c as createReport, b as callWebhook, d as getReportsList } from "./data.functions-DROTDFPC.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
import { f as Search, S as Sparkles, F as FileText, g as Download, h as ChevronDown, i as Check, j as ChevronUp } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__number.mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "./server-CCc1zDOh.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/zod.mjs";
const Select = Select$1;
const SelectValue = SelectValue$1;
const SelectTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  SelectTrigger$1,
  {
    ref,
    className: cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectIcon, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectTrigger$1.displayName;
const SelectScrollUpButton = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  SelectScrollUpButton$1,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
const SelectScrollDownButton = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  SelectScrollDownButton$1,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
const SelectContent = reactExports.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectPortal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  SelectContent$1,
  {
    ref,
    className: cn(
      "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SelectViewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectContent$1.displayName;
const SelectLabel = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  SelectLabel$1,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectLabel$1.displayName;
const SelectItem = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  SelectItem$1,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItemIndicator, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectItem$1.displayName;
const SelectSeparator = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  SelectSeparator$1,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = SelectSeparator$1.displayName;
function extractList(r, key) {
  const v = r[key];
  if (Array.isArray(v)) return v.map(String);
  const content = r.report_content;
  if (content && typeof content === "object" && !Array.isArray(content)) {
    const inner = content[key];
    if (Array.isArray(inner)) return inner.map(String);
  }
  return [];
}
const statusStyles = {
  Ready: "bg-emerald/15 text-emerald border-emerald/30",
  Processing: "bg-primary/15 text-primary border-primary/30",
  Archived: "bg-muted text-muted-foreground border-border"
};
function ReportsPage() {
  const fallback = reactExports.useMemo(() => liveReports(), []);
  const fetchReports = useServerFn(getReportsList);
  const reportsQuery = useQuery({
    queryKey: ["reports"],
    queryFn: () => fetchReports(),
    refetchInterval: 6e4
  });
  const live = reportsQuery.data?.source === "supabase" ? reportsQuery.data.data : [];
  const reports = live.length > 0 ? live.map((r, i) => ({
    id: String(r.id ?? r.report_id ?? `RPT-${1e3 + i}`),
    date: String(r.created_at ?? r.date ?? (/* @__PURE__ */ new Date()).toISOString()).slice(0, 10),
    type: String(r.report_type ?? r.type ?? "Custom"),
    period: String(r.reporting_period ?? r.period ?? ""),
    generatedBy: String(r.generated_by ?? "AI Engine"),
    status: String(r.status ?? "Ready"),
    summary: typeof r.report_content === "string" ? r.report_content : r.report_content && typeof r.report_content === "object" && "summary" in r.report_content ? String(r.report_content.summary ?? "") : String(r.summary ?? ""),
    observations: extractList(r, "observations"),
    risks: extractList(r, "risks"),
    recommendations: extractList(r, "recommendations"),
    insights: extractList(r, "insights")
  })) : fallback;
  const settings = useSettings();
  const trigger = useServerFn(callWebhook);
  const createReportFn = useServerFn(createReport);
  const [generating, setGenerating] = reactExports.useState(false);
  const generate = async () => {
    setGenerating(true);
    toast.info("Generating report…");
    try {
      const res = await createReportFn();
      if (res.source === "supabase") {
        toast.success("Report ready");
        await reportsQuery.refetch();
      } else {
        toast.error(`Could not create report${res.error ? `: ${res.error}` : ""}`);
      }
      const webhook = settings.integrations["Make.com"];
      if (webhook?.url) {
        trigger({
          data: {
            url: webhook.url,
            payload: {
              source: "smart-reporter",
              action: "generate_report",
              at: (/* @__PURE__ */ new Date()).toISOString()
            }
          }
        }).then((r) => {
          if (r?.ok) toast.success("Email sent");
          else toast.warning("Report saved, email failed");
        }).catch(() => toast.warning("Report saved, email failed"));
      }
    } catch (e) {
      toast.error(`Report generation failed: ${e instanceof Error ? e.message : "request error"}`);
    } finally {
      setGenerating(false);
    }
  };
  const [q, setQ] = reactExports.useState("");
  const [filter, setFilter] = reactExports.useState("all");
  const [selected, setSelected] = reactExports.useState(null);
  const filtered = reactExports.useMemo(() => reports.filter((r) => {
    if (filter !== "all" && r.type !== filter) return false;
    if (q && !`${r.id} ${r.period} ${r.type} ${r.generatedBy}`.toLowerCase().includes(q.toLowerCase())) return false;
    return true;
  }), [q, filter, reports]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { title: "Reports", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-border/60 bg-card p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Search by ID, period, generator…", className: "w-full h-10 pl-10 pr-3 rounded-lg bg-muted/40 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: filter, onValueChange: setFilter, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-full md:w-48", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All types" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Weekly", children: "Weekly" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Monthly", children: "Monthly" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Custom", children: "Custom" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: generate, disabled: generating, className: "h-10 px-4 rounded-lg font-medium text-primary-foreground inline-flex items-center gap-2 transition hover:shadow-[var(--shadow-glow)] disabled:opacity-60", style: {
        background: "var(--gradient-cyan)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }),
        " ",
        generating ? "Generating…" : "Generate report"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 rounded-2xl border border-border/60 bg-card overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "text-[11px] uppercase tracking-wider text-muted-foreground border-b border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left font-medium px-5 py-3", children: "Report ID" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left font-medium px-3 py-3", children: "Generated" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left font-medium px-3 py-3", children: "Type" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left font-medium px-3 py-3", children: "Period" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left font-medium px-3 py-3", children: "Generated by" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left font-medium px-3 py-3", children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right font-medium px-5 py-3", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        filtered.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/40 last:border-0 hover:bg-muted/40 transition cursor-pointer", onClick: () => r.status === "Ready" || r.status === "Archived" ? setSelected(r) : null, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3 font-medium", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-4 w-4 text-primary" }),
            " ",
            r.id
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3 text-muted-foreground", children: r.date }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3", children: r.type }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3 text-muted-foreground", children: r.period }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3", children: r.generatedBy }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex items-center px-2 py-0.5 rounded-full border text-[11px] font-medium ${statusStyles[r.status]}`, children: r.status }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
            e.stopPropagation();
          }, className: "h-8 w-8 inline-grid place-items-center rounded-md hover:bg-muted/70 transition", title: "Download", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }) }) })
        ] }, r.id)),
        filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 7, className: "px-5 py-10 text-center text-muted-foreground text-sm", children: "No reports match your filters." }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: !!selected, onOpenChange: (o) => !o && setSelected(null), children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { className: "max-w-2xl bg-card border-border/60", children: selected && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "font-display text-xl", children: [
          selected.id,
          " — ",
          selected.type,
          " Report"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogDescription, { children: [
          selected.period,
          " · Generated by ",
          selected.generatedBy
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ReportBody, { report: selected })
    ] }) }) })
  ] });
}
export {
  ReportsPage as component
};
