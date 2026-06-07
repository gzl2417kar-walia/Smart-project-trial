import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { AlertTriangle, Bell, CheckCircle2, Info, Clock, Sparkles, ShieldAlert } from "lucide-react";
import type { NotificationItem } from "@/lib/mock/data";

interface Props {
  notification: NotificationItem | null;
  onClose: () => void;
}

const typeMap = {
  alert:   { icon: AlertTriangle, color: "text-destructive", bg: "bg-destructive/15", label: "Critical alert", tone: "Immediate attention required" },
  warning: { icon: AlertTriangle, color: "text-chart-4",     bg: "bg-chart-4/15",     label: "Warning",         tone: "Monitor closely" },
  success: { icon: CheckCircle2,  color: "text-emerald",     bg: "bg-emerald/15",     label: "Success",         tone: "All systems nominal" },
  info:    { icon: Info,          color: "text-primary",     bg: "bg-primary/15",     label: "Information",     tone: "FYI update" },
} as const;

const recommendationByType: Record<NotificationItem["type"], string> = {
  alert:   "Escalate to shift lead. Reassign idle agents to inbound queue and check IVR for routing issues.",
  warning: "Continue monitoring for 15 minutes. If trend continues, page on-call workforce manager.",
  success: "No action required. Capture this win in the next weekly retro.",
  info:    "Acknowledge and archive. No follow-up needed.",
};

export function NotificationSheet({ notification, onClose }: Props) {
  const T = notification ? typeMap[notification.type] : null;
  const Icon = T?.icon ?? Bell;

  return (
    <Sheet open={!!notification} onOpenChange={(o) => !o && onClose()}>
      <SheetContent className="bg-card border-l border-border/60 w-full sm:max-w-md overflow-y-auto">
        {notification && T && (
          <>
            <SheetHeader>
              <div className="flex items-center gap-3">
                <div className={`h-12 w-12 rounded-xl grid place-items-center ${T.bg} ${T.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <SheetTitle className="font-display">{notification.title}</SheetTitle>
                  <p className="text-xs text-muted-foreground">{notification.id} · {T.label}</p>
                </div>
              </div>
            </SheetHeader>

            <div className="mt-6 space-y-4">
              <div className="rounded-xl border border-border/60 p-4">
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Message</div>
                <p className="text-sm text-foreground/90 leading-relaxed">{notification.message}</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-border/60 p-4">
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground flex items-center gap-1.5"><Clock className="h-3 w-3" /> Received</div>
                  <div className="font-display text-base font-semibold mt-1">{notification.time}</div>
                </div>
                <div className="rounded-xl border border-border/60 p-4">
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground flex items-center gap-1.5"><ShieldAlert className="h-3 w-3" /> Severity</div>
                  <div className={`font-display text-base font-semibold mt-1 ${T.color}`}>{T.label}</div>
                </div>
              </div>

              <div className="rounded-xl border border-border/60 p-4">
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Status</div>
                <p className="text-sm text-foreground/85">{T.tone}. This notification is currently {notification.read ? "marked as read" : "unread"}.</p>
              </div>

              <div className="rounded-xl border border-primary/30 p-4 bg-primary/5">
                <div className="text-xs uppercase tracking-wider text-primary font-medium mb-2 flex items-center gap-1.5"><Sparkles className="h-3 w-3" /> AI recommendation</div>
                <p className="text-sm text-foreground/90">{recommendationByType[notification.type]}</p>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}