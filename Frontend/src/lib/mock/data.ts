export type AgentStatus = "Available" | "On Call" | "Break" | "Offline";

export interface Agent {
  id: string;
  name: string;
  avatar: string;
  calls: number;
  tickets: number;
  csat: number;
  resolutionRate: number;
  status: AgentStatus;
  shift: string;
}

export const agents: Agent[] = [
  { id: "AG-01", name: "Emma Carter",       avatar: "EC", calls: 18, tickets: 14, csat: 4.8, resolutionRate: 94, status: "On Call",   shift: "08:00 – 16:00" },
  { id: "AG-02", name: "Sophia Reed",       avatar: "SR", calls: 15, tickets: 12, csat: 4.7, resolutionRate: 91, status: "Available", shift: "08:00 – 16:00" },
  { id: "AG-03", name: "Olivia Bennett",    avatar: "OB", calls: 12, tickets: 10, csat: 4.6, resolutionRate: 88, status: "Available", shift: "09:00 – 17:00" },
  { id: "AG-04", name: "Liam Brooks",       avatar: "LB", calls: 14, tickets: 11, csat: 4.5, resolutionRate: 87, status: "On Call",   shift: "09:00 – 17:00" },
  { id: "AG-05", name: "Noah Turner",       avatar: "NT", calls: 10, tickets:  8, csat: 4.4, resolutionRate: 84, status: "Break",     shift: "10:00 – 18:00" },
  { id: "AG-06", name: "Ava Collins",       avatar: "AC", calls: 13, tickets: 11, csat: 4.7, resolutionRate: 90, status: "Available", shift: "10:00 – 18:00" },
  { id: "AG-07", name: "Mason Cooper",      avatar: "MC", calls:  9, tickets:  7, csat: 4.3, resolutionRate: 82, status: "Offline",   shift: "12:00 – 20:00" },
  { id: "AG-08", name: "Mia Richardson",    avatar: "MR", calls: 11, tickets:  9, csat: 4.6, resolutionRate: 89, status: "On Call",   shift: "12:00 – 20:00" },
  { id: "AG-09", name: "Ethan Foster",      avatar: "EF", calls:  8, tickets:  6, csat: 4.2, resolutionRate: 80, status: "Break",     shift: "13:00 – 21:00" },
  { id: "AG-10", name: "Charlotte Hayes",   avatar: "CH", calls: 12, tickets: 10, csat: 4.8, resolutionRate: 93, status: "Available", shift: "13:00 – 21:00" },
];

export const kpis = {
  totalCalls:    agents.reduce((s,a)=>s+a.calls, 0),    // ~112
  ticketsResolved: agents.reduce((s,a)=>s+a.tickets, 0),// ~98
  avgCsat:       +(agents.reduce((s,a)=>s+a.csat,0)/agents.length).toFixed(2),
  activeAgents:  agents.filter(a => a.status !== "Offline").length,
  emailsPending: 17,
  missedCalls:   6,
};

export const operationalTrends = [
  { time: "08:00", calls:  9, tickets:  7, csat: 4.5, utilization: 62 },
  { time: "09:00", calls: 14, tickets: 11, csat: 4.6, utilization: 71 },
  { time: "10:00", calls: 17, tickets: 13, csat: 4.7, utilization: 78 },
  { time: "11:00", calls: 19, tickets: 16, csat: 4.7, utilization: 82 },
  { time: "12:00", calls: 12, tickets: 10, csat: 4.5, utilization: 68 },
  { time: "13:00", calls: 11, tickets:  9, csat: 4.4, utilization: 65 },
  { time: "14:00", calls: 16, tickets: 13, csat: 4.6, utilization: 80 },
  { time: "15:00", calls: 18, tickets: 14, csat: 4.7, utilization: 84 },
  { time: "16:00", calls: 15, tickets: 12, csat: 4.6, utilization: 77 },
  { time: "17:00", calls: 10, tickets:  8, csat: 4.5, utilization: 66 },
];

export interface Report {
  id: string;
  date: string;
  type: "Weekly" | "Monthly" | "Custom";
  period: string;
  generatedBy: string;
  status: "Ready" | "Processing" | "Archived";
  summary: string;
  observations: string[];
  risks: string[];
  recommendations: string[];
  insights: string[];
}

