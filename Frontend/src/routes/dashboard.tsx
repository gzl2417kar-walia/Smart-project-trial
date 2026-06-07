import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { getKpiMetrics } from "@/lib/data.functions";
import {
  Phone, Ticket, Smile, Users, Mail, PhoneMissed, Sparkles, ArrowRight,
  Clock, TrendingUp, AlertTriangle, CheckCircle2, X, PhoneCall, PhoneOff
} from "lucide-react";
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line, ResponsiveContainer,
  XAxis, YAxis, CartesianGrid, Tooltip as RTooltip
} from "recharts";
import {
  agents, kpis, operationalTrends, insights, type Agent,
  buildActiveCalls, buildMissedCalls, buildRecentCalls,
  formatDuration, relativeTime, liveReports,
  type ActiveCall, type MissedCall, type RecentCall,
} from "@/lib/mock/data";
import { AppShell } from "@/components/app/AppShell";
import { KpiCard } from "@/components/app/KpiCard";
import { StatusBadge } from "@/components/app/StatusBadge";
import { ChartTooltip } from "@/components/app/ChartTooltip";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { AgentSheet } from "@/components/app/AgentSheet";
import { useNow } from "@/lib/store";

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
});

function Dashboard() {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [reportOpen, setReportOpen] = useState(false);
  const [kpiDialog, setKpiDialog] = useState<null | "calls" | "active" | "missed">(null);
  const reports = useMemo(() => liveReports(), []);
  const latest = reports.find(r => r.status === "Ready")!;
  const activeCalls = useMemo(() => buildActiveCalls(), []);
  const missedCalls = useMemo(() => buildMissedCalls(), []);
  const recentCalls = useMemo(() => buildRecentCalls(12), []);

  const fetchKpis = useServerFn(getKpiMetrics);
  const kpiQuery = useQuery({
    queryKey: ["kpi_metrics"],
    queryFn: () => fetchKpis(),
    staleTime: 5 * 60_000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    placeholderData: (prev) => prev,
  });

  const live = kpiQuery.data?.source === "supabase" ? (kpiQuery.data.data ?? null) : null;
  const toNum = (x: unknown): number | "—" => {
    if (typeof x === "number") return x;
    if (typeof x === "string" && x.trim() !== "" && !isNaN(Number(x))) return Number(x);
    return "—";
  };
  const v = {
    totalCalls:      live ? toNum(live.total_calls_handled) : "—",
    ticketsResolved: live ? toNum(live.tickets_resolved)    : "—",
    avgCsat:         live ? toNum(live.average_csat)        : "—",
    activeAgents:    live ? toNum(live.active_agents)       : "—",
    emailsPending:   live ? toNum(live.emails_pending)      : "—",
    missedCalls:     live ? toNum(live.missed_calls)        : "—",
  };

  return (
    <AppShell title="Dashboard">
      <LiveStatusBanner state={kpiQuery.isLoading ? "loading" : kpiQuery.data?.source ?? "unavailable"} />
      {/* KPI Grid */}
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div onClick={() => setKpiDialog("calls")} className="cursor-pointer">
          <KpiCard label="Total Calls"      value={v.totalCalls}      delta={+6}  icon={Phone}       tone="cyan"    hint="Click to view recent inbound calls." />
        </div>
        <KpiCard label="Tickets Resolved" value={v.ticketsResolved} delta={+9}  icon={Ticket}      tone="violet"  hint="Tickets resolved across all channels today." />
        <KpiCard label="Average CSAT"     value={v.avgCsat}         delta={+3}  icon={Smile}       tone="emerald" hint="Team CSAT trending up over the last 24h." />
        <div onClick={() => setKpiDialog("active")} className="cursor-pointer">
          <KpiCard label="Active Agents"    value={v.activeAgents}    delta={0}   icon={Users}       tone="cyan"    hint="Click to view who is currently online." />
        </div>
        <KpiCard label="Emails Pending"   value={v.emailsPending}   delta={-12} icon={Mail}        tone="amber"   hint="Emails awaiting first response." />
        <div onClick={() => setKpiDialog("missed")} className="cursor-pointer">
          <KpiCard label="Missed Calls"     value={v.missedCalls}     delta={+2}  icon={PhoneMissed} tone="rose"    hint="Click to view missed callers and times." />
        </div>
      </section>

      {/* Charts Row */}
      <section className="grid grid-cols-1 xl:grid-cols-3 gap-5 mt-6">
        <div className="xl:col-span-2 rounded-2xl border border-border/60 bg-card p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-display text-lg font-semibold">Operational trends</h3>
              <p className="text-xs text-muted-foreground">Calls handled and tickets resolved across today's shifts</p>
            </div>
            <div className="flex gap-1.5 text-xs">
              {[
                { label: "Calls", color: "var(--chart-1)" },
                { label: "Tickets", color: "var(--chart-2)" },
              ].map(l => (
                <div key={l.label} className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-muted/40">
                  <span className="h-2 w-2 rounded-full" style={{ background: l.color }} />{l.label}
                </div>
              ))}
            </div>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={operationalTrends} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--chart-1)" stopOpacity={0.5} />
                  <stop offset="100%" stopColor="var(--chart-1)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--chart-2)" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="var(--chart-2)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="time" stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
              <RTooltip content={<ChartTooltip />} />
              <Area type="monotone" dataKey="calls"   stroke="var(--chart-1)" strokeWidth={2.5} fill="url(#g1)" isAnimationActive={false} />
              <Area type="monotone" dataKey="tickets" stroke="var(--chart-2)" strokeWidth={2.5} fill="url(#g2)" isAnimationActive={false} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="rounded-2xl border border-border/60 bg-card p-6">
          <h3 className="font-display text-lg font-semibold">CSAT trend</h3>
          <p className="text-xs text-muted-foreground">Customer satisfaction across the day</p>
          <ResponsiveContainer width="100%" height={130} className="mt-2">
            <LineChart data={operationalTrends}>
              <RTooltip content={<ChartTooltip />} />
              <Line type="monotone" dataKey="csat" stroke="var(--chart-3)" strokeWidth={2.5} dot={{ r: 3, fill: "var(--chart-3)" }} activeDot={{ r: 5 }} isAnimationActive={false} />
            </LineChart>
          </ResponsiveContainer>
          <div className="border-t border-border/60 mt-4 pt-4">
            <h4 className="font-display text-sm font-semibold mb-2">Agent utilization</h4>
            <ResponsiveContainer width="100%" height={120}>
              <BarChart data={operationalTrends}>
                <RTooltip content={<ChartTooltip />} />
                <Bar dataKey="utilization" fill="var(--chart-2)" radius={[4,4,0,0]} isAnimationActive={false} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Team + Report */}
      <section className="grid grid-cols-1 xl:grid-cols-3 gap-5 mt-6">
        <div className="xl:col-span-2 rounded-2xl border border-border/60 bg-card overflow-hidden">
          <div className="flex items-center justify-between p-5 border-b border-border/60">
            <div>
              <h3 className="font-display text-lg font-semibold">Team performance</h3>
              <p className="text-xs text-muted-foreground">Click an agent to view live details</p>
            </div>
            <span className="text-xs text-muted-foreground">{agents.length} agents</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-[11px] uppercase tracking-wider text-muted-foreground border-b border-border/60">
                <tr>
                  <th className="text-left font-medium px-5 py-3">Agent</th>
                  <th className="text-right font-medium px-3 py-3">Calls</th>
                  <th className="text-right font-medium px-3 py-3">Tickets</th>
                  <th className="text-right font-medium px-3 py-3">CSAT</th>
                  <th className="text-left  font-medium px-3 py-3">Status</th>
                  <th className="text-left  font-medium px-5 py-3">Shift</th>
                </tr>
              </thead>
              <tbody>
                {agents.map(a => (
                  <tr key={a.id} onClick={() => setSelectedAgent(a)}
                      className="border-b border-border/40 last:border-0 hover:bg-muted/40 cursor-pointer transition-colors">
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full grid place-items-center text-xs font-semibold text-primary-foreground" style={{ background: "var(--gradient-violet)" }}>{a.avatar}</div>
                        <div>
                          <div className="font-medium">{a.name}</div>
                          <div className="text-[11px] text-muted-foreground">{a.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-right tabular-nums">{a.calls}</td>
                    <td className="px-3 py-3 text-right tabular-nums">{a.tickets}</td>
                    <td className="px-3 py-3 text-right tabular-nums font-medium text-emerald">{a.csat}</td>
                    <td className="px-3 py-3"><StatusBadge status={a.status} /></td>
                    <td className="px-5 py-3 text-muted-foreground text-xs">{a.shift}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-5">
          {/* Latest AI report */}
          <div className="rounded-2xl border border-border/60 bg-card p-5 group hover:border-primary/40 transition cursor-pointer" onClick={() => setReportOpen(true)}>
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-primary font-medium">
              <Sparkles className="h-3.5 w-3.5" /> Latest AI report
            </div>
            <h3 className="font-display text-lg font-semibold mt-2">{latest.id} · {latest.type}</h3>
            <p className="text-xs text-muted-foreground">{latest.period}</p>
            <p className="text-sm mt-3 text-foreground/85 line-clamp-3">{latest.summary}</p>
            <div className="mt-4 inline-flex items-center gap-1 text-sm text-primary font-medium">
              Open report <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </div>
          </div>

          {/* Pattern insights */}
          <div className="rounded-2xl border border-border/60 bg-card p-5">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-display text-lg font-semibold">Pattern insights</h3>
              <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent/15 text-accent">AI</span>
            </div>
            <ul className="space-y-3">
              {insights.slice(0, 3).map(i => (
                <li key={i.id} className="flex gap-3 p-3 rounded-xl bg-muted/30 hover:bg-muted/60 transition">
                  <div className="mt-0.5">
                    {i.severity === "high" ? <AlertTriangle className="h-4 w-4 text-destructive" /> :
                     i.severity === "medium" ? <Clock className="h-4 w-4 text-chart-4" /> :
                     <CheckCircle2 className="h-4 w-4 text-emerald" />}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{i.title}</div>
                    <div className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{i.summary}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Agent side panel */}
      <AgentSheet agent={selectedAgent} onClose={() => setSelectedAgent(null)} />

      {/* KPI drill-down dialogs */}
      <Dialog open={kpiDialog !== null} onOpenChange={(o) => !o && setKpiDialog(null)}>
        <DialogContent className="max-w-2xl bg-card border-border/60">
          {kpiDialog === "calls" && (
            <KpiDialogShell title="Recent calls" icon={PhoneCall} description="Latest inbound calls handled by your team today.">
              <CallList rows={recentCalls} />
            </KpiDialogShell>
          )}
          {kpiDialog === "active" && (
            <KpiDialogShell title="Active agents" icon={Users} description="Agents currently online and reachable.">
              <ActiveAgentList active={activeCalls} />
            </KpiDialogShell>
          )}
          {kpiDialog === "missed" && (
            <KpiDialogShell title="Missed calls" icon={PhoneOff} description="Numbers that hung up before being connected.">
              <MissedList rows={missedCalls} />
            </KpiDialogShell>
          )}
        </DialogContent>
      </Dialog>

      {/* Report viewer */}
      <Dialog open={reportOpen} onOpenChange={setReportOpen}>
        <DialogContent className="max-w-2xl bg-card border-border/60">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <div>
                <DialogTitle className="font-display text-xl">{latest.id} — {latest.type} Report</DialogTitle>
                <DialogDescription>{latest.period} · Generated by {latest.generatedBy}</DialogDescription>
              </div>
            </div>
          </DialogHeader>
          <ReportBody report={latest} />
        </DialogContent>
      </Dialog>
    </AppShell>
  );
}

export function ReportBody({ report }: { report: ReturnType<typeof liveReports>[number] }) {
  return (
    <div className="space-y-5 max-h-[60vh] overflow-y-auto pr-2 -mr-2">
      <Section title="Executive summary"><p className="text-sm leading-relaxed">{report.summary}</p></Section>
      <Section title="KPI observations"><Bullets items={report.observations} /></Section>
      <Section title="Operational risks"><Bullets items={report.risks} icon="alert" /></Section>
      <Section title="Recommendations"><Bullets items={report.recommendations} icon="check" /></Section>
      <Section title="AI-generated insights"><Bullets items={report.insights} icon="sparkles" /></Section>
    </div>
  );
}

function LiveStatusBanner({ state }: { state: "loading" | "supabase" | "empty" | "unavailable" }) {
  if (state === "supabase" || state === "loading") return null;
  const text =
    state === "empty"     ? "No KPI rows in Supabase yet — showing sample values. New rows will populate automatically." :
                            "Database not reachable — showing sample values.";
  const tone = state === "empty" ? "text-chart-4" : "text-destructive";
  return (
    <div className={`mb-4 text-xs ${tone} inline-flex items-center gap-2`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70 animate-pulse" />
      {text}
    </div>
  );
}
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium mb-2">{title}</h4>
      {children}
    </div>
  );
}
function Bullets({ items, icon }: { items: string[]; icon?: "alert" | "check" | "sparkles" }) {
  if (!items.length) return <p className="text-sm text-muted-foreground italic">No items.</p>;
  const Icon = icon === "alert" ? AlertTriangle : icon === "check" ? CheckCircle2 : icon === "sparkles" ? Sparkles : X;
  const color = icon === "alert" ? "text-destructive" : icon === "check" ? "text-emerald" : icon === "sparkles" ? "text-accent" : "text-primary";
  return (
    <ul className="space-y-2">
      {items.map((t, i) => (
        <li key={i} className="flex gap-2.5 text-sm">
          {icon ? <Icon className={`h-4 w-4 mt-0.5 shrink-0 ${color}`} /> : <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />}
          <span className="text-foreground/85">{t}</span>
        </li>
      ))}
    </ul>
  );
}

function KpiDialogShell({ title, description, icon: Icon, children }: { title: string; description: string; icon: typeof PhoneCall; children: React.ReactNode }) {
  return (
    <>
      <DialogHeader>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg grid place-items-center text-primary-foreground" style={{ background: "var(--gradient-cyan)" }}>
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <DialogTitle className="font-display text-xl">{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </div>
        </div>
      </DialogHeader>
      <div className="max-h-[60vh] overflow-y-auto pr-2 -mr-2">{children}</div>
    </>
  );
}

function CallList({ rows }: { rows: RecentCall[] }) {
  const now = useNow(15_000);
  return (
    <ul className="divide-y divide-border/60">
      {rows.map(r => (
        <li key={r.id} className="py-3 flex items-center gap-4 hover:bg-muted/40 px-2 -mx-2 rounded transition">
          <div className="h-9 w-9 rounded-full grid place-items-center text-xs font-semibold text-primary-foreground" style={{ background: "var(--gradient-violet)" }}>
            {r.agentName.split(" ").map(p => p[0]).slice(0, 2).join("")}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium truncate">{r.customer}</div>
            <div className="text-xs text-muted-foreground font-mono">{r.phone}</div>
          </div>
          <div className="text-xs text-muted-foreground hidden sm:block">{r.agentName}</div>
          <div className="text-xs text-muted-foreground tabular-nums">{formatDuration(r.durationSec)}</div>
          <div className="text-xs text-muted-foreground whitespace-nowrap min-w-[88px] text-right">{relativeTime(r.at, now.getTime())}</div>
          <span className={`text-[10px] uppercase px-2 py-0.5 rounded-full border ${r.outcome === "Resolved" ? "bg-emerald/15 text-emerald border-emerald/30" : r.outcome === "Escalated" ? "bg-destructive/15 text-destructive border-destructive/30" : "bg-chart-4/15 text-chart-4 border-chart-4/30"}`}>{r.outcome}</span>
        </li>
      ))}
    </ul>
  );
}

function ActiveAgentList({ active }: { active: ActiveCall[] }) {
  const activeAgents = agents.filter(a => a.status !== "Offline");
  const byId = Object.fromEntries(active.map(c => [c.agentId, c] as const));
  const now = useNow();
  return (
    <ul className="divide-y divide-border/60">
      {activeAgents.map(a => {
        const c = byId[a.id];
        return (
          <li key={a.id} className="py-3 flex items-center gap-3 px-2 -mx-2 rounded hover:bg-muted/40 transition">
            <div className="h-9 w-9 rounded-full grid place-items-center text-xs font-semibold text-primary-foreground" style={{ background: "var(--gradient-violet)" }}>{a.avatar}</div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium truncate">{a.name}</div>
              <div className="text-[11px] text-muted-foreground">{a.id} · {a.shift}</div>
            </div>
            <StatusBadge status={a.status} />
            {c && (
              <div className="text-xs text-muted-foreground hidden md:flex flex-col items-end">
                <span className="font-mono">{c.phone}</span>
                <span className="tabular-nums">{formatDuration(Math.floor((now.getTime() - c.startedAt) / 1000))}</span>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

function MissedList({ rows }: { rows: MissedCall[] }) {
  const now = useNow(15_000);
  return (
    <ul className="divide-y divide-border/60">
      {rows.map(r => (
        <li key={r.id} className="py-3 flex items-center gap-4 px-2 -mx-2 rounded hover:bg-muted/40 transition">
          <div className="h-9 w-9 rounded-lg grid place-items-center bg-destructive/15 text-destructive">
            <PhoneOff className="h-4 w-4" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium truncate">{r.customer}</div>
            <div className="text-xs text-muted-foreground font-mono">{r.phone}</div>
          </div>
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border">{r.reason}</span>
          <div className="text-xs text-muted-foreground whitespace-nowrap min-w-[88px] text-right">{relativeTime(r.at, now.getTime())}</div>
        </li>
      ))}
    </ul>
  );
}
