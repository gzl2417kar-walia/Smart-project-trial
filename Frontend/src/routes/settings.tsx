import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app/AppShell";
import { CheckCircle2, Database, Globe, Key, Moon, Sheet as SheetIcon, Sun, Webhook, Zap, ShieldCheck, PlugZap, Bug } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { useSettings, updateSettings, updateIntegration } from "@/lib/store";
import { toast } from "sonner";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { pingWebhook, getKpiMetrics } from "@/lib/data.functions";

export const Route = createFileRoute("/settings")({
  component: SettingsPage,
});

function SettingsPage() {
  const settings = useSettings();

  return (
    <AppShell title="Settings">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Card title="Integrations" icon={Globe} desc="Connect Smart Reporter to your data sources and automation stack.">
          <SupabaseRow />
          <IntegrationRow icon={Webhook}   name="Make.com"      desc="Workflow automation webhook"     placeholder="https://hook.make.com/..."  testable />
          <IntegrationRow icon={Zap}       name="n8n"           desc="Operational insights webhook"    placeholder="https://your-instance.n8n.cloud/webhook/..." testable />
          <IntegrationRow icon={SheetIcon} name="Google Sheets" desc="Sync reports to a sheet (optional)" placeholder="Sheet ID" optional />
        </Card>

        <Card title="API configuration" icon={Key} desc="Smart Reporter uses the managed Lovable Cloud backend.">
          <MaskedField label="Database"      secretName="Lovable Cloud (managed)" />
          <MaskedField label="Database key"  secretName="Lovable Cloud (managed)" masked />
          <div className="flex items-start gap-2 rounded-xl border border-border/60 bg-muted/30 p-3">
            <ShieldCheck className="h-4 w-4 text-emerald shrink-0 mt-0.5" />
            <div className="text-xs text-muted-foreground">
              Credentials are managed by Lovable Cloud and never exposed to the browser. No manual configuration needed.
            </div>
          </div>
        </Card>

        <Card title="Appearance" icon={settings.theme === "dark" ? Moon : Sun} desc="Personalize the look of your dashboard.">
          <Toggle label="Dark theme" desc="Enterprise dark mode (recommended)"
            checked={settings.theme === "dark"}
            onChange={(v) => { updateSettings({ theme: v ? "dark" : "light" }); toast.success(`Switched to ${v ? "dark" : "light"} theme`); }} />
          <Toggle label="Compact layout" desc="Reduce paddings across tables"
            checked={settings.compact}
            onChange={(v) => { updateSettings({ compact: v }); toast.success(`Compact layout ${v ? "enabled" : "disabled"}`); }} />
        </Card>

        <Card title="Notifications" icon={Database} desc="Choose what gets surfaced and where.">
          <Toggle label="Email digests"      desc="Daily summary at 18:00"           checked={settings.emailDigests}      onChange={(v) => { updateSettings({ emailDigests: v });      toast.success(`Email digests ${v ? "on" : "off"}`); }} />
          <Toggle label="Push notifications" desc="Browser push for critical events" checked={settings.pushNotifications} onChange={(v) => { updateSettings({ pushNotifications: v }); toast.success(`Push notifications ${v ? "on" : "off"}`); }} />
          <Toggle label="AI risk alerts"     desc="Instant alerts on anomalies"      checked={settings.aiRiskAlerts}      onChange={(v) => { updateSettings({ aiRiskAlerts: v });      toast.success(`AI risk alerts ${v ? "on" : "off"}`); }} />
        </Card>
        <DebugPanel />
      </div>
    </AppShell>
  );
}

function Card({ title, icon: Icon, desc, children }: { title: string; icon: any; desc: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card p-6">
      <div className="flex items-start gap-3">
        <div className="h-10 w-10 rounded-lg grid place-items-center text-primary-foreground" style={{ background: "var(--gradient-cyan)" }}>
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold">{title}</h3>
          <p className="text-xs text-muted-foreground">{desc}</p>
        </div>
      </div>
      <div className="mt-5 space-y-3">{children}</div>
    </div>
  );
}

