import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { StatusBadge } from "@/components/app/StatusBadge";
import { Phone, Clock, TrendingUp, Activity } from "lucide-react";
import type { Agent } from "@/lib/mock/data";
import { buildActiveCalls, formatDuration, relativeTime } from "@/lib/mock/data";
import { useNow } from "@/lib/store";

interface Props {
  agent: Agent | null;
  onClose: () => void;
}

export function AgentSheet({ agent, onClose }: Props) {
  const now = useNow();
  const call = agent ? buildActiveCalls().find((c) => c.agentId === agent.id) : undefined;

  return (
    <Sheet open={!!agent} onOpenChange={(o) => !o && onClose()}>
      <SheetContent className="bg-card border-l border-border/60 w-full sm:max-w-md overflow-y-auto">
        {agent && (
          <>
            <SheetHeader>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full grid place-items-center text-sm font-semibold text-primary-foreground" style={{ background: "var(--gradient-violet)" }}>{agent.avatar}</div>
                <div>
                  <SheetTitle className="font-display">{agent.name}</SheetTitle>
                  <p className="text-xs text-muted-foreground">{agent.id} · {agent.shift}</p>
                </div>
              </div>
            </SheetHeader>

            <div className="mt-6 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <Stat label="Calls handled" value={agent.calls} />
                <Stat label="Tickets resolved" value={agent.tickets} />
                <Stat label="CSAT" value={agent.csat} tone="emerald" />
                <Stat label="Resolution" value={`${agent.resolutionRate}%`} />
              </div>

              <div className="rounded-xl border border-border/60 p-4">
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Current status</div>
                <StatusBadge status={agent.status} />
              </div>

              {call && (
                <div className="rounded-xl border border-primary/30 p-4 bg-primary/5">
                  <div className="text-xs uppercase tracking-wider text-primary font-medium mb-2 flex items-center gap-1.5"><Activity className="h-3 w-3 animate-pulse" /> Live call in progress</div>
                  <div className="text-sm font-medium">{call.customer}</div>
                  <div className="text-xs text-muted-foreground inline-flex items-center gap-1.5 mt-0.5"><Phone className="h-3 w-3" /> {call.phone}</div>
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <div className="rounded-lg bg-card/60 border border-border/40 p-2.5">
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Duration</div>
                      <div className="font-display text-lg font-semibold tabular-nums">{formatDuration(Math.floor((now.getTime() - call.startedAt) / 1000))}</div>
                    </div>
                    <div className="rounded-lg bg-card/60 border border-border/40 p-2.5">
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Started</div>
                      <div className="text-sm font-medium mt-0.5">{relativeTime(call.startedAt, now.getTime())}</div>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-3 inline-flex items-center gap-1.5"><Clock className="h-3 w-3" /> Topic: {call.topic}</div>
                </div>
              )}

              <div className="rounded-xl border border-border/60 p-4">
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5"><TrendingUp className="h-3 w-3" /> AI note</div>
                <p className="text-sm text-foreground/85">Consistent performer this week. Maintain current shift; consider as mentor for tier-1 agents.</p>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}

function Stat({ label, value, tone }: { label: string; value: string | number; tone?: "emerald" }) {
  return (
    <div className="rounded-xl border border-border/60 p-4">
      <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className={`font-display text-2xl font-semibold mt-1 ${tone === "emerald" ? "text-emerald" : ""}`}>{value}</div>
    </div>
  );
}