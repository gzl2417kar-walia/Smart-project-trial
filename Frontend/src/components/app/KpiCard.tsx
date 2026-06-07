import { type LucideIcon, TrendingUp, TrendingDown } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface Props {
  label: string;
  value: string | number;
  delta: number;
  icon: LucideIcon;
  tone?: "cyan" | "violet" | "emerald" | "amber" | "rose";
  hint?: string;
}

const toneMap: Record<NonNullable<Props["tone"]>, string> = {
  cyan:    "var(--gradient-cyan)",
  violet:  "var(--gradient-violet)",
  emerald: "linear-gradient(135deg, oklch(0.74 0.16 165), oklch(0.6 0.14 180))",
  amber:   "linear-gradient(135deg, oklch(0.78 0.15 75),  oklch(0.7 0.18 50))",
  rose:    "linear-gradient(135deg, oklch(0.7 0.2 340),   oklch(0.6 0.22 10))",
};

export function KpiCard({ label, value, delta, icon: Icon, tone = "cyan", hint }: Props) {
  const up = delta >= 0;
  return (
    <TooltipProvider delayDuration={150}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[var(--shadow-elevated)] cursor-default">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-40" style={{ background: toneMap[tone] }} />
            <div className="flex items-start justify-between relative">
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">{label}</p>
                <p className="font-display text-3xl font-semibold mt-2 tracking-tight">{value}</p>
              </div>
              <div className="h-10 w-10 rounded-xl grid place-items-center text-primary-foreground" style={{ background: toneMap[tone] }}>
                <Icon className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1.5 text-xs relative">
              {up ? <TrendingUp className="h-3.5 w-3.5 text-emerald" /> : <TrendingDown className="h-3.5 w-3.5 text-destructive" />}
              <span className={up ? "text-emerald font-medium" : "text-destructive font-medium"}>
                {up ? "+" : ""}{delta}%
              </span>
              <span className="text-muted-foreground">vs last period</span>
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="max-w-xs">
          {hint ?? `${label}: trending ${up ? "up" : "down"} ${Math.abs(delta)}% over the last 7 days.`}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
