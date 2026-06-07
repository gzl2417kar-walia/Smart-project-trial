import { T as TSS_SERVER_FUNCTION, a as createServerFn } from "./server-CCc1zDOh.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, r as recordType, s as stringType, u as unknownType } from "../_libs/zod.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
async function client() {
  try {
    const {
      supabaseAdmin
    } = await import("./client.server-D5ro3rAQ.mjs");
    return supabaseAdmin;
  } catch {
    return null;
  }
}
const getKpiMetrics_createServerFn_handler = createServerRpc({
  id: "5f58f084809b64b6517ed6aa86e47a38904dd0642034378eeb685e66c41ed661",
  name: "getKpiMetrics",
  filename: "src/lib/data.functions.ts"
}, (opts) => getKpiMetrics.__executeServer(opts));
const getKpiMetrics = createServerFn({
  method: "GET"
}).handler(getKpiMetrics_createServerFn_handler, async () => {
  const sb = await client();
  if (!sb) return {
    data: null,
    source: "unavailable"
  };
  const {
    data,
    error
  } = await sb.from("kpi_metrics").select("total_calls_handled, tickets_resolved, average_csat, active_agents, emails_pending, missed_calls, created_at").order("created_at", {
    ascending: false
  }).limit(1).single();
  if (error) return {
    data: null,
    source: "unavailable",
    error: error.message
  };
  if (!data) return {
    data: null,
    source: "empty"
  };
  return {
    data,
    source: "supabase"
  };
});
const getAgentsList_createServerFn_handler = createServerRpc({
  id: "db0ed0bb4c40d853f02d9f53ca7d87dd29f340323cd4ac1060460a2b78c4a57b",
  name: "getAgentsList",
  filename: "src/lib/data.functions.ts"
}, (opts) => getAgentsList.__executeServer(opts));
const getAgentsList = createServerFn({
  method: "GET"
}).handler(getAgentsList_createServerFn_handler, async () => {
  const sb = await client();
  if (!sb) return {
    data: [],
    source: "unavailable"
  };
  const {
    data,
    error
  } = await sb.from("agents").select("*").order("agent_name", {
    ascending: true
  });
  if (error) return {
    data: [],
    source: "unavailable",
    error: error.message
  };
  if (!data || data.length === 0) return {
    data: [],
    source: "empty"
  };
  return {
    data,
    source: "supabase"
  };
});
const getReportsList_createServerFn_handler = createServerRpc({
  id: "2e6c5984257a9490acd03ada31986d35710851a2b721234becd8b54e1ca2ac05",
  name: "getReportsList",
  filename: "src/lib/data.functions.ts"
}, (opts) => getReportsList.__executeServer(opts));
const getReportsList = createServerFn({
  method: "GET"
}).handler(getReportsList_createServerFn_handler, async () => {
  const sb = await client();
  if (!sb) return {
    data: [],
    source: "unavailable"
  };
  const {
    data,
    error
  } = await sb.from("reports").select("*").order("created_at", {
    ascending: false
  });
  if (error) return {
    data: [],
    source: "unavailable",
    error: error.message
  };
  if (!data || data.length === 0) return {
    data: [],
    source: "empty"
  };
  return {
    data,
    source: "supabase"
  };
});
const getPatternInsights_createServerFn_handler = createServerRpc({
  id: "af531a086d1cdac0f5a0f14ecc53598cd1bce4e709c0448137705fce0186cef5",
  name: "getPatternInsights",
  filename: "src/lib/data.functions.ts"
}, (opts) => getPatternInsights.__executeServer(opts));
const getPatternInsights = createServerFn({
  method: "GET"
}).handler(getPatternInsights_createServerFn_handler, async () => {
  const sb = await client();
  if (!sb) return {
    data: [],
    source: "unavailable"
  };
  const {
    data,
    error
  } = await sb.from("pattern_insights").select("*").order("created_at", {
    ascending: false
  }).limit(50);
  if (error) return {
    data: [],
    source: "unavailable",
    error: error.message
  };
  if (!data || data.length === 0) return {
    data: [],
    source: "empty"
  };
  return {
    data,
    source: "supabase"
  };
});
const createReport_createServerFn_handler = createServerRpc({
  id: "96f3c5d100a81ebb99d4a044c4607dfebad2432d683f38ef35a6f175d5fb6ab9",
  name: "createReport",
  filename: "src/lib/data.functions.ts"
}, (opts) => createReport.__executeServer(opts));
const createReport = createServerFn({
  method: "POST"
}).handler(createReport_createServerFn_handler, async () => {
  const sb = await client();
  if (!sb) return {
    data: null,
    source: "unavailable",
    error: "Backend unavailable"
  };
  const {
    data: kpi
  } = await sb.from("kpi_metrics").select("total_calls_handled, tickets_resolved, average_csat, active_agents, emails_pending, missed_calls").order("created_at", {
    ascending: false
  }).limit(1).single();
  const k = kpi ?? {};
  const summary = `Executive Summary:

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
  const now = /* @__PURE__ */ new Date();
  const period = now.toISOString().slice(0, 10);
  const {
    data: inserted,
    error
  } = await sb.from("reports").insert({
    report_type: "Custom",
    reporting_period: period,
    generated_by: "AI Engine",
    status: "Ready",
    report_content: {
      summary
    }
  }).select("*").single();
  if (error) return {
    data: null,
    source: "unavailable",
    error: error.message
  };
  return {
    data: inserted,
    source: "supabase"
  };
});
const WebhookSchema = objectType({
  url: stringType().url().max(2048),
  payload: recordType(stringType(), unknownType()).optional()
});
function isAllowedWebhook(url) {
  try {
    const u = new URL(url);
    if (u.protocol !== "https:") return false;
    const host = u.hostname.toLowerCase();
    return host.endsWith("make.com") || host.endsWith("integromat.com") || host.endsWith("eu1.make.com") || host.endsWith("hook.eu1.make.com") || host.endsWith("hook.us1.make.com") || host.endsWith("n8n.cloud") || host.endsWith("n8n.io") || host.includes("n8n") || host.includes("make");
  } catch {
    return false;
  }
}
const callWebhook_createServerFn_handler = createServerRpc({
  id: "91e8e1f1466568e6544c7e5a9b51fc0d33c169f5ad654b11af680c6e277e8930",
  name: "callWebhook",
  filename: "src/lib/data.functions.ts"
}, (opts) => callWebhook.__executeServer(opts));
const callWebhook = createServerFn({
  method: "POST"
}).inputValidator((input) => WebhookSchema.parse(input)).handler(callWebhook_createServerFn_handler, async ({
  data
}) => {
  if (!isAllowedWebhook(data.url)) {
    return {
      ok: false,
      status: 0,
      error: "URL must be a Make.com or n8n https webhook"
    };
  }
  try {
    const res = await fetch(data.url, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data.payload ?? {
        source: "smart-reporter",
        at: (/* @__PURE__ */ new Date()).toISOString()
      })
    });
    const text = await res.text().catch(() => "");
    return {
      ok: res.ok,
      status: res.status,
      body: text.slice(0, 500)
    };
  } catch (e) {
    return {
      ok: false,
      status: 0,
      error: e instanceof Error ? e.message : "Request failed"
    };
  }
});
const PingSchema = objectType({
  url: stringType().url().max(2048)
});
const pingWebhook_createServerFn_handler = createServerRpc({
  id: "870efd443bfbd1564bf1fef7ec2da63bab38740abb8cb079cc14ea7a109a79f5",
  name: "pingWebhook",
  filename: "src/lib/data.functions.ts"
}, (opts) => pingWebhook.__executeServer(opts));
const pingWebhook = createServerFn({
  method: "POST"
}).inputValidator((input) => PingSchema.parse(input)).handler(pingWebhook_createServerFn_handler, async ({
  data
}) => {
  if (!isAllowedWebhook(data.url)) {
    return {
      ok: false,
      status: 0,
      error: "URL must be a Make.com or n8n https webhook"
    };
  }
  try {
    const res = await fetch(data.url, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        source: "smart-reporter",
        type: "test_connection",
        at: (/* @__PURE__ */ new Date()).toISOString()
      })
    });
    return {
      ok: res.ok,
      status: res.status
    };
  } catch (e) {
    return {
      ok: false,
      status: 0,
      error: e instanceof Error ? e.message : "Request failed"
    };
  }
});
export {
  callWebhook_createServerFn_handler,
  createReport_createServerFn_handler,
  getAgentsList_createServerFn_handler,
  getKpiMetrics_createServerFn_handler,
  getPatternInsights_createServerFn_handler,
  getReportsList_createServerFn_handler,
  pingWebhook_createServerFn_handler
};
