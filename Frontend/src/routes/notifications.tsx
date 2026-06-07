import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app/AppShell";
import { type NotificationItem } from "@/lib/mock/data";
import { NotificationSheet } from "@/components/app/NotificationSheet";
import { AlertTriangle, Bell, CheckCheck, CheckCircle2, Info, RotateCcw } from "lucide-react";
import { useState } from "react";
import { useNotifications, markRead, markAllRead, markAllUnread } from "@/lib/store";
import { toast } from "sonner";

export const Route = createFileRoute("/notifications")({
  component: NotificationsPage,
});

const typeMap: Record<NotificationItem["type"], { icon: typeof Bell; color: string; bg: string }> = {
  alert:   { icon: AlertTriangle, color: "text-destructive", bg: "bg-destructive/15" },
  warning: { icon: AlertTriangle, color: "text-chart-4",    bg: "bg-chart-4/15" },
  success: { icon: CheckCircle2,  color: "text-emerald",    bg: "bg-emerald/15" },
  info:    { icon: Info,          color: "text-primary",    bg: "bg-primary/15" },
};

function NotificationsPage() {
  const [filter, setFilter] = useState<"all" | "unread" | NotificationItem["type"]>("all");
  const [selected, setSelected] = useState<NotificationItem | null>(null);
  const notifications = useNotifications();
  const list = notifications.filter(n => filter === "all" ? true : filter === "unread" ? !n.read : n.type === filter);
  const unreadCount = notifications.filter(n => !n.read).length;

  const tabs: { key: typeof filter; label: string; count: number }[] = [
    { key: "all",     label: "All",      count: notifications.length },
    { key: "unread",  label: "Unread",   count: notifications.filter(n => !n.read).length },
    { key: "alert",   label: "Alerts",   count: notifications.filter(n => n.type === "alert").length },
    { key: "warning", label: "Warnings", count: notifications.filter(n => n.type === "warning").length },
    { key: "success", label: "Success",  count: notifications.filter(n => n.type === "success").length },
  ];

  return (
    <AppShell title="Notifications">
      <div className="rounded-2xl border border-border/60 bg-card overflow-hidden">
        <div className="flex flex-wrap items-center gap-1 p-2 border-b border-border/60">
          {tabs.map(t => (
            <button key={t.key} onClick={() => setFilter(t.key)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition ${filter === t.key ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"}`}>
              {t.label} <span className="ml-1 text-xs opacity-70">{t.count}</span>
            </button>
          ))}
          <div className="ml-auto flex items-center gap-1">
            <button
              onClick={() => { markAllRead(); toast.success("All notifications marked as read"); }}
              disabled={unreadCount === 0}
              className="text-xs inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border hover:bg-muted/60 transition disabled:opacity-40">
              <CheckCheck className="h-3.5 w-3.5" /> Mark all read
            </button>
            <button
              onClick={() => { markAllUnread(); toast.info("All notifications restored"); }}
              className="text-xs inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border hover:bg-muted/60 transition">
              <RotateCcw className="h-3.5 w-3.5" /> Reset
            </button>
          </div>
        </div>
        <ul>
          {list.map(n => {
            const T = typeMap[n.type];
            const Icon = T.icon;
            return (
              <li
                key={n.id}
                onClick={() => { if (!n.read) markRead(n.id); setSelected(n); }}
                className={`group flex gap-4 px-5 py-4 border-b border-border/40 last:border-0 cursor-pointer transition hover:bg-muted/50 hover:shadow-sm ${!n.read ? "bg-primary/[0.04]" : ""}`}
              >
                <div className={`h-9 w-9 rounded-lg grid place-items-center shrink-0 ${T.bg} ${T.color} transition group-hover:scale-105`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm transition-all font-medium group-hover:font-bold">{n.title}</span>
                    {!n.read && <span className="h-1.5 w-1.5 rounded-full bg-primary" />}
                  </div>
                  <p className="text-sm text-muted-foreground mt-0.5 transition-colors group-hover:text-foreground">{n.message}</p>
                </div>
                <div className="text-xs text-muted-foreground whitespace-nowrap transition group-hover:text-foreground">{n.time}</div>
              </li>
            );
          })}
          {list.length === 0 && (
            <li className="px-5 py-10 text-center text-muted-foreground text-sm">No notifications.</li>
          )}
        </ul>
      </div>
      <NotificationSheet
        notification={selected ? notifications.find(n => n.id === selected.id) ?? selected : null}
        onClose={() => setSelected(null)}
      />
    </AppShell>
  );
}