export const reports: Report[] = [
  {
    id: "RPT-2041", date: "2026-06-05", type: "Weekly", period: "May 30 – Jun 5",
    generatedBy: "AI Engine", status: "Ready",
    summary: "Weekly operations remained stable with a 4% lift in CSAT and a slight uptick in missed calls during evening shifts.",
    observations: ["Total handled calls trending +6% week over week", "Email backlog reduced from 31 to 17", "CSAT highest on weekday mornings"],
    risks: ["Evening coverage thin between 19:00–21:00", "Mason Cooper resolution rate below team median"],
    recommendations: ["Add 1 floating agent to evening rotation", "Schedule coaching session for low-performing tier"],
    insights: ["Monday morning call spikes detected", "Resolution rates improved after staffing adjustment"],
  },
  {
    id: "RPT-2040", date: "2026-05-29", type: "Weekly", period: "May 23 – May 29",
    generatedBy: "AI Engine", status: "Ready",
    summary: "Steady performance with consistent CSAT above 4.5 across all shifts.",
    observations: ["Average handle time stable at 6m12s", "No SLA breaches recorded"],
    risks: ["Email queue trending up Fridays"],
    recommendations: ["Pre-stage email triage on Thursday afternoons"],
    insights: ["CSAT dropped during late evening shifts"],
  },
  {
    id: "RPT-2039", date: "2026-05-01", type: "Monthly", period: "April 2026",
    generatedBy: "AI Engine", status: "Ready",
    summary: "April closed with the strongest month-over-month CSAT growth of the quarter.",
    observations: ["Tickets resolved +12% vs March", "Active agent utilization averaged 76%"],
    risks: ["Single-channel dependency on voice during peak"],
    recommendations: ["Pilot deflection to chat for tier-1 queries"],
    insights: ["Resolution rates improved after staffing adjustment"],
  },
  {
    id: "RPT-2038", date: "2026-05-15", type: "Custom", period: "Promo Window",
    generatedBy: "Olivia Bennett", status: "Archived",
    summary: "Promotional period generated 22% surge in inbound contacts handled with controlled wait times.",
    observations: ["Peak hour 11:00 recorded 19 calls", "Email pending stayed under 25 throughout"],
    risks: ["Repeat callers spike on day 2 of promo"],
    recommendations: ["Add proactive FAQ blast 24h before promo"],
    insights: ["Monday morning call spikes detected"],
  },
  {
    id: "RPT-2037", date: "2026-06-06", type: "Weekly", period: "Jun 6 – Jun 12 (live)",
    generatedBy: "AI Engine", status: "Processing",
    summary: "Generating in-progress report from live operational stream.",
    observations: [], risks: [], recommendations: [], insights: [],
  },
];

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  time: string;
  type: "info" | "warning" | "success" | "alert";
  read: boolean;
}

export const notifications: NotificationItem[] = [
  { id: "N-01", title: "Missed call spike", message: "6 missed calls in the last hour — above the 4-call threshold.", time: "5 min ago", type: "alert", read: false },
  { id: "N-02", title: "AI weekly report ready", message: "RPT-2041 generated for May 30 – Jun 5.", time: "1 h ago", type: "success", read: false },
  { id: "N-03", title: "Email queue rising", message: "17 emails pending — projected to exceed 25 by 17:00.", time: "2 h ago", type: "warning", read: false },
  { id: "N-04", title: "Shift handover complete", message: "Morning team signed off at 16:00.", time: "3 h ago", type: "info", read: true },
  { id: "N-05", title: "CSAT milestone", message: "Team CSAT crossed 4.7 today.", time: "Yesterday", type: "success", read: true },
  { id: "N-06", title: "Make.com sync healthy", message: "All 4 scenarios reporting green.", time: "Yesterday", type: "info", read: true },
];

