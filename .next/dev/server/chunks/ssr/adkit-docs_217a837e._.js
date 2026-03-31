module.exports = [
"[project]/adkit-docs/lib/syntax-highlight.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/adkit-docs/hooks/use-copy-to-clipboard.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCopyToClipboard",
    ()=>useCopyToClipboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function useCopyToClipboard({ timeout = 2000 } = {}) {
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const copy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (text)=>{
        if (!navigator?.clipboard) {
            console.warn("Clipboard not supported");
            return false;
        }
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(()=>setCopied(false), timeout);
            return true;
        } catch (error) {
            console.error("Failed to copy:", error);
            setCopied(false);
            return false;
        }
    }, [
        timeout
    ]);
    return {
        copied,
        copy
    };
}
}),
"[project]/adkit-docs/components/docs/code-block.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CodeBlock",
    ()=>CodeBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$lib$2f$syntax$2d$highlight$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/lib/syntax-highlight.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$hooks$2f$use$2d$copy$2d$to$2d$clipboard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/hooks/use-copy-to-clipboard.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function CodeBlock({ code, language = "bash", filename, tabs }) {
    const { copied, copy } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$hooks$2f$use$2d$copy$2d$to$2d$clipboard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCopyToClipboard"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const displayTabs = tabs || (language === "bash" && code.includes("npm") ? [
        "npm",
        "pnpm"
    ] : null);
    const highlightedHtml = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$lib$2f$syntax$2d$highlight$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["highlightSync"])(code, language);
    }, [
        code,
        language
    ]);
    const handleCopy = ()=>copy(code.trim());
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "code-block my-6",
        role: "region",
        "aria-label": `Code example${filename ? `: ${filename}` : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "code-block-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        role: displayTabs ? "tablist" : undefined,
                        children: displayTabs ? displayTabs.map((tab, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab(index),
                                role: "tab",
                                "aria-selected": activeTab === index,
                                className: `code-block-tab min-h-[44px] min-w-[44px] ${activeTab === index ? "active" : ""}`,
                                children: [
                                    tab,
                                    activeTab === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            }, this)) : filename ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "code-block-label",
                            children: filename
                        }, void 0, false, {
                            fileName: "[project]/adkit-docs/components/docs/code-block.tsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "code-block-icon-btn min-h-[44px] min-w-[44px] p-2",
                                "aria-label": "Show code information",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleCopy,
                                className: `code-block-icon-btn min-h-[44px] min-w-[44px] p-2 ${copied ? "text-green-500" : ""}`,
                                "aria-label": copied ? "Code copied to clipboard" : "Copy code to clipboard",
                                children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/adkit-docs/components/docs/code-block.tsx",
                                    lineNumber: 63,
                                    columnNumber: 23
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "code-block-icon-btn min-h-[44px] min-w-[44px] p-2",
                                "aria-label": "Explain code with AI",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
}),
"[project]/adkit-docs/components/docs/breadcrumbs.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Breadcrumbs",
    ()=>Breadcrumbs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Breadcrumbs({ items, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        "aria-label": "Breadcrumb",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center text-sm text-muted-foreground", className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
            className: "flex items-center gap-1 overflow-x-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: "flex items-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/docs",
                        className: "flex items-center hover:text-foreground transition-colors",
                        "aria-label": "Documentation home",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                            className: "size-4"
                        }, void 0, false, {
                            fileName: "[project]/adkit-docs/components/docs/breadcrumbs.tsx",
                            lineNumber: 22,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/adkit-docs/components/docs/breadcrumbs.tsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/adkit-docs/components/docs/breadcrumbs.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "size-4 mx-1 shrink-0",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/adkit-docs/components/docs/breadcrumbs.tsx",
                                lineNumber: 27,
                                columnNumber: 13
                            }, this),
                            item.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                className: "hover:text-foreground transition-colors truncate max-w-[120px] sm:max-w-none",
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/adkit-docs/components/docs/breadcrumbs.tsx",
                                lineNumber: 29,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-foreground truncate max-w-[120px] sm:max-w-none",
                                "aria-current": "page",
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/adkit-docs/components/docs/breadcrumbs.tsx",
                                lineNumber: 36,
                                columnNumber: 15
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/adkit-docs/components/docs/breadcrumbs.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/adkit-docs/components/docs/breadcrumbs.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/adkit-docs/components/docs/breadcrumbs.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/adkit-docs/components/docs/doc-content.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DocContent",
    ()=>DocContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$docs$2f$code$2d$block$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/components/docs/code-block.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$docs$2f$breadcrumbs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/components/docs/breadcrumbs.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$hooks$2f$use$2d$copy$2d$to$2d$clipboard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/hooks/use-copy-to-clipboard.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function parseContent(content) {
    const elements = [];
    const lines = content.split("\n");
    let i = 0;
    let key = 0;
    while(i < lines.length){
        const line = lines[i];
        // Check for code block start
        if (line.startsWith("```")) {
            const language = line.slice(3).trim() || "text";
            const codeLines = [];
            i++;
            // Collect code lines until closing fence
            while(i < lines.length && !lines[i].startsWith("```")){
                codeLines.push(lines[i]);
                i++;
            }
            elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$docs$2f$code$2d$block$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CodeBlock"], {
                code: codeLines.join("\n"),
                language: language
            }, key++, false, {
                fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
                lineNumber: 38,
                columnNumber: 21
            }, this));
            i++; // Skip closing fence
            continue;
        }
        // Check for table start (line starts with | and contains at least 2 |)
        if (line.trim().startsWith("|") && line.split("|").length >= 3) {
            const tableLines = [];
            // Collect all table lines
            while(i < lines.length && lines[i].trim().startsWith("|")){
                tableLines.push(lines[i]);
                i++;
            }
            // Parse the table
            if (tableLines.length >= 2) {
                elements.push(parseTable(tableLines, key++));
            }
            continue;
        }
        // Headers
        if (line.startsWith("# ")) {
            elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "mb-4 mt-8 text-3xl font-bold text-foreground",
                children: line.slice(2)
            }, key++, false, {
                fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
                lineNumber: 63,
                columnNumber: 9
            }, this));
            i++;
            continue;
        }
        if (line.startsWith("## ")) {
            elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "mb-3 mt-6 text-2xl font-semibold text-foreground",
                children: line.slice(3)
            }, key++, false, {
                fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
                lineNumber: 73,
                columnNumber: 9
            }, this));
            i++;
            continue;
        }
        if (line.startsWith("### ")) {
            elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "mb-2 mt-4 text-xl font-semibold text-foreground",
                children: line.slice(4)
            }, key++, false, {
                fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
                lineNumber: 83,
                columnNumber: 9
            }, this));
            i++;
            continue;
        }
        // List items
        if (line.startsWith("- ")) {
            elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                className: "ml-4 text-muted-foreground",
                children: renderInlineFormatting(line.slice(2))
            }, key++, false, {
                fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
                lineNumber: 94,
                columnNumber: 9
            }, this));
            i++;
            continue;
        }
        // Skip empty lines
        if (line.trim() === "") {
            i++;
            continue;
        }
        // Regular paragraph with inline formatting support
        elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-2 text-muted-foreground",
            children: renderInlineFormatting(line)
        }, key++, false, {
            fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
            lineNumber: 110,
            columnNumber: 7
        }, this));
        i++;
    }
    return elements;
}
function parseTable(lines, key) {
    // Parse header row
    const headerCells = lines[0].split("|").slice(1, -1) // Remove empty first and last elements from split
    .map((cell)=>cell.trim());
    // Check if second line is separator (contains dashes)
    const hasSeparator = lines.length > 1 && lines[1].includes("---");
    const startDataRow = hasSeparator ? 2 : 1;
    // Parse alignment from separator row
    const alignments = [];
    if (hasSeparator) {
        const separatorCells = lines[1].split("|").slice(1, -1);
        separatorCells.forEach((cell)=>{
            const trimmed = cell.trim();
            if (trimmed.startsWith(":") && trimmed.endsWith(":")) {
                alignments.push("center");
            } else if (trimmed.endsWith(":")) {
                alignments.push("right");
            } else {
                alignments.push("left");
            }
        });
    }
    // Parse data rows
    const dataRows = lines.slice(startDataRow).map((line)=>line.split("|").slice(1, -1).map((cell)=>cell.trim()));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "my-6 w-full overflow-x-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: "w-full border-collapse text-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        className: "border-b border-border bg-muted/50",
                        children: headerCells.map((cell, cellIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "px-4 py-3 text-left font-semibold text-foreground",
                                style: {
                                    textAlign: alignments[cellIndex] || "left"
                                },
                                children: renderInlineFormatting(cell)
                            }, cellIndex, false, {
                                fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
                                lineNumber: 161,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
                        lineNumber: 159,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
                    lineNumber: 158,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    children: dataRows.map((row, rowIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "border-b border-border transition-colors hover:bg-muted/30",
                            children: row.map((cell, cellIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-4 py-3 text-muted-foreground",
                                    style: {
                                        textAlign: alignments[cellIndex] || "left"
                                    },
                                    children: renderInlineFormatting(cell)
                                }, cellIndex, false, {
                                    fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
                                    lineNumber: 175,
                                    columnNumber: 17
                                }, this))
                        }, rowIndex, false, {
                            fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
                            lineNumber: 173,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
                    lineNumber: 171,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
            lineNumber: 157,
            columnNumber: 7
        }, this)
    }, key, false, {
        fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
        lineNumber: 156,
        columnNumber: 5
    }, this);
}
function renderInlineFormatting(text) {
    const boldRegex = /\*\*([^*]+)\*\*/g;
    let lastIndex = 0;
    let match;
    const tempText = text;
    const segments = [];
    while((match = boldRegex.exec(tempText)) !== null){
        if (match.index > lastIndex) {
            segments.push({
                type: "text",
                content: tempText.slice(lastIndex, match.index)
            });
        }
        segments.push({
            type: "bold",
            content: match[1]
        });
        lastIndex = match.index + match[0].length;
    }
    if (lastIndex < tempText.length) {
        segments.push({
            type: "text",
            content: tempText.slice(lastIndex)
        });
    }
    if (segments.length === 0) {
        return renderInlineCode(text);
    }
    return segments.map((segment, idx)=>{
        if (segment.type === "bold") {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                className: "font-semibold text-foreground",
                children: renderInlineCode(segment.content)
            }, idx, false, {
                fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
                lineNumber: 218,
                columnNumber: 9
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: renderInlineCode(segment.content)
        }, idx, false, {
            fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
            lineNumber: 223,
            columnNumber: 12
        }, this);
    });
}
function renderInlineCode(text) {
    if (!text.includes("`")) {
        return text;
    }
    const parts = text.split(/`([^`]+)`/);
    return parts.map((part, j)=>j % 2 === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InlineCode, {
            children: part
        }, j, false, {
            fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
            lineNumber: 233,
            columnNumber: 48
        }, this) : part);
}
function InlineCode({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
        className: "rounded px-1.5 py-0.5 font-mono text-sm",
        style: {
            backgroundColor: "var(--inline-code-bg)",
            color: "var(--inline-code-text)"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
        lineNumber: 238,
        columnNumber: 5
    }, this);
}
function DocContent({ title, description, content, slug }) {
    const { copied, copy } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$hooks$2f$use$2d$copy$2d$to$2d$clipboard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCopyToClipboard"])();
    const copyPage = ()=>{
        const fullContent = `# ${title}\n\n${description}\n\n${content}`;
        copy(fullContent);
    };
    const breadcrumbItems = slug ? [
        {
            label: title
        }
    ] : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "mx-auto max-w-3xl px-4 sm:px-8 py-8 sm:py-16",
        children: [
            breadcrumbItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$docs$2f$breadcrumbs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Breadcrumbs"], {
                items: breadcrumbItems,
                className: "mb-4 sm:mb-6"
            }, void 0, false, {
                fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
                lineNumber: 262,
                columnNumber: 38
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "mb-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
                                lineNumber: 265,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base sm:text-lg text-muted-foreground",
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
                                lineNumber: 266,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
                        lineNumber: 264,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        size: "sm",
                        onClick: copyPage,
                        className: "shrink-0 gap-2 bg-transparent self-start",
                        children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    className: "size-4"
                                }, void 0, false, {
                                    fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
                                    lineNumber: 271,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden sm:inline",
                                    children: "Copied"
                                }, void 0, false, {
                                    fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
                                    lineNumber: 272,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                    className: "size-4"
                                }, void 0, false, {
                                    fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
                                    lineNumber: 276,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden sm:inline",
                                    children: "Copy page"
                                }, void 0, false, {
                                    fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
                                    lineNumber: 277,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
                        lineNumber: 268,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
                lineNumber: 263,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "prose prose-zinc dark:prose-invert max-w-none",
                children: parseContent(content)
            }, void 0, false, {
                fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
                lineNumber: 282,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
        lineNumber: 261,
        columnNumber: 5
    }, this);
}
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Copy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Copy", [
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
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Copy",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript)");
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Info
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Info = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Info", [
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
        "path",
        {
            d: "M12 16v-4",
            key: "1dtifu"
        }
    ],
    [
        "path",
        {
            d: "M12 8h.01",
            key: "e9boi3"
        }
    ]
]);
;
 //# sourceMappingURL=info.js.map
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) <export default as Info>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Info",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript)");
}),
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const House = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("House", [
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
"[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript) <export default as Home>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Home",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=adkit-docs_217a837e._.js.map