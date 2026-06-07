import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { Bell, LayoutDashboard, FileText, Users, Sparkles, Settings, LogOut, Search, ChevronDown, Activity, Camera, Trash2 } from "lucide-react";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { auth, useCurrentUser } from "@/lib/auth";
import { agents, type Agent } from "@/lib/mock/data";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
  DropdownMenuSeparator, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Toaster } from "@/components/ui/sonner";
import { applySettingsToDom, useNotifications, useSettings } from "@/lib/store";
import { AgentSheet } from "@/components/app/AgentSheet";
import { StatusBadge } from "@/components/app/StatusBadge";

const nav = [
  { to: "/dashboard",     label: "Dashboard",     icon: LayoutDashboard },
  { to: "/reports",       label: "Reports",       icon: FileText },
  { to: "/workforce",     label: "Workforce",     icon: Users },
  { to: "/insights",      label: "Insights",      icon: Sparkles },
  { to: "/notifications", label: "Notifications", icon: Bell },
  { to: "/settings",      label: "Settings",      icon: Settings },
];

export function AppShell({ children, title }: { children: ReactNode; title: string }) {
  const navigate = useNavigate();
  const pathname = useRouterState({ select: s => s.location.pathname });
  const currentUser = useCurrentUser();
  const user = currentUser ?? auth.current();
  const notifs = useNotifications();
  const unread = notifs.filter(n => !n.read).length;
  useSettings(); // re-render when theme/compact change
  useEffect(() => { applySettingsToDom(); }, []);
  useEffect(() => {
    if (!auth.current()) navigate({ to: "/", replace: true });
  }, [navigate, currentUser]);

  const [q, setQ] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const matches = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return [];
    return agents.filter(a =>
      a.name.toLowerCase().includes(term) || a.id.toLowerCase().includes(term),
    ).slice(0, 6);
  }, [q]);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!searchRef.current?.contains(e.target as Node)) setSearchOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const handleLogout = () => {
    auth.logout();
    navigate({ to: "/" });
  };

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
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
  const userInitials = (user?.name ?? "U").split(/\s+/).filter(Boolean).slice(0, 2).map(p => p[0]?.toUpperCase() ?? "").join("") || "U";
  const userRole = user?.role ?? "Operations Manager";
  const userAvatar = user?.avatar;

  return (
    <div className="flex min-h-screen w-full bg-background text-foreground">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 shrink-0 flex-col border-r border-sidebar-border bg-sidebar">
        <div className="flex items-center gap-2.5 px-5 py-5 border-b border-sidebar-border">
          <div className="grid place-items-center h-9 w-9 rounded-lg" style={{ background: "var(--gradient-cyan)", boxShadow: "var(--shadow-glow)" }}>
            <Activity className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-[15px] font-semibold tracking-tight">Smart Reporter</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">AI Operations</div>
          </div>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          {nav.map(item => {
            const active = pathname === item.to;
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all relative ${
                  active
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground/75 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground"
                }`}
              >
                {active && <span className="absolute left-0 top-1.5 bottom-1.5 w-0.5 rounded-r bg-primary" />}
                <Icon className={`h-[18px] w-[18px] transition-colors ${active ? "text-primary" : "group-hover:text-primary"}`} />
                <span className="font-medium">{item.label}</span>
                {item.to === "/notifications" && unread > 0 && (
                  <span className="ml-auto text-[10px] font-semibold rounded-full px-1.5 py-0.5 bg-primary text-primary-foreground">{unread}</span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="p-3 m-3 rounded-xl glass">
          <div className="text-xs text-muted-foreground mb-1">System status</div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald shadow-[0_0_8px_var(--emerald)]" />
            <span className="text-sm font-medium">All systems normal</span>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="sticky top-0 z-30 h-16 border-b border-border/60 bg-background/70 backdrop-blur-xl flex items-center px-4 md:px-8 gap-4">
          <div>
            <h1 className="font-display text-xl font-semibold tracking-tight">{title}</h1>
            <p className="text-xs text-muted-foreground hidden md:block">Real-time operational intelligence</p>
          </div>

          <div className="flex-1 max-w-md mx-auto hidden lg:block">
            <div className="relative" ref={searchRef}>
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                value={q}
                onChange={e => { setQ(e.target.value); setSearchOpen(true); }}
                onFocus={() => setSearchOpen(true)}
                placeholder="Search agents by name or ID…"
                className="w-full h-10 pl-10 pr-3 rounded-lg bg-muted/50 border border-border/60 text-sm placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
              />
              {searchOpen && q.trim() && (
                <div className="absolute z-40 mt-2 w-full rounded-xl border border-border bg-popover shadow-lg overflow-hidden">
                  {matches.length === 0 ? (
                    <div className="px-4 py-3 text-sm text-muted-foreground">No agents match "{q}".</div>
                  ) : (
                    <ul>
                      {matches.map(a => (
                        <li key={a.id}>
                          <button
                            onClick={() => { setSelectedAgent(a); setSearchOpen(false); setQ(""); }}
                            className="w-full flex items-center gap-3 px-3 py-2.5 text-left hover:bg-muted/60 transition"
                          >
                            <div className="h-8 w-8 rounded-full grid place-items-center text-xs font-semibold text-primary-foreground" style={{ background: "var(--gradient-violet)" }}>{a.avatar}</div>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-medium truncate">{a.name}</div>
                              <div className="text-[11px] text-muted-foreground">{a.id} · {a.shift}</div>
                            </div>
                            <StatusBadge status={a.status} />
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="ml-auto flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger className="relative h-10 w-10 grid place-items-center rounded-lg hover:bg-muted/60 transition">
                <Bell className="h-[18px] w-[18px]" />
                {unread > 0 && (
                  <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary shadow-[0_0_6px_var(--primary)]" />
                )}
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuLabel className="flex items-center justify-between">
                  Notifications <Badge variant="secondary">{unread} new</Badge>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {notifs.slice(0, 4).map(n => (
                  <DropdownMenuItem key={n.id} className="flex flex-col items-start gap-0.5 py-2.5">
                    <div className="text-sm font-medium">{n.title}</div>
                    <div className="text-xs text-muted-foreground line-clamp-2">{n.message}</div>
                    <div className="text-[10px] text-muted-foreground/80 mt-0.5">{n.time}</div>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/notifications" className="justify-center text-primary">View all</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 h-10 pl-1 pr-2 rounded-lg hover:bg-muted/60 transition">
                <div className="h-8 w-8 rounded-full overflow-hidden grid place-items-center text-xs font-semibold text-primary-foreground" style={{ background: "var(--gradient-violet)" }}>
                  {userAvatar ? (
                    <img src={userAvatar} alt={userName} className="h-full w-full object-cover" />
                  ) : userInitials}
                </div>
                <div className="hidden sm:block text-left leading-tight max-w-[140px]">
                  <div className="text-sm font-medium truncate">{userName}</div>
                  <div className="text-[10px] text-muted-foreground truncate">{userRole}</div>
                </div>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64">
                <div className="flex items-center gap-3 p-2">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden grid place-items-center text-sm font-semibold text-primary-foreground shrink-0" style={{ background: "var(--gradient-violet)" }}>
                    {userAvatar ? (
                      <img src={userAvatar} alt={userName} className="h-full w-full object-cover" />
                    ) : userInitials}
                  </div>
                  <div className="min-w-0">
                    <div className="font-medium truncate">{userName}</div>
                    <div className="text-[11px] text-primary font-medium truncate">{userRole}</div>
                    {user?.email && <div className="text-[11px] text-muted-foreground truncate">{user.email}</div>}
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem onSelect={(e) => { e.preventDefault(); fileInputRef.current?.click(); }}>
                  <Camera className="h-4 w-4 mr-2" /> {userAvatar ? "Change profile picture" : "Upload profile picture"}
                </DropdownMenuItem>
                {userAvatar && (
                  <DropdownMenuItem onSelect={(e) => { e.preventDefault(); auth.updateProfile({ avatar: undefined }); }}>
                    <Trash2 className="h-4 w-4 mr-2" /> Remove picture
                  </DropdownMenuItem>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild><Link to="/settings">Settings</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/insights">AI Insights</Link></DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-destructive focus:text-destructive">
                  <LogOut className="h-4 w-4 mr-2" /> Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <input ref={fileInputRef} type="file" accept="image/*" hidden onChange={handleAvatarUpload} />
          </div>
        </header>

        <main className="flex-1 p-4 md:p-8 max-w-[1500px] w-full mx-auto">{children}</main>
        <AgentSheet agent={selectedAgent} onClose={() => setSelectedAgent(null)} />
        <Toaster position="top-right" richColors />
      </div>
    </div>
  );
}
