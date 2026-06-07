import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Download, FileText, Search, Sparkles } from "lucide-react";
import { AppShell } from "@/components/app/AppShell";
import { liveReports, type Report } from "@/lib/mock/data";
import { ReportBody } from "./dashboard";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { getReportsList, callWebhook, createReport } from "@/lib/data.functions";
import { useSettings } from "@/lib/store";
import { toast } from "sonner";

export const Route = createFileRoute("/reports")({
  component: ReportsPage,
});

function extractList(r: Record<string, unknown>, key: string): string[] {
  const v = r[key];
  if (Array.isArray(v)) return v.map(String);
  const content = r.report_content;
  if (content && typeof content === "object" && !Array.isArray(content)) {
    const inner = (content as Record<string, unknown>)[key];
    if (Array.isArray(inner)) return inner.map(String);
  }
  return [];
}

const statusStyles: Record<Report["status"], string> = {
  Ready:      "bg-emerald/15 text-emerald border-emerald/30",
  Processing: "bg-primary/15 text-primary border-primary/30",
  Archived:   "bg-muted text-muted-foreground border-border",
};

function ReportsPage() {
  const fallback = useMemo(() => liveReports(), []);
  const fetchReports = useServerFn(getReportsList);
  const reportsQuery = useQuery({
    queryKey: ["reports"],
    queryFn: () => fetchReports(),
    refetchInterval: 60_000,
  });
  const live = reportsQuery.data?.source === "supabase" ? reportsQuery.data.data : [];
  const reports: Report[] = live.length > 0
    ? live.map((r, i): Report => ({
        id: String(r.id ?? r.report_id ?? `RPT-${1000 + i}`),
        date: String(r.created_at ?? r.date ?? new Date().toISOString()).slice(0, 10),
        type: (String(r.report_type ?? r.type ?? "Custom") as Report["type"]),
        period: String(r.reporting_period ?? r.period ?? ""),
        generatedBy: String(r.generated_by ?? "AI Engine"),
        status: (String(r.status ?? "Ready") as Report["status"]),
        summary: typeof r.report_content === "string"
          ? r.report_content
          : (r.report_content && typeof r.report_content === "object" && "summary" in (r.report_content as object)
              ? String((r.report_content as Record<string, unknown>).summary ?? "")
              : String(r.summary ?? "")),
        observations: extractList(r, "observations"),
        risks: extractList(r, "risks"),
        recommendations: extractList(r, "recommendations"),
        insights: extractList(r, "insights"),
      }))
    : fallback;
  const settings = useSettings();
  const trigger = useServerFn(callWebhook);
  const createReportFn = useServerFn(createReport);
  const [generating, setGenerating] = useState(false);

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
        trigger({ data: { url: webhook.url, payload: { source: "smart-reporter", action: "generate_report", at: new Date().toISOString() } } })
          .then((r) => {
            if (r?.ok) toast.success("Email sent");
            else toast.warning("Report saved, email failed");
          })
          .catch(() => toast.warning("Report saved, email failed"));
      }
    } catch (e) {
      toast.error(`Report generation failed: ${e instanceof Error ? e.message : "request error"}`);
    } finally {
      setGenerating(false);
    }
  };

  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<string>("all");
  const [selected, setSelected] = useState<Report | null>(null);

  const filtered = useMemo(() => reports.filter(r => {
    if (filter !== "all" && r.type !== filter) return false;
    if (q && !`${r.id} ${r.period} ${r.type} ${r.generatedBy}`.toLowerCase().includes(q.toLowerCase())) return false;
    return true;
  }), [q, filter, reports]);

  return (
    <AppShell title="Reports">
      <div className="rounded-2xl border border-border/60 bg-card p-5">
        <div className="flex flex-col md:flex-row md:items-center gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search by ID, period, generator…"
              className="w-full h-10 pl-10 pr-3 rounded-lg bg-muted/40 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
          </div>
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-full md:w-48"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All types</SelectItem>
              <SelectItem value="Weekly">Weekly</SelectItem>
              <SelectItem value="Monthly">Monthly</SelectItem>
              <SelectItem value="Custom">Custom</SelectItem>
            </SelectContent>
          </Select>
          <button onClick={generate} disabled={generating}
            className="h-10 px-4 rounded-lg font-medium text-primary-foreground inline-flex items-center gap-2 transition hover:shadow-[var(--shadow-glow)] disabled:opacity-60" style={{ background: "var(--gradient-cyan)" }}>
            <Sparkles className="h-4 w-4" /> {generating ? "Generating…" : "Generate report"}
          </button>
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-border/60 bg-card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="text-[11px] uppercase tracking-wider text-muted-foreground border-b border-border/60">
            <tr>
              <th className="text-left font-medium px-5 py-3">Report ID</th>
              <th className="text-left font-medium px-3 py-3">Generated</th>
              <th className="text-left font-medium px-3 py-3">Type</th>
              <th className="text-left font-medium px-3 py-3">Period</th>
              <th className="text-left font-medium px-3 py-3">Generated by</th>
              <th className="text-left font-medium px-3 py-3">Status</th>
              <th className="text-right font-medium px-5 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(r => (
              <tr key={r.id} className="border-b border-border/40 last:border-0 hover:bg-muted/40 transition cursor-pointer" onClick={() => r.status === "Ready" || r.status === "Archived" ? setSelected(r) : null}>
                <td className="px-5 py-3 font-medium">
                  <span className="inline-flex items-center gap-2"><FileText className="h-4 w-4 text-primary" /> {r.id}</span>
                </td>
                <td className="px-3 py-3 text-muted-foreground">{r.date}</td>
                <td className="px-3 py-3">{r.type}</td>
                <td className="px-3 py-3 text-muted-foreground">{r.period}</td>
                <td className="px-3 py-3">{r.generatedBy}</td>
                <td className="px-3 py-3">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full border text-[11px] font-medium ${statusStyles[r.status]}`}>{r.status}</span>
                </td>
                <td className="px-5 py-3 text-right">
                  <button onClick={(e) => { e.stopPropagation(); }} className="h-8 w-8 inline-grid place-items-center rounded-md hover:bg-muted/70 transition" title="Download">
                    <Download className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr><td colSpan={7} className="px-5 py-10 text-center text-muted-foreground text-sm">No reports match your filters.</td></tr>
            )}
          </tbody>
        </table>
      </div>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-2xl bg-card border-border/60">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-xl">{selected.id} — {selected.type} Report</DialogTitle>
                <DialogDescription>{selected.period} · Generated by {selected.generatedBy}</DialogDescription>
              </DialogHeader>
              <ReportBody report={selected} />
            </>
          )}
        </DialogContent>
      </Dialog>
    </AppShell>
  );
}
