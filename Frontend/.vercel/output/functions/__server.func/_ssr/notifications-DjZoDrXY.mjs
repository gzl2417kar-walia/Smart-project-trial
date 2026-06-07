import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { i as useNotifications, A as AppShell, m as markAllRead, j as markAllUnread, k as markRead, n as Sheet, o as SheetContent, p as SheetHeader, q as SheetTitle } from "./AppShell-BfArXEjQ.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { k as CheckCheck, R as RotateCcw, I as Info, C as CircleCheck, T as TriangleAlert, l as Bell, m as Clock, n as ShieldAlert, S as Sparkles } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
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
const typeMap$1 = {
  alert: { icon: TriangleAlert, color: "text-destructive", bg: "bg-destructive/15", label: "Critical alert", tone: "Immediate attention required" },
  warning: { icon: TriangleAlert, color: "text-chart-4", bg: "bg-chart-4/15", label: "Warning", tone: "Monitor closely" },
  success: { icon: CircleCheck, color: "text-emerald", bg: "bg-emerald/15", label: "Success", tone: "All systems nominal" },
  info: { icon: Info, color: "text-primary", bg: "bg-primary/15", label: "Information", tone: "FYI update" }
};
const recommendationByType = {
  alert: "Escalate to shift lead. Reassign idle agents to inbound queue and check IVR for routing issues.",
  warning: "Continue monitoring for 15 minutes. If trend continues, page on-call workforce manager.",
  success: "No action required. Capture this win in the next weekly retro.",
  info: "Acknowledge and archive. No follow-up needed."
};
function NotificationSheet({ notification, onClose }) {
  const T = notification ? typeMap$1[notification.type] : null;
  const Icon = T?.icon ?? Bell;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Sheet, { open: !!notification, onOpenChange: (o) => !o && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(SheetContent, { className: "bg-card border-l border-border/60 w-full sm:max-w-md overflow-y-auto", children: notification && T && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SheetHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-12 w-12 rounded-xl grid place-items-center ${T.bg} ${T.color}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTitle, { className: "font-display", children: notification.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
          notification.id,
          " · ",
          T.label
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border/60 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-2", children: "Message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/90 leading-relaxed", children: notification.message })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border/60 p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] uppercase tracking-wider text-muted-foreground flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3" }),
            " Received"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-base font-semibold mt-1", children: notification.time })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border/60 p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] uppercase tracking-wider text-muted-foreground flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "h-3 w-3" }),
            " Severity"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `font-display text-base font-semibold mt-1 ${T.color}`, children: T.label })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border/60 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-2", children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-foreground/85", children: [
          T.tone,
          ". This notification is currently ",
          notification.read ? "marked as read" : "unread",
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-primary/30 p-4 bg-primary/5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs uppercase tracking-wider text-primary font-medium mb-2 flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3" }),
          " AI recommendation"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/90", children: recommendationByType[notification.type] })
      ] })
    ] })
  ] }) }) });
}
const typeMap = {
  alert: {
    icon: TriangleAlert,
    color: "text-destructive",
    bg: "bg-destructive/15"
  },
  warning: {
    icon: TriangleAlert,
    color: "text-chart-4",
    bg: "bg-chart-4/15"
  },
  success: {
    icon: CircleCheck,
    color: "text-emerald",
    bg: "bg-emerald/15"
  },
  info: {
    icon: Info,
    color: "text-primary",
    bg: "bg-primary/15"
  }
};
function NotificationsPage() {
  const [filter, setFilter] = reactExports.useState("all");
  const [selected, setSelected] = reactExports.useState(null);
  const notifications = useNotifications();
  const list = notifications.filter((n) => filter === "all" ? true : filter === "unread" ? !n.read : n.type === filter);
  const unreadCount = notifications.filter((n) => !n.read).length;
  const tabs = [{
    key: "all",
    label: "All",
    count: notifications.length
  }, {
    key: "unread",
    label: "Unread",
    count: notifications.filter((n) => !n.read).length
  }, {
    key: "alert",
    label: "Alerts",
    count: notifications.filter((n) => n.type === "alert").length
  }, {
    key: "warning",
    label: "Warnings",
    count: notifications.filter((n) => n.type === "warning").length
  }, {
    key: "success",
    label: "Success",
    count: notifications.filter((n) => n.type === "success").length
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { title: "Notifications", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border/60 bg-card overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-1 p-2 border-b border-border/60", children: [
        tabs.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setFilter(t.key), className: `px-3 py-1.5 rounded-md text-sm font-medium transition ${filter === t.key ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"}`, children: [
          t.label,
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 text-xs opacity-70", children: t.count })
        ] }, t.key)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
            markAllRead();
            toast.success("All notifications marked as read");
          }, disabled: unreadCount === 0, className: "text-xs inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border hover:bg-muted/60 transition disabled:opacity-40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCheck, { className: "h-3.5 w-3.5" }),
            " Mark all read"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
            markAllUnread();
            toast.info("All notifications restored");
          }, className: "text-xs inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border hover:bg-muted/60 transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "h-3.5 w-3.5" }),
            " Reset"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
        list.map((n) => {
          const T = typeMap[n.type];
          const Icon = T.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { onClick: () => {
            if (!n.read) markRead(n.id);
            setSelected(n);
          }, className: `group flex gap-4 px-5 py-4 border-b border-border/40 last:border-0 cursor-pointer transition hover:bg-muted/50 hover:shadow-sm ${!n.read ? "bg-primary/[0.04]" : ""}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-9 w-9 rounded-lg grid place-items-center shrink-0 ${T.bg} ${T.color} transition group-hover:scale-105`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm transition-all font-medium group-hover:font-bold", children: n.title }),
                !n.read && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5 transition-colors group-hover:text-foreground", children: n.message })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground whitespace-nowrap transition group-hover:text-foreground", children: n.time })
          ] }, n.id);
        }),
        list.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "px-5 py-10 text-center text-muted-foreground text-sm", children: "No notifications." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(NotificationSheet, { notification: selected ? notifications.find((n) => n.id === selected.id) ?? selected : null, onClose: () => setSelected(null) })
  ] });
}
export {
  NotificationsPage as component
};
