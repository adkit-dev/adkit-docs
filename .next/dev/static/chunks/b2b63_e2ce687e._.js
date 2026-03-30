(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/adkit-docs/node_modules/@vercel/analytics/dist/next/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Analytics",
    ()=>Analytics2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// src/nextjs/index.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// src/nextjs/utils.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/navigation.js [app-client] (ecmascript)");
"use client";
;
;
// package.json
var name = "@vercel/analytics";
var version = "1.3.1";
// src/queue.ts
var initQueue = ()=>{
    if (window.va) return;
    window.va = function a(...params) {
        (window.vaq = window.vaq || []).push(params);
    };
};
// src/utils.ts
function isBrowser() {
    return typeof window !== "undefined";
}
function detectEnvironment() {
    try {
        const env = ("TURBOPACK compile-time value", "development");
        if ("TURBOPACK compile-time truthy", 1) {
            return "development";
        }
    } catch (e) {}
    return "production";
}
function setMode(mode = "auto") {
    if (mode === "auto") {
        window.vam = detectEnvironment();
        return;
    }
    window.vam = mode;
}
function getMode() {
    const mode = isBrowser() ? window.vam : detectEnvironment();
    return mode || "production";
}
function isDevelopment() {
    return getMode() === "development";
}
function computeRoute(pathname, pathParams) {
    if (!pathname || !pathParams) {
        return pathname;
    }
    let result = pathname;
    try {
        const entries = Object.entries(pathParams);
        for (const [key, value] of entries){
            if (!Array.isArray(value)) {
                const matcher = turnValueToRegExp(value);
                if (matcher.test(result)) {
                    result = result.replace(matcher, `/[${key}]`);
                }
            }
        }
        for (const [key, value] of entries){
            if (Array.isArray(value)) {
                const matcher = turnValueToRegExp(value.join("/"));
                if (matcher.test(result)) {
                    result = result.replace(matcher, `/[...${key}]`);
                }
            }
        }
        return result;
    } catch (e) {
        return pathname;
    }
}
function turnValueToRegExp(value) {
    return new RegExp(`/${escapeRegExp(value)}(?=[/?#]|$)`);
}
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
// src/generic.ts
var DEV_SCRIPT_URL = "https://va.vercel-scripts.com/v1/script.debug.js";
var PROD_SCRIPT_URL = "/_vercel/insights/script.js";
function inject(props = {
    debug: true
}) {
    var _a;
    if (!isBrowser()) return;
    setMode(props.mode);
    initQueue();
    if (props.beforeSend) {
        (_a = window.va) == null ? void 0 : _a.call(window, "beforeSend", props.beforeSend);
    }
    const src = props.scriptSrc || (isDevelopment() ? DEV_SCRIPT_URL : PROD_SCRIPT_URL);
    if (document.head.querySelector(`script[src*="${src}"]`)) return;
    const script = document.createElement("script");
    script.src = src;
    script.defer = true;
    script.dataset.sdkn = name + (props.framework ? `/${props.framework}` : "");
    script.dataset.sdkv = version;
    if (props.disableAutoTrack) {
        script.dataset.disableAutoTrack = "1";
    }
    if (props.endpoint) {
        script.dataset.endpoint = props.endpoint;
    }
    if (props.dsn) {
        script.dataset.dsn = props.dsn;
    }
    script.onerror = ()=>{
        const errorMessage = isDevelopment() ? "Please check if any ad blockers are enabled and try again." : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
        console.log(`[Vercel Web Analytics] Failed to load script from ${src}. ${errorMessage}`);
    };
    if (isDevelopment() && props.debug === false) {
        script.dataset.debug = "false";
    }
    document.head.appendChild(script);
}
function pageview({ route, path }) {
    var _a;
    (_a = window.va) == null ? void 0 : _a.call(window, "pageview", {
        route,
        path
    });
}
// src/react.tsx
function Analytics(props) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Analytics.useEffect": ()=>{
            inject({
                framework: props.framework || "react",
                ...props.route !== void 0 && {
                    disableAutoTrack: true
                },
                ...props
            });
        }
    }["Analytics.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Analytics.useEffect": ()=>{
            if (props.route && props.path) {
                pageview({
                    route: props.route,
                    path: props.path
                });
            }
        }
    }["Analytics.useEffect"], [
        props.route,
        props.path
    ]);
    return null;
}
;
var useRoute = ()=>{
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const finalParams = {
        ...Object.fromEntries(searchParams.entries()),
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- can be empty in pages router
        ...params || {}
    };
    return {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- can be empty in pages router
        route: params ? computeRoute(path, finalParams) : null,
        path
    };
};
// src/nextjs/index.tsx
function AnalyticsComponent(props) {
    const { route, path } = useRoute();
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Analytics, {
        path,
        route,
        ...props,
        framework: "next"
    });
}
function Analytics2(props) {
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: null
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(AnalyticsComponent, {
        ...props
    }));
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/adkit-docs/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>J,
    "useTheme",
    ()=>z
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
var M = (e, i, s, u, m, a, l, h)=>{
    let d = document.documentElement, w = [
        "light",
        "dark"
    ];
    function p(n) {
        (Array.isArray(e) ? e : [
            e
        ]).forEach((y)=>{
            let k = y === "class", S = k && a ? m.map((f)=>a[f] || f) : m;
            k ? (d.classList.remove(...S), d.classList.add(a && a[n] ? a[n] : n)) : d.setAttribute(y, n);
        }), R(n);
    }
    function R(n) {
        h && w.includes(n) && (d.style.colorScheme = n);
    }
    function c() {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    if (u) p(u);
    else try {
        let n = localStorage.getItem(i) || s, y = l && n === "system" ? c() : n;
        p(y);
    } catch (n) {}
};
var b = [
    "light",
    "dark"
], I = "(prefers-color-scheme: dark)", O = typeof window == "undefined", x = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](void 0), U = {
    setTheme: (e)=>{},
    themes: []
}, z = ()=>{
    var e;
    return (e = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](x)) != null ? e : U;
}, J = (e)=>__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](x) ? __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, e.children) : __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](V, {
        ...e
    }), N = [
    "light",
    "dark"
], V = ({ forcedTheme: e, disableTransitionOnChange: i = !1, enableSystem: s = !0, enableColorScheme: u = !0, storageKey: m = "theme", themes: a = N, defaultTheme: l = s ? "system" : "light", attribute: h = "data-theme", value: d, children: w, nonce: p, scriptProps: R })=>{
    let [c, n] = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "V.useState": ()=>H(m, l)
    }["V.useState"]), [T, y] = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "V.useState": ()=>c === "system" ? E() : c
    }["V.useState"]), k = d ? Object.values(d) : a, S = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "V.useCallback[S]": (o)=>{
            let r = o;
            if (!r) return;
            o === "system" && s && (r = E());
            let v = d ? d[r] : r, C = i ? W(p) : null, P = document.documentElement, L = {
                "V.useCallback[S].L": (g)=>{
                    g === "class" ? (P.classList.remove(...k), v && P.classList.add(v)) : g.startsWith("data-") && (v ? P.setAttribute(g, v) : P.removeAttribute(g));
                }
            }["V.useCallback[S].L"];
            if (Array.isArray(h) ? h.forEach(L) : L(h), u) {
                let g = b.includes(l) ? l : null, D = b.includes(r) ? r : g;
                P.style.colorScheme = D;
            }
            C == null || C();
        }
    }["V.useCallback[S]"], [
        p
    ]), f = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "V.useCallback[f]": (o)=>{
            let r = typeof o == "function" ? o(c) : o;
            n(r);
            try {
                localStorage.setItem(m, r);
            } catch (v) {}
        }
    }["V.useCallback[f]"], [
        c
    ]), A = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "V.useCallback[A]": (o)=>{
            let r = E(o);
            y(r), c === "system" && s && !e && S("system");
        }
    }["V.useCallback[A]"], [
        c,
        e
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "V.useEffect": ()=>{
            let o = window.matchMedia(I);
            return o.addListener(A), A(o), ({
                "V.useEffect": ()=>o.removeListener(A)
            })["V.useEffect"];
        }
    }["V.useEffect"], [
        A
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "V.useEffect": ()=>{
            let o = {
                "V.useEffect.o": (r)=>{
                    r.key === m && (r.newValue ? n(r.newValue) : f(l));
                }
            }["V.useEffect.o"];
            return window.addEventListener("storage", o), ({
                "V.useEffect": ()=>window.removeEventListener("storage", o)
            })["V.useEffect"];
        }
    }["V.useEffect"], [
        f
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "V.useEffect": ()=>{
            S(e != null ? e : c);
        }
    }["V.useEffect"], [
        e,
        c
    ]);
    let Q = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "V.useMemo[Q]": ()=>({
                theme: c,
                setTheme: f,
                forcedTheme: e,
                resolvedTheme: c === "system" ? T : c,
                themes: s ? [
                    ...a,
                    "system"
                ] : a,
                systemTheme: s ? T : void 0
            })
    }["V.useMemo[Q]"], [
        c,
        f,
        e,
        T,
        s,
        a
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](x.Provider, {
        value: Q
    }, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](_, {
        forcedTheme: e,
        storageKey: m,
        attribute: h,
        enableSystem: s,
        enableColorScheme: u,
        defaultTheme: l,
        value: d,
        themes: a,
        nonce: p,
        scriptProps: R
    }), w);
}, _ = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"](({ forcedTheme: e, storageKey: i, attribute: s, enableSystem: u, enableColorScheme: m, defaultTheme: a, value: l, themes: h, nonce: d, scriptProps: w })=>{
    let p = JSON.stringify([
        s,
        i,
        a,
        e,
        h,
        l,
        u,
        m
    ]).slice(1, -1);
    return __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("script", {
        ...w,
        suppressHydrationWarning: !0,
        nonce: typeof window == "undefined" ? d : "",
        dangerouslySetInnerHTML: {
            __html: `(${M.toString()})(${p})`
        }
    });
}), H = (e, i)=>{
    if (O) return;
    let s;
    try {
        s = localStorage.getItem(e) || void 0;
    } catch (u) {}
    return s || i;
}, W = (e)=>{
    let i = document.createElement("style");
    return e && i.setAttribute("nonce", e), i.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(i), ()=>{
        window.getComputedStyle(document.body), setTimeout(()=>{
            document.head.removeChild(i);
        }, 1);
    };
}, E = (e)=>(e || (e = window.matchMedia(I)), e.matches ? "dark" : "light");
;
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "mergeClasses",
    ()=>mergeClasses,
    "toKebabCase",
    ()=>toKebabCase
]);
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]);
});
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toKebabCase"])(iconName)}`, className),
            ...props
        }));
    Component.displayName = `${iconName}`;
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Search
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Search", [
    [
        "circle",
        {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }
    ],
    [
        "path",
        {
            d: "m21 21-4.3-4.3",
            key: "1qie3q"
        }
    ]
]);
;
 //# sourceMappingURL=search.js.map
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Search",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript)");
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Sparkles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Sparkles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Sparkles", [
    [
        "path",
        {
            d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
            key: "4pj2yx"
        }
    ],
    [
        "path",
        {
            d: "M20 3v4",
            key: "1olli1"
        }
    ],
    [
        "path",
        {
            d: "M22 5h-4",
            key: "1gvqau"
        }
    ],
    [
        "path",
        {
            d: "M4 17v2",
            key: "vumght"
        }
    ],
    [
        "path",
        {
            d: "M5 18H3",
            key: "zchphs"
        }
    ]
]);
;
 //# sourceMappingURL=sparkles.js.map
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sparkles",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript)");
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>EllipsisVertical
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const EllipsisVertical = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("EllipsisVertical", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "1",
            key: "41hilf"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "5",
            r: "1",
            key: "gxeob9"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "19",
            r: "1",
            key: "lyex9k"
        }
    ]
]);
;
 //# sourceMappingURL=ellipsis-vertical.js.map
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-client] (ecmascript) <export default as MoreVertical>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MoreVertical",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-client] (ecmascript)");
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>ArrowRight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const ArrowRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ArrowRight", [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "m12 5 7 7-7 7",
            key: "xquz4c"
        }
    ]
]);
;
 //# sourceMappingURL=arrow-right.js.map
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript)");
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/rocket.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Rocket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Rocket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Rocket", [
    [
        "path",
        {
            d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
            key: "m3kijz"
        }
    ],
    [
        "path",
        {
            d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
            key: "1fmvmk"
        }
    ],
    [
        "path",
        {
            d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",
            key: "1f8sc4"
        }
    ],
    [
        "path",
        {
            d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
            key: "qeys4"
        }
    ]
]);
;
 //# sourceMappingURL=rocket.js.map
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/rocket.js [app-client] (ecmascript) <export default as Rocket>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Rocket",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/rocket.js [app-client] (ecmascript)");
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>LayoutDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const LayoutDashboard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("LayoutDashboard", [
    [
        "rect",
        {
            width: "7",
            height: "9",
            x: "3",
            y: "3",
            rx: "1",
            key: "10lvy0"
        }
    ],
    [
        "rect",
        {
            width: "7",
            height: "5",
            x: "14",
            y: "3",
            rx: "1",
            key: "16une8"
        }
    ],
    [
        "rect",
        {
            width: "7",
            height: "9",
            x: "14",
            y: "12",
            rx: "1",
            key: "1hutg5"
        }
    ],
    [
        "rect",
        {
            width: "7",
            height: "5",
            x: "3",
            y: "16",
            rx: "1",
            key: "ldoo1y"
        }
    ]
]);
;
 //# sourceMappingURL=layout-dashboard.js.map
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript) <export default as LayoutDashboard>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LayoutDashboard",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript)");
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>ShoppingCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const ShoppingCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ShoppingCart", [
    [
        "circle",
        {
            cx: "8",
            cy: "21",
            r: "1",
            key: "jimo8o"
        }
    ],
    [
        "circle",
        {
            cx: "19",
            cy: "21",
            r: "1",
            key: "13723u"
        }
    ],
    [
        "path",
        {
            d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
            key: "9zh506"
        }
    ]
]);
;
 //# sourceMappingURL=shopping-cart.js.map
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShoppingCart",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript)");
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/server.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Server
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Server = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Server", [
    [
        "rect",
        {
            width: "20",
            height: "8",
            x: "2",
            y: "2",
            rx: "2",
            ry: "2",
            key: "ngkwjq"
        }
    ],
    [
        "rect",
        {
            width: "20",
            height: "8",
            x: "2",
            y: "14",
            rx: "2",
            ry: "2",
            key: "iecqi9"
        }
    ],
    [
        "line",
        {
            x1: "6",
            x2: "6.01",
            y1: "6",
            y2: "6",
            key: "16zg32"
        }
    ],
    [
        "line",
        {
            x1: "6",
            x2: "6.01",
            y1: "18",
            y2: "18",
            key: "nzw8ys"
        }
    ]
]);
;
 //# sourceMappingURL=server.js.map
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/server.js [app-client] (ecmascript) <export default as Server>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Server",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/server.js [app-client] (ecmascript)");
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Lightbulb
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Lightbulb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Lightbulb", [
    [
        "path",
        {
            d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
            key: "1gvzjb"
        }
    ],
    [
        "path",
        {
            d: "M9 18h6",
            key: "x1upvd"
        }
    ],
    [
        "path",
        {
            d: "M10 22h4",
            key: "ceow96"
        }
    ]
]);
;
 //# sourceMappingURL=lightbulb.js.map
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Lightbulb",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript)");
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>BookOpen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const BookOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("BookOpen", [
    [
        "path",
        {
            d: "M12 7v14",
            key: "1akyts"
        }
    ],
    [
        "path",
        {
            d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
            key: "ruj8y"
        }
    ]
]);
;
 //# sourceMappingURL=book-open.js.map
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BookOpen",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript)");
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>ChevronDown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const ChevronDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ChevronDown", [
    [
        "path",
        {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }
    ]
]);
;
 //# sourceMappingURL=chevron-down.js.map
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronDown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript)");
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Sun
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Sun = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Sun", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "4",
            key: "4exip2"
        }
    ],
    [
        "path",
        {
            d: "M12 2v2",
            key: "tus03m"
        }
    ],
    [
        "path",
        {
            d: "M12 20v2",
            key: "1lh1kg"
        }
    ],
    [
        "path",
        {
            d: "m4.93 4.93 1.41 1.41",
            key: "149t6j"
        }
    ],
    [
        "path",
        {
            d: "m17.66 17.66 1.41 1.41",
            key: "ptbguv"
        }
    ],
    [
        "path",
        {
            d: "M2 12h2",
            key: "1t8f8n"
        }
    ],
    [
        "path",
        {
            d: "M20 12h2",
            key: "1q8mjw"
        }
    ],
    [
        "path",
        {
            d: "m6.34 17.66-1.41 1.41",
            key: "1m8zz5"
        }
    ],
    [
        "path",
        {
            d: "m19.07 4.93-1.41 1.41",
            key: "1shlcs"
        }
    ]
]);
;
 //# sourceMappingURL=sun.js.map
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sun",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript)");
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Moon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Moon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Moon", [
    [
        "path",
        {
            d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",
            key: "a7tn18"
        }
    ]
]);
;
 //# sourceMappingURL=moon.js.map
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Moon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript)");
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>X
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const X = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("X", [
    [
        "path",
        {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }
    ],
    [
        "path",
        {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }
    ]
]);
;
 //# sourceMappingURL=x.js.map
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "X",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript)");
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "XIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript)");
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Menu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Menu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Menu", [
    [
        "line",
        {
            x1: "4",
            x2: "20",
            y1: "12",
            y2: "12",
            key: "1e0a9i"
        }
    ],
    [
        "line",
        {
            x1: "4",
            x2: "20",
            y1: "6",
            y2: "6",
            key: "1owob3"
        }
    ],
    [
        "line",
        {
            x1: "4",
            x2: "20",
            y1: "18",
            y2: "18",
            key: "yk5zj1"
        }
    ]
]);
;
 //# sourceMappingURL=menu.js.map
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Menu",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript)");
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>ChevronRight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const ChevronRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ChevronRight", [
    [
        "path",
        {
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }
    ]
]);
;
 //# sourceMappingURL=chevron-right.js.map
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript)");
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Github
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Github = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Github", [
    [
        "path",
        {
            d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
            key: "tonef"
        }
    ],
    [
        "path",
        {
            d: "M9 18c-4.51 2-5-2-7-2",
            key: "9comsn"
        }
    ]
]);
;
 //# sourceMappingURL=github.js.map
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Github",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript)");
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>FileText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const FileText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("FileText", [
    [
        "path",
        {
            d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
            key: "1rqfz7"
        }
    ],
    [
        "path",
        {
            d: "M14 2v4a2 2 0 0 0 2 2h4",
            key: "tnqrlb"
        }
    ],
    [
        "path",
        {
            d: "M10 9H8",
            key: "b1mrlr"
        }
    ],
    [
        "path",
        {
            d: "M16 13H8",
            key: "t4e002"
        }
    ],
    [
        "path",
        {
            d: "M16 17H8",
            key: "z1uh3a"
        }
    ]
]);
;
 //# sourceMappingURL=file-text.js.map
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FileText",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript)");
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/hash.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Hash
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Hash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Hash", [
    [
        "line",
        {
            x1: "4",
            x2: "20",
            y1: "9",
            y2: "9",
            key: "4lhtct"
        }
    ],
    [
        "line",
        {
            x1: "4",
            x2: "20",
            y1: "15",
            y2: "15",
            key: "vyu0kd"
        }
    ],
    [
        "line",
        {
            x1: "10",
            x2: "8",
            y1: "3",
            y2: "21",
            key: "1ggp8o"
        }
    ],
    [
        "line",
        {
            x1: "16",
            x2: "14",
            y1: "3",
            y2: "21",
            key: "weycgp"
        }
    ]
]);
;
 //# sourceMappingURL=hash.js.map
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/hash.js [app-client] (ecmascript) <export default as Hash>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hash",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/hash.js [app-client] (ecmascript)");
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>ArrowLeft
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const ArrowLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ArrowLeft", [
    [
        "path",
        {
            d: "m12 19-7-7 7-7",
            key: "1l729n"
        }
    ],
    [
        "path",
        {
            d: "M19 12H5",
            key: "x3x0zl"
        }
    ]
]);
;
 //# sourceMappingURL=arrow-left.js.map
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript)");
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as SearchIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript)");
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Check
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Check = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Check", [
    [
        "path",
        {
            d: "M20 6 9 17l-5-5",
            key: "1gmf2c"
        }
    ]
]);
;
 //# sourceMappingURL=check.js.map
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Check",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript)");
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Copy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Copy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Copy", [
    [
        "rect",
        {
            width: "14",
            height: "14",
            x: "8",
            y: "8",
            rx: "2",
            ry: "2",
            key: "17jyea"
        }
    ],
    [
        "path",
        {
            d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
            key: "zix9uf"
        }
    ]
]);
;
 //# sourceMappingURL=copy.js.map
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Copy",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript)");
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/file.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>File
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const File = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("File", [
    [
        "path",
        {
            d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
            key: "1rqfz7"
        }
    ],
    [
        "path",
        {
            d: "M14 2v4a2 2 0 0 0 2 2h4",
            key: "tnqrlb"
        }
    ]
]);
;
 //# sourceMappingURL=file.js.map
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/file.js [app-client] (ecmascript) <export default as File>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "File",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/file.js [app-client] (ecmascript)");
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>House
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const House = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("House", [
    [
        "path",
        {
            d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
            key: "5wwlr5"
        }
    ],
    [
        "path",
        {
            d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
            key: "1d0kgt"
        }
    ]
]);
;
 //# sourceMappingURL=house.js.map
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Home",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript)");
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>CircleAlert
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const CircleAlert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("CircleAlert", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "8",
            y2: "12",
            key: "1pkeuh"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12.01",
            y1: "16",
            y2: "16",
            key: "4dfq90"
        }
    ]
]);
;
 //# sourceMappingURL=circle-alert.js.map
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript)");
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>ArrowUp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const ArrowUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ArrowUp", [
    [
        "path",
        {
            d: "m5 12 7-7 7 7",
            key: "hav0vg"
        }
    ],
    [
        "path",
        {
            d: "M12 19V5",
            key: "x0mq9r"
        }
    ]
]);
;
 //# sourceMappingURL=arrow-up.js.map
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-client] (ecmascript) <export default as ArrowUp>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowUp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-client] (ecmascript)");
}),
"[project]/adkit-docs/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clsx",
    ()=>clsx,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
        var o = e.length;
        for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for(f in e)e[f] && (n && (n += " "), n += f);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}),
"[project]/adkit-docs/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/compose-refs/src/composeRefs.tsx
__turbopack_context__.s([
    "composeRefs",
    ()=>composeRefs,
    "useComposedRefs",
    ()=>useComposedRefs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function setRef(ref, value) {
    if (typeof ref === "function") {
        return ref(value);
    } else if (ref !== null && ref !== void 0) {
        ref.current = value;
    }
}
function composeRefs(...refs) {
    return (node)=>{
        let hasCleanup = false;
        const cleanups = refs.map((ref)=>{
            const cleanup = setRef(ref, node);
            if (!hasCleanup && typeof cleanup == "function") {
                hasCleanup = true;
            }
            return cleanup;
        });
        if (hasCleanup) {
            return ()=>{
                for(let i = 0; i < cleanups.length; i++){
                    const cleanup = cleanups[i];
                    if (typeof cleanup == "function") {
                        cleanup();
                    } else {
                        setRef(refs[i], null);
                    }
                }
            };
        }
    };
}
function useComposedRefs(...refs) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"](composeRefs(...refs), refs);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/adkit-docs/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/slot/src/Slot.tsx
__turbopack_context__.s([
    "Root",
    ()=>Root,
    "Slot",
    ()=>Slot,
    "Slottable",
    ()=>Slottable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
var Slot = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { children, ...slotProps } = props;
    const childrenArray = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].toArray(children);
    const slottable = childrenArray.find(isSlottable);
    if (slottable) {
        const newElement = slottable.props.children;
        const newChildren = childrenArray.map((child)=>{
            if (child === slottable) {
                if (__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].count(newElement) > 1) return __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].only(null);
                return __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](newElement) ? newElement.props.children : null;
            } else {
                return child;
            }
        });
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
            ...slotProps,
            ref: forwardedRef,
            children: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](newElement) ? __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](newElement, void 0, newChildren) : null
        });
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
        ...slotProps,
        ref: forwardedRef,
        children
    });
});
Slot.displayName = "Slot";
var SlotClone = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { children, ...slotProps } = props;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](children)) {
        const childrenRef = getElementRef(children);
        return __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](children, {
            ...mergeProps(slotProps, children.props),
            // @ts-ignore
            ref: forwardedRef ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeRefs"])(forwardedRef, childrenRef) : childrenRef
        });
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].count(children) > 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].only(null) : null;
});
SlotClone.displayName = "SlotClone";
var Slottable = ({ children })=>{
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children
    });
};
function isSlottable(child) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](child) && child.type === Slottable;
}
function mergeProps(slotProps, childProps) {
    const overrideProps = {
        ...childProps
    };
    for(const propName in childProps){
        const slotPropValue = slotProps[propName];
        const childPropValue = childProps[propName];
        const isHandler = /^on[A-Z]/.test(propName);
        if (isHandler) {
            if (slotPropValue && childPropValue) {
                overrideProps[propName] = (...args)=>{
                    childPropValue(...args);
                    slotPropValue(...args);
                };
            } else if (slotPropValue) {
                overrideProps[propName] = slotPropValue;
            }
        } else if (propName === "style") {
            overrideProps[propName] = {
                ...slotPropValue,
                ...childPropValue
            };
        } else if (propName === "className") {
            overrideProps[propName] = [
                slotPropValue,
                childPropValue
            ].filter(Boolean).join(" ");
        }
    }
    return {
        ...slotProps,
        ...overrideProps
    };
}
function getElementRef(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
var Root = Slot;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/adkit-docs/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Copyright 2022 Joe Bell. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR REPRESENTATIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */ __turbopack_context__.s([
    "cva",
    ()=>cva,
    "cx",
    ()=>cx
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
const falsyToString = (value)=>typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
const cx = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"];
const cva = (base, config)=>(props)=>{
        var _config_compoundVariants;
        if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
        const { variants, defaultVariants } = config;
        const getVariantClassNames = Object.keys(variants).map((variant)=>{
            const variantProp = props === null || props === void 0 ? void 0 : props[variant];
            const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
            if (variantProp === null) return null;
            const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
            return variants[variant][variantKey];
        });
        const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param)=>{
            let [key, value] = param;
            if (value === undefined) {
                return acc;
            }
            acc[key] = value;
            return acc;
        }, {});
        const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param)=>{
            let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
            return Object.entries(compoundVariantOptions).every((param)=>{
                let [key, value] = param;
                return Array.isArray(value) ? value.includes({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                }[key]) : ({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                })[key] === value;
            }) ? [
                ...acc,
                cvClass,
                cvClassName
            ] : acc;
        }, []);
        return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    };
}),
"[project]/adkit-docs/node_modules/blurhash/dist/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ValidationError",
    ()=>d,
    "decode",
    ()=>j,
    "encode",
    ()=>S,
    "isBlurhashValid",
    ()=>N
]);
var q = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "#",
    "$",
    "%",
    "*",
    "+",
    ",",
    "-",
    ".",
    ":",
    ";",
    "=",
    "?",
    "@",
    "[",
    "]",
    "^",
    "_",
    "{",
    "|",
    "}",
    "~"
], x = (t)=>{
    let e = 0;
    for(let r = 0; r < t.length; r++){
        let n = t[r], l = q.indexOf(n);
        e = e * 83 + l;
    }
    return e;
}, p = (t, e)=>{
    var r = "";
    for(let n = 1; n <= e; n++){
        let l = Math.floor(t) / Math.pow(83, e - n) % 83;
        r += q[Math.floor(l)];
    }
    return r;
};
var f = (t)=>{
    let e = t / 255;
    return e <= .04045 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4);
}, h = (t)=>{
    let e = Math.max(0, Math.min(1, t));
    return e <= .0031308 ? Math.trunc(e * 12.92 * 255 + .5) : Math.trunc((1.055 * Math.pow(e, .4166666666666667) - .055) * 255 + .5);
}, F = (t)=>t < 0 ? -1 : 1, M = (t, e)=>F(t) * Math.pow(Math.abs(t), e);
var d = class extends Error {
    constructor(e){
        super(e), this.name = "ValidationError", this.message = e;
    }
};
var C = (t)=>{
    if (!t || t.length < 6) throw new d("The blurhash string must be at least 6 characters");
    let e = x(t[0]), r = Math.floor(e / 9) + 1, n = e % 9 + 1;
    if (t.length !== 4 + 2 * n * r) throw new d(`blurhash length mismatch: length is ${t.length} but it should be ${4 + 2 * n * r}`);
}, N = (t)=>{
    try {
        C(t);
    } catch (e) {
        return {
            result: !1,
            errorReason: e.message
        };
    }
    return {
        result: !0
    };
}, z = (t)=>{
    let e = t >> 16, r = t >> 8 & 255, n = t & 255;
    return [
        f(e),
        f(r),
        f(n)
    ];
}, L = (t, e)=>{
    let r = Math.floor(t / 361), n = Math.floor(t / 19) % 19, l = t % 19;
    return [
        M((r - 9) / 9, 2) * e,
        M((n - 9) / 9, 2) * e,
        M((l - 9) / 9, 2) * e
    ];
}, U = (t, e, r, n)=>{
    C(t), n = n | 1;
    let l = x(t[0]), m = Math.floor(l / 9) + 1, b = l % 9 + 1, i = (x(t[1]) + 1) / 166, u = new Array(b * m);
    for(let o = 0; o < u.length; o++)if (o === 0) {
        let a = x(t.substring(2, 6));
        u[o] = z(a);
    } else {
        let a = x(t.substring(4 + o * 2, 6 + o * 2));
        u[o] = L(a, i * n);
    }
    let c = e * 4, s = new Uint8ClampedArray(c * r);
    for(let o = 0; o < r; o++)for(let a = 0; a < e; a++){
        let y = 0, B = 0, R = 0;
        for(let w = 0; w < m; w++)for(let P = 0; P < b; P++){
            let G = Math.cos(Math.PI * a * P / e) * Math.cos(Math.PI * o * w / r), T = u[P + w * b];
            y += T[0] * G, B += T[1] * G, R += T[2] * G;
        }
        let V = h(y), I = h(B), E = h(R);
        s[4 * a + 0 + o * c] = V, s[4 * a + 1 + o * c] = I, s[4 * a + 2 + o * c] = E, s[4 * a + 3 + o * c] = 255;
    }
    return s;
}, j = U;
var A = 4, D = (t, e, r, n)=>{
    let l = 0, m = 0, b = 0, g = e * A;
    for(let u = 0; u < e; u++){
        let c = A * u;
        for(let s = 0; s < r; s++){
            let o = c + s * g, a = n(u, s);
            l += a * f(t[o]), m += a * f(t[o + 1]), b += a * f(t[o + 2]);
        }
    }
    let i = 1 / (e * r);
    return [
        l * i,
        m * i,
        b * i
    ];
}, $ = (t)=>{
    let e = h(t[0]), r = h(t[1]), n = h(t[2]);
    return (e << 16) + (r << 8) + n;
}, H = (t, e)=>{
    let r = Math.floor(Math.max(0, Math.min(18, Math.floor(M(t[0] / e, .5) * 9 + 9.5)))), n = Math.floor(Math.max(0, Math.min(18, Math.floor(M(t[1] / e, .5) * 9 + 9.5)))), l = Math.floor(Math.max(0, Math.min(18, Math.floor(M(t[2] / e, .5) * 9 + 9.5))));
    return r * 19 * 19 + n * 19 + l;
}, O = (t, e, r, n, l)=>{
    if (n < 1 || n > 9 || l < 1 || l > 9) throw new d("BlurHash must have between 1 and 9 components");
    if (e * r * 4 !== t.length) throw new d("Width and height must match the pixels array");
    let m = [];
    for(let s = 0; s < l; s++)for(let o = 0; o < n; o++){
        let a = o == 0 && s == 0 ? 1 : 2, y = D(t, e, r, (B, R)=>a * Math.cos(Math.PI * o * B / e) * Math.cos(Math.PI * s * R / r));
        m.push(y);
    }
    let b = m[0], g = m.slice(1), i = "", u = n - 1 + (l - 1) * 9;
    i += p(u, 1);
    let c;
    if (g.length > 0) {
        let s = Math.max(...g.map((a)=>Math.max(...a))), o = Math.floor(Math.max(0, Math.min(82, Math.floor(s * 166 - .5))));
        c = (o + 1) / 166, i += p(o, 1);
    } else c = 1, i += p(0, 1);
    return i += p($(b), 4), g.forEach((s)=>{
        i += p(H(s, c), 2);
    }), i;
}, S = O;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/adkit-docs/node_modules/thumbhash/thumbhash.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Encodes an RGBA image to a ThumbHash. RGB should not be premultiplied by A.
 *
 * @param w The width of the input image. Must be ≤100px.
 * @param h The height of the input image. Must be ≤100px.
 * @param rgba The pixels in the input image, row-by-row. Must have w*h*4 elements.
 * @returns The ThumbHash as a Uint8Array.
 */ __turbopack_context__.s([
    "rgbaToDataURL",
    ()=>rgbaToDataURL,
    "rgbaToThumbHash",
    ()=>rgbaToThumbHash,
    "thumbHashToApproximateAspectRatio",
    ()=>thumbHashToApproximateAspectRatio,
    "thumbHashToAverageRGBA",
    ()=>thumbHashToAverageRGBA,
    "thumbHashToDataURL",
    ()=>thumbHashToDataURL,
    "thumbHashToRGBA",
    ()=>thumbHashToRGBA
]);
function rgbaToThumbHash(w, h, rgba) {
    // Encoding an image larger than 100x100 is slow with no benefit
    if (w > 100 || h > 100) throw new Error(`${w}x${h} doesn't fit in 100x100`);
    let { PI, round, max, cos, abs } = Math;
    // Determine the average color
    let avg_r = 0, avg_g = 0, avg_b = 0, avg_a = 0;
    for(let i = 0, j = 0; i < w * h; i++, j += 4){
        let alpha = rgba[j + 3] / 255;
        avg_r += alpha / 255 * rgba[j];
        avg_g += alpha / 255 * rgba[j + 1];
        avg_b += alpha / 255 * rgba[j + 2];
        avg_a += alpha;
    }
    if (avg_a) {
        avg_r /= avg_a;
        avg_g /= avg_a;
        avg_b /= avg_a;
    }
    let hasAlpha = avg_a < w * h;
    let l_limit = hasAlpha ? 5 : 7 // Use fewer luminance bits if there's alpha
    ;
    let lx = max(1, round(l_limit * w / max(w, h)));
    let ly = max(1, round(l_limit * h / max(w, h)));
    let l = [] // luminance
    ;
    let p = [] // yellow - blue
    ;
    let q = [] // red - green
    ;
    let a = [] // alpha
    ;
    // Convert the image from RGBA to LPQA (composite atop the average color)
    for(let i = 0, j = 0; i < w * h; i++, j += 4){
        let alpha = rgba[j + 3] / 255;
        let r = avg_r * (1 - alpha) + alpha / 255 * rgba[j];
        let g = avg_g * (1 - alpha) + alpha / 255 * rgba[j + 1];
        let b = avg_b * (1 - alpha) + alpha / 255 * rgba[j + 2];
        l[i] = (r + g + b) / 3;
        p[i] = (r + g) / 2 - b;
        q[i] = r - g;
        a[i] = alpha;
    }
    // Encode using the DCT into DC (constant) and normalized AC (varying) terms
    let encodeChannel = (channel, nx, ny)=>{
        let dc = 0, ac = [], scale = 0, fx = [];
        for(let cy = 0; cy < ny; cy++){
            for(let cx = 0; cx * ny < nx * (ny - cy); cx++){
                let f = 0;
                for(let x = 0; x < w; x++)fx[x] = cos(PI / w * cx * (x + 0.5));
                for(let y = 0; y < h; y++)for(let x = 0, fy = cos(PI / h * cy * (y + 0.5)); x < w; x++)f += channel[x + y * w] * fx[x] * fy;
                f /= w * h;
                if (cx || cy) {
                    ac.push(f);
                    scale = max(scale, abs(f));
                } else {
                    dc = f;
                }
            }
        }
        if (scale) for(let i = 0; i < ac.length; i++)ac[i] = 0.5 + 0.5 / scale * ac[i];
        return [
            dc,
            ac,
            scale
        ];
    };
    let [l_dc, l_ac, l_scale] = encodeChannel(l, max(3, lx), max(3, ly));
    let [p_dc, p_ac, p_scale] = encodeChannel(p, 3, 3);
    let [q_dc, q_ac, q_scale] = encodeChannel(q, 3, 3);
    let [a_dc, a_ac, a_scale] = hasAlpha ? encodeChannel(a, 5, 5) : [];
    // Write the constants
    let isLandscape = w > h;
    let header24 = round(63 * l_dc) | round(31.5 + 31.5 * p_dc) << 6 | round(31.5 + 31.5 * q_dc) << 12 | round(31 * l_scale) << 18 | hasAlpha << 23;
    let header16 = (isLandscape ? ly : lx) | round(63 * p_scale) << 3 | round(63 * q_scale) << 9 | isLandscape << 15;
    let hash = [
        header24 & 255,
        header24 >> 8 & 255,
        header24 >> 16,
        header16 & 255,
        header16 >> 8
    ];
    let ac_start = hasAlpha ? 6 : 5;
    let ac_index = 0;
    if (hasAlpha) hash.push(round(15 * a_dc) | round(15 * a_scale) << 4);
    // Write the varying factors
    for (let ac of hasAlpha ? [
        l_ac,
        p_ac,
        q_ac,
        a_ac
    ] : [
        l_ac,
        p_ac,
        q_ac
    ])for (let f of ac)hash[ac_start + (ac_index >> 1)] |= round(15 * f) << ((ac_index++ & 1) << 2);
    return new Uint8Array(hash);
}
function thumbHashToRGBA(hash) {
    let { PI, min, max, cos, round } = Math;
    // Read the constants
    let header24 = hash[0] | hash[1] << 8 | hash[2] << 16;
    let header16 = hash[3] | hash[4] << 8;
    let l_dc = (header24 & 63) / 63;
    let p_dc = (header24 >> 6 & 63) / 31.5 - 1;
    let q_dc = (header24 >> 12 & 63) / 31.5 - 1;
    let l_scale = (header24 >> 18 & 31) / 31;
    let hasAlpha = header24 >> 23;
    let p_scale = (header16 >> 3 & 63) / 63;
    let q_scale = (header16 >> 9 & 63) / 63;
    let isLandscape = header16 >> 15;
    let lx = max(3, isLandscape ? hasAlpha ? 5 : 7 : header16 & 7);
    let ly = max(3, isLandscape ? header16 & 7 : hasAlpha ? 5 : 7);
    let a_dc = hasAlpha ? (hash[5] & 15) / 15 : 1;
    let a_scale = (hash[5] >> 4) / 15;
    // Read the varying factors (boost saturation by 1.25x to compensate for quantization)
    let ac_start = hasAlpha ? 6 : 5;
    let ac_index = 0;
    let decodeChannel = (nx, ny, scale)=>{
        let ac = [];
        for(let cy = 0; cy < ny; cy++)for(let cx = cy ? 0 : 1; cx * ny < nx * (ny - cy); cx++)ac.push(((hash[ac_start + (ac_index >> 1)] >> ((ac_index++ & 1) << 2) & 15) / 7.5 - 1) * scale);
        return ac;
    };
    let l_ac = decodeChannel(lx, ly, l_scale);
    let p_ac = decodeChannel(3, 3, p_scale * 1.25);
    let q_ac = decodeChannel(3, 3, q_scale * 1.25);
    let a_ac = hasAlpha && decodeChannel(5, 5, a_scale);
    // Decode using the DCT into RGB
    let ratio = thumbHashToApproximateAspectRatio(hash);
    let w = round(ratio > 1 ? 32 : 32 * ratio);
    let h = round(ratio > 1 ? 32 / ratio : 32);
    let rgba = new Uint8Array(w * h * 4), fx = [], fy = [];
    for(let y = 0, i = 0; y < h; y++){
        for(let x = 0; x < w; x++, i += 4){
            let l = l_dc, p = p_dc, q = q_dc, a = a_dc;
            // Precompute the coefficients
            for(let cx = 0, n = max(lx, hasAlpha ? 5 : 3); cx < n; cx++)fx[cx] = cos(PI / w * (x + 0.5) * cx);
            for(let cy = 0, n = max(ly, hasAlpha ? 5 : 3); cy < n; cy++)fy[cy] = cos(PI / h * (y + 0.5) * cy);
            // Decode L
            for(let cy = 0, j = 0; cy < ly; cy++)for(let cx = cy ? 0 : 1, fy2 = fy[cy] * 2; cx * ly < lx * (ly - cy); cx++, j++)l += l_ac[j] * fx[cx] * fy2;
            // Decode P and Q
            for(let cy = 0, j = 0; cy < 3; cy++){
                for(let cx = cy ? 0 : 1, fy2 = fy[cy] * 2; cx < 3 - cy; cx++, j++){
                    let f = fx[cx] * fy2;
                    p += p_ac[j] * f;
                    q += q_ac[j] * f;
                }
            }
            // Decode A
            if (hasAlpha) for(let cy = 0, j = 0; cy < 5; cy++)for(let cx = cy ? 0 : 1, fy2 = fy[cy] * 2; cx < 5 - cy; cx++, j++)a += a_ac[j] * fx[cx] * fy2;
            // Convert to RGB
            let b = l - 2 / 3 * p;
            let r = (3 * l - b + q) / 2;
            let g = r - q;
            rgba[i] = max(0, 255 * min(1, r));
            rgba[i + 1] = max(0, 255 * min(1, g));
            rgba[i + 2] = max(0, 255 * min(1, b));
            rgba[i + 3] = max(0, 255 * min(1, a));
        }
    }
    return {
        w,
        h,
        rgba
    };
}
function thumbHashToAverageRGBA(hash) {
    let { min, max } = Math;
    let header = hash[0] | hash[1] << 8 | hash[2] << 16;
    let l = (header & 63) / 63;
    let p = (header >> 6 & 63) / 31.5 - 1;
    let q = (header >> 12 & 63) / 31.5 - 1;
    let hasAlpha = header >> 23;
    let a = hasAlpha ? (hash[5] & 15) / 15 : 1;
    let b = l - 2 / 3 * p;
    let r = (3 * l - b + q) / 2;
    let g = r - q;
    return {
        r: max(0, min(1, r)),
        g: max(0, min(1, g)),
        b: max(0, min(1, b)),
        a
    };
}
function thumbHashToApproximateAspectRatio(hash) {
    let header = hash[3];
    let hasAlpha = hash[2] & 0x80;
    let isLandscape = hash[4] & 0x80;
    let lx = isLandscape ? hasAlpha ? 5 : 7 : header & 7;
    let ly = isLandscape ? header & 7 : hasAlpha ? 5 : 7;
    return lx / ly;
}
function rgbaToDataURL(w, h, rgba) {
    let row = w * 4 + 1;
    let idat = 6 + h * (5 + row);
    let bytes = [
        137,
        80,
        78,
        71,
        13,
        10,
        26,
        10,
        0,
        0,
        0,
        13,
        73,
        72,
        68,
        82,
        0,
        0,
        w >> 8,
        w & 255,
        0,
        0,
        h >> 8,
        h & 255,
        8,
        6,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        idat >>> 24,
        idat >> 16 & 255,
        idat >> 8 & 255,
        idat & 255,
        73,
        68,
        65,
        84,
        120,
        1
    ];
    let table = [
        0,
        498536548,
        997073096,
        651767980,
        1994146192,
        1802195444,
        1303535960,
        1342533948,
        -306674912,
        -267414716,
        -690576408,
        -882789492,
        -1687895376,
        -2032938284,
        -1609899400,
        -1111625188
    ];
    let a = 1, b = 0;
    for(let y = 0, i = 0, end = row - 1; y < h; y++, end += row - 1){
        bytes.push(y + 1 < h ? 0 : 1, row & 255, row >> 8, ~row & 255, row >> 8 ^ 255, 0);
        for(b = (b + a) % 65521; i < end; i++){
            let u = rgba[i] & 255;
            bytes.push(u);
            a = (a + u) % 65521;
            b = (b + a) % 65521;
        }
    }
    bytes.push(b >> 8, b & 255, a >> 8, a & 255, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130);
    for (let [start, end] of [
        [
            12,
            29
        ],
        [
            37,
            41 + idat
        ]
    ]){
        let c = ~0;
        for(let i = start; i < end; i++){
            c ^= bytes[i];
            c = c >>> 4 ^ table[c & 15];
            c = c >>> 4 ^ table[c & 15];
        }
        c = ~c;
        bytes[end++] = c >>> 24;
        bytes[end++] = c >> 16 & 255;
        bytes[end++] = c >> 8 & 255;
        bytes[end++] = c & 255;
    }
    return 'data:image/png;base64,' + btoa(String.fromCharCode(...bytes));
}
function thumbHashToDataURL(hash) {
    let image = thumbHashToRGBA(hash);
    return rgbaToDataURL(image.w, image.h, image.rgba);
}
}),
"[project]/adkit-docs/node_modules/@splinetool/react-spline/dist/next/decodePreview.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decodePreview",
    ()=>X
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$blurhash$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/blurhash/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$thumbhash$2f$thumbhash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/thumbhash/thumbhash.js [app-client] (ecmascript)");
;
;
function X(t, i = !1, o = 100, c = 100) {
    return i ? __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$thumbhash$2f$thumbhash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["thumbHashToDataURL"](N(t)) : O(t, o, c);
}
function N(t) {
    return new Uint8Array(atob(t).split("").map((i)=>i.charCodeAt(0)));
}
function O(t, i = 100, o = 100) {
    if (!t) return;
    const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$blurhash$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decode"])(t, i, o);
    return M(c, i, o);
}
function M(t, i, o) {
    const c = [
        ...t
    ].map((d)=>String.fromCharCode(d)).join(""), l = B(i, o, c);
    return "data:image/png;base64," + (typeof __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"] < "u" ? __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(x(l)).toString("base64") : btoa(l));
}
function x(t) {
    const i = new Uint8Array(t.length);
    for(let o = 0; o < t.length; o++)i[o] = t.charCodeAt(o);
    return i;
}
function B(t, i, o) {
    const c = "x", l = [], T = `PNG\r

`, d = "\0";
    let C, s, h;
    for(C = 0; C < 256; C++){
        for(s = C, h = 0; h < 8; h++)s & 1 ? s = 3988292384 ^ s >>> 1 : s = s >>> 1;
        l[C] = s;
    }
    function E(r) {
        let n = "", e, f;
        for(let g = 0; g < r.length; g += 65535)e = r.length - g, f = "", e <= 65535 ? f = "" : (e = 65535, f = "\0"), n += f + String.fromCharCode(e & 255, (e & 65280) >>> 8), n += String.fromCharCode(~e & 255, (~e & 65280) >>> 8), n += r.substring(g, g + e);
        return n;
    }
    function p(r) {
        let a = 65521, n = 1, e = 0;
        for(let f = 0; f < r.length; f++)n = (n + r.charCodeAt(f)) % a, e = (e + n) % a;
        return e << 16 | n;
    }
    function D(r, a) {
        let n = r, e;
        for(let f = 0; f < a.length; f++)e = a.charCodeAt(f), n = l[(n ^ e) & 255] ^ n >>> 8;
        return n;
    }
    function L(r) {
        return D(4294967295, r) ^ 4294967295;
    }
    function u(r) {
        return String.fromCharCode((r & 4278190080) >>> 24, (r & 16711680) >>> 16, (r & 65280) >>> 8, r & 255);
    }
    function S(r, a, n) {
        const e = L(a + n);
        return u(r) + a + n + u(e);
    }
    function H(r, a) {
        const n = u(r) + u(a) + // bit depth
        "\b\0\0\0";
        return S(13, "IHDR", n);
    }
    const _ = S(0, "IEND", ""), I = H(t, i);
    let A = "", m;
    for(let r = 0; r < o.length; r += t * 4){
        if (m = d, Array.isArray(o)) for(let a = 0; a < t * 4; a++)m += String.fromCharCode(o[r + a] & 255);
        else m += o.substr(r, t * 4);
        A += m;
    }
    const R = c + E(A) + u(p(A)), b = S(R.length, "IDAT", R);
    return T + I + b + _;
}
;
}),
"[project]/adkit-docs/node_modules/@splinetool/react-spline/dist/ParentSize.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>M
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lodash$2e$debounce$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lodash.debounce/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$merge$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/react-merge-refs/dist/index.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
const I = [], K = {
    width: "100%",
    height: "100%"
}, M = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function({ className: w, children: p, debounceTime: i = 300, ignoreDimensions: s = I, parentSizeStyles: z, enableDebounceLeadingCall: u = !0, resizeObserverPolyfill: f, ...R }, S) {
    const o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0), [v, y] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        width: 0,
        height: 0,
        top: 0,
        left: 0
    }), n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const a = Array.isArray(s) ? s : [
            s
        ];
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lodash$2e$debounce$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((e)=>{
            y((r)=>Object.keys(r).filter((t)=>r[t] !== e[t]).every((t)=>a.includes(t)) ? r : e);
        }, i, {
            leading: u
        });
    }, [
        i,
        u,
        s
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const a = f || window.ResizeObserver, e = new a((r)=>{
            r.forEach((c)=>{
                const { left: h, top: l, width: t, height: A } = (c == null ? void 0 : c.contentRect) ?? {};
                d.current = window.requestAnimationFrame(()=>{
                    n({
                        width: t,
                        height: A,
                        top: l,
                        left: h
                    });
                });
            });
        });
        return o.current && e.observe(o.current), ()=>{
            window.cancelAnimationFrame(d.current), e.disconnect(), n.cancel();
        };
    }, [
        n,
        f
    ]), /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        style: {
            ...K,
            ...z
        },
        ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$merge$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeRefs"])([
            S,
            o
        ]),
        className: w,
        ...R,
        children: p({
            ...v,
            ref: o.current,
            resize: n
        })
    });
});
;
}),
"[project]/adkit-docs/node_modules/@splinetool/react-spline/dist/react-spline.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>G
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$splinetool$2f$runtime$2f$build$2f$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/@splinetool/runtime/build/runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$splinetool$2f$react$2d$spline$2f$dist$2f$ParentSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/@splinetool/react-spline/dist/ParentSize.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const G = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ scene: s, style: u, onSplineMouseDown: p, onSplineMouseUp: b, onSplineMouseHover: d, onSplineKeyDown: v, onSplineKeyUp: w, onSplineStart: y, onSplineLookAt: h, onSplineFollow: S, onSplineScroll: k, onLoad: r, renderOnDemand: E = !0, wasmPath: g, children: x, ...A }, R)=>{
    const o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), [c, a] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!0), [i, j] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    if (i) throw i;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        a(!0);
        let e;
        const m = [
            {
                name: "mouseDown",
                cb: p
            },
            {
                name: "mouseUp",
                cb: b
            },
            {
                name: "mouseHover",
                cb: d
            },
            {
                name: "keyDown",
                cb: v
            },
            {
                name: "keyUp",
                cb: w
            },
            {
                name: "start",
                cb: y
            },
            {
                name: "lookAt",
                cb: h
            },
            {
                name: "follow",
                cb: S
            },
            {
                name: "scroll",
                cb: k
            }
        ];
        if (o.current) {
            e = new __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$splinetool$2f$runtime$2f$build$2f$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Application"](o.current, {
                renderOnDemand: E,
                wasmPath: g
            });
            async function t() {
                await e.load(s);
                for (let n of m)n.cb && e.addEventListener(n.name, n.cb);
                a(!1), r == null || r(e);
            }
            t().catch((n)=>{
                j(n);
            });
        }
        return ()=>{
            for (let t of m)t.cb && e.removeEventListener(t.name, t.cb);
            e.dispose();
        };
    }, [
        s
    ]), /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$splinetool$2f$react$2d$spline$2f$dist$2f$ParentSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ref: R,
        parentSizeStyles: {
            overflow: "hidden",
            ...u
        },
        debounceTime: 50,
        ...A,
        children: ()=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    c && x,
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("canvas", {
                        ref: o,
                        style: {
                            display: c ? "none" : "block"
                        }
                    })
                ]
            })
    });
});
;
}),
"[project]/adkit-docs/node_modules/@splinetool/react-spline/dist/react-spline-next.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>u
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$splinetool$2f$react$2d$spline$2f$dist$2f$next$2f$decodePreview$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/@splinetool/react-spline/dist/next/decodePreview.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$splinetool$2f$react$2d$spline$2f$dist$2f$react$2d$spline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/@splinetool/react-spline/dist/react-spline.js [app-client] (ecmascript)");
;
;
;
;
async function l(n) {
    const t = /^https:\/\/([^\/]+).spline.design\/([^\/]+)\/scene.splinecode/gi.exec(n);
    let i = {};
    if (t != null && t[2]) {
        const s = t[1], r = t[2];
        try {
            const e = await (await fetch(`https://${s}.spline.design/${r}/hash`, {
                cache: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "no-store"
            })).json();
            Object.assign(i, e), i.img = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$splinetool$2f$react$2d$spline$2f$dist$2f$next$2f$decodePreview$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodePreview"])(e.hash, e.alpha, e.width, e.height);
        } catch (c) {
            console.error(c);
        }
    }
    return i;
}
async function u({ ...n }) {
    const { hash: t, img: i, frameWidth: s, frameHeight: r, width: c, height: e } = await l(n.scene);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$splinetool$2f$react$2d$spline$2f$dist$2f$react$2d$spline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ...n,
            children: i && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: i,
                alt: "Spline preview",
                style: {
                    width: s ? s + "px" : "100%",
                    height: r ? r + "px" : "100%"
                },
                width: c ?? 100,
                height: e ?? 100
            })
        })
    });
}
;
}),
"[project]/adkit-docs/node_modules/lodash.debounce/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** Used as the `TypeError` message for "Functions" methods. */ var FUNC_ERROR_TEXT = 'Expected a function';
/** Used as references for various `Number` constants. */ var NAN = 0 / 0;
/** `Object#toString` result references. */ var symbolTag = '[object Symbol]';
/** Used to match leading and trailing whitespace. */ var reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */ var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */ var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */ var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */ var freeParseInt = parseInt;
/** Detect free variable `global` from Node.js. */ var freeGlobal = ("TURBOPACK compile-time value", "object") == 'object' && /*TURBOPACK member replacement*/ __turbopack_context__.g && /*TURBOPACK member replacement*/ __turbopack_context__.g.Object === Object && /*TURBOPACK member replacement*/ __turbopack_context__.g;
/** Detect free variable `self`. */ var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function('return this')();
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeMax = Math.max, nativeMin = Math.min;
/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */ var now = function() {
    return root.Date.now();
};
/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */ function debounce(func, wait, options) {
    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
    }
    function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result = wait - timeSinceLastCall;
        return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
    }
    function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
            return trailingEdge(time);
        }
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
        timerId = undefined;
        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
            return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
    }
    function cancel() {
        if (timerId !== undefined) {
            clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
    }
    function flush() {
        return timerId === undefined ? result : trailingEdge(now());
    }
    function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
            if (timerId === undefined) {
                return leadingEdge(lastCallTime);
            }
            if (maxing) {
                // Handle invocations in a tight loop.
                timerId = setTimeout(timerExpired, wait);
                return invokeFunc(lastCallTime);
            }
        }
        if (timerId === undefined) {
            timerId = setTimeout(timerExpired, wait);
        }
        return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return !!value && typeof value == 'object';
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function isSymbol(value) {
    return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */ function toNumber(value) {
    if (typeof value == 'number') {
        return value;
    }
    if (isSymbol(value)) {
        return NAN;
    }
    if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? other + '' : other;
    }
    if (typeof value != 'string') {
        return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
module.exports = debounce;
}),
"[project]/adkit-docs/node_modules/react-merge-refs/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeRefs",
    ()=>o
]);
function o(f) {
    return (r)=>{
        f.forEach((n)=>{
            typeof n == "function" ? n(r) : n != null && (n.current = r);
        });
    };
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/adkit-docs/node_modules/@radix-ui/primitive/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/core/primitive/src/primitive.tsx
__turbopack_context__.s([
    "composeEventHandlers",
    ()=>composeEventHandlers
]);
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
    return function handleEvent(event) {
        originalEventHandler?.(event);
        if (checkForDefaultPrevented === false || !event.defaultPrevented) {
            return ourEventHandler?.(event);
        }
    };
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/adkit-docs/node_modules/@radix-ui/react-context/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/context/src/createContext.tsx
__turbopack_context__.s([
    "createContext",
    ()=>createContext2,
    "createContextScope",
    ()=>createContextScope
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
function createContext2(rootComponentName, defaultContext) {
    const Context = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](defaultContext);
    const Provider = (props)=>{
        const { children, ...context } = props;
        const value = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
            "createContext2.Provider.useMemo[value]": ()=>context
        }["createContext2.Provider.useMemo[value]"], Object.values(context));
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Context.Provider, {
            value,
            children
        });
    };
    Provider.displayName = rootComponentName + "Provider";
    function useContext2(consumerName) {
        const context = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](Context);
        if (context) return context;
        if (defaultContext !== void 0) return defaultContext;
        throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [
        Provider,
        useContext2
    ];
}
function createContextScope(scopeName, createContextScopeDeps = []) {
    let defaultContexts = [];
    function createContext3(rootComponentName, defaultContext) {
        const BaseContext = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](defaultContext);
        const index = defaultContexts.length;
        defaultContexts = [
            ...defaultContexts,
            defaultContext
        ];
        const Provider = (props)=>{
            const { scope, children, ...context } = props;
            const Context = scope?.[scopeName]?.[index] || BaseContext;
            const value = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
                "createContextScope.createContext3.Provider.useMemo[value]": ()=>context
            }["createContextScope.createContext3.Provider.useMemo[value]"], Object.values(context));
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Context.Provider, {
                value,
                children
            });
        };
        Provider.displayName = rootComponentName + "Provider";
        function useContext2(consumerName, scope) {
            const Context = scope?.[scopeName]?.[index] || BaseContext;
            const context = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](Context);
            if (context) return context;
            if (defaultContext !== void 0) return defaultContext;
            throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
        }
        return [
            Provider,
            useContext2
        ];
    }
    const createScope = ()=>{
        const scopeContexts = defaultContexts.map((defaultContext)=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](defaultContext);
        });
        return function useScope(scope) {
            const contexts = scope?.[scopeName] || scopeContexts;
            return __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
                "createContextScope.createScope.useScope.useMemo": ()=>({
                        [`__scope${scopeName}`]: {
                            ...scope,
                            [scopeName]: contexts
                        }
                    })
            }["createContextScope.createScope.useScope.useMemo"], [
                scope,
                contexts
            ]);
        };
    };
    createScope.scopeName = scopeName;
    return [
        createContext3,
        composeContextScopes(createScope, ...createContextScopeDeps)
    ];
}
function composeContextScopes(...scopes) {
    const baseScope = scopes[0];
    if (scopes.length === 1) return baseScope;
    const createScope = ()=>{
        const scopeHooks = scopes.map((createScope2)=>({
                useScope: createScope2(),
                scopeName: createScope2.scopeName
            }));
        return function useComposedScopes(overrideScopes) {
            const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName })=>{
                const scopeProps = useScope(overrideScopes);
                const currentScope = scopeProps[`__scope${scopeName}`];
                return {
                    ...nextScopes2,
                    ...currentScope
                };
            }, {});
            return __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
                "composeContextScopes.createScope.useComposedScopes.useMemo": ()=>({
                        [`__scope${baseScope.scopeName}`]: nextScopes
                    })
            }["composeContextScopes.createScope.useComposedScopes.useMemo"], [
                nextScopes
            ]);
        };
    };
    createScope.scopeName = baseScope.scopeName;
    return createScope;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/adkit-docs/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/use-callback-ref/src/useCallbackRef.tsx
__turbopack_context__.s([
    "useCallbackRef",
    ()=>useCallbackRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function useCallbackRef(callback) {
    const callbackRef = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](callback);
    __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useCallbackRef.useEffect": ()=>{
            callbackRef.current = callback;
        }
    }["useCallbackRef.useEffect"]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useCallbackRef.useMemo": ()=>({
                "useCallbackRef.useMemo": (...args)=>callbackRef.current?.(...args)
            })["useCallbackRef.useMemo"]
    }["useCallbackRef.useMemo"], []);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/adkit-docs/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/use-controllable-state/src/useControllableState.tsx
__turbopack_context__.s([
    "useControllableState",
    ()=>useControllableState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-client] (ecmascript)");
;
;
function useControllableState({ prop, defaultProp, onChange = ()=>{} }) {
    const [uncontrolledProp, setUncontrolledProp] = useUncontrolledState({
        defaultProp,
        onChange
    });
    const isControlled = prop !== void 0;
    const value = isControlled ? prop : uncontrolledProp;
    const handleChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onChange);
    const setValue = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useControllableState.useCallback[setValue]": (nextValue)=>{
            if (isControlled) {
                const setter = nextValue;
                const value2 = typeof nextValue === "function" ? setter(prop) : nextValue;
                if (value2 !== prop) handleChange(value2);
            } else {
                setUncontrolledProp(nextValue);
            }
        }
    }["useControllableState.useCallback[setValue]"], [
        isControlled,
        prop,
        setUncontrolledProp,
        handleChange
    ]);
    return [
        value,
        setValue
    ];
}
function useUncontrolledState({ defaultProp, onChange }) {
    const uncontrolledState = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](defaultProp);
    const [value] = uncontrolledState;
    const prevValueRef = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](value);
    const handleChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onChange);
    __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useUncontrolledState.useEffect": ()=>{
            if (prevValueRef.current !== value) {
                handleChange(value);
                prevValueRef.current = value;
            }
        }
    }["useUncontrolledState.useEffect"], [
        value,
        prevValueRef,
        handleChange
    ]);
    return uncontrolledState;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/adkit-docs/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/use-layout-effect/src/useLayoutEffect.tsx
__turbopack_context__.s([
    "useLayoutEffect",
    ()=>useLayoutEffect2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var useLayoutEffect2 = Boolean(globalThis?.document) ? __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : ()=>{};
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/adkit-docs/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/primitive/src/Primitive.tsx
__turbopack_context__.s([
    "Primitive",
    ()=>Primitive,
    "Root",
    ()=>Root,
    "dispatchDiscreteCustomEvent",
    ()=>dispatchDiscreteCustomEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
;
var NODES = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul"
];
var Primitive = NODES.reduce((primitive, node)=>{
    const Node = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { asChild, ...primitiveProps } = props;
        const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : node;
        if (typeof window !== "undefined") {
            window[Symbol.for("radix-ui")] = true;
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Comp, {
            ...primitiveProps,
            ref: forwardedRef
        });
    });
    Node.displayName = `Primitive.${node}`;
    return {
        ...primitive,
        [node]: Node
    };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
    if (target) __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"](()=>target.dispatchEvent(event));
}
var Root = Primitive;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/adkit-docs/node_modules/@radix-ui/react-presence/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Presence",
    ()=>Presence
]);
// packages/react/presence/src/Presence.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
function useStateMachine(initialState, machine) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"]({
        "useStateMachine.useReducer": (state, event)=>{
            const nextState = machine[state][event];
            return nextState ?? state;
        }
    }["useStateMachine.useReducer"], initialState);
}
// packages/react/presence/src/Presence.tsx
var Presence = (props)=>{
    const { present, children } = props;
    const presence = usePresence(present);
    const child = typeof children === "function" ? children({
        present: presence.isPresent
    }) : __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].only(children);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(presence.ref, getElementRef(child));
    const forceMount = typeof children === "function";
    return forceMount || presence.isPresent ? __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](child, {
        ref
    }) : null;
};
Presence.displayName = "Presence";
function usePresence(present) {
    const [node, setNode] = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]();
    const stylesRef = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]({});
    const prevPresentRef = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](present);
    const prevAnimationNameRef = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]("none");
    const initialState = present ? "mounted" : "unmounted";
    const [state, send] = useStateMachine(initialState, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "usePresence.useEffect": ()=>{
            const currentAnimationName = getAnimationName(stylesRef.current);
            prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
        }
    }["usePresence.useEffect"], [
        state
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "usePresence.useLayoutEffect": ()=>{
            const styles = stylesRef.current;
            const wasPresent = prevPresentRef.current;
            const hasPresentChanged = wasPresent !== present;
            if (hasPresentChanged) {
                const prevAnimationName = prevAnimationNameRef.current;
                const currentAnimationName = getAnimationName(styles);
                if (present) {
                    send("MOUNT");
                } else if (currentAnimationName === "none" || styles?.display === "none") {
                    send("UNMOUNT");
                } else {
                    const isAnimating = prevAnimationName !== currentAnimationName;
                    if (wasPresent && isAnimating) {
                        send("ANIMATION_OUT");
                    } else {
                        send("UNMOUNT");
                    }
                }
                prevPresentRef.current = present;
            }
        }
    }["usePresence.useLayoutEffect"], [
        present,
        send
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "usePresence.useLayoutEffect": ()=>{
            if (node) {
                let timeoutId;
                const ownerWindow = node.ownerDocument.defaultView ?? window;
                const handleAnimationEnd = {
                    "usePresence.useLayoutEffect.handleAnimationEnd": (event)=>{
                        const currentAnimationName = getAnimationName(stylesRef.current);
                        const isCurrentAnimation = currentAnimationName.includes(event.animationName);
                        if (event.target === node && isCurrentAnimation) {
                            send("ANIMATION_END");
                            if (!prevPresentRef.current) {
                                const currentFillMode = node.style.animationFillMode;
                                node.style.animationFillMode = "forwards";
                                timeoutId = ownerWindow.setTimeout({
                                    "usePresence.useLayoutEffect.handleAnimationEnd": ()=>{
                                        if (node.style.animationFillMode === "forwards") {
                                            node.style.animationFillMode = currentFillMode;
                                        }
                                    }
                                }["usePresence.useLayoutEffect.handleAnimationEnd"]);
                            }
                        }
                    }
                }["usePresence.useLayoutEffect.handleAnimationEnd"];
                const handleAnimationStart = {
                    "usePresence.useLayoutEffect.handleAnimationStart": (event)=>{
                        if (event.target === node) {
                            prevAnimationNameRef.current = getAnimationName(stylesRef.current);
                        }
                    }
                }["usePresence.useLayoutEffect.handleAnimationStart"];
                node.addEventListener("animationstart", handleAnimationStart);
                node.addEventListener("animationcancel", handleAnimationEnd);
                node.addEventListener("animationend", handleAnimationEnd);
                return ({
                    "usePresence.useLayoutEffect": ()=>{
                        ownerWindow.clearTimeout(timeoutId);
                        node.removeEventListener("animationstart", handleAnimationStart);
                        node.removeEventListener("animationcancel", handleAnimationEnd);
                        node.removeEventListener("animationend", handleAnimationEnd);
                    }
                })["usePresence.useLayoutEffect"];
            } else {
                send("ANIMATION_END");
            }
        }
    }["usePresence.useLayoutEffect"], [
        node,
        send
    ]);
    return {
        isPresent: [
            "mounted",
            "unmountSuspended"
        ].includes(state),
        ref: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
            "usePresence.useCallback": (node2)=>{
                if (node2) stylesRef.current = getComputedStyle(node2);
                setNode(node2);
            }
        }["usePresence.useCallback"], [])
    };
}
function getAnimationName(styles) {
    return styles?.animationName || "none";
}
function getElementRef(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/adkit-docs/node_modules/@radix-ui/react-id/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/id/src/id.tsx
__turbopack_context__.s([
    "useId",
    ()=>useId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-client] (ecmascript)");
;
;
var useReactId = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId".toString()] || (()=>void 0);
var count = 0;
function useId(deterministicId) {
    const [id, setId] = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(useReactId());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "useId.useLayoutEffect": ()=>{
            if (!deterministicId) setId({
                "useId.useLayoutEffect": (reactId)=>reactId ?? String(count++)
            }["useId.useLayoutEffect"]);
        }
    }["useId.useLayoutEffect"], [
        deterministicId
    ]);
    return deterministicId || (id ? `radix-${id}` : "");
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/adkit-docs/node_modules/@radix-ui/react-collapsible/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Collapsible",
    ()=>Collapsible,
    "CollapsibleContent",
    ()=>CollapsibleContent,
    "CollapsibleTrigger",
    ()=>CollapsibleTrigger,
    "Content",
    ()=>Content,
    "Root",
    ()=>Root,
    "Trigger",
    ()=>Trigger,
    "createCollapsibleScope",
    ()=>createCollapsibleScope
]);
// packages/react/collapsible/src/Collapsible.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/@radix-ui/primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/@radix-ui/react-context/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/@radix-ui/react-presence/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/@radix-ui/react-id/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
var COLLAPSIBLE_NAME = "Collapsible";
var [createCollapsibleContext, createCollapsibleScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContextScope"])(COLLAPSIBLE_NAME);
var [CollapsibleProvider, useCollapsibleContext] = createCollapsibleContext(COLLAPSIBLE_NAME);
var Collapsible = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeCollapsible, open: openProp, defaultOpen, disabled, onOpenChange, ...collapsibleProps } = props;
    const [open = false, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControllableState"])({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CollapsibleProvider, {
        scope: __scopeCollapsible,
        disabled,
        contentId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(),
        open,
        onOpenToggle: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
            "Collapsible.useCallback": ()=>setOpen({
                    "Collapsible.useCallback": (prevOpen)=>!prevOpen
                }["Collapsible.useCallback"])
        }["Collapsible.useCallback"], [
            setOpen
        ]),
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
            "data-state": getState(open),
            "data-disabled": disabled ? "" : void 0,
            ...collapsibleProps,
            ref: forwardedRef
        })
    });
});
Collapsible.displayName = COLLAPSIBLE_NAME;
var TRIGGER_NAME = "CollapsibleTrigger";
var CollapsibleTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeCollapsible, ...triggerProps } = props;
    const context = useCollapsibleContext(TRIGGER_NAME, __scopeCollapsible);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].button, {
        type: "button",
        "aria-controls": context.contentId,
        "aria-expanded": context.open || false,
        "data-state": getState(context.open),
        "data-disabled": context.disabled ? "" : void 0,
        disabled: context.disabled,
        ...triggerProps,
        ref: forwardedRef,
        onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onClick, context.onOpenToggle)
    });
});
CollapsibleTrigger.displayName = TRIGGER_NAME;
var CONTENT_NAME = "CollapsibleContent";
var CollapsibleContent = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { forceMount, ...contentProps } = props;
    const context = useCollapsibleContext(CONTENT_NAME, props.__scopeCollapsible);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Presence"], {
        present: forceMount || context.open,
        children: ({ present })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CollapsibleContentImpl, {
                ...contentProps,
                ref: forwardedRef,
                present
            })
    });
});
CollapsibleContent.displayName = CONTENT_NAME;
var CollapsibleContentImpl = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeCollapsible, present, children, ...contentProps } = props;
    const context = useCollapsibleContext(CONTENT_NAME, __scopeCollapsible);
    const [isPresent, setIsPresent] = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](present);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref);
    const heightRef = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](0);
    const height = heightRef.current;
    const widthRef = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](0);
    const width = widthRef.current;
    const isOpen = context.open || isPresent;
    const isMountAnimationPreventedRef = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](isOpen);
    const originalStylesRef = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](void 0);
    __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "CollapsibleContentImpl.useEffect": ()=>{
            const rAF = requestAnimationFrame({
                "CollapsibleContentImpl.useEffect.rAF": ()=>isMountAnimationPreventedRef.current = false
            }["CollapsibleContentImpl.useEffect.rAF"]);
            return ({
                "CollapsibleContentImpl.useEffect": ()=>cancelAnimationFrame(rAF)
            })["CollapsibleContentImpl.useEffect"];
        }
    }["CollapsibleContentImpl.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "CollapsibleContentImpl.useLayoutEffect": ()=>{
            const node = ref.current;
            if (node) {
                originalStylesRef.current = originalStylesRef.current || {
                    transitionDuration: node.style.transitionDuration,
                    animationName: node.style.animationName
                };
                node.style.transitionDuration = "0s";
                node.style.animationName = "none";
                const rect = node.getBoundingClientRect();
                heightRef.current = rect.height;
                widthRef.current = rect.width;
                if (!isMountAnimationPreventedRef.current) {
                    node.style.transitionDuration = originalStylesRef.current.transitionDuration;
                    node.style.animationName = originalStylesRef.current.animationName;
                }
                setIsPresent(present);
            }
        }
    }["CollapsibleContentImpl.useLayoutEffect"], [
        context.open,
        present
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
        "data-state": getState(context.open),
        "data-disabled": context.disabled ? "" : void 0,
        id: context.contentId,
        hidden: !isOpen,
        ...contentProps,
        ref: composedRefs,
        style: {
            [`--radix-collapsible-content-height`]: height ? `${height}px` : void 0,
            [`--radix-collapsible-content-width`]: width ? `${width}px` : void 0,
            ...props.style
        },
        children: isOpen && children
    });
});
function getState(open) {
    return open ? "open" : "closed";
}
var Root = Collapsible;
var Trigger = CollapsibleTrigger;
var Content = CollapsibleContent;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/adkit-docs/node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/use-escape-keydown/src/useEscapeKeydown.tsx
__turbopack_context__.s([
    "useEscapeKeydown",
    ()=>useEscapeKeydown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-client] (ecmascript)");
;
;
function useEscapeKeydown(onEscapeKeyDownProp, ownerDocument = globalThis?.document) {
    const onEscapeKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onEscapeKeyDownProp);
    __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useEscapeKeydown.useEffect": ()=>{
            const handleKeyDown = {
                "useEscapeKeydown.useEffect.handleKeyDown": (event)=>{
                    if (event.key === "Escape") {
                        onEscapeKeyDown(event);
                    }
                }
            }["useEscapeKeydown.useEffect.handleKeyDown"];
            ownerDocument.addEventListener("keydown", handleKeyDown, {
                capture: true
            });
            return ({
                "useEscapeKeydown.useEffect": ()=>ownerDocument.removeEventListener("keydown", handleKeyDown, {
                        capture: true
                    })
            })["useEscapeKeydown.useEffect"];
        }
    }["useEscapeKeydown.useEffect"], [
        onEscapeKeyDown,
        ownerDocument
    ]);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/adkit-docs/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Branch",
    ()=>Branch,
    "DismissableLayer",
    ()=>DismissableLayer,
    "DismissableLayerBranch",
    ()=>DismissableLayerBranch,
    "Root",
    ()=>Root
]);
// packages/react/dismissable-layer/src/DismissableLayer.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/@radix-ui/primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$escape$2d$keydown$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
var DISMISSABLE_LAYER_NAME = "DismissableLayer";
var CONTEXT_UPDATE = "dismissableLayer.update";
var POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var originalBodyPointerEvents;
var DismissableLayerContext = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({
    layers: /* @__PURE__ */ new Set(),
    layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
    branches: /* @__PURE__ */ new Set()
});
var DismissableLayer = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { disableOutsidePointerEvents = false, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, ...layerProps } = props;
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](DismissableLayerContext);
    const [node, setNode] = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const ownerDocument = node?.ownerDocument ?? globalThis?.document;
    const [, force] = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({});
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, {
        "DismissableLayer.useComposedRefs[composedRefs]": (node2)=>setNode(node2)
    }["DismissableLayer.useComposedRefs[composedRefs]"]);
    const layers = Array.from(context.layers);
    const [highestLayerWithOutsidePointerEventsDisabled] = [
        ...context.layersWithOutsidePointerEventsDisabled
    ].slice(-1);
    const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
    const index = node ? layers.indexOf(node) : -1;
    const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
    const isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex;
    const pointerDownOutside = usePointerDownOutside({
        "DismissableLayer.usePointerDownOutside[pointerDownOutside]": (event)=>{
            const target = event.target;
            const isPointerDownOnBranch = [
                ...context.branches
            ].some({
                "DismissableLayer.usePointerDownOutside[pointerDownOutside].isPointerDownOnBranch": (branch)=>branch.contains(target)
            }["DismissableLayer.usePointerDownOutside[pointerDownOutside].isPointerDownOnBranch"]);
            if (!isPointerEventsEnabled || isPointerDownOnBranch) return;
            onPointerDownOutside?.(event);
            onInteractOutside?.(event);
            if (!event.defaultPrevented) onDismiss?.();
        }
    }["DismissableLayer.usePointerDownOutside[pointerDownOutside]"], ownerDocument);
    const focusOutside = useFocusOutside({
        "DismissableLayer.useFocusOutside[focusOutside]": (event)=>{
            const target = event.target;
            const isFocusInBranch = [
                ...context.branches
            ].some({
                "DismissableLayer.useFocusOutside[focusOutside].isFocusInBranch": (branch)=>branch.contains(target)
            }["DismissableLayer.useFocusOutside[focusOutside].isFocusInBranch"]);
            if (isFocusInBranch) return;
            onFocusOutside?.(event);
            onInteractOutside?.(event);
            if (!event.defaultPrevented) onDismiss?.();
        }
    }["DismissableLayer.useFocusOutside[focusOutside]"], ownerDocument);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$escape$2d$keydown$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEscapeKeydown"])({
        "DismissableLayer.useEscapeKeydown": (event)=>{
            const isHighestLayer = index === context.layers.size - 1;
            if (!isHighestLayer) return;
            onEscapeKeyDown?.(event);
            if (!event.defaultPrevented && onDismiss) {
                event.preventDefault();
                onDismiss();
            }
        }
    }["DismissableLayer.useEscapeKeydown"], ownerDocument);
    __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "DismissableLayer.useEffect": ()=>{
            if (!node) return;
            if (disableOutsidePointerEvents) {
                if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
                    originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
                    ownerDocument.body.style.pointerEvents = "none";
                }
                context.layersWithOutsidePointerEventsDisabled.add(node);
            }
            context.layers.add(node);
            dispatchUpdate();
            return ({
                "DismissableLayer.useEffect": ()=>{
                    if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1) {
                        ownerDocument.body.style.pointerEvents = originalBodyPointerEvents;
                    }
                }
            })["DismissableLayer.useEffect"];
        }
    }["DismissableLayer.useEffect"], [
        node,
        ownerDocument,
        disableOutsidePointerEvents,
        context
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "DismissableLayer.useEffect": ()=>{
            return ({
                "DismissableLayer.useEffect": ()=>{
                    if (!node) return;
                    context.layers.delete(node);
                    context.layersWithOutsidePointerEventsDisabled.delete(node);
                    dispatchUpdate();
                }
            })["DismissableLayer.useEffect"];
        }
    }["DismissableLayer.useEffect"], [
        node,
        context
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "DismissableLayer.useEffect": ()=>{
            const handleUpdate = {
                "DismissableLayer.useEffect.handleUpdate": ()=>force({})
            }["DismissableLayer.useEffect.handleUpdate"];
            document.addEventListener(CONTEXT_UPDATE, handleUpdate);
            return ({
                "DismissableLayer.useEffect": ()=>document.removeEventListener(CONTEXT_UPDATE, handleUpdate)
            })["DismissableLayer.useEffect"];
        }
    }["DismissableLayer.useEffect"], []);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
        ...layerProps,
        ref: composedRefs,
        style: {
            pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
            ...props.style
        },
        onFocusCapture: (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onFocusCapture, focusOutside.onFocusCapture),
        onBlurCapture: (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onBlurCapture, focusOutside.onBlurCapture),
        onPointerDownCapture: (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
    });
});
DismissableLayer.displayName = DISMISSABLE_LAYER_NAME;
var BRANCH_NAME = "DismissableLayerBranch";
var DismissableLayerBranch = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](DismissableLayerContext);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref);
    __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "DismissableLayerBranch.useEffect": ()=>{
            const node = ref.current;
            if (node) {
                context.branches.add(node);
                return ({
                    "DismissableLayerBranch.useEffect": ()=>{
                        context.branches.delete(node);
                    }
                })["DismissableLayerBranch.useEffect"];
            }
        }
    }["DismissableLayerBranch.useEffect"], [
        context.branches
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
        ...props,
        ref: composedRefs
    });
});
DismissableLayerBranch.displayName = BRANCH_NAME;
function usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis?.document) {
    const handlePointerDownOutside = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onPointerDownOutside);
    const isPointerInsideReactTreeRef = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    const handleClickRef = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]({
        "usePointerDownOutside.useRef[handleClickRef]": ()=>{}
    }["usePointerDownOutside.useRef[handleClickRef]"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "usePointerDownOutside.useEffect": ()=>{
            const handlePointerDown = {
                "usePointerDownOutside.useEffect.handlePointerDown": (event)=>{
                    if (event.target && !isPointerInsideReactTreeRef.current) {
                        let handleAndDispatchPointerDownOutsideEvent2 = {
                            "usePointerDownOutside.useEffect.handlePointerDown.handleAndDispatchPointerDownOutsideEvent2": function() {
                                handleAndDispatchCustomEvent(POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, {
                                    discrete: true
                                });
                            }
                        }["usePointerDownOutside.useEffect.handlePointerDown.handleAndDispatchPointerDownOutsideEvent2"];
                        var handleAndDispatchPointerDownOutsideEvent = handleAndDispatchPointerDownOutsideEvent2;
                        const eventDetail = {
                            originalEvent: event
                        };
                        if (event.pointerType === "touch") {
                            ownerDocument.removeEventListener("click", handleClickRef.current);
                            handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
                            ownerDocument.addEventListener("click", handleClickRef.current, {
                                once: true
                            });
                        } else {
                            handleAndDispatchPointerDownOutsideEvent2();
                        }
                    } else {
                        ownerDocument.removeEventListener("click", handleClickRef.current);
                    }
                    isPointerInsideReactTreeRef.current = false;
                }
            }["usePointerDownOutside.useEffect.handlePointerDown"];
            const timerId = window.setTimeout({
                "usePointerDownOutside.useEffect.timerId": ()=>{
                    ownerDocument.addEventListener("pointerdown", handlePointerDown);
                }
            }["usePointerDownOutside.useEffect.timerId"], 0);
            return ({
                "usePointerDownOutside.useEffect": ()=>{
                    window.clearTimeout(timerId);
                    ownerDocument.removeEventListener("pointerdown", handlePointerDown);
                    ownerDocument.removeEventListener("click", handleClickRef.current);
                }
            })["usePointerDownOutside.useEffect"];
        }
    }["usePointerDownOutside.useEffect"], [
        ownerDocument,
        handlePointerDownOutside
    ]);
    return {
        // ensures we check React component tree (not just DOM tree)
        onPointerDownCapture: ()=>isPointerInsideReactTreeRef.current = true
    };
}
function useFocusOutside(onFocusOutside, ownerDocument = globalThis?.document) {
    const handleFocusOutside = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onFocusOutside);
    const isFocusInsideReactTreeRef = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useFocusOutside.useEffect": ()=>{
            const handleFocus = {
                "useFocusOutside.useEffect.handleFocus": (event)=>{
                    if (event.target && !isFocusInsideReactTreeRef.current) {
                        const eventDetail = {
                            originalEvent: event
                        };
                        handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
                            discrete: false
                        });
                    }
                }
            }["useFocusOutside.useEffect.handleFocus"];
            ownerDocument.addEventListener("focusin", handleFocus);
            return ({
                "useFocusOutside.useEffect": ()=>ownerDocument.removeEventListener("focusin", handleFocus)
            })["useFocusOutside.useEffect"];
        }
    }["useFocusOutside.useEffect"], [
        ownerDocument,
        handleFocusOutside
    ]);
    return {
        onFocusCapture: ()=>isFocusInsideReactTreeRef.current = true,
        onBlurCapture: ()=>isFocusInsideReactTreeRef.current = false
    };
}
function dispatchUpdate() {
    const event = new CustomEvent(CONTEXT_UPDATE);
    document.dispatchEvent(event);
}
function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
    const target = detail.originalEvent.target;
    const event = new CustomEvent(name, {
        bubbles: false,
        cancelable: true,
        detail
    });
    if (handler) target.addEventListener(name, handler, {
        once: true
    });
    if (discrete) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dispatchDiscreteCustomEvent"])(target, event);
    } else {
        target.dispatchEvent(event);
    }
}
var Root = DismissableLayer;
var Branch = DismissableLayerBranch;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/adkit-docs/node_modules/@radix-ui/react-focus-scope/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FocusScope",
    ()=>FocusScope,
    "Root",
    ()=>Root
]);
// packages/react/focus-scope/src/FocusScope.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var EVENT_OPTIONS = {
    bubbles: false,
    cancelable: true
};
var FOCUS_SCOPE_NAME = "FocusScope";
var FocusScope = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { loop = false, trapped = false, onMountAutoFocus: onMountAutoFocusProp, onUnmountAutoFocus: onUnmountAutoFocusProp, ...scopeProps } = props;
    const [container, setContainer] = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const onMountAutoFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onMountAutoFocusProp);
    const onUnmountAutoFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onUnmountAutoFocusProp);
    const lastFocusedElementRef = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, {
        "FocusScope.useComposedRefs[composedRefs]": (node)=>setContainer(node)
    }["FocusScope.useComposedRefs[composedRefs]"]);
    const focusScope = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]({
        paused: false,
        pause () {
            this.paused = true;
        },
        resume () {
            this.paused = false;
        }
    }).current;
    __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "FocusScope.useEffect": ()=>{
            if (trapped) {
                let handleFocusIn2 = {
                    "FocusScope.useEffect.handleFocusIn2": function(event) {
                        if (focusScope.paused || !container) return;
                        const target = event.target;
                        if (container.contains(target)) {
                            lastFocusedElementRef.current = target;
                        } else {
                            focus(lastFocusedElementRef.current, {
                                select: true
                            });
                        }
                    }
                }["FocusScope.useEffect.handleFocusIn2"], handleFocusOut2 = {
                    "FocusScope.useEffect.handleFocusOut2": function(event) {
                        if (focusScope.paused || !container) return;
                        const relatedTarget = event.relatedTarget;
                        if (relatedTarget === null) return;
                        if (!container.contains(relatedTarget)) {
                            focus(lastFocusedElementRef.current, {
                                select: true
                            });
                        }
                    }
                }["FocusScope.useEffect.handleFocusOut2"], handleMutations2 = {
                    "FocusScope.useEffect.handleMutations2": function(mutations) {
                        const focusedElement = document.activeElement;
                        if (focusedElement !== document.body) return;
                        for (const mutation of mutations){
                            if (mutation.removedNodes.length > 0) focus(container);
                        }
                    }
                }["FocusScope.useEffect.handleMutations2"];
                var handleFocusIn = handleFocusIn2, handleFocusOut = handleFocusOut2, handleMutations = handleMutations2;
                document.addEventListener("focusin", handleFocusIn2);
                document.addEventListener("focusout", handleFocusOut2);
                const mutationObserver = new MutationObserver(handleMutations2);
                if (container) mutationObserver.observe(container, {
                    childList: true,
                    subtree: true
                });
                return ({
                    "FocusScope.useEffect": ()=>{
                        document.removeEventListener("focusin", handleFocusIn2);
                        document.removeEventListener("focusout", handleFocusOut2);
                        mutationObserver.disconnect();
                    }
                })["FocusScope.useEffect"];
            }
        }
    }["FocusScope.useEffect"], [
        trapped,
        container,
        focusScope.paused
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "FocusScope.useEffect": ()=>{
            if (container) {
                focusScopesStack.add(focusScope);
                const previouslyFocusedElement = document.activeElement;
                const hasFocusedCandidate = container.contains(previouslyFocusedElement);
                if (!hasFocusedCandidate) {
                    const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
                    container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
                    container.dispatchEvent(mountEvent);
                    if (!mountEvent.defaultPrevented) {
                        focusFirst(removeLinks(getTabbableCandidates(container)), {
                            select: true
                        });
                        if (document.activeElement === previouslyFocusedElement) {
                            focus(container);
                        }
                    }
                }
                return ({
                    "FocusScope.useEffect": ()=>{
                        container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
                        setTimeout({
                            "FocusScope.useEffect": ()=>{
                                const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
                                container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
                                container.dispatchEvent(unmountEvent);
                                if (!unmountEvent.defaultPrevented) {
                                    focus(previouslyFocusedElement ?? document.body, {
                                        select: true
                                    });
                                }
                                container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
                                focusScopesStack.remove(focusScope);
                            }
                        }["FocusScope.useEffect"], 0);
                    }
                })["FocusScope.useEffect"];
            }
        }
    }["FocusScope.useEffect"], [
        container,
        onMountAutoFocus,
        onUnmountAutoFocus,
        focusScope
    ]);
    const handleKeyDown = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "FocusScope.useCallback[handleKeyDown]": (event)=>{
            if (!loop && !trapped) return;
            if (focusScope.paused) return;
            const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
            const focusedElement = document.activeElement;
            if (isTabKey && focusedElement) {
                const container2 = event.currentTarget;
                const [first, last] = getTabbableEdges(container2);
                const hasTabbableElementsInside = first && last;
                if (!hasTabbableElementsInside) {
                    if (focusedElement === container2) event.preventDefault();
                } else {
                    if (!event.shiftKey && focusedElement === last) {
                        event.preventDefault();
                        if (loop) focus(first, {
                            select: true
                        });
                    } else if (event.shiftKey && focusedElement === first) {
                        event.preventDefault();
                        if (loop) focus(last, {
                            select: true
                        });
                    }
                }
            }
        }
    }["FocusScope.useCallback[handleKeyDown]"], [
        loop,
        trapped,
        focusScope.paused
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
        tabIndex: -1,
        ...scopeProps,
        ref: composedRefs,
        onKeyDown: handleKeyDown
    });
});
FocusScope.displayName = FOCUS_SCOPE_NAME;
function focusFirst(candidates, { select = false } = {}) {
    const previouslyFocusedElement = document.activeElement;
    for (const candidate of candidates){
        focus(candidate, {
            select
        });
        if (document.activeElement !== previouslyFocusedElement) return;
    }
}
function getTabbableEdges(container) {
    const candidates = getTabbableCandidates(container);
    const first = findVisible(candidates, container);
    const last = findVisible(candidates.reverse(), container);
    return [
        first,
        last
    ];
}
function getTabbableCandidates(container) {
    const nodes = [];
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (node)=>{
            const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
            if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
            return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        }
    });
    while(walker.nextNode())nodes.push(walker.currentNode);
    return nodes;
}
function findVisible(elements, container) {
    for (const element of elements){
        if (!isHidden(element, {
            upTo: container
        })) return element;
    }
}
function isHidden(node, { upTo }) {
    if (getComputedStyle(node).visibility === "hidden") return true;
    while(node){
        if (upTo !== void 0 && node === upTo) return false;
        if (getComputedStyle(node).display === "none") return true;
        node = node.parentElement;
    }
    return false;
}
function isSelectableInput(element) {
    return element instanceof HTMLInputElement && "select" in element;
}
function focus(element, { select = false } = {}) {
    if (element && element.focus) {
        const previouslyFocusedElement = document.activeElement;
        element.focus({
            preventScroll: true
        });
        if (element !== previouslyFocusedElement && isSelectableInput(element) && select) element.select();
    }
}
var focusScopesStack = createFocusScopesStack();
function createFocusScopesStack() {
    let stack = [];
    return {
        add (focusScope) {
            const activeFocusScope = stack[0];
            if (focusScope !== activeFocusScope) {
                activeFocusScope?.pause();
            }
            stack = arrayRemove(stack, focusScope);
            stack.unshift(focusScope);
        },
        remove (focusScope) {
            stack = arrayRemove(stack, focusScope);
            stack[0]?.resume();
        }
    };
}
function arrayRemove(array, item) {
    const updatedArray = [
        ...array
    ];
    const index = updatedArray.indexOf(item);
    if (index !== -1) {
        updatedArray.splice(index, 1);
    }
    return updatedArray;
}
function removeLinks(items) {
    return items.filter((item)=>item.tagName !== "A");
}
var Root = FocusScope;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/adkit-docs/node_modules/@radix-ui/react-portal/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Portal",
    ()=>Portal,
    "Root",
    ()=>Root
]);
// packages/react/portal/src/Portal.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
var PORTAL_NAME = "Portal";
var Portal = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { container: containerProp, ...portalProps } = props;
    const [mounted, setMounted] = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "Portal.useLayoutEffect": ()=>setMounted(true)
    }["Portal.useLayoutEffect"], []);
    const container = containerProp || mounted && globalThis?.document?.body;
    return container ? __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createPortal(/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
        ...portalProps,
        ref: forwardedRef
    }), container) : null;
});
Portal.displayName = PORTAL_NAME;
var Root = Portal;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/adkit-docs/node_modules/@radix-ui/react-focus-guards/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FocusGuards",
    ()=>FocusGuards,
    "Root",
    ()=>Root,
    "useFocusGuards",
    ()=>useFocusGuards
]);
// packages/react/focus-guards/src/FocusGuards.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
var count = 0;
function FocusGuards(props) {
    useFocusGuards();
    return props.children;
}
function useFocusGuards() {
    __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useFocusGuards.useEffect": ()=>{
            const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
            document.body.insertAdjacentElement("afterbegin", edgeGuards[0] ?? createFocusGuard());
            document.body.insertAdjacentElement("beforeend", edgeGuards[1] ?? createFocusGuard());
            count++;
            return ({
                "useFocusGuards.useEffect": ()=>{
                    if (count === 1) {
                        document.querySelectorAll("[data-radix-focus-guard]").forEach({
                            "useFocusGuards.useEffect": (node)=>node.remove()
                        }["useFocusGuards.useEffect"]);
                    }
                    count--;
                }
            })["useFocusGuards.useEffect"];
        }
    }["useFocusGuards.useEffect"], []);
}
function createFocusGuard() {
    const element = document.createElement("span");
    element.setAttribute("data-radix-focus-guard", "");
    element.tabIndex = 0;
    element.style.outline = "none";
    element.style.opacity = "0";
    element.style.position = "fixed";
    element.style.pointerEvents = "none";
    return element;
}
var Root = FocusGuards;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/adkit-docs/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ __turbopack_context__.s([
    "__addDisposableResource",
    ()=>__addDisposableResource,
    "__assign",
    ()=>__assign,
    "__asyncDelegator",
    ()=>__asyncDelegator,
    "__asyncGenerator",
    ()=>__asyncGenerator,
    "__asyncValues",
    ()=>__asyncValues,
    "__await",
    ()=>__await,
    "__awaiter",
    ()=>__awaiter,
    "__classPrivateFieldGet",
    ()=>__classPrivateFieldGet,
    "__classPrivateFieldIn",
    ()=>__classPrivateFieldIn,
    "__classPrivateFieldSet",
    ()=>__classPrivateFieldSet,
    "__createBinding",
    ()=>__createBinding,
    "__decorate",
    ()=>__decorate,
    "__disposeResources",
    ()=>__disposeResources,
    "__esDecorate",
    ()=>__esDecorate,
    "__exportStar",
    ()=>__exportStar,
    "__extends",
    ()=>__extends,
    "__generator",
    ()=>__generator,
    "__importDefault",
    ()=>__importDefault,
    "__importStar",
    ()=>__importStar,
    "__makeTemplateObject",
    ()=>__makeTemplateObject,
    "__metadata",
    ()=>__metadata,
    "__param",
    ()=>__param,
    "__propKey",
    ()=>__propKey,
    "__read",
    ()=>__read,
    "__rest",
    ()=>__rest,
    "__rewriteRelativeImportExtension",
    ()=>__rewriteRelativeImportExtension,
    "__runInitializers",
    ()=>__runInitializers,
    "__setFunctionName",
    ()=>__setFunctionName,
    "__spread",
    ()=>__spread,
    "__spreadArray",
    ()=>__spreadArray,
    "__spreadArrays",
    ()=>__spreadArrays,
    "__values",
    ()=>__values,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++){
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
}
;
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    //TURBOPACK unreachable
    ;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    //TURBOPACK unreachable
    ;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
            value: raw
        });
    } else {
        cooked.raw = raw;
    }
    return cooked;
}
;
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var ownKeys = function(o) {
    ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return ownKeys(o);
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop()){
            try {
                if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                if (r.dispose) {
                    var result = r.dispose.call(r.value);
                    if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                        fail(e);
                        return next();
                    });
                } else s |= 1;
            } catch (e) {
                fail(e);
            }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) {
        return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
            return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
        });
    }
    return path;
}
const __TURBOPACK__default__export__ = {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __esDecorate,
    __runInitializers,
    __propKey,
    __setFunctionName,
    __metadata,
    __awaiter,
    __generator,
    __createBinding,
    __exportStar,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
    __addDisposableResource,
    __disposeResources,
    __rewriteRelativeImportExtension
};
}),
"[project]/adkit-docs/node_modules/react-remove-scroll-bar/dist/es2015/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fullWidthClassName",
    ()=>fullWidthClassName,
    "noScrollbarsClassName",
    ()=>noScrollbarsClassName,
    "removedBarSizeVariable",
    ()=>removedBarSizeVariable,
    "zeroRightClassName",
    ()=>zeroRightClassName
]);
var zeroRightClassName = 'right-scroll-bar-position';
var fullWidthClassName = 'width-before-scroll-bar';
var noScrollbarsClassName = 'with-scroll-bars-hidden';
var removedBarSizeVariable = '--removed-body-scroll-bar-size';
}),
"[project]/adkit-docs/node_modules/react-remove-scroll-bar/dist/es2015/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getGapWidth",
    ()=>getGapWidth,
    "zeroGap",
    ()=>zeroGap
]);
var zeroGap = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
};
var parse = function(x) {
    return parseInt(x || '', 10) || 0;
};
var getOffset = function(gapMode) {
    var cs = window.getComputedStyle(document.body);
    var left = cs[gapMode === 'padding' ? 'paddingLeft' : 'marginLeft'];
    var top = cs[gapMode === 'padding' ? 'paddingTop' : 'marginTop'];
    var right = cs[gapMode === 'padding' ? 'paddingRight' : 'marginRight'];
    return [
        parse(left),
        parse(top),
        parse(right)
    ];
};
var getGapWidth = function(gapMode) {
    if (gapMode === void 0) {
        gapMode = 'margin';
    }
    if (typeof window === 'undefined') {
        return zeroGap;
    }
    var offsets = getOffset(gapMode);
    var documentWidth = document.documentElement.clientWidth;
    var windowWidth = window.innerWidth;
    return {
        left: offsets[0],
        top: offsets[1],
        right: offsets[2],
        gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
    };
};
}),
"[project]/adkit-docs/node_modules/react-remove-scroll-bar/dist/es2015/component.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveScrollBar",
    ()=>RemoveScrollBar,
    "lockAttribute",
    ()=>lockAttribute,
    "useLockAttribute",
    ()=>useLockAttribute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/react-style-singleton/dist/es2015/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/react-style-singleton/dist/es2015/component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/react-remove-scroll-bar/dist/es2015/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/react-remove-scroll-bar/dist/es2015/utils.js [app-client] (ecmascript)");
;
;
;
;
var Style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styleSingleton"])();
var lockAttribute = 'data-scroll-locked';
// important tip - once we measure scrollBar width and remove them
// we could not repeat this operation
// thus we are using style-singleton - only the first "yet correct" style will be applied.
var getStyles = function(_a, allowRelative, gapMode, important) {
    var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
    if (gapMode === void 0) {
        gapMode = 'margin';
    }
    return "\n  .".concat(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noScrollbarsClassName"], " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
        allowRelative && "position: relative ".concat(important, ";"),
        gapMode === 'margin' && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
        gapMode === 'padding' && "padding-right: ".concat(gap, "px ").concat(important, ";")
    ].filter(Boolean).join(''), "\n  }\n  \n  .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroRightClassName"], " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fullWidthClassName"], " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroRightClassName"], " .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroRightClassName"], " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fullWidthClassName"], " .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fullWidthClassName"], " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removedBarSizeVariable"], ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function() {
    var counter = parseInt(document.body.getAttribute(lockAttribute) || '0', 10);
    return isFinite(counter) ? counter : 0;
};
var useLockAttribute = function() {
    __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useLockAttribute.useEffect": function() {
            document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
            return ({
                "useLockAttribute.useEffect": function() {
                    var newCounter = getCurrentUseCounter() - 1;
                    if (newCounter <= 0) {
                        document.body.removeAttribute(lockAttribute);
                    } else {
                        document.body.setAttribute(lockAttribute, newCounter.toString());
                    }
                }
            })["useLockAttribute.useEffect"];
        }
    }["useLockAttribute.useEffect"], []);
};
var RemoveScrollBar = function(_a) {
    var noRelative = _a.noRelative, noImportant = _a.noImportant, _b = _a.gapMode, gapMode = _b === void 0 ? 'margin' : _b;
    useLockAttribute();
    /*
     gap will be measured on every component mount
     however it will be used only by the "first" invocation
     due to singleton nature of <Style
     */ var gap = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "RemoveScrollBar.useMemo[gap]": function() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGapWidth"])(gapMode);
        }
    }["RemoveScrollBar.useMemo[gap]"], [
        gapMode
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Style, {
        styles: getStyles(gap, !noRelative, gapMode, !noImportant ? '!important' : '')
    });
};
}),
"[project]/adkit-docs/node_modules/react-remove-scroll-bar/dist/es2015/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/react-remove-scroll-bar/dist/es2015/component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/react-remove-scroll-bar/dist/es2015/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/react-remove-scroll-bar/dist/es2015/utils.js [app-client] (ecmascript)");
;
;
;
;
}),
"[project]/adkit-docs/node_modules/use-callback-ref/dist/es2015/assignRef.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Assigns a value for a given ref, no matter of the ref format
 * @param {RefObject} ref - a callback function or ref object
 * @param value - a new value
 *
 * @see https://github.com/theKashey/use-callback-ref#assignref
 * @example
 * const refObject = useRef();
 * const refFn = (ref) => {....}
 *
 * assignRef(refObject, "refValue");
 * assignRef(refFn, "refValue");
 */ __turbopack_context__.s([
    "assignRef",
    ()=>assignRef
]);
function assignRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    } else if (ref) {
        ref.current = value;
    }
    return ref;
}
}),
"[project]/adkit-docs/node_modules/use-callback-ref/dist/es2015/useRef.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCallbackRef",
    ()=>useCallbackRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function useCallbackRef(initialValue, callback) {
    var ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useCallbackRef.useState": function() {
            return {
                // value
                value: initialValue,
                // last callback
                callback: callback,
                // "memoized" public interface
                facade: {
                    get current () {
                        return ref.value;
                    },
                    set current (value){
                        var last = ref.value;
                        if (last !== value) {
                            ref.value = value;
                            ref.callback(value, last);
                        }
                    }
                }
            };
        }
    }["useCallbackRef.useState"])[0];
    // update callback
    ref.callback = callback;
    return ref.facade;
}
}),
"[project]/adkit-docs/node_modules/use-callback-ref/dist/es2015/useMergeRef.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMergeRefs",
    ()=>useMergeRefs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$assignRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/use-callback-ref/dist/es2015/assignRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$useRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/use-callback-ref/dist/es2015/useRef.js [app-client] (ecmascript)");
;
;
;
var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"];
var currentValues = new WeakMap();
function useMergeRefs(refs, defaultValue) {
    var callbackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$useRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(defaultValue || null, {
        "useMergeRefs.useCallbackRef[callbackRef]": function(newValue) {
            return refs.forEach({
                "useMergeRefs.useCallbackRef[callbackRef]": function(ref) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$assignRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assignRef"])(ref, newValue);
                }
            }["useMergeRefs.useCallbackRef[callbackRef]"]);
        }
    }["useMergeRefs.useCallbackRef[callbackRef]"]);
    // handle refs changes - added or removed
    useIsomorphicLayoutEffect({
        "useMergeRefs.useIsomorphicLayoutEffect": function() {
            var oldValue = currentValues.get(callbackRef);
            if (oldValue) {
                var prevRefs_1 = new Set(oldValue);
                var nextRefs_1 = new Set(refs);
                var current_1 = callbackRef.current;
                prevRefs_1.forEach({
                    "useMergeRefs.useIsomorphicLayoutEffect": function(ref) {
                        if (!nextRefs_1.has(ref)) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$assignRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assignRef"])(ref, null);
                        }
                    }
                }["useMergeRefs.useIsomorphicLayoutEffect"]);
                nextRefs_1.forEach({
                    "useMergeRefs.useIsomorphicLayoutEffect": function(ref) {
                        if (!prevRefs_1.has(ref)) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$assignRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assignRef"])(ref, current_1);
                        }
                    }
                }["useMergeRefs.useIsomorphicLayoutEffect"]);
            }
            currentValues.set(callbackRef, refs);
        }
    }["useMergeRefs.useIsomorphicLayoutEffect"], [
        refs
    ]);
    return callbackRef;
}
}),
"[project]/adkit-docs/node_modules/use-sidecar/dist/es2015/medium.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createMedium",
    ()=>createMedium,
    "createSidecarMedium",
    ()=>createSidecarMedium
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
;
function ItoI(a) {
    return a;
}
function innerCreateMedium(defaults, middleware) {
    if (middleware === void 0) {
        middleware = ItoI;
    }
    var buffer = [];
    var assigned = false;
    var medium = {
        read: function() {
            if (assigned) {
                throw new Error('Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.');
            }
            if (buffer.length) {
                return buffer[buffer.length - 1];
            }
            return defaults;
        },
        useMedium: function(data) {
            var item = middleware(data, assigned);
            buffer.push(item);
            return function() {
                buffer = buffer.filter(function(x) {
                    return x !== item;
                });
            };
        },
        assignSyncMedium: function(cb) {
            assigned = true;
            while(buffer.length){
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
            }
            buffer = {
                push: function(x) {
                    return cb(x);
                },
                filter: function() {
                    return buffer;
                }
            };
        },
        assignMedium: function(cb) {
            assigned = true;
            var pendingQueue = [];
            if (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
                pendingQueue = buffer;
            }
            var executeQueue = function() {
                var cbs = pendingQueue;
                pendingQueue = [];
                cbs.forEach(cb);
            };
            var cycle = function() {
                return Promise.resolve().then(executeQueue);
            };
            cycle();
            buffer = {
                push: function(x) {
                    pendingQueue.push(x);
                    cycle();
                },
                filter: function(filter) {
                    pendingQueue = pendingQueue.filter(filter);
                    return buffer;
                }
            };
        }
    };
    return medium;
}
function createMedium(defaults, middleware) {
    if (middleware === void 0) {
        middleware = ItoI;
    }
    return innerCreateMedium(defaults, middleware);
}
function createSidecarMedium(options) {
    if (options === void 0) {
        options = {};
    }
    var medium = innerCreateMedium(null);
    medium.options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({
        async: true,
        ssr: false
    }, options);
    return medium;
}
}),
"[project]/adkit-docs/node_modules/use-sidecar/dist/es2015/exports.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "exportSidecar",
    ()=>exportSidecar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
var SideCar = function(_a) {
    var sideCar = _a.sideCar, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__rest"])(_a, [
        "sideCar"
    ]);
    if (!sideCar) {
        throw new Error('Sidecar: please provide `sideCar` property to import the right car');
    }
    var Target = sideCar.read();
    if (!Target) {
        throw new Error('Sidecar medium not found');
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Target, (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
    medium.useMedium(exported);
    return SideCar;
}
}),
"[project]/adkit-docs/node_modules/react-remove-scroll/dist/es2015/medium.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "effectCar",
    ()=>effectCar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$use$2d$sidecar$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/use-sidecar/dist/es2015/medium.js [app-client] (ecmascript)");
;
var effectCar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$use$2d$sidecar$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSidecarMedium"])();
}),
"[project]/adkit-docs/node_modules/react-remove-scroll/dist/es2015/UI.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveScroll",
    ()=>RemoveScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/react-remove-scroll-bar/dist/es2015/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$useMergeRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/use-callback-ref/dist/es2015/useMergeRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/react-remove-scroll/dist/es2015/medium.js [app-client] (ecmascript)");
;
;
;
;
;
var nothing = function() {
    return;
};
/**
 * Removes scrollbar from the page and contain the scroll within the Lock
 */ var RemoveScroll = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function(props, parentRef) {
    var ref = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    var _a = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        onScrollCapture: nothing,
        onWheelCapture: nothing,
        onTouchMoveCapture: nothing
    }), callbacks = _a[0], setCallbacks = _a[1];
    var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noRelative = props.noRelative, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? 'div' : _b, gapMode = props.gapMode, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__rest"])(props, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noRelative",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode"
    ]);
    var SideCar = sideCar;
    var containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$useMergeRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergeRefs"])([
        ref,
        parentRef
    ]);
    var containerProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, rest), callbacks);
    return __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, enabled && __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](SideCar, {
        sideCar: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["effectCar"],
        removeScrollBar: removeScrollBar,
        shards: shards,
        noRelative: noRelative,
        noIsolation: noIsolation,
        inert: inert,
        setCallbacks: setCallbacks,
        allowPinchZoom: !!allowPinchZoom,
        lockRef: ref,
        gapMode: gapMode
    }), forwardProps ? __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].only(children), (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, containerProps), {
        ref: containerRef
    })) : __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Container, (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, containerProps, {
        className: className,
        ref: containerRef
    }), children));
});
RemoveScroll.defaultProps = {
    enabled: true,
    removeScrollBar: true,
    inert: false
};
RemoveScroll.classNames = {
    fullWidth: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fullWidthClassName"],
    zeroRight: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroRightClassName"]
};
;
}),
"[project]/adkit-docs/node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "nonPassive",
    ()=>nonPassive
]);
var passiveSupported = false;
if (typeof window !== 'undefined') {
    try {
        var options = Object.defineProperty({}, 'passive', {
            get: function() {
                passiveSupported = true;
                return true;
            }
        });
        // @ts-ignore
        window.addEventListener('test', options, options);
        // @ts-ignore
        window.removeEventListener('test', options, options);
    } catch (err) {
        passiveSupported = false;
    }
}
var nonPassive = passiveSupported ? {
    passive: false
} : false;
}),
"[project]/adkit-docs/node_modules/react-remove-scroll/dist/es2015/handleScroll.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleScroll",
    ()=>handleScroll,
    "locationCouldBeScrolled",
    ()=>locationCouldBeScrolled
]);
var alwaysContainsScroll = function(node) {
    // textarea will always _contain_ scroll inside self. It only can be hidden
    return node.tagName === 'TEXTAREA';
};
var elementCanBeScrolled = function(node, overflow) {
    if (!(node instanceof Element)) {
        return false;
    }
    var styles = window.getComputedStyle(node);
    return(// not-not-scrollable
    styles[overflow] !== 'hidden' && // contains scroll inside self
    !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === 'visible'));
};
var elementCouldBeVScrolled = function(node) {
    return elementCanBeScrolled(node, 'overflowY');
};
var elementCouldBeHScrolled = function(node) {
    return elementCanBeScrolled(node, 'overflowX');
};
var locationCouldBeScrolled = function(axis, node) {
    var ownerDocument = node.ownerDocument;
    var current = node;
    do {
        // Skip over shadow root
        if (typeof ShadowRoot !== 'undefined' && current instanceof ShadowRoot) {
            current = current.host;
        }
        var isScrollable = elementCouldBeScrolled(axis, current);
        if (isScrollable) {
            var _a = getScrollVariables(axis, current), scrollHeight = _a[1], clientHeight = _a[2];
            if (scrollHeight > clientHeight) {
                return true;
            }
        }
        current = current.parentNode;
    }while (current && current !== ownerDocument.body)
    return false;
};
var getVScrollVariables = function(_a) {
    var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
    return [
        scrollTop,
        scrollHeight,
        clientHeight
    ];
};
var getHScrollVariables = function(_a) {
    var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
    return [
        scrollLeft,
        scrollWidth,
        clientWidth
    ];
};
var elementCouldBeScrolled = function(axis, node) {
    return axis === 'v' ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
    return axis === 'v' ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
    /**
     * If the element's direction is rtl (right-to-left), then scrollLeft is 0 when the scrollbar is at its rightmost position,
     * and then increasingly negative as you scroll towards the end of the content.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft
     */ return axis === 'h' && direction === 'rtl' ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
    var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
    var delta = directionFactor * sourceDelta;
    // find scrollable target
    var target = event.target;
    var targetInLock = endTarget.contains(target);
    var shouldCancelScroll = false;
    var isDeltaPositive = delta > 0;
    var availableScroll = 0;
    var availableScrollTop = 0;
    do {
        if (!target) {
            break;
        }
        var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
        var elementScroll = scroll_1 - capacity - directionFactor * position;
        if (position || elementScroll) {
            if (elementCouldBeScrolled(axis, target)) {
                availableScroll += elementScroll;
                availableScrollTop += position;
            }
        }
        var parent_1 = target.parentNode;
        // we will "bubble" from ShadowDom in case we are, or just to the parent in normal case
        // this is the same logic used in focus-lock
        target = parent_1 && parent_1.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? parent_1.host : parent_1;
    }while (// portaled content
    !targetInLock && target !== document.body || targetInLock && (endTarget.contains(target) || endTarget === target))
    // handle epsilon around 0 (non standard zoom levels)
    if (isDeltaPositive && (noOverscroll && Math.abs(availableScroll) < 1 || !noOverscroll && delta > availableScroll)) {
        shouldCancelScroll = true;
    } else if (!isDeltaPositive && (noOverscroll && Math.abs(availableScrollTop) < 1 || !noOverscroll && -delta > availableScrollTop)) {
        shouldCancelScroll = true;
    }
    return shouldCancelScroll;
};
}),
"[project]/adkit-docs/node_modules/react-remove-scroll/dist/es2015/SideEffect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveScrollSideCar",
    ()=>RemoveScrollSideCar,
    "getDeltaXY",
    ()=>getDeltaXY,
    "getTouchXY",
    ()=>getTouchXY
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/react-remove-scroll-bar/dist/es2015/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/react-remove-scroll-bar/dist/es2015/component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/react-style-singleton/dist/es2015/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/react-style-singleton/dist/es2015/component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$handleScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/react-remove-scroll/dist/es2015/handleScroll.js [app-client] (ecmascript)");
;
;
;
;
;
;
var getTouchXY = function(event) {
    return 'changedTouches' in event ? [
        event.changedTouches[0].clientX,
        event.changedTouches[0].clientY
    ] : [
        0,
        0
    ];
};
var getDeltaXY = function(event) {
    return [
        event.deltaX,
        event.deltaY
    ];
};
var extractRef = function(ref) {
    return ref && 'current' in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
    return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
    return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
    var shouldPreventQueue = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]([]);
    var touchStartRef = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]([
        0,
        0
    ]);
    var activeAxis = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]();
    var id = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](idCounter++)[0];
    var Style = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styleSingleton"])[0];
    var lastProps = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](props);
    __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "RemoveScrollSideCar.useEffect": function() {
            lastProps.current = props;
        }
    }["RemoveScrollSideCar.useEffect"], [
        props
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "RemoveScrollSideCar.useEffect": function() {
            if (props.inert) {
                document.body.classList.add("block-interactivity-".concat(id));
                var allow_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArray"])([
                    props.lockRef.current
                ], (props.shards || []).map(extractRef), true).filter(Boolean);
                allow_1.forEach({
                    "RemoveScrollSideCar.useEffect": function(el) {
                        return el.classList.add("allow-interactivity-".concat(id));
                    }
                }["RemoveScrollSideCar.useEffect"]);
                return ({
                    "RemoveScrollSideCar.useEffect": function() {
                        document.body.classList.remove("block-interactivity-".concat(id));
                        allow_1.forEach({
                            "RemoveScrollSideCar.useEffect": function(el) {
                                return el.classList.remove("allow-interactivity-".concat(id));
                            }
                        }["RemoveScrollSideCar.useEffect"]);
                    }
                })["RemoveScrollSideCar.useEffect"];
            }
            return;
        }
    }["RemoveScrollSideCar.useEffect"], [
        props.inert,
        props.lockRef.current,
        props.shards
    ]);
    var shouldCancelEvent = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "RemoveScrollSideCar.useCallback[shouldCancelEvent]": function(event, parent) {
            if ('touches' in event && event.touches.length === 2 || event.type === 'wheel' && event.ctrlKey) {
                return !lastProps.current.allowPinchZoom;
            }
            var touch = getTouchXY(event);
            var touchStart = touchStartRef.current;
            var deltaX = 'deltaX' in event ? event.deltaX : touchStart[0] - touch[0];
            var deltaY = 'deltaY' in event ? event.deltaY : touchStart[1] - touch[1];
            var currentAxis;
            var target = event.target;
            var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? 'h' : 'v';
            // allow horizontal touch move on Range inputs. They will not cause any scroll
            if ('touches' in event && moveDirection === 'h' && target.type === 'range') {
                return false;
            }
            // allow drag selection (iOS); check if selection's anchorNode is the same as target or contains target
            var selection = window.getSelection();
            var anchorNode = selection && selection.anchorNode;
            var isTouchingSelection = anchorNode ? anchorNode === target || anchorNode.contains(target) : false;
            if (isTouchingSelection) {
                return false;
            }
            var canBeScrolledInMainDirection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$handleScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["locationCouldBeScrolled"])(moveDirection, target);
            if (!canBeScrolledInMainDirection) {
                return true;
            }
            if (canBeScrolledInMainDirection) {
                currentAxis = moveDirection;
            } else {
                currentAxis = moveDirection === 'v' ? 'h' : 'v';
                canBeScrolledInMainDirection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$handleScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["locationCouldBeScrolled"])(moveDirection, target);
            // other axis might be not scrollable
            }
            if (!canBeScrolledInMainDirection) {
                return false;
            }
            if (!activeAxis.current && 'changedTouches' in event && (deltaX || deltaY)) {
                activeAxis.current = currentAxis;
            }
            if (!currentAxis) {
                return true;
            }
            var cancelingAxis = activeAxis.current || currentAxis;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$handleScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleScroll"])(cancelingAxis, parent, event, cancelingAxis === 'h' ? deltaX : deltaY, true);
        }
    }["RemoveScrollSideCar.useCallback[shouldCancelEvent]"], []);
    var shouldPrevent = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "RemoveScrollSideCar.useCallback[shouldPrevent]": function(_event) {
            var event = _event;
            if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) {
                // not the last active
                return;
            }
            var delta = 'deltaY' in event ? getDeltaXY(event) : getTouchXY(event);
            var sourceEvent = shouldPreventQueue.current.filter({
                "RemoveScrollSideCar.useCallback[shouldPrevent]": function(e) {
                    return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta);
                }
            }["RemoveScrollSideCar.useCallback[shouldPrevent]"])[0];
            // self event, and should be canceled
            if (sourceEvent && sourceEvent.should) {
                if (event.cancelable) {
                    event.preventDefault();
                }
                return;
            }
            // outside or shard event
            if (!sourceEvent) {
                var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter({
                    "RemoveScrollSideCar.useCallback[shouldPrevent].shardNodes": function(node) {
                        return node.contains(event.target);
                    }
                }["RemoveScrollSideCar.useCallback[shouldPrevent].shardNodes"]);
                var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
                if (shouldStop) {
                    if (event.cancelable) {
                        event.preventDefault();
                    }
                }
            }
        }
    }["RemoveScrollSideCar.useCallback[shouldPrevent]"], []);
    var shouldCancel = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "RemoveScrollSideCar.useCallback[shouldCancel]": function(name, delta, target, should) {
            var event = {
                name: name,
                delta: delta,
                target: target,
                should: should,
                shadowParent: getOutermostShadowParent(target)
            };
            shouldPreventQueue.current.push(event);
            setTimeout({
                "RemoveScrollSideCar.useCallback[shouldCancel]": function() {
                    shouldPreventQueue.current = shouldPreventQueue.current.filter({
                        "RemoveScrollSideCar.useCallback[shouldCancel]": function(e) {
                            return e !== event;
                        }
                    }["RemoveScrollSideCar.useCallback[shouldCancel]"]);
                }
            }["RemoveScrollSideCar.useCallback[shouldCancel]"], 1);
        }
    }["RemoveScrollSideCar.useCallback[shouldCancel]"], []);
    var scrollTouchStart = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "RemoveScrollSideCar.useCallback[scrollTouchStart]": function(event) {
            touchStartRef.current = getTouchXY(event);
            activeAxis.current = undefined;
        }
    }["RemoveScrollSideCar.useCallback[scrollTouchStart]"], []);
    var scrollWheel = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "RemoveScrollSideCar.useCallback[scrollWheel]": function(event) {
            shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
        }
    }["RemoveScrollSideCar.useCallback[scrollWheel]"], []);
    var scrollTouchMove = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "RemoveScrollSideCar.useCallback[scrollTouchMove]": function(event) {
            shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
        }
    }["RemoveScrollSideCar.useCallback[scrollTouchMove]"], []);
    __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "RemoveScrollSideCar.useEffect": function() {
            lockStack.push(Style);
            props.setCallbacks({
                onScrollCapture: scrollWheel,
                onWheelCapture: scrollWheel,
                onTouchMoveCapture: scrollTouchMove
            });
            document.addEventListener('wheel', shouldPrevent, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonPassive"]);
            document.addEventListener('touchmove', shouldPrevent, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonPassive"]);
            document.addEventListener('touchstart', scrollTouchStart, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonPassive"]);
            return ({
                "RemoveScrollSideCar.useEffect": function() {
                    lockStack = lockStack.filter({
                        "RemoveScrollSideCar.useEffect": function(inst) {
                            return inst !== Style;
                        }
                    }["RemoveScrollSideCar.useEffect"]);
                    document.removeEventListener('wheel', shouldPrevent, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonPassive"]);
                    document.removeEventListener('touchmove', shouldPrevent, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonPassive"]);
                    document.removeEventListener('touchstart', scrollTouchStart, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonPassive"]);
                }
            })["RemoveScrollSideCar.useEffect"];
        }
    }["RemoveScrollSideCar.useEffect"], []);
    var removeScrollBar = props.removeScrollBar, inert = props.inert;
    return __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, inert ? __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Style, {
        styles: generateStyle(id)
    }) : null, removeScrollBar ? __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoveScrollBar"], {
        noRelative: props.noRelative,
        gapMode: props.gapMode
    }) : null);
}
function getOutermostShadowParent(node) {
    var shadowParent = null;
    while(node !== null){
        if (node instanceof ShadowRoot) {
            shadowParent = node.host;
            node = node.host;
        }
        node = node.parentNode;
    }
    return shadowParent;
}
}),
"[project]/adkit-docs/node_modules/react-remove-scroll/dist/es2015/sidecar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$use$2d$sidecar$2f$dist$2f$es2015$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/use-sidecar/dist/es2015/exports.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$SideEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/react-remove-scroll/dist/es2015/SideEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/react-remove-scroll/dist/es2015/medium.js [app-client] (ecmascript)");
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$use$2d$sidecar$2f$dist$2f$es2015$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exportSidecar"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["effectCar"], __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$SideEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoveScrollSideCar"]);
}),
"[project]/adkit-docs/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/react-remove-scroll/dist/es2015/UI.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$sidecar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/react-remove-scroll/dist/es2015/sidecar.js [app-client] (ecmascript)");
;
;
;
;
var ReactRemoveScroll = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function(props, ref) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoveScroll"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, props, {
        ref: ref,
        sideCar: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$sidecar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }));
});
ReactRemoveScroll.classNames = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoveScroll"].classNames;
const __TURBOPACK__default__export__ = ReactRemoveScroll;
}),
"[project]/adkit-docs/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-client] (ecmascript) <export default as RemoveScroll>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveScroll",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-client] (ecmascript)");
}),
"[project]/adkit-docs/node_modules/get-nonce/dist/es2015/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNonce",
    ()=>getNonce,
    "setNonce",
    ()=>setNonce
]);
var currentNonce;
var setNonce = function(nonce) {
    currentNonce = nonce;
};
var getNonce = function() {
    if (currentNonce) {
        return currentNonce;
    }
    if (typeof __webpack_nonce__ !== 'undefined') {
        return __webpack_nonce__;
    }
    return undefined;
};
}),
"[project]/adkit-docs/node_modules/react-style-singleton/dist/es2015/singleton.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stylesheetSingleton",
    ()=>stylesheetSingleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$get$2d$nonce$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/get-nonce/dist/es2015/index.js [app-client] (ecmascript)");
;
function makeStyleTag() {
    if (!document) return null;
    var tag = document.createElement('style');
    tag.type = 'text/css';
    var nonce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$get$2d$nonce$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNonce"])();
    if (nonce) {
        tag.setAttribute('nonce', nonce);
    }
    return tag;
}
function injectStyles(tag, css) {
    // @ts-ignore
    if (tag.styleSheet) {
        // @ts-ignore
        tag.styleSheet.cssText = css;
    } else {
        tag.appendChild(document.createTextNode(css));
    }
}
function insertStyleTag(tag) {
    var head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(tag);
}
var stylesheetSingleton = function() {
    var counter = 0;
    var stylesheet = null;
    return {
        add: function(style) {
            if (counter == 0) {
                if (stylesheet = makeStyleTag()) {
                    injectStyles(stylesheet, style);
                    insertStyleTag(stylesheet);
                }
            }
            counter++;
        },
        remove: function() {
            counter--;
            if (!counter && stylesheet) {
                stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
                stylesheet = null;
            }
        }
    };
};
}),
"[project]/adkit-docs/node_modules/react-style-singleton/dist/es2015/hook.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "styleHookSingleton",
    ()=>styleHookSingleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$singleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/react-style-singleton/dist/es2015/singleton.js [app-client] (ecmascript)");
;
;
var styleHookSingleton = function() {
    var sheet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$singleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stylesheetSingleton"])();
    return function(styles, isDynamic) {
        __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
            "styleHookSingleton.useEffect": function() {
                sheet.add(styles);
                return ({
                    "styleHookSingleton.useEffect": function() {
                        sheet.remove();
                    }
                })["styleHookSingleton.useEffect"];
            }
        }["styleHookSingleton.useEffect"], [
            styles && isDynamic
        ]);
    };
};
}),
"[project]/adkit-docs/node_modules/react-style-singleton/dist/es2015/component.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "styleSingleton",
    ()=>styleSingleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$hook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/react-style-singleton/dist/es2015/hook.js [app-client] (ecmascript)");
;
var styleSingleton = function() {
    var useStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$hook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styleHookSingleton"])();
    var Sheet = function(_a) {
        var styles = _a.styles, dynamic = _a.dynamic;
        useStyle(styles, dynamic);
        return null;
    };
    return Sheet;
};
}),
"[project]/adkit-docs/node_modules/react-style-singleton/dist/es2015/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/react-style-singleton/dist/es2015/component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$singleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/react-style-singleton/dist/es2015/singleton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$hook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/react-style-singleton/dist/es2015/hook.js [app-client] (ecmascript)");
;
;
;
}),
"[project]/adkit-docs/node_modules/aria-hidden/dist/es2015/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hideOthers",
    ()=>hideOthers,
    "inertOthers",
    ()=>inertOthers,
    "supportsInert",
    ()=>supportsInert,
    "suppressOthers",
    ()=>suppressOthers
]);
var getDefaultParent = function(originalTarget) {
    if (typeof document === 'undefined') {
        return null;
    }
    var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
    return sampleTarget.ownerDocument.body;
};
var counterMap = new WeakMap();
var uncontrolledNodes = new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function(node) {
    return node && (node.host || unwrapHost(node.parentNode));
};
var correctTargets = function(parent, targets) {
    return targets.map(function(target) {
        if (parent.contains(target)) {
            return target;
        }
        var correctedTarget = unwrapHost(target);
        if (correctedTarget && parent.contains(correctedTarget)) {
            return correctedTarget;
        }
        console.error('aria-hidden', target, 'in not contained inside', parent, '. Doing nothing');
        return null;
    }).filter(function(x) {
        return Boolean(x);
    });
};
/**
 * Marks everything except given node(or nodes) as aria-hidden
 * @param {Element | Element[]} originalTarget - elements to keep on the page
 * @param [parentNode] - top element, defaults to document.body
 * @param {String} [markerName] - a special attribute to mark every node
 * @param {String} [controlAttribute] - html Attribute to control
 * @return {Undo} undo command
 */ var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
    var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [
        originalTarget
    ]);
    if (!markerMap[markerName]) {
        markerMap[markerName] = new WeakMap();
    }
    var markerCounter = markerMap[markerName];
    var hiddenNodes = [];
    var elementsToKeep = new Set();
    var elementsToStop = new Set(targets);
    var keep = function(el) {
        if (!el || elementsToKeep.has(el)) {
            return;
        }
        elementsToKeep.add(el);
        keep(el.parentNode);
    };
    targets.forEach(keep);
    var deep = function(parent) {
        if (!parent || elementsToStop.has(parent)) {
            return;
        }
        Array.prototype.forEach.call(parent.children, function(node) {
            if (elementsToKeep.has(node)) {
                deep(node);
            } else {
                try {
                    var attr = node.getAttribute(controlAttribute);
                    var alreadyHidden = attr !== null && attr !== 'false';
                    var counterValue = (counterMap.get(node) || 0) + 1;
                    var markerValue = (markerCounter.get(node) || 0) + 1;
                    counterMap.set(node, counterValue);
                    markerCounter.set(node, markerValue);
                    hiddenNodes.push(node);
                    if (counterValue === 1 && alreadyHidden) {
                        uncontrolledNodes.set(node, true);
                    }
                    if (markerValue === 1) {
                        node.setAttribute(markerName, 'true');
                    }
                    if (!alreadyHidden) {
                        node.setAttribute(controlAttribute, 'true');
                    }
                } catch (e) {
                    console.error('aria-hidden: cannot operate on ', node, e);
                }
            }
        });
    };
    deep(parentNode);
    elementsToKeep.clear();
    lockCount++;
    return function() {
        hiddenNodes.forEach(function(node) {
            var counterValue = counterMap.get(node) - 1;
            var markerValue = markerCounter.get(node) - 1;
            counterMap.set(node, counterValue);
            markerCounter.set(node, markerValue);
            if (!counterValue) {
                if (!uncontrolledNodes.has(node)) {
                    node.removeAttribute(controlAttribute);
                }
                uncontrolledNodes.delete(node);
            }
            if (!markerValue) {
                node.removeAttribute(markerName);
            }
        });
        lockCount--;
        if (!lockCount) {
            // clear
            counterMap = new WeakMap();
            counterMap = new WeakMap();
            uncontrolledNodes = new WeakMap();
            markerMap = {};
        }
    };
};
var hideOthers = function(originalTarget, parentNode, markerName) {
    if (markerName === void 0) {
        markerName = 'data-aria-hidden';
    }
    var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [
        originalTarget
    ]);
    var activeParentNode = parentNode || getDefaultParent(originalTarget);
    if (!activeParentNode) {
        return function() {
            return null;
        };
    }
    // we should not hide aria-live elements - https://github.com/theKashey/aria-hidden/issues/10
    // and script elements, as they have no impact on accessibility.
    targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll('[aria-live], script')));
    return applyAttributeToOthers(targets, activeParentNode, markerName, 'aria-hidden');
};
var inertOthers = function(originalTarget, parentNode, markerName) {
    if (markerName === void 0) {
        markerName = 'data-inert-ed';
    }
    var activeParentNode = parentNode || getDefaultParent(originalTarget);
    if (!activeParentNode) {
        return function() {
            return null;
        };
    }
    return applyAttributeToOthers(originalTarget, activeParentNode, markerName, 'inert');
};
var supportsInert = function() {
    return typeof HTMLElement !== 'undefined' && HTMLElement.prototype.hasOwnProperty('inert');
};
var suppressOthers = function(originalTarget, parentNode, markerName) {
    if (markerName === void 0) {
        markerName = 'data-suppressed';
    }
    return (supportsInert() ? inertOthers : hideOthers)(originalTarget, parentNode, markerName);
};
}),
"[project]/adkit-docs/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Close",
    ()=>Close,
    "Content",
    ()=>Content,
    "Description",
    ()=>Description,
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger,
    "Overlay",
    ()=>Overlay,
    "Portal",
    ()=>Portal,
    "Root",
    ()=>Root,
    "Title",
    ()=>Title,
    "Trigger",
    ()=>Trigger,
    "WarningProvider",
    ()=>WarningProvider,
    "createDialogScope",
    ()=>createDialogScope
]);
// packages/react/dialog/src/Dialog.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/@radix-ui/primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/@radix-ui/react-context/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/@radix-ui/react-id/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dismissable$2d$layer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$scope$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/@radix-ui/react-focus-scope/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$portal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/@radix-ui/react-portal/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/@radix-ui/react-presence/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$guards$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/@radix-ui/react-focus-guards/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RemoveScroll$3e$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-client] (ecmascript) <export default as RemoveScroll>");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$aria$2d$hidden$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/aria-hidden/dist/es2015/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var DIALOG_NAME = "Dialog";
var [createDialogContext, createDialogScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContextScope"])(DIALOG_NAME);
var [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
var Dialog = (props)=>{
    const { __scopeDialog, children, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
    const triggerRef = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const contentRef = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const [open = false, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControllableState"])({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DialogProvider, {
        scope: __scopeDialog,
        triggerRef,
        contentRef,
        contentId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(),
        titleId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(),
        descriptionId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(),
        open,
        onOpenChange: setOpen,
        onOpenToggle: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
            "Dialog.useCallback": ()=>setOpen({
                    "Dialog.useCallback": (prevOpen)=>!prevOpen
                }["Dialog.useCallback"])
        }["Dialog.useCallback"], [
            setOpen
        ]),
        modal,
        children
    });
};
Dialog.displayName = DIALOG_NAME;
var TRIGGER_NAME = "DialogTrigger";
var DialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDialog, ...triggerProps } = props;
    const context = useDialogContext(TRIGGER_NAME, __scopeDialog);
    const composedTriggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, context.triggerRef);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.contentId,
        "data-state": getState(context.open),
        ...triggerProps,
        ref: composedTriggerRef,
        onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onClick, context.onOpenToggle)
    });
});
DialogTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "DialogPortal";
var [PortalProvider, usePortalContext] = createDialogContext(PORTAL_NAME, {
    forceMount: void 0
});
var DialogPortal = (props)=>{
    const { __scopeDialog, forceMount, children, container } = props;
    const context = useDialogContext(PORTAL_NAME, __scopeDialog);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PortalProvider, {
        scope: __scopeDialog,
        forceMount,
        children: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].map(children, (child)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Presence"], {
                present: forceMount || context.open,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$portal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
                    asChild: true,
                    container,
                    children: child
                })
            }))
    });
};
DialogPortal.displayName = PORTAL_NAME;
var OVERLAY_NAME = "DialogOverlay";
var DialogOverlay = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const portalContext = usePortalContext(OVERLAY_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, props.__scopeDialog);
    return context.modal ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Presence"], {
        present: forceMount || context.open,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DialogOverlayImpl, {
            ...overlayProps,
            ref: forwardedRef
        })
    }) : null;
});
DialogOverlay.displayName = OVERLAY_NAME;
var DialogOverlayImpl = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDialog, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, __scopeDialog);
    return(// Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RemoveScroll$3e$__["RemoveScroll"], {
        as: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"],
        allowPinchZoom: true,
        shards: [
            context.contentRef
        ],
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
            "data-state": getState(context.open),
            ...overlayProps,
            ref: forwardedRef,
            style: {
                pointerEvents: "auto",
                ...overlayProps.style
            }
        })
    }));
});
var CONTENT_NAME = "DialogContent";
var DialogContent = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Presence"], {
        present: forceMount || context.open,
        children: context.modal ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DialogContentModal, {
            ...contentProps,
            ref: forwardedRef
        }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DialogContentNonModal, {
            ...contentProps,
            ref: forwardedRef
        })
    });
});
DialogContent.displayName = CONTENT_NAME;
var DialogContentModal = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    const contentRef = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, context.contentRef, contentRef);
    __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "DialogContentModal.useEffect": ()=>{
            const content = contentRef.current;
            if (content) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$aria$2d$hidden$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hideOthers"])(content);
        }
    }["DialogContentModal.useEffect"], []);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DialogContentImpl, {
        ...props,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onCloseAutoFocus, (event)=>{
            event.preventDefault();
            context.triggerRef.current?.focus();
        }),
        onPointerDownOutside: (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerDownOutside, (event)=>{
            const originalEvent = event.detail.originalEvent;
            const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
            const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
            if (isRightClick) event.preventDefault();
        }),
        onFocusOutside: (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onFocusOutside, (event)=>event.preventDefault())
    });
});
var DialogContentNonModal = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    const hasInteractedOutsideRef = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    const hasPointerDownOutsideRef = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DialogContentImpl, {
        ...props,
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event)=>{
            props.onCloseAutoFocus?.(event);
            if (!event.defaultPrevented) {
                if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
                event.preventDefault();
            }
            hasInteractedOutsideRef.current = false;
            hasPointerDownOutsideRef.current = false;
        },
        onInteractOutside: (event)=>{
            props.onInteractOutside?.(event);
            if (!event.defaultPrevented) {
                hasInteractedOutsideRef.current = true;
                if (event.detail.originalEvent.type === "pointerdown") {
                    hasPointerDownOutsideRef.current = true;
                }
            }
            const target = event.target;
            const targetIsTrigger = context.triggerRef.current?.contains(target);
            if (targetIsTrigger) event.preventDefault();
            if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) {
                event.preventDefault();
            }
        }
    });
});
var DialogContentImpl = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME, __scopeDialog);
    const contentRef = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, contentRef);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$guards$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusGuards"])();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$scope$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FocusScope"], {
                asChild: true,
                loop: true,
                trapped: trapFocus,
                onMountAutoFocus: onOpenAutoFocus,
                onUnmountAutoFocus: onCloseAutoFocus,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dismissable$2d$layer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DismissableLayer"], {
                    role: "dialog",
                    id: context.contentId,
                    "aria-describedby": context.descriptionId,
                    "aria-labelledby": context.titleId,
                    "data-state": getState(context.open),
                    ...contentProps,
                    ref: composedRefs,
                    onDismiss: ()=>context.onOpenChange(false)
                })
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TitleWarning, {
                        titleId: context.titleId
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DescriptionWarning, {
                        contentRef,
                        descriptionId: context.descriptionId
                    })
                ]
            })
        ]
    });
});
var TITLE_NAME = "DialogTitle";
var DialogTitle = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDialog, ...titleProps } = props;
    const context = useDialogContext(TITLE_NAME, __scopeDialog);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].h2, {
        id: context.titleId,
        ...titleProps,
        ref: forwardedRef
    });
});
DialogTitle.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "DialogDescription";
var DialogDescription = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDialog, ...descriptionProps } = props;
    const context = useDialogContext(DESCRIPTION_NAME, __scopeDialog);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].p, {
        id: context.descriptionId,
        ...descriptionProps,
        ref: forwardedRef
    });
});
DialogDescription.displayName = DESCRIPTION_NAME;
var CLOSE_NAME = "DialogClose";
var DialogClose = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDialog, ...closeProps } = props;
    const context = useDialogContext(CLOSE_NAME, __scopeDialog);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].button, {
        type: "button",
        ...closeProps,
        ref: forwardedRef,
        onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onClick, ()=>context.onOpenChange(false))
    });
});
DialogClose.displayName = CLOSE_NAME;
function getState(open) {
    return open ? "open" : "closed";
}
var TITLE_WARNING_NAME = "DialogTitleWarning";
var [WarningProvider, useWarningContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(TITLE_WARNING_NAME, {
    contentName: CONTENT_NAME,
    titleName: TITLE_NAME,
    docsSlug: "dialog"
});
var TitleWarning = ({ titleId })=>{
    const titleWarningContext = useWarningContext(TITLE_WARNING_NAME);
    const MESSAGE = `\`${titleWarningContext.contentName}\` requires a \`${titleWarningContext.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${titleWarningContext.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${titleWarningContext.docsSlug}`;
    __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "TitleWarning.useEffect": ()=>{
            if (titleId) {
                const hasTitle = document.getElementById(titleId);
                if (!hasTitle) console.error(MESSAGE);
            }
        }
    }["TitleWarning.useEffect"], [
        MESSAGE,
        titleId
    ]);
    return null;
};
var DESCRIPTION_WARNING_NAME = "DialogDescriptionWarning";
var DescriptionWarning = ({ contentRef, descriptionId })=>{
    const descriptionWarningContext = useWarningContext(DESCRIPTION_WARNING_NAME);
    const MESSAGE = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${descriptionWarningContext.contentName}}.`;
    __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "DescriptionWarning.useEffect": ()=>{
            const describedById = contentRef.current?.getAttribute("aria-describedby");
            if (descriptionId && describedById) {
                const hasDescription = document.getElementById(descriptionId);
                if (!hasDescription) console.warn(MESSAGE);
            }
        }
    }["DescriptionWarning.useEffect"], [
        MESSAGE,
        contentRef,
        descriptionId
    ]);
    return null;
};
var Root = Dialog;
var Trigger = DialogTrigger;
var Portal = DialogPortal;
var Overlay = DialogOverlay;
var Content = DialogContent;
var Title = DialogTitle;
var Description = DialogDescription;
var Close = DialogClose;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/adkit-docs/node_modules/cmdk/dist/chunk-NZJY6EH4.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>W
]);
var U = 1, Y = .9, H = .8, J = .17, p = .1, u = .999, $ = .9999;
var k = .99, m = /[\\\/_+.#"@\[\(\{&]/, B = /[\\\/_+.#"@\[\(\{&]/g, K = /[\s-]/, X = /[\s-]/g;
function G(_, C, h, P, A, f, O) {
    if (f === C.length) return A === _.length ? U : k;
    var T = `${A},${f}`;
    if (O[T] !== void 0) return O[T];
    for(var L = P.charAt(f), c = h.indexOf(L, A), S = 0, E, N, R, M; c >= 0;)E = G(_, C, h, P, c + 1, f + 1, O), E > S && (c === A ? E *= U : m.test(_.charAt(c - 1)) ? (E *= H, R = _.slice(A, c - 1).match(B), R && A > 0 && (E *= Math.pow(u, R.length))) : K.test(_.charAt(c - 1)) ? (E *= Y, M = _.slice(A, c - 1).match(X), M && A > 0 && (E *= Math.pow(u, M.length))) : (E *= J, A > 0 && (E *= Math.pow(u, c - A))), _.charAt(c) !== C.charAt(f) && (E *= $)), (E < p && h.charAt(c - 1) === P.charAt(f + 1) || P.charAt(f + 1) === P.charAt(f) && h.charAt(c - 1) !== P.charAt(f)) && (N = G(_, C, h, P, c + 1, f + 2, O), N * p > E && (E = N * p)), E > S && (S = E), c = h.indexOf(L, c + 1);
    return O[T] = S, S;
}
function D(_) {
    return _.toLowerCase().replace(X, " ");
}
function W(_, C, h) {
    return _ = h && h.length > 0 ? `${_ + " " + h.join(" ")}` : _, G(_, C, D(_), D(C), 0, 0, {});
}
;
}),
"[project]/adkit-docs/node_modules/cmdk/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Command",
    ()=>Ve,
    "CommandDialog",
    ()=>Pe,
    "CommandEmpty",
    ()=>we,
    "CommandGroup",
    ()=>Se,
    "CommandInput",
    ()=>Ce,
    "CommandItem",
    ()=>ye,
    "CommandList",
    ()=>xe,
    "CommandLoading",
    ()=>De,
    "CommandRoot",
    ()=>me,
    "CommandSeparator",
    ()=>Ee,
    "defaultFilter",
    ()=>he,
    "useCommandState",
    ()=>T
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$cmdk$2f$dist$2f$chunk$2d$NZJY6EH4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/cmdk/dist/chunk-NZJY6EH4.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/@radix-ui/react-id/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/use-sync-external-store/shim/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
var N = '[cmdk-group=""]', Q = '[cmdk-group-items=""]', be = '[cmdk-group-heading=""]', Z = '[cmdk-item=""]', le = `${Z}:not([aria-disabled="true"])`, Y = "cmdk-item-select", I = "data-value", he = (r, o, t)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$cmdk$2f$dist$2f$chunk$2d$NZJY6EH4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(r, o, t), ue = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](void 0), K = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](ue), de = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](void 0), ee = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](de), fe = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](void 0);
var me = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((r, o)=>{
    let t = k(()=>{
        var e, s;
        return {
            search: "",
            value: (s = (e = r.value) != null ? e : r.defaultValue) != null ? s : "",
            filtered: {
                count: 0,
                items: new Map,
                groups: new Set
            }
        };
    }), u = k(()=>new Set), c = k(()=>new Map), d = k(()=>new Map), f = k(()=>new Set), p = pe(r), { label: v, children: b, value: l, onValueChange: y, filter: E, shouldFilter: C, loop: H, disablePointerSelection: ge = !1, vimBindings: $ = !0, ...O } = r, te = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), B = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), F = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), x = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null), R = Te();
    M(()=>{
        if (l !== void 0) {
            let e = l.trim();
            t.current.value = e, h.emit();
        }
    }, [
        l
    ]), M(()=>{
        R(6, re);
    }, []);
    let h = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "me.useMemo[h]": ()=>({
                subscribe: ({
                    "me.useMemo[h]": (e)=>(f.current.add(e), ({
                            "me.useMemo[h]": ()=>f.current.delete(e)
                        })["me.useMemo[h]"])
                })["me.useMemo[h]"],
                snapshot: ({
                    "me.useMemo[h]": ()=>t.current
                })["me.useMemo[h]"],
                setState: ({
                    "me.useMemo[h]": (e, s, i)=>{
                        var a, m, g;
                        if (!Object.is(t.current[e], s)) {
                            if (t.current[e] = s, e === "search") W(), U(), R(1, z);
                            else if (e === "value" && (i || R(5, re), ((a = p.current) == null ? void 0 : a.value) !== void 0)) {
                                let S = s != null ? s : "";
                                (g = (m = p.current).onValueChange) == null || g.call(m, S);
                                return;
                            }
                            h.emit();
                        }
                    }
                })["me.useMemo[h]"],
                emit: ({
                    "me.useMemo[h]": ()=>{
                        f.current.forEach({
                            "me.useMemo[h]": (e)=>e()
                        }["me.useMemo[h]"]);
                    }
                })["me.useMemo[h]"]
            })
    }["me.useMemo[h]"], []), q = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "me.useMemo[q]": ()=>({
                value: ({
                    "me.useMemo[q]": (e, s, i)=>{
                        var a;
                        s !== ((a = d.current.get(e)) == null ? void 0 : a.value) && (d.current.set(e, {
                            value: s,
                            keywords: i
                        }), t.current.filtered.items.set(e, ne(s, i)), R(2, {
                            "me.useMemo[q]": ()=>{
                                U(), h.emit();
                            }
                        }["me.useMemo[q]"]));
                    }
                })["me.useMemo[q]"],
                item: ({
                    "me.useMemo[q]": (e, s)=>(u.current.add(e), s && (c.current.has(s) ? c.current.get(s).add(e) : c.current.set(s, new Set([
                            e
                        ]))), R(3, {
                            "me.useMemo[q]": ()=>{
                                W(), U(), t.current.value || z(), h.emit();
                            }
                        }["me.useMemo[q]"]), ({
                            "me.useMemo[q]": ()=>{
                                d.current.delete(e), u.current.delete(e), t.current.filtered.items.delete(e);
                                let i = A();
                                R(4, {
                                    "me.useMemo[q]": ()=>{
                                        W(), (i == null ? void 0 : i.getAttribute("id")) === e && z(), h.emit();
                                    }
                                }["me.useMemo[q]"]);
                            }
                        })["me.useMemo[q]"])
                })["me.useMemo[q]"],
                group: ({
                    "me.useMemo[q]": (e)=>(c.current.has(e) || c.current.set(e, new Set), ({
                            "me.useMemo[q]": ()=>{
                                d.current.delete(e), c.current.delete(e);
                            }
                        })["me.useMemo[q]"])
                })["me.useMemo[q]"],
                filter: ({
                    "me.useMemo[q]": ()=>p.current.shouldFilter
                })["me.useMemo[q]"],
                label: v || r["aria-label"],
                getDisablePointerSelection: ({
                    "me.useMemo[q]": ()=>p.current.disablePointerSelection
                })["me.useMemo[q]"],
                listId: te,
                inputId: F,
                labelId: B,
                listInnerRef: x
            })
    }["me.useMemo[q]"], []);
    function ne(e, s) {
        var a, m;
        let i = (m = (a = p.current) == null ? void 0 : a.filter) != null ? m : he;
        return e ? i(e, t.current.search, s) : 0;
    }
    function U() {
        if (!t.current.search || p.current.shouldFilter === !1) return;
        let e = t.current.filtered.items, s = [];
        t.current.filtered.groups.forEach((a)=>{
            let m = c.current.get(a), g = 0;
            m.forEach((S)=>{
                let P = e.get(S);
                g = Math.max(P, g);
            }), s.push([
                a,
                g
            ]);
        });
        let i = x.current;
        _().sort((a, m)=>{
            var P, V;
            let g = a.getAttribute("id"), S = m.getAttribute("id");
            return ((P = e.get(S)) != null ? P : 0) - ((V = e.get(g)) != null ? V : 0);
        }).forEach((a)=>{
            let m = a.closest(Q);
            m ? m.appendChild(a.parentElement === m ? a : a.closest(`${Q} > *`)) : i.appendChild(a.parentElement === i ? a : a.closest(`${Q} > *`));
        }), s.sort((a, m)=>m[1] - a[1]).forEach((a)=>{
            var g;
            let m = (g = x.current) == null ? void 0 : g.querySelector(`${N}[${I}="${encodeURIComponent(a[0])}"]`);
            m == null || m.parentElement.appendChild(m);
        });
    }
    function z() {
        let e = _().find((i)=>i.getAttribute("aria-disabled") !== "true"), s = e == null ? void 0 : e.getAttribute(I);
        h.setState("value", s || void 0);
    }
    function W() {
        var s, i, a, m;
        if (!t.current.search || p.current.shouldFilter === !1) {
            t.current.filtered.count = u.current.size;
            return;
        }
        t.current.filtered.groups = new Set;
        let e = 0;
        for (let g of u.current){
            let S = (i = (s = d.current.get(g)) == null ? void 0 : s.value) != null ? i : "", P = (m = (a = d.current.get(g)) == null ? void 0 : a.keywords) != null ? m : [], V = ne(S, P);
            t.current.filtered.items.set(g, V), V > 0 && e++;
        }
        for (let [g, S] of c.current)for (let P of S)if (t.current.filtered.items.get(P) > 0) {
            t.current.filtered.groups.add(g);
            break;
        }
        t.current.filtered.count = e;
    }
    function re() {
        var s, i, a;
        let e = A();
        e && (((s = e.parentElement) == null ? void 0 : s.firstChild) === e && ((a = (i = e.closest(N)) == null ? void 0 : i.querySelector(be)) == null || a.scrollIntoView({
            block: "nearest"
        })), e.scrollIntoView({
            block: "nearest"
        }));
    }
    function A() {
        var e;
        return (e = x.current) == null ? void 0 : e.querySelector(`${Z}[aria-selected="true"]`);
    }
    function _() {
        var e;
        return Array.from(((e = x.current) == null ? void 0 : e.querySelectorAll(le)) || []);
    }
    function J(e) {
        let i = _()[e];
        i && h.setState("value", i.getAttribute(I));
    }
    function X(e) {
        var g;
        let s = A(), i = _(), a = i.findIndex((S)=>S === s), m = i[a + e];
        (g = p.current) != null && g.loop && (m = a + e < 0 ? i[i.length - 1] : a + e === i.length ? i[0] : i[a + e]), m && h.setState("value", m.getAttribute(I));
    }
    function oe(e) {
        let s = A(), i = s == null ? void 0 : s.closest(N), a;
        for(; i && !a;)i = e > 0 ? Ie(i, N) : Me(i, N), a = i == null ? void 0 : i.querySelector(le);
        a ? h.setState("value", a.getAttribute(I)) : X(e);
    }
    let ie = ()=>J(_().length - 1), ae = (e)=>{
        e.preventDefault(), e.metaKey ? ie() : e.altKey ? oe(1) : X(1);
    }, se = (e)=>{
        e.preventDefault(), e.metaKey ? J(0) : e.altKey ? oe(-1) : X(-1);
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
        ref: o,
        tabIndex: -1,
        ...O,
        "cmdk-root": "",
        onKeyDown: (e)=>{
            var s;
            if ((s = O.onKeyDown) == null || s.call(O, e), !e.defaultPrevented) switch(e.key){
                case "n":
                case "j":
                    {
                        $ && e.ctrlKey && ae(e);
                        break;
                    }
                case "ArrowDown":
                    {
                        ae(e);
                        break;
                    }
                case "p":
                case "k":
                    {
                        $ && e.ctrlKey && se(e);
                        break;
                    }
                case "ArrowUp":
                    {
                        se(e);
                        break;
                    }
                case "Home":
                    {
                        e.preventDefault(), J(0);
                        break;
                    }
                case "End":
                    {
                        e.preventDefault(), ie();
                        break;
                    }
                case "Enter":
                    if (!e.nativeEvent.isComposing && e.keyCode !== 229) {
                        e.preventDefault();
                        let i = A();
                        if (i) {
                            let a = new Event(Y);
                            i.dispatchEvent(a);
                        }
                    }
            }
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("label", {
        "cmdk-label": "",
        htmlFor: q.inputId,
        id: q.labelId,
        style: Le
    }, v), j(r, (e)=>__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](de.Provider, {
            value: h
        }, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](ue.Provider, {
            value: q
        }, e))));
}), ye = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((r, o)=>{
    var F, x;
    let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), u = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null), c = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](fe), d = K(), f = pe(r), p = (x = (F = f.current) == null ? void 0 : F.forceMount) != null ? x : c == null ? void 0 : c.forceMount;
    M(()=>{
        if (!p) return d.item(t, c == null ? void 0 : c.id);
    }, [
        p
    ]);
    let v = ve(t, u, [
        r.value,
        r.children,
        u
    ], r.keywords), b = ee(), l = T((R)=>R.value && R.value === v.current), y = T((R)=>p || d.filter() === !1 ? !0 : R.search ? R.filtered.items.get(t) > 0 : !0);
    __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ye.useEffect": ()=>{
            let R = u.current;
            if (!(!R || r.disabled)) return R.addEventListener(Y, E), ({
                "ye.useEffect": ()=>R.removeEventListener(Y, E)
            })["ye.useEffect"];
        }
    }["ye.useEffect"], [
        y,
        r.onSelect,
        r.disabled
    ]);
    function E() {
        var R, h;
        C(), (h = (R = f.current).onSelect) == null || h.call(R, v.current);
    }
    function C() {
        b.setState("value", v.current, !0);
    }
    if (!y) return null;
    let { disabled: H, value: ge, onSelect: $, forceMount: O, keywords: te, ...B } = r;
    return __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
        ref: G([
            u,
            o
        ]),
        ...B,
        id: t,
        "cmdk-item": "",
        role: "option",
        "aria-disabled": !!H,
        "aria-selected": !!l,
        "data-disabled": !!H,
        "data-selected": !!l,
        onPointerMove: H || d.getDisablePointerSelection() ? void 0 : C,
        onClick: H ? void 0 : E
    }, r.children);
}), Se = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((r, o)=>{
    let { heading: t, children: u, forceMount: c, ...d } = r, f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), p = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null), v = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null), b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), l = K(), y = T((C)=>c || l.filter() === !1 ? !0 : C.search ? C.filtered.groups.has(f) : !0);
    M(()=>l.group(f), []), ve(f, p, [
        r.value,
        r.heading,
        v
    ]);
    let E = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Se.useMemo[E]": ()=>({
                id: f,
                forceMount: c
            })
    }["Se.useMemo[E]"], [
        c
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
        ref: G([
            p,
            o
        ]),
        ...d,
        "cmdk-group": "",
        role: "presentation",
        hidden: y ? void 0 : !0
    }, t && __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        ref: v,
        "cmdk-group-heading": "",
        "aria-hidden": !0,
        id: b
    }, t), j(r, (C)=>__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            "cmdk-group-items": "",
            role: "group",
            "aria-labelledby": t ? b : void 0
        }, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](fe.Provider, {
            value: E
        }, C))));
}), Ee = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((r, o)=>{
    let { alwaysRender: t, ...u } = r, c = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null), d = T((f)=>!f.search);
    return !t && !d ? null : __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
        ref: G([
            c,
            o
        ]),
        ...u,
        "cmdk-separator": "",
        role: "separator"
    });
}), Ce = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((r, o)=>{
    let { onValueChange: t, ...u } = r, c = r.value != null, d = ee(), f = T((l)=>l.search), p = T((l)=>l.value), v = K(), b = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Ce.useMemo[b]": ()=>{
            var y;
            let l = (y = v.listInnerRef.current) == null ? void 0 : y.querySelector(`${Z}[${I}="${encodeURIComponent(p)}"]`);
            return l == null ? void 0 : l.getAttribute("id");
        }
    }["Ce.useMemo[b]"], []);
    return __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "Ce.useEffect": ()=>{
            r.value != null && d.setState("search", r.value);
        }
    }["Ce.useEffect"], [
        r.value
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].input, {
        ref: o,
        ...u,
        "cmdk-input": "",
        autoComplete: "off",
        autoCorrect: "off",
        spellCheck: !1,
        "aria-autocomplete": "list",
        role: "combobox",
        "aria-expanded": !0,
        "aria-controls": v.listId,
        "aria-labelledby": v.labelId,
        "aria-activedescendant": b,
        id: v.inputId,
        type: "text",
        value: c ? r.value : f,
        onChange: (l)=>{
            c || d.setState("search", l.target.value), t == null || t(l.target.value);
        }
    });
}), xe = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((r, o)=>{
    let { children: t, label: u = "Suggestions", ...c } = r, d = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null), f = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null), p = K();
    return __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "xe.useEffect": ()=>{
            if (f.current && d.current) {
                let v = f.current, b = d.current, l, y = new ResizeObserver({
                    "xe.useEffect": ()=>{
                        l = requestAnimationFrame({
                            "xe.useEffect": ()=>{
                                let E = v.offsetHeight;
                                b.style.setProperty("--cmdk-list-height", E.toFixed(1) + "px");
                            }
                        }["xe.useEffect"]);
                    }
                }["xe.useEffect"]);
                return y.observe(v), ({
                    "xe.useEffect": ()=>{
                        cancelAnimationFrame(l), y.unobserve(v);
                    }
                })["xe.useEffect"];
            }
        }
    }["xe.useEffect"], []), __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
        ref: G([
            d,
            o
        ]),
        ...c,
        "cmdk-list": "",
        role: "listbox",
        "aria-label": u,
        id: p.listId
    }, j(r, (v)=>__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            ref: G([
                f,
                p.listInnerRef
            ]),
            "cmdk-list-sizer": ""
        }, v)));
}), Pe = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((r, o)=>{
    let { open: t, onOpenChange: u, overlayClassName: c, contentClassName: d, container: f, ...p } = r;
    return __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        open: t,
        onOpenChange: u
    }, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        container: f
    }, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "cmdk-overlay": "",
        className: c
    }), __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        "aria-label": r.label,
        "cmdk-dialog": "",
        className: d
    }, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](me, {
        ref: o,
        ...p
    }))));
}), we = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((r, o)=>T((u)=>u.filtered.count === 0) ? __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
        ref: o,
        ...r,
        "cmdk-empty": "",
        role: "presentation"
    }) : null), De = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((r, o)=>{
    let { progress: t, children: u, label: c = "Loading...", ...d } = r;
    return __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
        ref: o,
        ...d,
        "cmdk-loading": "",
        role: "progressbar",
        "aria-valuenow": t,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-label": c
    }, j(r, (f)=>__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            "aria-hidden": !0
        }, f)));
}), Ve = Object.assign(me, {
    List: xe,
    Item: ye,
    Input: Ce,
    Group: Se,
    Separator: Ee,
    Dialog: Pe,
    Empty: we,
    Loading: De
});
function Ie(r, o) {
    let t = r.nextElementSibling;
    for(; t;){
        if (t.matches(o)) return t;
        t = t.nextElementSibling;
    }
}
function Me(r, o) {
    let t = r.previousElementSibling;
    for(; t;){
        if (t.matches(o)) return t;
        t = t.previousElementSibling;
    }
}
function pe(r) {
    let o = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](r);
    return M(()=>{
        o.current = r;
    }), o;
}
var M = typeof window == "undefined" ? __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"];
function k(r) {
    let o = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]();
    return o.current === void 0 && (o.current = r()), o;
}
function G(r) {
    return (o)=>{
        r.forEach((t)=>{
            typeof t == "function" ? t(o) : t != null && (t.current = o);
        });
    };
}
function T(r) {
    let o = ee(), t = ()=>r(o.snapshot());
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(o.subscribe, t, t);
}
function ve(r, o, t, u = []) {
    let c = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](), d = K();
    return M(()=>{
        var v;
        let f = (()=>{
            var b;
            for (let l of t){
                if (typeof l == "string") return l.trim();
                if (typeof l == "object" && "current" in l) return l.current ? (b = l.current.textContent) == null ? void 0 : b.trim() : c.current;
            }
        })(), p = u.map((b)=>b.trim());
        d.value(r, f, p), (v = o.current) == null || v.setAttribute(I, f), c.current = f;
    }), c;
}
var Te = ()=>{
    let [r, o] = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](), t = k(()=>new Map);
    return M(()=>{
        t.current.forEach((u)=>u()), t.current = new Map;
    }, [
        r
    ]), (u, c)=>{
        t.current.set(u, c), o({});
    };
};
function ke(r) {
    let o = r.type;
    return typeof o == "function" ? o(r.props) : "render" in o ? o.render(r.props) : r;
}
function j({ asChild: r, children: o }, t) {
    return r && __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](o) ? __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](ke(o), {
        ref: o.ref
    }, t(o.props.children)) : t(o);
}
var Le = {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: "0",
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    borderWidth: "0"
};
;
}),
"[project]/adkit-docs/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    function useSyncExternalStore$2(subscribe, getSnapshot) {
        didWarnOld18Alpha || void 0 === React.startTransition || (didWarnOld18Alpha = !0, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
        var value = getSnapshot();
        if (!didWarnUncachedGetSnapshot) {
            var cachedValue = getSnapshot();
            objectIs(value, cachedValue) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), didWarnUncachedGetSnapshot = !0);
        }
        cachedValue = useState({
            inst: {
                value: value,
                getSnapshot: getSnapshot
            }
        });
        var inst = cachedValue[0].inst, forceUpdate = cachedValue[1];
        useLayoutEffect({
            "useSyncExternalStore$2.useLayoutEffect": function() {
                inst.value = value;
                inst.getSnapshot = getSnapshot;
                checkIfSnapshotChanged(inst) && forceUpdate({
                    inst: inst
                });
            }
        }["useSyncExternalStore$2.useLayoutEffect"], [
            subscribe,
            value,
            getSnapshot
        ]);
        useEffect({
            "useSyncExternalStore$2.useEffect": function() {
                checkIfSnapshotChanged(inst) && forceUpdate({
                    inst: inst
                });
                return subscribe({
                    "useSyncExternalStore$2.useEffect": function() {
                        checkIfSnapshotChanged(inst) && forceUpdate({
                            inst: inst
                        });
                    }
                }["useSyncExternalStore$2.useEffect"]);
            }
        }["useSyncExternalStore$2.useEffect"], [
            subscribe
        ]);
        useDebugValue(value);
        return value;
    }
    function checkIfSnapshotChanged(inst) {
        var latestGetSnapshot = inst.getSnapshot;
        inst = inst.value;
        try {
            var nextValue = latestGetSnapshot();
            return !objectIs(inst, nextValue);
        } catch (error) {
            return !0;
        }
    }
    function useSyncExternalStore$1(subscribe, getSnapshot) {
        return getSnapshot();
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React = __turbopack_context__.r("[project]/adkit-docs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), objectIs = "function" === typeof Object.is ? Object.is : is, useState = React.useState, useEffect = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue, didWarnOld18Alpha = !1, didWarnUncachedGetSnapshot = !1, shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
    exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/adkit-docs/node_modules/use-sync-external-store/shim/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/adkit-docs/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-client] (ecmascript)");
}
}),
"[project]/adkit-docs/node_modules/motion-utils/dist/es/clamp.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clamp",
    ()=>clamp
]);
const clamp = (min, max, v)=>{
    if (v > max) return max;
    if (v < min) return min;
    return v;
};
;
 //# sourceMappingURL=clamp.mjs.map
}),
"[project]/adkit-docs/node_modules/motion-utils/dist/es/format-error-message.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatErrorMessage",
    ()=>formatErrorMessage
]);
function formatErrorMessage(message, errorCode) {
    return errorCode ? `${message}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${errorCode}` : message;
}
;
 //# sourceMappingURL=format-error-message.mjs.map
}),
"[project]/adkit-docs/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "invariant",
    ()=>invariant,
    "warning",
    ()=>warning
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/motion-utils/dist/es/format-error-message.mjs [app-client] (ecmascript)");
;
let warning = ()=>{};
let invariant = ()=>{};
if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && ("TURBOPACK compile-time value", "development") !== "production") {
    warning = (check, message, errorCode)=>{
        if (!check && typeof console !== "undefined") {
            console.warn((0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
        }
    };
    invariant = (check, message, errorCode)=>{
        if (!check) {
            throw new Error((0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
        }
    };
}
;
 //# sourceMappingURL=errors.mjs.map
}),
"[project]/adkit-docs/node_modules/motion-utils/dist/es/is-numerical-string.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
 */ __turbopack_context__.s([
    "isNumericalString",
    ()=>isNumericalString
]);
const isNumericalString = (v)=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(v);
;
 //# sourceMappingURL=is-numerical-string.mjs.map
}),
"[project]/adkit-docs/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s([
    "noop",
    ()=>noop
]);
const noop = (any)=>any;
;
 //# sourceMappingURL=noop.mjs.map
}),
"[project]/adkit-docs/node_modules/motion-utils/dist/es/global-config.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MotionGlobalConfig",
    ()=>MotionGlobalConfig
]);
const MotionGlobalConfig = {};
;
 //# sourceMappingURL=global-config.mjs.map
}),
"[project]/adkit-docs/node_modules/motion-utils/dist/es/is-zero-value-string.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Check if the value is a zero value string like "0px" or "0%"
 */ __turbopack_context__.s([
    "isZeroValueString",
    ()=>isZeroValueString
]);
const isZeroValueString = (v)=>/^0[^.\s]+$/u.test(v);
;
 //# sourceMappingURL=is-zero-value-string.mjs.map
}),
"[project]/adkit-docs/node_modules/motion-utils/dist/es/warn-once.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasWarned",
    ()=>hasWarned,
    "warnOnce",
    ()=>warnOnce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/motion-utils/dist/es/format-error-message.mjs [app-client] (ecmascript)");
;
const warned = new Set();
function hasWarned(message) {
    return warned.has(message);
}
function warnOnce(condition, message, errorCode) {
    if (condition || warned.has(message)) return;
    console.warn((0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
    warned.add(message);
}
;
 //# sourceMappingURL=warn-once.mjs.map
}),
"[project]/adkit-docs/node_modules/motion-utils/dist/es/time-conversion.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Converts seconds to milliseconds
 *
 * @param seconds - Time in seconds.
 * @return milliseconds - Converted time in milliseconds.
 */ /*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s([
    "millisecondsToSeconds",
    ()=>millisecondsToSeconds,
    "secondsToMilliseconds",
    ()=>secondsToMilliseconds
]);
const secondsToMilliseconds = (seconds)=>seconds * 1000;
/*#__NO_SIDE_EFFECTS__*/ const millisecondsToSeconds = (milliseconds)=>milliseconds / 1000;
;
 //# sourceMappingURL=time-conversion.mjs.map
}),
"[project]/adkit-docs/node_modules/motion-utils/dist/es/array.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addUniqueItem",
    ()=>addUniqueItem,
    "moveItem",
    ()=>moveItem,
    "removeItem",
    ()=>removeItem
]);
function addUniqueItem(arr, item) {
    if (arr.indexOf(item) === -1) arr.push(item);
}
function removeItem(arr, item) {
    const index = arr.indexOf(item);
    if (index > -1) arr.splice(index, 1);
}
// Adapted from array-move
function moveItem([...arr], fromIndex, toIndex) {
    const startIndex = fromIndex < 0 ? arr.length + fromIndex : fromIndex;
    if (startIndex >= 0 && startIndex < arr.length) {
        const endIndex = toIndex < 0 ? arr.length + toIndex : toIndex;
        const [item] = arr.splice(fromIndex, 1);
        arr.splice(endIndex, 0, item);
    }
    return arr;
}
;
 //# sourceMappingURL=array.mjs.map
}),
"[project]/adkit-docs/node_modules/motion-utils/dist/es/subscription-manager.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SubscriptionManager",
    ()=>SubscriptionManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/motion-utils/dist/es/array.mjs [app-client] (ecmascript)");
;
class SubscriptionManager {
    constructor(){
        this.subscriptions = [];
    }
    add(handler) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addUniqueItem"])(this.subscriptions, handler);
        return ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeItem"])(this.subscriptions, handler);
    }
    notify(a, b, c) {
        const numSubscriptions = this.subscriptions.length;
        if (!numSubscriptions) return;
        if (numSubscriptions === 1) {
            /**
             * If there's only a single handler we can just call it without invoking a loop.
             */ this.subscriptions[0](a, b, c);
        } else {
            for(let i = 0; i < numSubscriptions; i++){
                /**
                 * Check whether the handler exists before firing as it's possible
                 * the subscriptions were modified during this loop running.
                 */ const handler = this.subscriptions[i];
                handler && handler(a, b, c);
            }
        }
    }
    getSize() {
        return this.subscriptions.length;
    }
    clear() {
        this.subscriptions.length = 0;
    }
}
;
 //# sourceMappingURL=subscription-manager.mjs.map
}),
"[project]/adkit-docs/node_modules/motion-utils/dist/es/memo.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s([
    "memo",
    ()=>memo
]);
function memo(callback) {
    let result;
    return ()=>{
        if (result === undefined) result = callback();
        return result;
    };
}
;
 //# sourceMappingURL=memo.mjs.map
}),
"[project]/adkit-docs/node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isBezierDefinition",
    ()=>isBezierDefinition
]);
const isBezierDefinition = (easing)=>Array.isArray(easing) && typeof easing[0] === "number";
;
 //# sourceMappingURL=is-bezier-definition.mjs.map
}),
"[project]/adkit-docs/node_modules/motion-utils/dist/es/velocity-per-second.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
  Convert velocity into velocity per second

  @param [number]: Unit per frame
  @param [number]: Frame duration in ms
*/ __turbopack_context__.s([
    "velocityPerSecond",
    ()=>velocityPerSecond
]);
function velocityPerSecond(velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
}
;
 //# sourceMappingURL=velocity-per-second.mjs.map
}),
"[project]/adkit-docs/node_modules/motion-utils/dist/es/pipe.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Pipe
 * Compose other transformers to run linearily
 * pipe(min(20), max(40))
 * @param  {...functions} transformers
 * @return {function}
 */ __turbopack_context__.s([
    "pipe",
    ()=>pipe
]);
const combineFunctions = (a, b)=>(v)=>b(a(v));
const pipe = (...transformers)=>transformers.reduce(combineFunctions);
;
 //# sourceMappingURL=pipe.mjs.map
}),
"[project]/adkit-docs/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cubicBezier",
    ()=>cubicBezier
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)");
;
/*
  Bezier function generator
  This has been modified from Gaëtan Renaudeau's BezierEasing
  https://github.com/gre/bezier-easing/blob/master/src/index.js
  https://github.com/gre/bezier-easing/blob/master/LICENSE
  
  I've removed the newtonRaphsonIterate algo because in benchmarking it
  wasn't noticeably faster than binarySubdivision, indeed removing it
  usually improved times, depending on the curve.
  I also removed the lookup table, as for the added bundle size and loop we're
  only cutting ~4 or so subdivision iterations. I bumped the max iterations up
  to 12 to compensate and this still tended to be faster for no perceivable
  loss in accuracy.
  Usage
    const easeOut = cubicBezier(.17,.67,.83,.67);
    const x = easeOut(0.5); // returns 0.627...
*/ // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
const calcBezier = (t, a1, a2)=>(((1.0 - 3.0 * a2 + 3.0 * a1) * t + (3.0 * a2 - 6.0 * a1)) * t + 3.0 * a1) * t;
const subdivisionPrecision = 0.0000001;
const subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
    let currentX;
    let currentT;
    let i = 0;
    do {
        currentT = lowerBound + (upperBound - lowerBound) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - x;
        if (currentX > 0.0) {
            upperBound = currentT;
        } else {
            lowerBound = currentT;
        }
    }while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations)
    return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
    // If this is a linear gradient, return linear easing
    if (mX1 === mY1 && mX2 === mY2) return __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"];
    const getTForX = (aX)=>binarySubdivide(aX, 0, 1, mX1, mX2);
    // If animation is at start/end, return t without easing
    return (t)=>t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}
;
 //# sourceMappingURL=cubic-bezier.mjs.map
}),
"[project]/adkit-docs/node_modules/motion-utils/dist/es/easing/ease.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "easeIn",
    ()=>easeIn,
    "easeInOut",
    ()=>easeInOut,
    "easeOut",
    ()=>easeOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-client] (ecmascript)");
;
const easeIn = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezier"])(0.42, 0, 1, 1);
const easeOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezier"])(0, 0, 0.58, 1);
const easeInOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezier"])(0.42, 0, 0.58, 1);
;
 //# sourceMappingURL=ease.mjs.map
}),
"[project]/adkit-docs/node_modules/motion-utils/dist/es/easing/utils/is-easing-array.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isEasingArray",
    ()=>isEasingArray
]);
const isEasingArray = (ease)=>{
    return Array.isArray(ease) && typeof ease[0] !== "number";
};
;
 //# sourceMappingURL=is-easing-array.mjs.map
}),
"[project]/adkit-docs/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Accepts an easing function and returns a new one that outputs mirrored values for
// the second half of the animation. Turns easeIn into easeInOut.
__turbopack_context__.s([
    "mirrorEasing",
    ()=>mirrorEasing
]);
const mirrorEasing = (easing)=>(p)=>p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
;
 //# sourceMappingURL=mirror.mjs.map
}),
"[project]/adkit-docs/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Accepts an easing function and returns a new one that outputs reversed values.
// Turns easeIn into easeOut.
__turbopack_context__.s([
    "reverseEasing",
    ()=>reverseEasing
]);
const reverseEasing = (easing)=>(p)=>1 - easing(1 - p);
;
 //# sourceMappingURL=reverse.mjs.map
}),
"[project]/adkit-docs/node_modules/motion-utils/dist/es/easing/back.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "backIn",
    ()=>backIn,
    "backInOut",
    ()=>backInOut,
    "backOut",
    ()=>backOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-client] (ecmascript)");
;
;
;
const backOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezier"])(0.33, 1.53, 0.69, 0.99);
const backIn = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reverseEasing"])(backOut);
const backInOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mirrorEasing"])(backIn);
;
 //# sourceMappingURL=back.mjs.map
}),
"[project]/adkit-docs/node_modules/motion-utils/dist/es/easing/anticipate.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "anticipate",
    ()=>anticipate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/motion-utils/dist/es/easing/back.mjs [app-client] (ecmascript)");
;
const anticipate = (p)=>p >= 1 ? 1 : (p *= 2) < 1 ? 0.5 * (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backIn"])(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
;
 //# sourceMappingURL=anticipate.mjs.map
}),
"[project]/adkit-docs/node_modules/motion-utils/dist/es/easing/circ.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "circIn",
    ()=>circIn,
    "circInOut",
    ()=>circInOut,
    "circOut",
    ()=>circOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-client] (ecmascript)");
;
;
const circIn = (p)=>1 - Math.sin(Math.acos(p));
const circOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reverseEasing"])(circIn);
const circInOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mirrorEasing"])(circIn);
;
 //# sourceMappingURL=circ.mjs.map
}),
"[project]/adkit-docs/node_modules/motion-utils/dist/es/easing/utils/map.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "easingDefinitionToFunction",
    ()=>easingDefinitionToFunction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$anticipate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/motion-utils/dist/es/easing/anticipate.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/motion-utils/dist/es/easing/back.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/motion-utils/dist/es/easing/circ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/motion-utils/dist/es/easing/ease.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const easingLookup = {
    linear: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"],
    easeIn: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeIn"],
    easeInOut: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"],
    easeOut: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeOut"],
    circIn: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circIn"],
    circInOut: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circInOut"],
    circOut: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circOut"],
    backIn: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backIn"],
    backInOut: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backInOut"],
    backOut: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backOut"],
    anticipate: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$anticipate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["anticipate"]
};
const isValidEasing = (easing)=>{
    return typeof easing === "string";
};
const easingDefinitionToFunction = (definition)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBezierDefinition"])(definition)) {
        // If cubic bezier definition, create bezier curve
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`, "cubic-bezier-length");
        const [x1, y1, x2, y2] = definition;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezier"])(x1, y1, x2, y2);
    } else if (isValidEasing(definition)) {
        // Else lookup from table
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(easingLookup[definition] !== undefined, `Invalid easing type '${definition}'`, "invalid-easing-type");
        return easingLookup[definition];
    }
    return definition;
};
;
 //# sourceMappingURL=map.mjs.map
}),
"[project]/adkit-docs/node_modules/motion-utils/dist/es/progress.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
  Progress within given range

  Given a lower limit and an upper limit, we return the progress
  (expressed as a number 0-1) represented by the given value, and
  limit that progress to within 0-1.

  @param [number]: Lower limit
  @param [number]: Upper limit
  @param [number]: Value to find progress within given range
  @return [number]: Progress of value within range as expressed 0-1
*/ /*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s([
    "progress",
    ()=>progress
]);
const progress = (from, to, value)=>{
    const toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};
;
 //# sourceMappingURL=progress.mjs.map
}),
"[project]/adkit-docs/node_modules/motion-utils/dist/es/is-object.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isObject",
    ()=>isObject
]);
function isObject(value) {
    return typeof value === "object" && value !== null;
}
;
 //# sourceMappingURL=is-object.mjs.map
}),
"[project]/adkit-docs/node_modules/@shikijs/types/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShikiError",
    ()=>ShikiError
]);
class ShikiError extends Error {
    constructor(message){
        super(message);
        this.name = "ShikiError";
    }
}
;
}),
"[project]/adkit-docs/node_modules/@shikijs/vscode-textmate/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/utils.ts
__turbopack_context__.s([
    "EncodedTokenMetadata",
    ()=>EncodedTokenMetadata,
    "FindOption",
    ()=>FindOption,
    "FontStyle",
    ()=>FontStyle,
    "INITIAL",
    ()=>INITIAL,
    "Registry",
    ()=>Registry,
    "Theme",
    ()=>Theme,
    "disposeOnigString",
    ()=>disposeOnigString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
function clone(something) {
    return doClone(something);
}
function doClone(something) {
    if (Array.isArray(something)) {
        return cloneArray(something);
    }
    if (something instanceof RegExp) {
        return something;
    }
    if (typeof something === "object") {
        return cloneObj(something);
    }
    return something;
}
function cloneArray(arr) {
    let r = [];
    for(let i = 0, len = arr.length; i < len; i++){
        r[i] = doClone(arr[i]);
    }
    return r;
}
function cloneObj(obj) {
    let r = {};
    for(let key in obj){
        r[key] = doClone(obj[key]);
    }
    return r;
}
function mergeObjects(target, ...sources) {
    sources.forEach((source)=>{
        for(let key in source){
            target[key] = source[key];
        }
    });
    return target;
}
function basename(path) {
    const idx = ~path.lastIndexOf("/") || ~path.lastIndexOf("\\");
    if (idx === 0) {
        return path;
    } else if (~idx === path.length - 1) {
        return basename(path.substring(0, path.length - 1));
    } else {
        return path.substr(~idx + 1);
    }
}
var CAPTURING_REGEX_SOURCE = /\$(\d+)|\${(\d+):\/(downcase|upcase)}/g;
var RegexSource = class {
    static hasCaptures(regexSource) {
        if (regexSource === null) {
            return false;
        }
        CAPTURING_REGEX_SOURCE.lastIndex = 0;
        return CAPTURING_REGEX_SOURCE.test(regexSource);
    }
    static replaceCaptures(regexSource, captureSource, captureIndices) {
        return regexSource.replace(CAPTURING_REGEX_SOURCE, (match, index, commandIndex, command)=>{
            let capture = captureIndices[parseInt(index || commandIndex, 10)];
            if (capture) {
                let result = captureSource.substring(capture.start, capture.end);
                while(result[0] === "."){
                    result = result.substring(1);
                }
                switch(command){
                    case "downcase":
                        return result.toLowerCase();
                    case "upcase":
                        return result.toUpperCase();
                    default:
                        return result;
                }
            } else {
                return match;
            }
        });
    }
};
function strcmp(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}
function strArrCmp(a, b) {
    if (a === null && b === null) {
        return 0;
    }
    if (!a) {
        return -1;
    }
    if (!b) {
        return 1;
    }
    let len1 = a.length;
    let len2 = b.length;
    if (len1 === len2) {
        for(let i = 0; i < len1; i++){
            let res = strcmp(a[i], b[i]);
            if (res !== 0) {
                return res;
            }
        }
        return 0;
    }
    return len1 - len2;
}
function isValidHexColor(hex) {
    if (/^#[0-9a-f]{6}$/i.test(hex)) {
        return true;
    }
    if (/^#[0-9a-f]{8}$/i.test(hex)) {
        return true;
    }
    if (/^#[0-9a-f]{3}$/i.test(hex)) {
        return true;
    }
    if (/^#[0-9a-f]{4}$/i.test(hex)) {
        return true;
    }
    return false;
}
function escapeRegExpCharacters(value) {
    return value.replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&");
}
var CachedFn = class {
    constructor(fn){
        this.fn = fn;
    }
    cache = /* @__PURE__ */ new Map();
    get(key) {
        if (this.cache.has(key)) {
            return this.cache.get(key);
        }
        const value = this.fn(key);
        this.cache.set(key, value);
        return value;
    }
};
// src/theme.ts
var Theme = class {
    constructor(_colorMap, _defaults, _root){
        this._colorMap = _colorMap;
        this._defaults = _defaults;
        this._root = _root;
    }
    static createFromRawTheme(source, colorMap) {
        return this.createFromParsedTheme(parseTheme(source), colorMap);
    }
    static createFromParsedTheme(source, colorMap) {
        return resolveParsedThemeRules(source, colorMap);
    }
    _cachedMatchRoot = new CachedFn((scopeName)=>this._root.match(scopeName));
    getColorMap() {
        return this._colorMap.getColorMap();
    }
    getDefaults() {
        return this._defaults;
    }
    match(scopePath) {
        if (scopePath === null) {
            return this._defaults;
        }
        const scopeName = scopePath.scopeName;
        const matchingTrieElements = this._cachedMatchRoot.get(scopeName);
        const effectiveRule = matchingTrieElements.find((v)=>_scopePathMatchesParentScopes(scopePath.parent, v.parentScopes));
        if (!effectiveRule) {
            return null;
        }
        return new StyleAttributes(effectiveRule.fontStyle, effectiveRule.foreground, effectiveRule.background);
    }
};
var ScopeStack = class _ScopeStack {
    constructor(parent, scopeName){
        this.parent = parent;
        this.scopeName = scopeName;
    }
    static push(path, scopeNames) {
        for (const name of scopeNames){
            path = new _ScopeStack(path, name);
        }
        return path;
    }
    static from(...segments) {
        let result = null;
        for(let i = 0; i < segments.length; i++){
            result = new _ScopeStack(result, segments[i]);
        }
        return result;
    }
    push(scopeName) {
        return new _ScopeStack(this, scopeName);
    }
    getSegments() {
        let item = this;
        const result = [];
        while(item){
            result.push(item.scopeName);
            item = item.parent;
        }
        result.reverse();
        return result;
    }
    toString() {
        return this.getSegments().join(" ");
    }
    extends(other) {
        if (this === other) {
            return true;
        }
        if (this.parent === null) {
            return false;
        }
        return this.parent.extends(other);
    }
    getExtensionIfDefined(base) {
        const result = [];
        let item = this;
        while(item && item !== base){
            result.push(item.scopeName);
            item = item.parent;
        }
        return item === base ? result.reverse() : void 0;
    }
};
function _scopePathMatchesParentScopes(scopePath, parentScopes) {
    if (parentScopes.length === 0) {
        return true;
    }
    for(let index = 0; index < parentScopes.length; index++){
        let scopePattern = parentScopes[index];
        let scopeMustMatch = false;
        if (scopePattern === ">") {
            if (index === parentScopes.length - 1) {
                return false;
            }
            scopePattern = parentScopes[++index];
            scopeMustMatch = true;
        }
        while(scopePath){
            if (_matchesScope(scopePath.scopeName, scopePattern)) {
                break;
            }
            if (scopeMustMatch) {
                return false;
            }
            scopePath = scopePath.parent;
        }
        if (!scopePath) {
            return false;
        }
        scopePath = scopePath.parent;
    }
    return true;
}
function _matchesScope(scopeName, scopePattern) {
    return scopePattern === scopeName || scopeName.startsWith(scopePattern) && scopeName[scopePattern.length] === ".";
}
var StyleAttributes = class {
    constructor(fontStyle, foregroundId, backgroundId){
        this.fontStyle = fontStyle;
        this.foregroundId = foregroundId;
        this.backgroundId = backgroundId;
    }
};
function parseTheme(source) {
    if (!source) {
        return [];
    }
    if (!source.settings || !Array.isArray(source.settings)) {
        return [];
    }
    let settings = source.settings;
    let result = [], resultLen = 0;
    for(let i = 0, len = settings.length; i < len; i++){
        let entry = settings[i];
        if (!entry.settings) {
            continue;
        }
        let scopes;
        if (typeof entry.scope === "string") {
            let _scope = entry.scope;
            _scope = _scope.replace(/^[,]+/, "");
            _scope = _scope.replace(/[,]+$/, "");
            scopes = _scope.split(",");
        } else if (Array.isArray(entry.scope)) {
            scopes = entry.scope;
        } else {
            scopes = [
                ""
            ];
        }
        let fontStyle = -1 /* NotSet */ ;
        if (typeof entry.settings.fontStyle === "string") {
            fontStyle = 0 /* None */ ;
            let segments = entry.settings.fontStyle.split(" ");
            for(let j = 0, lenJ = segments.length; j < lenJ; j++){
                let segment = segments[j];
                switch(segment){
                    case "italic":
                        fontStyle = fontStyle | 1 /* Italic */ ;
                        break;
                    case "bold":
                        fontStyle = fontStyle | 2 /* Bold */ ;
                        break;
                    case "underline":
                        fontStyle = fontStyle | 4 /* Underline */ ;
                        break;
                    case "strikethrough":
                        fontStyle = fontStyle | 8 /* Strikethrough */ ;
                        break;
                }
            }
        }
        let foreground = null;
        if (typeof entry.settings.foreground === "string" && isValidHexColor(entry.settings.foreground)) {
            foreground = entry.settings.foreground;
        }
        let background = null;
        if (typeof entry.settings.background === "string" && isValidHexColor(entry.settings.background)) {
            background = entry.settings.background;
        }
        for(let j = 0, lenJ = scopes.length; j < lenJ; j++){
            let _scope = scopes[j].trim();
            let segments = _scope.split(" ");
            let scope = segments[segments.length - 1];
            let parentScopes = null;
            if (segments.length > 1) {
                parentScopes = segments.slice(0, segments.length - 1);
                parentScopes.reverse();
            }
            result[resultLen++] = new ParsedThemeRule(scope, parentScopes, i, fontStyle, foreground, background);
        }
    }
    return result;
}
var ParsedThemeRule = class {
    constructor(scope, parentScopes, index, fontStyle, foreground, background){
        this.scope = scope;
        this.parentScopes = parentScopes;
        this.index = index;
        this.fontStyle = fontStyle;
        this.foreground = foreground;
        this.background = background;
    }
};
var FontStyle = /* @__PURE__ */ ((FontStyle2)=>{
    FontStyle2[FontStyle2["NotSet"] = -1] = "NotSet";
    FontStyle2[FontStyle2["None"] = 0] = "None";
    FontStyle2[FontStyle2["Italic"] = 1] = "Italic";
    FontStyle2[FontStyle2["Bold"] = 2] = "Bold";
    FontStyle2[FontStyle2["Underline"] = 4] = "Underline";
    FontStyle2[FontStyle2["Strikethrough"] = 8] = "Strikethrough";
    return FontStyle2;
})(FontStyle || {});
function resolveParsedThemeRules(parsedThemeRules, _colorMap) {
    parsedThemeRules.sort((a, b)=>{
        let r = strcmp(a.scope, b.scope);
        if (r !== 0) {
            return r;
        }
        r = strArrCmp(a.parentScopes, b.parentScopes);
        if (r !== 0) {
            return r;
        }
        return a.index - b.index;
    });
    let defaultFontStyle = 0 /* None */ ;
    let defaultForeground = "#000000";
    let defaultBackground = "#ffffff";
    while(parsedThemeRules.length >= 1 && parsedThemeRules[0].scope === ""){
        let incomingDefaults = parsedThemeRules.shift();
        if (incomingDefaults.fontStyle !== -1 /* NotSet */ ) {
            defaultFontStyle = incomingDefaults.fontStyle;
        }
        if (incomingDefaults.foreground !== null) {
            defaultForeground = incomingDefaults.foreground;
        }
        if (incomingDefaults.background !== null) {
            defaultBackground = incomingDefaults.background;
        }
    }
    let colorMap = new ColorMap(_colorMap);
    let defaults = new StyleAttributes(defaultFontStyle, colorMap.getId(defaultForeground), colorMap.getId(defaultBackground));
    let root = new ThemeTrieElement(new ThemeTrieElementRule(0, null, -1 /* NotSet */ , 0, 0), []);
    for(let i = 0, len = parsedThemeRules.length; i < len; i++){
        let rule = parsedThemeRules[i];
        root.insert(0, rule.scope, rule.parentScopes, rule.fontStyle, colorMap.getId(rule.foreground), colorMap.getId(rule.background));
    }
    return new Theme(colorMap, defaults, root);
}
var ColorMap = class {
    _isFrozen;
    _lastColorId;
    _id2color;
    _color2id;
    constructor(_colorMap){
        this._lastColorId = 0;
        this._id2color = [];
        this._color2id = /* @__PURE__ */ Object.create(null);
        if (Array.isArray(_colorMap)) {
            this._isFrozen = true;
            for(let i = 0, len = _colorMap.length; i < len; i++){
                this._color2id[_colorMap[i]] = i;
                this._id2color[i] = _colorMap[i];
            }
        } else {
            this._isFrozen = false;
        }
    }
    getId(color) {
        if (color === null) {
            return 0;
        }
        color = color.toUpperCase();
        let value = this._color2id[color];
        if (value) {
            return value;
        }
        if (this._isFrozen) {
            throw new Error(`Missing color in color map - ${color}`);
        }
        value = ++this._lastColorId;
        this._color2id[color] = value;
        this._id2color[value] = color;
        return value;
    }
    getColorMap() {
        return this._id2color.slice(0);
    }
};
var emptyParentScopes = Object.freeze([]);
var ThemeTrieElementRule = class _ThemeTrieElementRule {
    scopeDepth;
    parentScopes;
    fontStyle;
    foreground;
    background;
    constructor(scopeDepth, parentScopes, fontStyle, foreground, background){
        this.scopeDepth = scopeDepth;
        this.parentScopes = parentScopes || emptyParentScopes;
        this.fontStyle = fontStyle;
        this.foreground = foreground;
        this.background = background;
    }
    clone() {
        return new _ThemeTrieElementRule(this.scopeDepth, this.parentScopes, this.fontStyle, this.foreground, this.background);
    }
    static cloneArr(arr) {
        let r = [];
        for(let i = 0, len = arr.length; i < len; i++){
            r[i] = arr[i].clone();
        }
        return r;
    }
    acceptOverwrite(scopeDepth, fontStyle, foreground, background) {
        if (this.scopeDepth > scopeDepth) {
            console.log("how did this happen?");
        } else {
            this.scopeDepth = scopeDepth;
        }
        if (fontStyle !== -1 /* NotSet */ ) {
            this.fontStyle = fontStyle;
        }
        if (foreground !== 0) {
            this.foreground = foreground;
        }
        if (background !== 0) {
            this.background = background;
        }
    }
};
var ThemeTrieElement = class _ThemeTrieElement {
    constructor(_mainRule, rulesWithParentScopes = [], _children = {}){
        this._mainRule = _mainRule;
        this._children = _children;
        this._rulesWithParentScopes = rulesWithParentScopes;
    }
    _rulesWithParentScopes;
    static _cmpBySpecificity(a, b) {
        if (a.scopeDepth !== b.scopeDepth) {
            return b.scopeDepth - a.scopeDepth;
        }
        let aParentIndex = 0;
        let bParentIndex = 0;
        while(true){
            if (a.parentScopes[aParentIndex] === ">") {
                aParentIndex++;
            }
            if (b.parentScopes[bParentIndex] === ">") {
                bParentIndex++;
            }
            if (aParentIndex >= a.parentScopes.length || bParentIndex >= b.parentScopes.length) {
                break;
            }
            const parentScopeLengthDiff = b.parentScopes[bParentIndex].length - a.parentScopes[aParentIndex].length;
            if (parentScopeLengthDiff !== 0) {
                return parentScopeLengthDiff;
            }
            aParentIndex++;
            bParentIndex++;
        }
        return b.parentScopes.length - a.parentScopes.length;
    }
    match(scope) {
        if (scope !== "") {
            let dotIndex = scope.indexOf(".");
            let head;
            let tail;
            if (dotIndex === -1) {
                head = scope;
                tail = "";
            } else {
                head = scope.substring(0, dotIndex);
                tail = scope.substring(dotIndex + 1);
            }
            if (this._children.hasOwnProperty(head)) {
                return this._children[head].match(tail);
            }
        }
        const rules = this._rulesWithParentScopes.concat(this._mainRule);
        rules.sort(_ThemeTrieElement._cmpBySpecificity);
        return rules;
    }
    insert(scopeDepth, scope, parentScopes, fontStyle, foreground, background) {
        if (scope === "") {
            this._doInsertHere(scopeDepth, parentScopes, fontStyle, foreground, background);
            return;
        }
        let dotIndex = scope.indexOf(".");
        let head;
        let tail;
        if (dotIndex === -1) {
            head = scope;
            tail = "";
        } else {
            head = scope.substring(0, dotIndex);
            tail = scope.substring(dotIndex + 1);
        }
        let child;
        if (this._children.hasOwnProperty(head)) {
            child = this._children[head];
        } else {
            child = new _ThemeTrieElement(this._mainRule.clone(), ThemeTrieElementRule.cloneArr(this._rulesWithParentScopes));
            this._children[head] = child;
        }
        child.insert(scopeDepth + 1, tail, parentScopes, fontStyle, foreground, background);
    }
    _doInsertHere(scopeDepth, parentScopes, fontStyle, foreground, background) {
        if (parentScopes === null) {
            this._mainRule.acceptOverwrite(scopeDepth, fontStyle, foreground, background);
            return;
        }
        for(let i = 0, len = this._rulesWithParentScopes.length; i < len; i++){
            let rule = this._rulesWithParentScopes[i];
            if (strArrCmp(rule.parentScopes, parentScopes) === 0) {
                rule.acceptOverwrite(scopeDepth, fontStyle, foreground, background);
                return;
            }
        }
        if (fontStyle === -1 /* NotSet */ ) {
            fontStyle = this._mainRule.fontStyle;
        }
        if (foreground === 0) {
            foreground = this._mainRule.foreground;
        }
        if (background === 0) {
            background = this._mainRule.background;
        }
        this._rulesWithParentScopes.push(new ThemeTrieElementRule(scopeDepth, parentScopes, fontStyle, foreground, background));
    }
};
// src/encodedTokenAttributes.ts
var EncodedTokenMetadata = class _EncodedTokenMetadata {
    static toBinaryStr(encodedTokenAttributes) {
        return encodedTokenAttributes.toString(2).padStart(32, "0");
    }
    static print(encodedTokenAttributes) {
        const languageId = _EncodedTokenMetadata.getLanguageId(encodedTokenAttributes);
        const tokenType = _EncodedTokenMetadata.getTokenType(encodedTokenAttributes);
        const fontStyle = _EncodedTokenMetadata.getFontStyle(encodedTokenAttributes);
        const foreground = _EncodedTokenMetadata.getForeground(encodedTokenAttributes);
        const background = _EncodedTokenMetadata.getBackground(encodedTokenAttributes);
        console.log({
            languageId,
            tokenType,
            fontStyle,
            foreground,
            background
        });
    }
    static getLanguageId(encodedTokenAttributes) {
        return (encodedTokenAttributes & 255 /* LANGUAGEID_MASK */ ) >>> 0 /* LANGUAGEID_OFFSET */ ;
    }
    static getTokenType(encodedTokenAttributes) {
        return (encodedTokenAttributes & 768 /* TOKEN_TYPE_MASK */ ) >>> 8 /* TOKEN_TYPE_OFFSET */ ;
    }
    static containsBalancedBrackets(encodedTokenAttributes) {
        return (encodedTokenAttributes & 1024 /* BALANCED_BRACKETS_MASK */ ) !== 0;
    }
    static getFontStyle(encodedTokenAttributes) {
        return (encodedTokenAttributes & 30720 /* FONT_STYLE_MASK */ ) >>> 11 /* FONT_STYLE_OFFSET */ ;
    }
    static getForeground(encodedTokenAttributes) {
        return (encodedTokenAttributes & 16744448 /* FOREGROUND_MASK */ ) >>> 15 /* FOREGROUND_OFFSET */ ;
    }
    static getBackground(encodedTokenAttributes) {
        return (encodedTokenAttributes & 4278190080 /* BACKGROUND_MASK */ ) >>> 24 /* BACKGROUND_OFFSET */ ;
    }
    /**
   * Updates the fields in `metadata`.
   * A value of `0`, `NotSet` or `null` indicates that the corresponding field should be left as is.
   */ static set(encodedTokenAttributes, languageId, tokenType, containsBalancedBrackets, fontStyle, foreground, background) {
        let _languageId = _EncodedTokenMetadata.getLanguageId(encodedTokenAttributes);
        let _tokenType = _EncodedTokenMetadata.getTokenType(encodedTokenAttributes);
        let _containsBalancedBracketsBit = _EncodedTokenMetadata.containsBalancedBrackets(encodedTokenAttributes) ? 1 : 0;
        let _fontStyle = _EncodedTokenMetadata.getFontStyle(encodedTokenAttributes);
        let _foreground = _EncodedTokenMetadata.getForeground(encodedTokenAttributes);
        let _background = _EncodedTokenMetadata.getBackground(encodedTokenAttributes);
        if (languageId !== 0) {
            _languageId = languageId;
        }
        if (tokenType !== 8 /* NotSet */ ) {
            _tokenType = fromOptionalTokenType(tokenType);
        }
        if (containsBalancedBrackets !== null) {
            _containsBalancedBracketsBit = containsBalancedBrackets ? 1 : 0;
        }
        if (fontStyle !== -1 /* NotSet */ ) {
            _fontStyle = fontStyle;
        }
        if (foreground !== 0) {
            _foreground = foreground;
        }
        if (background !== 0) {
            _background = background;
        }
        return (_languageId << 0 /* LANGUAGEID_OFFSET */  | _tokenType << 8 /* TOKEN_TYPE_OFFSET */  | _containsBalancedBracketsBit << 10 /* BALANCED_BRACKETS_OFFSET */  | _fontStyle << 11 /* FONT_STYLE_OFFSET */  | _foreground << 15 /* FOREGROUND_OFFSET */  | _background << 24 /* BACKGROUND_OFFSET */ ) >>> 0;
    }
};
function toOptionalTokenType(standardType) {
    return standardType;
}
function fromOptionalTokenType(standardType) {
    return standardType;
}
// src/matcher.ts
function createMatchers(selector, matchesName) {
    const results = [];
    const tokenizer = newTokenizer(selector);
    let token = tokenizer.next();
    while(token !== null){
        let priority = 0;
        if (token.length === 2 && token.charAt(1) === ":") {
            switch(token.charAt(0)){
                case "R":
                    priority = 1;
                    break;
                case "L":
                    priority = -1;
                    break;
                default:
                    console.log(`Unknown priority ${token} in scope selector`);
            }
            token = tokenizer.next();
        }
        let matcher = parseConjunction();
        results.push({
            matcher,
            priority
        });
        if (token !== ",") {
            break;
        }
        token = tokenizer.next();
    }
    return results;
    //TURBOPACK unreachable
    ;
    function parseOperand() {
        if (token === "-") {
            token = tokenizer.next();
            const expressionToNegate = parseOperand();
            return (matcherInput)=>!!expressionToNegate && !expressionToNegate(matcherInput);
        }
        if (token === "(") {
            token = tokenizer.next();
            const expressionInParents = parseInnerExpression();
            if (token === ")") {
                token = tokenizer.next();
            }
            return expressionInParents;
        }
        if (isIdentifier(token)) {
            const identifiers = [];
            do {
                identifiers.push(token);
                token = tokenizer.next();
            }while (isIdentifier(token))
            return (matcherInput)=>matchesName(identifiers, matcherInput);
        }
        return null;
    }
    function parseConjunction() {
        const matchers = [];
        let matcher = parseOperand();
        while(matcher){
            matchers.push(matcher);
            matcher = parseOperand();
        }
        return (matcherInput)=>matchers.every((matcher2)=>matcher2(matcherInput));
    }
    function parseInnerExpression() {
        const matchers = [];
        let matcher = parseConjunction();
        while(matcher){
            matchers.push(matcher);
            if (token === "|" || token === ",") {
                do {
                    token = tokenizer.next();
                }while (token === "|" || token === ",")
            } else {
                break;
            }
            matcher = parseConjunction();
        }
        return (matcherInput)=>matchers.some((matcher2)=>matcher2(matcherInput));
    }
}
function isIdentifier(token) {
    return !!token && !!token.match(/[\w\.:]+/);
}
function newTokenizer(input) {
    let regex = /([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g;
    let match = regex.exec(input);
    return {
        next: ()=>{
            if (!match) {
                return null;
            }
            const res = match[0];
            match = regex.exec(input);
            return res;
        }
    };
}
// src/onigLib.ts
var FindOption = /* @__PURE__ */ ((FindOption2)=>{
    FindOption2[FindOption2["None"] = 0] = "None";
    FindOption2[FindOption2["NotBeginString"] = 1] = "NotBeginString";
    FindOption2[FindOption2["NotEndString"] = 2] = "NotEndString";
    FindOption2[FindOption2["NotBeginPosition"] = 4] = "NotBeginPosition";
    FindOption2[FindOption2["DebugCall"] = 8] = "DebugCall";
    return FindOption2;
})(FindOption || {});
function disposeOnigString(str) {
    if (typeof str.dispose === "function") {
        str.dispose();
    }
}
// src/grammar/grammarDependencies.ts
var TopLevelRuleReference = class {
    constructor(scopeName){
        this.scopeName = scopeName;
    }
    toKey() {
        return this.scopeName;
    }
};
var TopLevelRepositoryRuleReference = class {
    constructor(scopeName, ruleName){
        this.scopeName = scopeName;
        this.ruleName = ruleName;
    }
    toKey() {
        return `${this.scopeName}#${this.ruleName}`;
    }
};
var ExternalReferenceCollector = class {
    _references = [];
    _seenReferenceKeys = /* @__PURE__ */ new Set();
    get references() {
        return this._references;
    }
    visitedRule = /* @__PURE__ */ new Set();
    add(reference) {
        const key = reference.toKey();
        if (this._seenReferenceKeys.has(key)) {
            return;
        }
        this._seenReferenceKeys.add(key);
        this._references.push(reference);
    }
};
var ScopeDependencyProcessor = class {
    constructor(repo, initialScopeName){
        this.repo = repo;
        this.initialScopeName = initialScopeName;
        this.seenFullScopeRequests.add(this.initialScopeName);
        this.Q = [
            new TopLevelRuleReference(this.initialScopeName)
        ];
    }
    seenFullScopeRequests = /* @__PURE__ */ new Set();
    seenPartialScopeRequests = /* @__PURE__ */ new Set();
    Q;
    processQueue() {
        const q = this.Q;
        this.Q = [];
        const deps = new ExternalReferenceCollector();
        for (const dep of q){
            collectReferencesOfReference(dep, this.initialScopeName, this.repo, deps);
        }
        for (const dep of deps.references){
            if (dep instanceof TopLevelRuleReference) {
                if (this.seenFullScopeRequests.has(dep.scopeName)) {
                    continue;
                }
                this.seenFullScopeRequests.add(dep.scopeName);
                this.Q.push(dep);
            } else {
                if (this.seenFullScopeRequests.has(dep.scopeName)) {
                    continue;
                }
                if (this.seenPartialScopeRequests.has(dep.toKey())) {
                    continue;
                }
                this.seenPartialScopeRequests.add(dep.toKey());
                this.Q.push(dep);
            }
        }
    }
};
function collectReferencesOfReference(reference, baseGrammarScopeName, repo, result) {
    const selfGrammar = repo.lookup(reference.scopeName);
    if (!selfGrammar) {
        if (reference.scopeName === baseGrammarScopeName) {
            throw new Error(`No grammar provided for <${baseGrammarScopeName}>`);
        }
        return;
    }
    const baseGrammar = repo.lookup(baseGrammarScopeName);
    if (reference instanceof TopLevelRuleReference) {
        collectExternalReferencesInTopLevelRule({
            baseGrammar,
            selfGrammar
        }, result);
    } else {
        collectExternalReferencesInTopLevelRepositoryRule(reference.ruleName, {
            baseGrammar,
            selfGrammar,
            repository: selfGrammar.repository
        }, result);
    }
    const injections = repo.injections(reference.scopeName);
    if (injections) {
        for (const injection of injections){
            result.add(new TopLevelRuleReference(injection));
        }
    }
}
function collectExternalReferencesInTopLevelRepositoryRule(ruleName, context, result) {
    if (context.repository && context.repository[ruleName]) {
        const rule = context.repository[ruleName];
        collectExternalReferencesInRules([
            rule
        ], context, result);
    }
}
function collectExternalReferencesInTopLevelRule(context, result) {
    if (context.selfGrammar.patterns && Array.isArray(context.selfGrammar.patterns)) {
        collectExternalReferencesInRules(context.selfGrammar.patterns, {
            ...context,
            repository: context.selfGrammar.repository
        }, result);
    }
    if (context.selfGrammar.injections) {
        collectExternalReferencesInRules(Object.values(context.selfGrammar.injections), {
            ...context,
            repository: context.selfGrammar.repository
        }, result);
    }
}
function collectExternalReferencesInRules(rules, context, result) {
    for (const rule of rules){
        if (result.visitedRule.has(rule)) {
            continue;
        }
        result.visitedRule.add(rule);
        const patternRepository = rule.repository ? mergeObjects({}, context.repository, rule.repository) : context.repository;
        if (Array.isArray(rule.patterns)) {
            collectExternalReferencesInRules(rule.patterns, {
                ...context,
                repository: patternRepository
            }, result);
        }
        const include = rule.include;
        if (!include) {
            continue;
        }
        const reference = parseInclude(include);
        switch(reference.kind){
            case 0 /* Base */ :
                collectExternalReferencesInTopLevelRule({
                    ...context,
                    selfGrammar: context.baseGrammar
                }, result);
                break;
            case 1 /* Self */ :
                collectExternalReferencesInTopLevelRule(context, result);
                break;
            case 2 /* RelativeReference */ :
                collectExternalReferencesInTopLevelRepositoryRule(reference.ruleName, {
                    ...context,
                    repository: patternRepository
                }, result);
                break;
            case 3 /* TopLevelReference */ :
            case 4 /* TopLevelRepositoryReference */ :
                const selfGrammar = reference.scopeName === context.selfGrammar.scopeName ? context.selfGrammar : reference.scopeName === context.baseGrammar.scopeName ? context.baseGrammar : void 0;
                if (selfGrammar) {
                    const newContext = {
                        baseGrammar: context.baseGrammar,
                        selfGrammar,
                        repository: patternRepository
                    };
                    if (reference.kind === 4 /* TopLevelRepositoryReference */ ) {
                        collectExternalReferencesInTopLevelRepositoryRule(reference.ruleName, newContext, result);
                    } else {
                        collectExternalReferencesInTopLevelRule(newContext, result);
                    }
                } else {
                    if (reference.kind === 4 /* TopLevelRepositoryReference */ ) {
                        result.add(new TopLevelRepositoryRuleReference(reference.scopeName, reference.ruleName));
                    } else {
                        result.add(new TopLevelRuleReference(reference.scopeName));
                    }
                }
                break;
        }
    }
}
var BaseReference = class {
    kind = 0 /* Base */ ;
};
var SelfReference = class {
    kind = 1 /* Self */ ;
};
var RelativeReference = class {
    constructor(ruleName){
        this.ruleName = ruleName;
    }
    kind = 2 /* RelativeReference */ ;
};
var TopLevelReference = class {
    constructor(scopeName){
        this.scopeName = scopeName;
    }
    kind = 3 /* TopLevelReference */ ;
};
var TopLevelRepositoryReference = class {
    constructor(scopeName, ruleName){
        this.scopeName = scopeName;
        this.ruleName = ruleName;
    }
    kind = 4 /* TopLevelRepositoryReference */ ;
};
function parseInclude(include) {
    if (include === "$base") {
        return new BaseReference();
    } else if (include === "$self") {
        return new SelfReference();
    }
    const indexOfSharp = include.indexOf("#");
    if (indexOfSharp === -1) {
        return new TopLevelReference(include);
    } else if (indexOfSharp === 0) {
        return new RelativeReference(include.substring(1));
    } else {
        const scopeName = include.substring(0, indexOfSharp);
        const ruleName = include.substring(indexOfSharp + 1);
        return new TopLevelRepositoryReference(scopeName, ruleName);
    }
}
// src/rule.ts
var HAS_BACK_REFERENCES = /\\(\d+)/;
var BACK_REFERENCING_END = /\\(\d+)/g;
var ruleIdSymbol = Symbol("RuleId");
var endRuleId = -1;
var whileRuleId = -2;
function ruleIdFromNumber(id) {
    return id;
}
function ruleIdToNumber(id) {
    return id;
}
var Rule = class {
    $location;
    id;
    _nameIsCapturing;
    _name;
    _contentNameIsCapturing;
    _contentName;
    constructor($location, id, name, contentName){
        this.$location = $location;
        this.id = id;
        this._name = name || null;
        this._nameIsCapturing = RegexSource.hasCaptures(this._name);
        this._contentName = contentName || null;
        this._contentNameIsCapturing = RegexSource.hasCaptures(this._contentName);
    }
    get debugName() {
        const location = this.$location ? `${basename(this.$location.filename)}:${this.$location.line}` : "unknown";
        return `${this.constructor.name}#${this.id} @ ${location}`;
    }
    getName(lineText, captureIndices) {
        if (!this._nameIsCapturing || this._name === null || lineText === null || captureIndices === null) {
            return this._name;
        }
        return RegexSource.replaceCaptures(this._name, lineText, captureIndices);
    }
    getContentName(lineText, captureIndices) {
        if (!this._contentNameIsCapturing || this._contentName === null) {
            return this._contentName;
        }
        return RegexSource.replaceCaptures(this._contentName, lineText, captureIndices);
    }
};
var CaptureRule = class extends Rule {
    retokenizeCapturedWithRuleId;
    constructor($location, id, name, contentName, retokenizeCapturedWithRuleId){
        super($location, id, name, contentName);
        this.retokenizeCapturedWithRuleId = retokenizeCapturedWithRuleId;
    }
    dispose() {}
    collectPatterns(grammar, out) {
        throw new Error("Not supported!");
    }
    compile(grammar, endRegexSource) {
        throw new Error("Not supported!");
    }
    compileAG(grammar, endRegexSource, allowA, allowG) {
        throw new Error("Not supported!");
    }
};
var MatchRule = class extends Rule {
    _match;
    captures;
    _cachedCompiledPatterns;
    constructor($location, id, name, match, captures){
        super($location, id, name, null);
        this._match = new RegExpSource(match, this.id);
        this.captures = captures;
        this._cachedCompiledPatterns = null;
    }
    dispose() {
        if (this._cachedCompiledPatterns) {
            this._cachedCompiledPatterns.dispose();
            this._cachedCompiledPatterns = null;
        }
    }
    get debugMatchRegExp() {
        return `${this._match.source}`;
    }
    collectPatterns(grammar, out) {
        out.push(this._match);
    }
    compile(grammar, endRegexSource) {
        return this._getCachedCompiledPatterns(grammar).compile(grammar);
    }
    compileAG(grammar, endRegexSource, allowA, allowG) {
        return this._getCachedCompiledPatterns(grammar).compileAG(grammar, allowA, allowG);
    }
    _getCachedCompiledPatterns(grammar) {
        if (!this._cachedCompiledPatterns) {
            this._cachedCompiledPatterns = new RegExpSourceList();
            this.collectPatterns(grammar, this._cachedCompiledPatterns);
        }
        return this._cachedCompiledPatterns;
    }
};
var IncludeOnlyRule = class extends Rule {
    hasMissingPatterns;
    patterns;
    _cachedCompiledPatterns;
    constructor($location, id, name, contentName, patterns){
        super($location, id, name, contentName);
        this.patterns = patterns.patterns;
        this.hasMissingPatterns = patterns.hasMissingPatterns;
        this._cachedCompiledPatterns = null;
    }
    dispose() {
        if (this._cachedCompiledPatterns) {
            this._cachedCompiledPatterns.dispose();
            this._cachedCompiledPatterns = null;
        }
    }
    collectPatterns(grammar, out) {
        for (const pattern of this.patterns){
            const rule = grammar.getRule(pattern);
            rule.collectPatterns(grammar, out);
        }
    }
    compile(grammar, endRegexSource) {
        return this._getCachedCompiledPatterns(grammar).compile(grammar);
    }
    compileAG(grammar, endRegexSource, allowA, allowG) {
        return this._getCachedCompiledPatterns(grammar).compileAG(grammar, allowA, allowG);
    }
    _getCachedCompiledPatterns(grammar) {
        if (!this._cachedCompiledPatterns) {
            this._cachedCompiledPatterns = new RegExpSourceList();
            this.collectPatterns(grammar, this._cachedCompiledPatterns);
        }
        return this._cachedCompiledPatterns;
    }
};
var BeginEndRule = class extends Rule {
    _begin;
    beginCaptures;
    _end;
    endHasBackReferences;
    endCaptures;
    applyEndPatternLast;
    hasMissingPatterns;
    patterns;
    _cachedCompiledPatterns;
    constructor($location, id, name, contentName, begin, beginCaptures, end, endCaptures, applyEndPatternLast, patterns){
        super($location, id, name, contentName);
        this._begin = new RegExpSource(begin, this.id);
        this.beginCaptures = beginCaptures;
        this._end = new RegExpSource(end ? end : "\uFFFF", -1);
        this.endHasBackReferences = this._end.hasBackReferences;
        this.endCaptures = endCaptures;
        this.applyEndPatternLast = applyEndPatternLast || false;
        this.patterns = patterns.patterns;
        this.hasMissingPatterns = patterns.hasMissingPatterns;
        this._cachedCompiledPatterns = null;
    }
    dispose() {
        if (this._cachedCompiledPatterns) {
            this._cachedCompiledPatterns.dispose();
            this._cachedCompiledPatterns = null;
        }
    }
    get debugBeginRegExp() {
        return `${this._begin.source}`;
    }
    get debugEndRegExp() {
        return `${this._end.source}`;
    }
    getEndWithResolvedBackReferences(lineText, captureIndices) {
        return this._end.resolveBackReferences(lineText, captureIndices);
    }
    collectPatterns(grammar, out) {
        out.push(this._begin);
    }
    compile(grammar, endRegexSource) {
        return this._getCachedCompiledPatterns(grammar, endRegexSource).compile(grammar);
    }
    compileAG(grammar, endRegexSource, allowA, allowG) {
        return this._getCachedCompiledPatterns(grammar, endRegexSource).compileAG(grammar, allowA, allowG);
    }
    _getCachedCompiledPatterns(grammar, endRegexSource) {
        if (!this._cachedCompiledPatterns) {
            this._cachedCompiledPatterns = new RegExpSourceList();
            for (const pattern of this.patterns){
                const rule = grammar.getRule(pattern);
                rule.collectPatterns(grammar, this._cachedCompiledPatterns);
            }
            if (this.applyEndPatternLast) {
                this._cachedCompiledPatterns.push(this._end.hasBackReferences ? this._end.clone() : this._end);
            } else {
                this._cachedCompiledPatterns.unshift(this._end.hasBackReferences ? this._end.clone() : this._end);
            }
        }
        if (this._end.hasBackReferences) {
            if (this.applyEndPatternLast) {
                this._cachedCompiledPatterns.setSource(this._cachedCompiledPatterns.length() - 1, endRegexSource);
            } else {
                this._cachedCompiledPatterns.setSource(0, endRegexSource);
            }
        }
        return this._cachedCompiledPatterns;
    }
};
var BeginWhileRule = class extends Rule {
    _begin;
    beginCaptures;
    whileCaptures;
    _while;
    whileHasBackReferences;
    hasMissingPatterns;
    patterns;
    _cachedCompiledPatterns;
    _cachedCompiledWhilePatterns;
    constructor($location, id, name, contentName, begin, beginCaptures, _while, whileCaptures, patterns){
        super($location, id, name, contentName);
        this._begin = new RegExpSource(begin, this.id);
        this.beginCaptures = beginCaptures;
        this.whileCaptures = whileCaptures;
        this._while = new RegExpSource(_while, whileRuleId);
        this.whileHasBackReferences = this._while.hasBackReferences;
        this.patterns = patterns.patterns;
        this.hasMissingPatterns = patterns.hasMissingPatterns;
        this._cachedCompiledPatterns = null;
        this._cachedCompiledWhilePatterns = null;
    }
    dispose() {
        if (this._cachedCompiledPatterns) {
            this._cachedCompiledPatterns.dispose();
            this._cachedCompiledPatterns = null;
        }
        if (this._cachedCompiledWhilePatterns) {
            this._cachedCompiledWhilePatterns.dispose();
            this._cachedCompiledWhilePatterns = null;
        }
    }
    get debugBeginRegExp() {
        return `${this._begin.source}`;
    }
    get debugWhileRegExp() {
        return `${this._while.source}`;
    }
    getWhileWithResolvedBackReferences(lineText, captureIndices) {
        return this._while.resolveBackReferences(lineText, captureIndices);
    }
    collectPatterns(grammar, out) {
        out.push(this._begin);
    }
    compile(grammar, endRegexSource) {
        return this._getCachedCompiledPatterns(grammar).compile(grammar);
    }
    compileAG(grammar, endRegexSource, allowA, allowG) {
        return this._getCachedCompiledPatterns(grammar).compileAG(grammar, allowA, allowG);
    }
    _getCachedCompiledPatterns(grammar) {
        if (!this._cachedCompiledPatterns) {
            this._cachedCompiledPatterns = new RegExpSourceList();
            for (const pattern of this.patterns){
                const rule = grammar.getRule(pattern);
                rule.collectPatterns(grammar, this._cachedCompiledPatterns);
            }
        }
        return this._cachedCompiledPatterns;
    }
    compileWhile(grammar, endRegexSource) {
        return this._getCachedCompiledWhilePatterns(grammar, endRegexSource).compile(grammar);
    }
    compileWhileAG(grammar, endRegexSource, allowA, allowG) {
        return this._getCachedCompiledWhilePatterns(grammar, endRegexSource).compileAG(grammar, allowA, allowG);
    }
    _getCachedCompiledWhilePatterns(grammar, endRegexSource) {
        if (!this._cachedCompiledWhilePatterns) {
            this._cachedCompiledWhilePatterns = new RegExpSourceList();
            this._cachedCompiledWhilePatterns.push(this._while.hasBackReferences ? this._while.clone() : this._while);
        }
        if (this._while.hasBackReferences) {
            this._cachedCompiledWhilePatterns.setSource(0, endRegexSource ? endRegexSource : "\uFFFF");
        }
        return this._cachedCompiledWhilePatterns;
    }
};
var RuleFactory = class _RuleFactory {
    static createCaptureRule(helper, $location, name, contentName, retokenizeCapturedWithRuleId) {
        return helper.registerRule((id)=>{
            return new CaptureRule($location, id, name, contentName, retokenizeCapturedWithRuleId);
        });
    }
    static getCompiledRuleId(desc, helper, repository) {
        if (!desc.id) {
            helper.registerRule((id)=>{
                desc.id = id;
                if (desc.match) {
                    return new MatchRule(desc.$vscodeTextmateLocation, desc.id, desc.name, desc.match, _RuleFactory._compileCaptures(desc.captures, helper, repository));
                }
                if (typeof desc.begin === "undefined") {
                    if (desc.repository) {
                        repository = mergeObjects({}, repository, desc.repository);
                    }
                    let patterns = desc.patterns;
                    if (typeof patterns === "undefined" && desc.include) {
                        patterns = [
                            {
                                include: desc.include
                            }
                        ];
                    }
                    return new IncludeOnlyRule(desc.$vscodeTextmateLocation, desc.id, desc.name, desc.contentName, _RuleFactory._compilePatterns(patterns, helper, repository));
                }
                if (desc.while) {
                    return new BeginWhileRule(desc.$vscodeTextmateLocation, desc.id, desc.name, desc.contentName, desc.begin, _RuleFactory._compileCaptures(desc.beginCaptures || desc.captures, helper, repository), desc.while, _RuleFactory._compileCaptures(desc.whileCaptures || desc.captures, helper, repository), _RuleFactory._compilePatterns(desc.patterns, helper, repository));
                }
                return new BeginEndRule(desc.$vscodeTextmateLocation, desc.id, desc.name, desc.contentName, desc.begin, _RuleFactory._compileCaptures(desc.beginCaptures || desc.captures, helper, repository), desc.end, _RuleFactory._compileCaptures(desc.endCaptures || desc.captures, helper, repository), desc.applyEndPatternLast, _RuleFactory._compilePatterns(desc.patterns, helper, repository));
            });
        }
        return desc.id;
    }
    static _compileCaptures(captures, helper, repository) {
        let r = [];
        if (captures) {
            let maximumCaptureId = 0;
            for(const captureId in captures){
                if (captureId === "$vscodeTextmateLocation") {
                    continue;
                }
                const numericCaptureId = parseInt(captureId, 10);
                if (numericCaptureId > maximumCaptureId) {
                    maximumCaptureId = numericCaptureId;
                }
            }
            for(let i = 0; i <= maximumCaptureId; i++){
                r[i] = null;
            }
            for(const captureId in captures){
                if (captureId === "$vscodeTextmateLocation") {
                    continue;
                }
                const numericCaptureId = parseInt(captureId, 10);
                let retokenizeCapturedWithRuleId = 0;
                if (captures[captureId].patterns) {
                    retokenizeCapturedWithRuleId = _RuleFactory.getCompiledRuleId(captures[captureId], helper, repository);
                }
                r[numericCaptureId] = _RuleFactory.createCaptureRule(helper, captures[captureId].$vscodeTextmateLocation, captures[captureId].name, captures[captureId].contentName, retokenizeCapturedWithRuleId);
            }
        }
        return r;
    }
    static _compilePatterns(patterns, helper, repository) {
        let r = [];
        if (patterns) {
            for(let i = 0, len = patterns.length; i < len; i++){
                const pattern = patterns[i];
                let ruleId = -1;
                if (pattern.include) {
                    const reference = parseInclude(pattern.include);
                    switch(reference.kind){
                        case 0 /* Base */ :
                        case 1 /* Self */ :
                            ruleId = _RuleFactory.getCompiledRuleId(repository[pattern.include], helper, repository);
                            break;
                        case 2 /* RelativeReference */ :
                            let localIncludedRule = repository[reference.ruleName];
                            if (localIncludedRule) {
                                ruleId = _RuleFactory.getCompiledRuleId(localIncludedRule, helper, repository);
                            } else {}
                            break;
                        case 3 /* TopLevelReference */ :
                        case 4 /* TopLevelRepositoryReference */ :
                            const externalGrammarName = reference.scopeName;
                            const externalGrammarInclude = reference.kind === 4 /* TopLevelRepositoryReference */  ? reference.ruleName : null;
                            const externalGrammar = helper.getExternalGrammar(externalGrammarName, repository);
                            if (externalGrammar) {
                                if (externalGrammarInclude) {
                                    let externalIncludedRule = externalGrammar.repository[externalGrammarInclude];
                                    if (externalIncludedRule) {
                                        ruleId = _RuleFactory.getCompiledRuleId(externalIncludedRule, helper, externalGrammar.repository);
                                    } else {}
                                } else {
                                    ruleId = _RuleFactory.getCompiledRuleId(externalGrammar.repository.$self, helper, externalGrammar.repository);
                                }
                            } else {}
                            break;
                    }
                } else {
                    ruleId = _RuleFactory.getCompiledRuleId(pattern, helper, repository);
                }
                if (ruleId !== -1) {
                    const rule = helper.getRule(ruleId);
                    let skipRule = false;
                    if (rule instanceof IncludeOnlyRule || rule instanceof BeginEndRule || rule instanceof BeginWhileRule) {
                        if (rule.hasMissingPatterns && rule.patterns.length === 0) {
                            skipRule = true;
                        }
                    }
                    if (skipRule) {
                        continue;
                    }
                    r.push(ruleId);
                }
            }
        }
        return {
            patterns: r,
            hasMissingPatterns: (patterns ? patterns.length : 0) !== r.length
        };
    }
};
var RegExpSource = class _RegExpSource {
    source;
    ruleId;
    hasAnchor;
    hasBackReferences;
    _anchorCache;
    constructor(regExpSource, ruleId){
        if (regExpSource && typeof regExpSource === "string") {
            const len = regExpSource.length;
            let lastPushedPos = 0;
            let output = [];
            let hasAnchor = false;
            for(let pos = 0; pos < len; pos++){
                const ch = regExpSource.charAt(pos);
                if (ch === "\\") {
                    if (pos + 1 < len) {
                        const nextCh = regExpSource.charAt(pos + 1);
                        if (nextCh === "z") {
                            output.push(regExpSource.substring(lastPushedPos, pos));
                            output.push("$(?!\\n)(?<!\\n)");
                            lastPushedPos = pos + 2;
                        } else if (nextCh === "A" || nextCh === "G") {
                            hasAnchor = true;
                        }
                        pos++;
                    }
                }
            }
            this.hasAnchor = hasAnchor;
            if (lastPushedPos === 0) {
                this.source = regExpSource;
            } else {
                output.push(regExpSource.substring(lastPushedPos, len));
                this.source = output.join("");
            }
        } else {
            this.hasAnchor = false;
            this.source = regExpSource;
        }
        if (this.hasAnchor) {
            this._anchorCache = this._buildAnchorCache();
        } else {
            this._anchorCache = null;
        }
        this.ruleId = ruleId;
        if (typeof this.source === "string") {
            this.hasBackReferences = HAS_BACK_REFERENCES.test(this.source);
        } else {
            this.hasBackReferences = false;
        }
    }
    clone() {
        return new _RegExpSource(this.source, this.ruleId);
    }
    setSource(newSource) {
        if (this.source === newSource) {
            return;
        }
        this.source = newSource;
        if (this.hasAnchor) {
            this._anchorCache = this._buildAnchorCache();
        }
    }
    resolveBackReferences(lineText, captureIndices) {
        if (typeof this.source !== "string") {
            throw new Error("This method should only be called if the source is a string");
        }
        let capturedValues = captureIndices.map((capture)=>{
            return lineText.substring(capture.start, capture.end);
        });
        BACK_REFERENCING_END.lastIndex = 0;
        return this.source.replace(BACK_REFERENCING_END, (match, g1)=>{
            return escapeRegExpCharacters(capturedValues[parseInt(g1, 10)] || "");
        });
    }
    _buildAnchorCache() {
        if (typeof this.source !== "string") {
            throw new Error("This method should only be called if the source is a string");
        }
        let A0_G0_result = [];
        let A0_G1_result = [];
        let A1_G0_result = [];
        let A1_G1_result = [];
        let pos, len, ch, nextCh;
        for(pos = 0, len = this.source.length; pos < len; pos++){
            ch = this.source.charAt(pos);
            A0_G0_result[pos] = ch;
            A0_G1_result[pos] = ch;
            A1_G0_result[pos] = ch;
            A1_G1_result[pos] = ch;
            if (ch === "\\") {
                if (pos + 1 < len) {
                    nextCh = this.source.charAt(pos + 1);
                    if (nextCh === "A") {
                        A0_G0_result[pos + 1] = "\uFFFF";
                        A0_G1_result[pos + 1] = "\uFFFF";
                        A1_G0_result[pos + 1] = "A";
                        A1_G1_result[pos + 1] = "A";
                    } else if (nextCh === "G") {
                        A0_G0_result[pos + 1] = "\uFFFF";
                        A0_G1_result[pos + 1] = "G";
                        A1_G0_result[pos + 1] = "\uFFFF";
                        A1_G1_result[pos + 1] = "G";
                    } else {
                        A0_G0_result[pos + 1] = nextCh;
                        A0_G1_result[pos + 1] = nextCh;
                        A1_G0_result[pos + 1] = nextCh;
                        A1_G1_result[pos + 1] = nextCh;
                    }
                    pos++;
                }
            }
        }
        return {
            A0_G0: A0_G0_result.join(""),
            A0_G1: A0_G1_result.join(""),
            A1_G0: A1_G0_result.join(""),
            A1_G1: A1_G1_result.join("")
        };
    }
    resolveAnchors(allowA, allowG) {
        if (!this.hasAnchor || !this._anchorCache || typeof this.source !== "string") {
            return this.source;
        }
        if (allowA) {
            if (allowG) {
                return this._anchorCache.A1_G1;
            } else {
                return this._anchorCache.A1_G0;
            }
        } else {
            if (allowG) {
                return this._anchorCache.A0_G1;
            } else {
                return this._anchorCache.A0_G0;
            }
        }
    }
};
var RegExpSourceList = class {
    _items;
    _hasAnchors;
    _cached;
    _anchorCache;
    constructor(){
        this._items = [];
        this._hasAnchors = false;
        this._cached = null;
        this._anchorCache = {
            A0_G0: null,
            A0_G1: null,
            A1_G0: null,
            A1_G1: null
        };
    }
    dispose() {
        this._disposeCaches();
    }
    _disposeCaches() {
        if (this._cached) {
            this._cached.dispose();
            this._cached = null;
        }
        if (this._anchorCache.A0_G0) {
            this._anchorCache.A0_G0.dispose();
            this._anchorCache.A0_G0 = null;
        }
        if (this._anchorCache.A0_G1) {
            this._anchorCache.A0_G1.dispose();
            this._anchorCache.A0_G1 = null;
        }
        if (this._anchorCache.A1_G0) {
            this._anchorCache.A1_G0.dispose();
            this._anchorCache.A1_G0 = null;
        }
        if (this._anchorCache.A1_G1) {
            this._anchorCache.A1_G1.dispose();
            this._anchorCache.A1_G1 = null;
        }
    }
    push(item) {
        this._items.push(item);
        this._hasAnchors = this._hasAnchors || item.hasAnchor;
    }
    unshift(item) {
        this._items.unshift(item);
        this._hasAnchors = this._hasAnchors || item.hasAnchor;
    }
    length() {
        return this._items.length;
    }
    setSource(index, newSource) {
        if (this._items[index].source !== newSource) {
            this._disposeCaches();
            this._items[index].setSource(newSource);
        }
    }
    compile(onigLib) {
        if (!this._cached) {
            let regExps = this._items.map((e)=>e.source);
            this._cached = new CompiledRule(onigLib, regExps, this._items.map((e)=>e.ruleId));
        }
        return this._cached;
    }
    compileAG(onigLib, allowA, allowG) {
        if (!this._hasAnchors) {
            return this.compile(onigLib);
        } else {
            if (allowA) {
                if (allowG) {
                    if (!this._anchorCache.A1_G1) {
                        this._anchorCache.A1_G1 = this._resolveAnchors(onigLib, allowA, allowG);
                    }
                    return this._anchorCache.A1_G1;
                } else {
                    if (!this._anchorCache.A1_G0) {
                        this._anchorCache.A1_G0 = this._resolveAnchors(onigLib, allowA, allowG);
                    }
                    return this._anchorCache.A1_G0;
                }
            } else {
                if (allowG) {
                    if (!this._anchorCache.A0_G1) {
                        this._anchorCache.A0_G1 = this._resolveAnchors(onigLib, allowA, allowG);
                    }
                    return this._anchorCache.A0_G1;
                } else {
                    if (!this._anchorCache.A0_G0) {
                        this._anchorCache.A0_G0 = this._resolveAnchors(onigLib, allowA, allowG);
                    }
                    return this._anchorCache.A0_G0;
                }
            }
        }
    }
    _resolveAnchors(onigLib, allowA, allowG) {
        let regExps = this._items.map((e)=>e.resolveAnchors(allowA, allowG));
        return new CompiledRule(onigLib, regExps, this._items.map((e)=>e.ruleId));
    }
};
var CompiledRule = class {
    constructor(onigLib, regExps, rules){
        this.regExps = regExps;
        this.rules = rules;
        this.scanner = onigLib.createOnigScanner(regExps);
    }
    scanner;
    dispose() {
        if (typeof this.scanner.dispose === "function") {
            this.scanner.dispose();
        }
    }
    toString() {
        const r = [];
        for(let i = 0, len = this.rules.length; i < len; i++){
            r.push("   - " + this.rules[i] + ": " + this.regExps[i]);
        }
        return r.join("\n");
    }
    findNextMatchSync(string, startPosition, options) {
        const result = this.scanner.findNextMatchSync(string, startPosition, options);
        if (!result) {
            return null;
        }
        return {
            ruleId: this.rules[result.index],
            captureIndices: result.captureIndices
        };
    }
};
// src/grammar/basicScopesAttributeProvider.ts
var BasicScopeAttributes = class {
    constructor(languageId, tokenType){
        this.languageId = languageId;
        this.tokenType = tokenType;
    }
};
var BasicScopeAttributesProvider = class _BasicScopeAttributesProvider {
    _defaultAttributes;
    _embeddedLanguagesMatcher;
    constructor(initialLanguageId, embeddedLanguages){
        this._defaultAttributes = new BasicScopeAttributes(initialLanguageId, 8 /* NotSet */ );
        this._embeddedLanguagesMatcher = new ScopeMatcher(Object.entries(embeddedLanguages || {}));
    }
    getDefaultAttributes() {
        return this._defaultAttributes;
    }
    getBasicScopeAttributes(scopeName) {
        if (scopeName === null) {
            return _BasicScopeAttributesProvider._NULL_SCOPE_METADATA;
        }
        return this._getBasicScopeAttributes.get(scopeName);
    }
    static _NULL_SCOPE_METADATA = new BasicScopeAttributes(0, 0);
    _getBasicScopeAttributes = new CachedFn((scopeName)=>{
        const languageId = this._scopeToLanguage(scopeName);
        const standardTokenType = this._toStandardTokenType(scopeName);
        return new BasicScopeAttributes(languageId, standardTokenType);
    });
    /**
   * Given a produced TM scope, return the language that token describes or null if unknown.
   * e.g. source.html => html, source.css.embedded.html => css, punctuation.definition.tag.html => null
   */ _scopeToLanguage(scope) {
        return this._embeddedLanguagesMatcher.match(scope) || 0;
    }
    _toStandardTokenType(scopeName) {
        const m = scopeName.match(_BasicScopeAttributesProvider.STANDARD_TOKEN_TYPE_REGEXP);
        if (!m) {
            return 8 /* NotSet */ ;
        }
        switch(m[1]){
            case "comment":
                return 1 /* Comment */ ;
            case "string":
                return 2 /* String */ ;
            case "regex":
                return 3 /* RegEx */ ;
            case "meta.embedded":
                return 0 /* Other */ ;
        }
        throw new Error("Unexpected match for standard token type!");
    }
    static STANDARD_TOKEN_TYPE_REGEXP = /\b(comment|string|regex|meta\.embedded)\b/;
};
var ScopeMatcher = class {
    values;
    scopesRegExp;
    constructor(values){
        if (values.length === 0) {
            this.values = null;
            this.scopesRegExp = null;
        } else {
            this.values = new Map(values);
            const escapedScopes = values.map(([scopeName, value])=>escapeRegExpCharacters(scopeName));
            escapedScopes.sort();
            escapedScopes.reverse();
            this.scopesRegExp = new RegExp(`^((${escapedScopes.join(")|(")}))($|\\.)`, "");
        }
    }
    match(scope) {
        if (!this.scopesRegExp) {
            return void 0;
        }
        const m = scope.match(this.scopesRegExp);
        if (!m) {
            return void 0;
        }
        return this.values.get(m[1]);
    }
};
// src/debug.ts
var DebugFlags = {
    InDebugMode: typeof __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && !!__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env["VSCODE_TEXTMATE_DEBUG"]
};
var UseOnigurumaFindOptions = false;
// src/grammar/tokenizeString.ts
var TokenizeStringResult = class {
    constructor(stack, stoppedEarly){
        this.stack = stack;
        this.stoppedEarly = stoppedEarly;
    }
};
function _tokenizeString(grammar, lineText, isFirstLine, linePos, stack, lineTokens, checkWhileConditions, timeLimit) {
    const lineLength = lineText.content.length;
    let STOP = false;
    let anchorPosition = -1;
    if (checkWhileConditions) {
        const whileCheckResult = _checkWhileConditions(grammar, lineText, isFirstLine, linePos, stack, lineTokens);
        stack = whileCheckResult.stack;
        linePos = whileCheckResult.linePos;
        isFirstLine = whileCheckResult.isFirstLine;
        anchorPosition = whileCheckResult.anchorPosition;
    }
    const startTime = Date.now();
    while(!STOP){
        if (timeLimit !== 0) {
            const elapsedTime = Date.now() - startTime;
            if (elapsedTime > timeLimit) {
                return new TokenizeStringResult(stack, true);
            }
        }
        scanNext();
    }
    return new TokenizeStringResult(stack, false);
    //TURBOPACK unreachable
    ;
    function scanNext() {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const r = matchRuleOrInjections(grammar, lineText, isFirstLine, linePos, stack, anchorPosition);
        if (!r) {
            lineTokens.produce(stack, lineLength);
            STOP = true;
            return;
        }
        const captureIndices = r.captureIndices;
        const matchedRuleId = r.matchedRuleId;
        const hasAdvanced = captureIndices && captureIndices.length > 0 ? captureIndices[0].end > linePos : false;
        if (matchedRuleId === endRuleId) {
            const poppedRule = stack.getRule(grammar);
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            lineTokens.produce(stack, captureIndices[0].start);
            stack = stack.withContentNameScopesList(stack.nameScopesList);
            handleCaptures(grammar, lineText, isFirstLine, stack, lineTokens, poppedRule.endCaptures, captureIndices);
            lineTokens.produce(stack, captureIndices[0].end);
            const popped = stack;
            stack = stack.parent;
            anchorPosition = popped.getAnchorPos();
            if (!hasAdvanced && popped.getEnterPos() === linePos) {
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                stack = popped;
                lineTokens.produce(stack, lineLength);
                STOP = true;
                return;
            }
        } else {
            const _rule = grammar.getRule(matchedRuleId);
            lineTokens.produce(stack, captureIndices[0].start);
            const beforePush = stack;
            const scopeName = _rule.getName(lineText.content, captureIndices);
            const nameScopesList = stack.contentNameScopesList.pushAttributed(scopeName, grammar);
            stack = stack.push(matchedRuleId, linePos, anchorPosition, captureIndices[0].end === lineLength, null, nameScopesList, nameScopesList);
            if (_rule instanceof BeginEndRule) {
                const pushedRule = _rule;
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                handleCaptures(grammar, lineText, isFirstLine, stack, lineTokens, pushedRule.beginCaptures, captureIndices);
                lineTokens.produce(stack, captureIndices[0].end);
                anchorPosition = captureIndices[0].end;
                const contentName = pushedRule.getContentName(lineText.content, captureIndices);
                const contentNameScopesList = nameScopesList.pushAttributed(contentName, grammar);
                stack = stack.withContentNameScopesList(contentNameScopesList);
                if (pushedRule.endHasBackReferences) {
                    stack = stack.withEndRule(pushedRule.getEndWithResolvedBackReferences(lineText.content, captureIndices));
                }
                if (!hasAdvanced && beforePush.hasSameRuleAs(stack)) {
                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                    ;
                    stack = stack.pop();
                    lineTokens.produce(stack, lineLength);
                    STOP = true;
                    return;
                }
            } else if (_rule instanceof BeginWhileRule) {
                const pushedRule = _rule;
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                handleCaptures(grammar, lineText, isFirstLine, stack, lineTokens, pushedRule.beginCaptures, captureIndices);
                lineTokens.produce(stack, captureIndices[0].end);
                anchorPosition = captureIndices[0].end;
                const contentName = pushedRule.getContentName(lineText.content, captureIndices);
                const contentNameScopesList = nameScopesList.pushAttributed(contentName, grammar);
                stack = stack.withContentNameScopesList(contentNameScopesList);
                if (pushedRule.whileHasBackReferences) {
                    stack = stack.withEndRule(pushedRule.getWhileWithResolvedBackReferences(lineText.content, captureIndices));
                }
                if (!hasAdvanced && beforePush.hasSameRuleAs(stack)) {
                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                    ;
                    stack = stack.pop();
                    lineTokens.produce(stack, lineLength);
                    STOP = true;
                    return;
                }
            } else {
                const matchingRule = _rule;
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                handleCaptures(grammar, lineText, isFirstLine, stack, lineTokens, matchingRule.captures, captureIndices);
                lineTokens.produce(stack, captureIndices[0].end);
                stack = stack.pop();
                if (!hasAdvanced) {
                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                    ;
                    stack = stack.safePop();
                    lineTokens.produce(stack, lineLength);
                    STOP = true;
                    return;
                }
            }
        }
        if (captureIndices[0].end > linePos) {
            linePos = captureIndices[0].end;
            isFirstLine = false;
        }
    }
}
function _checkWhileConditions(grammar, lineText, isFirstLine, linePos, stack, lineTokens) {
    let anchorPosition = stack.beginRuleCapturedEOL ? 0 : -1;
    const whileRules = [];
    for(let node = stack; node; node = node.pop()){
        const nodeRule = node.getRule(grammar);
        if (nodeRule instanceof BeginWhileRule) {
            whileRules.push({
                rule: nodeRule,
                stack: node
            });
        }
    }
    for(let whileRule = whileRules.pop(); whileRule; whileRule = whileRules.pop()){
        const { ruleScanner, findOptions } = prepareRuleWhileSearch(whileRule.rule, grammar, whileRule.stack.endRule, isFirstLine, linePos === anchorPosition);
        const r = ruleScanner.findNextMatchSync(lineText, linePos, findOptions);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if (r) {
            const matchedRuleId = r.ruleId;
            if (matchedRuleId !== whileRuleId) {
                stack = whileRule.stack.pop();
                break;
            }
            if (r.captureIndices && r.captureIndices.length) {
                lineTokens.produce(whileRule.stack, r.captureIndices[0].start);
                handleCaptures(grammar, lineText, isFirstLine, whileRule.stack, lineTokens, whileRule.rule.whileCaptures, r.captureIndices);
                lineTokens.produce(whileRule.stack, r.captureIndices[0].end);
                anchorPosition = r.captureIndices[0].end;
                if (r.captureIndices[0].end > linePos) {
                    linePos = r.captureIndices[0].end;
                    isFirstLine = false;
                }
            }
        } else {
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            stack = whileRule.stack.pop();
            break;
        }
    }
    return {
        stack,
        linePos,
        anchorPosition,
        isFirstLine
    };
}
function matchRuleOrInjections(grammar, lineText, isFirstLine, linePos, stack, anchorPosition) {
    const matchResult = matchRule(grammar, lineText, isFirstLine, linePos, stack, anchorPosition);
    const injections = grammar.getInjections();
    if (injections.length === 0) {
        return matchResult;
    }
    const injectionResult = matchInjections(injections, grammar, lineText, isFirstLine, linePos, stack, anchorPosition);
    if (!injectionResult) {
        return matchResult;
    }
    if (!matchResult) {
        return injectionResult;
    }
    const matchResultScore = matchResult.captureIndices[0].start;
    const injectionResultScore = injectionResult.captureIndices[0].start;
    if (injectionResultScore < matchResultScore || injectionResult.priorityMatch && injectionResultScore === matchResultScore) {
        return injectionResult;
    }
    return matchResult;
}
function matchRule(grammar, lineText, isFirstLine, linePos, stack, anchorPosition) {
    const rule = stack.getRule(grammar);
    const { ruleScanner, findOptions } = prepareRuleSearch(rule, grammar, stack.endRule, isFirstLine, linePos === anchorPosition);
    const r = ruleScanner.findNextMatchSync(lineText, linePos, findOptions);
    if (r) {
        return {
            captureIndices: r.captureIndices,
            matchedRuleId: r.ruleId
        };
    }
    return null;
}
function matchInjections(injections, grammar, lineText, isFirstLine, linePos, stack, anchorPosition) {
    let bestMatchRating = Number.MAX_VALUE;
    let bestMatchCaptureIndices = null;
    let bestMatchRuleId;
    let bestMatchResultPriority = 0;
    const scopes = stack.contentNameScopesList.getScopeNames();
    for(let i = 0, len = injections.length; i < len; i++){
        const injection = injections[i];
        if (!injection.matcher(scopes)) {
            continue;
        }
        const rule = grammar.getRule(injection.ruleId);
        const { ruleScanner, findOptions } = prepareRuleSearch(rule, grammar, null, isFirstLine, linePos === anchorPosition);
        const matchResult = ruleScanner.findNextMatchSync(lineText, linePos, findOptions);
        if (!matchResult) {
            continue;
        }
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const matchRating = matchResult.captureIndices[0].start;
        if (matchRating >= bestMatchRating) {
            continue;
        }
        bestMatchRating = matchRating;
        bestMatchCaptureIndices = matchResult.captureIndices;
        bestMatchRuleId = matchResult.ruleId;
        bestMatchResultPriority = injection.priority;
        if (bestMatchRating === linePos) {
            break;
        }
    }
    if (bestMatchCaptureIndices) {
        return {
            priorityMatch: bestMatchResultPriority === -1,
            captureIndices: bestMatchCaptureIndices,
            matchedRuleId: bestMatchRuleId
        };
    }
    return null;
}
function prepareRuleSearch(rule, grammar, endRegexSource, allowA, allowG) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const ruleScanner = rule.compileAG(grammar, endRegexSource, allowA, allowG);
    return {
        ruleScanner,
        findOptions: 0 /* None */ 
    };
}
function prepareRuleWhileSearch(rule, grammar, endRegexSource, allowA, allowG) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const ruleScanner = rule.compileWhileAG(grammar, endRegexSource, allowA, allowG);
    return {
        ruleScanner,
        findOptions: 0 /* None */ 
    };
}
function getFindOptions(allowA, allowG) {
    let options = 0 /* None */ ;
    if (!allowA) {
        options |= 1 /* NotBeginString */ ;
    }
    if (!allowG) {
        options |= 4 /* NotBeginPosition */ ;
    }
    return options;
}
function handleCaptures(grammar, lineText, isFirstLine, stack, lineTokens, captures, captureIndices) {
    if (captures.length === 0) {
        return;
    }
    const lineTextContent = lineText.content;
    const len = Math.min(captures.length, captureIndices.length);
    const localStack = [];
    const maxEnd = captureIndices[0].end;
    for(let i = 0; i < len; i++){
        const captureRule = captures[i];
        if (captureRule === null) {
            continue;
        }
        const captureIndex = captureIndices[i];
        if (captureIndex.length === 0) {
            continue;
        }
        if (captureIndex.start > maxEnd) {
            break;
        }
        while(localStack.length > 0 && localStack[localStack.length - 1].endPos <= captureIndex.start){
            lineTokens.produceFromScopes(localStack[localStack.length - 1].scopes, localStack[localStack.length - 1].endPos);
            localStack.pop();
        }
        if (localStack.length > 0) {
            lineTokens.produceFromScopes(localStack[localStack.length - 1].scopes, captureIndex.start);
        } else {
            lineTokens.produce(stack, captureIndex.start);
        }
        if (captureRule.retokenizeCapturedWithRuleId) {
            const scopeName = captureRule.getName(lineTextContent, captureIndices);
            const nameScopesList = stack.contentNameScopesList.pushAttributed(scopeName, grammar);
            const contentName = captureRule.getContentName(lineTextContent, captureIndices);
            const contentNameScopesList = nameScopesList.pushAttributed(contentName, grammar);
            const stackClone = stack.push(captureRule.retokenizeCapturedWithRuleId, captureIndex.start, -1, false, null, nameScopesList, contentNameScopesList);
            const onigSubStr = grammar.createOnigString(lineTextContent.substring(0, captureIndex.end));
            _tokenizeString(grammar, onigSubStr, isFirstLine && captureIndex.start === 0, captureIndex.start, stackClone, lineTokens, false, /* no time limit */ 0);
            disposeOnigString(onigSubStr);
            continue;
        }
        const captureRuleScopeName = captureRule.getName(lineTextContent, captureIndices);
        if (captureRuleScopeName !== null) {
            const base = localStack.length > 0 ? localStack[localStack.length - 1].scopes : stack.contentNameScopesList;
            const captureRuleScopesList = base.pushAttributed(captureRuleScopeName, grammar);
            localStack.push(new LocalStackElement(captureRuleScopesList, captureIndex.end));
        }
    }
    while(localStack.length > 0){
        lineTokens.produceFromScopes(localStack[localStack.length - 1].scopes, localStack[localStack.length - 1].endPos);
        localStack.pop();
    }
}
var LocalStackElement = class {
    scopes;
    endPos;
    constructor(scopes, endPos){
        this.scopes = scopes;
        this.endPos = endPos;
    }
};
// src/grammar/grammar.ts
function createGrammar(scopeName, grammar, initialLanguage, embeddedLanguages, tokenTypes, balancedBracketSelectors, grammarRepository, onigLib) {
    return new Grammar(scopeName, grammar, initialLanguage, embeddedLanguages, tokenTypes, balancedBracketSelectors, grammarRepository, onigLib);
}
function collectInjections(result, selector, rule, ruleFactoryHelper, grammar) {
    const matchers = createMatchers(selector, nameMatcher);
    const ruleId = RuleFactory.getCompiledRuleId(rule, ruleFactoryHelper, grammar.repository);
    for (const matcher of matchers){
        result.push({
            debugSelector: selector,
            matcher: matcher.matcher,
            ruleId,
            grammar,
            priority: matcher.priority
        });
    }
}
function nameMatcher(identifers, scopes) {
    if (scopes.length < identifers.length) {
        return false;
    }
    let lastIndex = 0;
    return identifers.every((identifier)=>{
        for(let i = lastIndex; i < scopes.length; i++){
            if (scopesAreMatching(scopes[i], identifier)) {
                lastIndex = i + 1;
                return true;
            }
        }
        return false;
    });
}
function scopesAreMatching(thisScopeName, scopeName) {
    if (!thisScopeName) {
        return false;
    }
    if (thisScopeName === scopeName) {
        return true;
    }
    const len = scopeName.length;
    return thisScopeName.length > len && thisScopeName.substr(0, len) === scopeName && thisScopeName[len] === ".";
}
var Grammar = class {
    constructor(_rootScopeName, grammar, initialLanguage, embeddedLanguages, tokenTypes, balancedBracketSelectors, grammarRepository, _onigLib){
        this._rootScopeName = _rootScopeName;
        this.balancedBracketSelectors = balancedBracketSelectors;
        this._onigLib = _onigLib;
        this._basicScopeAttributesProvider = new BasicScopeAttributesProvider(initialLanguage, embeddedLanguages);
        this._rootId = -1;
        this._lastRuleId = 0;
        this._ruleId2desc = [
            null
        ];
        this._includedGrammars = {};
        this._grammarRepository = grammarRepository;
        this._grammar = initGrammar(grammar, null);
        this._injections = null;
        this._tokenTypeMatchers = [];
        if (tokenTypes) {
            for (const selector of Object.keys(tokenTypes)){
                const matchers = createMatchers(selector, nameMatcher);
                for (const matcher of matchers){
                    this._tokenTypeMatchers.push({
                        matcher: matcher.matcher,
                        type: tokenTypes[selector]
                    });
                }
            }
        }
    }
    _rootId;
    _lastRuleId;
    _ruleId2desc;
    _includedGrammars;
    _grammarRepository;
    _grammar;
    _injections;
    _basicScopeAttributesProvider;
    _tokenTypeMatchers;
    get themeProvider() {
        return this._grammarRepository;
    }
    dispose() {
        for (const rule of this._ruleId2desc){
            if (rule) {
                rule.dispose();
            }
        }
    }
    createOnigScanner(sources) {
        return this._onigLib.createOnigScanner(sources);
    }
    createOnigString(sources) {
        return this._onigLib.createOnigString(sources);
    }
    getMetadataForScope(scope) {
        return this._basicScopeAttributesProvider.getBasicScopeAttributes(scope);
    }
    _collectInjections() {
        const grammarRepository = {
            lookup: (scopeName2)=>{
                if (scopeName2 === this._rootScopeName) {
                    return this._grammar;
                }
                return this.getExternalGrammar(scopeName2);
            },
            injections: (scopeName2)=>{
                return this._grammarRepository.injections(scopeName2);
            }
        };
        const result = [];
        const scopeName = this._rootScopeName;
        const grammar = grammarRepository.lookup(scopeName);
        if (grammar) {
            const rawInjections = grammar.injections;
            if (rawInjections) {
                for(let expression in rawInjections){
                    collectInjections(result, expression, rawInjections[expression], this, grammar);
                }
            }
            const injectionScopeNames = this._grammarRepository.injections(scopeName);
            if (injectionScopeNames) {
                injectionScopeNames.forEach((injectionScopeName)=>{
                    const injectionGrammar = this.getExternalGrammar(injectionScopeName);
                    if (injectionGrammar) {
                        const selector = injectionGrammar.injectionSelector;
                        if (selector) {
                            collectInjections(result, selector, injectionGrammar, this, injectionGrammar);
                        }
                    }
                });
            }
        }
        result.sort((i1, i2)=>i1.priority - i2.priority);
        return result;
    }
    getInjections() {
        if (this._injections === null) {
            this._injections = this._collectInjections();
        }
        return this._injections;
    }
    registerRule(factory) {
        const id = ++this._lastRuleId;
        const result = factory(ruleIdFromNumber(id));
        this._ruleId2desc[id] = result;
        return result;
    }
    getRule(ruleId) {
        return this._ruleId2desc[ruleIdToNumber(ruleId)];
    }
    getExternalGrammar(scopeName, repository) {
        if (this._includedGrammars[scopeName]) {
            return this._includedGrammars[scopeName];
        } else if (this._grammarRepository) {
            const rawIncludedGrammar = this._grammarRepository.lookup(scopeName);
            if (rawIncludedGrammar) {
                this._includedGrammars[scopeName] = initGrammar(rawIncludedGrammar, repository && repository.$base);
                return this._includedGrammars[scopeName];
            }
        }
        return void 0;
    }
    tokenizeLine(lineText, prevState, timeLimit = 0) {
        const r = this._tokenize(lineText, prevState, false, timeLimit);
        return {
            tokens: r.lineTokens.getResult(r.ruleStack, r.lineLength),
            ruleStack: r.ruleStack,
            stoppedEarly: r.stoppedEarly
        };
    }
    tokenizeLine2(lineText, prevState, timeLimit = 0) {
        const r = this._tokenize(lineText, prevState, true, timeLimit);
        return {
            tokens: r.lineTokens.getBinaryResult(r.ruleStack, r.lineLength),
            ruleStack: r.ruleStack,
            stoppedEarly: r.stoppedEarly
        };
    }
    _tokenize(lineText, prevState, emitBinaryTokens, timeLimit) {
        if (this._rootId === -1) {
            this._rootId = RuleFactory.getCompiledRuleId(this._grammar.repository.$self, this, this._grammar.repository);
            this.getInjections();
        }
        let isFirstLine;
        if (!prevState || prevState === StateStackImpl.NULL) {
            isFirstLine = true;
            const rawDefaultMetadata = this._basicScopeAttributesProvider.getDefaultAttributes();
            const defaultStyle = this.themeProvider.getDefaults();
            const defaultMetadata = EncodedTokenMetadata.set(0, rawDefaultMetadata.languageId, rawDefaultMetadata.tokenType, null, defaultStyle.fontStyle, defaultStyle.foregroundId, defaultStyle.backgroundId);
            const rootScopeName = this.getRule(this._rootId).getName(null, null);
            let scopeList;
            if (rootScopeName) {
                scopeList = AttributedScopeStack.createRootAndLookUpScopeName(rootScopeName, defaultMetadata, this);
            } else {
                scopeList = AttributedScopeStack.createRoot("unknown", defaultMetadata);
            }
            prevState = new StateStackImpl(null, this._rootId, -1, -1, false, null, scopeList, scopeList);
        } else {
            isFirstLine = false;
            prevState.reset();
        }
        lineText = lineText + "\n";
        const onigLineText = this.createOnigString(lineText);
        const lineLength = onigLineText.content.length;
        const lineTokens = new LineTokens(emitBinaryTokens, lineText, this._tokenTypeMatchers, this.balancedBracketSelectors);
        const r = _tokenizeString(this, onigLineText, isFirstLine, 0, prevState, lineTokens, true, timeLimit);
        disposeOnigString(onigLineText);
        return {
            lineLength,
            lineTokens,
            ruleStack: r.stack,
            stoppedEarly: r.stoppedEarly
        };
    }
};
function initGrammar(grammar, base) {
    grammar = clone(grammar);
    grammar.repository = grammar.repository || {};
    grammar.repository.$self = {
        $vscodeTextmateLocation: grammar.$vscodeTextmateLocation,
        patterns: grammar.patterns,
        name: grammar.scopeName
    };
    grammar.repository.$base = base || grammar.repository.$self;
    return grammar;
}
var AttributedScopeStack = class _AttributedScopeStack {
    /**
   * Invariant:
   * ```
   * if (parent && !scopePath.extends(parent.scopePath)) {
   * 	throw new Error();
   * }
   * ```
   */ constructor(parent, scopePath, tokenAttributes){
        this.parent = parent;
        this.scopePath = scopePath;
        this.tokenAttributes = tokenAttributes;
    }
    static fromExtension(namesScopeList, contentNameScopesList) {
        let current = namesScopeList;
        let scopeNames = namesScopeList?.scopePath ?? null;
        for (const frame of contentNameScopesList){
            scopeNames = ScopeStack.push(scopeNames, frame.scopeNames);
            current = new _AttributedScopeStack(current, scopeNames, frame.encodedTokenAttributes);
        }
        return current;
    }
    static createRoot(scopeName, tokenAttributes) {
        return new _AttributedScopeStack(null, new ScopeStack(null, scopeName), tokenAttributes);
    }
    static createRootAndLookUpScopeName(scopeName, tokenAttributes, grammar) {
        const rawRootMetadata = grammar.getMetadataForScope(scopeName);
        const scopePath = new ScopeStack(null, scopeName);
        const rootStyle = grammar.themeProvider.themeMatch(scopePath);
        const resolvedTokenAttributes = _AttributedScopeStack.mergeAttributes(tokenAttributes, rawRootMetadata, rootStyle);
        return new _AttributedScopeStack(null, scopePath, resolvedTokenAttributes);
    }
    get scopeName() {
        return this.scopePath.scopeName;
    }
    toString() {
        return this.getScopeNames().join(" ");
    }
    equals(other) {
        return _AttributedScopeStack.equals(this, other);
    }
    static equals(a, b) {
        do {
            if (a === b) {
                return true;
            }
            if (!a && !b) {
                return true;
            }
            if (!a || !b) {
                return false;
            }
            if (a.scopeName !== b.scopeName || a.tokenAttributes !== b.tokenAttributes) {
                return false;
            }
            a = a.parent;
            b = b.parent;
        }while (true)
    }
    static mergeAttributes(existingTokenAttributes, basicScopeAttributes, styleAttributes) {
        let fontStyle = -1 /* NotSet */ ;
        let foreground = 0;
        let background = 0;
        if (styleAttributes !== null) {
            fontStyle = styleAttributes.fontStyle;
            foreground = styleAttributes.foregroundId;
            background = styleAttributes.backgroundId;
        }
        return EncodedTokenMetadata.set(existingTokenAttributes, basicScopeAttributes.languageId, basicScopeAttributes.tokenType, null, fontStyle, foreground, background);
    }
    pushAttributed(scopePath, grammar) {
        if (scopePath === null) {
            return this;
        }
        if (scopePath.indexOf(" ") === -1) {
            return _AttributedScopeStack._pushAttributed(this, scopePath, grammar);
        }
        const scopes = scopePath.split(/ /g);
        let result = this;
        for (const scope of scopes){
            result = _AttributedScopeStack._pushAttributed(result, scope, grammar);
        }
        return result;
    }
    static _pushAttributed(target, scopeName, grammar) {
        const rawMetadata = grammar.getMetadataForScope(scopeName);
        const newPath = target.scopePath.push(scopeName);
        const scopeThemeMatchResult = grammar.themeProvider.themeMatch(newPath);
        const metadata = _AttributedScopeStack.mergeAttributes(target.tokenAttributes, rawMetadata, scopeThemeMatchResult);
        return new _AttributedScopeStack(target, newPath, metadata);
    }
    getScopeNames() {
        return this.scopePath.getSegments();
    }
    getExtensionIfDefined(base) {
        const result = [];
        let self = this;
        while(self && self !== base){
            result.push({
                encodedTokenAttributes: self.tokenAttributes,
                scopeNames: self.scopePath.getExtensionIfDefined(self.parent?.scopePath ?? null)
            });
            self = self.parent;
        }
        return self === base ? result.reverse() : void 0;
    }
};
var StateStackImpl = class _StateStackImpl {
    /**
   * Invariant:
   * ```
   * if (contentNameScopesList !== nameScopesList && contentNameScopesList?.parent !== nameScopesList) {
   * 	throw new Error();
   * }
   * if (this.parent && !nameScopesList.extends(this.parent.contentNameScopesList)) {
   * 	throw new Error();
   * }
   * ```
   */ constructor(parent, ruleId, enterPos, anchorPos, beginRuleCapturedEOL, endRule, nameScopesList, contentNameScopesList){
        this.parent = parent;
        this.ruleId = ruleId;
        this.beginRuleCapturedEOL = beginRuleCapturedEOL;
        this.endRule = endRule;
        this.nameScopesList = nameScopesList;
        this.contentNameScopesList = contentNameScopesList;
        this.depth = this.parent ? this.parent.depth + 1 : 1;
        this._enterPos = enterPos;
        this._anchorPos = anchorPos;
    }
    _stackElementBrand = void 0;
    // TODO remove me
    static NULL = new _StateStackImpl(null, 0, 0, 0, false, null, null, null);
    /**
   * The position on the current line where this state was pushed.
   * This is relevant only while tokenizing a line, to detect endless loops.
   * Its value is meaningless across lines.
   */ _enterPos;
    /**
   * The captured anchor position when this stack element was pushed.
   * This is relevant only while tokenizing a line, to restore the anchor position when popping.
   * Its value is meaningless across lines.
   */ _anchorPos;
    /**
   * The depth of the stack.
   */ depth;
    equals(other) {
        if (other === null) {
            return false;
        }
        return _StateStackImpl._equals(this, other);
    }
    static _equals(a, b) {
        if (a === b) {
            return true;
        }
        if (!this._structuralEquals(a, b)) {
            return false;
        }
        return AttributedScopeStack.equals(a.contentNameScopesList, b.contentNameScopesList);
    }
    /**
   * A structural equals check. Does not take into account `scopes`.
   */ static _structuralEquals(a, b) {
        do {
            if (a === b) {
                return true;
            }
            if (!a && !b) {
                return true;
            }
            if (!a || !b) {
                return false;
            }
            if (a.depth !== b.depth || a.ruleId !== b.ruleId || a.endRule !== b.endRule) {
                return false;
            }
            a = a.parent;
            b = b.parent;
        }while (true)
    }
    clone() {
        return this;
    }
    static _reset(el) {
        while(el){
            el._enterPos = -1;
            el._anchorPos = -1;
            el = el.parent;
        }
    }
    reset() {
        _StateStackImpl._reset(this);
    }
    pop() {
        return this.parent;
    }
    safePop() {
        if (this.parent) {
            return this.parent;
        }
        return this;
    }
    push(ruleId, enterPos, anchorPos, beginRuleCapturedEOL, endRule, nameScopesList, contentNameScopesList) {
        return new _StateStackImpl(this, ruleId, enterPos, anchorPos, beginRuleCapturedEOL, endRule, nameScopesList, contentNameScopesList);
    }
    getEnterPos() {
        return this._enterPos;
    }
    getAnchorPos() {
        return this._anchorPos;
    }
    getRule(grammar) {
        return grammar.getRule(this.ruleId);
    }
    toString() {
        const r = [];
        this._writeString(r, 0);
        return "[" + r.join(",") + "]";
    }
    _writeString(res, outIndex) {
        if (this.parent) {
            outIndex = this.parent._writeString(res, outIndex);
        }
        res[outIndex++] = `(${this.ruleId}, ${this.nameScopesList?.toString()}, ${this.contentNameScopesList?.toString()})`;
        return outIndex;
    }
    withContentNameScopesList(contentNameScopeStack) {
        if (this.contentNameScopesList === contentNameScopeStack) {
            return this;
        }
        return this.parent.push(this.ruleId, this._enterPos, this._anchorPos, this.beginRuleCapturedEOL, this.endRule, this.nameScopesList, contentNameScopeStack);
    }
    withEndRule(endRule) {
        if (this.endRule === endRule) {
            return this;
        }
        return new _StateStackImpl(this.parent, this.ruleId, this._enterPos, this._anchorPos, this.beginRuleCapturedEOL, endRule, this.nameScopesList, this.contentNameScopesList);
    }
    // Used to warn of endless loops
    hasSameRuleAs(other) {
        let el = this;
        while(el && el._enterPos === other._enterPos){
            if (el.ruleId === other.ruleId) {
                return true;
            }
            el = el.parent;
        }
        return false;
    }
    toStateStackFrame() {
        return {
            ruleId: ruleIdToNumber(this.ruleId),
            beginRuleCapturedEOL: this.beginRuleCapturedEOL,
            endRule: this.endRule,
            nameScopesList: this.nameScopesList?.getExtensionIfDefined(this.parent?.nameScopesList ?? null) ?? [],
            contentNameScopesList: this.contentNameScopesList?.getExtensionIfDefined(this.nameScopesList) ?? []
        };
    }
    static pushFrame(self, frame) {
        const namesScopeList = AttributedScopeStack.fromExtension(self?.nameScopesList ?? null, frame.nameScopesList);
        return new _StateStackImpl(self, ruleIdFromNumber(frame.ruleId), frame.enterPos ?? -1, frame.anchorPos ?? -1, frame.beginRuleCapturedEOL, frame.endRule, namesScopeList, AttributedScopeStack.fromExtension(namesScopeList, frame.contentNameScopesList));
    }
};
var BalancedBracketSelectors = class {
    balancedBracketScopes;
    unbalancedBracketScopes;
    allowAny = false;
    constructor(balancedBracketScopes, unbalancedBracketScopes){
        this.balancedBracketScopes = balancedBracketScopes.flatMap((selector)=>{
            if (selector === "*") {
                this.allowAny = true;
                return [];
            }
            return createMatchers(selector, nameMatcher).map((m)=>m.matcher);
        });
        this.unbalancedBracketScopes = unbalancedBracketScopes.flatMap((selector)=>createMatchers(selector, nameMatcher).map((m)=>m.matcher));
    }
    get matchesAlways() {
        return this.allowAny && this.unbalancedBracketScopes.length === 0;
    }
    get matchesNever() {
        return this.balancedBracketScopes.length === 0 && !this.allowAny;
    }
    match(scopes) {
        for (const excluder of this.unbalancedBracketScopes){
            if (excluder(scopes)) {
                return false;
            }
        }
        for (const includer of this.balancedBracketScopes){
            if (includer(scopes)) {
                return true;
            }
        }
        return this.allowAny;
    }
};
var LineTokens = class {
    constructor(emitBinaryTokens, lineText, tokenTypeOverrides, balancedBracketSelectors){
        this.balancedBracketSelectors = balancedBracketSelectors;
        this._emitBinaryTokens = emitBinaryTokens;
        this._tokenTypeOverrides = tokenTypeOverrides;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            this._lineText = null;
        }
        this._tokens = [];
        this._binaryTokens = [];
        this._lastTokenEndIndex = 0;
    }
    _emitBinaryTokens;
    /**
   * defined only if `false`.
   */ _lineText;
    /**
   * used only if `_emitBinaryTokens` is false.
   */ _tokens;
    /**
   * used only if `_emitBinaryTokens` is true.
   */ _binaryTokens;
    _lastTokenEndIndex;
    _tokenTypeOverrides;
    produce(stack, endIndex) {
        this.produceFromScopes(stack.contentNameScopesList, endIndex);
    }
    produceFromScopes(scopesList, endIndex) {
        if (this._lastTokenEndIndex >= endIndex) {
            return;
        }
        if (this._emitBinaryTokens) {
            let metadata = scopesList?.tokenAttributes ?? 0;
            let containsBalancedBrackets = false;
            if (this.balancedBracketSelectors?.matchesAlways) {
                containsBalancedBrackets = true;
            }
            if (this._tokenTypeOverrides.length > 0 || this.balancedBracketSelectors && !this.balancedBracketSelectors.matchesAlways && !this.balancedBracketSelectors.matchesNever) {
                const scopes2 = scopesList?.getScopeNames() ?? [];
                for (const tokenType of this._tokenTypeOverrides){
                    if (tokenType.matcher(scopes2)) {
                        metadata = EncodedTokenMetadata.set(metadata, 0, toOptionalTokenType(tokenType.type), null, -1 /* NotSet */ , 0, 0);
                    }
                }
                if (this.balancedBracketSelectors) {
                    containsBalancedBrackets = this.balancedBracketSelectors.match(scopes2);
                }
            }
            if (containsBalancedBrackets) {
                metadata = EncodedTokenMetadata.set(metadata, 0, 8 /* NotSet */ , containsBalancedBrackets, -1 /* NotSet */ , 0, 0);
            }
            if (this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 1] === metadata) {
                this._lastTokenEndIndex = endIndex;
                return;
            }
            this._binaryTokens.push(this._lastTokenEndIndex);
            this._binaryTokens.push(metadata);
            this._lastTokenEndIndex = endIndex;
            return;
        }
        const scopes = scopesList?.getScopeNames() ?? [];
        this._tokens.push({
            startIndex: this._lastTokenEndIndex,
            endIndex,
            // value: lineText.substring(lastTokenEndIndex, endIndex),
            scopes
        });
        this._lastTokenEndIndex = endIndex;
    }
    getResult(stack, lineLength) {
        if (this._tokens.length > 0 && this._tokens[this._tokens.length - 1].startIndex === lineLength - 1) {
            this._tokens.pop();
        }
        if (this._tokens.length === 0) {
            this._lastTokenEndIndex = -1;
            this.produce(stack, lineLength);
            this._tokens[this._tokens.length - 1].startIndex = 0;
        }
        return this._tokens;
    }
    getBinaryResult(stack, lineLength) {
        if (this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 2] === lineLength - 1) {
            this._binaryTokens.pop();
            this._binaryTokens.pop();
        }
        if (this._binaryTokens.length === 0) {
            this._lastTokenEndIndex = -1;
            this.produce(stack, lineLength);
            this._binaryTokens[this._binaryTokens.length - 2] = 0;
        }
        const result = new Uint32Array(this._binaryTokens.length);
        for(let i = 0, len = this._binaryTokens.length; i < len; i++){
            result[i] = this._binaryTokens[i];
        }
        return result;
    }
};
// src/registry.ts
var SyncRegistry = class {
    constructor(theme, _onigLib){
        this._onigLib = _onigLib;
        this._theme = theme;
    }
    _grammars = /* @__PURE__ */ new Map();
    _rawGrammars = /* @__PURE__ */ new Map();
    _injectionGrammars = /* @__PURE__ */ new Map();
    _theme;
    dispose() {
        for (const grammar of this._grammars.values()){
            grammar.dispose();
        }
    }
    setTheme(theme) {
        this._theme = theme;
    }
    getColorMap() {
        return this._theme.getColorMap();
    }
    /**
   * Add `grammar` to registry and return a list of referenced scope names
   */ addGrammar(grammar, injectionScopeNames) {
        this._rawGrammars.set(grammar.scopeName, grammar);
        if (injectionScopeNames) {
            this._injectionGrammars.set(grammar.scopeName, injectionScopeNames);
        }
    }
    /**
   * Lookup a raw grammar.
   */ lookup(scopeName) {
        return this._rawGrammars.get(scopeName);
    }
    /**
   * Returns the injections for the given grammar
   */ injections(targetScope) {
        return this._injectionGrammars.get(targetScope);
    }
    /**
   * Get the default theme settings
   */ getDefaults() {
        return this._theme.getDefaults();
    }
    /**
   * Match a scope in the theme.
   */ themeMatch(scopePath) {
        return this._theme.match(scopePath);
    }
    /**
   * Lookup a grammar.
   */ grammarForScopeName(scopeName, initialLanguage, embeddedLanguages, tokenTypes, balancedBracketSelectors) {
        if (!this._grammars.has(scopeName)) {
            let rawGrammar = this._rawGrammars.get(scopeName);
            if (!rawGrammar) {
                return null;
            }
            this._grammars.set(scopeName, createGrammar(scopeName, rawGrammar, initialLanguage, embeddedLanguages, tokenTypes, balancedBracketSelectors, this, this._onigLib));
        }
        return this._grammars.get(scopeName);
    }
};
// src/index.ts
var Registry = class {
    _options;
    _syncRegistry;
    _ensureGrammarCache;
    constructor(options){
        this._options = options;
        this._syncRegistry = new SyncRegistry(Theme.createFromRawTheme(options.theme, options.colorMap), options.onigLib);
        this._ensureGrammarCache = /* @__PURE__ */ new Map();
    }
    dispose() {
        this._syncRegistry.dispose();
    }
    /**
   * Change the theme. Once called, no previous `ruleStack` should be used anymore.
   */ setTheme(theme, colorMap) {
        this._syncRegistry.setTheme(Theme.createFromRawTheme(theme, colorMap));
    }
    /**
   * Returns a lookup array for color ids.
   */ getColorMap() {
        return this._syncRegistry.getColorMap();
    }
    /**
   * Load the grammar for `scopeName` and all referenced included grammars asynchronously.
   * Please do not use language id 0.
   */ loadGrammarWithEmbeddedLanguages(initialScopeName, initialLanguage, embeddedLanguages) {
        return this.loadGrammarWithConfiguration(initialScopeName, initialLanguage, {
            embeddedLanguages
        });
    }
    /**
   * Load the grammar for `scopeName` and all referenced included grammars asynchronously.
   * Please do not use language id 0.
   */ loadGrammarWithConfiguration(initialScopeName, initialLanguage, configuration) {
        return this._loadGrammar(initialScopeName, initialLanguage, configuration.embeddedLanguages, configuration.tokenTypes, new BalancedBracketSelectors(configuration.balancedBracketSelectors || [], configuration.unbalancedBracketSelectors || []));
    }
    /**
   * Load the grammar for `scopeName` and all referenced included grammars asynchronously.
   */ loadGrammar(initialScopeName) {
        return this._loadGrammar(initialScopeName, 0, null, null, null);
    }
    _loadGrammar(initialScopeName, initialLanguage, embeddedLanguages, tokenTypes, balancedBracketSelectors) {
        const dependencyProcessor = new ScopeDependencyProcessor(this._syncRegistry, initialScopeName);
        while(dependencyProcessor.Q.length > 0){
            dependencyProcessor.Q.map((request)=>this._loadSingleGrammar(request.scopeName));
            dependencyProcessor.processQueue();
        }
        return this._grammarForScopeName(initialScopeName, initialLanguage, embeddedLanguages, tokenTypes, balancedBracketSelectors);
    }
    _loadSingleGrammar(scopeName) {
        if (!this._ensureGrammarCache.has(scopeName)) {
            this._doLoadSingleGrammar(scopeName);
            this._ensureGrammarCache.set(scopeName, true);
        }
    }
    _doLoadSingleGrammar(scopeName) {
        const grammar = this._options.loadGrammar(scopeName);
        if (grammar) {
            const injections = typeof this._options.getInjections === "function" ? this._options.getInjections(scopeName) : void 0;
            this._syncRegistry.addGrammar(grammar, injections);
        }
    }
    /**
   * Adds a rawGrammar.
   */ addGrammar(rawGrammar, injections = [], initialLanguage = 0, embeddedLanguages = null) {
        this._syncRegistry.addGrammar(rawGrammar, injections);
        return this._grammarForScopeName(rawGrammar.scopeName, initialLanguage, embeddedLanguages);
    }
    /**
   * Get the grammar for `scopeName`. The grammar must first be created via `loadGrammar` or `addGrammar`.
   */ _grammarForScopeName(scopeName, initialLanguage = 0, embeddedLanguages = null, tokenTypes = null, balancedBracketSelectors = null) {
        return this._syncRegistry.grammarForScopeName(scopeName, initialLanguage, embeddedLanguages, tokenTypes, balancedBracketSelectors);
    }
};
var INITIAL = StateStackImpl.NULL;
;
}),
"[project]/adkit-docs/node_modules/html-void-elements/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * List of HTML void tag names.
 *
 * @type {Array<string>}
 */ __turbopack_context__.s([
    "htmlVoidElements",
    ()=>htmlVoidElements
]);
const htmlVoidElements = [
    'area',
    'base',
    'basefont',
    'bgsound',
    'br',
    'col',
    'command',
    'embed',
    'frame',
    'hr',
    'image',
    'img',
    'input',
    'keygen',
    'link',
    'meta',
    'param',
    'source',
    'track',
    'wbr'
];
}),
"[project]/adkit-docs/node_modules/property-information/lib/util/schema.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Schema as SchemaType, Space} from 'property-information'
 */ /** @type {SchemaType} */ __turbopack_context__.s([
    "Schema",
    ()=>Schema
]);
class Schema {
    /**
   * @param {SchemaType['property']} property
   *   Property.
   * @param {SchemaType['normal']} normal
   *   Normal.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Schema.
   */ constructor(property, normal, space){
        this.normal = normal;
        this.property = property;
        if (space) {
            this.space = space;
        }
    }
}
Schema.prototype.normal = {};
Schema.prototype.property = {};
Schema.prototype.space = undefined;
}),
"[project]/adkit-docs/node_modules/property-information/lib/util/merge.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Info, Space} from 'property-information'
 */ __turbopack_context__.s([
    "merge",
    ()=>merge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/property-information/lib/util/schema.js [app-client] (ecmascript)");
;
function merge(definitions, space) {
    /** @type {Record<string, Info>} */ const property = {};
    /** @type {Record<string, string>} */ const normal = {};
    for (const definition of definitions){
        Object.assign(property, definition.property);
        Object.assign(normal, definition.normal);
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schema"](property, normal, space);
}
}),
"[project]/adkit-docs/node_modules/property-information/lib/normalize.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Get the cleaned case insensitive form of an attribute or property.
 *
 * @param {string} value
 *   An attribute-like or property-like name.
 * @returns {string}
 *   Value that can be used to look up the properly cased property on a
 *   `Schema`.
 */ __turbopack_context__.s([
    "normalize",
    ()=>normalize
]);
function normalize(value) {
    return value.toLowerCase();
}
}),
"[project]/adkit-docs/node_modules/property-information/lib/util/info.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Info as InfoType} from 'property-information'
 */ /** @type {InfoType} */ __turbopack_context__.s([
    "Info",
    ()=>Info
]);
class Info {
    /**
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @returns
   *   Info.
   */ constructor(property, attribute){
        this.attribute = attribute;
        this.property = property;
    }
}
Info.prototype.attribute = '';
Info.prototype.booleanish = false;
Info.prototype.boolean = false;
Info.prototype.commaOrSpaceSeparated = false;
Info.prototype.commaSeparated = false;
Info.prototype.defined = false;
Info.prototype.mustUseProperty = false;
Info.prototype.number = false;
Info.prototype.overloadedBoolean = false;
Info.prototype.property = '';
Info.prototype.spaceSeparated = false;
Info.prototype.space = undefined;
}),
"[project]/adkit-docs/node_modules/property-information/lib/util/types.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "boolean",
    ()=>boolean,
    "booleanish",
    ()=>booleanish,
    "commaOrSpaceSeparated",
    ()=>commaOrSpaceSeparated,
    "commaSeparated",
    ()=>commaSeparated,
    "number",
    ()=>number,
    "overloadedBoolean",
    ()=>overloadedBoolean,
    "spaceSeparated",
    ()=>spaceSeparated
]);
let powers = 0;
const boolean = increment();
const booleanish = increment();
const overloadedBoolean = increment();
const number = increment();
const spaceSeparated = increment();
const commaSeparated = increment();
const commaOrSpaceSeparated = increment();
function increment() {
    return 2 ** ++powers;
}
}),
"[project]/adkit-docs/node_modules/property-information/lib/util/defined-info.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Space} from 'property-information'
 */ __turbopack_context__.s([
    "DefinedInfo",
    ()=>DefinedInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/property-information/lib/util/info.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/property-information/lib/util/types.js [app-client] (ecmascript)");
;
;
const checks = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__);
class DefinedInfo extends __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Info"] {
    /**
   * @constructor
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @param {number | null | undefined} [mask]
   *   Mask.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Info.
   */ constructor(property, attribute, mask, space){
        let index = -1;
        super(property, attribute);
        mark(this, 'space', space);
        if (typeof mask === 'number') {
            while(++index < checks.length){
                const check = checks[index];
                mark(this, checks[index], (mask & __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[check]) === __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[check]);
            }
        }
    }
}
DefinedInfo.prototype.defined = true;
/**
 * @template {keyof DefinedInfo} Key
 *   Key type.
 * @param {DefinedInfo} values
 *   Info.
 * @param {Key} key
 *   Key.
 * @param {DefinedInfo[Key]} value
 *   Value.
 * @returns {undefined}
 *   Nothing.
 */ function mark(values, key, value) {
    if (value) {
        values[key] = value;
    }
}
}),
"[project]/adkit-docs/node_modules/property-information/lib/util/create.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Info, Space} from 'property-information'
 */ /**
 * @typedef Definition
 *   Definition of a schema.
 * @property {Record<string, string> | undefined} [attributes]
 *   Normalzed names to special attribute case.
 * @property {ReadonlyArray<string> | undefined} [mustUseProperty]
 *   Normalized names that must be set as properties.
 * @property {Record<string, number | null>} properties
 *   Property names to their types.
 * @property {Space | undefined} [space]
 *   Space.
 * @property {Transform} transform
 *   Transform a property name.
 */ /**
 * @callback Transform
 *   Transform.
 * @param {Record<string, string>} attributes
 *   Attributes.
 * @param {string} property
 *   Property.
 * @returns {string}
 *   Attribute.
 */ __turbopack_context__.s([
    "create",
    ()=>create
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/property-information/lib/normalize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$defined$2d$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/property-information/lib/util/defined-info.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/property-information/lib/util/schema.js [app-client] (ecmascript)");
;
;
;
function create(definition) {
    /** @type {Record<string, Info>} */ const properties = {};
    /** @type {Record<string, string>} */ const normals = {};
    for (const [property, value] of Object.entries(definition.properties)){
        const info = new __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$defined$2d$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DefinedInfo"](property, definition.transform(definition.attributes || {}, property), value, definition.space);
        if (definition.mustUseProperty && definition.mustUseProperty.includes(property)) {
            info.mustUseProperty = true;
        }
        properties[property] = info;
        normals[(0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalize"])(property)] = property;
        normals[(0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalize"])(info.attribute)] = property;
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schema"](properties, normals, definition.space);
}
}),
"[project]/adkit-docs/node_modules/property-information/lib/aria.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "aria",
    ()=>aria
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$create$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/property-information/lib/util/create.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/property-information/lib/util/types.js [app-client] (ecmascript)");
;
;
const aria = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$create$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])({
    properties: {
        ariaActiveDescendant: null,
        ariaAtomic: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["booleanish"],
        ariaAutoComplete: null,
        ariaBusy: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["booleanish"],
        ariaChecked: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["booleanish"],
        ariaColCount: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        ariaColIndex: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        ariaColSpan: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        ariaControls: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spaceSeparated"],
        ariaCurrent: null,
        ariaDescribedBy: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spaceSeparated"],
        ariaDetails: null,
        ariaDisabled: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["booleanish"],
        ariaDropEffect: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spaceSeparated"],
        ariaErrorMessage: null,
        ariaExpanded: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["booleanish"],
        ariaFlowTo: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spaceSeparated"],
        ariaGrabbed: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["booleanish"],
        ariaHasPopup: null,
        ariaHidden: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["booleanish"],
        ariaInvalid: null,
        ariaKeyShortcuts: null,
        ariaLabel: null,
        ariaLabelledBy: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spaceSeparated"],
        ariaLevel: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        ariaLive: null,
        ariaModal: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["booleanish"],
        ariaMultiLine: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["booleanish"],
        ariaMultiSelectable: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["booleanish"],
        ariaOrientation: null,
        ariaOwns: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spaceSeparated"],
        ariaPlaceholder: null,
        ariaPosInSet: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        ariaPressed: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["booleanish"],
        ariaReadOnly: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["booleanish"],
        ariaRelevant: null,
        ariaRequired: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["booleanish"],
        ariaRoleDescription: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spaceSeparated"],
        ariaRowCount: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        ariaRowIndex: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        ariaRowSpan: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        ariaSelected: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["booleanish"],
        ariaSetSize: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        ariaSort: null,
        ariaValueMax: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        ariaValueMin: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        ariaValueNow: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        ariaValueText: null,
        role: null
    },
    transform (_, property) {
        return property === 'role' ? property : 'aria-' + property.slice(4).toLowerCase();
    }
});
}),
"[project]/adkit-docs/node_modules/property-information/lib/util/case-sensitive-transform.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @param {Record<string, string>} attributes
 *   Attributes.
 * @param {string} attribute
 *   Attribute.
 * @returns {string}
 *   Transformed attribute.
 */ __turbopack_context__.s([
    "caseSensitiveTransform",
    ()=>caseSensitiveTransform
]);
function caseSensitiveTransform(attributes, attribute) {
    return attribute in attributes ? attributes[attribute] : attribute;
}
}),
"[project]/adkit-docs/node_modules/property-information/lib/util/case-insensitive-transform.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "caseInsensitiveTransform",
    ()=>caseInsensitiveTransform
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$case$2d$sensitive$2d$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/property-information/lib/util/case-sensitive-transform.js [app-client] (ecmascript)");
;
function caseInsensitiveTransform(attributes, property) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$case$2d$sensitive$2d$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["caseSensitiveTransform"])(attributes, property.toLowerCase());
}
}),
"[project]/adkit-docs/node_modules/property-information/lib/html.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "html",
    ()=>html
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$case$2d$insensitive$2d$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/property-information/lib/util/case-insensitive-transform.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$create$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/property-information/lib/util/create.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/property-information/lib/util/types.js [app-client] (ecmascript)");
;
;
;
const html = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$create$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])({
    attributes: {
        acceptcharset: 'accept-charset',
        classname: 'class',
        htmlfor: 'for',
        httpequiv: 'http-equiv'
    },
    mustUseProperty: [
        'checked',
        'multiple',
        'muted',
        'selected'
    ],
    properties: {
        // Standard Properties.
        abbr: null,
        accept: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commaSeparated"],
        acceptCharset: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spaceSeparated"],
        accessKey: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spaceSeparated"],
        action: null,
        allow: null,
        allowFullScreen: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"],
        allowPaymentRequest: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"],
        allowUserMedia: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"],
        alt: null,
        as: null,
        async: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"],
        autoCapitalize: null,
        autoComplete: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spaceSeparated"],
        autoFocus: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"],
        autoPlay: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"],
        blocking: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spaceSeparated"],
        capture: null,
        charSet: null,
        checked: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"],
        cite: null,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spaceSeparated"],
        cols: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        colSpan: null,
        content: null,
        contentEditable: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["booleanish"],
        controls: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"],
        controlsList: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spaceSeparated"],
        coords: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"] | __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commaSeparated"],
        crossOrigin: null,
        data: null,
        dateTime: null,
        decoding: null,
        default: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"],
        defer: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"],
        dir: null,
        dirName: null,
        disabled: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"],
        download: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["overloadedBoolean"],
        draggable: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["booleanish"],
        encType: null,
        enterKeyHint: null,
        fetchPriority: null,
        form: null,
        formAction: null,
        formEncType: null,
        formMethod: null,
        formNoValidate: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"],
        formTarget: null,
        headers: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spaceSeparated"],
        height: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        hidden: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["overloadedBoolean"],
        high: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        href: null,
        hrefLang: null,
        htmlFor: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spaceSeparated"],
        httpEquiv: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spaceSeparated"],
        id: null,
        imageSizes: null,
        imageSrcSet: null,
        inert: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"],
        inputMode: null,
        integrity: null,
        is: null,
        isMap: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"],
        itemId: null,
        itemProp: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spaceSeparated"],
        itemRef: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spaceSeparated"],
        itemScope: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"],
        itemType: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spaceSeparated"],
        kind: null,
        label: null,
        lang: null,
        language: null,
        list: null,
        loading: null,
        loop: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"],
        low: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        manifest: null,
        max: null,
        maxLength: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        media: null,
        method: null,
        min: null,
        minLength: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        multiple: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"],
        muted: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"],
        name: null,
        nonce: null,
        noModule: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"],
        noValidate: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"],
        onAbort: null,
        onAfterPrint: null,
        onAuxClick: null,
        onBeforeMatch: null,
        onBeforePrint: null,
        onBeforeToggle: null,
        onBeforeUnload: null,
        onBlur: null,
        onCancel: null,
        onCanPlay: null,
        onCanPlayThrough: null,
        onChange: null,
        onClick: null,
        onClose: null,
        onContextLost: null,
        onContextMenu: null,
        onContextRestored: null,
        onCopy: null,
        onCueChange: null,
        onCut: null,
        onDblClick: null,
        onDrag: null,
        onDragEnd: null,
        onDragEnter: null,
        onDragExit: null,
        onDragLeave: null,
        onDragOver: null,
        onDragStart: null,
        onDrop: null,
        onDurationChange: null,
        onEmptied: null,
        onEnded: null,
        onError: null,
        onFocus: null,
        onFormData: null,
        onHashChange: null,
        onInput: null,
        onInvalid: null,
        onKeyDown: null,
        onKeyPress: null,
        onKeyUp: null,
        onLanguageChange: null,
        onLoad: null,
        onLoadedData: null,
        onLoadedMetadata: null,
        onLoadEnd: null,
        onLoadStart: null,
        onMessage: null,
        onMessageError: null,
        onMouseDown: null,
        onMouseEnter: null,
        onMouseLeave: null,
        onMouseMove: null,
        onMouseOut: null,
        onMouseOver: null,
        onMouseUp: null,
        onOffline: null,
        onOnline: null,
        onPageHide: null,
        onPageShow: null,
        onPaste: null,
        onPause: null,
        onPlay: null,
        onPlaying: null,
        onPopState: null,
        onProgress: null,
        onRateChange: null,
        onRejectionHandled: null,
        onReset: null,
        onResize: null,
        onScroll: null,
        onScrollEnd: null,
        onSecurityPolicyViolation: null,
        onSeeked: null,
        onSeeking: null,
        onSelect: null,
        onSlotChange: null,
        onStalled: null,
        onStorage: null,
        onSubmit: null,
        onSuspend: null,
        onTimeUpdate: null,
        onToggle: null,
        onUnhandledRejection: null,
        onUnload: null,
        onVolumeChange: null,
        onWaiting: null,
        onWheel: null,
        open: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"],
        optimum: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        pattern: null,
        ping: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spaceSeparated"],
        placeholder: null,
        playsInline: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"],
        popover: null,
        popoverTarget: null,
        popoverTargetAction: null,
        poster: null,
        preload: null,
        readOnly: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"],
        referrerPolicy: null,
        rel: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spaceSeparated"],
        required: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"],
        reversed: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"],
        rows: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        rowSpan: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        sandbox: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spaceSeparated"],
        scope: null,
        scoped: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"],
        seamless: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"],
        selected: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"],
        shadowRootClonable: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"],
        shadowRootDelegatesFocus: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"],
        shadowRootMode: null,
        shape: null,
        size: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        sizes: null,
        slot: null,
        span: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        spellCheck: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["booleanish"],
        src: null,
        srcDoc: null,
        srcLang: null,
        srcSet: null,
        start: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        step: null,
        style: null,
        tabIndex: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        target: null,
        title: null,
        translate: null,
        type: null,
        typeMustMatch: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"],
        useMap: null,
        value: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["booleanish"],
        width: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        wrap: null,
        writingSuggestions: null,
        // Legacy.
        // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
        align: null,
        aLink: null,
        archive: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spaceSeparated"],
        axis: null,
        background: null,
        bgColor: null,
        border: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        borderColor: null,
        bottomMargin: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        cellPadding: null,
        cellSpacing: null,
        char: null,
        charOff: null,
        classId: null,
        clear: null,
        code: null,
        codeBase: null,
        codeType: null,
        color: null,
        compact: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"],
        declare: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"],
        event: null,
        face: null,
        frame: null,
        frameBorder: null,
        hSpace: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        leftMargin: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        link: null,
        longDesc: null,
        lowSrc: null,
        marginHeight: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        marginWidth: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        noResize: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"],
        noHref: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"],
        noShade: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"],
        noWrap: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"],
        object: null,
        profile: null,
        prompt: null,
        rev: null,
        rightMargin: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        rules: null,
        scheme: null,
        scrolling: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["booleanish"],
        standby: null,
        summary: null,
        text: null,
        topMargin: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        valueType: null,
        version: null,
        vAlign: null,
        vLink: null,
        vSpace: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        // Non-standard Properties.
        allowTransparency: null,
        autoCorrect: null,
        autoSave: null,
        disablePictureInPicture: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"],
        disableRemotePlayback: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"],
        prefix: null,
        property: null,
        results: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        security: null,
        unselectable: null
    },
    space: 'html',
    transform: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$case$2d$insensitive$2d$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["caseInsensitiveTransform"]
});
}),
"[project]/adkit-docs/node_modules/property-information/lib/svg.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "svg",
    ()=>svg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$case$2d$sensitive$2d$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/property-information/lib/util/case-sensitive-transform.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$create$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/property-information/lib/util/create.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/property-information/lib/util/types.js [app-client] (ecmascript)");
;
;
;
const svg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$create$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])({
    attributes: {
        accentHeight: 'accent-height',
        alignmentBaseline: 'alignment-baseline',
        arabicForm: 'arabic-form',
        baselineShift: 'baseline-shift',
        capHeight: 'cap-height',
        className: 'class',
        clipPath: 'clip-path',
        clipRule: 'clip-rule',
        colorInterpolation: 'color-interpolation',
        colorInterpolationFilters: 'color-interpolation-filters',
        colorProfile: 'color-profile',
        colorRendering: 'color-rendering',
        crossOrigin: 'crossorigin',
        dataType: 'datatype',
        dominantBaseline: 'dominant-baseline',
        enableBackground: 'enable-background',
        fillOpacity: 'fill-opacity',
        fillRule: 'fill-rule',
        floodColor: 'flood-color',
        floodOpacity: 'flood-opacity',
        fontFamily: 'font-family',
        fontSize: 'font-size',
        fontSizeAdjust: 'font-size-adjust',
        fontStretch: 'font-stretch',
        fontStyle: 'font-style',
        fontVariant: 'font-variant',
        fontWeight: 'font-weight',
        glyphName: 'glyph-name',
        glyphOrientationHorizontal: 'glyph-orientation-horizontal',
        glyphOrientationVertical: 'glyph-orientation-vertical',
        hrefLang: 'hreflang',
        horizAdvX: 'horiz-adv-x',
        horizOriginX: 'horiz-origin-x',
        horizOriginY: 'horiz-origin-y',
        imageRendering: 'image-rendering',
        letterSpacing: 'letter-spacing',
        lightingColor: 'lighting-color',
        markerEnd: 'marker-end',
        markerMid: 'marker-mid',
        markerStart: 'marker-start',
        navDown: 'nav-down',
        navDownLeft: 'nav-down-left',
        navDownRight: 'nav-down-right',
        navLeft: 'nav-left',
        navNext: 'nav-next',
        navPrev: 'nav-prev',
        navRight: 'nav-right',
        navUp: 'nav-up',
        navUpLeft: 'nav-up-left',
        navUpRight: 'nav-up-right',
        onAbort: 'onabort',
        onActivate: 'onactivate',
        onAfterPrint: 'onafterprint',
        onBeforePrint: 'onbeforeprint',
        onBegin: 'onbegin',
        onCancel: 'oncancel',
        onCanPlay: 'oncanplay',
        onCanPlayThrough: 'oncanplaythrough',
        onChange: 'onchange',
        onClick: 'onclick',
        onClose: 'onclose',
        onCopy: 'oncopy',
        onCueChange: 'oncuechange',
        onCut: 'oncut',
        onDblClick: 'ondblclick',
        onDrag: 'ondrag',
        onDragEnd: 'ondragend',
        onDragEnter: 'ondragenter',
        onDragExit: 'ondragexit',
        onDragLeave: 'ondragleave',
        onDragOver: 'ondragover',
        onDragStart: 'ondragstart',
        onDrop: 'ondrop',
        onDurationChange: 'ondurationchange',
        onEmptied: 'onemptied',
        onEnd: 'onend',
        onEnded: 'onended',
        onError: 'onerror',
        onFocus: 'onfocus',
        onFocusIn: 'onfocusin',
        onFocusOut: 'onfocusout',
        onHashChange: 'onhashchange',
        onInput: 'oninput',
        onInvalid: 'oninvalid',
        onKeyDown: 'onkeydown',
        onKeyPress: 'onkeypress',
        onKeyUp: 'onkeyup',
        onLoad: 'onload',
        onLoadedData: 'onloadeddata',
        onLoadedMetadata: 'onloadedmetadata',
        onLoadStart: 'onloadstart',
        onMessage: 'onmessage',
        onMouseDown: 'onmousedown',
        onMouseEnter: 'onmouseenter',
        onMouseLeave: 'onmouseleave',
        onMouseMove: 'onmousemove',
        onMouseOut: 'onmouseout',
        onMouseOver: 'onmouseover',
        onMouseUp: 'onmouseup',
        onMouseWheel: 'onmousewheel',
        onOffline: 'onoffline',
        onOnline: 'ononline',
        onPageHide: 'onpagehide',
        onPageShow: 'onpageshow',
        onPaste: 'onpaste',
        onPause: 'onpause',
        onPlay: 'onplay',
        onPlaying: 'onplaying',
        onPopState: 'onpopstate',
        onProgress: 'onprogress',
        onRateChange: 'onratechange',
        onRepeat: 'onrepeat',
        onReset: 'onreset',
        onResize: 'onresize',
        onScroll: 'onscroll',
        onSeeked: 'onseeked',
        onSeeking: 'onseeking',
        onSelect: 'onselect',
        onShow: 'onshow',
        onStalled: 'onstalled',
        onStorage: 'onstorage',
        onSubmit: 'onsubmit',
        onSuspend: 'onsuspend',
        onTimeUpdate: 'ontimeupdate',
        onToggle: 'ontoggle',
        onUnload: 'onunload',
        onVolumeChange: 'onvolumechange',
        onWaiting: 'onwaiting',
        onZoom: 'onzoom',
        overlinePosition: 'overline-position',
        overlineThickness: 'overline-thickness',
        paintOrder: 'paint-order',
        panose1: 'panose-1',
        pointerEvents: 'pointer-events',
        referrerPolicy: 'referrerpolicy',
        renderingIntent: 'rendering-intent',
        shapeRendering: 'shape-rendering',
        stopColor: 'stop-color',
        stopOpacity: 'stop-opacity',
        strikethroughPosition: 'strikethrough-position',
        strikethroughThickness: 'strikethrough-thickness',
        strokeDashArray: 'stroke-dasharray',
        strokeDashOffset: 'stroke-dashoffset',
        strokeLineCap: 'stroke-linecap',
        strokeLineJoin: 'stroke-linejoin',
        strokeMiterLimit: 'stroke-miterlimit',
        strokeOpacity: 'stroke-opacity',
        strokeWidth: 'stroke-width',
        tabIndex: 'tabindex',
        textAnchor: 'text-anchor',
        textDecoration: 'text-decoration',
        textRendering: 'text-rendering',
        transformOrigin: 'transform-origin',
        typeOf: 'typeof',
        underlinePosition: 'underline-position',
        underlineThickness: 'underline-thickness',
        unicodeBidi: 'unicode-bidi',
        unicodeRange: 'unicode-range',
        unitsPerEm: 'units-per-em',
        vAlphabetic: 'v-alphabetic',
        vHanging: 'v-hanging',
        vIdeographic: 'v-ideographic',
        vMathematical: 'v-mathematical',
        vectorEffect: 'vector-effect',
        vertAdvY: 'vert-adv-y',
        vertOriginX: 'vert-origin-x',
        vertOriginY: 'vert-origin-y',
        wordSpacing: 'word-spacing',
        writingMode: 'writing-mode',
        xHeight: 'x-height',
        // These were camelcased in Tiny. Now lowercased in SVG 2
        playbackOrder: 'playbackorder',
        timelineBegin: 'timelinebegin'
    },
    properties: {
        about: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commaOrSpaceSeparated"],
        accentHeight: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        accumulate: null,
        additive: null,
        alignmentBaseline: null,
        alphabetic: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        amplitude: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        arabicForm: null,
        ascent: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        attributeName: null,
        attributeType: null,
        azimuth: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        bandwidth: null,
        baselineShift: null,
        baseFrequency: null,
        baseProfile: null,
        bbox: null,
        begin: null,
        bias: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        by: null,
        calcMode: null,
        capHeight: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        className: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spaceSeparated"],
        clip: null,
        clipPath: null,
        clipPathUnits: null,
        clipRule: null,
        color: null,
        colorInterpolation: null,
        colorInterpolationFilters: null,
        colorProfile: null,
        colorRendering: null,
        content: null,
        contentScriptType: null,
        contentStyleType: null,
        crossOrigin: null,
        cursor: null,
        cx: null,
        cy: null,
        d: null,
        dataType: null,
        defaultAction: null,
        descent: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        diffuseConstant: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        direction: null,
        display: null,
        dur: null,
        divisor: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        dominantBaseline: null,
        download: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"],
        dx: null,
        dy: null,
        edgeMode: null,
        editable: null,
        elevation: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        enableBackground: null,
        end: null,
        event: null,
        exponent: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        externalResourcesRequired: null,
        fill: null,
        fillOpacity: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        fillRule: null,
        filter: null,
        filterRes: null,
        filterUnits: null,
        floodColor: null,
        floodOpacity: null,
        focusable: null,
        focusHighlight: null,
        fontFamily: null,
        fontSize: null,
        fontSizeAdjust: null,
        fontStretch: null,
        fontStyle: null,
        fontVariant: null,
        fontWeight: null,
        format: null,
        fr: null,
        from: null,
        fx: null,
        fy: null,
        g1: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commaSeparated"],
        g2: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commaSeparated"],
        glyphName: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commaSeparated"],
        glyphOrientationHorizontal: null,
        glyphOrientationVertical: null,
        glyphRef: null,
        gradientTransform: null,
        gradientUnits: null,
        handler: null,
        hanging: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        hatchContentUnits: null,
        hatchUnits: null,
        height: null,
        href: null,
        hrefLang: null,
        horizAdvX: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        horizOriginX: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        horizOriginY: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        id: null,
        ideographic: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        imageRendering: null,
        initialVisibility: null,
        in: null,
        in2: null,
        intercept: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        k: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        k1: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        k2: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        k3: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        k4: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        kernelMatrix: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commaOrSpaceSeparated"],
        kernelUnitLength: null,
        keyPoints: null,
        keySplines: null,
        keyTimes: null,
        kerning: null,
        lang: null,
        lengthAdjust: null,
        letterSpacing: null,
        lightingColor: null,
        limitingConeAngle: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        local: null,
        markerEnd: null,
        markerMid: null,
        markerStart: null,
        markerHeight: null,
        markerUnits: null,
        markerWidth: null,
        mask: null,
        maskContentUnits: null,
        maskUnits: null,
        mathematical: null,
        max: null,
        media: null,
        mediaCharacterEncoding: null,
        mediaContentEncodings: null,
        mediaSize: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        mediaTime: null,
        method: null,
        min: null,
        mode: null,
        name: null,
        navDown: null,
        navDownLeft: null,
        navDownRight: null,
        navLeft: null,
        navNext: null,
        navPrev: null,
        navRight: null,
        navUp: null,
        navUpLeft: null,
        navUpRight: null,
        numOctaves: null,
        observer: null,
        offset: null,
        onAbort: null,
        onActivate: null,
        onAfterPrint: null,
        onBeforePrint: null,
        onBegin: null,
        onCancel: null,
        onCanPlay: null,
        onCanPlayThrough: null,
        onChange: null,
        onClick: null,
        onClose: null,
        onCopy: null,
        onCueChange: null,
        onCut: null,
        onDblClick: null,
        onDrag: null,
        onDragEnd: null,
        onDragEnter: null,
        onDragExit: null,
        onDragLeave: null,
        onDragOver: null,
        onDragStart: null,
        onDrop: null,
        onDurationChange: null,
        onEmptied: null,
        onEnd: null,
        onEnded: null,
        onError: null,
        onFocus: null,
        onFocusIn: null,
        onFocusOut: null,
        onHashChange: null,
        onInput: null,
        onInvalid: null,
        onKeyDown: null,
        onKeyPress: null,
        onKeyUp: null,
        onLoad: null,
        onLoadedData: null,
        onLoadedMetadata: null,
        onLoadStart: null,
        onMessage: null,
        onMouseDown: null,
        onMouseEnter: null,
        onMouseLeave: null,
        onMouseMove: null,
        onMouseOut: null,
        onMouseOver: null,
        onMouseUp: null,
        onMouseWheel: null,
        onOffline: null,
        onOnline: null,
        onPageHide: null,
        onPageShow: null,
        onPaste: null,
        onPause: null,
        onPlay: null,
        onPlaying: null,
        onPopState: null,
        onProgress: null,
        onRateChange: null,
        onRepeat: null,
        onReset: null,
        onResize: null,
        onScroll: null,
        onSeeked: null,
        onSeeking: null,
        onSelect: null,
        onShow: null,
        onStalled: null,
        onStorage: null,
        onSubmit: null,
        onSuspend: null,
        onTimeUpdate: null,
        onToggle: null,
        onUnload: null,
        onVolumeChange: null,
        onWaiting: null,
        onZoom: null,
        opacity: null,
        operator: null,
        order: null,
        orient: null,
        orientation: null,
        origin: null,
        overflow: null,
        overlay: null,
        overlinePosition: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        overlineThickness: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        paintOrder: null,
        panose1: null,
        path: null,
        pathLength: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        patternContentUnits: null,
        patternTransform: null,
        patternUnits: null,
        phase: null,
        ping: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spaceSeparated"],
        pitch: null,
        playbackOrder: null,
        pointerEvents: null,
        points: null,
        pointsAtX: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        pointsAtY: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        pointsAtZ: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        preserveAlpha: null,
        preserveAspectRatio: null,
        primitiveUnits: null,
        propagate: null,
        property: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commaOrSpaceSeparated"],
        r: null,
        radius: null,
        referrerPolicy: null,
        refX: null,
        refY: null,
        rel: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commaOrSpaceSeparated"],
        rev: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commaOrSpaceSeparated"],
        renderingIntent: null,
        repeatCount: null,
        repeatDur: null,
        requiredExtensions: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commaOrSpaceSeparated"],
        requiredFeatures: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commaOrSpaceSeparated"],
        requiredFonts: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commaOrSpaceSeparated"],
        requiredFormats: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commaOrSpaceSeparated"],
        resource: null,
        restart: null,
        result: null,
        rotate: null,
        rx: null,
        ry: null,
        scale: null,
        seed: null,
        shapeRendering: null,
        side: null,
        slope: null,
        snapshotTime: null,
        specularConstant: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        specularExponent: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        spreadMethod: null,
        spacing: null,
        startOffset: null,
        stdDeviation: null,
        stemh: null,
        stemv: null,
        stitchTiles: null,
        stopColor: null,
        stopOpacity: null,
        strikethroughPosition: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        strikethroughThickness: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        string: null,
        stroke: null,
        strokeDashArray: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commaOrSpaceSeparated"],
        strokeDashOffset: null,
        strokeLineCap: null,
        strokeLineJoin: null,
        strokeMiterLimit: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        strokeOpacity: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        strokeWidth: null,
        style: null,
        surfaceScale: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        syncBehavior: null,
        syncBehaviorDefault: null,
        syncMaster: null,
        syncTolerance: null,
        syncToleranceDefault: null,
        systemLanguage: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commaOrSpaceSeparated"],
        tabIndex: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        tableValues: null,
        target: null,
        targetX: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        targetY: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        textAnchor: null,
        textDecoration: null,
        textRendering: null,
        textLength: null,
        timelineBegin: null,
        title: null,
        transformBehavior: null,
        type: null,
        typeOf: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commaOrSpaceSeparated"],
        to: null,
        transform: null,
        transformOrigin: null,
        u1: null,
        u2: null,
        underlinePosition: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        underlineThickness: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        unicode: null,
        unicodeBidi: null,
        unicodeRange: null,
        unitsPerEm: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        values: null,
        vAlphabetic: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        vMathematical: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        vectorEffect: null,
        vHanging: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        vIdeographic: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        version: null,
        vertAdvY: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        vertOriginX: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        vertOriginY: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        viewBox: null,
        viewTarget: null,
        visibility: null,
        width: null,
        widths: null,
        wordSpacing: null,
        writingMode: null,
        x: null,
        x1: null,
        x2: null,
        xChannelSelector: null,
        xHeight: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
        y: null,
        y1: null,
        y2: null,
        yChannelSelector: null,
        z: null,
        zoomAndPan: null
    },
    space: 'svg',
    transform: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$case$2d$sensitive$2d$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["caseSensitiveTransform"]
});
}),
"[project]/adkit-docs/node_modules/property-information/lib/xlink.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "xlink",
    ()=>xlink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$create$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/property-information/lib/util/create.js [app-client] (ecmascript)");
;
const xlink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$create$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])({
    properties: {
        xLinkActuate: null,
        xLinkArcRole: null,
        xLinkHref: null,
        xLinkRole: null,
        xLinkShow: null,
        xLinkTitle: null,
        xLinkType: null
    },
    space: 'xlink',
    transform (_, property) {
        return 'xlink:' + property.slice(5).toLowerCase();
    }
});
}),
"[project]/adkit-docs/node_modules/property-information/lib/xmlns.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "xmlns",
    ()=>xmlns
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$create$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/property-information/lib/util/create.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$case$2d$insensitive$2d$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/property-information/lib/util/case-insensitive-transform.js [app-client] (ecmascript)");
;
;
const xmlns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$create$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])({
    attributes: {
        xmlnsxlink: 'xmlns:xlink'
    },
    properties: {
        xmlnsXLink: null,
        xmlns: null
    },
    space: 'xmlns',
    transform: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$case$2d$insensitive$2d$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["caseInsensitiveTransform"]
});
}),
"[project]/adkit-docs/node_modules/property-information/lib/xml.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "xml",
    ()=>xml
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$create$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/property-information/lib/util/create.js [app-client] (ecmascript)");
;
const xml = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$create$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])({
    properties: {
        xmlBase: null,
        xmlLang: null,
        xmlSpace: null
    },
    space: 'xml',
    transform (_, property) {
        return 'xml:' + property.slice(3).toLowerCase();
    }
});
}),
"[project]/adkit-docs/node_modules/property-information/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// Note: types exposed from `index.d.ts`.
__turbopack_context__.s([
    "html",
    ()=>html,
    "svg",
    ()=>svg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/property-information/lib/util/merge.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$aria$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/property-information/lib/aria.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/property-information/lib/html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/property-information/lib/svg.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$xlink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/property-information/lib/xlink.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$xmlns$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/property-information/lib/xmlns.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/property-information/lib/xml.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const html = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merge"])([
    __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$aria$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aria"],
    __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"],
    __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$xlink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xlink"],
    __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$xmlns$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xmlns"],
    __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xml"]
], 'html');
;
;
const svg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merge"])([
    __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$aria$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aria"],
    __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["svg"],
    __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$xlink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xlink"],
    __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$xmlns$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xmlns"],
    __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xml"]
], 'svg');
}),
"[project]/adkit-docs/node_modules/property-information/lib/find.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Schema} from 'property-information'
 */ __turbopack_context__.s([
    "find",
    ()=>find
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$defined$2d$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/property-information/lib/util/defined-info.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/property-information/lib/util/info.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/property-information/lib/normalize.js [app-client] (ecmascript)");
;
;
;
const cap = /[A-Z]/g;
const dash = /-[a-z]/g;
const valid = /^data[-\w.:]+$/i;
function find(schema, value) {
    const normal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalize"])(value);
    let property = value;
    let Type = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Info"];
    if (normal in schema.normal) {
        return schema.property[schema.normal[normal]];
    }
    if (normal.length > 4 && normal.slice(0, 4) === 'data' && valid.test(value)) {
        // Attribute or property.
        if (value.charAt(4) === '-') {
            // Turn it into a property.
            const rest = value.slice(5).replace(dash, camelcase);
            property = 'data' + rest.charAt(0).toUpperCase() + rest.slice(1);
        } else {
            // Turn it into an attribute.
            const rest = value.slice(4);
            if (!dash.test(rest)) {
                let dashes = rest.replace(cap, kebab);
                if (dashes.charAt(0) !== '-') {
                    dashes = '-' + dashes;
                }
                value = 'data' + dashes;
            }
        }
        Type = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$defined$2d$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DefinedInfo"];
    }
    return new Type(property, value);
}
/**
 * @param {string} $0
 *   Value.
 * @returns {string}
 *   Kebab.
 */ function kebab($0) {
    return '-' + $0.toLowerCase();
}
/**
 * @param {string} $0
 *   Value.
 * @returns {string}
 *   Camel.
 */ function camelcase($0) {
    return $0.charAt(1).toUpperCase();
}
}),
"[project]/adkit-docs/node_modules/zwitch/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @callback Handler
 *   Handle a value, with a certain ID field set to a certain value.
 *   The ID field is passed to `zwitch`, and it’s value is this function’s
 *   place on the `handlers` record.
 * @param {...any} parameters
 *   Arbitrary parameters passed to the zwitch.
 *   The first will be an object with a certain ID field set to a certain value.
 * @returns {any}
 *   Anything!
 */ /**
 * @callback UnknownHandler
 *   Handle values that do have a certain ID field, but it’s set to a value
 *   that is not listed in the `handlers` record.
 * @param {unknown} value
 *   An object with a certain ID field set to an unknown value.
 * @param {...any} rest
 *   Arbitrary parameters passed to the zwitch.
 * @returns {any}
 *   Anything!
 */ /**
 * @callback InvalidHandler
 *   Handle values that do not have a certain ID field.
 * @param {unknown} value
 *   Any unknown value.
 * @param {...any} rest
 *   Arbitrary parameters passed to the zwitch.
 * @returns {void|null|undefined|never}
 *   This should crash or return nothing.
 */ /**
 * @template {InvalidHandler} [Invalid=InvalidHandler]
 * @template {UnknownHandler} [Unknown=UnknownHandler]
 * @template {Record<string, Handler>} [Handlers=Record<string, Handler>]
 * @typedef Options
 *   Configuration (required).
 * @property {Invalid} [invalid]
 *   Handler to use for invalid values.
 * @property {Unknown} [unknown]
 *   Handler to use for unknown values.
 * @property {Handlers} [handlers]
 *   Handlers to use.
 */ __turbopack_context__.s([
    "zwitch",
    ()=>zwitch
]);
const own = {}.hasOwnProperty;
function zwitch(key, options) {
    const settings = options || {};
    /**
   * Handle one value.
   *
   * Based on the bound `key`, a respective handler will be called.
   * If `value` is not an object, or doesn’t have a `key` property, the special
   * “invalid” handler will be called.
   * If `value` has an unknown `key`, the special “unknown” handler will be
   * called.
   *
   * All arguments, and the context object, are passed through to the handler,
   * and it’s result is returned.
   *
   * @this {unknown}
   *   Any context object.
   * @param {unknown} [value]
   *   Any value.
   * @param {...unknown} parameters
   *   Arbitrary parameters passed to the zwitch.
   * @property {Handler} invalid
   *   Handle for values that do not have a certain ID field.
   * @property {Handler} unknown
   *   Handle values that do have a certain ID field, but it’s set to a value
   *   that is not listed in the `handlers` record.
   * @property {Handlers} handlers
   *   Record of handlers.
   * @returns {unknown}
   *   Anything.
   */ function one(value, ...parameters) {
        /** @type {Handler|undefined} */ let fn = one.invalid;
        const handlers = one.handlers;
        if (value && own.call(value, key)) {
            // @ts-expect-error Indexable.
            const id = String(value[key]);
            // @ts-expect-error Indexable.
            fn = own.call(handlers, id) ? handlers[id] : one.unknown;
        }
        if (fn) {
            return fn.call(this, value, ...parameters);
        }
    }
    one.handlers = settings.handlers || {};
    one.invalid = settings.invalid;
    one.unknown = settings.unknown;
    // @ts-expect-error: matches!
    return one;
}
}),
"[project]/adkit-docs/node_modules/stringify-entities/lib/core.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef CoreOptions
 * @property {ReadonlyArray<string>} [subset=[]]
 *   Whether to only escape the given subset of characters.
 * @property {boolean} [escapeOnly=false]
 *   Whether to only escape possibly dangerous characters.
 *   Those characters are `"`, `&`, `'`, `<`, `>`, and `` ` ``.
 *
 * @typedef FormatOptions
 * @property {(code: number, next: number, options: CoreWithFormatOptions) => string} format
 *   Format strategy.
 *
 * @typedef {CoreOptions & FormatOptions & import('./util/format-smart.js').FormatSmartOptions} CoreWithFormatOptions
 */ __turbopack_context__.s([
    "core",
    ()=>core
]);
const defaultSubsetRegex = /["&'<>`]/g;
const surrogatePairsRegex = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
const controlCharactersRegex = // eslint-disable-next-line no-control-regex, unicorn/no-hex-escape
/[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g;
const regexEscapeRegex = /[|\\{}()[\]^$+*?.]/g;
/** @type {WeakMap<ReadonlyArray<string>, RegExp>} */ const subsetToRegexCache = new WeakMap();
function core(value, options) {
    value = value.replace(options.subset ? charactersToExpressionCached(options.subset) : defaultSubsetRegex, basic);
    if (options.subset || options.escapeOnly) {
        return value;
    }
    return value// Surrogate pairs.
    .replace(surrogatePairsRegex, surrogate)// BMP control characters (C0 except for LF, CR, SP; DEL; and some more
    // non-ASCII ones).
    .replace(controlCharactersRegex, basic);
    //TURBOPACK unreachable
    ;
    /**
   * @param {string} pair
   * @param {number} index
   * @param {string} all
   */ function surrogate(pair, index, all) {
        return options.format((pair.charCodeAt(0) - 0xd800) * 0x400 + pair.charCodeAt(1) - 0xdc00 + 0x10000, all.charCodeAt(index + 2), options);
    }
    /**
   * @param {string} character
   * @param {number} index
   * @param {string} all
   */ function basic(character, index, all) {
        return options.format(character.charCodeAt(0), all.charCodeAt(index + 1), options);
    }
}
/**
 * A wrapper function that caches the result of `charactersToExpression` with a WeakMap.
 * This can improve performance when tooling calls `charactersToExpression` repeatedly
 * with the same subset.
 *
 * @param {ReadonlyArray<string>} subset
 * @returns {RegExp}
 */ function charactersToExpressionCached(subset) {
    let cached = subsetToRegexCache.get(subset);
    if (!cached) {
        cached = charactersToExpression(subset);
        subsetToRegexCache.set(subset, cached);
    }
    return cached;
}
/**
 * @param {ReadonlyArray<string>} subset
 * @returns {RegExp}
 */ function charactersToExpression(subset) {
    /** @type {Array<string>} */ const groups = [];
    let index = -1;
    while(++index < subset.length){
        groups.push(subset[index].replace(regexEscapeRegex, '\\$&'));
    }
    return new RegExp('(?:' + groups.join('|') + ')', 'g');
}
}),
"[project]/adkit-docs/node_modules/stringify-entities/lib/util/to-hexadecimal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toHexadecimal",
    ()=>toHexadecimal
]);
const hexadecimalRegex = /[\dA-Fa-f]/;
function toHexadecimal(code, next, omit) {
    const value = '&#x' + code.toString(16).toUpperCase();
    return omit && next && !hexadecimalRegex.test(String.fromCharCode(next)) ? value : value + ';';
}
}),
"[project]/adkit-docs/node_modules/stringify-entities/lib/util/to-decimal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toDecimal",
    ()=>toDecimal
]);
const decimalRegex = /\d/;
function toDecimal(code, next, omit) {
    const value = '&#' + String(code);
    return omit && next && !decimalRegex.test(String.fromCharCode(next)) ? value : value + ';';
}
}),
"[project]/adkit-docs/node_modules/stringify-entities/lib/constant/dangerous.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * List of legacy (that don’t need a trailing `;`) named references which could,
 * depending on what follows them, turn into a different meaning
 *
 * @type {Array<string>}
 */ __turbopack_context__.s([
    "dangerous",
    ()=>dangerous
]);
const dangerous = [
    'cent',
    'copy',
    'divide',
    'gt',
    'lt',
    'not',
    'para',
    'times'
];
}),
"[project]/adkit-docs/node_modules/stringify-entities/lib/util/to-named.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toNamed",
    ()=>toNamed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$character$2d$entities$2d$legacy$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/character-entities-legacy/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$character$2d$entities$2d$html4$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/character-entities-html4/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$stringify$2d$entities$2f$lib$2f$constant$2f$dangerous$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/stringify-entities/lib/constant/dangerous.js [app-client] (ecmascript)");
;
;
;
const own = {}.hasOwnProperty;
/**
 * `characterEntitiesHtml4` but inverted.
 *
 * @type {Record<string, string>}
 */ const characters = {};
/** @type {string} */ let key;
for(key in __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$character$2d$entities$2d$html4$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["characterEntitiesHtml4"]){
    if (own.call(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$character$2d$entities$2d$html4$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["characterEntitiesHtml4"], key)) {
        characters[__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$character$2d$entities$2d$html4$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["characterEntitiesHtml4"][key]] = key;
    }
}
const notAlphanumericRegex = /[^\dA-Za-z]/;
function toNamed(code, next, omit, attribute) {
    const character = String.fromCharCode(code);
    if (own.call(characters, character)) {
        const name = characters[character];
        const value = '&' + name;
        if (omit && __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$character$2d$entities$2d$legacy$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["characterEntitiesLegacy"].includes(name) && !__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$stringify$2d$entities$2f$lib$2f$constant$2f$dangerous$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dangerous"].includes(name) && (!attribute || next && next !== 61 /* `=` */  && notAlphanumericRegex.test(String.fromCharCode(next)))) {
            return value;
        }
        return value + ';';
    }
    return '';
}
}),
"[project]/adkit-docs/node_modules/stringify-entities/lib/util/format-smart.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef FormatSmartOptions
 * @property {boolean} [useNamedReferences=false]
 *   Prefer named character references (`&amp;`) where possible.
 * @property {boolean} [useShortestReferences=false]
 *   Prefer the shortest possible reference, if that results in less bytes.
 *   **Note**: `useNamedReferences` can be omitted when using `useShortestReferences`.
 * @property {boolean} [omitOptionalSemicolons=false]
 *   Whether to omit semicolons when possible.
 *   **Note**: This creates what HTML calls “parse errors” but is otherwise still valid HTML — don’t use this except when building a minifier.
 *   Omitting semicolons is possible for certain named and numeric references in some cases.
 * @property {boolean} [attribute=false]
 *   Create character references which don’t fail in attributes.
 *   **Note**: `attribute` only applies when operating dangerously with
 *   `omitOptionalSemicolons: true`.
 */ __turbopack_context__.s([
    "formatSmart",
    ()=>formatSmart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$stringify$2d$entities$2f$lib$2f$util$2f$to$2d$hexadecimal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/stringify-entities/lib/util/to-hexadecimal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$stringify$2d$entities$2f$lib$2f$util$2f$to$2d$decimal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/stringify-entities/lib/util/to-decimal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$stringify$2d$entities$2f$lib$2f$util$2f$to$2d$named$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/stringify-entities/lib/util/to-named.js [app-client] (ecmascript)");
;
;
;
function formatSmart(code, next, options) {
    let numeric = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$stringify$2d$entities$2f$lib$2f$util$2f$to$2d$hexadecimal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHexadecimal"])(code, next, options.omitOptionalSemicolons);
    /** @type {string|undefined} */ let named;
    if (options.useNamedReferences || options.useShortestReferences) {
        named = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$stringify$2d$entities$2f$lib$2f$util$2f$to$2d$named$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toNamed"])(code, next, options.omitOptionalSemicolons, options.attribute);
    }
    // Use the shortest numeric reference when requested.
    // A simple algorithm would use decimal for all code points under 100, as
    // those are shorter than hexadecimal:
    //
    // * `&#99;` vs `&#x63;` (decimal shorter)
    // * `&#100;` vs `&#x64;` (equal)
    //
    // However, because we take `next` into consideration when `omit` is used,
    // And it would be possible that decimals are shorter on bigger values as
    // well if `next` is hexadecimal but not decimal, we instead compare both.
    if ((options.useShortestReferences || !named) && options.useShortestReferences) {
        const decimal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$stringify$2d$entities$2f$lib$2f$util$2f$to$2d$decimal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDecimal"])(code, next, options.omitOptionalSemicolons);
        if (decimal.length < numeric.length) {
            numeric = decimal;
        }
    }
    return named && (!options.useShortestReferences || named.length < numeric.length) ? named : numeric;
}
}),
"[project]/adkit-docs/node_modules/stringify-entities/lib/util/format-basic.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * The smallest way to encode a character.
 *
 * @param {number} code
 * @returns {string}
 */ __turbopack_context__.s([
    "formatBasic",
    ()=>formatBasic
]);
function formatBasic(code) {
    return '&#x' + code.toString(16).toUpperCase() + ';';
}
}),
"[project]/adkit-docs/node_modules/stringify-entities/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('./core.js').CoreOptions & import('./util/format-smart.js').FormatSmartOptions} Options
 * @typedef {import('./core.js').CoreOptions} LightOptions
 */ __turbopack_context__.s([
    "stringifyEntities",
    ()=>stringifyEntities,
    "stringifyEntitiesLight",
    ()=>stringifyEntitiesLight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$stringify$2d$entities$2f$lib$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/stringify-entities/lib/core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$stringify$2d$entities$2f$lib$2f$util$2f$format$2d$smart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/stringify-entities/lib/util/format-smart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$stringify$2d$entities$2f$lib$2f$util$2f$format$2d$basic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/stringify-entities/lib/util/format-basic.js [app-client] (ecmascript)");
;
;
;
function stringifyEntities(value, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$stringify$2d$entities$2f$lib$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["core"])(value, Object.assign({
        format: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$stringify$2d$entities$2f$lib$2f$util$2f$format$2d$smart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatSmart"]
    }, options));
}
function stringifyEntitiesLight(value, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$stringify$2d$entities$2f$lib$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["core"])(value, Object.assign({
        format: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$stringify$2d$entities$2f$lib$2f$util$2f$format$2d$basic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBasic"]
    }, options));
}
}),
"[project]/adkit-docs/node_modules/character-entities-legacy/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * List of legacy HTML named character references that don’t need a trailing semicolon.
 *
 * @type {Array<string>}
 */ __turbopack_context__.s([
    "characterEntitiesLegacy",
    ()=>characterEntitiesLegacy
]);
const characterEntitiesLegacy = [
    'AElig',
    'AMP',
    'Aacute',
    'Acirc',
    'Agrave',
    'Aring',
    'Atilde',
    'Auml',
    'COPY',
    'Ccedil',
    'ETH',
    'Eacute',
    'Ecirc',
    'Egrave',
    'Euml',
    'GT',
    'Iacute',
    'Icirc',
    'Igrave',
    'Iuml',
    'LT',
    'Ntilde',
    'Oacute',
    'Ocirc',
    'Ograve',
    'Oslash',
    'Otilde',
    'Ouml',
    'QUOT',
    'REG',
    'THORN',
    'Uacute',
    'Ucirc',
    'Ugrave',
    'Uuml',
    'Yacute',
    'aacute',
    'acirc',
    'acute',
    'aelig',
    'agrave',
    'amp',
    'aring',
    'atilde',
    'auml',
    'brvbar',
    'ccedil',
    'cedil',
    'cent',
    'copy',
    'curren',
    'deg',
    'divide',
    'eacute',
    'ecirc',
    'egrave',
    'eth',
    'euml',
    'frac12',
    'frac14',
    'frac34',
    'gt',
    'iacute',
    'icirc',
    'iexcl',
    'igrave',
    'iquest',
    'iuml',
    'laquo',
    'lt',
    'macr',
    'micro',
    'middot',
    'nbsp',
    'not',
    'ntilde',
    'oacute',
    'ocirc',
    'ograve',
    'ordf',
    'ordm',
    'oslash',
    'otilde',
    'ouml',
    'para',
    'plusmn',
    'pound',
    'quot',
    'raquo',
    'reg',
    'sect',
    'shy',
    'sup1',
    'sup2',
    'sup3',
    'szlig',
    'thorn',
    'times',
    'uacute',
    'ucirc',
    'ugrave',
    'uml',
    'uuml',
    'yacute',
    'yen',
    'yuml'
];
}),
"[project]/adkit-docs/node_modules/character-entities-html4/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Map of named character references from HTML 4.
 *
 * @type {Record<string, string>}
 */ __turbopack_context__.s([
    "characterEntitiesHtml4",
    ()=>characterEntitiesHtml4
]);
const characterEntitiesHtml4 = {
    nbsp: ' ',
    iexcl: '¡',
    cent: '¢',
    pound: '£',
    curren: '¤',
    yen: '¥',
    brvbar: '¦',
    sect: '§',
    uml: '¨',
    copy: '©',
    ordf: 'ª',
    laquo: '«',
    not: '¬',
    shy: '­',
    reg: '®',
    macr: '¯',
    deg: '°',
    plusmn: '±',
    sup2: '²',
    sup3: '³',
    acute: '´',
    micro: 'µ',
    para: '¶',
    middot: '·',
    cedil: '¸',
    sup1: '¹',
    ordm: 'º',
    raquo: '»',
    frac14: '¼',
    frac12: '½',
    frac34: '¾',
    iquest: '¿',
    Agrave: 'À',
    Aacute: 'Á',
    Acirc: 'Â',
    Atilde: 'Ã',
    Auml: 'Ä',
    Aring: 'Å',
    AElig: 'Æ',
    Ccedil: 'Ç',
    Egrave: 'È',
    Eacute: 'É',
    Ecirc: 'Ê',
    Euml: 'Ë',
    Igrave: 'Ì',
    Iacute: 'Í',
    Icirc: 'Î',
    Iuml: 'Ï',
    ETH: 'Ð',
    Ntilde: 'Ñ',
    Ograve: 'Ò',
    Oacute: 'Ó',
    Ocirc: 'Ô',
    Otilde: 'Õ',
    Ouml: 'Ö',
    times: '×',
    Oslash: 'Ø',
    Ugrave: 'Ù',
    Uacute: 'Ú',
    Ucirc: 'Û',
    Uuml: 'Ü',
    Yacute: 'Ý',
    THORN: 'Þ',
    szlig: 'ß',
    agrave: 'à',
    aacute: 'á',
    acirc: 'â',
    atilde: 'ã',
    auml: 'ä',
    aring: 'å',
    aelig: 'æ',
    ccedil: 'ç',
    egrave: 'è',
    eacute: 'é',
    ecirc: 'ê',
    euml: 'ë',
    igrave: 'ì',
    iacute: 'í',
    icirc: 'î',
    iuml: 'ï',
    eth: 'ð',
    ntilde: 'ñ',
    ograve: 'ò',
    oacute: 'ó',
    ocirc: 'ô',
    otilde: 'õ',
    ouml: 'ö',
    divide: '÷',
    oslash: 'ø',
    ugrave: 'ù',
    uacute: 'ú',
    ucirc: 'û',
    uuml: 'ü',
    yacute: 'ý',
    thorn: 'þ',
    yuml: 'ÿ',
    fnof: 'ƒ',
    Alpha: 'Α',
    Beta: 'Β',
    Gamma: 'Γ',
    Delta: 'Δ',
    Epsilon: 'Ε',
    Zeta: 'Ζ',
    Eta: 'Η',
    Theta: 'Θ',
    Iota: 'Ι',
    Kappa: 'Κ',
    Lambda: 'Λ',
    Mu: 'Μ',
    Nu: 'Ν',
    Xi: 'Ξ',
    Omicron: 'Ο',
    Pi: 'Π',
    Rho: 'Ρ',
    Sigma: 'Σ',
    Tau: 'Τ',
    Upsilon: 'Υ',
    Phi: 'Φ',
    Chi: 'Χ',
    Psi: 'Ψ',
    Omega: 'Ω',
    alpha: 'α',
    beta: 'β',
    gamma: 'γ',
    delta: 'δ',
    epsilon: 'ε',
    zeta: 'ζ',
    eta: 'η',
    theta: 'θ',
    iota: 'ι',
    kappa: 'κ',
    lambda: 'λ',
    mu: 'μ',
    nu: 'ν',
    xi: 'ξ',
    omicron: 'ο',
    pi: 'π',
    rho: 'ρ',
    sigmaf: 'ς',
    sigma: 'σ',
    tau: 'τ',
    upsilon: 'υ',
    phi: 'φ',
    chi: 'χ',
    psi: 'ψ',
    omega: 'ω',
    thetasym: 'ϑ',
    upsih: 'ϒ',
    piv: 'ϖ',
    bull: '•',
    hellip: '…',
    prime: '′',
    Prime: '″',
    oline: '‾',
    frasl: '⁄',
    weierp: '℘',
    image: 'ℑ',
    real: 'ℜ',
    trade: '™',
    alefsym: 'ℵ',
    larr: '←',
    uarr: '↑',
    rarr: '→',
    darr: '↓',
    harr: '↔',
    crarr: '↵',
    lArr: '⇐',
    uArr: '⇑',
    rArr: '⇒',
    dArr: '⇓',
    hArr: '⇔',
    forall: '∀',
    part: '∂',
    exist: '∃',
    empty: '∅',
    nabla: '∇',
    isin: '∈',
    notin: '∉',
    ni: '∋',
    prod: '∏',
    sum: '∑',
    minus: '−',
    lowast: '∗',
    radic: '√',
    prop: '∝',
    infin: '∞',
    ang: '∠',
    and: '∧',
    or: '∨',
    cap: '∩',
    cup: '∪',
    int: '∫',
    there4: '∴',
    sim: '∼',
    cong: '≅',
    asymp: '≈',
    ne: '≠',
    equiv: '≡',
    le: '≤',
    ge: '≥',
    sub: '⊂',
    sup: '⊃',
    nsub: '⊄',
    sube: '⊆',
    supe: '⊇',
    oplus: '⊕',
    otimes: '⊗',
    perp: '⊥',
    sdot: '⋅',
    lceil: '⌈',
    rceil: '⌉',
    lfloor: '⌊',
    rfloor: '⌋',
    lang: '〈',
    rang: '〉',
    loz: '◊',
    spades: '♠',
    clubs: '♣',
    hearts: '♥',
    diams: '♦',
    quot: '"',
    amp: '&',
    lt: '<',
    gt: '>',
    OElig: 'Œ',
    oelig: 'œ',
    Scaron: 'Š',
    scaron: 'š',
    Yuml: 'Ÿ',
    circ: 'ˆ',
    tilde: '˜',
    ensp: ' ',
    emsp: ' ',
    thinsp: ' ',
    zwnj: '‌',
    zwj: '‍',
    lrm: '‎',
    rlm: '‏',
    ndash: '–',
    mdash: '—',
    lsquo: '‘',
    rsquo: '’',
    sbquo: '‚',
    ldquo: '“',
    rdquo: '”',
    bdquo: '„',
    dagger: '†',
    Dagger: '‡',
    permil: '‰',
    lsaquo: '‹',
    rsaquo: '›',
    euro: '€'
};
}),
"[project]/adkit-docs/node_modules/hast-util-to-html/lib/handle/comment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Comment, Parents} from 'hast'
 * @import {State} from '../index.js'
 */ __turbopack_context__.s([
    "comment",
    ()=>comment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$stringify$2d$entities$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/stringify-entities/lib/index.js [app-client] (ecmascript)");
;
const htmlCommentRegex = /^>|^->|<!--|-->|--!>|<!-$/g;
// Declare arrays as variables so it can be cached by `stringifyEntities`
const bogusCommentEntitySubset = [
    '>'
];
const commentEntitySubset = [
    '<',
    '>'
];
function comment(node, _1, _2, state) {
    // See: <https://html.spec.whatwg.org/multipage/syntax.html#comments>
    return state.settings.bogusComments ? '<?' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$stringify$2d$entities$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyEntities"])(node.value, Object.assign({}, state.settings.characterReferences, {
        subset: bogusCommentEntitySubset
    })) + '>' : '<!--' + node.value.replace(htmlCommentRegex, encode) + '-->';
    //TURBOPACK unreachable
    ;
    /**
   * @param {string} $0
   */ function encode($0) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$stringify$2d$entities$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyEntities"])($0, Object.assign({}, state.settings.characterReferences, {
            subset: commentEntitySubset
        }));
    }
}
}),
"[project]/adkit-docs/node_modules/hast-util-to-html/lib/handle/doctype.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Doctype, Parents} from 'hast'
 * @import {State} from '../index.js'
 */ /**
 * Serialize a doctype.
 *
 * @param {Doctype} _1
 *   Node to handle.
 * @param {number | undefined} _2
 *   Index of `node` in `parent.
 * @param {Parents | undefined} _3
 *   Parent of `node`.
 * @param {State} state
 *   Info passed around about the current state.
 * @returns {string}
 *   Serialized node.
 */ __turbopack_context__.s([
    "doctype",
    ()=>doctype
]);
function doctype(_1, _2, _3, state) {
    return '<!' + (state.settings.upperDoctype ? 'DOCTYPE' : 'doctype') + (state.settings.tightDoctype ? '' : ' ') + 'html>';
}
}),
"[project]/adkit-docs/node_modules/hast-util-to-html/lib/omission/util/siblings.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Parents, RootContent} from 'hast'
 */ __turbopack_context__.s([
    "siblingAfter",
    ()=>siblingAfter,
    "siblingBefore",
    ()=>siblingBefore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$whitespace$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/hast-util-whitespace/lib/index.js [app-client] (ecmascript)");
;
const siblingAfter = siblings(1);
const siblingBefore = siblings(-1);
/** @type {Array<RootContent>} */ const emptyChildren = [];
/**
 * Factory to check siblings in a direction.
 *
 * @param {number} increment
 */ function siblings(increment) {
    return sibling;
    //TURBOPACK unreachable
    ;
    /**
   * Find applicable siblings in a direction.
   *
   * @template {Parents} Parent
   *   Parent type.
   * @param {Parent | undefined} parent
   *   Parent.
   * @param {number | undefined} index
   *   Index of child in `parent`.
   * @param {boolean | undefined} [includeWhitespace=false]
   *   Whether to include whitespace (default: `false`).
   * @returns {Parent extends {children: Array<infer Child>} ? Child | undefined : never}
   *   Child of parent.
   */ function sibling(parent, index, includeWhitespace) {
        const siblings = parent ? parent.children : emptyChildren;
        let offset = (index || 0) + increment;
        let next = siblings[offset];
        if (!includeWhitespace) {
            while(next && (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$whitespace$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["whitespace"])(next)){
                offset += increment;
                next = siblings[offset];
            }
        }
        // @ts-expect-error: it’s a correct child.
        return next;
    }
}
}),
"[project]/adkit-docs/node_modules/hast-util-to-html/lib/omission/omission.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Element, Parents} from 'hast'
 */ /**
 * @callback OmitHandle
 *   Check if a tag can be omitted.
 * @param {Element} element
 *   Element to check.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether to omit a tag.
 *
 */ __turbopack_context__.s([
    "omission",
    ()=>omission
]);
const own = {}.hasOwnProperty;
function omission(handlers) {
    return omit;
    //TURBOPACK unreachable
    ;
    /**
   * Check if a given node can have a tag omitted.
   *
   * @type {OmitHandle}
   */ function omit(node, index, parent) {
        return own.call(handlers, node.tagName) && handlers[node.tagName](node, index, parent);
    }
}
}),
"[project]/adkit-docs/node_modules/hast-util-to-html/lib/omission/closing.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Element, Parents} from 'hast'
 */ __turbopack_context__.s([
    "closing",
    ()=>closing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$whitespace$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/hast-util-whitespace/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$util$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/hast-util-to-html/lib/omission/util/siblings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$omission$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/hast-util-to-html/lib/omission/omission.js [app-client] (ecmascript)");
;
;
;
const closing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$omission$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["omission"])({
    body,
    caption: headOrColgroupOrCaption,
    colgroup: headOrColgroupOrCaption,
    dd,
    dt,
    head: headOrColgroupOrCaption,
    html,
    li,
    optgroup,
    option,
    p,
    rp: rubyElement,
    rt: rubyElement,
    tbody,
    td: cells,
    tfoot,
    th: cells,
    thead,
    tr
});
/**
 * Macro for `</head>`, `</colgroup>`, and `</caption>`.
 *
 * @param {Element} _
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the closing tag can be omitted.
 */ function headOrColgroupOrCaption(_, index, parent) {
    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$util$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siblingAfter"])(parent, index, true);
    return !next || next.type !== 'comment' && !(next.type === 'text' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$whitespace$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["whitespace"])(next.value.charAt(0)));
}
/**
 * Whether to omit `</html>`.
 *
 * @param {Element} _
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the closing tag can be omitted.
 */ function html(_, index, parent) {
    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$util$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siblingAfter"])(parent, index);
    return !next || next.type !== 'comment';
}
/**
 * Whether to omit `</body>`.
 *
 * @param {Element} _
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the closing tag can be omitted.
 */ function body(_, index, parent) {
    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$util$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siblingAfter"])(parent, index);
    return !next || next.type !== 'comment';
}
/**
 * Whether to omit `</p>`.
 *
 * @param {Element} _
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the closing tag can be omitted.
 */ function p(_, index, parent) {
    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$util$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siblingAfter"])(parent, index);
    return next ? next.type === 'element' && (next.tagName === 'address' || next.tagName === 'article' || next.tagName === 'aside' || next.tagName === 'blockquote' || next.tagName === 'details' || next.tagName === 'div' || next.tagName === 'dl' || next.tagName === 'fieldset' || next.tagName === 'figcaption' || next.tagName === 'figure' || next.tagName === 'footer' || next.tagName === 'form' || next.tagName === 'h1' || next.tagName === 'h2' || next.tagName === 'h3' || next.tagName === 'h4' || next.tagName === 'h5' || next.tagName === 'h6' || next.tagName === 'header' || next.tagName === 'hgroup' || next.tagName === 'hr' || next.tagName === 'main' || next.tagName === 'menu' || next.tagName === 'nav' || next.tagName === 'ol' || next.tagName === 'p' || next.tagName === 'pre' || next.tagName === 'section' || next.tagName === 'table' || next.tagName === 'ul') : !parent || // Confusing parent.
    !(parent.type === 'element' && (parent.tagName === 'a' || parent.tagName === 'audio' || parent.tagName === 'del' || parent.tagName === 'ins' || parent.tagName === 'map' || parent.tagName === 'noscript' || parent.tagName === 'video'));
}
/**
 * Whether to omit `</li>`.
 *
 * @param {Element} _
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the closing tag can be omitted.
 */ function li(_, index, parent) {
    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$util$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siblingAfter"])(parent, index);
    return !next || next.type === 'element' && next.tagName === 'li';
}
/**
 * Whether to omit `</dt>`.
 *
 * @param {Element} _
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the closing tag can be omitted.
 */ function dt(_, index, parent) {
    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$util$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siblingAfter"])(parent, index);
    return Boolean(next && next.type === 'element' && (next.tagName === 'dt' || next.tagName === 'dd'));
}
/**
 * Whether to omit `</dd>`.
 *
 * @param {Element} _
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the closing tag can be omitted.
 */ function dd(_, index, parent) {
    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$util$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siblingAfter"])(parent, index);
    return !next || next.type === 'element' && (next.tagName === 'dt' || next.tagName === 'dd');
}
/**
 * Whether to omit `</rt>` or `</rp>`.
 *
 * @param {Element} _
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the closing tag can be omitted.
 */ function rubyElement(_, index, parent) {
    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$util$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siblingAfter"])(parent, index);
    return !next || next.type === 'element' && (next.tagName === 'rp' || next.tagName === 'rt');
}
/**
 * Whether to omit `</optgroup>`.
 *
 * @param {Element} _
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the closing tag can be omitted.
 */ function optgroup(_, index, parent) {
    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$util$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siblingAfter"])(parent, index);
    return !next || next.type === 'element' && next.tagName === 'optgroup';
}
/**
 * Whether to omit `</option>`.
 *
 * @param {Element} _
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the closing tag can be omitted.
 */ function option(_, index, parent) {
    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$util$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siblingAfter"])(parent, index);
    return !next || next.type === 'element' && (next.tagName === 'option' || next.tagName === 'optgroup');
}
/**
 * Whether to omit `</thead>`.
 *
 * @param {Element} _
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the closing tag can be omitted.
 */ function thead(_, index, parent) {
    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$util$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siblingAfter"])(parent, index);
    return Boolean(next && next.type === 'element' && (next.tagName === 'tbody' || next.tagName === 'tfoot'));
}
/**
 * Whether to omit `</tbody>`.
 *
 * @param {Element} _
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the closing tag can be omitted.
 */ function tbody(_, index, parent) {
    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$util$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siblingAfter"])(parent, index);
    return !next || next.type === 'element' && (next.tagName === 'tbody' || next.tagName === 'tfoot');
}
/**
 * Whether to omit `</tfoot>`.
 *
 * @param {Element} _
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the closing tag can be omitted.
 */ function tfoot(_, index, parent) {
    return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$util$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siblingAfter"])(parent, index);
}
/**
 * Whether to omit `</tr>`.
 *
 * @param {Element} _
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the closing tag can be omitted.
 */ function tr(_, index, parent) {
    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$util$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siblingAfter"])(parent, index);
    return !next || next.type === 'element' && next.tagName === 'tr';
}
/**
 * Whether to omit `</td>` or `</th>`.
 *
 * @param {Element} _
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the closing tag can be omitted.
 */ function cells(_, index, parent) {
    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$util$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siblingAfter"])(parent, index);
    return !next || next.type === 'element' && (next.tagName === 'td' || next.tagName === 'th');
}
}),
"[project]/adkit-docs/node_modules/hast-util-to-html/lib/omission/opening.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Element, Parents} from 'hast'
 */ __turbopack_context__.s([
    "opening",
    ()=>opening
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$whitespace$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/hast-util-whitespace/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$util$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/hast-util-to-html/lib/omission/util/siblings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$closing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/hast-util-to-html/lib/omission/closing.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$omission$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/hast-util-to-html/lib/omission/omission.js [app-client] (ecmascript)");
;
;
;
;
const opening = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$omission$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["omission"])({
    body,
    colgroup,
    head,
    html,
    tbody
});
/**
 * Whether to omit `<html>`.
 *
 * @param {Element} node
 *   Element.
 * @returns {boolean}
 *   Whether the opening tag can be omitted.
 */ function html(node) {
    const head = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$util$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siblingAfter"])(node, -1);
    return !head || head.type !== 'comment';
}
/**
 * Whether to omit `<head>`.
 *
 * @param {Element} node
 *   Element.
 * @returns {boolean}
 *   Whether the opening tag can be omitted.
 */ function head(node) {
    /** @type {Set<string>} */ const seen = new Set();
    // Whether `srcdoc` or not,
    // make sure the content model at least doesn’t have too many `base`s/`title`s.
    for (const child of node.children){
        if (child.type === 'element' && (child.tagName === 'base' || child.tagName === 'title')) {
            if (seen.has(child.tagName)) return false;
            seen.add(child.tagName);
        }
    }
    // “May be omitted if the element is empty,
    // or if the first thing inside the head element is an element.”
    const child = node.children[0];
    return !child || child.type === 'element';
}
/**
 * Whether to omit `<body>`.
 *
 * @param {Element} node
 *   Element.
 * @returns {boolean}
 *   Whether the opening tag can be omitted.
 */ function body(node) {
    const head = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$util$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siblingAfter"])(node, -1, true);
    return !head || head.type !== 'comment' && !(head.type === 'text' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$whitespace$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["whitespace"])(head.value.charAt(0))) && !(head.type === 'element' && (head.tagName === 'meta' || head.tagName === 'link' || head.tagName === 'script' || head.tagName === 'style' || head.tagName === 'template'));
}
/**
 * Whether to omit `<colgroup>`.
 * The spec describes some logic for the opening tag, but it’s easier to
 * implement in the closing tag, to the same effect, so we handle it there
 * instead.
 *
 * @param {Element} node
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the opening tag can be omitted.
 */ function colgroup(node, index, parent) {
    const previous = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$util$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siblingBefore"])(parent, index);
    const head = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$util$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siblingAfter"])(node, -1, true);
    // Previous colgroup was already omitted.
    if (parent && previous && previous.type === 'element' && previous.tagName === 'colgroup' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$closing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["closing"])(previous, parent.children.indexOf(previous), parent)) {
        return false;
    }
    return Boolean(head && head.type === 'element' && head.tagName === 'col');
}
/**
 * Whether to omit `<tbody>`.
 *
 * @param {Element} node
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the opening tag can be omitted.
 */ function tbody(node, index, parent) {
    const previous = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$util$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siblingBefore"])(parent, index);
    const head = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$util$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siblingAfter"])(node, -1);
    // Previous table section was already omitted.
    if (parent && previous && previous.type === 'element' && (previous.tagName === 'thead' || previous.tagName === 'tbody') && (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$closing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["closing"])(previous, parent.children.indexOf(previous), parent)) {
        return false;
    }
    return Boolean(head && head.type === 'element' && head.tagName === 'tr');
}
}),
"[project]/adkit-docs/node_modules/hast-util-to-html/lib/handle/element.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Element, Parents, Properties} from 'hast'
 * @import {State} from '../index.js'
 */ __turbopack_context__.s([
    "element",
    ()=>element
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$ccount$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/ccount/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$comma$2d$separated$2d$tokens$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/comma-separated-tokens/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$find$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/property-information/lib/find.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/property-information/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$space$2d$separated$2d$tokens$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/space-separated-tokens/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$stringify$2d$entities$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/stringify-entities/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$closing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/hast-util-to-html/lib/omission/closing.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$opening$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/hast-util-to-html/lib/omission/opening.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
/**
 * Maps of subsets.
 *
 * Each value is a matrix of tuples.
 * The value at `0` causes parse errors, the value at `1` is valid.
 * Of both, the value at `0` is unsafe, and the value at `1` is safe.
 *
 * @type {Record<'double' | 'name' | 'single' | 'unquoted', Array<[Array<string>, Array<string>]>>}
 */ const constants = {
    // See: <https://html.spec.whatwg.org/#attribute-name-state>.
    name: [
        [
            '\t\n\f\r &/=>'.split(''),
            '\t\n\f\r "&\'/=>`'.split('')
        ],
        [
            '\0\t\n\f\r "&\'/<=>'.split(''),
            '\0\t\n\f\r "&\'/<=>`'.split('')
        ]
    ],
    // See: <https://html.spec.whatwg.org/#attribute-value-(unquoted)-state>.
    unquoted: [
        [
            '\t\n\f\r &>'.split(''),
            '\0\t\n\f\r "&\'<=>`'.split('')
        ],
        [
            '\0\t\n\f\r "&\'<=>`'.split(''),
            '\0\t\n\f\r "&\'<=>`'.split('')
        ]
    ],
    // See: <https://html.spec.whatwg.org/#attribute-value-(single-quoted)-state>.
    single: [
        [
            "&'".split(''),
            '"&\'`'.split('')
        ],
        [
            "\0&'".split(''),
            '\0"&\'`'.split('')
        ]
    ],
    // See: <https://html.spec.whatwg.org/#attribute-value-(double-quoted)-state>.
    double: [
        [
            '"&'.split(''),
            '"&\'`'.split('')
        ],
        [
            '\0"&'.split(''),
            '\0"&\'`'.split('')
        ]
    ]
};
function element(node, index, parent, state) {
    const schema = state.schema;
    const omit = schema.space === 'svg' ? false : state.settings.omitOptionalTags;
    let selfClosing = schema.space === 'svg' ? state.settings.closeEmptyElements : state.settings.voids.includes(node.tagName.toLowerCase());
    /** @type {Array<string>} */ const parts = [];
    /** @type {string} */ let last;
    if (schema.space === 'html' && node.tagName === 'svg') {
        state.schema = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["svg"];
    }
    const attributes = serializeAttributes(state, node.properties);
    const content = state.all(schema.space === 'html' && node.tagName === 'template' ? node.content : node);
    state.schema = schema;
    // If the node is categorised as void, but it has children, remove the
    // categorisation.
    // This enables for example `menuitem`s, which are void in W3C HTML but not
    // void in WHATWG HTML, to be stringified properly.
    // Note: `menuitem` has since been removed from the HTML spec, and so is no
    // longer void.
    if (content) selfClosing = false;
    if (attributes || !omit || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$opening$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["opening"])(node, index, parent)) {
        parts.push('<', node.tagName, attributes ? ' ' + attributes : '');
        if (selfClosing && (schema.space === 'svg' || state.settings.closeSelfClosing)) {
            last = attributes.charAt(attributes.length - 1);
            if (!state.settings.tightSelfClosing || last === '/' || last && last !== '"' && last !== "'") {
                parts.push(' ');
            }
            parts.push('/');
        }
        parts.push('>');
    }
    parts.push(content);
    if (!selfClosing && (!omit || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$omission$2f$closing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["closing"])(node, index, parent))) {
        parts.push('</' + node.tagName + '>');
    }
    return parts.join('');
}
/**
 * @param {State} state
 * @param {Properties | null | undefined} properties
 * @returns {string}
 */ function serializeAttributes(state, properties) {
    /** @type {Array<string>} */ const values = [];
    let index = -1;
    /** @type {string} */ let key;
    if (properties) {
        for(key in properties){
            if (properties[key] !== null && properties[key] !== undefined) {
                const value = serializeAttribute(state, key, properties[key]);
                if (value) values.push(value);
            }
        }
    }
    while(++index < values.length){
        const last = state.settings.tightAttributes ? values[index].charAt(values[index].length - 1) : undefined;
        // In tight mode, don’t add a space after quoted attributes.
        if (index !== values.length - 1 && last !== '"' && last !== "'") {
            values[index] += ' ';
        }
    }
    return values.join('');
}
/**
 * @param {State} state
 * @param {string} key
 * @param {Properties[keyof Properties]} value
 * @returns {string}
 */ function serializeAttribute(state, key, value) {
    const info = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$lib$2f$find$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["find"])(state.schema, key);
    const x = state.settings.allowParseErrors && state.schema.space === 'html' ? 0 : 1;
    const y = state.settings.allowDangerousCharacters ? 0 : 1;
    let quote = state.quote;
    /** @type {string | undefined} */ let result;
    if (info.overloadedBoolean && (value === info.attribute || value === '')) {
        value = true;
    } else if ((info.boolean || info.overloadedBoolean) && (typeof value !== 'string' || value === info.attribute || value === '')) {
        value = Boolean(value);
    }
    if (value === null || value === undefined || value === false || typeof value === 'number' && Number.isNaN(value)) {
        return '';
    }
    const name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$stringify$2d$entities$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyEntities"])(info.attribute, Object.assign({}, state.settings.characterReferences, {
        // Always encode without parse errors in non-HTML.
        subset: constants.name[x][y]
    }));
    // No value.
    // There is currently only one boolean property in SVG: `[download]` on
    // `<a>`.
    // This property does not seem to work in browsers (Firefox, Safari, Chrome),
    // so I can’t test if dropping the value works.
    // But I assume that it should:
    //
    // ```html
    // <!doctype html>
    // <svg viewBox="0 0 100 100">
    //   <a href=https://example.com download>
    //     <circle cx=50 cy=40 r=35 />
    //   </a>
    // </svg>
    // ```
    //
    // See: <https://github.com/wooorm/property-information/blob/main/lib/svg.js>
    if (value === true) return name;
    // `spaces` doesn’t accept a second argument, but it’s given here just to
    // keep the code cleaner.
    value = Array.isArray(value) ? (info.commaSeparated ? __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$comma$2d$separated$2d$tokens$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"] : __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$space$2d$separated$2d$tokens$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])(value, {
        padLeft: !state.settings.tightCommaSeparatedLists
    }) : String(value);
    if (state.settings.collapseEmptyAttributes && !value) return name;
    // Check unquoted value.
    if (state.settings.preferUnquoted) {
        result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$stringify$2d$entities$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyEntities"])(value, Object.assign({}, state.settings.characterReferences, {
            attribute: true,
            subset: constants.unquoted[x][y]
        }));
    }
    // If we don’t want unquoted, or if `value` contains character references when
    // unquoted…
    if (result !== value) {
        // If the alternative is less common than `quote`, switch.
        if (state.settings.quoteSmart && (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$ccount$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ccount"])(value, quote) > (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$ccount$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ccount"])(value, state.alternative)) {
            quote = state.alternative;
        }
        result = quote + (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$stringify$2d$entities$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyEntities"])(value, Object.assign({}, state.settings.characterReferences, {
            // Always encode without parse errors in non-HTML.
            subset: (quote === "'" ? constants.single : constants.double)[x][y],
            attribute: true
        })) + quote;
    }
    // Don’t add a `=` for unquoted empties.
    return name + (result ? '=' + result : result);
}
}),
"[project]/adkit-docs/node_modules/hast-util-to-html/lib/handle/text.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Parents, Text} from 'hast'
 * @import {Raw} from 'mdast-util-to-hast'
 * @import {State} from '../index.js'
 */ __turbopack_context__.s([
    "text",
    ()=>text
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$stringify$2d$entities$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/stringify-entities/lib/index.js [app-client] (ecmascript)");
;
// Declare array as variable so it can be cached by `stringifyEntities`
const textEntitySubset = [
    '<',
    '&'
];
function text(node, _, parent, state) {
    // Check if content of `node` should be escaped.
    return parent && parent.type === 'element' && (parent.tagName === 'script' || parent.tagName === 'style') ? node.value : (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$stringify$2d$entities$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyEntities"])(node.value, Object.assign({}, state.settings.characterReferences, {
        subset: textEntitySubset
    }));
}
}),
"[project]/adkit-docs/node_modules/hast-util-to-html/lib/handle/raw.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Parents} from 'hast'
 * @import {Raw} from 'mdast-util-to-hast'
 * @import {State} from '../index.js'
 */ __turbopack_context__.s([
    "raw",
    ()=>raw
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$handle$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/hast-util-to-html/lib/handle/text.js [app-client] (ecmascript)");
;
function raw(node, index, parent, state) {
    return state.settings.allowDangerousHtml ? node.value : (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$handle$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["text"])(node, index, parent, state);
}
}),
"[project]/adkit-docs/node_modules/hast-util-to-html/lib/handle/root.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Parents, Root} from 'hast'
 * @import {State} from '../index.js'
 */ /**
 * Serialize a root.
 *
 * @param {Root} node
 *   Node to handle.
 * @param {number | undefined} _1
 *   Index of `node` in `parent.
 * @param {Parents | undefined} _2
 *   Parent of `node`.
 * @param {State} state
 *   Info passed around about the current state.
 * @returns {string}
 *   Serialized node.
 */ __turbopack_context__.s([
    "root",
    ()=>root
]);
function root(node, _1, _2, state) {
    return state.all(node);
}
}),
"[project]/adkit-docs/node_modules/hast-util-to-html/lib/handle/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Nodes, Parents} from 'hast'
 * @import {State} from '../index.js'
 */ __turbopack_context__.s([
    "handle",
    ()=>handle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$zwitch$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/zwitch/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$handle$2f$comment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/hast-util-to-html/lib/handle/comment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$handle$2f$doctype$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/hast-util-to-html/lib/handle/doctype.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$handle$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/hast-util-to-html/lib/handle/element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$handle$2f$raw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/hast-util-to-html/lib/handle/raw.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$handle$2f$root$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/hast-util-to-html/lib/handle/root.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$handle$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/hast-util-to-html/lib/handle/text.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const handle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$zwitch$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zwitch"])('type', {
    invalid,
    unknown,
    handlers: {
        comment: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$handle$2f$comment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["comment"],
        doctype: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$handle$2f$doctype$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doctype"],
        element: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$handle$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["element"],
        raw: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$handle$2f$raw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["raw"],
        root: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$handle$2f$root$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["root"],
        text: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$handle$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["text"]
    }
});
/**
 * Fail when a non-node is found in the tree.
 *
 * @param {unknown} node
 *   Unknown value.
 * @returns {never}
 *   Never.
 */ function invalid(node) {
    throw new Error('Expected node, not `' + node + '`');
}
/**
 * Fail when a node with an unknown type is found in the tree.
 *
 * @param {unknown} node_
 *  Unknown node.
 * @returns {never}
 *   Never.
 */ function unknown(node_) {
    // `type` is guaranteed by runtime JS.
    const node = node_;
    throw new Error('Cannot compile unknown node `' + node.type + '`');
}
}),
"[project]/adkit-docs/node_modules/hast-util-to-html/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Nodes, Parents, RootContent} from 'hast'
 * @import {Schema} from 'property-information'
 * @import {Options as StringifyEntitiesOptions} from 'stringify-entities'
 */ /**
 * @typedef {Omit<StringifyEntitiesOptions, 'attribute' | 'escapeOnly' | 'subset'>} CharacterReferences
 *
 * @typedef Options
 *   Configuration.
 * @property {boolean | null | undefined} [allowDangerousCharacters=false]
 *   Do not encode some characters which cause XSS vulnerabilities in older
 *   browsers (default: `false`).
 *
 *   > ⚠️ **Danger**: only set this if you completely trust the content.
 * @property {boolean | null | undefined} [allowDangerousHtml=false]
 *   Allow `raw` nodes and insert them as raw HTML (default: `false`).
 *
 *   When `false`, `Raw` nodes are encoded.
 *
 *   > ⚠️ **Danger**: only set this if you completely trust the content.
 * @property {boolean | null | undefined} [allowParseErrors=false]
 *   Do not encode characters which cause parse errors (even though they work),
 *   to save bytes (default: `false`).
 *
 *   Not used in the SVG space.
 *
 *   > 👉 **Note**: intentionally creates parse errors in markup (how parse
 *   > errors are handled is well defined, so this works but isn’t pretty).
 * @property {boolean | null | undefined} [bogusComments=false]
 *   Use “bogus comments” instead of comments to save byes: `<?charlie>`
 *   instead of `<!--charlie-->` (default: `false`).
 *
 *   > 👉 **Note**: intentionally creates parse errors in markup (how parse
 *   > errors are handled is well defined, so this works but isn’t pretty).
 * @property {CharacterReferences | null | undefined} [characterReferences]
 *   Configure how to serialize character references (optional).
 * @property {boolean | null | undefined} [closeEmptyElements=false]
 *   Close SVG elements without any content with slash (`/`) on the opening tag
 *   instead of an end tag: `<circle />` instead of `<circle></circle>`
 *   (default: `false`).
 *
 *   See `tightSelfClosing` to control whether a space is used before the
 *   slash.
 *
 *   Not used in the HTML space.
 * @property {boolean | null | undefined} [closeSelfClosing=false]
 *   Close self-closing nodes with an extra slash (`/`): `<img />` instead of
 *   `<img>` (default: `false`).
 *
 *   See `tightSelfClosing` to control whether a space is used before the
 *   slash.
 *
 *   Not used in the SVG space.
 * @property {boolean | null | undefined} [collapseEmptyAttributes=false]
 *   Collapse empty attributes: get `class` instead of `class=""` (default:
 *   `false`).
 *
 *   Not used in the SVG space.
 *
 *   > 👉 **Note**: boolean attributes (such as `hidden`) are always collapsed.
 * @property {boolean | null | undefined} [omitOptionalTags=false]
 *   Omit optional opening and closing tags (default: `false`).
 *
 *   For example, in `<ol><li>one</li><li>two</li></ol>`, both `</li>` closing
 *   tags can be omitted.
 *   The first because it’s followed by another `li`, the last because it’s
 *   followed by nothing.
 *
 *   Not used in the SVG space.
 * @property {boolean | null | undefined} [preferUnquoted=false]
 *   Leave attributes unquoted if that results in less bytes (default: `false`).
 *
 *   Not used in the SVG space.
 * @property {boolean | null | undefined} [quoteSmart=false]
 *   Use the other quote if that results in less bytes (default: `false`).
 * @property {Quote | null | undefined} [quote='"']
 *   Preferred quote to use (default: `'"'`).
 * @property {Space | null | undefined} [space='html']
 *   When an `<svg>` element is found in the HTML space, this package already
 *   automatically switches to and from the SVG space when entering and exiting
 *   it (default: `'html'`).
 *
 *   > 👉 **Note**: hast is not XML.
 *   > It supports SVG as embedded in HTML.
 *   > It does not support the features available in XML.
 *   > Passing SVG might break but fragments of modern SVG should be fine.
 *   > Use [`xast`][xast] if you need to support SVG as XML.
 * @property {boolean | null | undefined} [tightAttributes=false]
 *   Join attributes together, without whitespace, if possible: get
 *   `class="a b"title="c d"` instead of `class="a b" title="c d"` to save
 *   bytes (default: `false`).
 *
 *   Not used in the SVG space.
 *
 *   > 👉 **Note**: intentionally creates parse errors in markup (how parse
 *   > errors are handled is well defined, so this works but isn’t pretty).
 * @property {boolean | null | undefined} [tightCommaSeparatedLists=false]
 *   Join known comma-separated attribute values with just a comma (`,`),
 *   instead of padding them on the right as well (`,␠`, where `␠` represents a
 *   space) (default: `false`).
 * @property {boolean | null | undefined} [tightDoctype=false]
 *   Drop unneeded spaces in doctypes: `<!doctypehtml>` instead of
 *   `<!doctype html>` to save bytes (default: `false`).
 *
 *   > 👉 **Note**: intentionally creates parse errors in markup (how parse
 *   > errors are handled is well defined, so this works but isn’t pretty).
 * @property {boolean | null | undefined} [tightSelfClosing=false]
 *   Do not use an extra space when closing self-closing elements: `<img/>`
 *   instead of `<img />` (default: `false`).
 *
 *   > 👉 **Note**: only used if `closeSelfClosing: true` or
 *   > `closeEmptyElements: true`.
 * @property {boolean | null | undefined} [upperDoctype=false]
 *   Use a `<!DOCTYPE…` instead of `<!doctype…` (default: `false`).
 *
 *   Useless except for XHTML.
 * @property {ReadonlyArray<string> | null | undefined} [voids]
 *   Tag names of elements to serialize without closing tag (default: `html-void-elements`).
 *
 *   Not used in the SVG space.
 *
 *   > 👉 **Note**: It’s highly unlikely that you want to pass this, because
 *   > hast is not for XML, and HTML will not add more void elements.
 *
 * @typedef {'"' | "'"} Quote
 *   HTML quotes for attribute values.
 *
 * @typedef {Omit<Required<{[key in keyof Options]: Exclude<Options[key], null | undefined>}>, 'space' | 'quote'>} Settings
 *
 * @typedef {'html' | 'svg'} Space
 *   Namespace.
 *
 * @typedef State
 *   Info passed around about the current state.
 * @property {(node: Parents | undefined) => string} all
 *   Serialize the children of a parent node.
 * @property {Quote} alternative
 *   Alternative quote.
 * @property {(node: Nodes, index: number | undefined, parent: Parents | undefined) => string} one
 *   Serialize one node.
 * @property {Quote} quote
 *   Preferred quote.
 * @property {Schema} schema
 *   Current schema.
 * @property {Settings} settings
 *   User configuration.
 */ __turbopack_context__.s([
    "all",
    ()=>all,
    "toHtml",
    ()=>toHtml
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$html$2d$void$2d$elements$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/html-void-elements/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/property-information/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$handle$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/hast-util-to-html/lib/handle/index.js [app-client] (ecmascript)");
;
;
;
/** @type {Options} */ const emptyOptions = {};
/** @type {CharacterReferences} */ const emptyCharacterReferences = {};
/** @type {Array<never>} */ const emptyChildren = [];
function toHtml(tree, options) {
    const options_ = options || emptyOptions;
    const quote = options_.quote || '"';
    const alternative = quote === '"' ? "'" : '"';
    if (quote !== '"' && quote !== "'") {
        throw new Error('Invalid quote `' + quote + '`, expected `\'` or `"`');
    }
    /** @type {State} */ const state = {
        one,
        all,
        settings: {
            omitOptionalTags: options_.omitOptionalTags || false,
            allowParseErrors: options_.allowParseErrors || false,
            allowDangerousCharacters: options_.allowDangerousCharacters || false,
            quoteSmart: options_.quoteSmart || false,
            preferUnquoted: options_.preferUnquoted || false,
            tightAttributes: options_.tightAttributes || false,
            upperDoctype: options_.upperDoctype || false,
            tightDoctype: options_.tightDoctype || false,
            bogusComments: options_.bogusComments || false,
            tightCommaSeparatedLists: options_.tightCommaSeparatedLists || false,
            tightSelfClosing: options_.tightSelfClosing || false,
            collapseEmptyAttributes: options_.collapseEmptyAttributes || false,
            allowDangerousHtml: options_.allowDangerousHtml || false,
            voids: options_.voids || __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$html$2d$void$2d$elements$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["htmlVoidElements"],
            characterReferences: options_.characterReferences || emptyCharacterReferences,
            closeSelfClosing: options_.closeSelfClosing || false,
            closeEmptyElements: options_.closeEmptyElements || false
        },
        schema: options_.space === 'svg' ? __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["svg"] : __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$property$2d$information$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["html"],
        quote,
        alternative
    };
    return state.one(Array.isArray(tree) ? {
        type: 'root',
        children: tree
    } : tree, undefined, undefined);
}
/**
 * Serialize a node.
 *
 * @this {State}
 *   Info passed around about the current state.
 * @param {Nodes} node
 *   Node to handle.
 * @param {number | undefined} index
 *   Index of `node` in `parent.
 * @param {Parents | undefined} parent
 *   Parent of `node`.
 * @returns {string}
 *   Serialized node.
 */ function one(node, index, parent) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$handle$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handle"])(node, index, parent, this);
}
function all(parent) {
    /** @type {Array<string>} */ const results = [];
    const children = parent && parent.children || emptyChildren;
    let index = -1;
    while(++index < children.length){
        results[index] = this.one(children[index], index, parent);
    }
    return results.join('');
}
}),
"[project]/adkit-docs/node_modules/ccount/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Count how often a character (or substring) is used in a string.
 *
 * @param {string} value
 *   Value to search in.
 * @param {string} character
 *   Character (or substring) to look for.
 * @return {number}
 *   Number of times `character` occurred in `value`.
 */ __turbopack_context__.s([
    "ccount",
    ()=>ccount
]);
function ccount(value, character) {
    const source = String(value);
    if (typeof character !== 'string') {
        throw new TypeError('Expected character');
    }
    let count = 0;
    let index = source.indexOf(character);
    while(index !== -1){
        count++;
        index = source.indexOf(character, index + character.length);
    }
    return count;
}
}),
"[project]/adkit-docs/node_modules/comma-separated-tokens/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef Options
 *   Configuration for `stringify`.
 * @property {boolean} [padLeft=true]
 *   Whether to pad a space before a token.
 * @property {boolean} [padRight=false]
 *   Whether to pad a space after a token.
 */ /**
 * @typedef {Options} StringifyOptions
 *   Please use `StringifyOptions` instead.
 */ /**
 * Parse comma-separated tokens to an array.
 *
 * @param {string} value
 *   Comma-separated tokens.
 * @returns {Array<string>}
 *   List of tokens.
 */ __turbopack_context__.s([
    "parse",
    ()=>parse,
    "stringify",
    ()=>stringify
]);
function parse(value) {
    /** @type {Array<string>} */ const tokens = [];
    const input = String(value || '');
    let index = input.indexOf(',');
    let start = 0;
    /** @type {boolean} */ let end = false;
    while(!end){
        if (index === -1) {
            index = input.length;
            end = true;
        }
        const token = input.slice(start, index).trim();
        if (token || !end) {
            tokens.push(token);
        }
        start = index + 1;
        index = input.indexOf(',', start);
    }
    return tokens;
}
function stringify(values, options) {
    const settings = options || {};
    // Ensure the last empty entry is seen.
    const input = values[values.length - 1] === '' ? [
        ...values,
        ''
    ] : values;
    return input.join((settings.padRight ? ' ' : '') + ',' + (settings.padLeft === false ? '' : ' ')).trim();
}
}),
"[project]/adkit-docs/node_modules/space-separated-tokens/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Parse space-separated tokens to an array of strings.
 *
 * @param {string} value
 *   Space-separated tokens.
 * @returns {Array<string>}
 *   List of tokens.
 */ __turbopack_context__.s([
    "parse",
    ()=>parse,
    "stringify",
    ()=>stringify
]);
function parse(value) {
    const input = String(value || '').trim();
    return input ? input.split(/[ \t\n\r\f]+/g) : [];
}
function stringify(values) {
    return values.join(' ').trim();
}
}),
"[project]/adkit-docs/node_modules/hast-util-whitespace/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Nodes} Nodes
 */ // HTML whitespace expression.
// See <https://infra.spec.whatwg.org/#ascii-whitespace>.
__turbopack_context__.s([
    "whitespace",
    ()=>whitespace
]);
const re = /[ \t\n\f\r]/g;
function whitespace(thing) {
    return typeof thing === 'object' ? thing.type === 'text' ? empty(thing.value) : false : empty(thing);
}
/**
 * @param {string} value
 * @returns {boolean}
 */ function empty(value) {
    return value.replace(re, '') === '';
}
}),
"[project]/adkit-docs/node_modules/@shikijs/core/dist/index.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addClassToHast",
    ()=>addClassToHast,
    "applyColorReplacements",
    ()=>applyColorReplacements,
    "codeToHast",
    ()=>codeToHast,
    "codeToHtml",
    ()=>codeToHtml,
    "codeToTokens",
    ()=>codeToTokens,
    "codeToTokensBase",
    ()=>codeToTokensBase,
    "codeToTokensWithThemes",
    ()=>codeToTokensWithThemes,
    "createBundledHighlighter",
    ()=>createBundledHighlighter,
    "createCssVariablesTheme",
    ()=>createCssVariablesTheme,
    "createHighlighterCore",
    ()=>createHighlighterCore,
    "createHighlighterCoreSync",
    ()=>createHighlighterCoreSync,
    "createPositionConverter",
    ()=>createPositionConverter,
    "createShikiInternal",
    ()=>createShikiInternal,
    "createShikiInternalSync",
    ()=>createShikiInternalSync,
    "createSingletonShorthands",
    ()=>createSingletonShorthands,
    "createdBundledHighlighter",
    ()=>createdBundledHighlighter,
    "enableDeprecationWarnings",
    ()=>enableDeprecationWarnings,
    "flatTokenVariants",
    ()=>flatTokenVariants,
    "getSingletonHighlighterCore",
    ()=>getSingletonHighlighterCore,
    "getTokenStyleObject",
    ()=>getTokenStyleObject,
    "guessEmbeddedLanguages",
    ()=>guessEmbeddedLanguages,
    "hastToHtml",
    ()=>hastToHtml,
    "isNoneTheme",
    ()=>isNoneTheme,
    "isPlainLang",
    ()=>isPlainLang,
    "isSpecialLang",
    ()=>isSpecialLang,
    "isSpecialTheme",
    ()=>isSpecialTheme,
    "makeSingletonHighlighter",
    ()=>makeSingletonHighlighter,
    "makeSingletonHighlighterCore",
    ()=>makeSingletonHighlighterCore,
    "normalizeGetter",
    ()=>normalizeGetter,
    "normalizeTheme",
    ()=>normalizeTheme,
    "resolveColorReplacements",
    ()=>resolveColorReplacements,
    "splitLines",
    ()=>splitLines,
    "splitToken",
    ()=>splitToken,
    "splitTokens",
    ()=>splitTokens,
    "stringifyTokenStyle",
    ()=>stringifyTokenStyle,
    "toArray",
    ()=>toArray,
    "tokenizeAnsiWithTheme",
    ()=>tokenizeAnsiWithTheme,
    "tokenizeWithTheme",
    ()=>tokenizeWithTheme,
    "tokensToHast",
    ()=>tokensToHast,
    "transformerDecorations",
    ()=>transformerDecorations,
    "warnDeprecated",
    ()=>warnDeprecated
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$types$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/@shikijs/types/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$vscode$2d$textmate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/@shikijs/vscode-textmate/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/hast-util-to-html/lib/index.js [app-client] (ecmascript)");
;
;
;
;
function resolveColorReplacements(theme, options) {
    const replacements = typeof theme === "string" ? {} : {
        ...theme.colorReplacements
    };
    const themeName = typeof theme === "string" ? theme : theme.name;
    for (const [key, value] of Object.entries(options?.colorReplacements || {})){
        if (typeof value === "string") replacements[key] = value;
        else if (key === themeName) Object.assign(replacements, value);
    }
    return replacements;
}
function applyColorReplacements(color, replacements) {
    if (!color) return color;
    return replacements?.[color?.toLowerCase()] || color;
}
function toArray(x) {
    return Array.isArray(x) ? x : [
        x
    ];
}
async function normalizeGetter(p) {
    return Promise.resolve(typeof p === "function" ? p() : p).then((r)=>r.default || r);
}
function isPlainLang(lang) {
    return !lang || [
        "plaintext",
        "txt",
        "text",
        "plain"
    ].includes(lang);
}
function isSpecialLang(lang) {
    return lang === "ansi" || isPlainLang(lang);
}
function isNoneTheme(theme) {
    return theme === "none";
}
function isSpecialTheme(theme) {
    return isNoneTheme(theme);
}
function addClassToHast(node, className) {
    if (!className) return node;
    node.properties ||= {};
    node.properties.class ||= [];
    if (typeof node.properties.class === "string") node.properties.class = node.properties.class.split(/\s+/g);
    if (!Array.isArray(node.properties.class)) node.properties.class = [];
    const targets = Array.isArray(className) ? className : className.split(/\s+/g);
    for (const c of targets){
        if (c && !node.properties.class.includes(c)) node.properties.class.push(c);
    }
    return node;
}
function splitLines(code, preserveEnding = false) {
    if (code.length === 0) {
        return [
            [
                "",
                0
            ]
        ];
    }
    const parts = code.split(/(\r?\n)/g);
    let index = 0;
    const lines = [];
    for(let i = 0; i < parts.length; i += 2){
        const line = preserveEnding ? parts[i] + (parts[i + 1] || "") : parts[i];
        lines.push([
            line,
            index
        ]);
        index += parts[i].length;
        index += parts[i + 1]?.length || 0;
    }
    return lines;
}
function createPositionConverter(code) {
    const lines = splitLines(code, true).map(([line])=>line);
    function indexToPos(index) {
        if (index === code.length) {
            return {
                line: lines.length - 1,
                character: lines[lines.length - 1].length
            };
        }
        let character = index;
        let line = 0;
        for (const lineText of lines){
            if (character < lineText.length) break;
            character -= lineText.length;
            line++;
        }
        return {
            line,
            character
        };
    }
    function posToIndex(line, character) {
        let index = 0;
        for(let i = 0; i < line; i++)index += lines[i].length;
        index += character;
        return index;
    }
    return {
        lines,
        indexToPos,
        posToIndex
    };
}
function guessEmbeddedLanguages(code, _lang, highlighter) {
    const langs = /* @__PURE__ */ new Set();
    for (const match of code.matchAll(/:?lang=["']([^"']+)["']/g)){
        const lang = match[1].toLowerCase().trim();
        if (lang) langs.add(lang);
    }
    for (const match of code.matchAll(/(?:```|~~~)([\w-]+)/g)){
        const lang = match[1].toLowerCase().trim();
        if (lang) langs.add(lang);
    }
    for (const match of code.matchAll(/\\begin\{([\w-]+)\}/g)){
        const lang = match[1].toLowerCase().trim();
        if (lang) langs.add(lang);
    }
    for (const match of code.matchAll(/<script\s+(?:type|lang)=["']([^"']+)["']/gi)){
        const fullType = match[1].toLowerCase().trim();
        const lang = fullType.includes("/") ? fullType.split("/").pop() : fullType;
        if (lang) langs.add(lang);
    }
    if (!highlighter) return Array.from(langs);
    const bundle = highlighter.getBundledLanguages();
    return Array.from(langs).filter((l)=>l && bundle[l]);
}
const DEFAULT_COLOR_LIGHT_DARK = "light-dark()";
const COLOR_KEYS = [
    "color",
    "background-color"
];
function splitToken(token, offsets) {
    let lastOffset = 0;
    const tokens = [];
    for (const offset of offsets){
        if (offset > lastOffset) {
            tokens.push({
                ...token,
                content: token.content.slice(lastOffset, offset),
                offset: token.offset + lastOffset
            });
        }
        lastOffset = offset;
    }
    if (lastOffset < token.content.length) {
        tokens.push({
            ...token,
            content: token.content.slice(lastOffset),
            offset: token.offset + lastOffset
        });
    }
    return tokens;
}
function splitTokens(tokens, breakpoints) {
    const sorted = Array.from(breakpoints instanceof Set ? breakpoints : new Set(breakpoints)).sort((a, b)=>a - b);
    if (!sorted.length) return tokens;
    return tokens.map((line)=>{
        return line.flatMap((token)=>{
            const breakpointsInToken = sorted.filter((i)=>token.offset < i && i < token.offset + token.content.length).map((i)=>i - token.offset).sort((a, b)=>a - b);
            if (!breakpointsInToken.length) return token;
            return splitToken(token, breakpointsInToken);
        });
    });
}
function flatTokenVariants(merged, variantsOrder, cssVariablePrefix, defaultColor, colorsRendering = "css-vars") {
    const token = {
        content: merged.content,
        explanation: merged.explanation,
        offset: merged.offset
    };
    const styles = variantsOrder.map((t)=>getTokenStyleObject(merged.variants[t]));
    const styleKeys = new Set(styles.flatMap((t)=>Object.keys(t)));
    const mergedStyles = {};
    const varKey = (idx, key)=>{
        const keyName = key === "color" ? "" : key === "background-color" ? "-bg" : `-${key}`;
        return cssVariablePrefix + variantsOrder[idx] + (key === "color" ? "" : keyName);
    };
    styles.forEach((cur, idx)=>{
        for (const key of styleKeys){
            const value = cur[key] || "inherit";
            if (idx === 0 && defaultColor && COLOR_KEYS.includes(key)) {
                if (defaultColor === DEFAULT_COLOR_LIGHT_DARK && styles.length > 1) {
                    const lightIndex = variantsOrder.findIndex((t)=>t === "light");
                    const darkIndex = variantsOrder.findIndex((t)=>t === "dark");
                    if (lightIndex === -1 || darkIndex === -1) throw new __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$types$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShikiError"]('When using `defaultColor: "light-dark()"`, you must provide both `light` and `dark` themes');
                    const lightValue = styles[lightIndex][key] || "inherit";
                    const darkValue = styles[darkIndex][key] || "inherit";
                    mergedStyles[key] = `light-dark(${lightValue}, ${darkValue})`;
                    if (colorsRendering === "css-vars") mergedStyles[varKey(idx, key)] = value;
                } else {
                    mergedStyles[key] = value;
                }
            } else {
                if (colorsRendering === "css-vars") mergedStyles[varKey(idx, key)] = value;
            }
        }
    });
    token.htmlStyle = mergedStyles;
    return token;
}
function getTokenStyleObject(token) {
    const styles = {};
    if (token.color) styles.color = token.color;
    if (token.bgColor) styles["background-color"] = token.bgColor;
    if (token.fontStyle) {
        if (token.fontStyle & __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$vscode$2d$textmate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontStyle"].Italic) styles["font-style"] = "italic";
        if (token.fontStyle & __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$vscode$2d$textmate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontStyle"].Bold) styles["font-weight"] = "bold";
        const decorations = [];
        if (token.fontStyle & __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$vscode$2d$textmate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontStyle"].Underline) decorations.push("underline");
        if (token.fontStyle & __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$vscode$2d$textmate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontStyle"].Strikethrough) decorations.push("line-through");
        if (decorations.length) styles["text-decoration"] = decorations.join(" ");
    }
    return styles;
}
function stringifyTokenStyle(token) {
    if (typeof token === "string") return token;
    return Object.entries(token).map(([key, value])=>`${key}:${value}`).join(";");
}
const _grammarStateMap = /* @__PURE__ */ new WeakMap();
function setLastGrammarStateToMap(keys, state) {
    _grammarStateMap.set(keys, state);
}
function getLastGrammarStateFromMap(keys) {
    return _grammarStateMap.get(keys);
}
class GrammarState {
    /**
   * Theme to Stack mapping
   */ _stacks = {};
    lang;
    get themes() {
        return Object.keys(this._stacks);
    }
    get theme() {
        return this.themes[0];
    }
    get _stack() {
        return this._stacks[this.theme];
    }
    /**
   * Static method to create a initial grammar state.
   */ static initial(lang, themes) {
        return new GrammarState(Object.fromEntries(toArray(themes).map((theme)=>[
                theme,
                __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$vscode$2d$textmate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL"]
            ])), lang);
    }
    constructor(...args){
        if (args.length === 2) {
            const [stacksMap, lang] = args;
            this.lang = lang;
            this._stacks = stacksMap;
        } else {
            const [stack, lang, theme] = args;
            this.lang = lang;
            this._stacks = {
                [theme]: stack
            };
        }
    }
    /**
   * Get the internal stack object.
   * @internal
   */ getInternalStack(theme = this.theme) {
        return this._stacks[theme];
    }
    getScopes(theme = this.theme) {
        return getScopes(this._stacks[theme]);
    }
    toJSON() {
        return {
            lang: this.lang,
            theme: this.theme,
            themes: this.themes,
            scopes: this.getScopes()
        };
    }
}
function getScopes(stack) {
    const scopes = [];
    const visited = /* @__PURE__ */ new Set();
    function pushScope(stack2) {
        if (visited.has(stack2)) return;
        visited.add(stack2);
        const name = stack2?.nameScopesList?.scopeName;
        if (name) scopes.push(name);
        if (stack2.parent) pushScope(stack2.parent);
    }
    pushScope(stack);
    return scopes;
}
function getGrammarStack(state, theme) {
    if (!(state instanceof GrammarState)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$types$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShikiError"]("Invalid grammar state");
    return state.getInternalStack(theme);
}
function transformerDecorations() {
    const map = /* @__PURE__ */ new WeakMap();
    function getContext(shiki) {
        if (!map.has(shiki.meta)) {
            let normalizePosition = function(p) {
                if (typeof p === "number") {
                    if (p < 0 || p > shiki.source.length) throw new __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$types$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShikiError"](`Invalid decoration offset: ${p}. Code length: ${shiki.source.length}`);
                    return {
                        ...converter.indexToPos(p),
                        offset: p
                    };
                } else {
                    const line = converter.lines[p.line];
                    if (line === void 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$types$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShikiError"](`Invalid decoration position ${JSON.stringify(p)}. Lines length: ${converter.lines.length}`);
                    let character = p.character;
                    if (character < 0) character = line.length + character;
                    if (character < 0 || character > line.length) throw new __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$types$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShikiError"](`Invalid decoration position ${JSON.stringify(p)}. Line ${p.line} length: ${line.length}`);
                    return {
                        ...p,
                        character,
                        offset: converter.posToIndex(p.line, character)
                    };
                }
            };
            const converter = createPositionConverter(shiki.source);
            const decorations = (shiki.options.decorations || []).map((d)=>({
                    ...d,
                    start: normalizePosition(d.start),
                    end: normalizePosition(d.end)
                }));
            verifyIntersections(decorations);
            map.set(shiki.meta, {
                decorations,
                converter,
                source: shiki.source
            });
        }
        return map.get(shiki.meta);
    }
    return {
        name: "shiki:decorations",
        tokens (tokens) {
            if (!this.options.decorations?.length) return;
            const ctx = getContext(this);
            const breakpoints = ctx.decorations.flatMap((d)=>[
                    d.start.offset,
                    d.end.offset
                ]);
            const splitted = splitTokens(tokens, breakpoints);
            return splitted;
        },
        code (codeEl) {
            if (!this.options.decorations?.length) return;
            const ctx = getContext(this);
            const lines = Array.from(codeEl.children).filter((i)=>i.type === "element" && i.tagName === "span");
            if (lines.length !== ctx.converter.lines.length) throw new __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$types$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShikiError"](`Number of lines in code element (${lines.length}) does not match the number of lines in the source (${ctx.converter.lines.length}). Failed to apply decorations.`);
            function applyLineSection(line, start, end, decoration) {
                const lineEl = lines[line];
                let text = "";
                let startIndex = -1;
                let endIndex = -1;
                if (start === 0) startIndex = 0;
                if (end === 0) endIndex = 0;
                if (end === Number.POSITIVE_INFINITY) endIndex = lineEl.children.length;
                if (startIndex === -1 || endIndex === -1) {
                    for(let i = 0; i < lineEl.children.length; i++){
                        text += stringify(lineEl.children[i]);
                        if (startIndex === -1 && text.length === start) startIndex = i + 1;
                        if (endIndex === -1 && text.length === end) endIndex = i + 1;
                    }
                }
                if (startIndex === -1) throw new __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$types$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShikiError"](`Failed to find start index for decoration ${JSON.stringify(decoration.start)}`);
                if (endIndex === -1) throw new __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$types$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShikiError"](`Failed to find end index for decoration ${JSON.stringify(decoration.end)}`);
                const children = lineEl.children.slice(startIndex, endIndex);
                if (!decoration.alwaysWrap && children.length === lineEl.children.length) {
                    applyDecoration(lineEl, decoration, "line");
                } else if (!decoration.alwaysWrap && children.length === 1 && children[0].type === "element") {
                    applyDecoration(children[0], decoration, "token");
                } else {
                    const wrapper = {
                        type: "element",
                        tagName: "span",
                        properties: {},
                        children
                    };
                    applyDecoration(wrapper, decoration, "wrapper");
                    lineEl.children.splice(startIndex, children.length, wrapper);
                }
            }
            function applyLine(line, decoration) {
                lines[line] = applyDecoration(lines[line], decoration, "line");
            }
            function applyDecoration(el, decoration, type) {
                const properties = decoration.properties || {};
                const transform = decoration.transform || ((i)=>i);
                el.tagName = decoration.tagName || "span";
                el.properties = {
                    ...el.properties,
                    ...properties,
                    class: el.properties.class
                };
                if (decoration.properties?.class) addClassToHast(el, decoration.properties.class);
                el = transform(el, type) || el;
                return el;
            }
            const lineApplies = [];
            const sorted = ctx.decorations.sort((a, b)=>b.start.offset - a.start.offset || a.end.offset - b.end.offset);
            for (const decoration of sorted){
                const { start, end } = decoration;
                if (start.line === end.line) {
                    applyLineSection(start.line, start.character, end.character, decoration);
                } else if (start.line < end.line) {
                    applyLineSection(start.line, start.character, Number.POSITIVE_INFINITY, decoration);
                    for(let i = start.line + 1; i < end.line; i++)lineApplies.unshift(()=>applyLine(i, decoration));
                    applyLineSection(end.line, 0, end.character, decoration);
                }
            }
            lineApplies.forEach((i)=>i());
        }
    };
}
function verifyIntersections(items) {
    for(let i = 0; i < items.length; i++){
        const foo = items[i];
        if (foo.start.offset > foo.end.offset) throw new __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$types$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShikiError"](`Invalid decoration range: ${JSON.stringify(foo.start)} - ${JSON.stringify(foo.end)}`);
        for(let j = i + 1; j < items.length; j++){
            const bar = items[j];
            const isFooHasBarStart = foo.start.offset <= bar.start.offset && bar.start.offset < foo.end.offset;
            const isFooHasBarEnd = foo.start.offset < bar.end.offset && bar.end.offset <= foo.end.offset;
            const isBarHasFooStart = bar.start.offset <= foo.start.offset && foo.start.offset < bar.end.offset;
            const isBarHasFooEnd = bar.start.offset < foo.end.offset && foo.end.offset <= bar.end.offset;
            if (isFooHasBarStart || isFooHasBarEnd || isBarHasFooStart || isBarHasFooEnd) {
                if (isFooHasBarStart && isFooHasBarEnd) continue;
                if (isBarHasFooStart && isBarHasFooEnd) continue;
                if (isBarHasFooStart && foo.start.offset === foo.end.offset) continue;
                if (isFooHasBarEnd && bar.start.offset === bar.end.offset) continue;
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$types$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShikiError"](`Decorations ${JSON.stringify(foo.start)} and ${JSON.stringify(bar.start)} intersect.`);
            }
        }
    }
}
function stringify(el) {
    if (el.type === "text") return el.value;
    if (el.type === "element") return el.children.map(stringify).join("");
    return "";
}
const builtInTransformers = [
    /* @__PURE__ */ transformerDecorations()
];
function getTransformers(options) {
    const transformers = sortTransformersByEnforcement(options.transformers || []);
    return [
        ...transformers.pre,
        ...transformers.normal,
        ...transformers.post,
        ...builtInTransformers
    ];
}
function sortTransformersByEnforcement(transformers) {
    const pre = [];
    const post = [];
    const normal = [];
    for (const transformer of transformers){
        switch(transformer.enforce){
            case "pre":
                pre.push(transformer);
                break;
            case "post":
                post.push(transformer);
                break;
            default:
                normal.push(transformer);
        }
    }
    return {
        pre,
        post,
        normal
    };
}
// src/colors.ts
var namedColors = [
    "black",
    "red",
    "green",
    "yellow",
    "blue",
    "magenta",
    "cyan",
    "white",
    "brightBlack",
    "brightRed",
    "brightGreen",
    "brightYellow",
    "brightBlue",
    "brightMagenta",
    "brightCyan",
    "brightWhite"
];
// src/decorations.ts
var decorations = {
    1: "bold",
    2: "dim",
    3: "italic",
    4: "underline",
    7: "reverse",
    8: "hidden",
    9: "strikethrough"
};
// src/parser.ts
function findSequence(value, position) {
    const nextEscape = value.indexOf("\x1B", position);
    if (nextEscape !== -1) {
        if (value[nextEscape + 1] === "[") {
            const nextClose = value.indexOf("m", nextEscape);
            if (nextClose !== -1) {
                return {
                    sequence: value.substring(nextEscape + 2, nextClose).split(";"),
                    startPosition: nextEscape,
                    position: nextClose + 1
                };
            }
        }
    }
    return {
        position: value.length
    };
}
function parseColor(sequence) {
    const colorMode = sequence.shift();
    if (colorMode === "2") {
        const rgb = sequence.splice(0, 3).map((x)=>Number.parseInt(x));
        if (rgb.length !== 3 || rgb.some((x)=>Number.isNaN(x))) return;
        return {
            type: "rgb",
            rgb
        };
    } else if (colorMode === "5") {
        const index = sequence.shift();
        if (index) {
            return {
                type: "table",
                index: Number(index)
            };
        }
    }
}
function parseSequence(sequence) {
    const commands = [];
    while(sequence.length > 0){
        const code = sequence.shift();
        if (!code) continue;
        const codeInt = Number.parseInt(code);
        if (Number.isNaN(codeInt)) continue;
        if (codeInt === 0) {
            commands.push({
                type: "resetAll"
            });
        } else if (codeInt <= 9) {
            const decoration = decorations[codeInt];
            if (decoration) {
                commands.push({
                    type: "setDecoration",
                    value: decorations[codeInt]
                });
            }
        } else if (codeInt <= 29) {
            const decoration = decorations[codeInt - 20];
            if (decoration) {
                commands.push({
                    type: "resetDecoration",
                    value: decoration
                });
                if (decoration === "dim") {
                    commands.push({
                        type: "resetDecoration",
                        value: "bold"
                    });
                }
            }
        } else if (codeInt <= 37) {
            commands.push({
                type: "setForegroundColor",
                value: {
                    type: "named",
                    name: namedColors[codeInt - 30]
                }
            });
        } else if (codeInt === 38) {
            const color = parseColor(sequence);
            if (color) {
                commands.push({
                    type: "setForegroundColor",
                    value: color
                });
            }
        } else if (codeInt === 39) {
            commands.push({
                type: "resetForegroundColor"
            });
        } else if (codeInt <= 47) {
            commands.push({
                type: "setBackgroundColor",
                value: {
                    type: "named",
                    name: namedColors[codeInt - 40]
                }
            });
        } else if (codeInt === 48) {
            const color = parseColor(sequence);
            if (color) {
                commands.push({
                    type: "setBackgroundColor",
                    value: color
                });
            }
        } else if (codeInt === 49) {
            commands.push({
                type: "resetBackgroundColor"
            });
        } else if (codeInt === 53) {
            commands.push({
                type: "setDecoration",
                value: "overline"
            });
        } else if (codeInt === 55) {
            commands.push({
                type: "resetDecoration",
                value: "overline"
            });
        } else if (codeInt >= 90 && codeInt <= 97) {
            commands.push({
                type: "setForegroundColor",
                value: {
                    type: "named",
                    name: namedColors[codeInt - 90 + 8]
                }
            });
        } else if (codeInt >= 100 && codeInt <= 107) {
            commands.push({
                type: "setBackgroundColor",
                value: {
                    type: "named",
                    name: namedColors[codeInt - 100 + 8]
                }
            });
        }
    }
    return commands;
}
function createAnsiSequenceParser() {
    let foreground = null;
    let background = null;
    let decorations2 = /* @__PURE__ */ new Set();
    return {
        parse (value) {
            const tokens = [];
            let position = 0;
            do {
                const findResult = findSequence(value, position);
                const text = findResult.sequence ? value.substring(position, findResult.startPosition) : value.substring(position);
                if (text.length > 0) {
                    tokens.push({
                        value: text,
                        foreground,
                        background,
                        decorations: new Set(decorations2)
                    });
                }
                if (findResult.sequence) {
                    const commands = parseSequence(findResult.sequence);
                    for (const styleToken of commands){
                        if (styleToken.type === "resetAll") {
                            foreground = null;
                            background = null;
                            decorations2.clear();
                        } else if (styleToken.type === "resetForegroundColor") {
                            foreground = null;
                        } else if (styleToken.type === "resetBackgroundColor") {
                            background = null;
                        } else if (styleToken.type === "resetDecoration") {
                            decorations2.delete(styleToken.value);
                        }
                    }
                    for (const styleToken of commands){
                        if (styleToken.type === "setForegroundColor") {
                            foreground = styleToken.value;
                        } else if (styleToken.type === "setBackgroundColor") {
                            background = styleToken.value;
                        } else if (styleToken.type === "setDecoration") {
                            decorations2.add(styleToken.value);
                        }
                    }
                }
                position = findResult.position;
            }while (position < value.length)
            return tokens;
        }
    };
}
// src/palette.ts
var defaultNamedColorsMap = {
    black: "#000000",
    red: "#bb0000",
    green: "#00bb00",
    yellow: "#bbbb00",
    blue: "#0000bb",
    magenta: "#ff00ff",
    cyan: "#00bbbb",
    white: "#eeeeee",
    brightBlack: "#555555",
    brightRed: "#ff5555",
    brightGreen: "#00ff00",
    brightYellow: "#ffff55",
    brightBlue: "#5555ff",
    brightMagenta: "#ff55ff",
    brightCyan: "#55ffff",
    brightWhite: "#ffffff"
};
function createColorPalette(namedColorsMap = defaultNamedColorsMap) {
    function namedColor(name) {
        return namedColorsMap[name];
    }
    function rgbColor(rgb) {
        return `#${rgb.map((x)=>Math.max(0, Math.min(x, 255)).toString(16).padStart(2, "0")).join("")}`;
    }
    let colorTable;
    function getColorTable() {
        if (colorTable) {
            return colorTable;
        }
        colorTable = [];
        for(let i = 0; i < namedColors.length; i++){
            colorTable.push(namedColor(namedColors[i]));
        }
        let levels = [
            0,
            95,
            135,
            175,
            215,
            255
        ];
        for(let r = 0; r < 6; r++){
            for(let g = 0; g < 6; g++){
                for(let b = 0; b < 6; b++){
                    colorTable.push(rgbColor([
                        levels[r],
                        levels[g],
                        levels[b]
                    ]));
                }
            }
        }
        let level = 8;
        for(let i = 0; i < 24; i++, level += 10){
            colorTable.push(rgbColor([
                level,
                level,
                level
            ]));
        }
        return colorTable;
    }
    function tableColor(index) {
        return getColorTable()[index];
    }
    function value(color) {
        switch(color.type){
            case "named":
                return namedColor(color.name);
            case "rgb":
                return rgbColor(color.rgb);
            case "table":
                return tableColor(color.index);
        }
    }
    return {
        value
    };
}
const defaultAnsiColors = {
    black: "#000000",
    red: "#cd3131",
    green: "#0DBC79",
    yellow: "#E5E510",
    blue: "#2472C8",
    magenta: "#BC3FBC",
    cyan: "#11A8CD",
    white: "#E5E5E5",
    brightBlack: "#666666",
    brightRed: "#F14C4C",
    brightGreen: "#23D18B",
    brightYellow: "#F5F543",
    brightBlue: "#3B8EEA",
    brightMagenta: "#D670D6",
    brightCyan: "#29B8DB",
    brightWhite: "#FFFFFF"
};
function tokenizeAnsiWithTheme(theme, fileContents, options) {
    const colorReplacements = resolveColorReplacements(theme, options);
    const lines = splitLines(fileContents);
    const ansiPalette = Object.fromEntries(namedColors.map((name)=>{
        const key = `terminal.ansi${name[0].toUpperCase()}${name.substring(1)}`;
        const themeColor = theme.colors?.[key];
        return [
            name,
            themeColor || defaultAnsiColors[name]
        ];
    }));
    const colorPalette = createColorPalette(ansiPalette);
    const parser = createAnsiSequenceParser();
    return lines.map((line)=>parser.parse(line[0]).map((token)=>{
            let color;
            let bgColor;
            if (token.decorations.has("reverse")) {
                color = token.background ? colorPalette.value(token.background) : theme.bg;
                bgColor = token.foreground ? colorPalette.value(token.foreground) : theme.fg;
            } else {
                color = token.foreground ? colorPalette.value(token.foreground) : theme.fg;
                bgColor = token.background ? colorPalette.value(token.background) : void 0;
            }
            color = applyColorReplacements(color, colorReplacements);
            bgColor = applyColorReplacements(bgColor, colorReplacements);
            if (token.decorations.has("dim")) color = dimColor(color);
            let fontStyle = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$vscode$2d$textmate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontStyle"].None;
            if (token.decorations.has("bold")) fontStyle |= __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$vscode$2d$textmate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontStyle"].Bold;
            if (token.decorations.has("italic")) fontStyle |= __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$vscode$2d$textmate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontStyle"].Italic;
            if (token.decorations.has("underline")) fontStyle |= __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$vscode$2d$textmate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontStyle"].Underline;
            if (token.decorations.has("strikethrough")) fontStyle |= __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$vscode$2d$textmate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontStyle"].Strikethrough;
            return {
                content: token.value,
                offset: line[1],
                // TODO: more accurate offset? might need to fork ansi-sequence-parser
                color,
                bgColor,
                fontStyle
            };
        }));
}
function dimColor(color) {
    const hexMatch = color.match(/#([0-9a-f]{3,8})/i);
    if (hexMatch) {
        const hex = hexMatch[1];
        if (hex.length === 8) {
            const alpha = Math.round(Number.parseInt(hex.slice(6, 8), 16) / 2).toString(16).padStart(2, "0");
            return `#${hex.slice(0, 6)}${alpha}`;
        } else if (hex.length === 6) {
            return `#${hex}80`;
        } else if (hex.length === 4) {
            const r = hex[0];
            const g = hex[1];
            const b = hex[2];
            const a = hex[3];
            const alpha = Math.round(Number.parseInt(`${a}${a}`, 16) / 2).toString(16).padStart(2, "0");
            return `#${r}${r}${g}${g}${b}${b}${alpha}`;
        } else if (hex.length === 3) {
            const r = hex[0];
            const g = hex[1];
            const b = hex[2];
            return `#${r}${r}${g}${g}${b}${b}80`;
        }
    }
    const cssVarMatch = color.match(/var\((--[\w-]+-ansi-[\w-]+)\)/);
    if (cssVarMatch) return `var(${cssVarMatch[1]}-dim)`;
    return color;
}
function codeToTokensBase(internal, code, options = {}) {
    const { theme: themeName = internal.getLoadedThemes()[0] } = options;
    const lang = internal.resolveLangAlias(options.lang || "text");
    if (isPlainLang(lang) || isNoneTheme(themeName)) return splitLines(code).map((line)=>[
            {
                content: line[0],
                offset: line[1]
            }
        ]);
    const { theme, colorMap } = internal.setTheme(themeName);
    if (lang === "ansi") return tokenizeAnsiWithTheme(theme, code, options);
    const _grammar = internal.getLanguage(options.lang || "text");
    if (options.grammarState) {
        if (options.grammarState.lang !== _grammar.name) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$types$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShikiError"](`Grammar state language "${options.grammarState.lang}" does not match highlight language "${_grammar.name}"`);
        }
        if (!options.grammarState.themes.includes(theme.name)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$types$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShikiError"](`Grammar state themes "${options.grammarState.themes}" do not contain highlight theme "${theme.name}"`);
        }
    }
    return tokenizeWithTheme(code, _grammar, theme, colorMap, options);
}
function getLastGrammarState(...args) {
    if (args.length === 2) {
        return getLastGrammarStateFromMap(args[1]);
    }
    const [internal, code, options = {}] = args;
    const { lang = "text", theme: themeName = internal.getLoadedThemes()[0] } = options;
    if (isPlainLang(lang) || isNoneTheme(themeName)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$types$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShikiError"]("Plain language does not have grammar state");
    if (lang === "ansi") throw new __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$types$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShikiError"]("ANSI language does not have grammar state");
    const { theme, colorMap } = internal.setTheme(themeName);
    const _grammar = internal.getLanguage(lang);
    return new GrammarState(_tokenizeWithTheme(code, _grammar, theme, colorMap, options).stateStack, _grammar.name, theme.name);
}
function tokenizeWithTheme(code, grammar, theme, colorMap, options) {
    const result = _tokenizeWithTheme(code, grammar, theme, colorMap, options);
    const grammarState = new GrammarState(result.stateStack, grammar.name, theme.name);
    setLastGrammarStateToMap(result.tokens, grammarState);
    return result.tokens;
}
function _tokenizeWithTheme(code, grammar, theme, colorMap, options) {
    const colorReplacements = resolveColorReplacements(theme, options);
    const { tokenizeMaxLineLength = 0, tokenizeTimeLimit = 500 } = options;
    const lines = splitLines(code);
    let stateStack = options.grammarState ? getGrammarStack(options.grammarState, theme.name) ?? __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$vscode$2d$textmate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL"] : options.grammarContextCode != null ? _tokenizeWithTheme(options.grammarContextCode, grammar, theme, colorMap, {
        ...options,
        grammarState: void 0,
        grammarContextCode: void 0
    }).stateStack : __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$vscode$2d$textmate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL"];
    let actual = [];
    const final = [];
    for(let i = 0, len = lines.length; i < len; i++){
        const [line, lineOffset] = lines[i];
        if (line === "") {
            actual = [];
            final.push([]);
            continue;
        }
        if (tokenizeMaxLineLength > 0 && line.length >= tokenizeMaxLineLength) {
            actual = [];
            final.push([
                {
                    content: line,
                    offset: lineOffset,
                    color: "",
                    fontStyle: 0
                }
            ]);
            continue;
        }
        let resultWithScopes;
        let tokensWithScopes;
        let tokensWithScopesIndex;
        if (options.includeExplanation) {
            resultWithScopes = grammar.tokenizeLine(line, stateStack, tokenizeTimeLimit);
            tokensWithScopes = resultWithScopes.tokens;
            tokensWithScopesIndex = 0;
        }
        const result = grammar.tokenizeLine2(line, stateStack, tokenizeTimeLimit);
        const tokensLength = result.tokens.length / 2;
        for(let j = 0; j < tokensLength; j++){
            const startIndex = result.tokens[2 * j];
            const nextStartIndex = j + 1 < tokensLength ? result.tokens[2 * j + 2] : line.length;
            if (startIndex === nextStartIndex) continue;
            const metadata = result.tokens[2 * j + 1];
            const color = applyColorReplacements(colorMap[__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$vscode$2d$textmate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EncodedTokenMetadata"].getForeground(metadata)], colorReplacements);
            const fontStyle = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$vscode$2d$textmate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EncodedTokenMetadata"].getFontStyle(metadata);
            const token = {
                content: line.substring(startIndex, nextStartIndex),
                offset: lineOffset + startIndex,
                color,
                fontStyle
            };
            if (options.includeExplanation) {
                const themeSettingsSelectors = [];
                if (options.includeExplanation !== "scopeName") {
                    for (const setting of theme.settings){
                        let selectors;
                        switch(typeof setting.scope){
                            case "string":
                                selectors = setting.scope.split(/,/).map((scope)=>scope.trim());
                                break;
                            case "object":
                                selectors = setting.scope;
                                break;
                            default:
                                continue;
                        }
                        themeSettingsSelectors.push({
                            settings: setting,
                            selectors: selectors.map((selector)=>selector.split(/ /))
                        });
                    }
                }
                token.explanation = [];
                let offset = 0;
                while(startIndex + offset < nextStartIndex){
                    const tokenWithScopes = tokensWithScopes[tokensWithScopesIndex];
                    const tokenWithScopesText = line.substring(tokenWithScopes.startIndex, tokenWithScopes.endIndex);
                    offset += tokenWithScopesText.length;
                    token.explanation.push({
                        content: tokenWithScopesText,
                        scopes: options.includeExplanation === "scopeName" ? explainThemeScopesNameOnly(tokenWithScopes.scopes) : explainThemeScopesFull(themeSettingsSelectors, tokenWithScopes.scopes)
                    });
                    tokensWithScopesIndex += 1;
                }
            }
            actual.push(token);
        }
        final.push(actual);
        actual = [];
        stateStack = result.ruleStack;
    }
    return {
        tokens: final,
        stateStack
    };
}
function explainThemeScopesNameOnly(scopes) {
    return scopes.map((scope)=>({
            scopeName: scope
        }));
}
function explainThemeScopesFull(themeSelectors, scopes) {
    const result = [];
    for(let i = 0, len = scopes.length; i < len; i++){
        const scope = scopes[i];
        result[i] = {
            scopeName: scope,
            themeMatches: explainThemeScope(themeSelectors, scope, scopes.slice(0, i))
        };
    }
    return result;
}
function matchesOne(selector, scope) {
    return selector === scope || scope.substring(0, selector.length) === selector && scope[selector.length] === ".";
}
function matches(selectors, scope, parentScopes) {
    if (!matchesOne(selectors[selectors.length - 1], scope)) return false;
    let selectorParentIndex = selectors.length - 2;
    let parentIndex = parentScopes.length - 1;
    while(selectorParentIndex >= 0 && parentIndex >= 0){
        if (matchesOne(selectors[selectorParentIndex], parentScopes[parentIndex])) selectorParentIndex -= 1;
        parentIndex -= 1;
    }
    if (selectorParentIndex === -1) return true;
    return false;
}
function explainThemeScope(themeSettingsSelectors, scope, parentScopes) {
    const result = [];
    for (const { selectors, settings } of themeSettingsSelectors){
        for (const selectorPieces of selectors){
            if (matches(selectorPieces, scope, parentScopes)) {
                result.push(settings);
                break;
            }
        }
    }
    return result;
}
function codeToTokensWithThemes(internal, code, options) {
    const themes = Object.entries(options.themes).filter((i)=>i[1]).map((i)=>({
            color: i[0],
            theme: i[1]
        }));
    const themedTokens = themes.map((t)=>{
        const tokens2 = codeToTokensBase(internal, code, {
            ...options,
            theme: t.theme
        });
        const state = getLastGrammarStateFromMap(tokens2);
        const theme = typeof t.theme === "string" ? t.theme : t.theme.name;
        return {
            tokens: tokens2,
            state,
            theme
        };
    });
    const tokens = syncThemesTokenization(...themedTokens.map((i)=>i.tokens));
    const mergedTokens = tokens[0].map((line, lineIdx)=>line.map((_token, tokenIdx)=>{
            const mergedToken = {
                content: _token.content,
                variants: {},
                offset: _token.offset
            };
            if ("includeExplanation" in options && options.includeExplanation) {
                mergedToken.explanation = _token.explanation;
            }
            tokens.forEach((t, themeIdx)=>{
                const { content: _, explanation: __, offset: ___, ...styles } = t[lineIdx][tokenIdx];
                mergedToken.variants[themes[themeIdx].color] = styles;
            });
            return mergedToken;
        }));
    const mergedGrammarState = themedTokens[0].state ? new GrammarState(Object.fromEntries(themedTokens.map((s)=>[
            s.theme,
            s.state?.getInternalStack(s.theme)
        ])), themedTokens[0].state.lang) : void 0;
    if (mergedGrammarState) setLastGrammarStateToMap(mergedTokens, mergedGrammarState);
    return mergedTokens;
}
function syncThemesTokenization(...themes) {
    const outThemes = themes.map(()=>[]);
    const count = themes.length;
    for(let i = 0; i < themes[0].length; i++){
        const lines = themes.map((t)=>t[i]);
        const outLines = outThemes.map(()=>[]);
        outThemes.forEach((t, i2)=>t.push(outLines[i2]));
        const indexes = lines.map(()=>0);
        const current = lines.map((l)=>l[0]);
        while(current.every((t)=>t)){
            const minLength = Math.min(...current.map((t)=>t.content.length));
            for(let n = 0; n < count; n++){
                const token = current[n];
                if (token.content.length === minLength) {
                    outLines[n].push(token);
                    indexes[n] += 1;
                    current[n] = lines[n][indexes[n]];
                } else {
                    outLines[n].push({
                        ...token,
                        content: token.content.slice(0, minLength)
                    });
                    current[n] = {
                        ...token,
                        content: token.content.slice(minLength),
                        offset: token.offset + minLength
                    };
                }
            }
        }
    }
    return outThemes;
}
function codeToTokens(internal, code, options) {
    let bg;
    let fg;
    let tokens;
    let themeName;
    let rootStyle;
    let grammarState;
    if ("themes" in options) {
        const { defaultColor = "light", cssVariablePrefix = "--shiki-", colorsRendering = "css-vars" } = options;
        const themes = Object.entries(options.themes).filter((i)=>i[1]).map((i)=>({
                color: i[0],
                theme: i[1]
            })).sort((a, b)=>a.color === defaultColor ? -1 : b.color === defaultColor ? 1 : 0);
        if (themes.length === 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$types$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShikiError"]("`themes` option must not be empty");
        const themeTokens = codeToTokensWithThemes(internal, code, options);
        grammarState = getLastGrammarStateFromMap(themeTokens);
        if (defaultColor && DEFAULT_COLOR_LIGHT_DARK !== defaultColor && !themes.find((t)=>t.color === defaultColor)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$types$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShikiError"](`\`themes\` option must contain the defaultColor key \`${defaultColor}\``);
        const themeRegs = themes.map((t)=>internal.getTheme(t.theme));
        const themesOrder = themes.map((t)=>t.color);
        tokens = themeTokens.map((line)=>line.map((token)=>flatTokenVariants(token, themesOrder, cssVariablePrefix, defaultColor, colorsRendering)));
        if (grammarState) setLastGrammarStateToMap(tokens, grammarState);
        const themeColorReplacements = themes.map((t)=>resolveColorReplacements(t.theme, options));
        fg = mapThemeColors(themes, themeRegs, themeColorReplacements, cssVariablePrefix, defaultColor, "fg", colorsRendering);
        bg = mapThemeColors(themes, themeRegs, themeColorReplacements, cssVariablePrefix, defaultColor, "bg", colorsRendering);
        themeName = `shiki-themes ${themeRegs.map((t)=>t.name).join(" ")}`;
        rootStyle = defaultColor ? void 0 : [
            fg,
            bg
        ].join(";");
    } else if ("theme" in options) {
        const colorReplacements = resolveColorReplacements(options.theme, options);
        tokens = codeToTokensBase(internal, code, options);
        const _theme = internal.getTheme(options.theme);
        bg = applyColorReplacements(_theme.bg, colorReplacements);
        fg = applyColorReplacements(_theme.fg, colorReplacements);
        themeName = _theme.name;
        grammarState = getLastGrammarStateFromMap(tokens);
    } else {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$types$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShikiError"]("Invalid options, either `theme` or `themes` must be provided");
    }
    return {
        tokens,
        fg,
        bg,
        themeName,
        rootStyle,
        grammarState
    };
}
function mapThemeColors(themes, themeRegs, themeColorReplacements, cssVariablePrefix, defaultColor, property, colorsRendering) {
    return themes.map((t, idx)=>{
        const value = applyColorReplacements(themeRegs[idx][property], themeColorReplacements[idx]) || "inherit";
        const cssVar = `${cssVariablePrefix + t.color}${property === "bg" ? "-bg" : ""}:${value}`;
        if (idx === 0 && defaultColor) {
            if (defaultColor === DEFAULT_COLOR_LIGHT_DARK && themes.length > 1) {
                const lightIndex = themes.findIndex((t2)=>t2.color === "light");
                const darkIndex = themes.findIndex((t2)=>t2.color === "dark");
                if (lightIndex === -1 || darkIndex === -1) throw new __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$types$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShikiError"]('When using `defaultColor: "light-dark()"`, you must provide both `light` and `dark` themes');
                const lightValue = applyColorReplacements(themeRegs[lightIndex][property], themeColorReplacements[lightIndex]) || "inherit";
                const darkValue = applyColorReplacements(themeRegs[darkIndex][property], themeColorReplacements[darkIndex]) || "inherit";
                return `light-dark(${lightValue}, ${darkValue});${cssVar}`;
            }
            return value;
        }
        if (colorsRendering === "css-vars") {
            return cssVar;
        }
        return null;
    }).filter((i)=>!!i).join(";");
}
function codeToHast(internal, code, options, transformerContext = {
    meta: {},
    options,
    codeToHast: (_code, _options)=>codeToHast(internal, _code, _options),
    codeToTokens: (_code, _options)=>codeToTokens(internal, _code, _options)
}) {
    let input = code;
    for (const transformer of getTransformers(options))input = transformer.preprocess?.call(transformerContext, input, options) || input;
    let { tokens, fg, bg, themeName, rootStyle, grammarState } = codeToTokens(internal, input, options);
    const { mergeWhitespaces = true, mergeSameStyleTokens = false } = options;
    if (mergeWhitespaces === true) tokens = mergeWhitespaceTokens(tokens);
    else if (mergeWhitespaces === "never") tokens = splitWhitespaceTokens(tokens);
    if (mergeSameStyleTokens) {
        tokens = mergeAdjacentStyledTokens(tokens);
    }
    const contextSource = {
        ...transformerContext,
        get source () {
            return input;
        }
    };
    for (const transformer of getTransformers(options))tokens = transformer.tokens?.call(contextSource, tokens) || tokens;
    return tokensToHast(tokens, {
        ...options,
        fg,
        bg,
        themeName,
        rootStyle: options.rootStyle === false ? false : options.rootStyle ?? rootStyle
    }, contextSource, grammarState);
}
function tokensToHast(tokens, options, transformerContext, grammarState = getLastGrammarStateFromMap(tokens)) {
    const transformers = getTransformers(options);
    const lines = [];
    const root = {
        type: "root",
        children: []
    };
    const { structure = "classic", tabindex = "0" } = options;
    const properties = {
        class: `shiki ${options.themeName || ""}`
    };
    if (options.rootStyle !== false) {
        if (options.rootStyle != null) properties.style = options.rootStyle;
        else properties.style = `background-color:${options.bg};color:${options.fg}`;
    }
    if (tabindex !== false && tabindex != null) properties.tabindex = tabindex.toString();
    for (const [key, value] of Object.entries(options.meta || {})){
        if (!key.startsWith("_")) properties[key] = value;
    }
    let preNode = {
        type: "element",
        tagName: "pre",
        properties,
        children: [],
        data: options.data
    };
    let codeNode = {
        type: "element",
        tagName: "code",
        properties: {},
        children: lines
    };
    const lineNodes = [];
    const context = {
        ...transformerContext,
        structure,
        addClassToHast,
        get source () {
            return transformerContext.source;
        },
        get tokens () {
            return tokens;
        },
        get options () {
            return options;
        },
        get root () {
            return root;
        },
        get pre () {
            return preNode;
        },
        get code () {
            return codeNode;
        },
        get lines () {
            return lineNodes;
        }
    };
    tokens.forEach((line, idx)=>{
        if (idx) {
            if (structure === "inline") root.children.push({
                type: "element",
                tagName: "br",
                properties: {},
                children: []
            });
            else if (structure === "classic") lines.push({
                type: "text",
                value: "\n"
            });
        }
        let lineNode = {
            type: "element",
            tagName: "span",
            properties: {
                class: "line"
            },
            children: []
        };
        let col = 0;
        for (const token of line){
            let tokenNode = {
                type: "element",
                tagName: "span",
                properties: {
                    ...token.htmlAttrs
                },
                children: [
                    {
                        type: "text",
                        value: token.content
                    }
                ]
            };
            const style = stringifyTokenStyle(token.htmlStyle || getTokenStyleObject(token));
            if (style) tokenNode.properties.style = style;
            for (const transformer of transformers)tokenNode = transformer?.span?.call(context, tokenNode, idx + 1, col, lineNode, token) || tokenNode;
            if (structure === "inline") root.children.push(tokenNode);
            else if (structure === "classic") lineNode.children.push(tokenNode);
            col += token.content.length;
        }
        if (structure === "classic") {
            for (const transformer of transformers)lineNode = transformer?.line?.call(context, lineNode, idx + 1) || lineNode;
            lineNodes.push(lineNode);
            lines.push(lineNode);
        } else if (structure === "inline") {
            lineNodes.push(lineNode);
        }
    });
    if (structure === "classic") {
        for (const transformer of transformers)codeNode = transformer?.code?.call(context, codeNode) || codeNode;
        preNode.children.push(codeNode);
        for (const transformer of transformers)preNode = transformer?.pre?.call(context, preNode) || preNode;
        root.children.push(preNode);
    } else if (structure === "inline") {
        const syntheticLines = [];
        let currentLine = {
            type: "element",
            tagName: "span",
            properties: {
                class: "line"
            },
            children: []
        };
        for (const child of root.children){
            if (child.type === "element" && child.tagName === "br") {
                syntheticLines.push(currentLine);
                currentLine = {
                    type: "element",
                    tagName: "span",
                    properties: {
                        class: "line"
                    },
                    children: []
                };
            } else if (child.type === "element" || child.type === "text") {
                currentLine.children.push(child);
            }
        }
        syntheticLines.push(currentLine);
        const syntheticCode = {
            type: "element",
            tagName: "code",
            properties: {},
            children: syntheticLines
        };
        let transformedCode = syntheticCode;
        for (const transformer of transformers)transformedCode = transformer?.code?.call(context, transformedCode) || transformedCode;
        root.children = [];
        for(let i = 0; i < transformedCode.children.length; i++){
            if (i > 0) root.children.push({
                type: "element",
                tagName: "br",
                properties: {},
                children: []
            });
            const line = transformedCode.children[i];
            if (line.type === "element") root.children.push(...line.children);
        }
    }
    let result = root;
    for (const transformer of transformers)result = transformer?.root?.call(context, result) || result;
    if (grammarState) setLastGrammarStateToMap(result, grammarState);
    return result;
}
function mergeWhitespaceTokens(tokens) {
    return tokens.map((line)=>{
        const newLine = [];
        let carryOnContent = "";
        let firstOffset;
        line.forEach((token, idx)=>{
            const isDecorated = token.fontStyle && (token.fontStyle & __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$vscode$2d$textmate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontStyle"].Underline || token.fontStyle & __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$vscode$2d$textmate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontStyle"].Strikethrough);
            const couldMerge = !isDecorated;
            if (couldMerge && token.content.match(/^\s+$/) && line[idx + 1]) {
                if (firstOffset === void 0) firstOffset = token.offset;
                carryOnContent += token.content;
            } else {
                if (carryOnContent) {
                    if (couldMerge) {
                        newLine.push({
                            ...token,
                            offset: firstOffset,
                            content: carryOnContent + token.content
                        });
                    } else {
                        newLine.push({
                            content: carryOnContent,
                            offset: firstOffset
                        }, token);
                    }
                    firstOffset = void 0;
                    carryOnContent = "";
                } else {
                    newLine.push(token);
                }
            }
        });
        return newLine;
    });
}
function splitWhitespaceTokens(tokens) {
    return tokens.map((line)=>{
        return line.flatMap((token)=>{
            if (token.content.match(/^\s+$/)) return token;
            const match = token.content.match(/^(\s*)(.*?)(\s*)$/);
            if (!match) return token;
            const [, leading, content, trailing] = match;
            if (!leading && !trailing) return token;
            const expanded = [
                {
                    ...token,
                    offset: token.offset + leading.length,
                    content
                }
            ];
            if (leading) {
                expanded.unshift({
                    content: leading,
                    offset: token.offset
                });
            }
            if (trailing) {
                expanded.push({
                    content: trailing,
                    offset: token.offset + leading.length + content.length
                });
            }
            return expanded;
        });
    });
}
function mergeAdjacentStyledTokens(tokens) {
    return tokens.map((line)=>{
        const newLine = [];
        for (const token of line){
            if (newLine.length === 0) {
                newLine.push({
                    ...token
                });
                continue;
            }
            const prevToken = newLine[newLine.length - 1];
            const prevStyle = stringifyTokenStyle(prevToken.htmlStyle || getTokenStyleObject(prevToken));
            const currentStyle = stringifyTokenStyle(token.htmlStyle || getTokenStyleObject(token));
            const isPrevDecorated = prevToken.fontStyle && (prevToken.fontStyle & __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$vscode$2d$textmate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontStyle"].Underline || prevToken.fontStyle & __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$vscode$2d$textmate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontStyle"].Strikethrough);
            const isDecorated = token.fontStyle && (token.fontStyle & __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$vscode$2d$textmate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontStyle"].Underline || token.fontStyle & __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$vscode$2d$textmate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontStyle"].Strikethrough);
            if (!isPrevDecorated && !isDecorated && prevStyle === currentStyle) {
                prevToken.content += token.content;
            } else {
                newLine.push({
                    ...token
                });
            }
        }
        return newLine;
    });
}
const hastToHtml = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$hast$2d$util$2d$to$2d$html$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHtml"];
function codeToHtml(internal, code, options) {
    const context = {
        meta: {},
        options,
        codeToHast: (_code, _options)=>codeToHast(internal, _code, _options),
        codeToTokens: (_code, _options)=>codeToTokens(internal, _code, _options)
    };
    let result = hastToHtml(codeToHast(internal, code, options, context));
    for (const transformer of getTransformers(options))result = transformer.postprocess?.call(context, result, options) || result;
    return result;
}
const VSCODE_FALLBACK_EDITOR_FG = {
    light: "#333333",
    dark: "#bbbbbb"
};
const VSCODE_FALLBACK_EDITOR_BG = {
    light: "#fffffe",
    dark: "#1e1e1e"
};
const RESOLVED_KEY = "__shiki_resolved";
function normalizeTheme(rawTheme) {
    if (rawTheme?.[RESOLVED_KEY]) return rawTheme;
    const theme = {
        ...rawTheme
    };
    if (theme.tokenColors && !theme.settings) {
        theme.settings = theme.tokenColors;
        delete theme.tokenColors;
    }
    theme.type ||= "dark";
    theme.colorReplacements = {
        ...theme.colorReplacements
    };
    theme.settings ||= [];
    let { bg, fg } = theme;
    if (!bg || !fg) {
        const globalSetting = theme.settings ? theme.settings.find((s)=>!s.name && !s.scope) : void 0;
        if (globalSetting?.settings?.foreground) fg = globalSetting.settings.foreground;
        if (globalSetting?.settings?.background) bg = globalSetting.settings.background;
        if (!fg && theme?.colors?.["editor.foreground"]) fg = theme.colors["editor.foreground"];
        if (!bg && theme?.colors?.["editor.background"]) bg = theme.colors["editor.background"];
        if (!fg) fg = theme.type === "light" ? VSCODE_FALLBACK_EDITOR_FG.light : VSCODE_FALLBACK_EDITOR_FG.dark;
        if (!bg) bg = theme.type === "light" ? VSCODE_FALLBACK_EDITOR_BG.light : VSCODE_FALLBACK_EDITOR_BG.dark;
        theme.fg = fg;
        theme.bg = bg;
    }
    if (!(theme.settings[0] && theme.settings[0].settings && !theme.settings[0].scope)) {
        theme.settings.unshift({
            settings: {
                foreground: theme.fg,
                background: theme.bg
            }
        });
    }
    let replacementCount = 0;
    const replacementMap = /* @__PURE__ */ new Map();
    function getReplacementColor(value) {
        if (replacementMap.has(value)) return replacementMap.get(value);
        replacementCount += 1;
        const hex = `#${replacementCount.toString(16).padStart(8, "0").toLowerCase()}`;
        if (theme.colorReplacements?.[`#${hex}`]) return getReplacementColor(value);
        replacementMap.set(value, hex);
        return hex;
    }
    theme.settings = theme.settings.map((setting)=>{
        const replaceFg = setting.settings?.foreground && !setting.settings.foreground.startsWith("#");
        const replaceBg = setting.settings?.background && !setting.settings.background.startsWith("#");
        if (!replaceFg && !replaceBg) return setting;
        const clone = {
            ...setting,
            settings: {
                ...setting.settings
            }
        };
        if (replaceFg) {
            const replacement = getReplacementColor(setting.settings.foreground);
            theme.colorReplacements[replacement] = setting.settings.foreground;
            clone.settings.foreground = replacement;
        }
        if (replaceBg) {
            const replacement = getReplacementColor(setting.settings.background);
            theme.colorReplacements[replacement] = setting.settings.background;
            clone.settings.background = replacement;
        }
        return clone;
    });
    for (const key of Object.keys(theme.colors || {})){
        if (key === "editor.foreground" || key === "editor.background" || key.startsWith("terminal.ansi")) {
            if (!theme.colors[key]?.startsWith("#")) {
                const replacement = getReplacementColor(theme.colors[key]);
                theme.colorReplacements[replacement] = theme.colors[key];
                theme.colors[key] = replacement;
            }
        }
    }
    Object.defineProperty(theme, RESOLVED_KEY, {
        enumerable: false,
        writable: false,
        value: true
    });
    return theme;
}
async function resolveLangs(langs) {
    return Array.from(new Set((await Promise.all(langs.filter((l)=>!isSpecialLang(l)).map(async (lang)=>await normalizeGetter(lang).then((r)=>Array.isArray(r) ? r : [
                r
            ])))).flat()));
}
async function resolveThemes(themes) {
    const resolved = await Promise.all(themes.map(async (theme)=>isSpecialTheme(theme) ? null : normalizeTheme(await normalizeGetter(theme))));
    return resolved.filter((i)=>!!i);
}
let _emitDeprecation = 3;
let _emitError = false;
function enableDeprecationWarnings(emitDeprecation = true, emitError = false) {
    _emitDeprecation = emitDeprecation;
    _emitError = emitError;
}
function warnDeprecated(message, version = 3) {
    if (!_emitDeprecation) return;
    if (typeof _emitDeprecation === "number" && version > _emitDeprecation) return;
    if (_emitError) {
        throw new Error(`[SHIKI DEPRECATE]: ${message}`);
    } else {
        console.trace(`[SHIKI DEPRECATE]: ${message}`);
    }
}
class ShikiError extends Error {
    constructor(message){
        super(message);
        this.name = "ShikiError";
    }
}
function resolveLangAlias(name, alias) {
    if (!alias) return name;
    if (alias[name]) {
        const resolved = /* @__PURE__ */ new Set([
            name
        ]);
        while(alias[name]){
            name = alias[name];
            if (resolved.has(name)) throw new ShikiError(`Circular alias \`${Array.from(resolved).join(" -> ")} -> ${name}\``);
            resolved.add(name);
        }
    }
    return name;
}
class Registry extends __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$vscode$2d$textmate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Registry"] {
    constructor(_resolver, _themes, _langs, _alias = {}){
        super(_resolver);
        this._resolver = _resolver;
        this._themes = _themes;
        this._langs = _langs;
        this._alias = _alias;
        this._themes.map((t)=>this.loadTheme(t));
        this.loadLanguages(this._langs);
    }
    _resolvedThemes = /* @__PURE__ */ new Map();
    _resolvedGrammars = /* @__PURE__ */ new Map();
    _langMap = /* @__PURE__ */ new Map();
    _langGraph = /* @__PURE__ */ new Map();
    _textmateThemeCache = /* @__PURE__ */ new WeakMap();
    _loadedThemesCache = null;
    _loadedLanguagesCache = null;
    getTheme(theme) {
        if (typeof theme === "string") return this._resolvedThemes.get(theme);
        else return this.loadTheme(theme);
    }
    loadTheme(theme) {
        const _theme = normalizeTheme(theme);
        if (_theme.name) {
            this._resolvedThemes.set(_theme.name, _theme);
            this._loadedThemesCache = null;
        }
        return _theme;
    }
    getLoadedThemes() {
        if (!this._loadedThemesCache) this._loadedThemesCache = [
            ...this._resolvedThemes.keys()
        ];
        return this._loadedThemesCache;
    }
    // Override and re-implement this method to cache the textmate themes as `TextMateTheme.createFromRawTheme`
    // is expensive. Themes can switch often especially for dual-theme support.
    //
    // The parent class also accepts `colorMap` as the second parameter, but since we don't use that,
    // we omit here so it's easier to cache the themes.
    setTheme(theme) {
        let textmateTheme = this._textmateThemeCache.get(theme);
        if (!textmateTheme) {
            textmateTheme = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$vscode$2d$textmate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Theme"].createFromRawTheme(theme);
            this._textmateThemeCache.set(theme, textmateTheme);
        }
        this._syncRegistry.setTheme(textmateTheme);
    }
    getGrammar(name) {
        name = resolveLangAlias(name, this._alias);
        return this._resolvedGrammars.get(name);
    }
    loadLanguage(lang) {
        if (this.getGrammar(lang.name)) return;
        const embeddedLazilyBy = new Set([
            ...this._langMap.values()
        ].filter((i)=>i.embeddedLangsLazy?.includes(lang.name)));
        this._resolver.addLanguage(lang);
        const grammarConfig = {
            balancedBracketSelectors: lang.balancedBracketSelectors || [
                "*"
            ],
            unbalancedBracketSelectors: lang.unbalancedBracketSelectors || []
        };
        this._syncRegistry._rawGrammars.set(lang.scopeName, lang);
        const g = this.loadGrammarWithConfiguration(lang.scopeName, 1, grammarConfig);
        g.name = lang.name;
        this._resolvedGrammars.set(lang.name, g);
        if (lang.aliases) {
            lang.aliases.forEach((alias)=>{
                this._alias[alias] = lang.name;
            });
        }
        this._loadedLanguagesCache = null;
        if (embeddedLazilyBy.size) {
            for (const e of embeddedLazilyBy){
                this._resolvedGrammars.delete(e.name);
                this._loadedLanguagesCache = null;
                this._syncRegistry?._injectionGrammars?.delete(e.scopeName);
                this._syncRegistry?._grammars?.delete(e.scopeName);
                this.loadLanguage(this._langMap.get(e.name));
            }
        }
    }
    dispose() {
        super.dispose();
        this._resolvedThemes.clear();
        this._resolvedGrammars.clear();
        this._langMap.clear();
        this._langGraph.clear();
        this._loadedThemesCache = null;
    }
    loadLanguages(langs) {
        for (const lang of langs)this.resolveEmbeddedLanguages(lang);
        const langsGraphArray = Array.from(this._langGraph.entries());
        const missingLangs = langsGraphArray.filter(([_, lang])=>!lang);
        if (missingLangs.length) {
            const dependents = langsGraphArray.filter(([_, lang])=>{
                if (!lang) return false;
                const embedded = lang.embeddedLanguages || lang.embeddedLangs;
                return embedded?.some((l)=>missingLangs.map(([name])=>name).includes(l));
            }).filter((lang)=>!missingLangs.includes(lang));
            throw new ShikiError(`Missing languages ${missingLangs.map(([name])=>`\`${name}\``).join(", ")}, required by ${dependents.map(([name])=>`\`${name}\``).join(", ")}`);
        }
        for (const [_, lang] of langsGraphArray)this._resolver.addLanguage(lang);
        for (const [_, lang] of langsGraphArray)this.loadLanguage(lang);
    }
    getLoadedLanguages() {
        if (!this._loadedLanguagesCache) {
            this._loadedLanguagesCache = [
                .../* @__PURE__ */ new Set([
                    ...this._resolvedGrammars.keys(),
                    ...Object.keys(this._alias)
                ])
            ];
        }
        return this._loadedLanguagesCache;
    }
    resolveEmbeddedLanguages(lang) {
        this._langMap.set(lang.name, lang);
        this._langGraph.set(lang.name, lang);
        const embedded = lang.embeddedLanguages ?? lang.embeddedLangs;
        if (embedded) {
            for (const embeddedLang of embedded)this._langGraph.set(embeddedLang, this._langMap.get(embeddedLang));
        }
    }
}
class Resolver {
    _langs = /* @__PURE__ */ new Map();
    _scopeToLang = /* @__PURE__ */ new Map();
    _injections = /* @__PURE__ */ new Map();
    _onigLib;
    constructor(engine, langs){
        this._onigLib = {
            createOnigScanner: (patterns)=>engine.createScanner(patterns),
            createOnigString: (s)=>engine.createString(s)
        };
        langs.forEach((i)=>this.addLanguage(i));
    }
    get onigLib() {
        return this._onigLib;
    }
    getLangRegistration(langIdOrAlias) {
        return this._langs.get(langIdOrAlias);
    }
    loadGrammar(scopeName) {
        return this._scopeToLang.get(scopeName);
    }
    addLanguage(l) {
        this._langs.set(l.name, l);
        if (l.aliases) {
            l.aliases.forEach((a)=>{
                this._langs.set(a, l);
            });
        }
        this._scopeToLang.set(l.scopeName, l);
        if (l.injectTo) {
            l.injectTo.forEach((i)=>{
                if (!this._injections.get(i)) this._injections.set(i, []);
                this._injections.get(i).push(l.scopeName);
            });
        }
    }
    getInjections(scopeName) {
        const scopeParts = scopeName.split(".");
        let injections = [];
        for(let i = 1; i <= scopeParts.length; i++){
            const subScopeName = scopeParts.slice(0, i).join(".");
            injections = [
                ...injections,
                ...this._injections.get(subScopeName) || []
            ];
        }
        return injections;
    }
}
let instancesCount = 0;
function createShikiInternalSync(options) {
    instancesCount += 1;
    if (options.warnings !== false && instancesCount >= 10 && instancesCount % 10 === 0) console.warn(`[Shiki] ${instancesCount} instances have been created. Shiki is supposed to be used as a singleton, consider refactoring your code to cache your highlighter instance; Or call \`highlighter.dispose()\` to release unused instances.`);
    let isDisposed = false;
    if (!options.engine) throw new ShikiError("`engine` option is required for synchronous mode");
    const langs = (options.langs || []).flat(1);
    const themes = (options.themes || []).flat(1).map(normalizeTheme);
    const resolver = new Resolver(options.engine, langs);
    const _registry = new Registry(resolver, themes, langs, options.langAlias);
    let _lastTheme;
    function resolveLangAlias$1(name) {
        return resolveLangAlias(name, options.langAlias);
    }
    function getLanguage(name) {
        ensureNotDisposed();
        const _lang = _registry.getGrammar(typeof name === "string" ? name : name.name);
        if (!_lang) throw new ShikiError(`Language \`${name}\` not found, you may need to load it first`);
        return _lang;
    }
    function getTheme(name) {
        if (name === "none") return {
            bg: "",
            fg: "",
            name: "none",
            settings: [],
            type: "dark"
        };
        ensureNotDisposed();
        const _theme = _registry.getTheme(name);
        if (!_theme) throw new ShikiError(`Theme \`${name}\` not found, you may need to load it first`);
        return _theme;
    }
    function setTheme(name) {
        ensureNotDisposed();
        const theme = getTheme(name);
        if (_lastTheme !== name) {
            _registry.setTheme(theme);
            _lastTheme = name;
        }
        const colorMap = _registry.getColorMap();
        return {
            theme,
            colorMap
        };
    }
    function getLoadedThemes() {
        ensureNotDisposed();
        return _registry.getLoadedThemes();
    }
    function getLoadedLanguages() {
        ensureNotDisposed();
        return _registry.getLoadedLanguages();
    }
    function loadLanguageSync(...langs2) {
        ensureNotDisposed();
        _registry.loadLanguages(langs2.flat(1));
    }
    async function loadLanguage(...langs2) {
        return loadLanguageSync(await resolveLangs(langs2));
    }
    function loadThemeSync(...themes2) {
        ensureNotDisposed();
        for (const theme of themes2.flat(1)){
            _registry.loadTheme(theme);
        }
    }
    async function loadTheme(...themes2) {
        ensureNotDisposed();
        return loadThemeSync(await resolveThemes(themes2));
    }
    function ensureNotDisposed() {
        if (isDisposed) throw new ShikiError("Shiki instance has been disposed");
    }
    function dispose() {
        if (isDisposed) return;
        isDisposed = true;
        _registry.dispose();
        instancesCount -= 1;
    }
    return {
        setTheme,
        getTheme,
        getLanguage,
        getLoadedThemes,
        getLoadedLanguages,
        resolveLangAlias: resolveLangAlias$1,
        loadLanguage,
        loadLanguageSync,
        loadTheme,
        loadThemeSync,
        dispose,
        [Symbol.dispose]: dispose
    };
}
async function createShikiInternal(options) {
    if (!options.engine) {
        warnDeprecated("`engine` option is required. Use `createOnigurumaEngine` or `createJavaScriptRegexEngine` to create an engine.");
    }
    const [themes, langs, engine] = await Promise.all([
        resolveThemes(options.themes || []),
        resolveLangs(options.langs || []),
        options.engine
    ]);
    return createShikiInternalSync({
        ...options,
        themes,
        langs,
        engine
    });
}
async function createHighlighterCore(options) {
    const internal = await createShikiInternal(options);
    return {
        getLastGrammarState: (...args)=>getLastGrammarState(internal, ...args),
        codeToTokensBase: (code, options2)=>codeToTokensBase(internal, code, options2),
        codeToTokensWithThemes: (code, options2)=>codeToTokensWithThemes(internal, code, options2),
        codeToTokens: (code, options2)=>codeToTokens(internal, code, options2),
        codeToHast: (code, options2)=>codeToHast(internal, code, options2),
        codeToHtml: (code, options2)=>codeToHtml(internal, code, options2),
        getBundledLanguages: ()=>({}),
        getBundledThemes: ()=>({}),
        ...internal,
        getInternalContext: ()=>internal
    };
}
function createHighlighterCoreSync(options) {
    const internal = createShikiInternalSync(options);
    return {
        getLastGrammarState: (...args)=>getLastGrammarState(internal, ...args),
        codeToTokensBase: (code, options2)=>codeToTokensBase(internal, code, options2),
        codeToTokensWithThemes: (code, options2)=>codeToTokensWithThemes(internal, code, options2),
        codeToTokens: (code, options2)=>codeToTokens(internal, code, options2),
        codeToHast: (code, options2)=>codeToHast(internal, code, options2),
        codeToHtml: (code, options2)=>codeToHtml(internal, code, options2),
        getBundledLanguages: ()=>({}),
        getBundledThemes: ()=>({}),
        ...internal,
        getInternalContext: ()=>internal
    };
}
function makeSingletonHighlighterCore(createHighlighter) {
    let _shiki;
    async function getSingletonHighlighterCore2(options) {
        if (!_shiki) {
            _shiki = createHighlighter({
                ...options,
                themes: options.themes || [],
                langs: options.langs || []
            });
            return _shiki;
        } else {
            const s = await _shiki;
            await Promise.all([
                s.loadTheme(...options.themes || []),
                s.loadLanguage(...options.langs || [])
            ]);
            return s;
        }
    }
    return getSingletonHighlighterCore2;
}
const getSingletonHighlighterCore = /* @__PURE__ */ makeSingletonHighlighterCore(createHighlighterCore);
function createBundledHighlighter(options) {
    const bundledLanguages = options.langs;
    const bundledThemes = options.themes;
    const engine = options.engine;
    async function createHighlighter(options2) {
        function resolveLang(lang) {
            if (typeof lang === "string") {
                lang = options2.langAlias?.[lang] || lang;
                if (isSpecialLang(lang)) return [];
                const bundle = bundledLanguages[lang];
                if (!bundle) throw new __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$types$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShikiError"](`Language \`${lang}\` is not included in this bundle. You may want to load it from external source.`);
                return bundle;
            }
            return lang;
        }
        function resolveTheme(theme) {
            if (isSpecialTheme(theme)) return "none";
            if (typeof theme === "string") {
                const bundle = bundledThemes[theme];
                if (!bundle) throw new __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$types$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShikiError"](`Theme \`${theme}\` is not included in this bundle. You may want to load it from external source.`);
                return bundle;
            }
            return theme;
        }
        const _themes = (options2.themes ?? []).map((i)=>resolveTheme(i));
        const langs = (options2.langs ?? []).map((i)=>resolveLang(i));
        const core = await createHighlighterCore({
            engine: options2.engine ?? engine(),
            ...options2,
            themes: _themes,
            langs
        });
        return {
            ...core,
            loadLanguage (...langs2) {
                return core.loadLanguage(...langs2.map(resolveLang));
            },
            loadTheme (...themes) {
                return core.loadTheme(...themes.map(resolveTheme));
            },
            getBundledLanguages () {
                return bundledLanguages;
            },
            getBundledThemes () {
                return bundledThemes;
            }
        };
    }
    return createHighlighter;
}
function makeSingletonHighlighter(createHighlighter) {
    let _shiki;
    async function getSingletonHighlighter(options = {}) {
        if (!_shiki) {
            _shiki = createHighlighter({
                ...options,
                themes: [],
                langs: []
            });
            const s = await _shiki;
            await Promise.all([
                s.loadTheme(...options.themes || []),
                s.loadLanguage(...options.langs || [])
            ]);
            return s;
        } else {
            const s = await _shiki;
            await Promise.all([
                s.loadTheme(...options.themes || []),
                s.loadLanguage(...options.langs || [])
            ]);
            return s;
        }
    }
    return getSingletonHighlighter;
}
function createSingletonShorthands(createHighlighter, config) {
    const getSingletonHighlighter = makeSingletonHighlighter(createHighlighter);
    async function get(code, options) {
        const shiki = await getSingletonHighlighter({
            langs: [
                options.lang
            ],
            themes: "theme" in options ? [
                options.theme
            ] : Object.values(options.themes)
        });
        const langs = await config?.guessEmbeddedLanguages?.(code, options.lang, shiki);
        if (langs) {
            await shiki.loadLanguage(...langs);
        }
        return shiki;
    }
    return {
        getSingletonHighlighter (options) {
            return getSingletonHighlighter(options);
        },
        async codeToHtml (code, options) {
            const shiki = await get(code, options);
            return shiki.codeToHtml(code, options);
        },
        async codeToHast (code, options) {
            const shiki = await get(code, options);
            return shiki.codeToHast(code, options);
        },
        async codeToTokens (code, options) {
            const shiki = await get(code, options);
            return shiki.codeToTokens(code, options);
        },
        async codeToTokensBase (code, options) {
            const shiki = await get(code, options);
            return shiki.codeToTokensBase(code, options);
        },
        async codeToTokensWithThemes (code, options) {
            const shiki = await get(code, options);
            return shiki.codeToTokensWithThemes(code, options);
        },
        async getLastGrammarState (code, options) {
            const shiki = await getSingletonHighlighter({
                langs: [
                    options.lang
                ],
                themes: [
                    options.theme
                ]
            });
            return shiki.getLastGrammarState(code, options);
        }
    };
}
const createdBundledHighlighter = createBundledHighlighter;
function createCssVariablesTheme(options = {}) {
    const { name = "css-variables", variablePrefix = "--shiki-", fontStyle = true } = options;
    const variable = (name2)=>{
        if (options.variableDefaults?.[name2]) return `var(${variablePrefix}${name2}, ${options.variableDefaults[name2]})`;
        return `var(${variablePrefix}${name2})`;
    };
    const theme = {
        name,
        type: "dark",
        colors: {
            "editor.foreground": variable("foreground"),
            "editor.background": variable("background"),
            "terminal.ansiBlack": variable("ansi-black"),
            "terminal.ansiRed": variable("ansi-red"),
            "terminal.ansiGreen": variable("ansi-green"),
            "terminal.ansiYellow": variable("ansi-yellow"),
            "terminal.ansiBlue": variable("ansi-blue"),
            "terminal.ansiMagenta": variable("ansi-magenta"),
            "terminal.ansiCyan": variable("ansi-cyan"),
            "terminal.ansiWhite": variable("ansi-white"),
            "terminal.ansiBrightBlack": variable("ansi-bright-black"),
            "terminal.ansiBrightRed": variable("ansi-bright-red"),
            "terminal.ansiBrightGreen": variable("ansi-bright-green"),
            "terminal.ansiBrightYellow": variable("ansi-bright-yellow"),
            "terminal.ansiBrightBlue": variable("ansi-bright-blue"),
            "terminal.ansiBrightMagenta": variable("ansi-bright-magenta"),
            "terminal.ansiBrightCyan": variable("ansi-bright-cyan"),
            "terminal.ansiBrightWhite": variable("ansi-bright-white")
        },
        tokenColors: [
            {
                scope: [
                    "keyword.operator.accessor",
                    "meta.group.braces.round.function.arguments",
                    "meta.template.expression",
                    "markup.fenced_code meta.embedded.block"
                ],
                settings: {
                    foreground: variable("foreground")
                }
            },
            {
                scope: "emphasis",
                settings: {
                    fontStyle: "italic"
                }
            },
            {
                scope: [
                    "strong",
                    "markup.heading.markdown",
                    "markup.bold.markdown"
                ],
                settings: {
                    fontStyle: "bold"
                }
            },
            {
                scope: [
                    "markup.italic.markdown"
                ],
                settings: {
                    fontStyle: "italic"
                }
            },
            {
                scope: "meta.link.inline.markdown",
                settings: {
                    fontStyle: "underline",
                    foreground: variable("token-link")
                }
            },
            {
                scope: [
                    "string",
                    "markup.fenced_code",
                    "markup.inline"
                ],
                settings: {
                    foreground: variable("token-string")
                }
            },
            {
                scope: [
                    "comment",
                    "string.quoted.docstring.multi"
                ],
                settings: {
                    foreground: variable("token-comment")
                }
            },
            {
                scope: [
                    "constant.numeric",
                    "constant.language",
                    "constant.other.placeholder",
                    "constant.character.format.placeholder",
                    "variable.language.this",
                    "variable.other.object",
                    "variable.other.class",
                    "variable.other.constant",
                    "meta.property-name",
                    "meta.property-value",
                    "support"
                ],
                settings: {
                    foreground: variable("token-constant")
                }
            },
            {
                scope: [
                    "keyword",
                    "storage.modifier",
                    "storage.type",
                    "storage.control.clojure",
                    "entity.name.function.clojure",
                    "entity.name.tag.yaml",
                    "support.function.node",
                    "support.type.property-name.json",
                    "punctuation.separator.key-value",
                    "punctuation.definition.template-expression"
                ],
                settings: {
                    foreground: variable("token-keyword")
                }
            },
            {
                scope: "variable.parameter.function",
                settings: {
                    foreground: variable("token-parameter")
                }
            },
            {
                scope: [
                    "support.function",
                    "entity.name.type",
                    "entity.other.inherited-class",
                    "meta.function-call",
                    "meta.instance.constructor",
                    "entity.other.attribute-name",
                    "entity.name.function",
                    "constant.keyword.clojure"
                ],
                settings: {
                    foreground: variable("token-function")
                }
            },
            {
                scope: [
                    "entity.name.tag",
                    "string.quoted",
                    "string.regexp",
                    "string.interpolated",
                    "string.template",
                    "string.unquoted.plain.out.yaml",
                    "keyword.other.template"
                ],
                settings: {
                    foreground: variable("token-string-expression")
                }
            },
            {
                scope: [
                    "punctuation.definition.arguments",
                    "punctuation.definition.dict",
                    "punctuation.separator",
                    "meta.function-call.arguments"
                ],
                settings: {
                    foreground: variable("token-punctuation")
                }
            },
            {
                // [Custom] Markdown links
                scope: [
                    "markup.underline.link",
                    "punctuation.definition.metadata.markdown"
                ],
                settings: {
                    foreground: variable("token-link")
                }
            },
            {
                // [Custom] Markdown list
                scope: [
                    "beginning.punctuation.definition.list.markdown"
                ],
                settings: {
                    foreground: variable("token-string")
                }
            },
            {
                // [Custom] Markdown punctuation definition brackets
                scope: [
                    "punctuation.definition.string.begin.markdown",
                    "punctuation.definition.string.end.markdown",
                    "string.other.link.title.markdown",
                    "string.other.link.description.markdown"
                ],
                settings: {
                    foreground: variable("token-keyword")
                }
            },
            {
                // [Custom] Diff
                scope: [
                    "markup.inserted",
                    "meta.diff.header.to-file",
                    "punctuation.definition.inserted"
                ],
                settings: {
                    foreground: variable("token-inserted")
                }
            },
            {
                scope: [
                    "markup.deleted",
                    "meta.diff.header.from-file",
                    "punctuation.definition.deleted"
                ],
                settings: {
                    foreground: variable("token-deleted")
                }
            },
            {
                scope: [
                    "markup.changed",
                    "punctuation.definition.changed"
                ],
                settings: {
                    foreground: variable("token-changed")
                }
            }
        ]
    };
    if (!fontStyle) {
        theme.tokenColors = theme.tokenColors?.map((tokenColor)=>{
            if (tokenColor.settings?.fontStyle) delete tokenColor.settings.fontStyle;
            return tokenColor;
        });
    }
    return theme;
}
;
}),
"[project]/adkit-docs/node_modules/shiki/dist/langs.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bundledLanguages",
    ()=>bundledLanguages,
    "bundledLanguagesAlias",
    ()=>bundledLanguagesAlias,
    "bundledLanguagesBase",
    ()=>bundledLanguagesBase,
    "bundledLanguagesInfo",
    ()=>bundledLanguagesInfo
]);
const bundledLanguagesInfo = [
    {
        "id": "abap",
        "name": "ABAP",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/abap.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "actionscript-3",
        "name": "ActionScript",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/actionscript-3.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "ada",
        "name": "Ada",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/ada.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "angular-html",
        "name": "Angular HTML",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/angular-html.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "angular-ts",
        "name": "Angular TypeScript",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/angular-ts.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "apache",
        "name": "Apache Conf",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/apache.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "apex",
        "name": "Apex",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/apex.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "apl",
        "name": "APL",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/apl.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "applescript",
        "name": "AppleScript",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/applescript.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "ara",
        "name": "Ara",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/ara.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "asciidoc",
        "name": "AsciiDoc",
        "aliases": [
            "adoc"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/asciidoc.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "asm",
        "name": "Assembly",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/asm.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "astro",
        "name": "Astro",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/astro.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "awk",
        "name": "AWK",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/awk.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "ballerina",
        "name": "Ballerina",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/ballerina.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "bat",
        "name": "Batch File",
        "aliases": [
            "batch"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/bat.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "beancount",
        "name": "Beancount",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/beancount.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "berry",
        "name": "Berry",
        "aliases": [
            "be"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/berry.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "bibtex",
        "name": "BibTeX",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/bibtex.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "bicep",
        "name": "Bicep",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/bicep.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "blade",
        "name": "Blade",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/blade.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "bsl",
        "name": "1C (Enterprise)",
        "aliases": [
            "1c"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/bsl.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "c",
        "name": "C",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/c.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "c3",
        "name": "C3",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/c3.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "cadence",
        "name": "Cadence",
        "aliases": [
            "cdc"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/cadence.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "cairo",
        "name": "Cairo",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/cairo.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "clarity",
        "name": "Clarity",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/clarity.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "clojure",
        "name": "Clojure",
        "aliases": [
            "clj"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/clojure.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "cmake",
        "name": "CMake",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/cmake.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "cobol",
        "name": "COBOL",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/cobol.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "codeowners",
        "name": "CODEOWNERS",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/codeowners.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "codeql",
        "name": "CodeQL",
        "aliases": [
            "ql"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/codeql.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "coffee",
        "name": "CoffeeScript",
        "aliases": [
            "coffeescript"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/coffee.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "common-lisp",
        "name": "Common Lisp",
        "aliases": [
            "lisp"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/common-lisp.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "coq",
        "name": "Coq",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/coq.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "cpp",
        "name": "C++",
        "aliases": [
            "c++"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/cpp.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "crystal",
        "name": "Crystal",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/crystal.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "csharp",
        "name": "C#",
        "aliases": [
            "c#",
            "cs"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/csharp.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "css",
        "name": "CSS",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/css.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "csv",
        "name": "CSV",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/csv.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "cue",
        "name": "CUE",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/cue.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "cypher",
        "name": "Cypher",
        "aliases": [
            "cql"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/cypher.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "d",
        "name": "D",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/d.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "dart",
        "name": "Dart",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/dart.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "dax",
        "name": "DAX",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/dax.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "desktop",
        "name": "Desktop",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/desktop.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "diff",
        "name": "Diff",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/diff.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "docker",
        "name": "Dockerfile",
        "aliases": [
            "dockerfile"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/docker.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "dotenv",
        "name": "dotEnv",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/dotenv.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "dream-maker",
        "name": "Dream Maker",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/dream-maker.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "edge",
        "name": "Edge",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/edge.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "elixir",
        "name": "Elixir",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/elixir.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "elm",
        "name": "Elm",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/elm.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "emacs-lisp",
        "name": "Emacs Lisp",
        "aliases": [
            "elisp"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/emacs-lisp.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "erb",
        "name": "ERB",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/erb.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "erlang",
        "name": "Erlang",
        "aliases": [
            "erl"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/erlang.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "fennel",
        "name": "Fennel",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/fennel.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "fish",
        "name": "Fish",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/fish.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "fluent",
        "name": "Fluent",
        "aliases": [
            "ftl"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/fluent.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "fortran-fixed-form",
        "name": "Fortran (Fixed Form)",
        "aliases": [
            "f",
            "for",
            "f77"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/fortran-fixed-form.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "fortran-free-form",
        "name": "Fortran (Free Form)",
        "aliases": [
            "f90",
            "f95",
            "f03",
            "f08",
            "f18"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/fortran-free-form.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "fsharp",
        "name": "F#",
        "aliases": [
            "f#",
            "fs"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/fsharp.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "gdresource",
        "name": "GDResource",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/gdresource.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "gdscript",
        "name": "GDScript",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/gdscript.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "gdshader",
        "name": "GDShader",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/gdshader.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "genie",
        "name": "Genie",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/genie.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "gherkin",
        "name": "Gherkin",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/gherkin.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "git-commit",
        "name": "Git Commit Message",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/git-commit.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "git-rebase",
        "name": "Git Rebase Message",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/git-rebase.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "gleam",
        "name": "Gleam",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/gleam.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "glimmer-js",
        "name": "Glimmer JS",
        "aliases": [
            "gjs"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/glimmer-js.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "glimmer-ts",
        "name": "Glimmer TS",
        "aliases": [
            "gts"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/glimmer-ts.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "glsl",
        "name": "GLSL",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/glsl.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "gn",
        "name": "GN",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/gn.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "gnuplot",
        "name": "Gnuplot",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/gnuplot.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "go",
        "name": "Go",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/go.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "graphql",
        "name": "GraphQL",
        "aliases": [
            "gql"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/graphql.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "groovy",
        "name": "Groovy",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/groovy.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "hack",
        "name": "Hack",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/hack.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "haml",
        "name": "Ruby Haml",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/haml.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "handlebars",
        "name": "Handlebars",
        "aliases": [
            "hbs"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/handlebars.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "haskell",
        "name": "Haskell",
        "aliases": [
            "hs"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/haskell.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "haxe",
        "name": "Haxe",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/haxe.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "hcl",
        "name": "HashiCorp HCL",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/hcl.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "hjson",
        "name": "Hjson",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/hjson.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "hlsl",
        "name": "HLSL",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/hlsl.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "html",
        "name": "HTML",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/html.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "html-derivative",
        "name": "HTML (Derivative)",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/html-derivative.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "http",
        "name": "HTTP",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/http.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "hurl",
        "name": "Hurl",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/hurl.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "hxml",
        "name": "HXML",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/hxml.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "hy",
        "name": "Hy",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/hy.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "imba",
        "name": "Imba",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/imba.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "ini",
        "name": "INI",
        "aliases": [
            "properties"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/ini.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "java",
        "name": "Java",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/java.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "javascript",
        "name": "JavaScript",
        "aliases": [
            "js",
            "cjs",
            "mjs"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/javascript.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "jinja",
        "name": "Jinja",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/jinja.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "jison",
        "name": "Jison",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/jison.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "json",
        "name": "JSON",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/json.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "json5",
        "name": "JSON5",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/json5.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "jsonc",
        "name": "JSON with Comments",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/jsonc.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "jsonl",
        "name": "JSON Lines",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/jsonl.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "jsonnet",
        "name": "Jsonnet",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/jsonnet.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "jssm",
        "name": "JSSM",
        "aliases": [
            "fsl"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/jssm.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "jsx",
        "name": "JSX",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/jsx.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "julia",
        "name": "Julia",
        "aliases": [
            "jl"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/julia.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "kdl",
        "name": "KDL",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/kdl.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "kotlin",
        "name": "Kotlin",
        "aliases": [
            "kt",
            "kts"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/kotlin.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "kusto",
        "name": "Kusto",
        "aliases": [
            "kql"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/kusto.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "latex",
        "name": "LaTeX",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/latex.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "lean",
        "name": "Lean 4",
        "aliases": [
            "lean4"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/lean.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "less",
        "name": "Less",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/less.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "liquid",
        "name": "Liquid",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/liquid.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "llvm",
        "name": "LLVM IR",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/llvm.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "log",
        "name": "Log file",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/log.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "logo",
        "name": "Logo",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/logo.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "lua",
        "name": "Lua",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/lua.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "luau",
        "name": "Luau",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/luau.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "make",
        "name": "Makefile",
        "aliases": [
            "makefile"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/make.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "markdown",
        "name": "Markdown",
        "aliases": [
            "md"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/markdown.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "marko",
        "name": "Marko",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/marko.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "matlab",
        "name": "MATLAB",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/matlab.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "mdc",
        "name": "MDC",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/mdc.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "mdx",
        "name": "MDX",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/mdx.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "mermaid",
        "name": "Mermaid",
        "aliases": [
            "mmd"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/mermaid.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "mipsasm",
        "name": "MIPS Assembly",
        "aliases": [
            "mips"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/mipsasm.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "mojo",
        "name": "Mojo",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/mojo.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "moonbit",
        "name": "MoonBit",
        "aliases": [
            "mbt",
            "mbti"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/moonbit.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "move",
        "name": "Move",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/move.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "narrat",
        "name": "Narrat Language",
        "aliases": [
            "nar"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/narrat.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "nextflow",
        "name": "Nextflow",
        "aliases": [
            "nf"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/nextflow.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "nginx",
        "name": "Nginx",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/nginx.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "nim",
        "name": "Nim",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/nim.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "nix",
        "name": "Nix",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/nix.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "nushell",
        "name": "nushell",
        "aliases": [
            "nu"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/nushell.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "objective-c",
        "name": "Objective-C",
        "aliases": [
            "objc"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/objective-c.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "objective-cpp",
        "name": "Objective-C++",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/objective-cpp.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "ocaml",
        "name": "OCaml",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/ocaml.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "openscad",
        "name": "OpenSCAD",
        "aliases": [
            "scad"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/openscad.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "pascal",
        "name": "Pascal",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/pascal.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "perl",
        "name": "Perl",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/perl.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "php",
        "name": "PHP",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/php.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "pkl",
        "name": "Pkl",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/pkl.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "plsql",
        "name": "PL/SQL",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/plsql.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "po",
        "name": "Gettext PO",
        "aliases": [
            "pot",
            "potx"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/po.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "polar",
        "name": "Polar",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/polar.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "postcss",
        "name": "PostCSS",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/postcss.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "powerquery",
        "name": "PowerQuery",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/powerquery.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "powershell",
        "name": "PowerShell",
        "aliases": [
            "ps",
            "ps1"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/powershell.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "prisma",
        "name": "Prisma",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/prisma.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "prolog",
        "name": "Prolog",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/prolog.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "proto",
        "name": "Protocol Buffer 3",
        "aliases": [
            "protobuf"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/proto.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "pug",
        "name": "Pug",
        "aliases": [
            "jade"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/pug.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "puppet",
        "name": "Puppet",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/puppet.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "purescript",
        "name": "PureScript",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/purescript.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "python",
        "name": "Python",
        "aliases": [
            "py"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/python.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "qml",
        "name": "QML",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/qml.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "qmldir",
        "name": "QML Directory",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/qmldir.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "qss",
        "name": "Qt Style Sheets",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/qss.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "r",
        "name": "R",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/r.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "racket",
        "name": "Racket",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/racket.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "raku",
        "name": "Raku",
        "aliases": [
            "perl6"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/raku.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "razor",
        "name": "ASP.NET Razor",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/razor.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "reg",
        "name": "Windows Registry Script",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/reg.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "regexp",
        "name": "RegExp",
        "aliases": [
            "regex"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/regexp.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "rel",
        "name": "Rel",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/rel.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "riscv",
        "name": "RISC-V",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/riscv.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "rosmsg",
        "name": "ROS Interface",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/rosmsg.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "rst",
        "name": "reStructuredText",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/rst.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "ruby",
        "name": "Ruby",
        "aliases": [
            "rb"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/ruby.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "rust",
        "name": "Rust",
        "aliases": [
            "rs"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/rust.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "sas",
        "name": "SAS",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/sas.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "sass",
        "name": "Sass",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/sass.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "scala",
        "name": "Scala",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/scala.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "scheme",
        "name": "Scheme",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/scheme.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "scss",
        "name": "SCSS",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/scss.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "sdbl",
        "name": "1C (Query)",
        "aliases": [
            "1c-query"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/sdbl.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "shaderlab",
        "name": "ShaderLab",
        "aliases": [
            "shader"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/shaderlab.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "shellscript",
        "name": "Shell",
        "aliases": [
            "bash",
            "sh",
            "shell",
            "zsh"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/shellscript.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "shellsession",
        "name": "Shell Session",
        "aliases": [
            "console"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/shellsession.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "smalltalk",
        "name": "Smalltalk",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/smalltalk.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "solidity",
        "name": "Solidity",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/solidity.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "soy",
        "name": "Closure Templates",
        "aliases": [
            "closure-templates"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/soy.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "sparql",
        "name": "SPARQL",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/sparql.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "splunk",
        "name": "Splunk Query Language",
        "aliases": [
            "spl"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/splunk.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "sql",
        "name": "SQL",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/sql.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "ssh-config",
        "name": "SSH Config",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/ssh-config.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "stata",
        "name": "Stata",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/stata.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "stylus",
        "name": "Stylus",
        "aliases": [
            "styl"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/stylus.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "svelte",
        "name": "Svelte",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/svelte.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "swift",
        "name": "Swift",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/swift.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "system-verilog",
        "name": "SystemVerilog",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/system-verilog.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "systemd",
        "name": "Systemd Units",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/systemd.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "talonscript",
        "name": "TalonScript",
        "aliases": [
            "talon"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/talonscript.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "tasl",
        "name": "Tasl",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/tasl.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "tcl",
        "name": "Tcl",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/tcl.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "templ",
        "name": "Templ",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/templ.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "terraform",
        "name": "Terraform",
        "aliases": [
            "tf",
            "tfvars"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/terraform.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "tex",
        "name": "TeX",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/tex.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "toml",
        "name": "TOML",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/toml.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "ts-tags",
        "name": "TypeScript with Tags",
        "aliases": [
            "lit"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/ts-tags.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "tsv",
        "name": "TSV",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/tsv.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "tsx",
        "name": "TSX",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/tsx.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "turtle",
        "name": "Turtle",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/turtle.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "twig",
        "name": "Twig",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/twig.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "typescript",
        "name": "TypeScript",
        "aliases": [
            "ts",
            "cts",
            "mts"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/typescript.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "typespec",
        "name": "TypeSpec",
        "aliases": [
            "tsp"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/typespec.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "typst",
        "name": "Typst",
        "aliases": [
            "typ"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/typst.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "v",
        "name": "V",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/v.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "vala",
        "name": "Vala",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/vala.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "vb",
        "name": "Visual Basic",
        "aliases": [
            "cmd"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/vb.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "verilog",
        "name": "Verilog",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/verilog.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "vhdl",
        "name": "VHDL",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/vhdl.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "viml",
        "name": "Vim Script",
        "aliases": [
            "vim",
            "vimscript"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/viml.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "vue",
        "name": "Vue",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/vue.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "vue-html",
        "name": "Vue HTML",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/vue-html.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "vue-vine",
        "name": "Vue Vine",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/vue-vine.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "vyper",
        "name": "Vyper",
        "aliases": [
            "vy"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/vyper.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "wasm",
        "name": "WebAssembly",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/wasm.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "wenyan",
        "name": "Wenyan",
        "aliases": [
            "\u6587\u8A00"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/wenyan.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "wgsl",
        "name": "WGSL",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/wgsl.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "wikitext",
        "name": "Wikitext",
        "aliases": [
            "mediawiki",
            "wiki"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/wikitext.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "wit",
        "name": "WebAssembly Interface Types",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/wit.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "wolfram",
        "name": "Wolfram",
        "aliases": [
            "wl"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/wolfram.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "xml",
        "name": "XML",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/xml.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "xsl",
        "name": "XSL",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/xsl.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "yaml",
        "name": "YAML",
        "aliases": [
            "yml"
        ],
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/yaml.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "zenscript",
        "name": "ZenScript",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/zenscript.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "zig",
        "name": "Zig",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/langs/dist/zig.mjs [app-client] (ecmascript, async loader)")
    }
];
const bundledLanguagesBase = Object.fromEntries(bundledLanguagesInfo.map((i)=>[
        i.id,
        i.import
    ]));
const bundledLanguagesAlias = Object.fromEntries(bundledLanguagesInfo.flatMap((i)=>i.aliases?.map((a)=>[
            a,
            i.import
        ]) || []));
const bundledLanguages = {
    ...bundledLanguagesBase,
    ...bundledLanguagesAlias
};
;
}),
"[project]/adkit-docs/node_modules/shiki/dist/themes.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bundledThemes",
    ()=>bundledThemes,
    "bundledThemesInfo",
    ()=>bundledThemesInfo
]);
const bundledThemesInfo = [
    {
        "id": "andromeeda",
        "displayName": "Andromeeda",
        "type": "dark",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/andromeeda.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "aurora-x",
        "displayName": "Aurora X",
        "type": "dark",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/aurora-x.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "ayu-dark",
        "displayName": "Ayu Dark",
        "type": "dark",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/ayu-dark.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "catppuccin-frappe",
        "displayName": "Catppuccin Frapp\xE9",
        "type": "dark",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/catppuccin-frappe.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "catppuccin-latte",
        "displayName": "Catppuccin Latte",
        "type": "light",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/catppuccin-latte.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "catppuccin-macchiato",
        "displayName": "Catppuccin Macchiato",
        "type": "dark",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/catppuccin-macchiato.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "catppuccin-mocha",
        "displayName": "Catppuccin Mocha",
        "type": "dark",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/catppuccin-mocha.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "dark-plus",
        "displayName": "Dark Plus",
        "type": "dark",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/dark-plus.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "dracula",
        "displayName": "Dracula Theme",
        "type": "dark",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/dracula.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "dracula-soft",
        "displayName": "Dracula Theme Soft",
        "type": "dark",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/dracula-soft.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "everforest-dark",
        "displayName": "Everforest Dark",
        "type": "dark",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/everforest-dark.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "everforest-light",
        "displayName": "Everforest Light",
        "type": "light",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/everforest-light.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "github-dark",
        "displayName": "GitHub Dark",
        "type": "dark",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/github-dark.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "github-dark-default",
        "displayName": "GitHub Dark Default",
        "type": "dark",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/github-dark-default.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "github-dark-dimmed",
        "displayName": "GitHub Dark Dimmed",
        "type": "dark",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/github-dark-dimmed.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "github-dark-high-contrast",
        "displayName": "GitHub Dark High Contrast",
        "type": "dark",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/github-dark-high-contrast.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "github-light",
        "displayName": "GitHub Light",
        "type": "light",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/github-light.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "github-light-default",
        "displayName": "GitHub Light Default",
        "type": "light",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/github-light-default.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "github-light-high-contrast",
        "displayName": "GitHub Light High Contrast",
        "type": "light",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/github-light-high-contrast.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "gruvbox-dark-hard",
        "displayName": "Gruvbox Dark Hard",
        "type": "dark",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/gruvbox-dark-hard.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "gruvbox-dark-medium",
        "displayName": "Gruvbox Dark Medium",
        "type": "dark",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/gruvbox-dark-medium.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "gruvbox-dark-soft",
        "displayName": "Gruvbox Dark Soft",
        "type": "dark",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/gruvbox-dark-soft.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "gruvbox-light-hard",
        "displayName": "Gruvbox Light Hard",
        "type": "light",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/gruvbox-light-hard.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "gruvbox-light-medium",
        "displayName": "Gruvbox Light Medium",
        "type": "light",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/gruvbox-light-medium.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "gruvbox-light-soft",
        "displayName": "Gruvbox Light Soft",
        "type": "light",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/gruvbox-light-soft.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "houston",
        "displayName": "Houston",
        "type": "dark",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/houston.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "kanagawa-dragon",
        "displayName": "Kanagawa Dragon",
        "type": "dark",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/kanagawa-dragon.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "kanagawa-lotus",
        "displayName": "Kanagawa Lotus",
        "type": "light",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/kanagawa-lotus.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "kanagawa-wave",
        "displayName": "Kanagawa Wave",
        "type": "dark",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/kanagawa-wave.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "laserwave",
        "displayName": "LaserWave",
        "type": "dark",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/laserwave.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "light-plus",
        "displayName": "Light Plus",
        "type": "light",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/light-plus.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "material-theme",
        "displayName": "Material Theme",
        "type": "dark",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/material-theme.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "material-theme-darker",
        "displayName": "Material Theme Darker",
        "type": "dark",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/material-theme-darker.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "material-theme-lighter",
        "displayName": "Material Theme Lighter",
        "type": "light",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/material-theme-lighter.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "material-theme-ocean",
        "displayName": "Material Theme Ocean",
        "type": "dark",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/material-theme-ocean.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "material-theme-palenight",
        "displayName": "Material Theme Palenight",
        "type": "dark",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/material-theme-palenight.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "min-dark",
        "displayName": "Min Dark",
        "type": "dark",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/min-dark.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "min-light",
        "displayName": "Min Light",
        "type": "light",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/min-light.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "monokai",
        "displayName": "Monokai",
        "type": "dark",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/monokai.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "night-owl",
        "displayName": "Night Owl",
        "type": "dark",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/night-owl.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "nord",
        "displayName": "Nord",
        "type": "dark",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/nord.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "one-dark-pro",
        "displayName": "One Dark Pro",
        "type": "dark",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/one-dark-pro.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "one-light",
        "displayName": "One Light",
        "type": "light",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/one-light.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "plastic",
        "displayName": "Plastic",
        "type": "dark",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/plastic.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "poimandres",
        "displayName": "Poimandres",
        "type": "dark",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/poimandres.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "red",
        "displayName": "Red",
        "type": "dark",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/red.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "rose-pine",
        "displayName": "Ros\xE9 Pine",
        "type": "dark",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/rose-pine.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "rose-pine-dawn",
        "displayName": "Ros\xE9 Pine Dawn",
        "type": "light",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/rose-pine-dawn.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "rose-pine-moon",
        "displayName": "Ros\xE9 Pine Moon",
        "type": "dark",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/rose-pine-moon.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "slack-dark",
        "displayName": "Slack Dark",
        "type": "dark",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/slack-dark.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "slack-ochin",
        "displayName": "Slack Ochin",
        "type": "light",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/slack-ochin.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "snazzy-light",
        "displayName": "Snazzy Light",
        "type": "light",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/snazzy-light.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "solarized-dark",
        "displayName": "Solarized Dark",
        "type": "dark",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/solarized-dark.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "solarized-light",
        "displayName": "Solarized Light",
        "type": "light",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/solarized-light.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "synthwave-84",
        "displayName": "Synthwave '84",
        "type": "dark",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/synthwave-84.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "tokyo-night",
        "displayName": "Tokyo Night",
        "type": "dark",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/tokyo-night.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "vesper",
        "displayName": "Vesper",
        "type": "dark",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/vesper.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "vitesse-black",
        "displayName": "Vitesse Black",
        "type": "dark",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/vitesse-black.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "vitesse-dark",
        "displayName": "Vitesse Dark",
        "type": "dark",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/vitesse-dark.mjs [app-client] (ecmascript, async loader)")
    },
    {
        "id": "vitesse-light",
        "displayName": "Vitesse Light",
        "type": "light",
        "import": ()=>__turbopack_context__.A("[project]/adkit-docs/node_modules/@shikijs/themes/dist/vitesse-light.mjs [app-client] (ecmascript, async loader)")
    }
];
const bundledThemes = Object.fromEntries(bundledThemesInfo.map((i)=>[
        i.id,
        i.import
    ]));
;
}),
"[project]/adkit-docs/node_modules/shiki/dist/bundle-full.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "codeToHast",
    ()=>codeToHast,
    "codeToHtml",
    ()=>codeToHtml,
    "codeToTokens",
    ()=>codeToTokens,
    "codeToTokensBase",
    ()=>codeToTokensBase,
    "codeToTokensWithThemes",
    ()=>codeToTokensWithThemes,
    "createHighlighter",
    ()=>createHighlighter,
    "getLastGrammarState",
    ()=>getLastGrammarState,
    "getSingletonHighlighter",
    ()=>getSingletonHighlighter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/@shikijs/core/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$shiki$2f$dist$2f$langs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/shiki/dist/langs.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$shiki$2f$dist$2f$themes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/shiki/dist/themes.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$engine$2d$oniguruma$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/@shikijs/engine-oniguruma/dist/index.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
const createHighlighter = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createBundledHighlighter"])({
    langs: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$shiki$2f$dist$2f$langs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bundledLanguages"],
    themes: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$shiki$2f$dist$2f$themes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bundledThemes"],
    engine: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$engine$2d$oniguruma$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createOnigurumaEngine"])(__turbopack_context__.A("[project]/adkit-docs/node_modules/shiki/dist/wasm.mjs [app-client] (ecmascript, async loader)"))
});
const { codeToHtml, codeToHast, codeToTokens, codeToTokensBase, codeToTokensWithThemes, getSingletonHighlighter, getLastGrammarState } = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSingletonShorthands"])(createHighlighter, {
    guessEmbeddedLanguages: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f40$shikijs$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["guessEmbeddedLanguages"]
});
;
}),
"[project]/adkit-docs/node_modules/@shikijs/engine-oniguruma/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createOnigurumaEngine",
    ()=>createOnigurumaEngine,
    "getDefaultWasmLoader",
    ()=>getDefaultWasmLoader,
    "loadWasm",
    ()=>loadWasm,
    "setDefaultWasmLoader",
    ()=>setDefaultWasmLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
class ShikiError extends Error {
    constructor(message){
        super(message);
        this.name = "ShikiError";
    }
}
function getHeapMax() {
    return 2147483648;
}
function _emscripten_get_now() {
    return typeof performance !== "undefined" ? performance.now() : Date.now();
}
const alignUp = (x, multiple)=>x + (multiple - x % multiple) % multiple;
async function main(init) {
    let wasmMemory;
    let buffer;
    const binding = {};
    function updateGlobalBufferAndViews(buf) {
        buffer = buf;
        binding.HEAPU8 = new Uint8Array(buf);
        binding.HEAPU32 = new Uint32Array(buf);
    }
    function _emscripten_memcpy_big(dest, src, num) {
        binding.HEAPU8.copyWithin(dest, src, src + num);
    }
    function emscripten_realloc_buffer(size) {
        try {
            wasmMemory.grow(size - buffer.byteLength + 65535 >>> 16);
            updateGlobalBufferAndViews(wasmMemory.buffer);
            return 1;
        } catch  {}
    }
    function _emscripten_resize_heap(requestedSize) {
        const oldSize = binding.HEAPU8.length;
        requestedSize = requestedSize >>> 0;
        const maxHeapSize = getHeapMax();
        if (requestedSize > maxHeapSize) return false;
        for(let cutDown = 1; cutDown <= 4; cutDown *= 2){
            let overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
            overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
            const newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
            const replacement = emscripten_realloc_buffer(newSize);
            if (replacement) return true;
        }
        return false;
    }
    const UTF8Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : void 0;
    function UTF8ArrayToString(heapOrArray, idx, maxBytesToRead = 1024) {
        const endIdx = idx + maxBytesToRead;
        let endPtr = idx;
        while(heapOrArray[endPtr] && !(endPtr >= endIdx))++endPtr;
        if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
            return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
        }
        let str = "";
        while(idx < endPtr){
            let u0 = heapOrArray[idx++];
            if (!(u0 & 128)) {
                str += String.fromCharCode(u0);
                continue;
            }
            const u1 = heapOrArray[idx++] & 63;
            if ((u0 & 224) === 192) {
                str += String.fromCharCode((u0 & 31) << 6 | u1);
                continue;
            }
            const u2 = heapOrArray[idx++] & 63;
            if ((u0 & 240) === 224) {
                u0 = (u0 & 15) << 12 | u1 << 6 | u2;
            } else {
                u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63;
            }
            if (u0 < 65536) {
                str += String.fromCharCode(u0);
            } else {
                const ch = u0 - 65536;
                str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
            }
        }
        return str;
    }
    function UTF8ToString(ptr, maxBytesToRead) {
        return ptr ? UTF8ArrayToString(binding.HEAPU8, ptr, maxBytesToRead) : "";
    }
    const asmLibraryArg = {
        emscripten_get_now: _emscripten_get_now,
        emscripten_memcpy_big: _emscripten_memcpy_big,
        emscripten_resize_heap: _emscripten_resize_heap,
        fd_write: ()=>0
    };
    async function createWasm() {
        const info = {
            env: asmLibraryArg,
            wasi_snapshot_preview1: asmLibraryArg
        };
        const exports$1 = await init(info);
        wasmMemory = exports$1.memory;
        updateGlobalBufferAndViews(wasmMemory.buffer);
        Object.assign(binding, exports$1);
        binding.UTF8ToString = UTF8ToString;
    }
    await createWasm();
    return binding;
}
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>__defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
let onigBinding = null;
function throwLastOnigError(onigBinding2) {
    throw new ShikiError(onigBinding2.UTF8ToString(onigBinding2.getLastOnigError()));
}
class UtfString {
    constructor(str){
        __publicField(this, "utf16Length");
        __publicField(this, "utf8Length");
        __publicField(this, "utf16Value");
        __publicField(this, "utf8Value");
        __publicField(this, "utf16OffsetToUtf8");
        __publicField(this, "utf8OffsetToUtf16");
        const utf16Length = str.length;
        const utf8Length = UtfString._utf8ByteLength(str);
        const computeIndicesMapping = utf8Length !== utf16Length;
        const utf16OffsetToUtf8 = computeIndicesMapping ? new Uint32Array(utf16Length + 1) : null;
        if (computeIndicesMapping) utf16OffsetToUtf8[utf16Length] = utf8Length;
        const utf8OffsetToUtf16 = computeIndicesMapping ? new Uint32Array(utf8Length + 1) : null;
        if (computeIndicesMapping) utf8OffsetToUtf16[utf8Length] = utf16Length;
        const utf8Value = new Uint8Array(utf8Length);
        let i8 = 0;
        for(let i16 = 0; i16 < utf16Length; i16++){
            const charCode = str.charCodeAt(i16);
            let codePoint = charCode;
            let wasSurrogatePair = false;
            if (charCode >= 55296 && charCode <= 56319) {
                if (i16 + 1 < utf16Length) {
                    const nextCharCode = str.charCodeAt(i16 + 1);
                    if (nextCharCode >= 56320 && nextCharCode <= 57343) {
                        codePoint = (charCode - 55296 << 10) + 65536 | nextCharCode - 56320;
                        wasSurrogatePair = true;
                    }
                }
            }
            if (computeIndicesMapping) {
                utf16OffsetToUtf8[i16] = i8;
                if (wasSurrogatePair) utf16OffsetToUtf8[i16 + 1] = i8;
                if (codePoint <= 127) {
                    utf8OffsetToUtf16[i8 + 0] = i16;
                } else if (codePoint <= 2047) {
                    utf8OffsetToUtf16[i8 + 0] = i16;
                    utf8OffsetToUtf16[i8 + 1] = i16;
                } else if (codePoint <= 65535) {
                    utf8OffsetToUtf16[i8 + 0] = i16;
                    utf8OffsetToUtf16[i8 + 1] = i16;
                    utf8OffsetToUtf16[i8 + 2] = i16;
                } else {
                    utf8OffsetToUtf16[i8 + 0] = i16;
                    utf8OffsetToUtf16[i8 + 1] = i16;
                    utf8OffsetToUtf16[i8 + 2] = i16;
                    utf8OffsetToUtf16[i8 + 3] = i16;
                }
            }
            if (codePoint <= 127) {
                utf8Value[i8++] = codePoint;
            } else if (codePoint <= 2047) {
                utf8Value[i8++] = 192 | (codePoint & 1984) >>> 6;
                utf8Value[i8++] = 128 | (codePoint & 63) >>> 0;
            } else if (codePoint <= 65535) {
                utf8Value[i8++] = 224 | (codePoint & 61440) >>> 12;
                utf8Value[i8++] = 128 | (codePoint & 4032) >>> 6;
                utf8Value[i8++] = 128 | (codePoint & 63) >>> 0;
            } else {
                utf8Value[i8++] = 240 | (codePoint & 1835008) >>> 18;
                utf8Value[i8++] = 128 | (codePoint & 258048) >>> 12;
                utf8Value[i8++] = 128 | (codePoint & 4032) >>> 6;
                utf8Value[i8++] = 128 | (codePoint & 63) >>> 0;
            }
            if (wasSurrogatePair) i16++;
        }
        this.utf16Length = utf16Length;
        this.utf8Length = utf8Length;
        this.utf16Value = str;
        this.utf8Value = utf8Value;
        this.utf16OffsetToUtf8 = utf16OffsetToUtf8;
        this.utf8OffsetToUtf16 = utf8OffsetToUtf16;
    }
    static _utf8ByteLength(str) {
        let result = 0;
        for(let i = 0, len = str.length; i < len; i++){
            const charCode = str.charCodeAt(i);
            let codepoint = charCode;
            let wasSurrogatePair = false;
            if (charCode >= 55296 && charCode <= 56319) {
                if (i + 1 < len) {
                    const nextCharCode = str.charCodeAt(i + 1);
                    if (nextCharCode >= 56320 && nextCharCode <= 57343) {
                        codepoint = (charCode - 55296 << 10) + 65536 | nextCharCode - 56320;
                        wasSurrogatePair = true;
                    }
                }
            }
            if (codepoint <= 127) result += 1;
            else if (codepoint <= 2047) result += 2;
            else if (codepoint <= 65535) result += 3;
            else result += 4;
            if (wasSurrogatePair) i++;
        }
        return result;
    }
    createString(onigBinding2) {
        const result = onigBinding2.omalloc(this.utf8Length);
        onigBinding2.HEAPU8.set(this.utf8Value, result);
        return result;
    }
}
const _OnigString = class _OnigString {
    constructor(str){
        __publicField(this, "id", ++_OnigString.LAST_ID);
        __publicField(this, "_onigBinding");
        __publicField(this, "content");
        __publicField(this, "utf16Length");
        __publicField(this, "utf8Length");
        __publicField(this, "utf16OffsetToUtf8");
        __publicField(this, "utf8OffsetToUtf16");
        __publicField(this, "ptr");
        if (!onigBinding) throw new ShikiError("Must invoke loadWasm first.");
        this._onigBinding = onigBinding;
        this.content = str;
        const utfString = new UtfString(str);
        this.utf16Length = utfString.utf16Length;
        this.utf8Length = utfString.utf8Length;
        this.utf16OffsetToUtf8 = utfString.utf16OffsetToUtf8;
        this.utf8OffsetToUtf16 = utfString.utf8OffsetToUtf16;
        if (this.utf8Length < 1e4 && !_OnigString._sharedPtrInUse) {
            if (!_OnigString._sharedPtr) _OnigString._sharedPtr = onigBinding.omalloc(1e4);
            _OnigString._sharedPtrInUse = true;
            onigBinding.HEAPU8.set(utfString.utf8Value, _OnigString._sharedPtr);
            this.ptr = _OnigString._sharedPtr;
        } else {
            this.ptr = utfString.createString(onigBinding);
        }
    }
    convertUtf8OffsetToUtf16(utf8Offset) {
        if (this.utf8OffsetToUtf16) {
            if (utf8Offset < 0) return 0;
            if (utf8Offset > this.utf8Length) return this.utf16Length;
            return this.utf8OffsetToUtf16[utf8Offset];
        }
        return utf8Offset;
    }
    convertUtf16OffsetToUtf8(utf16Offset) {
        if (this.utf16OffsetToUtf8) {
            if (utf16Offset < 0) return 0;
            if (utf16Offset > this.utf16Length) return this.utf8Length;
            return this.utf16OffsetToUtf8[utf16Offset];
        }
        return utf16Offset;
    }
    dispose() {
        if (this.ptr === _OnigString._sharedPtr) _OnigString._sharedPtrInUse = false;
        else this._onigBinding.ofree(this.ptr);
    }
};
__publicField(_OnigString, "LAST_ID", 0);
__publicField(_OnigString, "_sharedPtr", 0);
// a pointer to a string of 10000 bytes
__publicField(_OnigString, "_sharedPtrInUse", false);
let OnigString = _OnigString;
class OnigScanner {
    constructor(patterns){
        __publicField(this, "_onigBinding");
        __publicField(this, "_ptr");
        if (!onigBinding) throw new ShikiError("Must invoke loadWasm first.");
        const strPtrsArr = [];
        const strLenArr = [];
        for(let i = 0, len = patterns.length; i < len; i++){
            const utfString = new UtfString(patterns[i]);
            strPtrsArr[i] = utfString.createString(onigBinding);
            strLenArr[i] = utfString.utf8Length;
        }
        const strPtrsPtr = onigBinding.omalloc(4 * patterns.length);
        onigBinding.HEAPU32.set(strPtrsArr, strPtrsPtr / 4);
        const strLenPtr = onigBinding.omalloc(4 * patterns.length);
        onigBinding.HEAPU32.set(strLenArr, strLenPtr / 4);
        const scannerPtr = onigBinding.createOnigScanner(strPtrsPtr, strLenPtr, patterns.length);
        for(let i = 0, len = patterns.length; i < len; i++)onigBinding.ofree(strPtrsArr[i]);
        onigBinding.ofree(strLenPtr);
        onigBinding.ofree(strPtrsPtr);
        if (scannerPtr === 0) throwLastOnigError(onigBinding);
        this._onigBinding = onigBinding;
        this._ptr = scannerPtr;
    }
    dispose() {
        this._onigBinding.freeOnigScanner(this._ptr);
    }
    findNextMatchSync(string, startPosition, arg) {
        let options = 0 /* None */ ;
        if (typeof arg === "number") {
            options = arg;
        }
        if (typeof string === "string") {
            string = new OnigString(string);
            const result = this._findNextMatchSync(string, startPosition, false, options);
            string.dispose();
            return result;
        }
        return this._findNextMatchSync(string, startPosition, false, options);
    }
    _findNextMatchSync(string, startPosition, debugCall, options) {
        const onigBinding2 = this._onigBinding;
        const resultPtr = onigBinding2.findNextOnigScannerMatch(this._ptr, string.id, string.ptr, string.utf8Length, string.convertUtf16OffsetToUtf8(startPosition), options);
        if (resultPtr === 0) {
            return null;
        }
        const HEAPU32 = onigBinding2.HEAPU32;
        let offset = resultPtr / 4;
        const index = HEAPU32[offset++];
        const count = HEAPU32[offset++];
        const captureIndices = [];
        for(let i = 0; i < count; i++){
            const beg = string.convertUtf8OffsetToUtf16(HEAPU32[offset++]);
            const end = string.convertUtf8OffsetToUtf16(HEAPU32[offset++]);
            captureIndices[i] = {
                start: beg,
                end,
                length: end - beg
            };
        }
        return {
            index,
            captureIndices
        };
    }
}
function isInstantiatorOptionsObject(dataOrOptions) {
    return typeof dataOrOptions.instantiator === "function";
}
function isInstantiatorModule(dataOrOptions) {
    return typeof dataOrOptions.default === "function";
}
function isDataOptionsObject(dataOrOptions) {
    return typeof dataOrOptions.data !== "undefined";
}
function isResponse(dataOrOptions) {
    return typeof Response !== "undefined" && dataOrOptions instanceof Response;
}
function isArrayBuffer(data) {
    return typeof ArrayBuffer !== "undefined" && (data instanceof ArrayBuffer || ArrayBuffer.isView(data)) || typeof __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"] !== "undefined" && __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].isBuffer?.(data) || typeof SharedArrayBuffer !== "undefined" && data instanceof SharedArrayBuffer || typeof Uint32Array !== "undefined" && data instanceof Uint32Array;
}
let initPromise;
function loadWasm(options) {
    if (initPromise) return initPromise;
    async function _load() {
        onigBinding = await main(async (info)=>{
            let instance = options;
            instance = await instance;
            if (typeof instance === "function") instance = await instance(info);
            if (typeof instance === "function") instance = await instance(info);
            if (isInstantiatorOptionsObject(instance)) {
                instance = await instance.instantiator(info);
            } else if (isInstantiatorModule(instance)) {
                instance = await instance.default(info);
            } else {
                if (isDataOptionsObject(instance)) instance = instance.data;
                if (isResponse(instance)) {
                    if (typeof WebAssembly.instantiateStreaming === "function") instance = await _makeResponseStreamingLoader(instance)(info);
                    else instance = await _makeResponseNonStreamingLoader(instance)(info);
                } else if (isArrayBuffer(instance)) {
                    instance = await _makeArrayBufferLoader(instance)(info);
                } else if (instance instanceof WebAssembly.Module) {
                    instance = await _makeArrayBufferLoader(instance)(info);
                } else if ("default" in instance && instance.default instanceof WebAssembly.Module) {
                    instance = await _makeArrayBufferLoader(instance.default)(info);
                }
            }
            if ("instance" in instance) instance = instance.instance;
            if ("exports" in instance) instance = instance.exports;
            return instance;
        });
    }
    initPromise = _load();
    return initPromise;
}
function _makeArrayBufferLoader(data) {
    return (importObject)=>WebAssembly.instantiate(data, importObject);
}
function _makeResponseStreamingLoader(data) {
    return (importObject)=>WebAssembly.instantiateStreaming(data, importObject);
}
function _makeResponseNonStreamingLoader(data) {
    return async (importObject)=>{
        const arrayBuffer = await data.arrayBuffer();
        return WebAssembly.instantiate(arrayBuffer, importObject);
    };
}
let _defaultWasmLoader;
function setDefaultWasmLoader(_loader) {
    _defaultWasmLoader = _loader;
}
function getDefaultWasmLoader() {
    return _defaultWasmLoader;
}
async function createOnigurumaEngine(options) {
    if (options) await loadWasm(options);
    return {
        createScanner (patterns) {
            return new OnigScanner(patterns.map((p)=>typeof p === "string" ? p : p.source));
        },
        createString (s) {
            return new OnigString(s);
        }
    };
}
;
}),
"[project]/adkit-docs/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toaster",
    ()=>$e,
    "toast",
    ()=>ue,
    "useSonner",
    ()=>Oe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
"use client";
;
;
;
var jt = (n)=>{
    switch(n){
        case "success":
            return ee;
        case "info":
            return ae;
        case "warning":
            return oe;
        case "error":
            return se;
        default:
            return null;
    }
}, te = Array(12).fill(0), Yt = ({ visible: n, className: e })=>__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: [
            "sonner-loading-wrapper",
            e
        ].filter(Boolean).join(" "),
        "data-visible": n
    }, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "sonner-spinner"
    }, te.map((t, a)=>__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${a}`
        })))), ee = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
})), oe = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
})), ae = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
})), se = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
})), Ot = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}));
;
var Ft = ()=>{
    let [n, e] = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(document.hidden);
    return __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Ft.useEffect": ()=>{
            let t = {
                "Ft.useEffect.t": ()=>{
                    e(document.hidden);
                }
            }["Ft.useEffect.t"];
            return document.addEventListener("visibilitychange", t), ({
                "Ft.useEffect": ()=>window.removeEventListener("visibilitychange", t)
            })["Ft.useEffect"];
        }
    }["Ft.useEffect"], []), n;
};
;
var bt = 1, yt = class {
    constructor(){
        this.subscribe = (e)=>(this.subscribers.push(e), ()=>{
                let t = this.subscribers.indexOf(e);
                this.subscribers.splice(t, 1);
            });
        this.publish = (e)=>{
            this.subscribers.forEach((t)=>t(e));
        };
        this.addToast = (e)=>{
            this.publish(e), this.toasts = [
                ...this.toasts,
                e
            ];
        };
        this.create = (e)=>{
            var S;
            let { message: t, ...a } = e, u = typeof (e == null ? void 0 : e.id) == "number" || ((S = e.id) == null ? void 0 : S.length) > 0 ? e.id : bt++, f = this.toasts.find((g)=>g.id === u), w = e.dismissible === void 0 ? !0 : e.dismissible;
            return this.dismissedToasts.has(u) && this.dismissedToasts.delete(u), f ? this.toasts = this.toasts.map((g)=>g.id === u ? (this.publish({
                    ...g,
                    ...e,
                    id: u,
                    title: t
                }), {
                    ...g,
                    ...e,
                    id: u,
                    dismissible: w,
                    title: t
                }) : g) : this.addToast({
                title: t,
                ...a,
                dismissible: w,
                id: u
            }), u;
        };
        this.dismiss = (e)=>(this.dismissedToasts.add(e), e || this.toasts.forEach((t)=>{
                this.subscribers.forEach((a)=>a({
                        id: t.id,
                        dismiss: !0
                    }));
            }), this.subscribers.forEach((t)=>t({
                    id: e,
                    dismiss: !0
                })), e);
        this.message = (e, t)=>this.create({
                ...t,
                message: e
            });
        this.error = (e, t)=>this.create({
                ...t,
                message: e,
                type: "error"
            });
        this.success = (e, t)=>this.create({
                ...t,
                type: "success",
                message: e
            });
        this.info = (e, t)=>this.create({
                ...t,
                type: "info",
                message: e
            });
        this.warning = (e, t)=>this.create({
                ...t,
                type: "warning",
                message: e
            });
        this.loading = (e, t)=>this.create({
                ...t,
                type: "loading",
                message: e
            });
        this.promise = (e, t)=>{
            if (!t) return;
            let a;
            t.loading !== void 0 && (a = this.create({
                ...t,
                promise: e,
                type: "loading",
                message: t.loading,
                description: typeof t.description != "function" ? t.description : void 0
            }));
            let u = e instanceof Promise ? e : e(), f = a !== void 0, w, S = u.then(async (i)=>{
                if (w = [
                    "resolve",
                    i
                ], __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(i)) f = !1, this.create({
                    id: a,
                    type: "default",
                    message: i
                });
                else if (ie(i) && !i.ok) {
                    f = !1;
                    let T = typeof t.error == "function" ? await t.error(`HTTP error! status: ${i.status}`) : t.error, F = typeof t.description == "function" ? await t.description(`HTTP error! status: ${i.status}`) : t.description;
                    this.create({
                        id: a,
                        type: "error",
                        message: T,
                        description: F
                    });
                } else if (t.success !== void 0) {
                    f = !1;
                    let T = typeof t.success == "function" ? await t.success(i) : t.success, F = typeof t.description == "function" ? await t.description(i) : t.description;
                    this.create({
                        id: a,
                        type: "success",
                        message: T,
                        description: F
                    });
                }
            }).catch(async (i)=>{
                if (w = [
                    "reject",
                    i
                ], t.error !== void 0) {
                    f = !1;
                    let D = typeof t.error == "function" ? await t.error(i) : t.error, T = typeof t.description == "function" ? await t.description(i) : t.description;
                    this.create({
                        id: a,
                        type: "error",
                        message: D,
                        description: T
                    });
                }
            }).finally(()=>{
                var i;
                f && (this.dismiss(a), a = void 0), (i = t.finally) == null || i.call(t);
            }), g = ()=>new Promise((i, D)=>S.then(()=>w[0] === "reject" ? D(w[1]) : i(w[1])).catch(D));
            return typeof a != "string" && typeof a != "number" ? {
                unwrap: g
            } : Object.assign(a, {
                unwrap: g
            });
        };
        this.custom = (e, t)=>{
            let a = (t == null ? void 0 : t.id) || bt++;
            return this.create({
                jsx: e(a),
                id: a,
                ...t
            }), a;
        };
        this.getActiveToasts = ()=>this.toasts.filter((e)=>!this.dismissedToasts.has(e.id));
        this.subscribers = [], this.toasts = [], this.dismissedToasts = new Set;
    }
}, v = new yt, ne = (n, e)=>{
    let t = (e == null ? void 0 : e.id) || bt++;
    return v.addToast({
        title: n,
        ...e,
        id: t
    }), t;
}, ie = (n)=>n && typeof n == "object" && "ok" in n && typeof n.ok == "boolean" && "status" in n && typeof n.status == "number", le = ne, ce = ()=>v.toasts, de = ()=>v.getActiveToasts(), ue = Object.assign(le, {
    success: v.success,
    info: v.info,
    warning: v.warning,
    error: v.error,
    custom: v.custom,
    message: v.message,
    promise: v.promise,
    dismiss: v.dismiss,
    loading: v.loading
}, {
    getHistory: ce,
    getToasts: de
});
function wt(n, { insertAt: e } = {}) {
    if (!n || typeof document == "undefined") return;
    let t = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
    a.type = "text/css", e === "top" && t.firstChild ? t.insertBefore(a, t.firstChild) : t.appendChild(a), a.styleSheet ? a.styleSheet.cssText = n : a.appendChild(document.createTextNode(n));
}
wt(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function tt(n) {
    return n.label !== void 0;
}
var pe = 3, me = "32px", ge = "16px", Wt = 4e3, he = 356, be = 14, ye = 20, we = 200;
function M(...n) {
    return n.filter(Boolean).join(" ");
}
function xe(n) {
    let [e, t] = n.split("-"), a = [];
    return e && a.push(e), t && a.push(t), a;
}
var ve = (n)=>{
    var Dt, Pt, Nt, Bt, Ct, kt, It, Mt, Ht, At, Lt;
    let { invert: e, toast: t, unstyled: a, interacting: u, setHeights: f, visibleToasts: w, heights: S, index: g, toasts: i, expanded: D, removeToast: T, defaultRichColors: F, closeButton: et, style: ut, cancelButtonStyle: ft, actionButtonStyle: l, className: ot = "", descriptionClassName: at = "", duration: X, position: st, gap: pt, loadingIcon: rt, expandByDefault: B, classNames: s, icons: P, closeButtonAriaLabel: nt = "Close toast", pauseWhenPageIsHidden: it } = n, [Y, C] = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null), [lt, J] = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null), [W, H] = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(!1), [A, mt] = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(!1), [L, z] = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(!1), [ct, d] = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(!1), [h, y] = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(!1), [R, j] = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(0), [p, _] = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(0), O = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(t.duration || X || Wt), G = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null), k = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null), Vt = g === 0, Ut = g + 1 <= w, N = t.type, V = t.dismissible !== !1, Kt = t.className || "", Xt = t.descriptionClassName || "", dt = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "ve.useMemo[dt]": ()=>S.findIndex({
                "ve.useMemo[dt]": (r)=>r.toastId === t.id
            }["ve.useMemo[dt]"]) || 0
    }["ve.useMemo[dt]"], [
        S,
        t.id
    ]), Jt = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "ve.useMemo[Jt]": ()=>{
            var r;
            return (r = t.closeButton) != null ? r : et;
        }
    }["ve.useMemo[Jt]"], [
        t.closeButton,
        et
    ]), Tt = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "ve.useMemo[Tt]": ()=>t.duration || X || Wt
    }["ve.useMemo[Tt]"], [
        t.duration,
        X
    ]), gt = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(0), U = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(0), St = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(0), K = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null), [Gt, Qt] = st.split("-"), Rt = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "ve.useMemo[Rt]": ()=>S.reduce({
                "ve.useMemo[Rt]": (r, m, c)=>c >= dt ? r : r + m.height
            }["ve.useMemo[Rt]"], 0)
    }["ve.useMemo[Rt]"], [
        S,
        dt
    ]), Et = Ft(), qt = t.invert || e, ht = N === "loading";
    U.current = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "ve.useMemo": ()=>dt * pt + Rt
    }["ve.useMemo"], [
        dt,
        Rt
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "ve.useEffect": ()=>{
            O.current = Tt;
        }
    }["ve.useEffect"], [
        Tt
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "ve.useEffect": ()=>{
            H(!0);
        }
    }["ve.useEffect"], []), __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "ve.useEffect": ()=>{
            let r = k.current;
            if (r) {
                let m = r.getBoundingClientRect().height;
                return _(m), f({
                    "ve.useEffect": (c)=>[
                            {
                                toastId: t.id,
                                height: m,
                                position: t.position
                            },
                            ...c
                        ]
                }["ve.useEffect"]), ({
                    "ve.useEffect": ()=>f({
                            "ve.useEffect": (c)=>c.filter({
                                    "ve.useEffect": (b)=>b.toastId !== t.id
                                }["ve.useEffect"])
                        }["ve.useEffect"])
                })["ve.useEffect"];
            }
        }
    }["ve.useEffect"], [
        f,
        t.id
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useLayoutEffect({
        "ve.useLayoutEffect": ()=>{
            if (!W) return;
            let r = k.current, m = r.style.height;
            r.style.height = "auto";
            let c = r.getBoundingClientRect().height;
            r.style.height = m, _(c), f({
                "ve.useLayoutEffect": (b)=>b.find({
                        "ve.useLayoutEffect": (x)=>x.toastId === t.id
                    }["ve.useLayoutEffect"]) ? b.map({
                        "ve.useLayoutEffect": (x)=>x.toastId === t.id ? {
                                ...x,
                                height: c
                            } : x
                    }["ve.useLayoutEffect"]) : [
                        {
                            toastId: t.id,
                            height: c,
                            position: t.position
                        },
                        ...b
                    ]
            }["ve.useLayoutEffect"]);
        }
    }["ve.useLayoutEffect"], [
        W,
        t.title,
        t.description,
        f,
        t.id
    ]);
    let $ = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "ve.useCallback[$]": ()=>{
            mt(!0), j(U.current), f({
                "ve.useCallback[$]": (r)=>r.filter({
                        "ve.useCallback[$]": (m)=>m.toastId !== t.id
                    }["ve.useCallback[$]"])
            }["ve.useCallback[$]"]), setTimeout({
                "ve.useCallback[$]": ()=>{
                    T(t);
                }
            }["ve.useCallback[$]"], we);
        }
    }["ve.useCallback[$]"], [
        t,
        T,
        f,
        U
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "ve.useEffect": ()=>{
            if (t.promise && N === "loading" || t.duration === 1 / 0 || t.type === "loading") return;
            let r;
            return D || u || it && Et ? ({
                "ve.useEffect": ()=>{
                    if (St.current < gt.current) {
                        let b = new Date().getTime() - gt.current;
                        O.current = O.current - b;
                    }
                    St.current = new Date().getTime();
                }
            })["ve.useEffect"]() : ({
                "ve.useEffect": ()=>{
                    O.current !== 1 / 0 && (gt.current = new Date().getTime(), r = setTimeout({
                        "ve.useEffect": ()=>{
                            var b;
                            (b = t.onAutoClose) == null || b.call(t, t), $();
                        }
                    }["ve.useEffect"], O.current));
                }
            })["ve.useEffect"](), ({
                "ve.useEffect": ()=>clearTimeout(r)
            })["ve.useEffect"];
        }
    }["ve.useEffect"], [
        D,
        u,
        t,
        N,
        it,
        Et,
        $
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "ve.useEffect": ()=>{
            t.delete && $();
        }
    }["ve.useEffect"], [
        $,
        t.delete
    ]);
    function Zt() {
        var r, m, c;
        return P != null && P.loading ? __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: M(s == null ? void 0 : s.loader, (r = t == null ? void 0 : t.classNames) == null ? void 0 : r.loader, "sonner-loader"),
            "data-visible": N === "loading"
        }, P.loading) : rt ? __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: M(s == null ? void 0 : s.loader, (m = t == null ? void 0 : t.classNames) == null ? void 0 : m.loader, "sonner-loader"),
            "data-visible": N === "loading"
        }, rt) : __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Yt, {
            className: M(s == null ? void 0 : s.loader, (c = t == null ? void 0 : t.classNames) == null ? void 0 : c.loader),
            visible: N === "loading"
        });
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("li", {
        tabIndex: 0,
        ref: k,
        className: M(ot, Kt, s == null ? void 0 : s.toast, (Dt = t == null ? void 0 : t.classNames) == null ? void 0 : Dt.toast, s == null ? void 0 : s.default, s == null ? void 0 : s[N], (Pt = t == null ? void 0 : t.classNames) == null ? void 0 : Pt[N]),
        "data-sonner-toast": "",
        "data-rich-colors": (Nt = t.richColors) != null ? Nt : F,
        "data-styled": !(t.jsx || t.unstyled || a),
        "data-mounted": W,
        "data-promise": !!t.promise,
        "data-swiped": h,
        "data-removed": A,
        "data-visible": Ut,
        "data-y-position": Gt,
        "data-x-position": Qt,
        "data-index": g,
        "data-front": Vt,
        "data-swiping": L,
        "data-dismissible": V,
        "data-type": N,
        "data-invert": qt,
        "data-swipe-out": ct,
        "data-swipe-direction": lt,
        "data-expanded": !!(D || B && W),
        style: {
            "--index": g,
            "--toasts-before": g,
            "--z-index": i.length - g,
            "--offset": `${A ? R : U.current}px`,
            "--initial-height": B ? "auto" : `${p}px`,
            ...ut,
            ...t.style
        },
        onDragEnd: ()=>{
            z(!1), C(null), K.current = null;
        },
        onPointerDown: (r)=>{
            ht || !V || (G.current = new Date, j(U.current), r.target.setPointerCapture(r.pointerId), r.target.tagName !== "BUTTON" && (z(!0), K.current = {
                x: r.clientX,
                y: r.clientY
            }));
        },
        onPointerUp: ()=>{
            var x, Q, q, Z;
            if (ct || !V) return;
            K.current = null;
            let r = Number(((x = k.current) == null ? void 0 : x.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), m = Number(((Q = k.current) == null ? void 0 : Q.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), c = new Date().getTime() - ((q = G.current) == null ? void 0 : q.getTime()), b = Y === "x" ? r : m, I = Math.abs(b) / c;
            if (Math.abs(b) >= ye || I > .11) {
                j(U.current), (Z = t.onDismiss) == null || Z.call(t, t), J(Y === "x" ? r > 0 ? "right" : "left" : m > 0 ? "down" : "up"), $(), d(!0), y(!1);
                return;
            }
            z(!1), C(null);
        },
        onPointerMove: (r)=>{
            var Q, q, Z, zt;
            if (!K.current || !V || ((Q = window.getSelection()) == null ? void 0 : Q.toString().length) > 0) return;
            let c = r.clientY - K.current.y, b = r.clientX - K.current.x, I = (q = n.swipeDirections) != null ? q : xe(st);
            !Y && (Math.abs(b) > 1 || Math.abs(c) > 1) && C(Math.abs(b) > Math.abs(c) ? "x" : "y");
            let x = {
                x: 0,
                y: 0
            };
            Y === "y" ? (I.includes("top") || I.includes("bottom")) && (I.includes("top") && c < 0 || I.includes("bottom") && c > 0) && (x.y = c) : Y === "x" && (I.includes("left") || I.includes("right")) && (I.includes("left") && b < 0 || I.includes("right") && b > 0) && (x.x = b), (Math.abs(x.x) > 0 || Math.abs(x.y) > 0) && y(!0), (Z = k.current) == null || Z.style.setProperty("--swipe-amount-x", `${x.x}px`), (zt = k.current) == null || zt.style.setProperty("--swipe-amount-y", `${x.y}px`);
        }
    }, Jt && !t.jsx ? __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        "aria-label": nt,
        "data-disabled": ht,
        "data-close-button": !0,
        onClick: ht || !V ? ()=>{} : ()=>{
            var r;
            $(), (r = t.onDismiss) == null || r.call(t, t);
        },
        className: M(s == null ? void 0 : s.closeButton, (Bt = t == null ? void 0 : t.classNames) == null ? void 0 : Bt.closeButton)
    }, (Ct = P == null ? void 0 : P.close) != null ? Ct : Ot) : null, t.jsx || (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(t.title) ? t.jsx ? t.jsx : typeof t.title == "function" ? t.title() : t.title : __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, N || t.icon || t.promise ? __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        "data-icon": "",
        className: M(s == null ? void 0 : s.icon, (kt = t == null ? void 0 : t.classNames) == null ? void 0 : kt.icon)
    }, t.promise || t.type === "loading" && !t.icon ? t.icon || Zt() : null, t.type !== "loading" ? t.icon || (P == null ? void 0 : P[N]) || jt(N) : null) : null, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        "data-content": "",
        className: M(s == null ? void 0 : s.content, (It = t == null ? void 0 : t.classNames) == null ? void 0 : It.content)
    }, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        "data-title": "",
        className: M(s == null ? void 0 : s.title, (Mt = t == null ? void 0 : t.classNames) == null ? void 0 : Mt.title)
    }, typeof t.title == "function" ? t.title() : t.title), t.description ? __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        "data-description": "",
        className: M(at, Xt, s == null ? void 0 : s.description, (Ht = t == null ? void 0 : t.classNames) == null ? void 0 : Ht.description)
    }, typeof t.description == "function" ? t.description() : t.description) : null), (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(t.cancel) ? t.cancel : t.cancel && tt(t.cancel) ? __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: t.cancelButtonStyle || ft,
        onClick: (r)=>{
            var m, c;
            tt(t.cancel) && V && ((c = (m = t.cancel).onClick) == null || c.call(m, r), $());
        },
        className: M(s == null ? void 0 : s.cancelButton, (At = t == null ? void 0 : t.classNames) == null ? void 0 : At.cancelButton)
    }, t.cancel.label) : null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(t.action) ? t.action : t.action && tt(t.action) ? __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: t.actionButtonStyle || l,
        onClick: (r)=>{
            var m, c;
            tt(t.action) && ((c = (m = t.action).onClick) == null || c.call(m, r), !r.defaultPrevented && $());
        },
        className: M(s == null ? void 0 : s.actionButton, (Lt = t == null ? void 0 : t.classNames) == null ? void 0 : Lt.actionButton)
    }, t.action.label) : null));
};
function _t() {
    if (typeof window == "undefined" || typeof document == "undefined") return "ltr";
    let n = document.documentElement.getAttribute("dir");
    return n === "auto" || !n ? window.getComputedStyle(document.documentElement).direction : n;
}
function Te(n, e) {
    let t = {};
    return [
        n,
        e
    ].forEach((a, u)=>{
        let f = u === 1, w = f ? "--mobile-offset" : "--offset", S = f ? ge : me;
        function g(i) {
            [
                "top",
                "right",
                "bottom",
                "left"
            ].forEach((D)=>{
                t[`${w}-${D}`] = typeof i == "number" ? `${i}px` : i;
            });
        }
        typeof a == "number" || typeof a == "string" ? g(a) : typeof a == "object" ? [
            "top",
            "right",
            "bottom",
            "left"
        ].forEach((i)=>{
            a[i] === void 0 ? t[`${w}-${i}`] = S : t[`${w}-${i}`] = typeof a[i] == "number" ? `${a[i]}px` : a[i];
        }) : g(S);
    }), t;
}
function Oe() {
    let [n, e] = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState([]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Oe.useEffect": ()=>v.subscribe({
                "Oe.useEffect": (t)=>{
                    if (t.dismiss) {
                        setTimeout({
                            "Oe.useEffect": ()=>{
                                __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].flushSync({
                                    "Oe.useEffect": ()=>{
                                        e({
                                            "Oe.useEffect": (a)=>a.filter({
                                                    "Oe.useEffect": (u)=>u.id !== t.id
                                                }["Oe.useEffect"])
                                        }["Oe.useEffect"]);
                                    }
                                }["Oe.useEffect"]);
                            }
                        }["Oe.useEffect"]);
                        return;
                    }
                    setTimeout({
                        "Oe.useEffect": ()=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].flushSync({
                                "Oe.useEffect": ()=>{
                                    e({
                                        "Oe.useEffect": (a)=>{
                                            let u = a.findIndex({
                                                "Oe.useEffect.u": (f)=>f.id === t.id
                                            }["Oe.useEffect.u"]);
                                            return u !== -1 ? [
                                                ...a.slice(0, u),
                                                {
                                                    ...a[u],
                                                    ...t
                                                },
                                                ...a.slice(u + 1)
                                            ] : [
                                                t,
                                                ...a
                                            ];
                                        }
                                    }["Oe.useEffect"]);
                                }
                            }["Oe.useEffect"]);
                        }
                    }["Oe.useEffect"]);
                }
            }["Oe.useEffect"])
    }["Oe.useEffect"], []), {
        toasts: n
    };
}
var $e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(e, t) {
    let { invert: a, position: u = "bottom-right", hotkey: f = [
        "altKey",
        "KeyT"
    ], expand: w, closeButton: S, className: g, offset: i, mobileOffset: D, theme: T = "light", richColors: F, duration: et, style: ut, visibleToasts: ft = pe, toastOptions: l, dir: ot = _t(), gap: at = be, loadingIcon: X, icons: st, containerAriaLabel: pt = "Notifications", pauseWhenPageIsHidden: rt } = e, [B, s] = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState([]), P = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "$e.useMemo[P]": ()=>Array.from(new Set([
                u
            ].concat(B.filter({
                "$e.useMemo[P]": (d)=>d.position
            }["$e.useMemo[P]"]).map({
                "$e.useMemo[P]": (d)=>d.position
            }["$e.useMemo[P]"]))))
    }["$e.useMemo[P]"], [
        B,
        u
    ]), [nt, it] = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState([]), [Y, C] = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(!1), [lt, J] = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(!1), [W, H] = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(T !== "system" ? T : typeof window != "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), A = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null), mt = f.join("+").replace(/Key/g, "").replace(/Digit/g, ""), L = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null), z = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(!1), ct = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "$e.useCallback[ct]": (d)=>{
            s({
                "$e.useCallback[ct]": (h)=>{
                    var y;
                    return (y = h.find({
                        "$e.useCallback[ct]": (R)=>R.id === d.id
                    }["$e.useCallback[ct]"])) != null && y.delete || v.dismiss(d.id), h.filter({
                        "$e.useCallback[ct]": ({ id: R })=>R !== d.id
                    }["$e.useCallback[ct]"]);
                }
            }["$e.useCallback[ct]"]);
        }
    }["$e.useCallback[ct]"], []);
    return __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "$e.useEffect": ()=>v.subscribe({
                "$e.useEffect": (d)=>{
                    if (d.dismiss) {
                        s({
                            "$e.useEffect": (h)=>h.map({
                                    "$e.useEffect": (y)=>y.id === d.id ? {
                                            ...y,
                                            delete: !0
                                        } : y
                                }["$e.useEffect"])
                        }["$e.useEffect"]);
                        return;
                    }
                    setTimeout({
                        "$e.useEffect": ()=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].flushSync({
                                "$e.useEffect": ()=>{
                                    s({
                                        "$e.useEffect": (h)=>{
                                            let y = h.findIndex({
                                                "$e.useEffect.y": (R)=>R.id === d.id
                                            }["$e.useEffect.y"]);
                                            return y !== -1 ? [
                                                ...h.slice(0, y),
                                                {
                                                    ...h[y],
                                                    ...d
                                                },
                                                ...h.slice(y + 1)
                                            ] : [
                                                d,
                                                ...h
                                            ];
                                        }
                                    }["$e.useEffect"]);
                                }
                            }["$e.useEffect"]);
                        }
                    }["$e.useEffect"]);
                }
            }["$e.useEffect"])
    }["$e.useEffect"], []), __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "$e.useEffect": ()=>{
            if (T !== "system") {
                H(T);
                return;
            }
            if (T === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? H("dark") : H("light")), typeof window == "undefined") return;
            let d = window.matchMedia("(prefers-color-scheme: dark)");
            try {
                d.addEventListener("change", {
                    "$e.useEffect": ({ matches: h })=>{
                        H(h ? "dark" : "light");
                    }
                }["$e.useEffect"]);
            } catch (h) {
                d.addListener({
                    "$e.useEffect": ({ matches: y })=>{
                        try {
                            H(y ? "dark" : "light");
                        } catch (R) {
                            console.error(R);
                        }
                    }
                }["$e.useEffect"]);
            }
        }
    }["$e.useEffect"], [
        T
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "$e.useEffect": ()=>{
            B.length <= 1 && C(!1);
        }
    }["$e.useEffect"], [
        B
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "$e.useEffect": ()=>{
            let d = {
                "$e.useEffect.d": (h)=>{
                    var R, j;
                    f.every({
                        "$e.useEffect.d": (p)=>h[p] || h.code === p
                    }["$e.useEffect.d"]) && (C(!0), (R = A.current) == null || R.focus()), h.code === "Escape" && (document.activeElement === A.current || (j = A.current) != null && j.contains(document.activeElement)) && C(!1);
                }
            }["$e.useEffect.d"];
            return document.addEventListener("keydown", d), ({
                "$e.useEffect": ()=>document.removeEventListener("keydown", d)
            })["$e.useEffect"];
        }
    }["$e.useEffect"], [
        f
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "$e.useEffect": ()=>{
            if (A.current) return ({
                "$e.useEffect": ()=>{
                    L.current && (L.current.focus({
                        preventScroll: !0
                    }), L.current = null, z.current = !1);
                }
            })["$e.useEffect"];
        }
    }["$e.useEffect"], [
        A.current
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("section", {
        ref: t,
        "aria-label": `${pt} ${mt}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, P.map((d, h)=>{
        var j;
        let [y, R] = d.split("-");
        return B.length ? __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("ol", {
            key: d,
            dir: ot === "auto" ? _t() : ot,
            tabIndex: -1,
            ref: A,
            className: g,
            "data-sonner-toaster": !0,
            "data-theme": W,
            "data-y-position": y,
            "data-lifted": Y && B.length > 1 && !w,
            "data-x-position": R,
            style: {
                "--front-toast-height": `${((j = nt[0]) == null ? void 0 : j.height) || 0}px`,
                "--width": `${he}px`,
                "--gap": `${at}px`,
                ...ut,
                ...Te(i, D)
            },
            onBlur: (p)=>{
                z.current && !p.currentTarget.contains(p.relatedTarget) && (z.current = !1, L.current && (L.current.focus({
                    preventScroll: !0
                }), L.current = null));
            },
            onFocus: (p)=>{
                p.target instanceof HTMLElement && p.target.dataset.dismissible === "false" || z.current || (z.current = !0, L.current = p.relatedTarget);
            },
            onMouseEnter: ()=>C(!0),
            onMouseMove: ()=>C(!0),
            onMouseLeave: ()=>{
                lt || C(!1);
            },
            onDragEnd: ()=>C(!1),
            onPointerDown: (p)=>{
                p.target instanceof HTMLElement && p.target.dataset.dismissible === "false" || J(!0);
            },
            onPointerUp: ()=>J(!1)
        }, B.filter((p)=>!p.position && h === 0 || p.position === d).map((p, _)=>{
            var O, G;
            return __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ve, {
                key: p.id,
                icons: st,
                index: _,
                toast: p,
                defaultRichColors: F,
                duration: (O = l == null ? void 0 : l.duration) != null ? O : et,
                className: l == null ? void 0 : l.className,
                descriptionClassName: l == null ? void 0 : l.descriptionClassName,
                invert: a,
                visibleToasts: ft,
                closeButton: (G = l == null ? void 0 : l.closeButton) != null ? G : S,
                interacting: lt,
                position: d,
                style: l == null ? void 0 : l.style,
                unstyled: l == null ? void 0 : l.unstyled,
                classNames: l == null ? void 0 : l.classNames,
                cancelButtonStyle: l == null ? void 0 : l.cancelButtonStyle,
                actionButtonStyle: l == null ? void 0 : l.actionButtonStyle,
                removeToast: ct,
                toasts: B.filter((k)=>k.position == p.position),
                heights: nt.filter((k)=>k.position == p.position),
                setHeights: it,
                expandByDefault: w,
                gap: at,
                loadingIcon: X,
                expanded: Y,
                pauseWhenPageIsHidden: rt,
                swipeDirections: e.swipeDirections
            });
        })) : null;
    }));
});
;
 //# sourceMappingURL=index.mjs.map
}),
]);

//# sourceMappingURL=b2b63_e2ce687e._.js.map