export const insights = [
  { id: "I-01", title: "Late evening CSAT dip", severity: "high",   summary: "CSAT drops 0.4 points after 19:00 across the last 7 days.", recommendation: "Add 1 senior agent to evening rotation." },
  { id: "I-02", title: "Monday morning call surge", severity: "medium", summary: "Inbound calls spike 38% between 09:00–11:00 on Mondays.", recommendation: "Stagger Monday breaks toward midday." },
  { id: "I-03", title: "Resolution lift after staffing", severity: "low", summary: "Resolution rate rose 7% after last week's schedule adjustment.", recommendation: "Lock new schedule for the next two weeks." },
  { id: "I-04", title: "Email backlog risk", severity: "medium", summary: "Email queue grows fastest on Friday afternoons.", recommendation: "Pre-stage email triage Thursday 15:00." },
  { id: "I-05", title: "Repeat-caller cluster", severity: "low", summary: "12% of callers returned within 24h on billing topic.", recommendation: "Update billing FAQ and IVR prompt." },
  { id: "I-06", title: "Agent fatigue signal", severity: "medium", summary: "Two agents on back-to-back peak shifts show CSAT decline.", recommendation: "Rotate peak coverage across the week." },
];

export const weeklySchedule = [
  { day: "Mon", morning: 4, afternoon: 5, evening: 3 },
  { day: "Tue", morning: 4, afternoon: 4, evening: 3 },
  { day: "Wed", morning: 5, afternoon: 5, evening: 3 },
  { day: "Thu", morning: 4, afternoon: 5, evening: 3 },
  { day: "Fri", morning: 5, afternoon: 5, evening: 4 },
  { day: "Sat", morning: 3, afternoon: 3, evening: 2 },
  { day: "Sun", morning: 2, afternoon: 3, evening: 2 },
];

/* ============================================================
 * Live customer / call data (US phone numbers, real timestamps)
 * ============================================================ */

const US_AREA_CODES = ["212","415","312","305","404","617","206","713","702","303","512","602","720","646","917","408","503","619","202","786"];
const CUSTOMER_NAMES = [
  "James Wilson", "Patricia Moore", "Robert Anderson", "Linda Thomas", "Michael Garcia",
  "Barbara Martinez", "William Robinson", "Elizabeth Clark", "David Lewis", "Jennifer Walker",
  "Richard Hall", "Maria Allen", "Joseph Young", "Susan King", "Thomas Wright",
  "Karen Lopez", "Christopher Hill", "Nancy Scott", "Daniel Green", "Lisa Adams",
  "Matthew Baker", "Margaret Nelson", "Anthony Carter", "Sandra Mitchell", "Mark Perez",
  "Ashley Roberts", "Steven Turner", "Kimberly Phillips", "Paul Campbell", "Donna Parker",
];

function phoneFor(seed: number): string {
  const ac = US_AREA_CODES[seed % US_AREA_CODES.length];
  const mid = String(200 + (seed * 37) % 800).padStart(3, "0");
  const last = String((seed * 7919) % 10000).padStart(4, "0");
  return `+1 (${ac}) ${mid}-${last}`;
}
function customerFor(seed: number): string {
  return CUSTOMER_NAMES[seed % CUSTOMER_NAMES.length];
}

export interface ActiveCall {
  id: string;
  agentId: string;
  agentName: string;
  customer: string;
  phone: string;
  startedAt: number;        // unix ms
  topic: string;
}

const CALL_TOPICS = [
  "Billing inquiry", "Subscription upgrade", "Account verification",
  "Refund request", "Technical support", "Product return", "Plan change", "Password reset",
];

/** Build active calls each time the module is imported in the browser so
 *  start times are anchored to "now" — durations always look fresh. */
export function buildActiveCalls(): ActiveCall[] {
  const now = Date.now();
  const onCall = agents.filter((a) => a.status === "On Call");
  return onCall.map((a, idx) => {
    const seed = parseInt(a.id.replace(/\D/g, ""), 10) || idx + 1;
    const startedAt = now - (60_000 * (2 + (seed * 3) % 18)); // 2–20 min ago
    return {
      id: `CL-${a.id}`,
      agentId: a.id,
      agentName: a.name,
      customer: customerFor(seed + 3),
      phone: phoneFor(seed + 11),
      startedAt,
      topic: CALL_TOPICS[seed % CALL_TOPICS.length],
    };
  });
}

/** Today's missed calls log — timestamps within the current hour window. */
export interface MissedCall {
  id: string;
  customer: string;
  phone: string;
  at: number;       // unix ms
  reason: "No answer" | "After hours" | "Voicemail" | "Caller dropped";
}
const MISSED_REASONS: MissedCall["reason"][] = ["No answer", "After hours", "Voicemail", "Caller dropped"];

