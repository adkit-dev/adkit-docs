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
"[project]/adkit-docs/lib/syntax-highlight.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Synchronous syntax highlighter - no async, no WASM, instant rendering
// Uses CSS classes that reference CSS variables for theme switching
__turbopack_context__.s([
    "highlightSync",
    ()=>highlightSync
]);
const JS_KEYWORDS = new Set([
    "const",
    "let",
    "var",
    "function",
    "return",
    "if",
    "else",
    "for",
    "while",
    "do",
    "switch",
    "case",
    "break",
    "continue",
    "new",
    "this",
    "class",
    "extends",
    "import",
    "export",
    "from",
    "default",
    "async",
    "await",
    "try",
    "catch",
    "finally",
    "throw",
    "typeof",
    "instanceof",
    "in",
    "of",
    "true",
    "false",
    "null",
    "undefined",
    "void",
    "delete",
    "yield",
    "static",
    "get",
    "set",
    "super",
    "implements",
    "interface",
    "type",
    "enum",
    "as"
]);
const BASH_KEYWORDS = new Set([
    "cd",
    "ls",
    "mkdir",
    "rm",
    "cp",
    "mv",
    "cat",
    "echo",
    "grep",
    "find",
    "npm",
    "npx",
    "pnpm",
    "yarn",
    "node",
    "git",
    "curl",
    "wget",
    "sudo",
    "export",
    "source",
    "chmod",
    "chown",
    "exit",
    "docs",
    "init",
    "dev",
    "build",
    "deploy",
    "install",
    "run",
    "start",
    "test"
]);
function escapeHtml(text) {
    return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
function tokenizeJS(code) {
    const tokens = [];
    let i = 0;
    while(i < code.length){
        // Whitespace
        if (/\s/.test(code[i])) {
            let ws = "";
            while(i < code.length && /\s/.test(code[i])){
                ws += code[i++];
            }
            tokens.push({
                type: "plain",
                content: ws
            });
            continue;
        }
        // Single-line comment
        if (code.slice(i, i + 2) === "//") {
            let comment = "";
            while(i < code.length && code[i] !== "\n"){
                comment += code[i++];
            }
            tokens.push({
                type: "comment",
                content: comment
            });
            continue;
        }
        // Multi-line comment
        if (code.slice(i, i + 2) === "/*") {
            let comment = "/*";
            i += 2;
            while(i < code.length && code.slice(i, i + 2) !== "*/"){
                comment += code[i++];
            }
            comment += "*/";
            i += 2;
            tokens.push({
                type: "comment",
                content: comment
            });
            continue;
        }
        // String (double quotes)
        if (code[i] === '"') {
            let str = '"';
            i++;
            while(i < code.length && code[i] !== '"'){
                if (code[i] === "\\") str += code[i++];
                if (i < code.length) str += code[i++];
            }
            if (i < code.length) str += code[i++];
            tokens.push({
                type: "string",
                content: str
            });
            continue;
        }
        // String (single quotes)
        if (code[i] === "'") {
            let str = "'";
            i++;
            while(i < code.length && code[i] !== "'"){
                if (code[i] === "\\") str += code[i++];
                if (i < code.length) str += code[i++];
            }
            if (i < code.length) str += code[i++];
            tokens.push({
                type: "string",
                content: str
            });
            continue;
        }
        // Template string
        if (code[i] === "`") {
            let str = "`";
            i++;
            while(i < code.length && code[i] !== "`"){
                if (code[i] === "\\") str += code[i++];
                if (i < code.length) str += code[i++];
            }
            if (i < code.length) str += code[i++];
            tokens.push({
                type: "string",
                content: str
            });
            continue;
        }
        // Numbers
        if (/\d/.test(code[i])) {
            let num = "";
            while(i < code.length && /[\d.xXa-fA-F]/.test(code[i])){
                num += code[i++];
            }
            tokens.push({
                type: "number",
                content: num
            });
            continue;
        }
        // JSX tags
        if (code[i] === "<") {
            const nextChar = code[i + 1];
            if (nextChar === "/" || /[A-Za-z]/.test(nextChar)) {
                let tag = "<";
                i++;
                if (code[i] === "/") {
                    tag += code[i++];
                }
                // Tag name
                let tagName = "";
                while(i < code.length && /[A-Za-z0-9]/.test(code[i])){
                    tagName += code[i++];
                }
                tokens.push({
                    type: "punctuation",
                    content: tag.slice(0, -tagName.length || undefined)
                });
                if (tagName) {
                    tokens.push({
                        type: "tag",
                        content: tagName
                    });
                }
                continue;
            }
        }
        // Operators
        if (/[+\-*/%=<>!&|^~?:]/.test(code[i])) {
            let op = "";
            while(i < code.length && /[+\-*/%=<>!&|^~?:]/.test(code[i])){
                op += code[i++];
            }
            tokens.push({
                type: "operator",
                content: op
            });
            continue;
        }
        // Punctuation
        if (/[{}[\]();,.]/.test(code[i])) {
            tokens.push({
                type: "punctuation",
                content: code[i++]
            });
            continue;
        }
        // Identifiers and keywords
        if (/[A-Za-z_$]/.test(code[i])) {
            let word = "";
            while(i < code.length && /[A-Za-z0-9_$]/.test(code[i])){
                word += code[i++];
            }
            if (JS_KEYWORDS.has(word)) {
                tokens.push({
                    type: "keyword",
                    content: word
                });
            } else if (code[i] === "(") {
                tokens.push({
                    type: "function",
                    content: word
                });
            } else if (word[0] === word[0].toUpperCase() && /[a-z]/.test(word)) {
                tokens.push({
                    type: "tag",
                    content: word
                });
            } else {
                tokens.push({
                    type: "variable",
                    content: word
                });
            }
            continue;
        }
        // Default: plain text
        tokens.push({
            type: "plain",
            content: code[i++]
        });
    }
    return tokens;
}
function tokenizeBash(code) {
    const tokens = [];
    let i = 0;
    while(i < code.length){
        // Whitespace
        if (/\s/.test(code[i])) {
            let ws = "";
            while(i < code.length && /\s/.test(code[i])){
                ws += code[i++];
            }
            tokens.push({
                type: "plain",
                content: ws
            });
            continue;
        }
        // Comments
        if (code[i] === "#") {
            let comment = "";
            while(i < code.length && code[i] !== "\n"){
                comment += code[i++];
            }
            tokens.push({
                type: "comment",
                content: comment
            });
            continue;
        }
        // Strings
        if (code[i] === '"' || code[i] === "'") {
            const quote = code[i];
            let str = quote;
            i++;
            while(i < code.length && code[i] !== quote){
                if (code[i] === "\\") str += code[i++];
                if (i < code.length) str += code[i++];
            }
            if (i < code.length) str += code[i++];
            tokens.push({
                type: "string",
                content: str
            });
            continue;
        }
        // Flags
        if (code[i] === "-") {
            let flag = "";
            while(i < code.length && /[A-Za-z0-9-]/.test(code[i])){
                flag += code[i++];
            }
            tokens.push({
                type: "operator",
                content: flag
            });
            continue;
        }
        // Variables ($VAR)
        if (code[i] === "$") {
            let varName = "$";
            i++;
            while(i < code.length && /[A-Za-z0-9_]/.test(code[i])){
                varName += code[i++];
            }
            tokens.push({
                type: "variable",
                content: varName
            });
            continue;
        }
        // Words/commands
        if (/[A-Za-z@_]/.test(code[i])) {
            let word = "";
            while(i < code.length && /[A-Za-z0-9@_.\-/]/.test(code[i])){
                word += code[i++];
            }
            if (BASH_KEYWORDS.has(word)) {
                tokens.push({
                    type: "keyword",
                    content: word
                });
            } else if (word.includes("/") || word.includes(".")) {
                tokens.push({
                    type: "string",
                    content: word
                });
            } else {
                tokens.push({
                    type: "variable",
                    content: word
                });
            }
            continue;
        }
        // Default
        tokens.push({
            type: "plain",
            content: code[i++]
        });
    }
    return tokens;
}
function tokenizeJSON(code) {
    const tokens = [];
    let i = 0;
    while(i < code.length){
        if (/\s/.test(code[i])) {
            let ws = "";
            while(i < code.length && /\s/.test(code[i])){
                ws += code[i++];
            }
            tokens.push({
                type: "plain",
                content: ws
            });
            continue;
        }
        // Strings (property names or values)
        if (code[i] === '"') {
            let str = '"';
            i++;
            while(i < code.length && code[i] !== '"'){
                if (code[i] === "\\") str += code[i++];
                if (i < code.length) str += code[i++];
            }
            if (i < code.length) str += code[i++];
            // Check if it's a property name (followed by :)
            let j = i;
            while(j < code.length && /\s/.test(code[j]))j++;
            if (code[j] === ":") {
                tokens.push({
                    type: "property",
                    content: str
                });
            } else {
                tokens.push({
                    type: "string",
                    content: str
                });
            }
            continue;
        }
        // Numbers
        if (/[\d-]/.test(code[i])) {
            let num = "";
            while(i < code.length && /[\d.eE+-]/.test(code[i])){
                num += code[i++];
            }
            tokens.push({
                type: "number",
                content: num
            });
            continue;
        }
        // Keywords
        if (code.slice(i, i + 4) === "true" || code.slice(i, i + 5) === "false" || code.slice(i, i + 4) === "null") {
            const keyword = code.slice(i, i + 4) === "null" ? "null" : code.slice(i, i + 4) === "true" ? "true" : "false";
            tokens.push({
                type: "keyword",
                content: keyword
            });
            i += keyword.length;
            continue;
        }
        // Punctuation
        if (/[{}[\]:,]/.test(code[i])) {
            tokens.push({
                type: "punctuation",
                content: code[i++]
            });
            continue;
        }
        tokens.push({
            type: "plain",
            content: code[i++]
        });
    }
    return tokens;
}
function highlightSync(code, language) {
    let tokens;
    const lang = language.toLowerCase();
    if ([
        "js",
        "javascript",
        "ts",
        "typescript",
        "jsx",
        "tsx"
    ].includes(lang)) {
        tokens = tokenizeJS(code);
    } else if ([
        "bash",
        "sh",
        "shell",
        "zsh"
    ].includes(lang)) {
        tokens = tokenizeBash(code);
    } else if (lang === "json") {
        tokens = tokenizeJSON(code);
    } else {
        // Default: no highlighting, just escape HTML
        return `<pre class="code-highlight"><code>${escapeHtml(code)}</code></pre>`;
    }
    const highlighted = tokens.map((token)=>`<span class="token-${token.type}">${escapeHtml(token.content)}</span>`).join("");
    return `<pre class="code-highlight"><code>${highlighted}</code></pre>`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/adkit-docs/hooks/use-copy-to-clipboard.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCopyToClipboard",
    ()=>useCopyToClipboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useCopyToClipboard({ timeout = 2000 } = {}) {
    _s();
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const copy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCopyToClipboard.useCallback[copy]": async (text)=>{
            if (!navigator?.clipboard) {
                console.warn("Clipboard not supported");
                return false;
            }
            try {
                await navigator.clipboard.writeText(text);
                setCopied(true);
                setTimeout({
                    "useCopyToClipboard.useCallback[copy]": ()=>setCopied(false)
                }["useCopyToClipboard.useCallback[copy]"], timeout);
                return true;
            } catch (error) {
                console.error("Failed to copy:", error);
                setCopied(false);
                return false;
            }
        }
    }["useCopyToClipboard.useCallback[copy]"], [
        timeout
    ]);
    return {
        copied,
        copy
    };
}
_s(useCopyToClipboard, "QV91T40Mqz7E8i/OX01RqjOxXu4=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/adkit-docs/components/docs/code-block.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CodeBlock",
    ()=>CodeBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$lib$2f$syntax$2d$highlight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/lib/syntax-highlight.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$hooks$2f$use$2d$copy$2d$to$2d$clipboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/hooks/use-copy-to-clipboard.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function CodeBlock({ code, language = "bash", filename, tabs }) {
    _s();
    const { copied, copy } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$hooks$2f$use$2d$copy$2d$to$2d$clipboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCopyToClipboard"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const displayTabs = tabs || (language === "bash" && code.includes("npm") ? [
        "npm",
        "pnpm"
    ] : null);
    const highlightedHtml = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CodeBlock.useMemo[highlightedHtml]": ()=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$lib$2f$syntax$2d$highlight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["highlightSync"])(code, language);
        }
    }["CodeBlock.useMemo[highlightedHtml]"], [
        code,
        language
    ]);
    const handleCopy = ()=>copy(code.trim());
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "code-block my-6",
        role: "region",
        "aria-label": `Code example${filename ? `: ${filename}` : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "code-block-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        role: displayTabs ? "tablist" : undefined,
                        children: displayTabs ? displayTabs.map((tab, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab(index),
                                role: "tab",
                                "aria-selected": activeTab === index,
                                className: `code-block-tab min-h-[44px] min-w-[44px] ${activeTab === index ? "active" : ""}`,
                                children: [
                                    tab,
                                    activeTab === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500"
                                    }, void 0, false, {
                                        fileName: "[project]/adkit-docs/components/docs/code-block.tsx",
                                        lineNumber: 43,
                                        columnNumber: 41
                                    }, this)
                                ]
                            }, tab, true, {
                                fileName: "[project]/adkit-docs/components/docs/code-block.tsx",
                                lineNumber: 35,
                                columnNumber: 15
                            }, this)) : filename ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "code-block-label",
                            children: filename
                        }, void 0, false, {
                            fileName: "[project]/adkit-docs/components/docs/code-block.tsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "code-block-label",
                            children: language
                        }, void 0, false, {
                            fileName: "[project]/adkit-docs/components/docs/code-block.tsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/adkit-docs/components/docs/code-block.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "code-block-icon-btn min-h-[44px] min-w-[44px] p-2",
                                "aria-label": "Show code information",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/adkit-docs/components/docs/code-block.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/adkit-docs/components/docs/code-block.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleCopy,
                                className: `code-block-icon-btn min-h-[44px] min-w-[44px] p-2 ${copied ? "text-green-500" : ""}`,
                                "aria-label": copied ? "Code copied to clipboard" : "Copy code to clipboard",
                                children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/adkit-docs/components/docs/code-block.tsx",
                                    lineNumber: 63,
                                    columnNumber: 23
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/adkit-docs/components/docs/code-block.tsx",
                                    lineNumber: 63,
                                    columnNumber: 55
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/adkit-docs/components/docs/code-block.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "code-block-icon-btn min-h-[44px] min-w-[44px] p-2",
                                "aria-label": "Explain code with AI",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/adkit-docs/components/docs/code-block.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/adkit-docs/components/docs/code-block.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/adkit-docs/components/docs/code-block.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/adkit-docs/components/docs/code-block.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "code-block-content",
                dangerouslySetInnerHTML: {
                    __html: highlightedHtml
                },
                role: "tabpanel",
                tabIndex: 0
            }, void 0, false, {
                fileName: "[project]/adkit-docs/components/docs/code-block.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/adkit-docs/components/docs/code-block.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(CodeBlock, "nLoRR/fhCAkFpMY5KZYyB2oiRI8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$hooks$2f$use$2d$copy$2d$to$2d$clipboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCopyToClipboard"]
    ];
});
_c = CodeBlock;
var _c;
__turbopack_context__.k.register(_c, "CodeBlock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/adkit-docs/hooks/use-sdk-preference.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSDKPreference",
    ()=>useSDKPreference
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const STORAGE_KEY = "adkit-preferred-sdk";
const PROMPTED_KEY = "adkit-sdk-preference-prompted";
function useSDKPreference() {
    _s();
    const [sdk, setSDKState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("js");
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasBeenPrompted, setHasBeenPrompted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasSavedPreference, setHasSavedPreference] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSDKPreference.useEffect": ()=>{
            const stored = localStorage.getItem(STORAGE_KEY);
            const prompted = localStorage.getItem(PROMPTED_KEY) === "true";
            if (stored === "js" || stored === "react") {
                setSDKState(stored);
                setHasSavedPreference(true);
            }
            setHasBeenPrompted(prompted);
            setIsLoaded(true);
        }
    }["useSDKPreference.useEffect"], []);
    const setSDK = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSDKPreference.useCallback[setSDK]": (value)=>{
            setSDKState(value);
        }
    }["useSDKPreference.useCallback[setSDK]"], []);
    const savePreference = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSDKPreference.useCallback[savePreference]": (value)=>{
            localStorage.setItem(STORAGE_KEY, value);
            localStorage.setItem(PROMPTED_KEY, "true");
            setHasSavedPreference(true);
            setHasBeenPrompted(true);
        }
    }["useSDKPreference.useCallback[savePreference]"], []);
    const dismissPrompt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSDKPreference.useCallback[dismissPrompt]": ()=>{
            localStorage.setItem(PROMPTED_KEY, "true");
            setHasBeenPrompted(true);
        }
    }["useSDKPreference.useCallback[dismissPrompt]"], []);
    const shouldPrompt = isLoaded && !hasBeenPrompted && !hasSavedPreference;
    return {
        sdk,
        setSDK,
        isLoaded,
        shouldPrompt,
        hasSavedPreference,
        savePreference,
        dismissPrompt
    };
}
_s(useSDKPreference, "cIJePDi5UGUnoxBsEm7vfGGNVbA=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/adkit-docs/components/docs/sdk-preference-toast.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SDKPreferenceToast",
    ()=>SDKPreferenceToast,
    "showSDKPreferenceToast",
    ()=>showSDKPreferenceToast,
    "showSDKSavedToast",
    ()=>showSDKSavedToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$icons$2f$sdk$2d$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/components/icons/sdk-icons.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function SDKPreferenceToast({ sdk, onSave, onDismiss, toastId }) {
    const sdkName = sdk === "js" ? "JavaScript" : "React";
    const Icon = sdk === "js" ? __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$icons$2f$sdk$2d$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JavaScriptIcon"] : __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$icons$2f$sdk$2d$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactIcon"];
    const handleSave = ()=>{
        onSave();
        __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].dismiss(toastId);
        setTimeout(()=>{
            showSDKSavedToast(sdk);
        }, 150);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-full max-w-sm flex-col gap-3 rounded-xl border border-border bg-card p-4 shadow-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/adkit-docs/components/docs/sdk-preference-toast.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/adkit-docs/components/docs/sdk-preference-toast.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-0.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold text-foreground",
                                        children: [
                                            "Save ",
                                            sdkName,
                                            " SDK as default?"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/adkit-docs/components/docs/sdk-preference-toast.tsx",
                                        lineNumber: 34,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: "We'll remember your preference across all pages."
                                    }, void 0, false, {
                                        fileName: "[project]/adkit-docs/components/docs/sdk-preference-toast.tsx",
                                        lineNumber: 37,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/adkit-docs/components/docs/sdk-preference-toast.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/adkit-docs/components/docs/sdk-preference-toast.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            onDismiss();
                            __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].dismiss(toastId);
                        },
                        className: "shrink-0 rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/adkit-docs/components/docs/sdk-preference-toast.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/adkit-docs/components/docs/sdk-preference-toast.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/adkit-docs/components/docs/sdk-preference-toast.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-end gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            onDismiss();
                            __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].dismiss(toastId);
                        },
                        className: "rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                        children: "Not now"
                    }, void 0, false, {
                        fileName: "[project]/adkit-docs/components/docs/sdk-preference-toast.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSave,
                        className: "rounded-lg bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
                        children: "Save"
                    }, void 0, false, {
                        fileName: "[project]/adkit-docs/components/docs/sdk-preference-toast.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/adkit-docs/components/docs/sdk-preference-toast.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/adkit-docs/components/docs/sdk-preference-toast.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c = SDKPreferenceToast;
function showSDKPreferenceToast(sdk, onSave, onDismiss) {
    const toastId = __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].custom((id)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SDKPreferenceToast, {
            sdk: sdk,
            onSave: onSave,
            onDismiss: onDismiss,
            toastId: id
        }, void 0, false, {
            fileName: "[project]/adkit-docs/components/docs/sdk-preference-toast.tsx",
            lineNumber: 80,
            columnNumber: 7
        }, this), {
        duration: 10000,
        position: "bottom-right"
    });
    return toastId;
}
function showSDKSavedToast(sdk) {
    const sdkName = sdk === "js" ? "JavaScript" : "React";
    __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].custom(()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 rounded-xl border border-primary/30 bg-card p-4 shadow-xl w-full max-w-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                        className: "h-4 w-4 text-primary-foreground",
                        strokeWidth: 3
                    }, void 0, false, {
                        fileName: "[project]/adkit-docs/components/docs/sdk-preference-toast.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/adkit-docs/components/docs/sdk-preference-toast.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm font-medium text-foreground whitespace-nowrap",
                    children: [
                        sdkName,
                        " has been saved as your default SDK."
                    ]
                }, void 0, true, {
                    fileName: "[project]/adkit-docs/components/docs/sdk-preference-toast.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/adkit-docs/components/docs/sdk-preference-toast.tsx",
            lineNumber: 100,
            columnNumber: 7
        }, this), {
        duration: 3000,
        position: "bottom-right"
    });
}
var _c;
__turbopack_context__.k.register(_c, "SDKPreferenceToast");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/adkit-docs/components/docs/sdk-tab-picker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SDKTabPicker",
    ()=>SDKTabPicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$icons$2f$sdk$2d$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/components/icons/sdk-icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$hooks$2f$use$2d$sdk$2d$preference$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/hooks/use-sdk-preference.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$docs$2f$sdk$2d$preference$2d$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/components/docs/sdk-preference-toast.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function SDKTabPicker({ value: controlledValue, onChange }) {
    _s();
    const { sdk: storedSDK, setSDK: setStoredSDK, isLoaded, shouldPrompt, savePreference, dismissPrompt } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$hooks$2f$use$2d$sdk$2d$preference$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSDKPreference"])();
    const value = controlledValue ?? storedSDK;
    const hasShownToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SDKTabPicker.useEffect": ()=>{
            if (isLoaded) {
                onChange?.(storedSDK);
            }
        }
    }["SDKTabPicker.useEffect"], [
        isLoaded,
        storedSDK,
        onChange
    ]);
    const tabs = [
        {
            id: "js",
            label: "JavaScript SDK",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$icons$2f$sdk$2d$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JavaScriptIcon"]
        },
        {
            id: "react",
            label: "React SDK",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$icons$2f$sdk$2d$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactIcon"]
        }
    ];
    const handleChange = (newValue)=>{
        onChange?.(newValue);
        setStoredSDK(newValue);
        if (shouldPrompt && !hasShownToast.current) {
            hasShownToast.current = true;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$docs$2f$sdk$2d$preference$2d$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showSDKPreferenceToast"])(newValue, ()=>savePreference(newValue), dismissPrompt);
        }
    };
    if (!isLoaded) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative mx-auto flex w-fit rounded-full bg-muted/80 p-1.5 border border-border/50",
            children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-medium text-muted-foreground",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(tab.icon, {
                            className: "h-5 w-5 opacity-50"
                        }, void 0, false, {
                            fileName: "[project]/adkit-docs/components/docs/sdk-tab-picker.tsx",
                            lineNumber: 62,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "opacity-50",
                            children: tab.label
                        }, void 0, false, {
                            fileName: "[project]/adkit-docs/components/docs/sdk-tab-picker.tsx",
                            lineNumber: 63,
                            columnNumber: 13
                        }, this)
                    ]
                }, tab.id, true, {
                    fileName: "[project]/adkit-docs/components/docs/sdk-tab-picker.tsx",
                    lineNumber: 58,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/adkit-docs/components/docs/sdk-tab-picker.tsx",
            lineNumber: 56,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative mx-auto flex w-fit rounded-full bg-muted/80 p-1.5 border border-border/50",
        children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>handleChange(tab.id),
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative z-10 flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-medium transition-colors", value === tab.id ? "text-foreground" : "text-muted-foreground hover:text-foreground/80"),
                children: [
                    value === tab.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        layoutId: "sdk-tab-indicator",
                        className: "absolute inset-0 rounded-full bg-background shadow-md border border-border/30",
                        transition: {
                            type: "spring",
                            bounce: 0.15,
                            duration: 0.5
                        }
                    }, void 0, false, {
                        fileName: "[project]/adkit-docs/components/docs/sdk-tab-picker.tsx",
                        lineNumber: 84,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(tab.icon, {
                        className: "relative z-10 h-5 w-5"
                    }, void 0, false, {
                        fileName: "[project]/adkit-docs/components/docs/sdk-tab-picker.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "relative z-10",
                        children: tab.label
                    }, void 0, false, {
                        fileName: "[project]/adkit-docs/components/docs/sdk-tab-picker.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, this)
                ]
            }, tab.id, true, {
                fileName: "[project]/adkit-docs/components/docs/sdk-tab-picker.tsx",
                lineNumber: 73,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/adkit-docs/components/docs/sdk-tab-picker.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_s(SDKTabPicker, "t3OARl76JgTt4CTjygAHm0d2wbo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$hooks$2f$use$2d$sdk$2d$preference$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSDKPreference"]
    ];
});
_c = SDKTabPicker;
var _c;
__turbopack_context__.k.register(_c, "SDKTabPicker");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$docs$2f$decorative$2d$bg$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/components/docs/decorative-bg.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$ui$2f$shimmer$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/components/ui/shimmer-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$docs$2f$code$2d$block$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/components/docs/code-block.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$docs$2f$sdk$2d$tab$2d$picker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/components/docs/sdk-tab-picker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$icons$2f$sdk$2d$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/components/icons/sdk-icons.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
const htmlCode = `<script src="https://cdn.adkit.dev/v1.js" defer></script>

