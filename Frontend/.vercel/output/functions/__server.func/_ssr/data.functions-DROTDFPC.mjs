import { r as reactExports } from "../_libs/react.mjs";
import { u as useRouter } from "../_libs/tanstack__react-router.mjs";
import { m as isRedirect } from "../_libs/tanstack__router-core.mjs";
import { a as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-CCc1zDOh.mjs";
import { o as objectType, s as stringType, r as recordType, u as unknownType } from "../_libs/zod.mjs";
function useServerFn(serverFn) {
  const router = useRouter();
  return reactExports.useCallback(async (...args) => {
    try {
      const res = await serverFn(...args);
      if (isRedirect(res)) throw res;
      return res;
    } catch (err) {
      if (isRedirect(err)) {
        err.options._fromLocation = router.stores.location.get();
        return router.navigate(router.resolveRedirect(err).options);
      }
      throw err;
    }
  }, [router, serverFn]);
}
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const getKpiMetrics = createServerFn({
  method: "GET"
}).handler(createSsrRpc("5f58f084809b64b6517ed6aa86e47a38904dd0642034378eeb685e66c41ed661"));
const getAgentsList = createServerFn({
  method: "GET"
}).handler(createSsrRpc("db0ed0bb4c40d853f02d9f53ca7d87dd29f340323cd4ac1060460a2b78c4a57b"));
const getReportsList = createServerFn({
  method: "GET"
}).handler(createSsrRpc("2e6c5984257a9490acd03ada31986d35710851a2b721234becd8b54e1ca2ac05"));
const getPatternInsights = createServerFn({
  method: "GET"
}).handler(createSsrRpc("af531a086d1cdac0f5a0f14ecc53598cd1bce4e709c0448137705fce0186cef5"));
const createReport = createServerFn({
  method: "POST"
}).handler(createSsrRpc("96f3c5d100a81ebb99d4a044c4607dfebad2432d683f38ef35a6f175d5fb6ab9"));
const WebhookSchema = objectType({
  url: stringType().url().max(2048),
  payload: recordType(stringType(), unknownType()).optional()
});
const callWebhook = createServerFn({
  method: "POST"
}).inputValidator((input) => WebhookSchema.parse(input)).handler(createSsrRpc("91e8e1f1466568e6544c7e5a9b51fc0d33c169f5ad654b11af680c6e277e8930"));
const PingSchema = objectType({
  url: stringType().url().max(2048)
});
const pingWebhook = createServerFn({
  method: "POST"
}).inputValidator((input) => PingSchema.parse(input)).handler(createSsrRpc("870efd443bfbd1564bf1fef7ec2da63bab38740abb8cb079cc14ea7a109a79f5"));
export {
  getKpiMetrics as a,
  callWebhook as b,
  createReport as c,
  getReportsList as d,
  getPatternInsights as e,
  getAgentsList as g,
  pingWebhook as p,
  useServerFn as u
};
