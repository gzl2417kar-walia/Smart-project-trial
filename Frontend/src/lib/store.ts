import { useSyncExternalStore, useEffect, useState } from "react";

/* ---------------- Settings store (theme, density, prefs) ---------------- */

export interface AppSettings {
  theme: "dark" | "light";
  compact: boolean;
  emailDigests: boolean;
  pushNotifications: boolean;
  aiRiskAlerts: boolean;
  integrations: Record<string, { url: string; connected: boolean }>;
  apiConfig: { baseUrl: string; anonKey: string; serviceKey: string };
}

const SETTINGS_KEY = "smart-reporter-settings";
const DEFAULT_SETTINGS: AppSettings = {
  theme: "dark",
  compact: false,
  emailDigests: true,
  pushNotifications: false,
  aiRiskAlerts: true,
  integrations: {
    Supabase:        { url: "", connected: false },
    "Make.com":      { url: "", connected: false },
    "n8n":           { url: "", connected: false },
    "Google Sheets": { url: "", connected: false },
  },
  apiConfig: { baseUrl: "", anonKey: "", serviceKey: "" },
};

let settings: AppSettings = DEFAULT_SETTINGS;
const sListeners = new Set<() => void>();

function loadSettings() {
  if (typeof window === "undefined") return;
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (raw) settings = { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
  } catch { /* noop */ }
}
loadSettings();

function persistSettings() {
  if (typeof window !== "undefined") localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  applySettingsToDom();
  sListeners.forEach((l) => l());
}

export function applySettingsToDom() {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.classList.toggle("light", settings.theme === "light");
  root.classList.toggle("dark", settings.theme === "dark");
  root.dataset.compact = settings.compact ? "true" : "false";
}

export function updateSettings(patch: Partial<AppSettings>) {
  settings = { ...settings, ...patch };
  persistSettings();
}
export function updateIntegration(name: string, patch: Partial<{ url: string; connected: boolean }>) {
  settings = {
    ...settings,
    integrations: {
      ...settings.integrations,
      [name]: { ...(settings.integrations[name] ?? { url: "", connected: false }), ...patch },
    },
  };
  persistSettings();
}

export function useSettings(): AppSettings {
  return useSyncExternalStore(
    (cb) => { sListeners.add(cb); return () => sListeners.delete(cb); },
    () => settings,
    () => DEFAULT_SETTINGS,
  );
}

/* ---------------- Notifications store ---------------- */

import { notifications as seed, type NotificationItem } from "@/lib/mock/data";

const NOTIF_KEY = "smart-reporter-notif-read";
let readSet: Set<string> = new Set();
const nListeners = new Set<() => void>();

function loadNotif() {
  if (typeof window === "undefined") return;
  try {
    const raw = localStorage.getItem(NOTIF_KEY);
    readSet = new Set(raw ? JSON.parse(raw) : seed.filter((n) => n.read).map((n) => n.id));
  } catch { readSet = new Set(); }
}
loadNotif();

function persistNotif() {
  if (typeof window !== "undefined") localStorage.setItem(NOTIF_KEY, JSON.stringify([...readSet]));
  nListeners.forEach((l) => l());
}

let cachedNotifications: NotificationItem[] = [];

function refreshNotificationsSnapshot(): NotificationItem[] {
  cachedNotifications = seed.map((n) => ({ ...n, read: readSet.has(n.id) }));
  return cachedNotifications;
}
refreshNotificationsSnapshot();

export function markRead(id: string) {
  readSet.add(id);
  refreshNotificationsSnapshot();
  persistNotif();
}
export function markAllRead() {
  seed.forEach((n) => readSet.add(n.id));
  refreshNotificationsSnapshot();
  persistNotif();
}
export function markAllUnread() {
  readSet = new Set();
  refreshNotificationsSnapshot();
  persistNotif();
}

export function useNotifications(): NotificationItem[] {
  return useSyncExternalStore(
    (cb) => { nListeners.add(cb); return () => nListeners.delete(cb); },
    () => cachedNotifications,
    () => seed,
  );
}

/* ---------------- useNow: ticks every second ---------------- */

export function useNow(intervalMs = 1000): Date {
  const [now, setNow] = useState<Date>(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);
  return now;
}