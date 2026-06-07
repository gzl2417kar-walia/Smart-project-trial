import { r as reactExports } from "../_libs/react.mjs";
const USERS_KEY = "smart-reporter-users";
const CURRENT_KEY = "smart-reporter-current";
const listeners = /* @__PURE__ */ new Set();
let cachedCurrent = null;
let cachedRaw = null;
const emit = () => {
  cachedRaw = null;
  listeners.forEach((l) => l());
};
function readUsers() {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
  } catch {
    return [];
  }
}
function writeUsers(u) {
  localStorage.setItem(USERS_KEY, JSON.stringify(u));
}
function readCurrent() {
  if (typeof window === "undefined") return null;
  try {
    return JSON.parse(localStorage.getItem(CURRENT_KEY) || "null");
  } catch {
    return null;
  }
}
function getCurrentSnapshot() {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(CURRENT_KEY);
  if (raw === cachedRaw) return cachedCurrent;
  cachedRaw = raw;
  try {
    cachedCurrent = raw ? JSON.parse(raw) : null;
  } catch {
    cachedCurrent = null;
  }
  return cachedCurrent;
}
function initials(name) {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map((p) => p[0]?.toUpperCase() ?? "").join("") || "U";
}
const auth = {
  isAuthed() {
    return !!readCurrent();
  },
  current() {
    return readCurrent();
  },
  initials() {
    return initials(readCurrent()?.name ?? "User");
  },
  register(name, email, password) {
    const users = readUsers();
    const e = email.trim().toLowerCase();
    if (!name.trim() || !e || !password) return { ok: false, error: "All fields are required." };
    if (users.some((u) => u.email === e)) return { ok: false, error: "An account with that email already exists." };
    const user = { name: name.trim(), email: e, password, role: "Operations Manager" };
    users.push(user);
    writeUsers(users);
    localStorage.setItem(CURRENT_KEY, JSON.stringify({ name: user.name, email: user.email, role: user.role, avatar: user.avatar }));
    emit();
    return { ok: true };
  },
  login(email, password) {
    const e = email.trim().toLowerCase();
    const users = readUsers();
    const found = users.find((u) => u.email === e && u.password === password);
    if (!found) return { ok: false, error: "Invalid email or password." };
    localStorage.setItem(CURRENT_KEY, JSON.stringify({ name: found.name, email: found.email, role: found.role ?? "Operations Manager", avatar: found.avatar }));
    emit();
    return { ok: true };
  },
  logout() {
    localStorage.removeItem(CURRENT_KEY);
    emit();
  },
  updateProfile(patch) {
    const cur = readCurrent();
    if (!cur) return;
    const next = { ...cur, ...patch };
    localStorage.setItem(CURRENT_KEY, JSON.stringify(next));
    const users = readUsers();
    const idx = users.findIndex((u) => u.email === cur.email);
    if (idx >= 0) {
      users[idx] = { ...users[idx], ...patch };
      writeUsers(users);
    }
    emit();
  }
};
function useCurrentUser() {
  return reactExports.useSyncExternalStore(
    (cb) => {
      listeners.add(cb);
      return () => listeners.delete(cb);
    },
    getCurrentSnapshot,
    () => null
  );
}
export {
  auth as a,
  useCurrentUser as u
};