<div
  data-adkit-site="your-site-id"
  data-adkit-slot="sidebar"
  data-adkit-aspect-ratio="4:3"
></div>`;
const reactCode = `import { AdkitProvider, AdSlot } from "adkit-react"
import "adkit-react/styles.css"

function App() {
  return (
    <AdkitProvider siteId="your-site-id">
      <AdSlot slot="sidebar" aspectRatio="4:3" />
    </AdkitProvider>
  )
}`;
function CodeExampleSection() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-6 text-center text-lg text-muted-foreground",
                children: "Add your first ad slot in two lines."
            }, void 0, false, {
                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$docs$2f$sdk$2d$tab$2d$picker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SDKTabPicker"], {
                onChange: setActiveTab
            }, void 0, false, {
                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6",
                children: (activeTab ?? "js") === "js" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$docs$2f$code$2d$block$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlock"], {
                    code: htmlCode,
                    language: "html"
                }, void 0, false, {
                    fileName: "[project]/adkit-docs/app/docs/page.tsx",
                    lineNumber: 146,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$docs$2f$code$2d$block$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlock"], {
                    code: reactCode,
                    language: "tsx"
                }, void 0, false, {
                    fileName: "[project]/adkit-docs/app/docs/page.tsx",
                    lineNumber: 148,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/adkit-docs/app/docs/page.tsx",
        lineNumber: 139,
        columnNumber: 5
    }, this);
}
_s(CodeExampleSection, "VFB5QCtmvHdEFS4J94Fr3P5SAn0=");
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
                        lineNumber: 171,
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
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                    lineNumber: 181,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                width: "100%",
                                height: "100%",
                                fill: `url(#${patternId})`
                            }, void 0, false, {
                                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/adkit-docs/app/docs/page.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl border border-primary/20 dark:border-primary/35 bg-white/80 dark:bg-black/30 backdrop-blur-sm ring-1 ring-primary/10 dark:ring-primary/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:border-primary/70 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.6),0_0_60px_rgba(139,92,246,0.3),inset_0_1px_0_rgba(255,255,255,0.08)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                            className: "h-10 w-10"
                        }, void 0, false, {
                            fileName: "[project]/adkit-docs/app/docs/page.tsx",
                            lineNumber: 195,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/adkit-docs/app/docs/page.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                lineNumber: 170,
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
                        lineNumber: 200,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/adkit-docs/app/docs/page.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                lineNumber: 199,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/adkit-docs/app/docs/page.tsx",
        lineNumber: 169,
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
                lineNumber: 210,
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
                                        lineNumber: 217,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                    lineNumber: 216,
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
                                            lineNumber: 220,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "15%",
                                            stopColor: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                            lineNumber: 221,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "70%",
                                            stopColor: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                            lineNumber: 222,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "100%",
                                            stopColor: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                            lineNumber: 223,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                    lineNumber: 219,
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
                                            lineNumber: 226,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "20%",
                                            stopColor: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                            lineNumber: 227,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "80%",
                                            stopColor: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                            lineNumber: 228,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "100%",
                                            stopColor: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                            lineNumber: 229,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                    lineNumber: 225,
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
                                        lineNumber: 232,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                    lineNumber: 231,
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
                                        lineNumber: 235,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                    lineNumber: 234,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/adkit-docs/app/docs/page.tsx",
                            lineNumber: 215,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            width: "100%",
                            height: "100%",
                            fill: "url(#hero-grid)",
                            mask: "url(#hero-mask-combined)"
                        }, void 0, false, {
                            fileName: "[project]/adkit-docs/app/docs/page.tsx",
                            lineNumber: 238,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/adkit-docs/app/docs/page.tsx",
                    lineNumber: 214,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                lineNumber: 213,
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
                                lineNumber: 250,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground",
                                children: "Sell ad space directly on your website. Fixed-price slots, publisher-approved placements, two-line integration."
                            }, void 0, false, {
                                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                lineNumber: 253,
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
                                                    lineNumber: 264,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                            lineNumber: 258,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                        lineNumber: 257,
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
                                                        lineNumber: 269,
                                                        columnNumber: 82
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                                    lineNumber: 269,
                                                    columnNumber: 17
                                                }, this),
                                                "View on GitHub"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                            lineNumber: 268,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                        lineNumber: 267,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                lineNumber: 256,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/adkit-docs/app/docs/page.tsx",
                        lineNumber: 249,
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
                                lineNumber: 278,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SDKHeroCard, {
                                title: "React SDK",
                                description: "Drop-in React components with hooks, context, and TypeScript support.",
                                href: "/docs/react/installation",
                                iconComponent: __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$icons$2f$sdk$2d$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactIcon"]
                            }, void 0, false, {
                                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                lineNumber: 284,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/adkit-docs/app/docs/page.tsx",
                        lineNumber: 277,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeExampleSection, {}, void 0, false, {
                        fileName: "[project]/adkit-docs/app/docs/page.tsx",
                        lineNumber: 293,
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
                                lineNumber: 297,
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
                                                lineNumber: 306,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "mt-4 font-semibold text-foreground",
                                                children: feature.title
                                            }, void 0, false, {
                                                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                                lineNumber: 307,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-sm text-muted-foreground",
                                                children: feature.description
                                            }, void 0, false, {
                                                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                                lineNumber: 308,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, feature.title, true, {
                                        fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                        lineNumber: 302,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                lineNumber: 300,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/adkit-docs/app/docs/page.tsx",
                        lineNumber: 296,
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
                                lineNumber: 316,
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
                                                lineNumber: 322,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "mt-4 font-semibold text-foreground",
                                                children: item.title
                                            }, void 0, false, {
                                                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                                lineNumber: 325,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-sm text-muted-foreground",
                                                children: item.description
                                            }, void 0, false, {
                                                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                                lineNumber: 326,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, item.step, true, {
                                        fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                        lineNumber: 321,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                lineNumber: 319,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/adkit-docs/app/docs/page.tsx",
                        lineNumber: 315,
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
                                lineNumber: 334,
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
                                                lineNumber: 345,
                                                columnNumber: 19
                                            }, this) : card.icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(card.icon, {
                                                className: "mt-0.5 h-5 w-5 shrink-0 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                                lineNumber: 347,
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
                                                        lineNumber: 350,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 text-sm text-muted-foreground",
                                                        children: card.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                                        lineNumber: 353,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                                lineNumber: 349,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "mt-0.5 h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                                            }, void 0, false, {
                                                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                                lineNumber: 355,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, card.href, true, {
                                        fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                        lineNumber: 339,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                                lineNumber: 337,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/adkit-docs/app/docs/page.tsx",
                        lineNumber: 333,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/adkit-docs/app/docs/page.tsx",
                lineNumber: 247,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/adkit-docs/app/docs/page.tsx",
        lineNumber: 209,
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

//# sourceMappingURL=adkit-docs_433d6a37._.js.map