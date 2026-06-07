import { j as jsxRuntimeExports } from "../_libs/react.mjs";
function ChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border/70 bg-popover/95 backdrop-blur px-3 py-2 shadow-[var(--shadow-elevated)] text-xs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium mb-1", children: label }),
    payload.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full", style: { background: p.color } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground capitalize", children: p.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto font-semibold", children: p.value })
    ] }, i))
  ] });
}
export {
  ChartTooltip as C
};