export function buildMissedCalls(): MissedCall[] {
  const now = Date.now();
  return Array.from({ length: kpis.missedCalls }).map((_, i) => ({
    id: `MC-${i + 1}`,
    customer: customerFor(i + 5),
    phone: phoneFor(i + 19),
    at: now - (i + 1) * (12 + (i * 7) % 25) * 60_000, // staggered within the last few hours
    reason: MISSED_REASONS[i % MISSED_REASONS.length],
  }));
}

/** Recent completed calls for an agent (used in dashboard KPI drill-down). */
export interface RecentCall {
  id: string;
  agentId: string;
  agentName: string;
  customer: string;
  phone: string;
  at: number;
  durationSec: number;
  outcome: "Resolved" | "Escalated" | "Follow-up";
}

export function buildRecentCalls(limit = 12): RecentCall[] {
  const now = Date.now();
  const out: RecentCall[] = [];
  let cursor = now - 4 * 60_000;
  for (let i = 0; i < limit; i++) {
    const a = agents[i % agents.length];
    const seed = (i + 1) * 13;
    const durationSec = 90 + (seed * 11) % 540;
    cursor -= (5 + (seed * 3) % 14) * 60_000;
    out.push({
      id: `RC-${i + 1}`,
      agentId: a.id,
      agentName: a.name,
      customer: customerFor(seed + 1),
      phone: phoneFor(seed),
      at: cursor,
      durationSec,
      outcome: ["Resolved", "Resolved", "Resolved", "Escalated", "Follow-up"][seed % 5] as RecentCall["outcome"],
    });
  }
  return out;
}

/** Format seconds → "5m 23s" / "1h 04m". */
export function formatDuration(sec: number): string {
  if (sec < 0) sec = 0;
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;
  if (h) return `${h}h ${String(m).padStart(2, "0")}m`;
  return `${m}m ${String(s).padStart(2, "0")}s`;
}

/** Live time-ago anchored to a real Date. */
export function relativeTime(ms: number, now: number = Date.now()): string {
  const diff = Math.max(0, now - ms);
  const s = Math.floor(diff / 1000);
  if (s < 60)      return `${s}s ago`;
  const m = Math.floor(s / 60);
  if (m < 60)      return `${m} min ago`;
  const h = Math.floor(m / 60);
  if (h < 24)      return `${h}h ago`;
  const d = Math.floor(h / 24);
  return d === 1 ? "Yesterday" : `${d}d ago`;
}

/** Build the live notification feed each time it's needed (real timestamps). */
export function liveNotifications(): NotificationItem[] {
  const now = Date.now();
  const items: { src: typeof notifications[number]; at: number }[] = [
    { src: notifications[0], at: now -   5 * 60_000 },
    { src: notifications[1], at: now -  62 * 60_000 },
    { src: notifications[2], at: now - 130 * 60_000 },
    { src: notifications[3], at: now - 200 * 60_000 },
    { src: notifications[4], at: now - 26 * 3600_000 },
    { src: notifications[5], at: now - 28 * 3600_000 },
  ];
  return items.map(({ src, at }) => ({ ...src, time: relativeTime(at, now) }));
}

/** Reports with live date strings anchored to today. */
export function liveReports(): Report[] {
  const today = new Date();
  const fmt = (d: Date) => d.toISOString().slice(0, 10);
  const minus = (days: number) => { const d = new Date(today); d.setDate(d.getDate() - days); return d; };
  const monthName = (d: Date) => d.toLocaleString("en-US", { month: "long", year: "numeric" });
  const day = (d: Date) => d.toLocaleString("en-US", { month: "short", day: "numeric" });

  return [
    { ...reports[0], date: fmt(minus(1)), period: `${day(minus(7))} – ${day(minus(1))}` },
    { ...reports[1], date: fmt(minus(8)), period: `${day(minus(14))} – ${day(minus(8))}` },
    { ...reports[2], date: fmt(minus(35)), period: monthName(minus(35)) },
    { ...reports[3], date: fmt(minus(20)), period: "Promo Window" },
    { ...reports[4], date: fmt(today),     period: `${day(today)} – ${day(new Date(today.getTime() + 6 * 86400_000))} (live)` },
  ];
}
