(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/adkit-docs/components/docs/doc-content.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DocContent",
    ()=>DocContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/adkit-docs/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$docs$2f$code$2d$preview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/components/docs/code-preview.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$docs$2f$command$2d$block$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/components/docs/command-block.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$docs$2f$breadcrumbs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/components/docs/breadcrumbs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$hooks$2f$use$2d$copy$2d$to$2d$clipboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/adkit-docs/hooks/use-copy-to-clipboard.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
            const codeStr = codeLines.join("\n");
            if (language === "bash" && (codeStr.includes("npm ") || codeStr.includes("npx ") || codeStr.includes("yarn ") || codeStr.includes("pnpm ") || codeStr.includes("bun "))) {
                elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$docs$2f$command$2d$block$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandBlock"], {
                    command: codeStr
                }, key++, false, {
                    fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
                    lineNumber: 41,
                    columnNumber: 23
                }, this));
            } else {
                elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$docs$2f$code$2d$preview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodePreview"], {
                    code: codeStr,
                    language: language,
                    className: "my-6"
                }, key++, false, {
                    fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
                    lineNumber: 43,
                    columnNumber: 23
                }, this));
            }
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
            elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "mb-4 mt-8 text-3xl font-bold text-foreground",
                children: line.slice(2)
            }, key++, false, {
                fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
                lineNumber: 69,
                columnNumber: 9
            }, this));
            i++;
            continue;
        }
        if (line.startsWith("## ")) {
            elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "mb-3 mt-6 text-2xl font-semibold text-foreground",
                children: line.slice(3)
            }, key++, false, {
                fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
                lineNumber: 79,
                columnNumber: 9
            }, this));
            i++;
            continue;
        }
        if (line.startsWith("### ")) {
            elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "mb-2 mt-4 text-xl font-semibold text-foreground",
                children: line.slice(4)
            }, key++, false, {
                fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
                lineNumber: 89,
                columnNumber: 9
            }, this));
            i++;
            continue;
        }
        // List items
        if (line.startsWith("- ")) {
            elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                className: "ml-4 text-muted-foreground",
                children: renderInlineFormatting(line.slice(2))
            }, key++, false, {
                fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
                lineNumber: 100,
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
        elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-2 text-muted-foreground",
            children: renderInlineFormatting(line)
        }, key++, false, {
            fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
            lineNumber: 116,
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "my-6 w-full overflow-x-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: "w-full border-collapse text-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        className: "border-b border-border bg-muted/50",
                        children: headerCells.map((cell, cellIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "px-4 py-3 text-left font-semibold text-foreground",
                                style: {
                                    textAlign: alignments[cellIndex] || "left"
                                },
                                children: renderInlineFormatting(cell)
                            }, cellIndex, false, {
                                fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
                                lineNumber: 167,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
                        lineNumber: 165,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
                    lineNumber: 164,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    children: dataRows.map((row, rowIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "border-b border-border transition-colors hover:bg-muted/30",
                            children: row.map((cell, cellIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-4 py-3 text-muted-foreground",
                                    style: {
                                        textAlign: alignments[cellIndex] || "left"
                                    },
                                    children: renderInlineFormatting(cell)
                                }, cellIndex, false, {
                                    fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
                                    lineNumber: 181,
                                    columnNumber: 17
                                }, this))
                        }, rowIndex, false, {
                            fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
                            lineNumber: 179,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
                    lineNumber: 177,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
            lineNumber: 163,
            columnNumber: 7
        }, this)
    }, key, false, {
        fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
        lineNumber: 162,
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                className: "font-semibold text-foreground",
                children: renderInlineCode(segment.content)
            }, idx, false, {
                fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
                lineNumber: 224,
                columnNumber: 9
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: renderInlineCode(segment.content)
        }, idx, false, {
            fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
            lineNumber: 229,
            columnNumber: 12
        }, this);
    });
}
function renderInlineCode(text) {
    if (!text.includes("`")) {
        return text;
    }
    const parts = text.split(/`([^`]+)`/);
    return parts.map((part, j)=>j % 2 === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InlineCode, {
            children: part
        }, j, false, {
            fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
            lineNumber: 239,
            columnNumber: 48
        }, this) : part);
}
function InlineCode({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
        className: "rounded px-1.5 py-0.5 font-mono text-sm",
        style: {
            backgroundColor: "var(--inline-code-bg)",
            color: "var(--inline-code-text)"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
        lineNumber: 244,
        columnNumber: 5
    }, this);
}
_c = InlineCode;
function DocContent({ title, description, content, slug }) {
    _s();
    const { copied, copy } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$hooks$2f$use$2d$copy$2d$to$2d$clipboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCopyToClipboard"])();
    const copyPage = ()=>{
        const fullContent = `# ${title}\n\n${description}\n\n${content}`;
        copy(fullContent);
    };
    const breadcrumbItems = slug ? [
        {
            label: title
        }
    ] : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "mx-auto max-w-3xl px-4 sm:px-8 py-8 sm:py-16",
        children: [
            breadcrumbItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$docs$2f$breadcrumbs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Breadcrumbs"], {
                items: breadcrumbItems,
                className: "mb-4 sm:mb-6"
            }, void 0, false, {
                fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
                lineNumber: 268,
                columnNumber: 38
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "mb-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
                                lineNumber: 271,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base sm:text-lg text-muted-foreground",
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
                                lineNumber: 272,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
                        lineNumber: 270,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        size: "sm",
                        onClick: copyPage,
                        className: "shrink-0 gap-2 bg-transparent self-start",
                        children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    className: "size-4"
                                }, void 0, false, {
                                    fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
                                    lineNumber: 277,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden sm:inline",
                                    children: "Copied"
                                }, void 0, false, {
                                    fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
                                    lineNumber: 278,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                    className: "size-4"
                                }, void 0, false, {
                                    fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
                                    lineNumber: 282,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden sm:inline",
                                    children: "Copy page"
                                }, void 0, false, {
                                    fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
                                    lineNumber: 283,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
                lineNumber: 269,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "prose prose-zinc dark:prose-invert max-w-none",
                children: parseContent(content)
            }, void 0, false, {
                fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
                lineNumber: 288,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/adkit-docs/components/docs/doc-content.tsx",
        lineNumber: 267,
        columnNumber: 5
    }, this);
}
_s(DocContent, "maJztsAEAq4i/W+644Qofx0Ko90=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$adkit$2d$docs$2f$hooks$2f$use$2d$copy$2d$to$2d$clipboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCopyToClipboard"]
    ];
});
_c1 = DocContent;
var _c, _c1;
__turbopack_context__.k.register(_c, "InlineCode");
__turbopack_context__.k.register(_c1, "DocContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=adkit-docs_components_docs_doc-content_tsx_b140bcc9._.js.map