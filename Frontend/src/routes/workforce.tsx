import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AppShell } from "@/components/app/AppShell";
import {
  agents as mockAgents, weeklySchedule, buildActiveCalls, formatDuration, relativeTime,
  type Agent, type AgentStatus, type ActiveCall,
} from "@/lib/mock/data";
import { StatusBadge } from "@/components/app/StatusBadge";
import { AgentSheet } from "@/components/app/AgentSheet";
import { Phone, Sparkles, UserCheck, Users, Activity } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RTooltip, Legend } from "recharts";
import { ChartTooltip } from "@/components/app/ChartTooltip";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useNow } from "@/lib/store";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { getAgentsList } from "@/lib/data.functions";

export const Route = createFileRoute("/workforce")({
  component: WorkforcePage,
});

function WorkforcePage() {
  const fetchAgents = useServerFn(getAgentsList);
  const agentsQuery = useQuery({
    queryKey: ["agents"],
    queryFn: () => fetchAgents(),
    refetchInterval: 60_000,
  });
  const agents: Agent[] = useMemo(() => {
    const live = agentsQuery.data?.source === "supabase" ? agentsQuery.data.data : [];
    if (live.length === 0) return mockAgents;
    return live.map((r, i): Agent => {
      const name = String(r.agent_name ?? r.name ?? `Agent ${i + 1}`);
      const statusRaw = String(r.status ?? "Available");
      const status: AgentStatus = (["Available", "On Call", "Break", "Offline"].includes(statusRaw)
        ? statusRaw
        : "Available") as AgentStatus;
      const num = (v: unknown, d = 0) => (typeof v === "number" ? v : typeof v === "string" && !isNaN(Number(v)) ? Number(v) : d);
      return {
        id: String(r.id ?? `AG-${String(i + 1).padStart(2, "0")}`),
        name,
        avatar: name.split(" ").map(p => p[0]).filter(Boolean).slice(0, 2).join("").toUpperCase() || "AG",
        calls: num(r.calls_handled ?? r.calls),
        tickets: num(r.tickets_resolved ?? r.tickets),
        csat: num(r.csat ?? r.average_csat, 0),
        resolutionRate: num(r.resolution_rate, 0),
        status,
        shift: String(r.shift_timing ?? r.shift ?? "—"),
      };
    });
  }, [agentsQuery.data]);

  const available = agents.filter(a => a.status === "Available").length;
  const onCall    = agents.filter(a => a.status === "On Call").length;
  const onBreak   = agents.filter(a => a.status === "Break").length;
  const offline   = agents.filter(a => a.status === "Offline").length;
  const coverage  = Math.round(((available + onCall) / agents.length) * 100);

  const [filter, setFilter] = useState<"all" | AgentStatus>("all");
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [activeCallDetail, setActiveCallDetail] = useState<ActiveCall | null>(null);
  const now = useNow();

  const activeCalls = useMemo(() => buildActiveCalls(), []);
  const callByAgent = useMemo(
    () => Object.fromEntries(activeCalls.map(c => [c.agentId, c] as const)),
    [activeCalls],
  );

  const displayed = useMemo(
    () => filter === "all" ? agents : agents.filter(a => a.status === filter),
    [filter],
  );

  return (
    <AppShell title="Workforce">
      <section className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <CoverageCard label="All"       value={agents.length} tone="cyan"     active={filter === "all"}       onClick={() => setFilter("all")} />
        <CoverageCard label="Available" value={available}     tone="emerald"  active={filter === "Available"} onClick={() => setFilter("Available")} />
        <CoverageCard label="On Call"   value={onCall}        tone="cyan"     active={filter === "On Call"}   onClick={() => setFilter("On Call")} />
        <CoverageCard label="On Break"  value={onBreak}       tone="amber"    active={filter === "Break"}     onClick={() => setFilter("Break")} />
        <CoverageCard label="Offline"   value={offline}       tone="muted"    active={filter === "Offline"}   onClick={() => setFilter("Offline")} />
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-3 gap-5 mt-6">
        <div className="xl:col-span-2 rounded-2xl border border-border/60 bg-card overflow-hidden">
          <div className="p-5 border-b border-border/60 flex items-center justify-between">
            <div>
              <h3 className="font-display text-lg font-semibold">Agent shifts</h3>
              <p className="text-xs text-muted-foreground">{filter === "all" ? "All agents" : `Filtered: ${filter}`} — click an On Call row to view the live customer.</p>
            </div>
            <span className="text-xs text-muted-foreground inline-flex items-center gap-1.5"><Users className="h-3.5 w-3.5" /> {displayed.length} shown</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-[11px] uppercase tracking-wider text-muted-foreground border-b border-border/60">
                <tr>
                  <th className="text-left font-medium px-5 py-3">Agent</th>
                  <th className="text-left font-medium px-3 py-3">Shift</th>
                  <th className="text-left font-medium px-3 py-3">Status</th>
                  <th className="text-left font-medium px-3 py-3">Customer</th>
                  <th className="text-left font-medium px-3 py-3">Phone</th>
                  <th className="text-right font-medium px-5 py-3">Duration</th>
                </tr>
              </thead>
              <tbody>
                {displayed.map(a => {
                  const call = callByAgent[a.id];
                  const isOnCall = a.status === "On Call" && !!call;
                  return (
                    <tr key={a.id}
                        onClick={() => isOnCall ? setActiveCallDetail(call) : setSelectedAgent(a)}
                        className="border-b border-border/40 last:border-0 hover:bg-muted/40 cursor-pointer transition">
                      <td className="px-5 py-3">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full grid place-items-center text-xs font-semibold text-primary-foreground" style={{ background: "var(--gradient-violet)" }}>{a.avatar}</div>
                          <div>
                            <div className="font-medium">{a.name}</div>
                            <div className="text-[11px] text-muted-foreground">{a.id}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-3 text-muted-foreground">{a.shift}</td>
                      <td className="px-3 py-3"><StatusBadge status={a.status} /></td>
                      <td className="px-3 py-3">{isOnCall ? <span className="text-sm">{call.customer}</span> : <span className="text-muted-foreground">—</span>}</td>
                      <td className="px-3 py-3 font-mono text-xs">{isOnCall ? call.phone : <span className="text-muted-foreground">—</span>}</td>
                      <td className="px-5 py-3 text-right tabular-nums">
                        {isOnCall
                          ? <span className="text-primary font-medium">{formatDuration(Math.floor((now.getTime() - call.startedAt) / 1000))}</span>
                          : <span className="text-muted-foreground">—</span>}
                      </td>
                    </tr>
                  );
                })}
                {displayed.length === 0 && (
                  <tr><td colSpan={6} className="px-5 py-8 text-center text-muted-foreground text-sm">No agents in this status.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded-2xl border border-border/60 p-5 relative overflow-hidden" style={{ background: "var(--gradient-card)" }}>
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-30 blur-2xl" style={{ background: "var(--gradient-cyan)" }} />
            <div className="relative">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-primary font-medium">
                <Sparkles className="h-3.5 w-3.5" /> AI shift recommendation
              </div>
              <h3 className="font-display text-lg font-semibold mt-2">Reinforce evening coverage</h3>
              <p className="text-sm text-foreground/85 mt-2">Add 1 floating agent between 19:00 and 21:00 to address the late-evening CSAT dip detected over the last 7 days.</p>
              <button className="mt-4 h-9 px-4 rounded-lg font-medium text-primary-foreground text-sm inline-flex items-center gap-1.5" style={{ background: "var(--gradient-cyan)" }}>
                <UserCheck className="h-4 w-4" /> Apply recommendation
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card p-5">
            <h3 className="font-display text-lg font-semibold">Current coverage</h3>
            <p className="text-xs text-muted-foreground">{coverage}% of agents actively working</p>
            <div className="mt-4 h-3 rounded-full bg-muted overflow-hidden">
              <div className="h-full rounded-full transition-all" style={{ width: `${coverage}%`, background: "var(--gradient-cyan)" }} />
            </div>
            <div className="mt-3 flex justify-between text-xs text-muted-foreground"><span>0%</span><span className="font-semibold text-foreground">{coverage}%</span><span>100%</span></div>
          </div>
        </div>
      </section>

      <section className="mt-6 rounded-2xl border border-border/60 bg-card p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-display text-lg font-semibold">Weekly schedule preview</h3>
            <p className="text-xs text-muted-foreground">Agents scheduled per shift block</p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={weeklySchedule}>
            <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="day" stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
            <YAxis stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
            <RTooltip content={<ChartTooltip />} />
            <Legend iconType="circle" wrapperStyle={{ fontSize: 12 }} />
            <Bar dataKey="morning"   stackId="a" fill="var(--chart-1)" radius={[0,0,0,0]} />
            <Bar dataKey="afternoon" stackId="a" fill="var(--chart-2)" />
            <Bar dataKey="evening"   stackId="a" fill="var(--chart-3)" radius={[4,4,0,0]} />
          </BarChart>
        </ResponsiveContainer>
      </section>

      <AgentSheet agent={selectedAgent} onClose={() => setSelectedAgent(null)} />

      <Dialog open={!!activeCallDetail} onOpenChange={(o) => !o && setActiveCallDetail(null)}>
        <DialogContent className="max-w-md bg-card border-border/60">
          {activeCallDetail && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg grid place-items-center text-primary-foreground" style={{ background: "var(--gradient-cyan)" }}>
                    <Activity className="h-5 w-5 animate-pulse" />
                  </div>
                  <div>
                    <DialogTitle className="font-display">Live call · {activeCallDetail.agentName}</DialogTitle>
                    <DialogDescription>Click outside to close.</DialogDescription>
                  </div>
                </div>
              </DialogHeader>
              <div className="space-y-3">
                <div className="rounded-xl border border-border/60 p-4">
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Customer</div>
                  <div className="font-display text-lg font-semibold mt-0.5">{activeCallDetail.customer}</div>
                  <div className="text-sm text-muted-foreground inline-flex items-center gap-1.5 mt-1"><Phone className="h-3.5 w-3.5" /> <span className="font-mono">{activeCallDetail.phone}</span></div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-border/60 p-4">
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Duration</div>
                    <div className="font-display text-2xl font-semibold tabular-nums mt-1">{formatDuration(Math.floor((now.getTime() - activeCallDetail.startedAt) / 1000))}</div>
                  </div>
                  <div className="rounded-xl border border-border/60 p-4">
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Started</div>
                    <div className="text-sm font-medium mt-1.5">{relativeTime(activeCallDetail.startedAt, now.getTime())}</div>
                  </div>
                </div>
                <div className="rounded-xl border border-border/60 p-4">
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1">Topic</div>
                  <div className="text-sm">{activeCallDetail.topic}</div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </AppShell>
  );
}

function CoverageCard({ label, value, tone, active, onClick }: { label: string; value: number; tone: "emerald" | "cyan" | "amber" | "muted"; active?: boolean; onClick?: () => void }) {
  const toneClass = tone === "emerald" ? "text-emerald" : tone === "cyan" ? "text-primary" : tone === "amber" ? "text-chart-4" : "text-muted-foreground";
  return (
    <button onClick={onClick} type="button"
      className={`text-left rounded-2xl border bg-card p-5 transition hover:-translate-y-0.5 hover:border-primary/40 ${active ? "border-primary shadow-[var(--shadow-glow)]" : "border-border/60"}`}>
      <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium">{label}</div>
      <div className={`font-display text-3xl font-semibold mt-2 ${toneClass}`}>{value}</div>
    </button>
  );
}
