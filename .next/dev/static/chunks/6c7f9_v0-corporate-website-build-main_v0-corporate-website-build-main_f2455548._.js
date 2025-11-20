(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Dialog;
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = DialogTrigger;
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = DialogPortal;
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
_c3 = DialogClose;
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c4 = DialogOverlay;
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/ui/dialog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg', className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/ui/dialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/ui/dialog.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/ui/dialog.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/ui/dialog.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/ui/dialog.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c5 = DialogContent;
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-2 text-center sm:text-left', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c6 = DialogHeader;
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c7 = DialogFooter;
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-lg leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/ui/dialog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_c8 = DialogTitle;
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/ui/dialog.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])('inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden', {
    variants: {
        variant: {
            default: 'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
            secondary: 'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
            destructive: 'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'span';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/lib/data/company.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "companyInfo",
    ()=>companyInfo
]);
const companyInfo = {
    about: {
        intro: "A V Tech is a Manufacturer, Supplier and Trader of Automation, System Integration, Factory Automation, Machine Automation, PLC, Servo, VFD, Networking, SCADA, Motion Control, Safety Automation, and Data Logging Systems.",
        details: "We manufacture SPMs (Special Purpose Machines), Process Control Automation, Hydraulic & Pneumatic Systems, Electrical Control Panels, and provide complete automation services. Our team of experts is dedicated to delivering high-quality solutions that meet the specific needs of our clients.",
        expertise: [
            "Factory Automation",
            "Process Control",
            "Electrical Panels",
            "Special Purpose Machines"
        ]
    },
    addresses: {
        office: {
            title: "Registered Office",
            line1: "Flat No. 7, S. No. 891/38, Radhakrishna Apartment",
            line2: "Behind Kishor Nagar, Chetna Nagar",
            city: "Nashik",
            pincode: "422009"
        },
        works: {
            title: "Factory / Works",
            line1: "Gat No. 207, D-1/15, Behind Ambar Auto Engineering",
            line2: "MIDC Ambad",
            city: "Nashik",
            pincode: "422010"
        }
    },
    contact: {
        phone: "+91 9595912555",
        emails: [
            "avtech.nsk@gmail.com",
            "deelip.patil30@gmail.com"
        ],
        whatsapp: "+919595912555"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$data$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/lib/data/company.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/lib/utils.ts [app-client] (ecmascript)");
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
function Header() {
    _s();
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const handleScroll = {
                "Header.useEffect.handleScroll": ()=>{
                    setIsScrolled(window.scrollY > 10);
                }
            }["Header.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "Header.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    const navLinks = [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "About Us",
            href: "/about"
        },
        {
            name: "Products",
            href: "/products"
        },
        {
            name: "Services",
            href: "/services"
        },
        {
            name: "Brands",
            href: "/brands"
        },
        {
            name: "Contact",
            href: "/contact"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed top-0 w-full z-50 transition-all duration-300", isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-white py-4"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("container mx-auto px-4 mb-2 hidden md:flex justify-between items-center text-sm text-gray-600 transition-all duration-300", isScrolled ? "h-0 opacity-0 overflow-hidden mb-0" : "h-auto opacity-100"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$data$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["companyInfo"].contact.phone}`,
                                className: "flex items-center gap-2 hover:text-primary transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/header.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$data$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["companyInfo"].contact.phone
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/header.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/header.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$data$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["companyInfo"].contact.emails[0]}`,
                                className: "flex items-center gap-2 hover:text-primary transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/header.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$data$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["companyInfo"].contact.emails[0]
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/header.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/header.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/header.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "ISO 9001:2015 Certified"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/header.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/header.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/header.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center gap-2 group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-primary text-white p-2 rounded-lg font-bold text-xl group-hover:bg-primary/90 transition-colors",
                                    children: "AV"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/header.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-xl leading-none text-gray-900",
                                            children: "A V TECH"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/header.tsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] text-gray-500 font-medium tracking-wider",
                                            children: "AUTOMATION SYSTEMS"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/header.tsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/header.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/header.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden md:flex items-center gap-8",
                            children: [
                                navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: link.href,
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm font-medium transition-colors hover:text-primary relative py-2", pathname === link.href ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary" : "text-gray-600"),
                                        children: link.name
                                    }, link.name, false, {
                                        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/header.tsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    asChild: true,
                                    className: "bg-primary hover:bg-primary/90 text-white rounded-full px-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/contact",
                                        children: "Get Quote"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/header.tsx",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/header.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/header.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "md:hidden p-2 text-gray-600",
                            onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                            children: isMobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {}, void 0, false, {
                                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/header.tsx",
                                lineNumber: 104,
                                columnNumber: 33
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {}, void 0, false, {
                                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/header.tsx",
                                lineNumber: 104,
                                columnNumber: 41
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/header.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/header.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/header.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden absolute top-full left-0 w-full bg-white border-t shadow-lg animate-fade-in",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 py-4 flex flex-col gap-4",
                    children: [
                        navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: link.href,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-base font-medium py-2 border-b border-gray-100", pathname === link.href ? "text-primary" : "text-gray-600"),
                                onClick: ()=>setIsMobileMenuOpen(false),
                                children: link.name
                            }, link.name, false, {
                                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/header.tsx",
                                lineNumber: 114,
                                columnNumber: 15
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            asChild: true,
                            className: "w-full mt-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                children: "Get Quote"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/header.tsx",
                                lineNumber: 127,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/header.tsx",
                            lineNumber: 126,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/header.tsx",
                    lineNumber: 112,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/header.tsx",
                lineNumber: 111,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/header.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(Header, "l6eNIeiEKSLnqXepSfVkpAydFeA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$data$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/lib/data/company.ts [app-client] (ecmascript)");
;
;
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-gray-900 text-white pt-16 pb-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-primary text-white p-2 rounded-lg font-bold text-xl",
                                            children: "AV"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                                            lineNumber: 13,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-xl leading-none",
                                                    children: "A V TECH"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                                                    lineNumber: 15,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-gray-400 font-medium tracking-wider",
                                                    children: "AUTOMATION SYSTEMS"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                                                    lineNumber: 16,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                                            lineNumber: 14,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                                    lineNumber: 12,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-400 text-sm leading-relaxed mb-6",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$data$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["companyInfo"].description
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                                    lineNumber: 19,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                                    lineNumber: 20,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                            lineNumber: 11,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-bold mb-6 border-l-4 border-primary pl-3",
                                    children: "Quick Links"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/about",
                                                className: "text-gray-400 hover:text-primary transition-colors text-sm",
                                                children: "About Us"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                                                lineNumber: 30,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                                            lineNumber: 29,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/products",
                                                className: "text-gray-400 hover:text-primary transition-colors text-sm",
                                                children: "Our Products"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                                                lineNumber: 35,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                                            lineNumber: 34,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/services",
                                                className: "text-gray-400 hover:text-primary transition-colors text-sm",
                                                children: "Services"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                                                lineNumber: 40,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/brands",
                                                className: "text-gray-400 hover:text-primary transition-colors text-sm",
                                                children: "Brands We Work With"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                                                lineNumber: 45,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                                            lineNumber: 44,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/contact",
                                                className: "text-gray-400 hover:text-primary transition-colors text-sm",
                                                children: "Contact Us"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                                                lineNumber: 50,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-bold mb-6 border-l-4 border-primary pl-3",
                                    children: "Our Products"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/products?category=panels",
                                                className: "text-gray-400 hover:text-primary transition-colors text-sm",
                                                children: "Electrical Control Panels"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                                                lineNumber: 62,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/products?category=automation",
                                                className: "text-gray-400 hover:text-primary transition-colors text-sm",
                                                children: "PLC Automation Panels"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                                                lineNumber: 70,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/products?category=spm",
                                                className: "text-gray-400 hover:text-primary transition-colors text-sm",
                                                children: "Special Purpose Machines"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                                                lineNumber: 78,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/products?category=vfd",
                                                className: "text-gray-400 hover:text-primary transition-colors text-sm",
                                                children: "VFD & Servo Systems"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                                                lineNumber: 86,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                                            lineNumber: 85,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/products?category=scada",
                                                className: "text-gray-400 hover:text-primary transition-colors text-sm",
                                                children: "SCADA Systems"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                                                lineNumber: 94,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                                            lineNumber: 93,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-bold mb-6 border-l-4 border-primary pl-3",
                                    children: "Contact Us"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    className: "h-5 w-5 text-primary shrink-0 mt-0.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-400 text-sm",
                                                    children: [
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$data$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["companyInfo"].addresses.office.line1,
                                                        ", ",
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$data$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["companyInfo"].addresses.office.line2,
                                                        ",",
                                                        " ",
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$data$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["companyInfo"].addresses.office.city,
                                                        " - ",
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$data$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["companyInfo"].addresses.office.pincode
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                                            lineNumber: 108,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                    className: "h-5 w-5 text-primary shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$data$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["companyInfo"].contact.phone}`,
                                                    className: "text-gray-400 hover:text-white transition-colors text-sm",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$data$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["companyInfo"].contact.phone
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                                            lineNumber: 115,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                    className: "h-5 w-5 text-primary shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$data$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["companyInfo"].contact.emails[0]}`,
                                                    className: "text-gray-400 hover:text-white transition-colors text-sm",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$data$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["companyInfo"].contact.emails[0]
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                                            lineNumber: 124,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500 text-sm text-center md:text-left",
                            children: [
                                "© ",
                                new Date().getFullYear(),
                                " A V Tech. All rights reserved."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-6 text-sm text-gray-500"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/whatsapp-button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WhatsAppButton",
    ()=>WhatsAppButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$data$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/lib/data/company.ts [app-client] (ecmascript)");
"use client";
;
;
;
function WhatsAppButton() {
    const handleClick = ()=>{
        const message = encodeURIComponent("Hi, I'm interested in your products and services.");
        window.open(`https://wa.me/${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$data$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["companyInfo"].contact.whatsapp.replace("+", "")}?text=${message}`, "_blank");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: handleClick,
        className: "fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 px-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group animate-fade-in",
        "aria-label": "Chat on WhatsApp",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                className: "h-6 w-6 fill-current"
            }, void 0, false, {
                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/whatsapp-button.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-medium hidden group-hover:inline-block transition-all duration-300",
                children: "Chat on WhatsApp"
            }, void 0, false, {
                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/whatsapp-button.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/whatsapp-button.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = WhatsAppButton;
var _c;
__turbopack_context__.k.register(_c, "WhatsAppButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/lib/data/products.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "products",
    ()=>products
]);
const products = [
    {
        id: "mcc-panel",
        name: "MCC Panel",
        fullName: "Motor Control Center Panel",
        description: "Used in industrial power distribution. Offers simple operation and low maintenance.",
        shortDescription: "Used in industrial power distribution. Offers simple operation and low maintenance.",
        fullDescription: "Motor Control Center (MCC) panels are used for power distribution and motor control in industries. They are designed to house starters, relays, and breakers in a modular fashion.",
        image: "/industrial-motor-control-center-panel.jpg",
        features: [
            "Houses starters, relays, breakers",
            "Modular design",
            "Works under extreme temperature variations",
            "Long lifetime"
        ],
        applications: [
            "Refineries",
            "Chemical plants",
            "Pharma industries",
            "Manufacturing units"
        ],
        compatibleBrands: [
            "Siemens",
            "ABB",
            "L&T",
            "Schneider"
        ]
    },
    {
        id: "pcc-panel",
        name: "PCC Panel",
        fullName: "Power Control Center Panel",
        description: "Controls major power distribution with high reliability.",
        shortDescription: "Controls major power distribution with high reliability and safety.",
        fullDescription: "Power Control Center (PCC) panels are the heart of any electrical system, controlling major power distribution with high reliability and safety standards.",
        image: "/power-control-center-electrical-panel.jpg",
        features: [
            "Handles high loads",
            "Long working life",
            "No maintenance",
            "Robust and safe"
        ],
        applications: [
            "Manufacturing industries",
            "Automotive",
            "Refineries",
            "Engineering units"
        ],
        compatibleBrands: [
            "Siemens",
            "ABB",
            "L&T",
            "Schneider"
        ]
    },
    {
        id: "plc-panel",
        name: "PLC Panel",
        fullName: "Programmable Logic Controller Panel",
        description: "Professional automation panels with PLC logic control.",
        shortDescription: "Professional automation panels with PLC logic control for complex industrial processes.",
        fullDescription: "Programmable Logic Controller (PLC) panels are the brain of automation systems, providing precise control over machinery and processes through programmable logic.",
        image: "/plc-automation-control-panel.jpg",
        features: [
            "High-speed processing",
            "Industrial automation ready",
            "Network & communication supported",
            "Modular & scalable"
        ],
        applications: [
            "Automation lines",
            "Packaging",
            "Robotics",
            "Machine automation"
        ],
        compatibleBrands: [
            "Siemens",
            "Omron",
            "Allen Bradley",
            "Mitsubishi",
            "ABB",
            "Delta"
        ]
    },
    {
        id: "vfd-panel",
        name: "VFD Panel",
        fullName: "Variable Frequency Drive Panel",
        description: "Controls AC motor speed and torque with high efficiency.",
        shortDescription: "Controls AC motor speed and torque with high efficiency and energy savings.",
        fullDescription: "Variable Frequency Drive (VFD) panels are used to control the speed and torque of AC motors by varying the input frequency and voltage, resulting in significant energy savings.",
        image: "/variable-frequency-drive-vfd-panel.jpg",
        features: [
            "Energy efficient",
            "User-adjustable frequency",
            "Protects motors",
            "Works in dusty/humid/hot environments"
        ],
        applications: [
            "Conveyors",
            "Pumps",
            "HVAC",
            "Machine tools"
        ],
        compatibleBrands: [
            "Siemens",
            "ABB",
            "Danfoss",
            "Delta",
            "Yaskawa"
        ]
    },
    {
        id: "apfc-panel",
        name: "APFC Panel",
        fullName: "Automatic Power Factor Correction Panel",
        description: "Automatic Power Factor Correction Panel.",
        shortDescription: "Maintains power factor close to unity, reducing electricity bills and penalties.",
        fullDescription: "Automatic Power Factor Correction (APFC) panels automatically switch capacitor banks to maintain the power factor close to unity, reducing electricity bills and penalties.",
        image: "/automatic-power-factor-correction-apfc-panel.jpg",
        features: [
            "Auto capacitor bank switching",
            "Reduces penalties",
            "Saves energy",
            "Improves system stability"
        ],
        applications: [
            "Industries",
            "Commercial complexes",
            "Hospitals",
            "Hotels"
        ],
        compatibleBrands: [
            "L&T",
            "Epcos",
            "Schneider",
            "Siemens"
        ]
    },
    {
        id: "amf-panel",
        name: "AMF Panel",
        fullName: "Auto Mains Failure Panel",
        description: "Automatically switches from Mains to Generator on power failure.",
        shortDescription: "Automatically switches from Mains to Generator on power failure for uninterrupted power.",
        fullDescription: "Auto Mains Failure (AMF) panels automatically switch the load to the generator in case of mains failure and switch it back when mains power is restored.",
        image: "/automatic-mains-failure-amf-generator-panel.jpg",
        features: [
            "Auto genset start/stop",
            "Battery charger included",
            "Safe switching",
            "Automatic return to mains"
        ],
        applications: [
            "Hospitals",
            "Industries",
            "Commercial buildings",
            "Data centers"
        ],
        compatibleBrands: [
            "Deep Sea",
            "ComAp",
            "Woodward"
        ]
    },
    {
        id: "lt-distribution-board",
        name: "LT Distribution Board",
        fullName: "Low Tension Distribution Board",
        description: "Low-tension power distribution with high safety.",
        shortDescription: "Safe and reliable low-tension power distribution for various applications.",
        fullDescription: "Low Tension (LT) Distribution Boards are designed for safe and reliable distribution of electrical power in industrial and commercial settings.",
        image: "/lt-distribution-board.jpg",
        features: [
            "High safety standards",
            "Durable construction",
            "Easy maintenance",
            "Customizable"
        ],
        applications: [
            "Residential",
            "Commercial",
            "Industrial"
        ],
        compatibleBrands: [
            "L&T",
            "Schneider",
            "Legrand",
            "Hager"
        ]
    },
    {
        id: "feeder-pillar",
        name: "Feeder Pillar",
        fullName: "Feeder Pillar",
        description: "Outdoor distribution panel for industries, public utilities & housing.",
        shortDescription: "Robust outdoor distribution panel for industries, public utilities & housing societies.",
        fullDescription: "Feeder Pillars are robust outdoor distribution panels used for distributing power to various circuits in industries, public utilities, and housing societies.",
        image: "/FEEDER-PILLAR-PANEL-1200x800.jpg",
        features: [
            "Weatherproof",
            "Robust design",
            "Secure locking mechanism",
            "Corrosion resistant"
        ],
        applications: [
            "Street lighting",
            "Housing societies",
            "Industrial parks",
            "Public utilities"
        ],
        compatibleBrands: [
            "L&T",
            "Schneider",
            "Siemens"
        ]
    },
    {
        id: "busbar-chamber-box",
        name: "Busbar Chamber Box",
        fullName: "Busbar Chamber Box",
        description: "Ensures safe current distribution with aluminum/copper busbars.",
        shortDescription: "Ensures safe and efficient current distribution with high-quality busbars.",
        fullDescription: "Busbar Chamber Boxes are used for safe and efficient distribution of high current using copper or aluminum busbars.",
        image: "/busbar-chamber-box.jpg",
        features: [
            "High conductivity",
            "Safe distribution",
            "Compact design",
            "Easy termination"
        ],
        applications: [
            "Power distribution",
            "Control panels",
            "Switchgear"
        ],
        compatibleBrands: [
            "Custom"
        ]
    },
    {
        id: "distribution-box",
        name: "Distribution Box",
        fullName: "Distribution Box",
        description: "Compact electrical distribution for small circuits & buildings.",
        shortDescription: "Compact and safe electrical distribution for small circuits and buildings.",
        fullDescription: "Distribution Boxes are compact enclosures used to distribute electrical power to multiple circuits, providing protection and control.",
        image: "/normal_660812b03a4ff.webp",
        features: [
            "Compact",
            "Easy installation",
            "Circuit protection",
            "Aesthetic design"
        ],
        applications: [
            "Residential",
            "Offices",
            "Small industries"
        ],
        compatibleBrands: [
            "Legrand",
            "Schneider",
            "L&T",
            "Anchor"
        ]
    },
    {
        id: "spm",
        name: "Special Purpose Machines",
        fullName: "Special Purpose Machines (SPM)",
        description: "Servo-based and custom automation machines for 24×7 high productivity.",
        shortDescription: "Custom designed servo-based automation machines for high productivity and precision.",
        fullDescription: "Special Purpose Machines (SPMs) are custom-designed machines tailored to specific manufacturing tasks, utilizing servo systems and automation for high precision and productivity.",
        image: "/special-purpose-machine.jpg",
        features: [
            "Custom designed",
            "High productivity",
            "Servo-based precision",
            "24x7 operation"
        ],
        applications: [
            "Automotive",
            "Assembly lines",
            "Packaging",
            "Testing"
        ],
        compatibleBrands: [
            "Mitsubishi",
            "Siemens",
            "Omron",
            "Delta"
        ],
        types: [
            "Pick & Place",
            "Packaging Machines",
            "Material Handling",
            "Servo Automation Machines"
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/lib/data/s.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "services",
    ()=>services
]);
const services = [
    {
        id: "plc_programming",
        name: "PLC Programming",
        description: "We offer expert PLC programming services for Siemens, Allen Bradley, Mitsubishi, Omron, Delta, and ABB PLCs. Our solutions include ladder logic, FBD, structured text, and custom control logic for process and machine automation."
    },
    {
        id: "servo_programming",
        name: "Servo Programming",
        description: "Precision servo motion control for robotics, pick & place, packaging, and custom SPM machines. We work with Mitsubishi, Delta, Panasonic, Omron, Siemens, and Allen Bradley servo platforms."
    },
    {
        id: "vfd_integration",
        name: "VFD Integration",
        description: "Professional VFD panel design and commissioning with Siemens, Danfoss, ABB, Delta, Fuji, Yaskawa, and L&T drives. Includes energy optimization and smooth motor control."
    },
    {
        id: "scada_systems",
        name: "SCADA Systems",
        description: "We design SCADA dashboards with real-time monitoring, alarms, data logging, and plant-wide control using Wonderware, WinCC, InduSoft, iFix, and custom SCADA solutions."
    },
    {
        id: "hmi_design",
        name: "HMI Design",
        description: "Beautiful and intuitive HMI interfaces for Siemens, Delta, Mitsubishi, Omron, and Allen Bradley HMIs. Includes screen navigation, recipe management, alarms, and trend monitoring."
    },
    {
        id: "thermography",
        name: "Thermography",
        description: "Electrical thermography service to detect loose connections, overheating components, and early failure points. Helps prevent breakdowns and improves electrical safety."
    },
    {
        id: "energy_management",
        name: "Energy Management",
        description: "End-to-end energy management system setup including monitoring, optimization, power factor correction, APFC integration, and load balancing."
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Chatbot",
    ()=>Chatbot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$data$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/lib/data/company.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/lib/data/products.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$data$2f$s$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/lib/data/s.ts [app-client] (ecmascript)");
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
function Chatbot() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: "1",
            role: "bot",
            content: "Hello! 👋 I am the A V Tech Assistant.\n\nYou can ask me about:\n1️⃣ Products\n2️⃣ Services\n3️⃣ Contact Information\n4️⃣ Company Details\n\nOr type a product number like 1, 2, 3 to get full details instantly.",
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Chatbot.useEffect": ()=>{
            if (scrollRef.current) {
                scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
            }
        }
    }["Chatbot.useEffect"], [
        messages,
        isOpen
    ]);
    // Quick Reply Buttons (ALWAYS STICKY)
    const quickReplies = [
        {
            label: "Products",
            value: "products"
        },
        {
            label: "Services",
            value: "services"
        },
        {
            label: "Contact",
            value: "contact"
        }
    ];
    const sendQuickReply = (value)=>{
        setInputValue(value);
        handleSendMessage(value);
    };
    const handleSendMessage = async (manualText)=>{
        const text = manualText || inputValue;
        if (!text.trim()) return;
        const userMessage = {
            id: Date.now().toString(),
            role: "user",
            content: text,
            timestamp: new Date()
        };
        setMessages((prev)=>[
                ...prev,
                userMessage
            ]);
        setInputValue("");
        setIsTyping(true);
        setTimeout(()=>{
            const botResponse = generateResponse(text);
            setMessages((prev)=>[
                    ...prev,
                    {
                        id: (Date.now() + 1).toString(),
                        role: "bot",
                        content: botResponse,
                        timestamp: new Date()
                    }
                ]);
            setIsTyping(false);
        }, 700);
    };
    // -------------------------------------------------------------------
    // ⭐ AI-LIKE RESPONSE ENGINE
    // -------------------------------------------------------------------
    const generateResponse = (query)=>{
        const lower = query.toLowerCase().trim();
        // Safe companyInfo values
        const phone = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$data$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["companyInfo"]?.contact?.phone ?? "Not available";
        const email = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$data$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["companyInfo"]?.contact?.emails?.[0] ?? "Not available";
        const office = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$data$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["companyInfo"]?.address?.office ?? "Office address not available";
        const factory = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$data$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["companyInfo"]?.address?.factory ?? "Factory address not available";
        // -------------------------------------------------------------
        // 1) NUMBER-BASED PRODUCT ACCESS  (e.g., 1,2,3,4...)
        // -------------------------------------------------------------
        if (/^\d+$/.test(lower)) {
            const index = parseInt(lower) - 1;
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"][index]) {
                const p = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"][index];
                return `🟦 **${p.name}**\n\n${p.fullDescription}\n\n**Features:**\n• ${p.features.join("\n• ")}\n\n**Applications:**\n• ${p.applications.join("\n• ")}`;
            }
        }
        // -------------------------------------------------------------
        // 2) PRODUCT NAME MATCH (fuzzy)
        // -------------------------------------------------------------
        const productMatch = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].find((p)=>lower.includes(p.name.toLowerCase()) || lower.includes(p.name.toLowerCase().split(" ")[0]) || p.keywords && p.keywords.some((k)=>lower.includes(k)));
        if (productMatch) {
            return `🟦 **${productMatch.name}**\n\n${productMatch.fullDescription}\n\n**Features:**\n• ${productMatch.features.join("\n• ")}\n\n**Applications:**\n• ${productMatch.applications.join("\n• ")}`;
        }
        // Show product list
        if (lower.includes("product") || lower.includes("panel")) {
            return "Here are our products:\n\n" + __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].map((p, i)=>`${i + 1}. ${p.name}`).join("\n") + "\n\nType a number like **1** to get details.";
        }
        // -------------------------------------------------------------
        // 3) SERVICE MATCH (fuzzy)
        // -------------------------------------------------------------
        const serviceMatch = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$data$2f$s$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["services"].find((s)=>lower.includes(s.name.toLowerCase()) || lower.split(" ").some((w)=>s.name.toLowerCase().includes(w)));
        if (serviceMatch) {
            return `🛠 **${serviceMatch.name}**\n\n${serviceMatch.description}`;
        }
        // Show services list
        if (lower.includes("service") || lower.includes("support")) {
            return "Here are our services:\n\n" + __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$data$2f$s$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["services"].map((s, i)=>`${i + 1}. ${s.name}`).join("\n") + "\n\nType the service name or number to get full details.";
        }
        // -------------------------------------------------------------
        // 4) CONTACT DETAILS
        // -------------------------------------------------------------
        if (lower.includes("contact") || lower.includes("email") || lower.includes("phone") || lower.includes("address")) {
            return `📍 **A V Tech Contact Information**\n\n**Phone:** ${phone}\n**Email:** ${email}\n\n**Office:** ${office}\n\n**Factory:** ${factory}`;
        }
        // -------------------------------------------------------------
        // 5) ABOUT COMPANY
        // -------------------------------------------------------------
        if (lower.includes("about") || lower.includes("company")) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$data$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["companyInfo"].about ?? "A V Tech is a leading manufacturer and system integrator for factory automation, electrical panels, and SPM machines.";
        }
        // -------------------------------------------------------------
        // 6) DEFAULT AI-LIKE SUGGESTION RESPONSE
        // -------------------------------------------------------------
        return "I'm here to assist you! 😊\nTry asking about:\n\n" + "• Products (type: **products**)\n" + "• Services (type: **services**)\n" + "• Contact (type: **contact**)\n" + "• About the company (type: **about**)\n\n" + "You can also type a product number like **1**, **2**, **3** for details.";
    };
    // -------------------------------------------------------------------
    // COMPONENT UI
    // -------------------------------------------------------------------
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed bottom-24 right-6 bg-primary text-white p-3 rounded-full shadow-lg hover:scale-105 transition-all z-50", isOpen ? "hidden" : "flex"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                    className: "h-6 w-6"
                }, void 0, false, {
                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                    lineNumber: 203,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                lineNumber: 196,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed bottom-24 right-6 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col transition-all z-50", isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"),
                style: {
                    maxHeight: "520px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-primary p-4 text-white flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                                        lineNumber: 217,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-sm",
                                        children: "A V Tech Assistant"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                                        lineNumber: 218,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                                lineNumber: 216,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsOpen(false),
                                className: "text-white/80 hover:text-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                                    lineNumber: 221,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                        lineNumber: 215,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: scrollRef,
                        className: "flex-1 overflow-y-auto p-4 bg-gray-50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                messages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex gap-2", msg.role === "user" ? "ml-auto flex-row-reverse" : ""),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-8 h-8 rounded-full flex items-center justify-center", msg.role === "user" ? "bg-gray-200" : "bg-primary/10 text-primary"),
                                                children: msg.role === "user" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {}, void 0, false, {
                                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                                                    lineNumber: 239,
                                                    columnNumber: 42
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {}, void 0, false, {
                                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                                                    lineNumber: 239,
                                                    columnNumber: 53
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                                                lineNumber: 233,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-3 rounded-2xl text-sm shadow-sm whitespace-pre-line", msg.role === "user" ? "bg-primary text-white rounded-tr-none" : "bg-white border border-gray-200 rounded-tl-none"),
                                                children: msg.content
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                                                lineNumber: 242,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, msg.id, true, {
                                        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                                        lineNumber: 229,
                                        columnNumber: 15
                                    }, this)),
                                isTyping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2 items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                                className: "text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                                                lineNumber: 258,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                                            lineNumber: 257,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white p-3 border rounded-2xl flex gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                                                    lineNumber: 261,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                                                    lineNumber: 262,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                                            lineNumber: 260,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                                    lineNumber: 256,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                            lineNumber: 227,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                        lineNumber: 226,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-2 bg-white border-t flex gap-2 sticky bottom-0",
                        children: quickReplies.map((q)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: ()=>sendQuickReply(q.value),
                                className: "whitespace-nowrap text-sm bg-secondary border",
                                variant: "outline",
                                children: q.label
                            }, q.value, false, {
                                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                                lineNumber: 273,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                        lineNumber: 271,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 bg-white border-t",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: (e)=>{
                                e.preventDefault();
                                handleSendMessage();
                            },
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    value: inputValue,
                                    onChange: (e)=>setInputValue(e.target.value),
                                    placeholder: "Ask me anything..."
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                                    lineNumber: 293,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "submit",
                                    size: "icon",
                                    className: "bg-primary",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {}, void 0, false, {
                                        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                                        lineNumber: 299,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                                    lineNumber: 298,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                            lineNumber: 286,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                        lineNumber: 285,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Chatbot, "gQzOt4BKjBePjfnjo3coFTYFfv4=");
_c = Chatbot;
var _c;
__turbopack_context__.k.register(_c, "Chatbot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$components$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$components$2f$whatsapp$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/whatsapp-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$components$2f$chatbot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/lib/data/products.ts [app-client] (ecmascript)");
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
;
;
;
function ProductsPage() {
    _s();
    const [selectedProduct, setSelectedProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$components$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 pt-24 pb-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-16 animate-fade-in",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl md:text-5xl font-bold text-gray-900 mb-6",
                                    children: "Our Products"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-24 h-1.5 bg-primary mx-auto rounded-full mb-6"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl text-gray-600 max-w-3xl mx-auto",
                                    children: "High-quality industrial automation panels and special purpose machines designed for reliability and efficiency."
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].map((product, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "group overflow-hidden border-gray-200 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full animate-fade-in",
                                    style: {
                                        animationDelay: `${index * 100}ms`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative h-64 w-full overflow-hidden bg-gray-100",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: product.image || "/placeholder.svg",
                                                    alt: product.name,
                                                    fill: true,
                                                    className: "object-cover transition-transform duration-500 group-hover:scale-110"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                                                    lineNumber: 49,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        onClick: ()=>setSelectedProduct(product),
                                                        className: "w-full bg-white text-primary hover:bg-gray-100",
                                                        children: "View Details"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                                                        lineNumber: 56,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                                            lineNumber: 48,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                className: "text-xl font-bold text-gray-900 group-hover:text-primary transition-colors",
                                                children: product.name
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                                                lineNumber: 66,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                                            lineNumber: 65,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "flex-1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 line-clamp-3",
                                                children: product.shortDescription
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                                                lineNumber: 72,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                                            lineNumber: 71,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardFooter"], {
                                            className: "border-t border-gray-100 pt-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                onClick: ()=>setSelectedProduct(product),
                                                variant: "ghost",
                                                className: "w-full justify-between text-primary hover:text-primary hover:bg-primary/5 group/btn",
                                                children: [
                                                    "View Details",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "h-4 w-4 transition-transform group-hover/btn:translate-x-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                                                lineNumber: 76,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                                            lineNumber: 75,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, product.id, true, {
                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                                    lineNumber: 43,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: !!selectedProduct,
                onOpenChange: (open)=>!open && setSelectedProduct(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "max-w-4xl max-h-[90vh] overflow-y-auto p-0 gap-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky top-0 z-10 flex justify-end p-4 bg-transparent pointer-events-none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogClose"], {
                                className: "bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors shadow-sm pointer-events-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "h-5 w-5 text-gray-500"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                                        lineNumber: 96,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sr-only",
                                        children: "Close"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this),
                        selectedProduct && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full md:w-2/5 relative h-64 md:h-auto bg-gray-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: selectedProduct.image || "/placeholder.svg",
                                        alt: selectedProduct.name,
                                        fill: true,
                                        className: "object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                                        lineNumber: 105,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                                    lineNumber: 104,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full md:w-3/5 p-6 md:p-8 bg-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                                            className: "mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                                    className: "text-2xl md:text-3xl font-bold text-gray-900 mb-2",
                                                    children: selectedProduct.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                                    className: "text-base text-gray-600",
                                                    children: selectedProduct.fullDescription
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                                            lineNumber: 115,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-1 h-6 bg-primary rounded-full"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                                                                    lineNumber: 128,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "Key Features"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                                                            lineNumber: 127,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "grid grid-cols-1 sm:grid-cols-2 gap-2",
                                                            children: selectedProduct.features.map((feature, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "flex items-start gap-2 text-sm text-gray-600",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                            className: "h-4 w-4 text-primary shrink-0 mt-0.5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                                                                            lineNumber: 134,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: feature
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                                                                            lineNumber: 135,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, idx, true, {
                                                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                                                                    lineNumber: 133,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                                                            lineNumber: 131,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-1 h-6 bg-primary rounded-full"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                                                                    lineNumber: 144,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "Applications"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                                                            lineNumber: 143,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-2",
                                                            children: selectedProduct.applications.map((app, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    variant: "secondary",
                                                                    className: "bg-gray-100 text-gray-700 hover:bg-gray-200",
                                                                    children: app
                                                                }, idx, false, {
                                                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                                                                    lineNumber: 149,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                                                            lineNumber: 147,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 19
                                                }, this),
                                                selectedProduct.compatibleBrands && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-1 h-6 bg-primary rounded-full"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                                                                    lineNumber: 160,
                                                                    columnNumber: 25
                                                                }, this),
                                                                "Compatible Brands"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                                                            lineNumber: 159,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-2",
                                                            children: selectedProduct.compatibleBrands.map((brand, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    variant: "outline",
                                                                    className: "border-primary/30 text-primary",
                                                                    children: brand
                                                                }, idx, false, {
                                                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                                                                    lineNumber: 165,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                                                            lineNumber: 163,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pt-6 border-t border-gray-100",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        className: "w-full md:w-auto bg-primary hover:bg-primary/90 text-white",
                                                        onClick: ()=>{
                                                            const message = encodeURIComponent(`Hi, I'm interested in ${selectedProduct.name}. Can you provide more details?`);
                                                            window.open(`https://wa.me/919595912555?text=${message}`, "_blank");
                                                        },
                                                        children: "Enquire Now via WhatsApp"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                                                        lineNumber: 174,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                                            lineNumber: 124,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                                    lineNumber: 114,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                            lineNumber: 102,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$components$2f$whatsapp$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WhatsAppButton"], {}, void 0, false, {
                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$components$2f$chatbot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chatbot"], {}, void 0, false, {
                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/app/products/page.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(ProductsPage, "LB7CKN5ei8ToaN6e4gYD7HPDpQA=");
_c = ProductsPage;
var _c;
__turbopack_context__.k.register(_c, "ProductsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=6c7f9_v0-corporate-website-build-main_v0-corporate-website-build-main_f2455548._.js.map