function IntegrationRow({ icon: Icon, name, desc, placeholder, testable, optional }: { icon: any; name: string; desc: string; placeholder: string; testable?: boolean; optional?: boolean }) {
  const settings = useSettings();
  const state = settings.integrations[name] ?? { url: "", connected: false };
  const ping = useServerFn(pingWebhook);
  const [testing, setTesting] = useState(false);
  const toggleConnect = () => {
    if (state.connected) {
      updateIntegration(name, { connected: false });
      toast.info(`${name} disconnected`);
    } else {
      if (!state.url.trim()) { toast.error(`Add a ${name} URL first`); return; }
      updateIntegration(name, { connected: true });
      toast.success(`${name} connected`);
    }
  };
  const handleTest = async () => {
    if (!state.url.trim()) { toast.error(`Add a ${name} URL first`); return; }
    setTesting(true);
    try {
      const res = await ping({ data: { url: state.url } });
      if (res.ok) toast.success(`${name} responded (HTTP ${res.status})`);
      else toast.error(`${name} test failed${res.status ? ` (HTTP ${res.status})` : ""}${res.error ? `: ${res.error}` : ""}`);
    } catch (e) {
      toast.error(`${name} test failed: ${e instanceof Error ? e.message : "request error"}`);
    } finally {
      setTesting(false);
    }
  };
  return (
    <div className="rounded-xl border border-border/60 p-4 hover:border-primary/40 transition">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 grid place-items-center rounded-md bg-muted/60"><Icon className="h-4 w-4" /></div>
        <div className="flex-1">
          <div className="text-sm font-medium flex items-center gap-2">
            {name}
            {optional && <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-muted text-muted-foreground">Optional</span>}
          </div>
          <div className="text-xs text-muted-foreground">{desc}</div>
        </div>
        <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full inline-flex items-center gap-1 ${state.connected ? "bg-emerald/15 text-emerald" : "bg-muted text-muted-foreground"}`}>
          {state.connected && <CheckCircle2 className="h-3 w-3" />} {state.connected ? "Connected" : "Not connected"}
        </span>
      </div>
      <div className="mt-3 flex gap-2">
        <input
          value={state.url}
          onChange={(e) => updateIntegration(name, { url: e.target.value })}
          placeholder={placeholder}
          className="flex-1 h-9 px-3 rounded-md bg-input/60 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
        {testable && (
          <button onClick={handleTest} disabled={testing}
            className="h-9 px-3 rounded-md text-sm font-medium border border-border hover:bg-muted/60 transition inline-flex items-center gap-1.5 disabled:opacity-50">
            <PlugZap className="h-3.5 w-3.5" /> {testing ? "Testing…" : "Test"}
          </button>
        )}
        <button onClick={toggleConnect}
          className={`h-9 px-3 rounded-md text-sm font-medium border transition ${state.connected ? "border-border hover:bg-muted/60" : "border-transparent text-primary-foreground"}`}
          style={state.connected ? undefined : { background: "var(--gradient-cyan)" }}>
          {state.connected ? "Disconnect" : "Connect"}
        </button>
      </div>
    </div>
  );
}

function MaskedField({ label, secretName, masked }: { label: string; secretName: string; masked?: boolean }) {
  return (
    <div>
      <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</label>
      <div className="mt-1.5 w-full h-10 px-3 rounded-lg bg-input/60 border border-border text-sm font-mono flex items-center justify-between gap-2">
        <span className="text-muted-foreground truncate">{masked ? "•••••••••••••••••• (hidden)" : `Configured via ${secretName}`}</span>
        <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald/15 text-emerald shrink-0">Secret</span>
      </div>
    </div>
  );
}

function SupabaseRow() {
  return (
    <div className="rounded-xl border border-border/60 p-4">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 grid place-items-center rounded-md bg-muted/60"><Database className="h-4 w-4" /></div>
        <div className="flex-1">
          <div className="text-sm font-medium">Supabase</div>
          <div className="text-xs text-muted-foreground">Database connection — managed via Lovable secrets</div>
        </div>
        <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full inline-flex items-center gap-1 bg-emerald/15 text-emerald">
          <CheckCircle2 className="h-3 w-3" /> Connected
        </span>
      </div>
      <div className="mt-3 text-xs text-muted-foreground">
        Connected to the managed Lovable Cloud backend. No setup required.
      </div>
    </div>
  );
}

function Toggle({ label, desc, checked, onChange }: { label: string; desc: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-border/60 p-4">
      <div>
        <div className="text-sm font-medium">{label}</div>
        <div className="text-xs text-muted-foreground">{desc}</div>
      </div>
      <Switch checked={checked} onCheckedChange={onChange} />
    </div>
  );
}

function DebugPanel() {
  const fetchKpi = useServerFn(getKpiMetrics);
  const { data } = useQuery({
    queryKey: ["settings-debug-kpi"],
    queryFn: () => fetchKpi(),
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  const row = data?.data as Record<string, string | number | null> | undefined;

  return (
    <div className="rounded-2xl border border-border/60 bg-card p-6 lg:col-span-2">
      <div className="flex items-start gap-3 mb-4">
        <div className="h-10 w-10 rounded-lg grid place-items-center text-primary-foreground" style={{ background: "var(--gradient-cyan)" }}>
          <Bug className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold">Debug — Latest kpi_metrics row</h3>
          <p className="text-xs text-muted-foreground">Table: kpi_metrics (latest row ordered by created_at desc)</p>
          <p className="text-xs text-muted-foreground mt-1">Project: {import.meta.env.VITE_SUPABASE_PROJECT_ID ?? "—"}.supabase.co</p>
        </div>
      </div>
      {row ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
          <div className="rounded-lg border border-border/60 bg-muted/30 p-2">
            <span className="text-muted-foreground uppercase tracking-wider">id</span>
            <div className="font-mono truncate mt-1">{row.id ?? "—"}</div>
          </div>
          <div className="rounded-lg border border-border/60 bg-muted/30 p-2">
            <span className="text-muted-foreground uppercase tracking-wider">created_at</span>
            <div className="font-mono truncate mt-1">{row.created_at ? new Date(String(row.created_at)).toISOString() : "—"}</div>
          </div>
          <div className="rounded-lg border border-border/60 bg-muted/30 p-2">
            <span className="text-muted-foreground uppercase tracking-wider">total_calls</span>
            <div className="font-mono truncate mt-1">{row.total_calls_handled ?? "—"}</div>
          </div>
          <div className="rounded-lg border border-border/60 bg-muted/30 p-2">
            <span className="text-muted-foreground uppercase tracking-wider">tickets_resolved</span>
            <div className="font-mono truncate mt-1">{row.tickets_resolved ?? "—"}</div>
          </div>
          <div className="rounded-lg border border-border/60 bg-muted/30 p-2">
            <span className="text-muted-foreground uppercase tracking-wider">avg_csat</span>
            <div className="font-mono truncate mt-1">{row.average_csat ?? "—"}</div>
          </div>
          <div className="rounded-lg border border-border/60 bg-muted/30 p-2">
            <span className="text-muted-foreground uppercase tracking-wider">active_agents</span>
            <div className="font-mono truncate mt-1">{row.active_agents ?? "—"}</div>
          </div>
          <div className="rounded-lg border border-border/60 bg-muted/30 p-2">
            <span className="text-muted-foreground uppercase tracking-wider">emails_pending</span>
            <div className="font-mono truncate mt-1">{row.emails_pending ?? "—"}</div>
          </div>
          <div className="rounded-lg border border-border/60 bg-muted/30 p-2">
            <span className="text-muted-foreground uppercase tracking-wider">missed_calls</span>
            <div className="font-mono truncate mt-1">{row.missed_calls ?? "—"}</div>
          </div>
        </div>
      ) : (
        <div className="text-xs text-muted-foreground">No data returned.</div>
      )}
    </div>
  );
}
