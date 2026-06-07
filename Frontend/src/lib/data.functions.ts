import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

/**
 * Server functions that read live operational data from the connected
 * Lovable Cloud (Supabase) backend using the managed integration client.
 *
 * Each function returns `{ data, source }` where `source` is "supabase"
 * when live rows were returned, or "empty" when the table exists but has
 * no rows, or "unavailable" when Supabase isn't configured / the table
 * doesn't exist yet. The UI uses this to show fallback messaging without
 * breaking the dashboard.
 */

type Json = string | number | boolean | null | { [k: string]: Json } | Json[];
type Row = { [k: string]: Json };
type Result<T> = { data: T; source: "supabase" | "empty" | "unavailable"; error?: string };

async function client(): Promise<any> {
  try {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    return supabaseAdmin as any;
  } catch {
    return null;
  }
}

export const getKpiMetrics = createServerFn({ method: "GET" }).handler(async (): Promise<Result<Row | null>> => {
  const sb = await client();
  if (!sb) return { data: null, source: "unavailable" };
  const { data, error } = await sb
    .from("kpi_metrics")
    .select("total_calls_handled, tickets_resolved, average_csat, active_agents, emails_pending, missed_calls, created_at")
    .order("created_at", { ascending: false })
    .limit(1)
    .single();
  if (error) return { data: null, source: "unavailable", error: error.message };
  if (!data) return { data: null, source: "empty" };
  return { data: data as Row, source: "supabase" };
});

export const getAgentsList = createServerFn({ method: "GET" }).handler(async (): Promise<Result<Row[]>> => {
  const sb = await client();
  if (!sb) return { data: [], source: "unavailable" };
  const { data, error } = await sb.from("agents").select("*").order("agent_name", { ascending: true });
  if (error) return { data: [], source: "unavailable", error: error.message };
  if (!data || data.length === 0) return { data: [], source: "empty" };
  return { data: data as Row[], source: "supabase" };
});

export const getReportsList = createServerFn({ method: "GET" }).handler(async (): Promise<Result<Row[]>> => {
  const sb = await client();
  if (!sb) return { data: [], source: "unavailable" };
  const { data, error } = await sb
    .from("reports")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) return { data: [], source: "unavailable", error: error.message };
  if (!data || data.length === 0) return { data: [], source: "empty" };
  return { data: data as Row[], source: "supabase" };
});

export const getPatternInsights = createServerFn({ method: "GET" }).handler(async (): Promise<Result<Row[]>> => {
  const sb = await client();
  if (!sb) return { data: [], source: "unavailable" };
  const { data, error } = await sb
    .from("pattern_insights")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(50);
  if (error) return { data: [], source: "unavailable", error: error.message };
  if (!data || data.length === 0) return { data: [], source: "empty" };
  return { data: data as Row[], source: "supabase" };
});

export const createReport = createServerFn({ method: "POST" }).handler(async (): Promise<Result<Row | null>> => {
  const sb = await client();
  if (!sb) return { data: null, source: "unavailable", error: "Backend unavailable" };

  const { data: kpi } = await sb
    .from("kpi_metrics")
    .select("total_calls_handled, tickets_resolved, average_csat, active_agents, emails_pending, missed_calls")
    .order("created_at", { ascending: false })
    .limit(1)
    .single();

  const k = (kpi ?? {}) as Record<string, number | null>;
  const summary =
`Executive Summary:

Operations performance remained stable during this reporting cycle.

KPI Highlights:

- Total Calls Handled: ${k.total_calls_handled ?? 0}
- Tickets Resolved: ${k.tickets_resolved ?? 0}
- Average CSAT: ${k.average_csat ?? 0}
- Active Agents: ${k.active_agents ?? 0}
- Emails Pending: ${k.emails_pending ?? 0}
- Missed Calls: ${k.missed_calls ?? 0}

Recommendations:

- Continue current staffing coverage.
- Monitor pending emails.
- Review missed call patterns.`;

  const now = new Date();
  const period = now.toISOString().slice(0, 10);

  const { data: inserted, error } = await sb
    .from("reports")
    .insert({
      report_type: "Custom",
      reporting_period: period,
      generated_by: "AI Engine",
      status: "Ready",
      report_content: { summary },
    })
    .select("*")
    .single();

  if (error) return { data: null, source: "unavailable", error: error.message };
  return { data: inserted as Row, source: "supabase" };
});

/* ---------------- Integrations: Make.com + n8n ---------------- */

const WebhookSchema = z.object({
  url: z.string().url().max(2048),
  payload: z.record(z.string(), z.unknown()).optional(),
});

function isAllowedWebhook(url: string): boolean {
  try {
    const u = new URL(url);
    if (u.protocol !== "https:") return false;
    const host = u.hostname.toLowerCase();
    return (
      host.endsWith("make.com") ||
      host.endsWith("integromat.com") ||
      host.endsWith("eu1.make.com") ||
      host.endsWith("hook.eu1.make.com") ||
      host.endsWith("hook.us1.make.com") ||
      host.endsWith("n8n.cloud") ||
      host.endsWith("n8n.io") ||
      host.includes("n8n") ||
      host.includes("make")
    );
  } catch {
    return false;
  }
}

export const callWebhook = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => WebhookSchema.parse(input))
  .handler(async ({ data }) => {
    if (!isAllowedWebhook(data.url)) {
      return { ok: false, status: 0, error: "URL must be a Make.com or n8n https webhook" };
    }
    try {
      const res = await fetch(data.url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data.payload ?? { source: "smart-reporter", at: new Date().toISOString() }),
      });
      const text = await res.text().catch(() => "");
      return { ok: res.ok, status: res.status, body: text.slice(0, 500) };
    } catch (e) {
      return { ok: false, status: 0, error: e instanceof Error ? e.message : "Request failed" };
    }
  });

const PingSchema = z.object({ url: z.string().url().max(2048) });

export const pingWebhook = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => PingSchema.parse(input))
  .handler(async ({ data }) => {
    if (!isAllowedWebhook(data.url)) {
      return { ok: false, status: 0, error: "URL must be a Make.com or n8n https webhook" };
    }
    try {
      const res = await fetch(data.url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ source: "smart-reporter", type: "test_connection", at: new Date().toISOString() }),
      });
      return { ok: res.ok, status: res.status };
    } catch (e) {
      return { ok: false, status: 0, error: e instanceof Error ? e.message : "Request failed" };
    }
  });