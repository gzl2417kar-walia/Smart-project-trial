import type { AgentStatus } from "@/lib/mock/data";

const styles: Record<AgentStatus, string> = {
  "Available": "bg-emerald/15 text-emerald border-emerald/30",
  "On Call":   "bg-primary/15 text-primary border-primary/30",
  "Break":     "bg-chart-4/15 text-chart-4 border-chart-4/30",
  "Offline":   "bg-muted text-muted-foreground border-border",
};

export function StatusBadge({ status }: { status: AgentStatus }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border text-[11px] font-medium ${styles[status]}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}
