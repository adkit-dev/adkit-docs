(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/adkit-docs/components/ui/spotlight-new.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Spotlight",
    ()=>Spotlight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
const Spotlight = ({ gradientFirst = "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, .08) 0, hsla(210, 100%, 55%, .02) 50%, hsla(210, 100%, 45%, 0) 80%)", gradientSecond = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .06) 0, hsla(210, 100%, 55%, .02) 80%, transparent 100%)", gradientThird = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .04) 0, hsla(210, 100%, 45%, .02) 80%, transparent 100%)", translateY = -350, width = 560, height = 1380, smallWidth = 240, duration = 7, xOffset = 100, rotate = 45, side = "both" } = {})=>{
    const showLeft = side === "left" || side === "both";
    const showRight = side === "right" || side === "both";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        transition: {
            duration: 1.5
        },
        className: "pointer-events-none absolute inset-0 h-full w-full",
        children: [
            showLeft && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: {
                    x: [
                        0,
                        xOffset,
                        0
                    ]
                },
                transition: {
                    duration,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                },
                className: "absolute top-0 left-0 w-screen h-screen z-40 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            transform: `translateY(${translateY}px) rotate(-${rotate}deg)`,
                            background: gradientFirst,
                            width: `${width}px`,
                            height: `${height}px`
                        },
                        className: `absolute top-0 left-0`
                    }, void 0, false, {
                        fileName: "[project]/adkit-docs/components/ui/spotlight-new.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            transform: `rotate(-${rotate}deg) translate(5%, -50%)`,
                            background: gradientSecond,
                            width: `${smallWidth}px`,
                            height: `${height}px`
                        },
                        className: `absolute top-0 left-0 origin-top-left`
                    }, void 0, false, {
                        fileName: "[project]/adkit-docs/components/ui/spotlight-new.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            transform: `rotate(-${rotate}deg) translate(-180%, -70%)`,
                            background: gradientThird,
                            width: `${smallWidth}px`,
                            height: `${height}px`
                        },
                        className: `absolute top-0 left-0 origin-top-left`
                    }, void 0, false, {
                        fileName: "[project]/adkit-docs/components/ui/spotlight-new.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/adkit-docs/components/ui/spotlight-new.tsx",
                lineNumber: 49,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            showRight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: {
                    x: [
                        0,
                        -xOffset,
                        0
                    ]
                },
                transition: {
                    duration,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                },
                className: "absolute top-0 right-0 w-screen h-screen z-40 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            transform: `translateY(${translateY}px) rotate(${rotate}deg)`,
                            background: gradientFirst,
                            width: `${width}px`,
                            height: `${height}px`
                        },
                        className: `absolute top-0 right-0`
                    }, void 0, false, {
                        fileName: "[project]/adkit-docs/components/ui/spotlight-new.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            transform: `rotate(${rotate}deg) translate(-5%, -50%)`,
                            background: gradientSecond,
                            width: `${smallWidth}px`,
                            height: `${height}px`
                        },
                        className: `absolute top-0 right-0 origin-top-right`
                    }, void 0, false, {
                        fileName: "[project]/adkit-docs/components/ui/spotlight-new.tsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            transform: `rotate(${rotate}deg) translate(180%, -70%)`,
                            background: gradientThird,
                            width: `${smallWidth}px`,
                            height: `${height}px`
                        },
                        className: `absolute top-0 right-0 origin-top-right`
                    }, void 0, false, {
                        fileName: "[project]/adkit-docs/components/ui/spotlight-new.tsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/adkit-docs/components/ui/spotlight-new.tsx",
                lineNumber: 94,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/adkit-docs/components/ui/spotlight-new.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Spotlight;
var _c;
__turbopack_context__.k.register(_c, "Spotlight");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/adkit-docs/components/docs/decorative-bg.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DecorativeBg",
    ()=>DecorativeBg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$ui$2f$spotlight$2d$new$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/components/ui/spotlight-new.tsx [app-client] (ecmascript)");
"use client";
;
;
function DecorativeBg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pointer-events-none absolute inset-0 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 right-0 h-[900px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$ui$2f$spotlight$2d$new$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Spotlight"], {
                    gradientFirst: "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(270, 70%, 75%, .08) 0, hsla(270, 70%, 55%, .02) 50%, hsla(270, 70%, 45%, 0) 80%)",
                    gradientSecond: "radial-gradient(50% 50% at 50% 50%, hsla(270, 70%, 75%, .06) 0, hsla(270, 70%, 55%, .02) 80%, transparent 100%)",
                    gradientThird: "radial-gradient(50% 50% at 50% 50%, hsla(270, 70%, 75%, .04) 0, hsla(270, 70%, 45%, .02) 80%, transparent 100%)",
                    translateY: -350,
                    width: 560,
                    height: 1380,
                    smallWidth: 240,
                    duration: 7,
                    xOffset: 100,
                    rotate: 45,
                    side: "left"
                }, void 0, false, {
                    fileName: "[project]/adkit-docs/components/docs/decorative-bg.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/adkit-docs/components/docs/decorative-bg.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-[1200px] left-0 right-0 h-[900px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$ui$2f$spotlight$2d$new$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Spotlight"], {
                    gradientFirst: "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(270, 70%, 75%, .06) 0, hsla(270, 70%, 55%, .015) 50%, hsla(270, 70%, 45%, 0) 80%)",
                    gradientSecond: "radial-gradient(50% 50% at 50% 50%, hsla(270, 70%, 75%, .04) 0, hsla(270, 70%, 55%, .015) 80%, transparent 100%)",
                    gradientThird: "radial-gradient(50% 50% at 50% 50%, hsla(270, 70%, 75%, .03) 0, hsla(270, 70%, 45%, .01) 80%, transparent 100%)",
                    translateY: -300,
                    width: 480,
                    height: 1200,
                    smallWidth: 200,
                    duration: 9,
                    xOffset: 80,
                    rotate: 50,
                    side: "right"
                }, void 0, false, {
                    fileName: "[project]/adkit-docs/components/docs/decorative-bg.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/adkit-docs/components/docs/decorative-bg.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-[2200px] left-0 right-0 h-[900px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$ui$2f$spotlight$2d$new$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Spotlight"], {
                    gradientFirst: "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(270, 70%, 75%, .05) 0, hsla(270, 70%, 55%, .01) 50%, hsla(270, 70%, 45%, 0) 80%)",
                    gradientSecond: "radial-gradient(50% 50% at 50% 50%, hsla(270, 70%, 75%, .03) 0, hsla(270, 70%, 55%, .01) 80%, transparent 100%)",
                    gradientThird: "radial-gradient(50% 50% at 50% 50%, hsla(270, 70%, 75%, .02) 0, hsla(270, 70%, 45%, .008) 80%, transparent 100%)",
                    translateY: -350,
                    width: 520,
                    height: 1300,
                    smallWidth: 220,
                    duration: 11,
                    xOffset: 90,
                    rotate: 40,
                    side: "both"
                }, void 0, false, {
                    fileName: "[project]/adkit-docs/components/docs/decorative-bg.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/adkit-docs/components/docs/decorative-bg.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/adkit-docs/components/docs/decorative-bg.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = DecorativeBg;
var _c;
__turbopack_context__.k.register(_c, "DecorativeBg");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/adkit-docs/components/ui/shimmer-button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShimmerButton",
    ()=>ShimmerButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const ShimmerButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(_c = ({ shimmerColor = "#ffffff", shimmerSize = "0.05em", shimmerDuration = "3s", borderRadius = "100px", background = "rgba(0, 0, 0, 1)", className, children, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        style: {
            "--spread": "90deg",
            "--shimmer-color": shimmerColor,
            "--radius": borderRadius,
            "--speed": shimmerDuration,
            "--cut": shimmerSize,
            "--bg": background
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden [border-radius:var(--radius)] border border-white/10 px-6 py-3 whitespace-nowrap text-white [background:var(--bg)]", "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px", className),
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("-z-30 blur-[2px]", "@container-[size] absolute inset-0 overflow-visible"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-shimmer-slide absolute inset-0 aspect-[1] h-[100cqh] rounded-none [mask:none]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin-around absolute -inset-full w-auto [translate:0_0] rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]"
                    }, void 0, false, {
                        fileName: "[project]/adkit-docs/components/ui/shimmer-button.tsx",
                        lineNumber: 62,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/adkit-docs/components/ui/shimmer-button.tsx",
                    lineNumber: 60,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/adkit-docs/components/ui/shimmer-button.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 size-full", "rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f]", // transition
                "transform-gpu transition-all duration-300 ease-in-out", // on hover
                "group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]", // on click
                "group-active:shadow-[inset_0_-10px_10px_#ffffff3f]")
            }, void 0, false, {
                fileName: "[project]/adkit-docs/components/ui/shimmer-button.tsx",
                lineNumber: 68,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-(--cut) -z-20 [border-radius:var(--radius)] [background:var(--bg)]")
            }, void 0, false, {
                fileName: "[project]/adkit-docs/components/ui/shimmer-button.tsx",
                lineNumber: 86,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/adkit-docs/components/ui/shimmer-button.tsx",
        lineNumber: 33,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = ShimmerButton;
ShimmerButton.displayName = "ShimmerButton";
var _c, _c1;
__turbopack_context__.k.register(_c, "ShimmerButton$React.forwardRef");
__turbopack_context__.k.register(_c1, "ShimmerButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/adkit-docs/components/docs/code-preview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CodePreview",
    ()=>CodePreview,
    "DiffPreview",
    ()=>DiffPreview,
    "MultiCodePreview",
    ()=>MultiCodePreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/file.js [app-client] (ecmascript) <export default as File>");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$shiki$2f$dist$2f$bundle$2d$full$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/shiki/dist/bundle-full.mjs [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function CodePreview({ tabs, code: singleCode, language: singleLanguage = "typescript", filename: singleFilename, highlightLines = [], showLineNumbers = true, diff = false, className }) {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [highlightedCode, setHighlightedCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const codeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const resolvedTabs = tabs || [
        {
            label: singleFilename || singleLanguage || "Code",
            language: singleLanguage,
            code: singleCode || "",
            filename: singleFilename
        }
    ];
    const currentTab = resolvedTabs[activeTab];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CodePreview.useEffect": ()=>{
            async function highlight() {
                if (!currentTab.code) return;
                const html = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$shiki$2f$dist$2f$bundle$2d$full$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["codeToHtml"])(currentTab.code, {
                    lang: currentTab.language,
                    theme: "github-dark-default"
                });
                setHighlightedCode(html);
            }
            highlight();
        }
    }["CodePreview.useEffect"], [
        currentTab.code,
        currentTab.language
    ]);
    const handleCopy = async ()=>{
        await navigator.clipboard.writeText(currentTab.code);
        setCopied(true);
        setTimeout(()=>setCopied(false), 1500);
    };
    const processedHtml = highlightedCode ? addLineFeatures(highlightedCode, highlightLines, showLineNumbers, diff) : "";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group relative rounded-xl border border-border/50 bg-[#0d1117] overflow-hidden", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between border-b border-white/10 bg-[#161b22]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: resolvedTabs.length > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex",
                            children: resolvedTabs.map((tab, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTab(index),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors", activeTab === index ? "text-white" : "text-gray-400 hover:text-gray-200"),
                                    children: [
                                        tab.icon,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: tab.label
                                        }, void 0, false, {
                                            fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
                                            lineNumber: 98,
                                            columnNumber: 19
                                        }, this),
                                        activeTab === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            layoutId: "code-tab-indicator",
                                            className: "absolute bottom-0 left-0 right-0 h-0.5 bg-primary",
                                            transition: {
                                                type: "spring",
                                                bounce: 0.2,
                                                duration: 0.4
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
                                            lineNumber: 100,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
                                    lineNumber: 87,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, this) : currentTab.filename ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 px-4 py-2.5 text-sm text-gray-400",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
                                    lineNumber: 111,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono",
                                    children: currentTab.filename
                                }, void 0, false, {
                                    fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
                            lineNumber: 110,
                            columnNumber: 13
                        }, this) : null
                    }, void 0, false, {
                        fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleCopy,
                        className: "flex items-center justify-center w-[72px] py-2 mr-2 text-xs text-gray-400 hover:text-white transition-colors rounded-md hover:bg-white/5",
                        "aria-label": "Copy code",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            mode: "wait",
                            children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    scale: 0.8,
                                    opacity: 0
                                },
                                animate: {
                                    scale: 1,
                                    opacity: 1
                                },
                                exit: {
                                    scale: 0.8,
                                    opacity: 0
                                },
                                transition: {
                                    duration: 0.1
                                },
                                className: "flex items-center gap-1.5 text-green-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
                                        lineNumber: 133,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Copied!"
                                    }, void 0, false, {
                                        fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
                                        lineNumber: 134,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, "check", true, {
                                fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
                                lineNumber: 125,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    scale: 0.8,
                                    opacity: 0
                                },
                                animate: {
                                    scale: 1,
                                    opacity: 1
                                },
                                exit: {
                                    scale: 0.8,
                                    opacity: 0
                                },
                                transition: {
                                    duration: 0.1
                                },
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
                                        lineNumber: 145,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Copy"
                                    }, void 0, false, {
                                        fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
                                        lineNumber: 146,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, "copy", true, {
                                fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
                                lineNumber: 137,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: codeRef,
                className: "overflow-x-auto text-sm leading-relaxed [&_pre]:!bg-transparent [&_pre]:p-4 [&_pre]:m-0 [&_code]:font-mono [&_.code-line]:leading-6",
                dangerouslySetInnerHTML: {
                    __html: processedHtml
                }
            }, void 0, false, {
                fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_s(CodePreview, "kJEn3qcVThIDXjNbtElza6nzwRw=");
_c = CodePreview;
function addLineFeatures(html, highlightLines, showLineNumbers, diff, addedLines = [], removedLines = []) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const pre = doc.querySelector("pre");
    const code = pre?.querySelector("code");
    if (!code) return html;
    const lines = code.innerHTML.split("\n");
    const hasAddedOrRemoved = addedLines.length > 0 || removedLines.length > 0;
    const processedLines = lines.map((line, index)=>{
        const lineNum = index + 1;
        const isHighlighted = highlightLines.includes(lineNum);
        const isAdded = addedLines.includes(lineNum);
        const isRemoved = removedLines.includes(lineNum);
        const isDiffAdd = diff && line.trimStart().startsWith("+");
        const isDiffRemove = diff && line.trimStart().startsWith("-");
        const isDimmed = hasAddedOrRemoved && !isAdded && !isRemoved && !isHighlighted;
        let lineClass = "code-line flex";
        let bgClass = "";
        let diffMarker = "";
        let contentClass = "line-content flex-1 pr-4";
        if (isAdded) {
            bgClass = "bg-primary/10";
            diffMarker = `<span class="select-none text-primary w-4 shrink-0 text-center" aria-hidden="true">+</span>`;
        } else if (isRemoved) {
            bgClass = "bg-red-500/10";
            diffMarker = `<span class="select-none text-red-500 w-4 shrink-0 text-center" aria-hidden="true">-</span>`;
        } else if (isHighlighted) {
            bgClass = "bg-primary/10 border-l-2 border-primary";
            diffMarker = showLineNumbers ? `<span class="w-4 shrink-0"></span>` : "";
        } else if (isDiffAdd) {
            bgClass = "bg-green-500/10 border-l-2 border-green-500";
        } else if (isDiffRemove) {
            bgClass = "bg-red-500/10 border-l-2 border-red-500";
        } else {
            diffMarker = showLineNumbers ? `<span class="w-4 shrink-0"></span>` : "";
        }
        if (isDimmed) {
            contentClass += " opacity-40";
        }
        const lineNumberHtml = showLineNumbers ? `<span class="line-number select-none text-gray-600 text-right pr-3 w-8 shrink-0${isDimmed ? " opacity-40" : ""}" aria-hidden="true">${lineNum}</span>` : "";
        return `<div class="${lineClass} ${bgClass}">${diffMarker}${lineNumberHtml}<span class="${contentClass}">${line || " "}</span></div>`;
    });
    code.innerHTML = processedLines.join("");
    return doc.body.innerHTML;
}
function MultiCodePreview({ examples, showLineNumbers = true, className }) {
    _s1();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [highlightedCodes, setHighlightedCodes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MultiCodePreview.useEffect": ()=>{
            async function highlightAll() {
                const results = await Promise.all(examples.map({
                    "MultiCodePreview.useEffect.highlightAll": async (example)=>{
                        const html = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$shiki$2f$dist$2f$bundle$2d$full$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["codeToHtml"])(example.code, {
                            lang: example.language,
                            theme: "github-dark-default"
                        });
                        return addLineFeatures(html, example.highlightLines || [], showLineNumbers, false, example.addedLines || [], example.removedLines || []);
                    }
                }["MultiCodePreview.useEffect.highlightAll"]));
                setHighlightedCodes(results);
            }
            highlightAll();
        }
    }["MultiCodePreview.useEffect"], [
        examples,
        showLineNumbers
    ]);
    const handleCopy = async ()=>{
        await navigator.clipboard.writeText(examples[activeTab].code);
        setCopied(true);
        setTimeout(()=>setCopied(false), 1500);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group relative rounded-xl border border-border/50 bg-[#0d1117] overflow-hidden", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex items-center border-b border-white/10 bg-[#161b22]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex",
                        children: examples.map((example, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab(index),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors", activeTab === index ? "text-white" : "text-gray-400 hover:text-gray-200"),
                                children: [
                                    example.icon,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: example.label
                                    }, void 0, false, {
                                        fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
                                        lineNumber: 299,
                                        columnNumber: 15
                                    }, this),
                                    activeTab === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        layoutId: "multi-code-tab-indicator",
                                        className: "absolute bottom-0 left-0 right-0 h-0.5 bg-primary",
                                        transition: {
                                            type: "spring",
                                            bounce: 0.2,
                                            duration: 0.4
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
                                        lineNumber: 301,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
                                lineNumber: 288,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
                        lineNumber: 286,
                        columnNumber: 9
                    }, this),
                    examples[activeTab].filename && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs text-gray-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"], {
                                className: "h-3.5 w-3.5"
                            }, void 0, false, {
                                fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
                                lineNumber: 314,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono",
                                children: examples[activeTab].filename
                            }, void 0, false, {
                                fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
                                lineNumber: 315,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
                        lineNumber: 313,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleCopy,
                        className: "ml-auto flex items-center justify-center w-[72px] py-2 mr-2 text-xs text-gray-400 hover:text-white transition-colors rounded-md hover:bg-white/5",
                        "aria-label": "Copy code",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            mode: "wait",
                            children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    scale: 0.8,
                                    opacity: 0
                                },
                                animate: {
                                    scale: 1,
                                    opacity: 1
                                },
                                exit: {
                                    scale: 0.8,
                                    opacity: 0
                                },
                                transition: {
                                    duration: 0.1
                                },
                                className: "flex items-center gap-1.5 text-green-400",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
                                    lineNumber: 335,
                                    columnNumber: 17
                                }, this)
                            }, "check", false, {
                                fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
                                lineNumber: 327,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    scale: 0.8,
                                    opacity: 0
                                },
                                animate: {
                                    scale: 1,
                                    opacity: 1
                                },
                                exit: {
                                    scale: 0.8,
                                    opacity: 0
                                },
                                transition: {
                                    duration: 0.1
                                },
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
                                        lineNumber: 346,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Copy"
                                    }, void 0, false, {
                                        fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
                                        lineNumber: 347,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, "copy", true, {
                                fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
                                lineNumber: 338,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
                            lineNumber: 325,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
                        lineNumber: 320,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
                lineNumber: 284,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 10
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -10
                    },
                    transition: {
                        duration: 0.2
                    },
                    className: "overflow-x-auto text-sm leading-relaxed [&_pre]:!bg-transparent [&_pre]:p-4 [&_pre]:m-0 [&_code]:font-mono [&_.code-line]:leading-6",
                    dangerouslySetInnerHTML: {
                        __html: highlightedCodes[activeTab] || ""
                    }
                }, activeTab, false, {
                    fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
                    lineNumber: 356,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
                lineNumber: 355,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
        lineNumber: 282,
        columnNumber: 5
    }, this);
}
_s1(MultiCodePreview, "rXliHYh8wcSzlbOiPAL5B93Yvsk=");
_c1 = MultiCodePreview;
function DiffPreview({ code, language = "diff", filename, showLineNumbers = true, className }) {
    _s2();
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [highlightedCode, setHighlightedCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DiffPreview.useEffect": ()=>{
            async function highlight() {
                const html = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$shiki$2f$dist$2f$bundle$2d$full$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["codeToHtml"])(code, {
                    lang: language,
                    theme: "github-dark-default"
                });
                setHighlightedCode(processDiffHtml(html, showLineNumbers));
            }
            highlight();
        }
    }["DiffPreview.useEffect"], [
        code,
        language,
        showLineNumbers
    ]);
    const handleCopy = async ()=>{
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(()=>setCopied(false), 1500);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group relative rounded-xl border border-border/50 bg-[#0d1117] overflow-hidden", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between border-b border-white/10 bg-[#161b22]",
                children: [
                    filename && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 px-4 py-2.5 text-sm text-gray-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
                                lineNumber: 410,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono",
                                children: filename
                            }, void 0, false, {
                                fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
                                lineNumber: 411,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
                        lineNumber: 409,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleCopy,
                        className: "flex items-center justify-center w-[72px] py-2 mr-2 text-xs text-gray-400 hover:text-white transition-colors rounded-md hover:bg-white/5 ml-auto",
                        "aria-label": "Copy code",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            mode: "wait",
                            children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    scale: 0.8,
                                    opacity: 0
                                },
                                animate: {
                                    scale: 1,
                                    opacity: 1
                                },
                                exit: {
                                    scale: 0.8,
                                    opacity: 0
                                },
                                transition: {
                                    duration: 0.1
                                },
                                className: "flex items-center gap-1.5 text-green-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
                                        lineNumber: 429,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Copied!"
                                    }, void 0, false, {
                                        fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
                                        lineNumber: 430,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, "check", true, {
                                fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
                                lineNumber: 421,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    scale: 0.8,
                                    opacity: 0
                                },
                                animate: {
                                    scale: 1,
                                    opacity: 1
                                },
                                exit: {
                                    scale: 0.8,
                                    opacity: 0
                                },
                                transition: {
                                    duration: 0.1
                                },
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
                                        lineNumber: 441,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Copy"
                                    }, void 0, false, {
                                        fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
                                        lineNumber: 442,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, "copy", true, {
                                fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
                                lineNumber: 433,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
                            lineNumber: 419,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
                        lineNumber: 414,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
                lineNumber: 407,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto text-sm leading-relaxed [&_pre]:!bg-transparent [&_pre]:p-4 [&_pre]:m-0 [&_code]:font-mono [&_.code-line]:leading-6",
                dangerouslySetInnerHTML: {
                    __html: highlightedCode
                }
            }, void 0, false, {
                fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
                lineNumber: 449,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/adkit-docs/components/docs/code-preview.tsx",
        lineNumber: 406,
        columnNumber: 5
    }, this);
}
_s2(DiffPreview, "bz3mrhCDCSOxMumAL9aRCcA7nLI=");
_c2 = DiffPreview;
function processDiffHtml(html, showLineNumbers) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const pre = doc.querySelector("pre");
    const code = pre?.querySelector("code");
    if (!code) return html;
    const lines = code.innerHTML.split("\n");
    let addLineNum = 0;
    let removeLineNum = 0;
    const processedLines = lines.map((line)=>{
        const trimmedLine = line.replace(/<[^>]*>/g, "").trimStart();
        const isAdd = trimmedLine.startsWith("+") && !trimmedLine.startsWith("+++");
        const isRemove = trimmedLine.startsWith("-") && !trimmedLine.startsWith("---");
        const isContext = !isAdd && !isRemove && !trimmedLine.startsWith("@@") && !trimmedLine.startsWith("diff");
        let bgClass = "";
        let lineNumDisplay = "";
        if (isAdd) {
            addLineNum++;
            bgClass = "bg-green-500/15 border-l-2 border-green-500";
            lineNumDisplay = showLineNumbers ? `<span class="line-number select-none text-green-600 text-right pr-4 w-12 shrink-0">${addLineNum}</span>` : "";
        } else if (isRemove) {
            removeLineNum++;
            bgClass = "bg-red-500/15 border-l-2 border-red-500";
            lineNumDisplay = showLineNumbers ? `<span class="line-number select-none text-red-600 text-right pr-4 w-12 shrink-0">${removeLineNum}</span>` : "";
        } else if (isContext) {
            addLineNum++;
            removeLineNum++;
            lineNumDisplay = showLineNumbers ? `<span class="line-number select-none text-gray-600 text-right pr-4 w-12 shrink-0">${addLineNum}</span>` : "";
        } else {
            lineNumDisplay = showLineNumbers ? `<span class="line-number select-none text-gray-600 text-right pr-4 w-12 shrink-0"></span>` : "";
        }
        return `<div class="code-line flex ${bgClass}">${lineNumDisplay}<span class="line-content flex-1 pr-4">${line || " "}</span></div>`;
    });
    code.innerHTML = processedLines.join("");
    return doc.body.innerHTML;
}
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "CodePreview");
__turbopack_context__.k.register(_c1, "MultiCodePreview");
__turbopack_context__.k.register(_c2, "DiffPreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/adkit-docs/app/docs/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DocsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/store.js [app-client] (ecmascript) <export default as Store>");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2d$increasing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart$3e$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/chart-no-axes-column-increasing.js [app-client] (ecmascript) <export default as BarChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/rocket.js [app-client] (ecmascript) <export default as Rocket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/server.js [app-client] (ecmascript) <export default as Server>");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/code.js [app-client] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$docs$2f$decorative$2d$bg$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/components/docs/decorative-bg.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$ui$2f$shimmer$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/components/ui/shimmer-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$docs$2f$code$2d$preview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/components/docs/code-preview.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$icons$2f$sdk$2d$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/components/icons/sdk-icons.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const features = [
    {
        title: "Two-Line Integration",
        description: "Add a script tag or install the React package. Your first ad slot is live in minutes.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"]
    },
    {
        title: "Fixed-Price Slots",
        description: "Set your daily price. Advertisers see the cost upfront. No bidding, no auctions.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"]
    },
    {
        title: "Publisher Control",
        description: "Manually approve every ad before it goes live. Your site, your rules.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"]
    },
    {
        title: "85% Revenue Share",
        description: "Keep 85% of every booking. Compare that to AdSense's ~68%.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"]
    },
    {
        title: "Self-Serve Marketplace",
        description: "Empty slots show a placeholder inviting visitors to book. Demand comes from your audience.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__["Store"]
    },
    {
        title: "Real-Time Analytics",
        description: "Track revenue, impressions, clicks, CTR, and fill rate from your dashboard.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2d$increasing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart$3e$__["BarChart"]
    }
];
const howItWorks = [
    {
        step: 1,
        title: "Install the SDK",
        description: "Add the script tag or React package to your site and define your ad slots."
    },
    {
        step: 2,
        title: "Visitors Discover Slots",
        description: "Empty slots display a placeholder with your price and a booking CTA. Visitors book directly."
    },
    {
        step: 3,
        title: "Approve and Earn",
        description: "Review each ad before it goes live. Get paid automatically via Stripe."
    }
];
const exploreCards = [
    {
        title: "Getting Started",
        description: "Set up Adkit on your site in under 10 minutes.",
        href: "/docs/quickstart",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"]
    },
    {
        title: "React SDK Reference",
        description: "Components, hooks, and props for adkit-react.",
        href: "/docs/react/installation",
        iconComponent: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$icons$2f$sdk$2d$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactIcon"]
    },
    {
        title: "JavaScript SDK Reference",
        description: "Data attributes, events, and configuration for adkit-js.",
        href: "/docs/js/installation",
        iconComponent: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$icons$2f$sdk$2d$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JavaScriptIcon"]
    },
    {
        title: "Publisher Dashboard",
        description: "Manage slots, approvals, analytics, and payouts.",
        href: "/docs/publisher/dashboard",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"]
    },
    {
        title: "API Reference",
        description: "Serve API and Events API endpoints.",
        href: "/docs/api/serve",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"]
    },
    {
        title: "Pricing Model",
        description: "How server-authoritative pricing protects your revenue.",
        href: "/docs/concepts/pricing",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"]
    }
];
const codeExamples = [
    {
        label: "JavaScript",
        language: "html",
        filename: "index.html",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$icons$2f$sdk$2d$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JavaScriptIcon"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/adkit-docs/app/docs/page.tsx",
            lineNumber: 119,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        addedLines: [
            7,
            12,
            13,
            14,
            15,
            16
        ],
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Website</title>
  <script src="https://cdn.adkit.dev/v1.js" defer></script>
</head>
<body>
  <main>
    <h1>Welcome to my site</h1>
    <div
      data-adkit-site="your-site-id"
      data-adkit-slot="my-slot"
      data-adkit-aspect-ratio="4:3"
    ></div>
  </main>
</body>
</html>`
    },
    {
        label: "React",
        language: "tsx",
        filename: "app/layout.tsx",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$icons$2f$sdk$2d$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactIcon"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/adkit-docs/app/docs/page.tsx",
            lineNumber: 145,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        addedLines: [
            2,
            3,
            14,
            15
        ],
        code: `import type { Metadata } from "next"
import { AdkitProvider, AdSlot } from "adkit-react"
import "adkit-react/styles.css"
import "./globals.css"

export const metadata: Metadata = {
  title: "My App",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AdkitProvider siteId="your-site-id">
          <AdSlot slot="my-slot" aspectRatio="4:3" />
          {children}
        </AdkitProvider>
      </body>
    </html>
  )
}`
    }
];
function CodeExampleSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-6 text-center text-lg text-muted-foreground",
                children: "Add your first ad slot in two lines."
            }, void 0, false, {
                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$docs$2f$code$2d$preview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MultiCodePreview"], {
                examples: codeExamples
            }, void 0, false, {
                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/adkit-docs/app/docs/page.tsx",
        lineNumber: 173,
        columnNumber: 5
    }, this);
}
_c = CodeExampleSection;
function SDKHeroCard({ title, description, href, iconComponent: IconComponent }) {
    const patternId = `grid-${href.replace(/[^a-zA-Z0-9_-]/g, "-")}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        className: "group cursor-pointer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex h-48 items-center justify-center overflow-hidden rounded-2xl bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-all sm:h-52",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "aria-hidden": true,
                        className: "pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/adkit-docs/app/docs/page.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "absolute inset-0 h-full w-full opacity-[0.18] [mask-image:radial-gradient(ellipse_at_center,black_65%,transparent_100%)]",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                                    id: patternId,
                                    width: "40",
                                    height: "40",
                                    patternUnits: "userSpaceOnUse",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M 40 0 L 0 0 0 40",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "1",
                                        className: "text-primary/15 dark:text-primary/35"
                                    }, void 0, false, {
                                        fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                        lineNumber: 209,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                    lineNumber: 208,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                lineNumber: 207,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                width: "100%",
                                height: "100%",
                                fill: `url(#${patternId})`
                            }, void 0, false, {
                                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                lineNumber: 218,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/adkit-docs/app/docs/page.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl border border-primary/20 dark:border-primary/35 bg-white/80 dark:bg-black/30 backdrop-blur-sm ring-1 ring-primary/10 dark:ring-primary/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:border-primary/70 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.6),0_0_60px_rgba(139,92,246,0.3),inset_0_1px_0_rgba(255,255,255,0.08)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                            className: "h-10 w-10"
                        }, void 0, false, {
                            fileName: "[project]/adkit-docs/app/docs/page.tsx",
                            lineNumber: 222,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/adkit-docs/app/docs/page.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 space-y-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-medium text-foreground",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/adkit-docs/app/docs/page.tsx",
                        lineNumber: 227,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/adkit-docs/app/docs/page.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/adkit-docs/app/docs/page.tsx",
        lineNumber: 196,
        columnNumber: 5
    }, this);
}
_c1 = SDKHeroCard;
function DocsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-[calc(100vh-3.5rem)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$docs$2f$decorative$2d$bg$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecorativeBg"], {}, void 0, false, {
                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                lineNumber: 237,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-x-0 top-0 h-[600px] overflow-hidden text-primary/[0.06] dark:text-primary/[0.12]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "absolute inset-0 h-full w-full",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                                    id: "hero-grid",
                                    width: "48",
                                    height: "48",
                                    patternUnits: "userSpaceOnUse",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M 48 0 L 0 0 0 48",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "1"
                                    }, void 0, false, {
                                        fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                        lineNumber: 244,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                    lineNumber: 243,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                    id: "hero-fade-vertical",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "0%",
                                    y2: "100%",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "0%",
                                            stopColor: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                            lineNumber: 247,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "15%",
                                            stopColor: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                            lineNumber: 248,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "70%",
                                            stopColor: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                            lineNumber: 249,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "100%",
                                            stopColor: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                            lineNumber: 250,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                    lineNumber: 246,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                    id: "hero-fade-horizontal",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0%",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "0%",
                                            stopColor: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                            lineNumber: 253,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "20%",
                                            stopColor: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                            lineNumber: 254,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "80%",
                                            stopColor: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                            lineNumber: 255,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "100%",
                                            stopColor: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                            lineNumber: 256,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                    lineNumber: 252,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                                    id: "hero-mask",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        width: "100%",
                                        height: "100%",
                                        fill: "url(#hero-fade-vertical)"
                                    }, void 0, false, {
                                        fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                        lineNumber: 259,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                    lineNumber: 258,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                                    id: "hero-mask-combined",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        width: "100%",
                                        height: "100%",
                                        fill: "url(#hero-fade-horizontal)",
                                        mask: "url(#hero-mask)"
                                    }, void 0, false, {
                                        fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                        lineNumber: 262,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                    lineNumber: 261,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/adkit-docs/app/docs/page.tsx",
                            lineNumber: 242,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            width: "100%",
                            height: "100%",
                            fill: "url(#hero-grid)",
                            mask: "url(#hero-mask-combined)"
                        }, void 0, false, {
                            fileName: "[project]/adkit-docs/app/docs/page.tsx",
                            lineNumber: 265,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/adkit-docs/app/docs/page.tsx",
                    lineNumber: 241,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                lineNumber: 240,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 mx-auto max-w-4xl px-4 py-16 lg:py-24 lg:pb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl",
                                children: "Welcome to Adkit Docs"
                            }, void 0, false, {
                                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                lineNumber: 277,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground",
                                children: "Configure and sell ad space on your website, directly from your codebase. These docs will help you get started. Stuck? Try our AI assistant."
                            }, void 0, false, {
                                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                lineNumber: 280,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-10 flex flex-wrap items-center justify-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/docs/quickstart",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$ui$2f$shimmer$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShimmerButton"], {
                                            shimmerColor: "hsl(270 70% 75%)",
                                            background: "hsl(270 70% 45%)",
                                            className: "h-12 px-8 font-sans text-base font-medium",
                                            children: [
                                                "Get Started",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    className: "ml-2 h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                            lineNumber: 285,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                        lineNumber: 284,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        asChild: true,
                                        variant: "ghost",
                                        size: "lg",
                                        className: "h-12 px-8 text-base rounded-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "https://github.com/adkit-dev",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "h-5 w-5",
                                                    fill: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                                        lineNumber: 296,
                                                        columnNumber: 82
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                                    lineNumber: 296,
                                                    columnNumber: 17
                                                }, this),
                                                "View on GitHub"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                            lineNumber: 295,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                        lineNumber: 294,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                lineNumber: 283,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/adkit-docs/app/docs/page.tsx",
                        lineNumber: 276,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-16 grid gap-6 sm:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SDKHeroCard, {
                                title: "JavaScript SDK",
                                description: "Add a script tag to any website. No build step, no framework required.",
                                href: "/docs/js/installation",
                                iconComponent: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$icons$2f$sdk$2d$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JavaScriptIcon"]
                            }, void 0, false, {
                                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                lineNumber: 305,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SDKHeroCard, {
                                title: "React SDK",
                                description: "Drop-in React components with hooks, context, and TypeScript support.",
                                href: "/docs/react/installation",
                                iconComponent: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$icons$2f$sdk$2d$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactIcon"]
                            }, void 0, false, {
                                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                lineNumber: 311,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/adkit-docs/app/docs/page.tsx",
                        lineNumber: 304,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeExampleSection, {}, void 0, false, {
                        fileName: "[project]/adkit-docs/app/docs/page.tsx",
                        lineNumber: 320,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-center text-2xl font-semibold text-foreground sm:text-3xl",
                                children: "Why Adkit"
                            }, void 0, false, {
                                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                lineNumber: 324,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
                                children: features.map((feature)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl border border-border/50 bg-card/50 p-6 transition-colors hover:bg-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(feature.icon, {
                                                className: "h-8 w-8 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                                lineNumber: 333,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "mt-4 font-semibold text-foreground",
                                                children: feature.title
                                            }, void 0, false, {
                                                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                                lineNumber: 334,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-sm text-muted-foreground",
                                                children: feature.description
                                            }, void 0, false, {
                                                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                                lineNumber: 335,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, feature.title, true, {
                                        fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                        lineNumber: 329,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                lineNumber: 327,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/adkit-docs/app/docs/page.tsx",
                        lineNumber: 323,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-center text-2xl font-semibold text-foreground sm:text-3xl",
                                children: "How It Works"
                            }, void 0, false, {
                                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                lineNumber: 343,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-10 grid gap-8 sm:grid-cols-3",
                                children: howItWorks.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-xl font-semibold text-primary",
                                                children: item.step
                                            }, void 0, false, {
                                                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                                lineNumber: 349,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "mt-4 font-semibold text-foreground",
                                                children: item.title
                                            }, void 0, false, {
                                                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                                lineNumber: 352,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-sm text-muted-foreground",
                                                children: item.description
                                            }, void 0, false, {
                                                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                                lineNumber: 353,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, item.step, true, {
                                        fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                        lineNumber: 348,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                lineNumber: 346,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/adkit-docs/app/docs/page.tsx",
                        lineNumber: 342,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-center text-2xl font-semibold text-foreground sm:text-3xl",
                                children: "Explore the Docs"
                            }, void 0, false, {
                                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                lineNumber: 361,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
                                children: exploreCards.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: card.href,
                                        className: "group flex items-start gap-4 rounded-xl border border-border/50 bg-card/50 p-5 transition-colors hover:bg-card",
                                        children: [
                                            card.iconComponent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(card.iconComponent, {
                                                className: "mt-0.5 h-5 w-5 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                                lineNumber: 372,
                                                columnNumber: 19
                                            }, this) : card.icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(card.icon, {
                                                className: "mt-0.5 h-5 w-5 shrink-0 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                                lineNumber: 374,
                                                columnNumber: 19
                                            }, this) : null,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-medium text-foreground group-hover:text-primary",
                                                        children: card.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                                        lineNumber: 377,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 text-sm text-muted-foreground",
                                                        children: card.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                                        lineNumber: 380,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                                lineNumber: 376,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "mt-0.5 h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                                            }, void 0, false, {
                                                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                                lineNumber: 382,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, card.href, true, {
                                        fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                        lineNumber: 366,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                lineNumber: 364,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/adkit-docs/app/docs/page.tsx",
                        lineNumber: 360,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                lineNumber: 274,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/adkit-docs/app/docs/page.tsx",
        lineNumber: 236,
        columnNumber: 5
    }, this);
}
_c2 = DocsPage;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "CodeExampleSection");
__turbopack_context__.k.register(_c1, "SDKHeroCard");
__turbopack_context__.k.register(_c2, "DocsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=adkit-docs_4332fd28._.js.map