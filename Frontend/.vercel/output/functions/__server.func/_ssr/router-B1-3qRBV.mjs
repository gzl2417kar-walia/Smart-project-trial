import { b as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { T as TriangleAlert, C as CircleCheck, S as Sparkles, X } from "../_libs/lucide-react.mjs";
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
const appCss = "/assets/styles-CIo1SA7g.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$7 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Smart Reporter — AI Operations Dashboard" },
      { name: "description", content: "Premium AI-powered operations and workforce reporting for B2C support teams." },
      { property: "og:title", content: "Smart Reporter — AI Operations Dashboard" },
      { property: "og:description", content: "Premium AI-powered operations and workforce reporting for B2C support teams." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Smart Reporter — AI Operations Dashboard" },
      { name: "twitter:description", content: "Premium AI-powered operations and workforce reporting for B2C support teams." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/399fbfb7-6bdf-4329-8151-ddd4b06a5297/id-preview-f65df33c--b7f7fe73-a210-461e-8083-ab95ed5314b3.lovable.app-1780740054722.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/399fbfb7-6bdf-4329-8151-ddd4b06a5297/id-preview-f65df33c--b7f7fe73-a210-461e-8083-ab95ed5314b3.lovable.app-1780740054722.png" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$7.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter$6 = () => import("./workforce-Cn4K3mH1.mjs");
const Route$6 = createFileRoute("/workforce")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./settings-COY69kLG.mjs");
const Route$5 = createFileRoute("/settings")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./reports-zMeeE5Ol.mjs");
const Route$4 = createFileRoute("/reports")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./notifications-DjZoDrXY.mjs");
const Route$3 = createFileRoute("/notifications")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./insights-CQxYCY6n.mjs");
const Route$2 = createFileRoute("/insights")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./dashboard-C4-2dBHO.mjs");
const Route$1 = createFileRoute("/dashboard")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
function ReportBody({
  report
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 max-h-[60vh] overflow-y-auto pr-2 -mr-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Executive summary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed", children: report.summary }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "KPI observations", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bullets, { items: report.observations }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Operational risks", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bullets, { items: report.risks, icon: "alert" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Recommendations", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bullets, { items: report.recommendations, icon: "check" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "AI-generated insights", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bullets, { items: report.insights, icon: "sparkles" }) })
  ] });
}
function Section({
  title,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[11px] uppercase tracking-wider text-muted-foreground font-medium mb-2", children: title }),
    children
  ] });
}
function Bullets({
  items,
  icon
}) {
  if (!items.length) return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground italic", children: "No items." });
  const Icon = icon === "alert" ? TriangleAlert : icon === "check" ? CircleCheck : icon === "sparkles" ? Sparkles : X;
  const color = icon === "alert" ? "text-destructive" : icon === "check" ? "text-emerald" : icon === "sparkles" ? "text-accent" : "text-primary";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: items.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2.5 text-sm", children: [
    icon ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `h-4 w-4 mt-0.5 shrink-0 ${color}` }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/85", children: t })
  ] }, i)) });
}
const $$splitComponentImporter = () => import("./index-D7HEaM-8.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Smart Reporter — Sign in"
    }, {
      name: "description",
      content: "Sign in to the Smart Reporter AI operations dashboard."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const WorkforceRoute = Route$6.update({
  id: "/workforce",
  path: "/workforce",
  getParentRoute: () => Route$7
});
const SettingsRoute = Route$5.update({
  id: "/settings",
  path: "/settings",
  getParentRoute: () => Route$7
});
const ReportsRoute = Route$4.update({
  id: "/reports",
  path: "/reports",
  getParentRoute: () => Route$7
});
const NotificationsRoute = Route$3.update({
  id: "/notifications",
  path: "/notifications",
  getParentRoute: () => Route$7
});
const InsightsRoute = Route$2.update({
  id: "/insights",
  path: "/insights",
  getParentRoute: () => Route$7
});
const DashboardRoute = Route$1.update({
  id: "/dashboard",
  path: "/dashboard",
  getParentRoute: () => Route$7
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7
});
const rootRouteChildren = {
  IndexRoute,
  DashboardRoute,
  InsightsRoute,
  NotificationsRoute,
  ReportsRoute,
  SettingsRoute,
  WorkforceRoute
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  ReportBody as R,
  router as r
};
