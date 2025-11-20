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
        image: "/feeder-pillar.jpg",
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
        image: "/distribution-box.jpg",
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
function Chatbot() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: "1",
            role: "bot",
            content: "Hello! I am the A V Tech Assistant. How can I help you today?\n\nYou can ask me about:\n• Products\n• Services\n• Contact Information\n• Company Details",
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
    // Quick Reply Buttons --------------------------
    const quickReplies = [
        {
            label: "Products",
            value: "Show me products"
        },
        {
            label: "Services",
            value: "Services list"
        },
        {
            label: "Contact",
            value: "Contact information"
        },
        {
            label: "Company Info",
            value: "Tell me about the company"
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
        }, 600);
    };
    // ------------- RESPONSE GENERATOR ---------------------
    const generateResponse = (query)=>{
        const lower = query.toLowerCase();
        // Product Details
        const matchingProduct = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].find((p)=>lower.includes(p.name.toLowerCase()) || lower.includes(p.id.toLowerCase()));
        if (matchingProduct) {
            return `**${matchingProduct.name}**\n${matchingProduct.fullDescription}\n\nFeatures:\n• ${matchingProduct.features.join("\n• ")}\n\nApplications:\n• ${matchingProduct.applications.join("\n• ")}`;
        }
        if (lower.includes("product") || lower.includes("panel")) {
            return "Here are our main products:\n" + __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].map((p)=>`• ${p.name}`).join("\n") + "\n\nTell me which product you want details for!";
        }
        // Services Logic
        const matchingService = services.find((s)=>lower.includes(s.name.toLowerCase()));
        if (matchingService) {
            return `**${matchingService.name}**\n${matchingService.description}`;
        }
        if (lower.includes("service") || lower.includes("support")) {
            return "Here are our available services:\n" + services.map((s)=>`• ${s.name}`).join("\n") + "\n\nTell me which service you want details for.";
        }
        // Contact Info
        if (lower.includes("contact") || lower.includes("email") || lower.includes("phone") || lower.includes("address")) {
            return `📍 **A V Tech Contact Information**\n\n**Phone:** ${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$data$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["companyInfo"].contact.phone}\n**Email:** ${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$data$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["companyInfo"].contact.emails[0]}\n**Office:** ${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$data$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["companyInfo"].address.office}\n**Works:** ${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$data$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["companyInfo"].address.factory}`;
        }
        // About Company
        if (lower.includes("about") || lower.includes("company")) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$data$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["companyInfo"].about;
        }
        return "I'm not sure I understand. You can ask me about our products, services, or contact information.";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed bottom-6 right-20 bg-primary text-white p-3 rounded-full shadow-lg hover:scale-105 transition-all", isOpen ? "hidden" : "flex"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                    className: "h-6 w-6"
                }, void 0, false, {
                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                    lineNumber: 154,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed bottom-24 right-6 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col transition-all", isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"),
                style: {
                    maxHeight: "500px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-primary p-4 flex justify-between items-center text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                                        lineNumber: 168,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-sm",
                                        children: "A V Tech Assistant"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                                        lineNumber: 169,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsOpen(false),
                                className: "text-white/80 hover:text-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                                lineNumber: 171,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto p-4 bg-gray-50",
                        ref: scrollRef,
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
                                                    lineNumber: 190,
                                                    columnNumber: 42
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {}, void 0, false, {
                                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 53
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                                                lineNumber: 184,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-3 rounded-2xl text-sm shadow-sm whitespace-pre-line", msg.role === "user" ? "bg-primary text-white rounded-tr-none" : "bg-white border rounded-tl-none"),
                                                children: msg.content
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                                                lineNumber: 192,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, msg.id, true, {
                                        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                                        lineNumber: 180,
                                        columnNumber: 15
                                    }, this)),
                                isTyping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {}, void 0, false, {
                                                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                                                lineNumber: 209,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                                            lineNumber: 208,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white p-3 rounded-2xl border shadow-sm flex gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                                            lineNumber: 211,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                                    lineNumber: 207,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-2 flex gap-2 overflow-x-auto bg-white border-t",
                        children: quickReplies.map((q)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: ()=>sendQuickReply(q.value),
                                className: "whitespace-nowrap bg-secondary text-black border",
                                variant: "outline",
                                children: q.label
                            }, q.value, false, {
                                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                                lineNumber: 224,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                        lineNumber: 222,
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
                                    placeholder: "Ask something..."
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                                    lineNumber: 244,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "submit",
                                    size: "icon",
                                    className: "bg-primary",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$v0$2d$corporate$2d$website$2d$build$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {}, void 0, false, {
                                        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                                        lineNumber: 250,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                                    lineNumber: 249,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                            lineNumber: 237,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                        lineNumber: 236,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/v0-corporate-website-build-main/v0-corporate-website-build-main/components/chatbot.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Chatbot, "TgYAliVgGFDG2nMw3OYjSF9KrDk=");
_c = Chatbot;
var _c;
__turbopack_context__.k.register(_c, "Chatbot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=6c7f9_v0-corporate-website-build-main_v0-corporate-website-build-main_9e7601ab._.js.map