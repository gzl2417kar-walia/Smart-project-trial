import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app/AppShell";
import { insights as mockInsights, operationalTrends } from "@/lib/mock/data";
import { AlertTriangle, CheckCircle2, Clock, Sparkles, TrendingUp } from "lucide-react";
import { ResponsiveContainer, LineChart, Line, Tooltip as RTooltip, XAxis, YAxis, CartesianGrid } from "recharts";
import { ChartTooltip } from "@/components/app/ChartTooltip";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { getPatternInsights } from "@/lib/data.functions";
import { useMemo } from "react";

export const Route = createFileRoute("/insights")({
  component: InsightsPage,
});

const sev = {
  high:   { icon: AlertTriangle, color: "text-destructive", bg: "bg-destructive/15", label: "High risk" },
  medium: { icon: Clock,         color: "text-chart-4",    bg: "bg-chart-4/15",     label: "Watch" },
  low:    { icon: CheckCircle2,  color: "text-emerald",    bg: "bg-emerald/15",     label: "Positive" },
} as const;

function InsightsPage() {
  const fetchInsights = useServerFn(getPatternInsights);
  const q = useQuery({ queryKey: ["pattern_insights"], queryFn: () => fetchInsights(), refetchInterval: 60_000 });
  const insights = useMemo(() => {
    const live = q.data?.source === "supabase" ? q.data.data : [];
    if (live.length === 0) return mockInsights;
    return live.map((r, i) => {
      const sevRaw = String(r.severity ?? "low").toLowerCase();
      const severity = (["low", "medium", "high"].includes(sevRaw) ? sevRaw : "low") as "low" | "medium" | "high";
      const text = String(r.insight_text ?? r.summary ?? "");
      const createdAt = r.created_at ? String(r.created_at).slice(0, 10) : "";
      return {
        id: String(r.id ?? `I-${String(i + 1).padStart(2, "0")}`),
        title: text.split(/[.!?\n]/)[0].slice(0, 80) || `Insight ${i + 1}`,
        severity,
        summary: text,
        recommendation: String(r.recommendation ?? createdAt ? `Detected ${createdAt}` : "Review and action."),
      };
    });
  }, [q.data]);

  return (
    <AppShell title="Insights">
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 rounded-2xl border border-border/60 bg-card p-6 relative overflow-hidden">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-25 blur-3xl" style={{ background: "var(--gradient-violet)" }} />
          <div className="relative">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-accent font-medium">
              <Sparkles className="h-3.5 w-3.5" /> AI trend summary
            </div>
            <h2 className="font-display text-2xl font-semibold mt-2">Operations are stabilizing after last week's staffing change.</h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-2xl">
              Resolution rate is up 7%, CSAT is holding above 4.6, and the only persistent risk is a recurring late-evening satisfaction dip.
            </p>
          </div>
          <ResponsiveContainer width="100%" height={180} className="mt-6">
            <LineChart data={operationalTrends}>
              <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="time" stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
              <RTooltip content={<ChartTooltip />} />
              <Line type="monotone" dataKey="csat" stroke="var(--chart-3)" strokeWidth={2.5} dot={{ r: 3 }} />
              <Line type="monotone" dataKey="utilization" stroke="var(--chart-2)" strokeWidth={2.5} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="rounded-2xl border border-border/60 bg-card p-6">
          <h3 className="font-display text-lg font-semibold flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-destructive" /> Risk alerts</h3>
          <ul className="mt-3 space-y-3">
            {insights.filter(i => i.severity === "high" || i.severity === "medium").map(i => (
              <li key={i.id} className="rounded-xl border border-border/60 p-3 hover:bg-muted/40 transition">
                <div className="text-sm font-medium">{i.title}</div>
                <div className="text-xs text-muted-foreground mt-1">{i.summary}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {insights.map(i => {
          const S = sev[i.severity as keyof typeof sev];
          const Icon = S.icon;
          return (
            <div key={i.id} className="group rounded-2xl border border-border/60 bg-card p-5 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[var(--shadow-elevated)] transition cursor-default">
              <div className="flex items-center justify-between">
                <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium ${S.bg} ${S.color}`}>
                  <Icon className="h-3 w-3" /> {S.label}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{i.id}</span>
              </div>
              <h3 className="font-display text-base font-semibold mt-3">{i.title}</h3>
              <p className="text-sm text-muted-foreground mt-1.5">{i.summary}</p>
              <div className="mt-4 pt-4 border-t border-border/60">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Recommendation</div>
                <div className="text-sm flex gap-2"><TrendingUp className="h-4 w-4 text-primary shrink-0 mt-0.5" /> {i.recommendation}</div>
              </div>
            </div>
          );
        })}
      </section>
    </AppShell>
  );
}
