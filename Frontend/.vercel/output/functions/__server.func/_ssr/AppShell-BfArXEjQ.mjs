import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, e as useRouterState, L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useCurrentUser, a as auth } from "./auth-DY81u7GG.mjs";
import { R as Root2, T as Trigger, P as Portal2, C as Content2, L as Label2, S as Separator2, I as Item2, a as SubTrigger2, b as SubContent2, c as CheckboxItem2, d as ItemIndicator2, e as RadioItem2 } from "../_libs/radix-ui__react-dropdown-menu.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { T as Toaster$1 } from "../_libs/sonner.mjs";
import { R as Root, P as Portal, C as Content, a as Close, T as Title, O as Overlay, D as Description } from "../_libs/radix-ui__react-dialog.mjs";
import { A as Activity, L as LayoutDashboard, F as FileText, U as Users, S as Sparkles, l as Bell, x as Settings, f as Search, h as ChevronDown, y as Camera, z as Trash2, E as LogOut, P as Phone, m as Clock, o as TrendingUp, X, H as ChevronRight, i as Check, J as Circle } from "../_libs/lucide-react.mjs";
const agents = [
  { id: "AG-01", name: "Emma Carter", avatar: "EC", calls: 18, tickets: 14, csat: 4.8, resolutionRate: 94, status: "On Call", shift: "08:00 – 16:00" },
  { id: "AG-02", name: "Sophia Reed", avatar: "SR", calls: 15, tickets: 12, csat: 4.7, resolutionRate: 91, status: "Available", shift: "08:00 – 16:00" },
  { id: "AG-03", name: "Olivia Bennett", avatar: "OB", calls: 12, tickets: 10, csat: 4.6, resolutionRate: 88, status: "Available", shift: "09:00 – 17:00" },
  { id: "AG-04", name: "Liam Brooks", avatar: "LB", calls: 14, tickets: 11, csat: 4.5, resolutionRate: 87, status: "On Call", shift: "09:00 – 17:00" },
  { id: "AG-05", name: "Noah Turner", avatar: "NT", calls: 10, tickets: 8, csat: 4.4, resolutionRate: 84, status: "Break", shift: "10:00 – 18:00" },
  { id: "AG-06", name: "Ava Collins", avatar: "AC", calls: 13, tickets: 11, csat: 4.7, resolutionRate: 90, status: "Available", shift: "10:00 – 18:00" },
  { id: "AG-07", name: "Mason Cooper", avatar: "MC", calls: 9, tickets: 7, csat: 4.3, resolutionRate: 82, status: "Offline", shift: "12:00 – 20:00" },
  { id: "AG-08", name: "Mia Richardson", avatar: "MR", calls: 11, tickets: 9, csat: 4.6, resolutionRate: 89, status: "On Call", shift: "12:00 – 20:00" },
  { id: "AG-09", name: "Ethan Foster", avatar: "EF", calls: 8, tickets: 6, csat: 4.2, resolutionRate: 80, status: "Break", shift: "13:00 – 21:00" },
  { id: "AG-10", name: "Charlotte Hayes", avatar: "CH", calls: 12, tickets: 10, csat: 4.8, resolutionRate: 93, status: "Available", shift: "13:00 – 21:00" }
];
const kpis = {
  totalCalls: agents.reduce((s, a) => s + a.calls, 0),
  // ~112
  ticketsResolved: agents.reduce((s, a) => s + a.tickets, 0),
  // ~98
  avgCsat: +(agents.reduce((s, a) => s + a.csat, 0) / agents.length).toFixed(2),
  activeAgents: agents.filter((a) => a.status !== "Offline").length,
  missedCalls: 6
};
const operationalTrends = [
  { time: "08:00", calls: 9, tickets: 7, csat: 4.5, utilization: 62 },
  { time: "09:00", calls: 14, tickets: 11, csat: 4.6, utilization: 71 },
  { time: "10:00", calls: 17, tickets: 13, csat: 4.7, utilization: 78 },
  { time: "11:00", calls: 19, tickets: 16, csat: 4.7, utilization: 82 },
  { time: "12:00", calls: 12, tickets: 10, csat: 4.5, utilization: 68 },
  { time: "13:00", calls: 11, tickets: 9, csat: 4.4, utilization: 65 },
  { time: "14:00", calls: 16, tickets: 13, csat: 4.6, utilization: 80 },
  { time: "15:00", calls: 18, tickets: 14, csat: 4.7, utilization: 84 },
  { time: "16:00", calls: 15, tickets: 12, csat: 4.6, utilization: 77 },
  { time: "17:00", calls: 10, tickets: 8, csat: 4.5, utilization: 66 }
];
const reports = [
  {
    id: "RPT-2041",
    date: "2026-06-05",
    type: "Weekly",
    period: "May 30 – Jun 5",
    generatedBy: "AI Engine",
    status: "Ready",
    summary: "Weekly operations remained stable with a 4% lift in CSAT and a slight uptick in missed calls during evening shifts.",
    observations: ["Total handled calls trending +6% week over week", "Email backlog reduced from 31 to 17", "CSAT highest on weekday mornings"],
    risks: ["Evening coverage thin between 19:00–21:00", "Mason Cooper resolution rate below team median"],
    recommendations: ["Add 1 floating agent to evening rotation", "Schedule coaching session for low-performing tier"],
    insights: ["Monday morning call spikes detected", "Resolution rates improved after staffing adjustment"]
  },
  {
    id: "RPT-2040",
    date: "2026-05-29",
    type: "Weekly",
    period: "May 23 – May 29",
    generatedBy: "AI Engine",
    status: "Ready",
    summary: "Steady performance with consistent CSAT above 4.5 across all shifts.",
    observations: ["Average handle time stable at 6m12s", "No SLA breaches recorded"],
    risks: ["Email queue trending up Fridays"],
    recommendations: ["Pre-stage email triage on Thursday afternoons"],
    insights: ["CSAT dropped during late evening shifts"]
  },
  {
    id: "RPT-2039",
    date: "2026-05-01",
    type: "Monthly",
    period: "April 2026",
    generatedBy: "AI Engine",
    status: "Ready",
    summary: "April closed with the strongest month-over-month CSAT growth of the quarter.",
    observations: ["Tickets resolved +12% vs March", "Active agent utilization averaged 76%"],
    risks: ["Single-channel dependency on voice during peak"],
    recommendations: ["Pilot deflection to chat for tier-1 queries"],
    insights: ["Resolution rates improved after staffing adjustment"]
  },
  {
    id: "RPT-2038",
    date: "2026-05-15",
    type: "Custom",
    period: "Promo Window",
    generatedBy: "Olivia Bennett",
    status: "Archived",
    summary: "Promotional period generated 22% surge in inbound contacts handled with controlled wait times.",
    observations: ["Peak hour 11:00 recorded 19 calls", "Email pending stayed under 25 throughout"],
    risks: ["Repeat callers spike on day 2 of promo"],
    recommendations: ["Add proactive FAQ blast 24h before promo"],
    insights: ["Monday morning call spikes detected"]
  },
  {
    id: "RPT-2037",
    date: "2026-06-06",
    type: "Weekly",
    period: "Jun 6 – Jun 12 (live)",
    generatedBy: "AI Engine",
    status: "Processing",
    summary: "Generating in-progress report from live operational stream.",
    observations: [],
    risks: [],
    recommendations: [],
    insights: []
  }
];
const notifications = [
  { id: "N-01", title: "Missed call spike", message: "6 missed calls in the last hour — above the 4-call threshold.", time: "5 min ago", type: "alert", read: false },
  { id: "N-02", title: "AI weekly report ready", message: "RPT-2041 generated for May 30 – Jun 5.", time: "1 h ago", type: "success", read: false },
  { id: "N-03", title: "Email queue rising", message: "17 emails pending — projected to exceed 25 by 17:00.", time: "2 h ago", type: "warning", read: false },
  { id: "N-04", title: "Shift handover complete", message: "Morning team signed off at 16:00.", time: "3 h ago", type: "info", read: true },
  { id: "N-05", title: "CSAT milestone", message: "Team CSAT crossed 4.7 today.", time: "Yesterday", type: "success", read: true },
  { id: "N-06", title: "Make.com sync healthy", message: "All 4 scenarios reporting green.", time: "Yesterday", type: "info", read: true }
];
const insights = [
  { id: "I-01", title: "Late evening CSAT dip", severity: "high", summary: "CSAT drops 0.4 points after 19:00 across the last 7 days.", recommendation: "Add 1 senior agent to evening rotation." },
  { id: "I-02", title: "Monday morning call surge", severity: "medium", summary: "Inbound calls spike 38% between 09:00–11:00 on Mondays.", recommendation: "Stagger Monday breaks toward midday." },
  { id: "I-03", title: "Resolution lift after staffing", severity: "low", summary: "Resolution rate rose 7% after last week's schedule adjustment.", recommendation: "Lock new schedule for the next two weeks." },
  { id: "I-04", title: "Email backlog risk", severity: "medium", summary: "Email queue grows fastest on Friday afternoons.", recommendation: "Pre-stage email triage Thursday 15:00." },
  { id: "I-05", title: "Repeat-caller cluster", severity: "low", summary: "12% of callers returned within 24h on billing topic.", recommendation: "Update billing FAQ and IVR prompt." },
  { id: "I-06", title: "Agent fatigue signal", severity: "medium", summary: "Two agents on back-to-back peak shifts show CSAT decline.", recommendation: "Rotate peak coverage across the week." }
];
const weeklySchedule = [
  { day: "Mon", morning: 4, afternoon: 5, evening: 3 },
  { day: "Tue", morning: 4, afternoon: 4, evening: 3 },
  { day: "Wed", morning: 5, afternoon: 5, evening: 3 },
  { day: "Thu", morning: 4, afternoon: 5, evening: 3 },
  { day: "Fri", morning: 5, afternoon: 5, evening: 4 },
  { day: "Sat", morning: 3, afternoon: 3, evening: 2 },
  { day: "Sun", morning: 2, afternoon: 3, evening: 2 }
];
const US_AREA_CODES = ["212", "415", "312", "305", "404", "617", "206", "713", "702", "303", "512", "602", "720", "646", "917", "408", "503", "619", "202", "786"];
const CUSTOMER_NAMES = [
  "James Wilson",
  "Patricia Moore",
  "Robert Anderson",
  "Linda Thomas",
  "Michael Garcia",
  "Barbara Martinez",
  "William Robinson",
  "Elizabeth Clark",
  "David Lewis",
  "Jennifer Walker",
  "Richard Hall",
  "Maria Allen",
  "Joseph Young",
  "Susan King",
  "Thomas Wright",
  "Karen Lopez",
  "Christopher Hill",
  "Nancy Scott",
  "Daniel Green",
  "Lisa Adams",
  "Matthew Baker",
  "Margaret Nelson",
  "Anthony Carter",
  "Sandra Mitchell",
  "Mark Perez",
  "Ashley Roberts",
  "Steven Turner",
  "Kimberly Phillips",
  "Paul Campbell",
  "Donna Parker"
];
function phoneFor(seed) {
  const ac = US_AREA_CODES[seed % US_AREA_CODES.length];
  const mid = String(200 + seed * 37 % 800).padStart(3, "0");
  const last = String(seed * 7919 % 1e4).padStart(4, "0");
  return `+1 (${ac}) ${mid}-${last}`;
}
function customerFor(seed) {
  return CUSTOMER_NAMES[seed % CUSTOMER_NAMES.length];
}
const CALL_TOPICS = [
  "Billing inquiry",
  "Subscription upgrade",
  "Account verification",
  "Refund request",
  "Technical support",
  "Product return",
  "Plan change",
  "Password reset"
];
function buildActiveCalls() {
  const now = Date.now();
  const onCall = agents.filter((a) => a.status === "On Call");
  return onCall.map((a, idx) => {
    const seed = parseInt(a.id.replace(/\D/g, ""), 10) || idx + 1;
    const startedAt = now - 6e4 * (2 + seed * 3 % 18);
    return {
      id: `CL-${a.id}`,
      agentId: a.id,
      agentName: a.name,
      customer: customerFor(seed + 3),
      phone: phoneFor(seed + 11),
      startedAt,
      topic: CALL_TOPICS[seed % CALL_TOPICS.length]
    };
  });
}
const MISSED_REASONS = ["No answer", "After hours", "Voicemail", "Caller dropped"];
function buildMissedCalls() {
  const now = Date.now();
  return Array.from({ length: kpis.missedCalls }).map((_, i) => ({
    id: `MC-${i + 1}`,
    customer: customerFor(i + 5),
    phone: phoneFor(i + 19),
    at: now - (i + 1) * (12 + i * 7 % 25) * 6e4,
    // staggered within the last few hours
    reason: MISSED_REASONS[i % MISSED_REASONS.length]
  }));
}
function buildRecentCalls(limit = 12) {
  const now = Date.now();
  const out = [];
  let cursor = now - 4 * 6e4;
  for (let i = 0; i < limit; i++) {
    const a = agents[i % agents.length];
    const seed = (i + 1) * 13;
    const durationSec = 90 + seed * 11 % 540;
    cursor -= (5 + seed * 3 % 14) * 6e4;
    out.push({
      id: `RC-${i + 1}`,
      agentId: a.id,
      agentName: a.name,
      customer: customerFor(seed + 1),
      phone: phoneFor(seed),
      at: cursor,
      durationSec,
      outcome: ["Resolved", "Resolved", "Resolved", "Escalated", "Follow-up"][seed % 5]
    });
  }
  return out;
}
function formatDuration(sec) {
  if (sec < 0) sec = 0;
  const h = Math.floor(sec / 3600);
  const m = Math.floor(sec % 3600 / 60);
  const s = sec % 60;
  if (h) return `${h}h ${String(m).padStart(2, "0")}m`;
  return `${m}m ${String(s).padStart(2, "0")}s`;
}
function relativeTime(ms, now = Date.now()) {
  const diff = Math.max(0, now - ms);
  const s = Math.floor(diff / 1e3);
  if (s < 60) return `${s}s ago`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m} min ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  return d === 1 ? "Yesterday" : `${d}d ago`;
}
function liveReports() {
  const today = /* @__PURE__ */ new Date();
  const fmt = (d) => d.toISOString().slice(0, 10);
  const minus = (days) => {
    const d = new Date(today);
    d.setDate(d.getDate() - days);
    return d;
  };
  const monthName = (d) => d.toLocaleString("en-US", { month: "long", year: "numeric" });
  const day = (d) => d.toLocaleString("en-US", { month: "short", day: "numeric" });
  return [
    { ...reports[0], date: fmt(minus(1)), period: `${day(minus(7))} – ${day(minus(1))}` },
    { ...reports[1], date: fmt(minus(8)), period: `${day(minus(14))} – ${day(minus(8))}` },
    { ...reports[2], date: fmt(minus(35)), period: monthName(minus(35)) },
    { ...reports[3], date: fmt(minus(20)), period: "Promo Window" },
    { ...reports[4], date: fmt(today), period: `${day(today)} – ${day(new Date(today.getTime() + 6 * 864e5))} (live)` }
  ];
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const DropdownMenu = Root2;
const DropdownMenuTrigger = Trigger;
const DropdownMenuSubTrigger = reactExports.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  SubTrigger2,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "ml-auto" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
const DropdownMenuSubContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  SubContent2,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = SubContent2.displayName;
const DropdownMenuContent = reactExports.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Portal2, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = Content2.displayName;
const DropdownMenuItem = reactExports.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Item2,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = Item2.displayName;
const DropdownMenuCheckboxItem = reactExports.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  CheckboxItem2,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIndicator2, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
const DropdownMenuRadioItem = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  RadioItem2,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIndicator2, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = RadioItem2.displayName;
const DropdownMenuLabel = reactExports.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Label2,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
    ...props
  }
));
DropdownMenuLabel.displayName = Label2.displayName;
const DropdownMenuSeparator = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Separator2,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = Separator2.displayName;
const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(badgeVariants({ variant }), className), ...props });
}
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
const SETTINGS_KEY = "smart-reporter-settings";
const DEFAULT_SETTINGS = {
  theme: "dark",
  compact: false,
  emailDigests: true,
  pushNotifications: false,
  aiRiskAlerts: true,
  integrations: {
    Supabase: { url: "", connected: false },
    "Make.com": { url: "", connected: false },
    "n8n": { url: "", connected: false },
    "Google Sheets": { url: "", connected: false }
  },
  apiConfig: { baseUrl: "", anonKey: "", serviceKey: "" }
};
let settings = DEFAULT_SETTINGS;
const sListeners = /* @__PURE__ */ new Set();
function loadSettings() {
  if (typeof window === "undefined") return;
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (raw) settings = { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
  } catch {
  }
}
loadSettings();
function persistSettings() {
  if (typeof window !== "undefined") localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  applySettingsToDom();
  sListeners.forEach((l) => l());
}
function applySettingsToDom() {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.classList.toggle("light", settings.theme === "light");
  root.classList.toggle("dark", settings.theme === "dark");
  root.dataset.compact = settings.compact ? "true" : "false";
}
function updateSettings(patch) {
  settings = { ...settings, ...patch };
  persistSettings();
}
function updateIntegration(name, patch) {
  settings = {
    ...settings,
    integrations: {
      ...settings.integrations,
      [name]: { ...settings.integrations[name] ?? { url: "", connected: false }, ...patch }
    }
  };
  persistSettings();
}
function useSettings() {
  return reactExports.useSyncExternalStore(
    (cb) => {
      sListeners.add(cb);
      return () => sListeners.delete(cb);
    },
    () => settings,
    () => DEFAULT_SETTINGS
  );
}
const NOTIF_KEY = "smart-reporter-notif-read";
let readSet = /* @__PURE__ */ new Set();
const nListeners = /* @__PURE__ */ new Set();
function loadNotif() {
  if (typeof window === "undefined") return;
  try {
    const raw = localStorage.getItem(NOTIF_KEY);
    readSet = new Set(raw ? JSON.parse(raw) : notifications.filter((n) => n.read).map((n) => n.id));
  } catch {
    readSet = /* @__PURE__ */ new Set();
  }
}
loadNotif();
function persistNotif() {
  if (typeof window !== "undefined") localStorage.setItem(NOTIF_KEY, JSON.stringify([...readSet]));
  nListeners.forEach((l) => l());
}
let cachedNotifications = [];
function refreshNotificationsSnapshot() {
  cachedNotifications = notifications.map((n) => ({ ...n, read: readSet.has(n.id) }));
  return cachedNotifications;
}
refreshNotificationsSnapshot();
function markRead(id) {
  readSet.add(id);
  refreshNotificationsSnapshot();
  persistNotif();
}
function markAllRead() {
  notifications.forEach((n) => readSet.add(n.id));
  refreshNotificationsSnapshot();
  persistNotif();
}
function markAllUnread() {
  readSet = /* @__PURE__ */ new Set();
  refreshNotificationsSnapshot();
  persistNotif();
}
function useNotifications() {
  return reactExports.useSyncExternalStore(
    (cb) => {
      nListeners.add(cb);
      return () => nListeners.delete(cb);
    },
    () => cachedNotifications,
    () => notifications
  );
}
function useNow(intervalMs = 1e3) {
  const [now, setNow] = reactExports.useState(() => /* @__PURE__ */ new Date());
  reactExports.useEffect(() => {
    const id = setInterval(() => setNow(/* @__PURE__ */ new Date()), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);
  return now;
}
const Sheet = Root;
const SheetPortal = Portal;
const SheetOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = Overlay.displayName;
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const SheetContent = reactExports.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(Content, { ref, className: cn(sheetVariants({ side }), className), ...props, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
    ] }),
    children
  ] })
] }));
SheetContent.displayName = Content.displayName;
const SheetHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col space-y-2 text-center sm:text-left", className), ...props });
SheetHeader.displayName = "SheetHeader";
const SheetTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title,
  {
    ref,
    className: cn("text-lg font-semibold text-foreground", className),
    ...props
  }
));
SheetTitle.displayName = Title.displayName;
const SheetDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
SheetDescription.displayName = Description.displayName;
const styles = {
  "Available": "bg-emerald/15 text-emerald border-emerald/30",
  "On Call": "bg-primary/15 text-primary border-primary/30",
  "Break": "bg-chart-4/15 text-chart-4 border-chart-4/30",
  "Offline": "bg-muted text-muted-foreground border-border"
};
function StatusBadge({ status }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border text-[11px] font-medium ${styles[status]}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-current" }),
    status
  ] });
}
function AgentSheet({ agent, onClose }) {
  const now = useNow();
  const call = agent ? buildActiveCalls().find((c) => c.agentId === agent.id) : void 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Sheet, { open: !!agent, onOpenChange: (o) => !o && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(SheetContent, { className: "bg-card border-l border-border/60 w-full sm:max-w-md overflow-y-auto", children: agent && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SheetHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-full grid place-items-center text-sm font-semibold text-primary-foreground", style: { background: "var(--gradient-violet)" }, children: agent.avatar }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTitle, { className: "font-display", children: agent.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
          agent.id,
          " · ",
          agent.shift
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Calls handled", value: agent.calls }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Tickets resolved", value: agent.tickets }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "CSAT", value: agent.csat, tone: "emerald" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Resolution", value: `${agent.resolutionRate}%` })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border/60 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-2", children: "Current status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: agent.status })
      ] }),
      call && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-primary/30 p-4 bg-primary/5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs uppercase tracking-wider text-primary font-medium mb-2 flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-3 w-3 animate-pulse" }),
          " Live call in progress"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: call.customer }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground inline-flex items-center gap-1.5 mt-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3 w-3" }),
          " ",
          call.phone
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-card/60 border border-border/40 p-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: "Duration" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg font-semibold tabular-nums", children: formatDuration(Math.floor((now.getTime() - call.startedAt) / 1e3)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-card/60 border border-border/40 p-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: "Started" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium mt-0.5", children: relativeTime(call.startedAt, now.getTime()) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground mt-3 inline-flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3" }),
          " Topic: ",
          call.topic
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border/60 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-3 w-3" }),
          " AI note"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/85", children: "Consistent performer this week. Maintain current shift; consider as mentor for tier-1 agents." })
      ] })
    ] })
  ] }) }) });
}
function Stat({ label, value, tone }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border/60 p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-wider text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `font-display text-2xl font-semibold mt-1 ${tone === "emerald" ? "text-emerald" : ""}`, children: value })
  ] });
}
const nav = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/reports", label: "Reports", icon: FileText },
  { to: "/workforce", label: "Workforce", icon: Users },
  { to: "/insights", label: "Insights", icon: Sparkles },
  { to: "/notifications", label: "Notifications", icon: Bell },
  { to: "/settings", label: "Settings", icon: Settings }
];
function AppShell({ children, title }) {
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const currentUser = useCurrentUser();
  const user = currentUser ?? auth.current();
  const notifs = useNotifications();
  const unread = notifs.filter((n) => !n.read).length;
  useSettings();
  reactExports.useEffect(() => {
    applySettingsToDom();
  }, []);
  reactExports.useEffect(() => {
    if (!auth.current()) navigate({ to: "/", replace: true });
  }, [navigate, currentUser]);
  const [q, setQ] = reactExports.useState("");
  const [searchOpen, setSearchOpen] = reactExports.useState(false);
  const [selectedAgent, setSelectedAgent] = reactExports.useState(null);
  const searchRef = reactExports.useRef(null);
  const fileInputRef = reactExports.useRef(null);
  const matches = reactExports.useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return [];
    return agents.filter(
      (a) => a.name.toLowerCase().includes(term) || a.id.toLowerCase().includes(term)
    ).slice(0, 6);
  }, [q]);
  reactExports.useEffect(() => {
    const onDoc = (e) => {
      if (!searchRef.current?.contains(e.target)) setSearchOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);
  const handleLogout = () => {
    auth.logout();
    navigate({ to: "/" });
  };
  const handleAvatarUpload = (e) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    if (!file.type.startsWith("image/")) return;
    if (file.size > 3 * 1024 * 1024) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (typeof result === "string") auth.updateProfile({ avatar: result });
    };
    reader.readAsDataURL(file);
  };
  if (!user) return null;
  const userName = user.name;
  const userInitials = (user?.name ?? "U").split(/\s+/).filter(Boolean).slice(0, 2).map((p) => p[0]?.toUpperCase() ?? "").join("") || "U";
  const userRole = user?.role ?? "Operations Manager";
  const userAvatar = user?.avatar;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen w-full bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "hidden md:flex w-64 shrink-0 flex-col border-r border-sidebar-border bg-sidebar", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 px-5 py-5 border-b border-sidebar-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid place-items-center h-9 w-9 rounded-lg", style: { background: "var(--gradient-cyan)", boxShadow: "var(--shadow-glow)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-5 w-5 text-primary-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-[15px] font-semibold tracking-tight", children: "Smart Reporter" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.18em] text-muted-foreground", children: "AI Operations" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex-1 px-3 py-4 space-y-1", children: nav.map((item) => {
        const active = pathname === item.to;
        const Icon = item.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: item.to,
            className: `group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all relative ${active ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-sidebar-foreground/75 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground"}`,
            children: [
              active && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-0 top-1.5 bottom-1.5 w-0.5 rounded-r bg-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `h-[18px] w-[18px] transition-colors ${active ? "text-primary" : "group-hover:text-primary"}` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: item.label }),
              item.to === "/notifications" && unread > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-[10px] font-semibold rounded-full px-1.5 py-0.5 bg-primary text-primary-foreground", children: unread })
            ]
          },
          item.to
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 m-3 rounded-xl glass", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-1", children: "System status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-emerald shadow-[0_0_8px_var(--emerald)]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "All systems normal" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-30 h-16 border-b border-border/60 bg-background/70 backdrop-blur-xl flex items-center px-4 md:px-8 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-xl font-semibold tracking-tight", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground hidden md:block", children: "Real-time operational intelligence" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 max-w-md mx-auto hidden lg:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", ref: searchRef, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: q,
              onChange: (e) => {
                setQ(e.target.value);
                setSearchOpen(true);
              },
              onFocus: () => setSearchOpen(true),
              placeholder: "Search agents by name or ID…",
              className: "w-full h-10 pl-10 pr-3 rounded-lg bg-muted/50 border border-border/60 text-sm placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
            }
          ),
          searchOpen && q.trim() && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute z-40 mt-2 w-full rounded-xl border border-border bg-popover shadow-lg overflow-hidden", children: matches.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 text-sm text-muted-foreground", children: [
            'No agents match "',
            q,
            '".'
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { children: matches.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => {
                setSelectedAgent(a);
                setSearchOpen(false);
                setQ("");
              },
              className: "w-full flex items-center gap-3 px-3 py-2.5 text-left hover:bg-muted/60 transition",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-full grid place-items-center text-xs font-semibold text-primary-foreground", style: { background: "var(--gradient-violet)" }, children: a.avatar }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium truncate", children: a.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground", children: [
                    a.id,
                    " · ",
                    a.shift
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: a.status })
              ]
            }
          ) }, a.id)) }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuTrigger, { className: "relative h-10 w-10 grid place-items-center rounded-lg hover:bg-muted/60 transition", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-[18px] w-[18px]" }),
              unread > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-2 right-2 h-2 w-2 rounded-full bg-primary shadow-[0_0_6px_var(--primary)]" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuContent, { align: "end", className: "w-80", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuLabel, { className: "flex items-center justify-between", children: [
                "Notifications ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", children: [
                  unread,
                  " new"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuSeparator, {}),
              notifs.slice(0, 4).map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuItem, { className: "flex flex-col items-start gap-0.5 py-2.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: n.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground line-clamp-2", children: n.message }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground/80 mt-0.5", children: n.time })
              ] }, n.id)),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuSeparator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/notifications", className: "justify-center text-primary", children: "View all" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuTrigger, { className: "flex items-center gap-2 h-10 pl-1 pr-2 rounded-lg hover:bg-muted/60 transition", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-full overflow-hidden grid place-items-center text-xs font-semibold text-primary-foreground", style: { background: "var(--gradient-violet)" }, children: userAvatar ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: userAvatar, alt: userName, className: "h-full w-full object-cover" }) : userInitials }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:block text-left leading-tight max-w-[140px]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium truncate", children: userName }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground truncate", children: userRole })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 text-muted-foreground" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuContent, { align: "end", className: "w-64", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-12 w-12 rounded-full overflow-hidden grid place-items-center text-sm font-semibold text-primary-foreground shrink-0", style: { background: "var(--gradient-violet)" }, children: userAvatar ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: userAvatar, alt: userName, className: "h-full w-full object-cover" }) : userInitials }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium truncate", children: userName }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-primary font-medium truncate", children: userRole }),
                  user?.email && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground truncate", children: user.email })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuSeparator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuItem, { onSelect: (e) => {
                e.preventDefault();
                fileInputRef.current?.click();
              }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "h-4 w-4 mr-2" }),
                " ",
                userAvatar ? "Change profile picture" : "Upload profile picture"
              ] }),
              userAvatar && /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuItem, { onSelect: (e) => {
                e.preventDefault();
                auth.updateProfile({ avatar: void 0 });
              }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4 mr-2" }),
                " Remove picture"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuSeparator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/settings", children: "Settings" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/insights", children: "AI Insights" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuSeparator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuItem, { onClick: handleLogout, className: "text-destructive focus:text-destructive", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4 mr-2" }),
                " Sign out"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref: fileInputRef, type: "file", accept: "image/*", hidden: true, onChange: handleAvatarUpload })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 p-4 md:p-8 max-w-[1500px] w-full mx-auto", children }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AgentSheet, { agent: selectedAgent, onClose: () => setSelectedAgent(null) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { position: "top-right", richColors: true })
    ] })
  ] });
}
export {
  AppShell as A,
  StatusBadge as S,
  agents as a,
  buildActiveCalls as b,
  AgentSheet as c,
  useSettings as d,
  updateSettings as e,
  formatDuration as f,
  updateIntegration as g,
  cn as h,
  useNotifications as i,
  markAllUnread as j,
  markRead as k,
  liveReports as l,
  markAllRead as m,
  Sheet as n,
  SheetContent as o,
  SheetHeader as p,
  SheetTitle as q,
  relativeTime as r,
  insights as s,
  operationalTrends as t,
  useNow as u,
  buildMissedCalls as v,
  weeklySchedule as w,
  buildRecentCalls as x
};
