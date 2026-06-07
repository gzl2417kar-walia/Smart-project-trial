import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { d as useSettings, A as AppShell, e as updateSettings, g as updateIntegration, h as cn } from "./AppShell-BfArXEjQ.mjs";
import { S as Switch$1, a as SwitchThumb } from "../_libs/radix-ui__react-switch.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { u as useServerFn, p as pingWebhook, a as getKpiMetrics } from "./data.functions-DROTDFPC.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import "../_libs/seroval.mjs";
import { G as Globe, W as Webhook, Z as Zap, b as Sheet, K as Key, c as ShieldCheck, M as Moon, d as Sun, D as Database, C as CircleCheck, e as PlugZap, B as Bug } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-use-previous.mjs";
import "./server-CCc1zDOh.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/zod.mjs";
import "../_libs/tanstack__query-core.mjs";
const Switch = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Switch$1,
  {
    className: cn(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    ),
    ...props,
    ref,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      SwitchThumb,
      {
        className: cn(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Switch.displayName = Switch$1.displayName;
function SettingsPage() {
  const settings = useSettings();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { title: "Settings", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { title: "Integrations", icon: Globe, desc: "Connect Smart Reporter to your data sources and automation stack.", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SupabaseRow, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(IntegrationRow, { icon: Webhook, name: "Make.com", desc: "Workflow automation webhook", placeholder: "https://hook.make.com/...", testable: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(IntegrationRow, { icon: Zap, name: "n8n", desc: "Operational insights webhook", placeholder: "https://your-instance.n8n.cloud/webhook/...", testable: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(IntegrationRow, { icon: Sheet, name: "Google Sheets", desc: "Sync reports to a sheet (optional)", placeholder: "Sheet ID", optional: true })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { title: "API configuration", icon: Key, desc: "Smart Reporter uses the managed Lovable Cloud backend.", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MaskedField, { label: "Database", secretName: "Lovable Cloud (managed)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MaskedField, { label: "Database key", secretName: "Lovable Cloud (managed)", masked: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 rounded-xl border border-border/60 bg-muted/30 p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4 text-emerald shrink-0 mt-0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Credentials are managed by Lovable Cloud and never exposed to the browser. No manual configuration needed." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { title: "Appearance", icon: settings.theme === "dark" ? Moon : Sun, desc: "Personalize the look of your dashboard.", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { label: "Dark theme", desc: "Enterprise dark mode (recommended)", checked: settings.theme === "dark", onChange: (v) => {
        updateSettings({
          theme: v ? "dark" : "light"
        });
        toast.success(`Switched to ${v ? "dark" : "light"} theme`);
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { label: "Compact layout", desc: "Reduce paddings across tables", checked: settings.compact, onChange: (v) => {
        updateSettings({
          compact: v
        });
        toast.success(`Compact layout ${v ? "enabled" : "disabled"}`);
      } })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { title: "Notifications", icon: Database, desc: "Choose what gets surfaced and where.", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { label: "Email digests", desc: "Daily summary at 18:00", checked: settings.emailDigests, onChange: (v) => {
        updateSettings({
          emailDigests: v
        });
        toast.success(`Email digests ${v ? "on" : "off"}`);
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { label: "Push notifications", desc: "Browser push for critical events", checked: settings.pushNotifications, onChange: (v) => {
        updateSettings({
          pushNotifications: v
        });
        toast.success(`Push notifications ${v ? "on" : "off"}`);
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { label: "AI risk alerts", desc: "Instant alerts on anomalies", checked: settings.aiRiskAlerts, onChange: (v) => {
        updateSettings({
          aiRiskAlerts: v
        });
        toast.success(`AI risk alerts ${v ? "on" : "off"}`);
      } })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DebugPanel, {})
  ] }) });
}
function Card({
  title,
  icon: Icon,
  desc,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border/60 bg-card p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-lg grid place-items-center text-primary-foreground", style: {
        background: "var(--gradient-cyan)"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: desc })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 space-y-3", children })
  ] });
}
function IntegrationRow({
  icon: Icon,
  name,
  desc,
  placeholder,
  testable,
  optional
}) {
  const settings = useSettings();
  const state = settings.integrations[name] ?? {
    url: "",
    connected: false
  };
  const ping = useServerFn(pingWebhook);
  const [testing, setTesting] = reactExports.useState(false);
  const toggleConnect = () => {
    if (state.connected) {
      updateIntegration(name, {
        connected: false
      });
      toast.info(`${name} disconnected`);
    } else {
      if (!state.url.trim()) {
        toast.error(`Add a ${name} URL first`);
        return;
      }
      updateIntegration(name, {
        connected: true
      });
      toast.success(`${name} connected`);
    }
  };
  const handleTest = async () => {
    if (!state.url.trim()) {
      toast.error(`Add a ${name} URL first`);
      return;
    }
    setTesting(true);
    try {
      const res = await ping({
        data: {
          url: state.url
        }
      });
      if (res.ok) toast.success(`${name} responded (HTTP ${res.status})`);
      else toast.error(`${name} test failed${res.status ? ` (HTTP ${res.status})` : ""}${res.error ? `: ${res.error}` : ""}`);
    } catch (e) {
      toast.error(`${name} test failed: ${e instanceof Error ? e.message : "request error"}`);
    } finally {
      setTesting(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border/60 p-4 hover:border-primary/40 transition", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 grid place-items-center rounded-md bg-muted/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-medium flex items-center gap-2", children: [
          name,
          optional && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-muted text-muted-foreground", children: "Optional" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: desc })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full inline-flex items-center gap-1 ${state.connected ? "bg-emerald/15 text-emerald" : "bg-muted text-muted-foreground"}`, children: [
        state.connected && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3 w-3" }),
        " ",
        state.connected ? "Connected" : "Not connected"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: state.url, onChange: (e) => updateIntegration(name, {
        url: e.target.value
      }), placeholder, className: "flex-1 h-9 px-3 rounded-md bg-input/60 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" }),
      testable && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleTest, disabled: testing, className: "h-9 px-3 rounded-md text-sm font-medium border border-border hover:bg-muted/60 transition inline-flex items-center gap-1.5 disabled:opacity-50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PlugZap, { className: "h-3.5 w-3.5" }),
        " ",
        testing ? "Testing…" : "Test"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: toggleConnect, className: `h-9 px-3 rounded-md text-sm font-medium border transition ${state.connected ? "border-border hover:bg-muted/60" : "border-transparent text-primary-foreground"}`, style: state.connected ? void 0 : {
        background: "var(--gradient-cyan)"
      }, children: state.connected ? "Disconnect" : "Connect" })
    ] })
  ] });
}
function MaskedField({
  label,
  secretName,
  masked
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-medium uppercase tracking-wider text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1.5 w-full h-10 px-3 rounded-lg bg-input/60 border border-border text-sm font-mono flex items-center justify-between gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground truncate", children: masked ? "•••••••••••••••••• (hidden)" : `Configured via ${secretName}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald/15 text-emerald shrink-0", children: "Secret" })
    ] })
  ] });
}
function SupabaseRow() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border/60 p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 grid place-items-center rounded-md bg-muted/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Database, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: "Supabase" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Database connection — managed via Lovable secrets" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full inline-flex items-center gap-1 bg-emerald/15 text-emerald", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3 w-3" }),
        " Connected"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-xs text-muted-foreground", children: "Connected to the managed Lovable Cloud backend. No setup required." })
  ] });
}
function Toggle({
  label,
  desc,
  checked,
  onChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-xl border border-border/60 p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: desc })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked, onCheckedChange: onChange })
  ] });
}
function DebugPanel() {
  const fetchKpi = useServerFn(getKpiMetrics);
  const {
    data
  } = useQuery({
    queryKey: ["settings-debug-kpi"],
    queryFn: () => fetchKpi(),
    staleTime: 5 * 60 * 1e3,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false
  });
  const row = data?.data;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border/60 bg-card p-6 lg:col-span-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-lg grid place-items-center text-primary-foreground", style: {
        background: "var(--gradient-cyan)"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bug, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold", children: "Debug — Latest kpi_metrics row" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Table: kpi_metrics (latest row ordered by created_at desc)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
          "Project: ",
          "your-project-id",
          ".supabase.co"
        ] })
      ] })
    ] }),
    row ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3 text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border/60 bg-muted/30 p-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground uppercase tracking-wider", children: "id" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono truncate mt-1", children: row.id ?? "—" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border/60 bg-muted/30 p-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground uppercase tracking-wider", children: "created_at" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono truncate mt-1", children: row.created_at ? new Date(String(row.created_at)).toISOString() : "—" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border/60 bg-muted/30 p-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground uppercase tracking-wider", children: "total_calls" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono truncate mt-1", children: row.total_calls_handled ?? "—" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border/60 bg-muted/30 p-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground uppercase tracking-wider", children: "tickets_resolved" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono truncate mt-1", children: row.tickets_resolved ?? "—" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border/60 bg-muted/30 p-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground uppercase tracking-wider", children: "avg_csat" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono truncate mt-1", children: row.average_csat ?? "—" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border/60 bg-muted/30 p-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground uppercase tracking-wider", children: "active_agents" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono truncate mt-1", children: row.active_agents ?? "—" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border/60 bg-muted/30 p-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground uppercase tracking-wider", children: "emails_pending" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono truncate mt-1", children: row.emails_pending ?? "—" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border/60 bg-muted/30 p-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground uppercase tracking-wider", children: "missed_calls" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono truncate mt-1", children: row.missed_calls ?? "—" })
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "No data returned." })
  ] });
}
export {
  SettingsPage as component
};
