(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/data.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACHIEVEMENTS",
    ()=>ACHIEVEMENTS,
    "BLOGS",
    ()=>BLOGS,
    "CERTS",
    ()=>CERTS,
    "COURSE_CERTS",
    ()=>COURSE_CERTS,
    "EXPERIENCE",
    ()=>EXPERIENCE,
    "INTERESTS",
    ()=>INTERESTS,
    "NAV",
    ()=>NAV,
    "SKILLS",
    ()=>SKILLS
]);
const NAV = [
    {
        id: "home",
        label: "Home",
        icon: "🏠"
    },
    {
        id: "skills",
        label: "Tech Skills",
        icon: "⚡"
    },
    {
        id: "experience",
        label: "Experience",
        icon: "💼"
    },
    {
        id: "achievements",
        label: "Achievements",
        icon: "🏆"
    },
    {
        id: "certifications",
        label: "Certs",
        icon: "🎖️"
    },
    {
        id: "background",
        label: "Background",
        icon: "🎓"
    },
    {
        id: "blogs",
        label: "Blogs",
        icon: "✍️"
    }
];
const SKILLS = [
    {
        cat: "Front-End",
        icon: "🖥️",
        color: "#e65c00",
        items: [
            "Angular (NgRx)",
            "React (Redux)",
            "TypeScript",
            "JavaScript",
            "HTML5/CSS3",
            "Bootstrap"
        ]
    },
    {
        cat: "Back-End",
        icon: "⚙️",
        color: "#1a6b3c",
        items: [
            "Node.js (Express)",
            "Python (FastAPI)",
            "Spring Boot",
            "Java",
            "GraphQL",
            "REST APIs",
            "Microservices"
        ]
    },
    {
        cat: "Database & Tools",
        icon: "🗄️",
        color: "#1565c0",
        items: [
            "MongoDB",
            "Oracle",
            "MySQL",
            "Redis",
            "Jest",
            "Selenium",
            "Splunk",
            "Git",
            "Jira"
        ]
    },
    {
        cat: "Domain Expertise",
        icon: "🏦",
        color: "#6a1b9a",
        items: [
            "FinTech",
            "Credit Decisioning (FICO)",
            "AML/KYC",
            "ML Predictive Models",
            "Fraud Detection",
            "Digital Onboarding"
        ]
    }
];
const EXPERIENCE = [
    {
        role: "Assistant Consultant",
        company: "Tata Consultancy Services",
        location: "Jacksonville, USA",
        period: "Nov 2017 – Present",
        sub: "Embedded at CitiBank NA · Lead Engineer, Digital Account Opening & Credit Decisioning",
        color: "#e65c00",
        points: [
            {
                bold: "AI credit engine:",
                rest: "Built FICO Decision Modeler integrations with ML predictive models — 15% better risk accuracy, 30% faster approval cycles."
            },
            {
                bold: "Microservices migration:",
                rest: "Modernised 5+ legacy monoliths into MEAN/Spring Boot services — cut P95 latency 25%, saved ~$40K/month on cloud."
            },
            {
                bold: "BDD automation:",
                rest: "99% test coverage framework eliminated 80%+ production defects, saving ~120 QA hours per sprint."
            },
            {
                bold: "Global delivery:",
                rest: "On-site collaboration with Saudi Aramco teams; zero missed SLAs across USA, India & Saudi Arabia over 6+ years."
            }
        ]
    },
    {
        role: "Senior Software Consultant",
        company: "Fusion Indus Tecsol Pvt. Ltd.",
        location: "Gurugram, India",
        period: "Nov 2016 – Oct 2017",
        sub: "Onshore-Offshore Transition Lead · NCR Corporation",
        color: "#1565c0",
        points: [
            {
                bold: "Transition leadership:",
                rest: "Seamless knowledge transfer for 12 engineers over 6 months with 100% delivery continuity."
            },
            {
                bold: "Revenue impact:",
                rest: "Responsive Angular apps drove 30% revenue boost for the client within 8 months."
            },
            {
                bold: "Market expansion:",
                rest: "Sales enablement tools adopted across 4 regional markets."
            }
        ]
    },
    {
        role: "Full Stack Developer",
        company: "Amagesoft Technologies",
        location: "Chandigarh, India",
        period: "Feb 2013 – Oct 2016",
        sub: null,
        color: "#1a6b3c",
        points: [
            {
                bold: "Scale:",
                rest: "Built 3 client platforms (CodeIgniter / Zend) serving 20K+ daily active users, 40% efficiency gains."
            },
            {
                bold: "Mobile:",
                rest: "Ionic Android app with real-time data sync capabilities."
            },
            {
                bold: "Performance:",
                rest: "Custom WordPress themes / plugins for 8+ clients — 35% page-load improvement."
            }
        ]
    }
];
const ACHIEVEMENTS = [
    {
        icon: "🛡️",
        metric: "99%",
        label: "Test Coverage",
        desc: "Eliminated 80%+ of production defects across CitiBank systems."
    },
    {
        icon: "⚡",
        metric: "25%",
        label: "Latency Reduction",
        desc: "P95 improvement via microservices modernisation."
    },
    {
        icon: "📈",
        metric: "20%",
        label: "Digital Acquisition",
        desc: "UX-optimised onboarding flows boosted customer acquisition."
    },
    {
        icon: "💰",
        metric: "$40K",
        label: "Monthly Savings",
        desc: "Cloud infrastructure optimisation per month."
    },
    {
        icon: "🌍",
        metric: "0",
        label: "Missed SLAs",
        desc: "Cross-timezone delivery: USA, India & Saudi Arabia over 6+ years."
    },
    {
        icon: "🤝",
        metric: "12",
        label: "Engineers Led",
        desc: "Full onshore-offshore transition with zero continuity breaks."
    }
];
const CERTS = [
    {
        icon: "⚙️",
        name: "AWS Certified Developer",
        issuer: "Amazon Web Services",
        level: "Associate",
        accentColor: "#FF9900",
        tags: [
            "DynamoDB",
            "API Gateway",
            "IAM",
            "CI/CD",
            "SDK"
        ]
    },
    {
        icon: "🍃",
        name: "MongoDB Certified Developer",
        issuer: "MongoDB University",
        level: "Associate",
        accentColor: "#00ED64",
        tags: [
            "Atlas",
            "Aggregation",
            "Indexing",
            "Schema Design",
            "Compass"
        ]
    }
];
const COURSE_CERTS = [
    {
        name: "AI for Work and Life",
        issuer: "University of North Florida",
        date: "Nov 14, 2025",
        hours: "1 CEU",
        image: "/certificates/1763328692380.jpeg"
    },
    {
        name: "[NEW] Ultimate AWS Certified Cloud Practitioner CLF-C02",
        issuer: "Udemy",
        date: "Aug 12, 2024",
        hours: "15 total hours",
        image: "/certificates/1770172499345.jpeg"
    },
    {
        name: "Standard 9.2 - Part 1 Foundation Enterprise Architect Course",
        issuer: "Udemy",
        date: "March 29, 2026",
        hours: "2.5 total hours",
        image: "/certificates/1774752042273.jpeg"
    },
    {
        name: "The EU AI Act Compliance Masterclass 2026",
        issuer: "Udemy",
        date: "April 11, 2026",
        hours: "2 total hours",
        image: "/certificates/1776390534555.jpeg"
    },
    {
        name: "Financial Crime: Processes & Technology - Masterclass",
        issuer: "Udemy",
        date: "April 26, 2026",
        hours: "10 total hours",
        image: "/certificates/1777155947348.jpeg"
    },
    {
        name: "Fraud Detection in Python",
        issuer: "Udemy",
        date: "May 4, 2026",
        hours: "2 total hours",
        image: "/certificates/1777858798003.jpeg"
    }
];
const BLOGS = [
    {
        title: "Mastering Angular Signals: A Beginner's Guide to Reactive State Management",
        date: "April 30, 2026",
        tags: [
            "Angular",
            "Signals",
            "State Management"
        ],
        excerpt: "Dive into Angular Signals — the new reactive primitive that simplifies state management. This beginner-friendly guide covers how signals work, why they outperform traditional change detection, and practical examples to build more predictable Angular apps.",
        url: "https://medium.com/@thejspythonguy/mastering-angular-signals-a-beginners-guide-to-reactive-state-management-8c946dbf626c",
        readTime: "8 min read",
        color: "#e65c00"
    },
    {
        title: "The Full Stack Paradox: Jack of All Trades, Master of None?",
        date: "May 3, 2026",
        tags: [
            "Career",
            "Full Stack",
            "Leadership"
        ],
        excerpt: "Full-stack engineers are valuable, but expecting them to be experts in every layer is unrealistic. Specialists exist for a reason. This post explores the balance between depth and breadth in modern engineering teams.",
        url: "https://medium.com/@thejspythonguy/the-full-stack-paradox-jack-of-all-trades-master-of-none-94845e1064da",
        readTime: "6 min read",
        color: "#1565c0"
    }
];
const INTERESTS = [
    "AI in Financial Services",
    "Intelligent Automation",
    "Distributed Systems",
    "LLM Applications in Credit Risk",
    "Open Source",
    "Technical Mentorship"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scrollTo",
    ()=>scrollTo,
    "useInView",
    ()=>useInView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function scrollTo(id) {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - 68;
    window.scrollTo({
        top: y,
        behavior: "smooth"
    });
}
function useInView(threshold = 0.1) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [inView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInView.useEffect": ()=>{
            const obs = new IntersectionObserver({
                "useInView.useEffect": ([entry])=>{
                    if (entry.isIntersecting) setInView(true);
                }
            }["useInView.useEffect"], {
                threshold
            });
            if (ref.current) obs.observe(ref.current);
            return ({
                "useInView.useEffect": ()=>obs.disconnect()
            })["useInView.useEffect"];
        }
    }["useInView.useEffect"], [
        threshold
    ]);
    return [
        ref,
        inView
    ];
}
_s(useInView, "K+dCFMkCcTyPMHOI0MxAWPXS6Js=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Navbar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function Navbar({ page, setPage }) {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("home");
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>{
                    setScrolled(window.scrollY > 20);
                    if (page !== "home") return;
                    const off = 90;
                    for(let i = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NAV"].length - 1; i >= 0; i -= 1){
                        const el = document.getElementById(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NAV"][i].id);
                        if (el && el.getBoundingClientRect().top <= off) {
                            setActive(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NAV"][i].id);
                            return;
                        }
                    }
                    setActive("home");
                }
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], [
        page
    ]);
    const handleNav = (item)=>{
        if (item.id === "blogs") {
            setPage("blogs");
            setActive("blogs");
            window.scrollTo({
                top: 0
            });
            return;
        }
        if (page !== "home") {
            setPage("home");
            setTimeout(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollTo"])(item.id), 80);
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollTo"])(item.id);
        }
        setActive(item.id);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        style: {
            position: "sticky",
            top: 0,
            zIndex: 100,
            background: scrolled ? "rgba(10,28,48,0.97)" : "#0a1c30",
            backdropFilter: "blur(12px)",
            boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.18)" : "none",
            borderBottom: "1px solid rgba(245,176,66,0.18)",
            transition: "all 0.3s"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: 1200,
                margin: "0 auto",
                padding: "0 24px",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.2rem 0.1rem",
                minHeight: 58
            },
            children: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NAV"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>handleNav(item),
                    style: {
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: "10px 14px",
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 600,
                        fontSize: 13,
                        letterSpacing: 0.3,
                        color: active === item.id ? "#f5b042" : "rgba(240,248,255,0.75)",
                        borderBottom: active === item.id ? "2px solid #f5b042" : "2px solid transparent",
                        transition: "all 0.2s"
                    },
                    onMouseEnter: (e)=>{
                        if (active !== item.id) e.currentTarget.style.color = "#f5b042";
                    },
                    onMouseLeave: (e)=>{
                        if (active !== item.id) e.currentTarget.style.color = "rgba(240,248,255,0.75)";
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontSize: 14
                            },
                            children: item.icon
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.jsx",
                            lineNumber: 83,
                            columnNumber: 13
                        }, this),
                        " ",
                        item.label
                    ]
                }, item.id, true, {
                    fileName: "[project]/components/Navbar.jsx",
                    lineNumber: 60,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/Navbar.jsx",
            lineNumber: 58,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Navbar.jsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(Navbar, "K4M0Im9/yuwE3AyOn5uoNJaUJo4=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Hero.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const CONTACTS = [
    {
        icon: "📧",
        label: "thejspythonguy@gmail.com",
        href: "mailto:thejspythonguy@gmail.com"
    },
    {
        icon: "📞",
        label: "+1-904-217-5437",
        href: "tel:+19042175437"
    },
    {
        icon: "📍",
        label: "Jacksonville, FL, USA",
        href: null
    },
    {
        icon: "🐦",
        label: "@thejspythonguy",
        href: "https://twitter.com/thejspythonguy"
    },
    {
        icon: "🔗",
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/thejspythonguy/"
    },
    {
        icon: "💻",
        label: "GitHub",
        href: "https://github.com/thejspythonguy"
    }
];
function Hero({ setPage }) {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const timeout = setTimeout({
                "Hero.useEffect.timeout": ()=>setMounted(true)
            }["Hero.useEffect.timeout"], 80);
            return ({
                "Hero.useEffect": ()=>clearTimeout(timeout)
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "home",
        style: {
            background: "linear-gradient(135deg, #0a1c30 0%, #0f3352 60%, #0a1c30 100%)",
            padding: "4rem 24px 4.5rem",
            borderBottom: "4px solid #f5b042",
            position: "relative",
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    inset: 0,
                    backgroundImage: "linear-gradient(rgba(245,176,66,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(245,176,66,0.04) 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                    pointerEvents: "none"
                }
            }, void 0, false, {
                fileName: "[project]/components/Hero.jsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    width: 600,
                    height: 600,
                    background: "radial-gradient(circle, rgba(245,176,66,0.06) 0%, transparent 70%)",
                    top: -200,
                    right: -100,
                    borderRadius: "50%",
                    pointerEvents: "none"
                }
            }, void 0, false, {
                fileName: "[project]/components/Hero.jsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1200,
                    margin: "0 auto",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "2.5rem",
                    position: "relative",
                    zIndex: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: "1 1 400px",
                            opacity: mounted ? 1 : 0,
                            transform: mounted ? "translateY(0)" : "translateY(28px)",
                            transition: "all 0.75s cubic-bezier(.16,1,.3,1)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 8,
                                    background: "rgba(245,176,66,0.12)",
                                    border: "1px solid rgba(245,176,66,0.25)",
                                    borderRadius: 30,
                                    padding: "5px 16px",
                                    marginBottom: 20
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            width: 8,
                                            height: 8,
                                            borderRadius: "50%",
                                            background: "#4caf50",
                                            boxShadow: "0 0 6px #4caf50"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.jsx",
                                        lineNumber: 34,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: "'Outfit', sans-serif",
                                            fontSize: 12,
                                            color: "#f5b042",
                                            letterSpacing: 1.5,
                                            textTransform: "uppercase",
                                            fontWeight: 600
                                        },
                                        children: "Available for new opportunities"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.jsx",
                                        lineNumber: 35,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Hero.jsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: "clamp(2.4rem, 6vw, 4rem)",
                                    fontWeight: 800,
                                    color: "#fff",
                                    lineHeight: 1.08,
                                    marginBottom: 10
                                },
                                children: [
                                    "Shailender",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/Hero.jsx",
                                        lineNumber: 38,
                                        columnNumber: 23
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: "#f5b042"
                                        },
                                        children: "Singh"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.jsx",
                                        lineNumber: 39,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Hero.jsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: "'Outfit', sans-serif",
                                    fontWeight: 500,
                                    fontSize: "1.15rem",
                                    color: "rgba(240,248,255,0.75)",
                                    marginBottom: 18,
                                    letterSpacing: 0.3
                                },
                                children: "Senior Full Stack Engineer · FinTech & AI/ML · Credit Risk Systems"
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.jsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: "'Lora', serif",
                                    fontSize: "1.05rem",
                                    color: "rgba(240,248,255,0.65)",
                                    maxWidth: 580,
                                    lineHeight: 1.75,
                                    marginBottom: 32
                                },
                                children: "12+ years architecting scalable, mission-critical financial systems for global banking institutions. Specialist in AI-driven credit decisioning engines, fraud detection, and digital wealth services."
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.jsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: 12,
                                    flexWrap: "wrap"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollTo"])("experience"),
                                        style: {
                                            background: "#f5b042",
                                            color: "#0a1c30",
                                            padding: "13px 28px",
                                            border: "none",
                                            borderRadius: 40,
                                            fontFamily: "'Outfit', sans-serif",
                                            fontWeight: 700,
                                            fontSize: 14,
                                            cursor: "pointer",
                                            letterSpacing: 0.4,
                                            transition: "all 0.2s"
                                        },
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.background = "#ffca5a";
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.background = "#f5b042";
                                        },
                                        children: "💼 View Experience"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.jsx",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            setPage("blogs");
                                            window.scrollTo({
                                                top: 0
                                            });
                                        },
                                        style: {
                                            background: "transparent",
                                            color: "#f5b042",
                                            padding: "13px 28px",
                                            border: "2px solid rgba(245,176,66,0.45)",
                                            borderRadius: 40,
                                            fontFamily: "'Outfit', sans-serif",
                                            fontWeight: 700,
                                            fontSize: 14,
                                            cursor: "pointer",
                                            letterSpacing: 0.4,
                                            transition: "all 0.2s"
                                        },
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.borderColor = "#f5b042";
                                            e.currentTarget.style.background = "rgba(245,176,66,0.08)";
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.borderColor = "rgba(245,176,66,0.45)";
                                            e.currentTarget.style.background = "transparent";
                                        },
                                        children: "✍️ Read My Blog"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.jsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Hero.jsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Hero.jsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: "rgba(255,255,255,0.06)",
                            backdropFilter: "blur(10px)",
                            border: "1px solid rgba(245,176,66,0.2)",
                            borderRadius: 24,
                            padding: "1.8rem 2rem",
                            minWidth: 260,
                            opacity: mounted ? 1 : 0,
                            transition: "opacity 1s ease 0.4s"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: "'Outfit', sans-serif",
                                    fontSize: 11,
                                    color: "#f5b042",
                                    letterSpacing: 3,
                                    textTransform: "uppercase",
                                    fontWeight: 700,
                                    marginBottom: 18
                                },
                                children: "Contact"
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.jsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            CONTACTS.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: 14
                                    },
                                    children: c.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: c.href,
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 12,
                                            color: "rgba(240,248,255,0.8)",
                                            fontFamily: "'Outfit', sans-serif",
                                            fontSize: 14,
                                            textDecoration: "none",
                                            transition: "color 0.2s"
                                        },
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.color = "#f5b042";
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.color = "rgba(240,248,255,0.8)";
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 18,
                                                    width: 28,
                                                    textAlign: "center"
                                                },
                                                children: c.icon
                                            }, void 0, false, {
                                                fileName: "[project]/components/Hero.jsx",
                                                lineNumber: 78,
                                                columnNumber: 19
                                            }, this),
                                            c.label
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Hero.jsx",
                                        lineNumber: 75,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 12,
                                            color: "rgba(240,248,255,0.8)",
                                            fontFamily: "'Outfit', sans-serif",
                                            fontSize: 14
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 18,
                                                    width: 28,
                                                    textAlign: "center"
                                                },
                                                children: c.icon
                                            }, void 0, false, {
                                                fileName: "[project]/components/Hero.jsx",
                                                lineNumber: 82,
                                                columnNumber: 19
                                            }, this),
                                            c.label
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Hero.jsx",
                                        lineNumber: 81,
                                        columnNumber: 17
                                    }, this)
                                }, c.label, false, {
                                    fileName: "[project]/components/Hero.jsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 20,
                                    paddingTop: 16,
                                    borderTop: "1px solid rgba(245,176,66,0.15)"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontFamily: "'Outfit', sans-serif",
                                        fontSize: 11,
                                        color: "rgba(240,248,255,0.4)",
                                        letterSpacing: 1
                                    },
                                    children: "🎖️ FinTech Certified · MongoDB Certified"
                                }, void 0, false, {
                                    fileName: "[project]/components/Hero.jsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.jsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Hero.jsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Hero.jsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Hero.jsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(Hero, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/SectionHeader.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function SectionHeader({ tag, title }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            marginBottom: 40
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 11,
                    color: "#f5b042",
                    letterSpacing: 3.5,
                    textTransform: "uppercase",
                    fontWeight: 700,
                    marginBottom: 10
                },
                children: tag
            }, void 0, false, {
                fileName: "[project]/components/SectionHeader.jsx",
                lineNumber: 4,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                    fontWeight: 800,
                    color: "#0a1c30",
                    position: "relative",
                    display: "inline-block"
                },
                children: [
                    title,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            position: "absolute",
                            bottom: -10,
                            left: 0,
                            width: 56,
                            height: 4,
                            background: "#f5b042",
                            borderRadius: 4
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/SectionHeader.jsx",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SectionHeader.jsx",
                lineNumber: 7,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/SectionHeader.jsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = SectionHeader;
var _c;
__turbopack_context__.k.register(_c, "SectionHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Skills.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Skills
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionHeader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SectionHeader.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function Skills() {
    _s();
    const [ref, inView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "skills",
        ref: ref,
        style: {
            padding: "4rem 24px",
            borderBottom: "1px solid #e8eef6",
            scrollMarginTop: 68
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: 1200,
                margin: "0 auto"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionHeader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    tag: "⚡ Technical Arsenal",
                    title: "Skills & Expertise"
                }, void 0, false, {
                    fileName: "[project]/components/Skills.jsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
                        gap: 20
                    },
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SKILLS"].map((skill, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: "#fff",
                                borderRadius: 20,
                                padding: "1.6rem 1.8rem",
                                boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                                border: "1px solid #edf2f7",
                                opacity: inView ? 1 : 0,
                                transform: inView ? "translateY(0)" : "translateY(30px)",
                                transition: `all 0.6s ease ${index * 0.1}s`
                            },
                            onMouseEnter: (e)=>{
                                e.currentTarget.style.transform = "translateY(-4px)";
                                e.currentTarget.style.boxShadow = "0 16px 32px rgba(0,0,0,0.08)";
                            },
                            onMouseLeave: (e)=>{
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.04)";
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontFamily: "'Outfit', sans-serif",
                                        fontWeight: 700,
                                        fontSize: "1.1rem",
                                        color: "#0a1c30",
                                        borderLeft: `4px solid ${skill.color}`,
                                        paddingLeft: 12,
                                        marginBottom: 16
                                    },
                                    children: [
                                        skill.icon,
                                        " ",
                                        skill.cat
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Skills.jsx",
                                    lineNumber: 26,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: 8
                                    },
                                    children: skill.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                background: "#f4f7fc",
                                                borderRadius: 30,
                                                padding: "5px 13px",
                                                fontSize: 13,
                                                fontFamily: "'Outfit', sans-serif",
                                                fontWeight: 500,
                                                color: "#2d3e50"
                                            },
                                            children: item
                                        }, item, false, {
                                            fileName: "[project]/components/Skills.jsx",
                                            lineNumber: 31,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/Skills.jsx",
                                    lineNumber: 29,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, skill.cat, true, {
                            fileName: "[project]/components/Skills.jsx",
                            lineNumber: 14,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Skills.jsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Skills.jsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Skills.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_s(Skills, "GpcLnEGLCRT/LcXgsVwPMCbjDPg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = Skills;
var _c;
__turbopack_context__.k.register(_c, "Skills");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Experience.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Experience
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionHeader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SectionHeader.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function Experience() {
    _s();
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [ref, inView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "experience",
        ref: ref,
        style: {
            padding: "4rem 24px",
            background: "#f8fafd",
            borderBottom: "1px solid #e8eef6",
            scrollMarginTop: 68
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: 1200,
                margin: "0 auto"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionHeader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    tag: "💼 Career Journey",
                    title: "Professional Experience"
                }, void 0, false, {
                    fileName: "[project]/components/Experience.jsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        gap: 28,
                        flexWrap: "wrap"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                minWidth: 220,
                                gap: 6
                            },
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXPERIENCE"].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setActiveIndex(index),
                                    style: {
                                        background: activeIndex === index ? "#fff" : "transparent",
                                        border: "none",
                                        cursor: "pointer",
                                        textAlign: "left",
                                        padding: "16px 18px",
                                        borderLeft: `4px solid ${activeIndex === index ? item.color : "#e2e8f0"}`,
                                        borderRadius: "0 12px 12px 0",
                                        boxShadow: activeIndex === index ? "0 4px 16px rgba(0,0,0,0.06)" : "none",
                                        transition: "all 0.25s",
                                        opacity: inView ? 1 : 0,
                                        transitionDelay: `${index * 0.1}s`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: "'Outfit', sans-serif",
                                                fontSize: 11,
                                                color: activeIndex === index ? item.color : "#94a3b8",
                                                letterSpacing: 1.5,
                                                textTransform: "uppercase",
                                                fontWeight: 700,
                                                marginBottom: 5
                                            },
                                            children: item.period.split("–")[0].trim()
                                        }, void 0, false, {
                                            fileName: "[project]/components/Experience.jsx",
                                            lineNumber: 35,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: "'Outfit', sans-serif",
                                                fontSize: 15,
                                                fontWeight: 700,
                                                color: activeIndex === index ? "#0a1c30" : "#64748b"
                                            },
                                            children: item.company
                                        }, void 0, false, {
                                            fileName: "[project]/components/Experience.jsx",
                                            lineNumber: 38,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: "'Outfit', sans-serif",
                                                fontSize: 12,
                                                color: "#94a3b8",
                                                marginTop: 2
                                            },
                                            children: item.location
                                        }, void 0, false, {
                                            fileName: "[project]/components/Experience.jsx",
                                            lineNumber: 41,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, item.company, true, {
                                    fileName: "[project]/components/Experience.jsx",
                                    lineNumber: 17,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Experience.jsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: 1,
                                minWidth: 280
                            },
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXPERIENCE"].map((item, index)=>index !== activeIndex ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: "#fff",
                                        borderRadius: 20,
                                        padding: "2rem",
                                        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                                        border: "1px solid #edf2f7"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                justifyContent: "space-between",
                                                flexWrap: "wrap",
                                                gap: 12,
                                                marginBottom: 6
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            style: {
                                                                fontFamily: "'Playfair Display', serif",
                                                                fontSize: "1.55rem",
                                                                fontWeight: 800,
                                                                color: "#0a1c30",
                                                                marginBottom: 4
                                                            },
                                                            children: item.role
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Experience.jsx",
                                                            lineNumber: 53,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                fontFamily: "'Outfit', sans-serif",
                                                                fontWeight: 700,
                                                                fontSize: 14,
                                                                color: item.color
                                                            },
                                                            children: [
                                                                item.company,
                                                                " · ",
                                                                item.location
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Experience.jsx",
                                                            lineNumber: 54,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Experience.jsx",
                                                    lineNumber: 52,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        background: "#eef2ff",
                                                        color: "#2c5a6e",
                                                        fontFamily: "'Outfit', sans-serif",
                                                        fontSize: 12,
                                                        fontWeight: 600,
                                                        padding: "5px 14px",
                                                        borderRadius: 30,
                                                        height: "fit-content"
                                                    },
                                                    children: item.period
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Experience.jsx",
                                                    lineNumber: 56,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Experience.jsx",
                                            lineNumber: 51,
                                            columnNumber: 17
                                        }, this),
                                        item.sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: "'Lora', serif",
                                                fontSize: 14,
                                                color: "#64748b",
                                                fontStyle: "italic",
                                                margin: "12px 0 20px",
                                                paddingLeft: 12,
                                                borderLeft: `3px solid ${item.color}`
                                            },
                                            children: item.sub
                                        }, void 0, false, {
                                            fileName: "[project]/components/Experience.jsx",
                                            lineNumber: 60,
                                            columnNumber: 30
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            style: {
                                                listStyle: "none",
                                                padding: 0,
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: 12
                                            },
                                            children: item.points.map((point, pointIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    style: {
                                                        display: "flex",
                                                        gap: 12
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: item.color,
                                                                fontSize: 16,
                                                                flexShrink: 0,
                                                                marginTop: 2
                                                            },
                                                            children: "▸"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Experience.jsx",
                                                            lineNumber: 64,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                fontFamily: "'Lora', serif",
                                                                fontSize: 15,
                                                                lineHeight: 1.7,
                                                                color: "#334155"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    style: {
                                                                        fontFamily: "'Outfit', sans-serif",
                                                                        fontWeight: 700,
                                                                        color: "#0a1c30"
                                                                    },
                                                                    children: point.bold
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Experience.jsx",
                                                                    lineNumber: 66,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " ",
                                                                point.rest
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Experience.jsx",
                                                            lineNumber: 65,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, pointIndex, true, {
                                                    fileName: "[project]/components/Experience.jsx",
                                                    lineNumber: 63,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/Experience.jsx",
                                            lineNumber: 61,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, item.company, true, {
                                    fileName: "[project]/components/Experience.jsx",
                                    lineNumber: 50,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Experience.jsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Experience.jsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Experience.jsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Experience.jsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_s(Experience, "wyqHWHKfgcv8KsUFaG9a1YxMRnQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = Experience;
var _c;
__turbopack_context__.k.register(_c, "Experience");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Achievements.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Achievements
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionHeader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SectionHeader.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function Achievements() {
    _s();
    const [ref, inView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "achievements",
        ref: ref,
        style: {
            padding: "4rem 24px",
            borderBottom: "1px solid #e8eef6",
            scrollMarginTop: 68
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: 1200,
                margin: "0 auto"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionHeader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    tag: "🏆 Impact",
                    title: "Key Achievements"
                }, void 0, false, {
                    fileName: "[project]/components/Achievements.jsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                        gap: 18
                    },
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACHIEVEMENTS"].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: "#fff",
                                borderRadius: 20,
                                padding: "1.6rem",
                                borderLeft: "5px solid #f5b042",
                                boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
                                opacity: inView ? 1 : 0,
                                transform: inView ? "translateY(0)" : "translateY(30px)",
                                transition: `all 0.6s ease ${index * 0.08}s`
                            },
                            onMouseEnter: (e)=>{
                                e.currentTarget.style.transform = "translateY(-4px)";
                                e.currentTarget.style.boxShadow = "0 16px 32px rgba(0,0,0,0.08)";
                            },
                            onMouseLeave: (e)=>{
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.03)";
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 32,
                                        marginBottom: 10
                                    },
                                    children: item.icon
                                }, void 0, false, {
                                    fileName: "[project]/components/Achievements.jsx",
                                    lineNumber: 26,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "baseline",
                                        gap: 8,
                                        marginBottom: 4
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: "'Playfair Display', serif",
                                                fontSize: "2.4rem",
                                                fontWeight: 800,
                                                color: "#f5b042",
                                                lineHeight: 1
                                            },
                                            children: item.metric
                                        }, void 0, false, {
                                            fileName: "[project]/components/Achievements.jsx",
                                            lineNumber: 28,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: "'Outfit', sans-serif",
                                                fontSize: 13,
                                                fontWeight: 700,
                                                color: "#0a1c30",
                                                textTransform: "uppercase",
                                                letterSpacing: 1
                                            },
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/components/Achievements.jsx",
                                            lineNumber: 29,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Achievements.jsx",
                                    lineNumber: 27,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontFamily: "'Lora', serif",
                                        fontSize: 14,
                                        color: "#64748b",
                                        lineHeight: 1.6
                                    },
                                    children: item.desc
                                }, void 0, false, {
                                    fileName: "[project]/components/Achievements.jsx",
                                    lineNumber: 31,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, item.label, true, {
                            fileName: "[project]/components/Achievements.jsx",
                            lineNumber: 14,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Achievements.jsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Achievements.jsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Achievements.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_s(Achievements, "GpcLnEGLCRT/LcXgsVwPMCbjDPg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = Achievements;
var _c;
__turbopack_context__.k.register(_c, "Achievements");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Certifications.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Certifications
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionHeader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SectionHeader.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function Certifications() {
    _s();
    const [ref, inView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "certifications",
        ref: ref,
        style: {
            padding: "4rem 24px",
            background: "#f8fafd",
            borderBottom: "1px solid #e8eef6",
            scrollMarginTop: 68
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: 1200,
                margin: "0 auto"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionHeader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    tag: "🎖️ Credentials",
                    title: "Certifications"
                }, void 0, false, {
                    fileName: "[project]/components/Certifications.jsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: 22
                    },
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CERTS"].map((cert, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: "#fff",
                                borderRadius: 22,
                                padding: "1.8rem 2rem",
                                boxShadow: "0 4px 18px rgba(0,0,0,0.04)",
                                border: "1px solid #edf2f7",
                                position: "relative",
                                overflow: "hidden",
                                opacity: inView ? 1 : 0,
                                transform: inView ? "translateY(0)" : "translateY(30px)",
                                transition: `all 0.6s ease ${index * 0.12}s`
                            },
                            onMouseEnter: (e)=>{
                                e.currentTarget.style.transform = "translateY(-5px)";
                                e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.1), 0 0 0 1px ${cert.accentColor}30`;
                            },
                            onMouseLeave: (e)=>{
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "0 4px 18px rgba(0,0,0,0.04)";
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: 4,
                                        background: `linear-gradient(90deg, ${cert.accentColor}, transparent)`,
                                        borderRadius: 4
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/Certifications.jsx",
                                    lineNumber: 28,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 16,
                                        marginBottom: 16
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: 56,
                                                height: 56,
                                                borderRadius: "50%",
                                                background: `${cert.accentColor}15`,
                                                border: `2px solid ${cert.accentColor}30`,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: 26,
                                                flexShrink: 0
                                            },
                                            children: cert.icon
                                        }, void 0, false, {
                                            fileName: "[project]/components/Certifications.jsx",
                                            lineNumber: 30,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontFamily: "'Outfit', sans-serif",
                                                        fontSize: 11,
                                                        fontWeight: 700,
                                                        color: cert.accentColor,
                                                        letterSpacing: 2,
                                                        textTransform: "uppercase",
                                                        marginBottom: 3
                                                    },
                                                    children: cert.issuer
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Certifications.jsx",
                                                    lineNumber: 34,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontFamily: "'Outfit', sans-serif",
                                                        fontSize: 10,
                                                        background: "#eef2f6",
                                                        color: "#64748b",
                                                        padding: "2px 10px",
                                                        borderRadius: 20,
                                                        letterSpacing: 1
                                                    },
                                                    children: cert.level
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Certifications.jsx",
                                                    lineNumber: 35,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Certifications.jsx",
                                            lineNumber: 33,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Certifications.jsx",
                                    lineNumber: 29,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontFamily: "'Playfair Display', serif",
                                        fontSize: "1.2rem",
                                        fontWeight: 800,
                                        color: "#0a1c30",
                                        marginBottom: 14,
                                        lineHeight: 1.3
                                    },
                                    children: cert.name
                                }, void 0, false, {
                                    fileName: "[project]/components/Certifications.jsx",
                                    lineNumber: 38,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: 7
                                    },
                                    children: cert.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: "'Outfit', sans-serif",
                                                fontSize: 11,
                                                fontWeight: 600,
                                                color: cert.accentColor,
                                                background: `${cert.accentColor}10`,
                                                border: `1px solid ${cert.accentColor}25`,
                                                padding: "3px 10px",
                                                borderRadius: 20
                                            },
                                            children: tag
                                        }, tag, false, {
                                            fileName: "[project]/components/Certifications.jsx",
                                            lineNumber: 41,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/Certifications.jsx",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, cert.name, true, {
                            fileName: "[project]/components/Certifications.jsx",
                            lineNumber: 14,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Certifications.jsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginTop: 48
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: "'Outfit', sans-serif",
                                fontSize: 13,
                                color: "#64748b",
                                textTransform: "uppercase",
                                letterSpacing: 2,
                                fontWeight: 700,
                                marginBottom: 18
                            },
                            children: "Course certificates from public assets"
                        }, void 0, false, {
                            fileName: "[project]/components/Certifications.jsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                                gap: 20
                            },
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COURSE_CERTS"].map((cert)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: cert.image,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    style: {
                                        textDecoration: "none",
                                        color: "inherit"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: "#fff",
                                            borderRadius: 24,
                                            overflow: "hidden",
                                            boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                                            border: "1px solid #e5e7eb",
                                            minHeight: 360,
                                            display: "flex",
                                            flexDirection: "column"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: cert.image,
                                                alt: cert.name,
                                                style: {
                                                    width: "100%",
                                                    height: 220,
                                                    objectFit: "cover"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/Certifications.jsx",
                                                lineNumber: 56,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    padding: "1.4rem"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontFamily: "'Outfit', sans-serif",
                                                            fontSize: 11,
                                                            color: "#94a3b8",
                                                            letterSpacing: 1.5,
                                                            textTransform: "uppercase",
                                                            marginBottom: 10
                                                        },
                                                        children: cert.issuer
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Certifications.jsx",
                                                        lineNumber: 58,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        style: {
                                                            fontFamily: "'Playfair Display', serif",
                                                            fontSize: "1.1rem",
                                                            fontWeight: 800,
                                                            color: "#0a1c30",
                                                            marginBottom: 10,
                                                            lineHeight: 1.3
                                                        },
                                                        children: cert.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Certifications.jsx",
                                                        lineNumber: 59,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontFamily: "'Outfit', sans-serif",
                                                            fontSize: 13,
                                                            color: "#475569",
                                                            marginBottom: 8
                                                        },
                                                        children: cert.date
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Certifications.jsx",
                                                        lineNumber: 60,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontFamily: "'Outfit', sans-serif",
                                                            fontSize: 12,
                                                            color: "#64748b"
                                                        },
                                                        children: cert.hours
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Certifications.jsx",
                                                        lineNumber: 61,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Certifications.jsx",
                                                lineNumber: 57,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Certifications.jsx",
                                        lineNumber: 55,
                                        columnNumber: 17
                                    }, this)
                                }, cert.name, false, {
                                    fileName: "[project]/components/Certifications.jsx",
                                    lineNumber: 54,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Certifications.jsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Certifications.jsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Certifications.jsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Certifications.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_s(Certifications, "GpcLnEGLCRT/LcXgsVwPMCbjDPg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = Certifications;
var _c;
__turbopack_context__.k.register(_c, "Certifications");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Background.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Background
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionHeader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SectionHeader.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function Background() {
    _s();
    const [ref, inView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "background",
        ref: ref,
        style: {
            padding: "4rem 24px",
            borderBottom: "1px solid #e8eef6",
            scrollMarginTop: 68
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: 1200,
                margin: "0 auto"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionHeader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    tag: "🎓 Background",
                    title: "Education & Interests"
                }, void 0, false, {
                    fileName: "[project]/components/Background.jsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 20,
                        opacity: inView ? 1 : 0,
                        transition: "opacity 0.8s ease"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: "1 1 300px",
                                background: "#fff",
                                borderRadius: 20,
                                padding: "2rem",
                                boxShadow: "0 4px 18px rgba(0,0,0,0.04)",
                                border: "1px solid #edf2f7"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontFamily: "'Outfit', sans-serif",
                                        fontWeight: 700,
                                        fontSize: "1.1rem",
                                        color: "#0a1c30",
                                        marginBottom: 16,
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 10
                                    },
                                    children: "🏫 Education"
                                }, void 0, false, {
                                    fileName: "[project]/components/Background.jsx",
                                    lineNumber: 14,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontFamily: "'Playfair Display', serif",
                                        fontSize: "1.25rem",
                                        fontWeight: 700,
                                        color: "#0a1c30",
                                        marginBottom: 6
                                    },
                                    children: "Bachelor of Computer Science & Technology"
                                }, void 0, false, {
                                    fileName: "[project]/components/Background.jsx",
                                    lineNumber: 15,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontFamily: "'Lora', serif",
                                        fontSize: 15,
                                        color: "#64748b",
                                        marginBottom: 8
                                    },
                                    children: "Himachal Pradesh University, Shimla, India"
                                }, void 0, false, {
                                    fileName: "[project]/components/Background.jsx",
                                    lineNumber: 16,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: "'Outfit', sans-serif",
                                        fontSize: 12,
                                        fontWeight: 700,
                                        color: "#f5b042",
                                        letterSpacing: 1,
                                        textTransform: "uppercase"
                                    },
                                    children: "July 2011"
                                }, void 0, false, {
                                    fileName: "[project]/components/Background.jsx",
                                    lineNumber: 17,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Background.jsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: "1 1 300px",
                                background: "#fff",
                                borderRadius: 20,
                                padding: "2rem",
                                boxShadow: "0 4px 18px rgba(0,0,0,0.04)",
                                border: "1px solid #edf2f7"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontFamily: "'Outfit', sans-serif",
                                        fontWeight: 700,
                                        fontSize: "1.1rem",
                                        color: "#0a1c30",
                                        marginBottom: 16,
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 10
                                    },
                                    children: "💡 Professional Interests"
                                }, void 0, false, {
                                    fileName: "[project]/components/Background.jsx",
                                    lineNumber: 20,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: 10
                                    },
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INTERESTS"].map((interest)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                background: "#f4f7fc",
                                                borderRadius: 30,
                                                padding: "6px 16px",
                                                fontSize: 13,
                                                fontFamily: "'Outfit', sans-serif",
                                                fontWeight: 500,
                                                color: "#334155"
                                            },
                                            children: interest
                                        }, interest, false, {
                                            fileName: "[project]/components/Background.jsx",
                                            lineNumber: 23,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/Background.jsx",
                                    lineNumber: 21,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Background.jsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: "1 1 300px",
                                background: "linear-gradient(135deg, #0a1c30, #0f3352)",
                                borderRadius: 20,
                                padding: "2rem",
                                color: "#fff"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontFamily: "'Outfit', sans-serif",
                                        fontWeight: 700,
                                        fontSize: "1.1rem",
                                        color: "#f5b042",
                                        marginBottom: 16
                                    },
                                    children: "📊 At a Glance"
                                }, void 0, false, {
                                    fileName: "[project]/components/Background.jsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this),
                                [
                                    [
                                        "12+",
                                        "Years of experience"
                                    ],
                                    [
                                        "99%",
                                        "Automated test coverage"
                                    ],
                                    [
                                        "$40K",
                                        "Monthly cloud savings achieved"
                                    ],
                                    [
                                        "3",
                                        "Continents worked across"
                                    ]
                                ].map(([value, description])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            marginBottom: 12,
                                            paddingBottom: 12,
                                            borderBottom: "1px solid rgba(255,255,255,0.08)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: "'Playfair Display', serif",
                                                    fontSize: "1.4rem",
                                                    fontWeight: 800,
                                                    color: "#f5b042"
                                                },
                                                children: value
                                            }, void 0, false, {
                                                fileName: "[project]/components/Background.jsx",
                                                lineNumber: 38,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: "'Lora', serif",
                                                    fontSize: 14,
                                                    color: "rgba(240,248,255,0.7)",
                                                    textAlign: "right",
                                                    maxWidth: 180
                                                },
                                                children: description
                                            }, void 0, false, {
                                                fileName: "[project]/components/Background.jsx",
                                                lineNumber: 39,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, value, true, {
                                        fileName: "[project]/components/Background.jsx",
                                        lineNumber: 37,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Background.jsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Background.jsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Background.jsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Background.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_s(Background, "GpcLnEGLCRT/LcXgsVwPMCbjDPg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = Background;
var _c;
__turbopack_context__.k.register(_c, "Background");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/BlogPage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionHeader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SectionHeader.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function BlogPage({ setPage }) {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BlogPage.useEffect": ()=>{
            const timeout = setTimeout({
                "BlogPage.useEffect.timeout": ()=>setMounted(true)
            }["BlogPage.useEffect.timeout"], 80);
            return ({
                "BlogPage.useEffect": ()=>clearTimeout(timeout)
            })["BlogPage.useEffect"];
        }
    }["BlogPage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    background: "linear-gradient(135deg, #0a1c30 0%, #0f3352 60%, #0a1c30 100%)",
                    padding: "3rem 24px 3.5rem",
                    borderBottom: "4px solid #f5b042",
                    position: "relative",
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            inset: 0,
                            backgroundImage: "linear-gradient(rgba(245,176,66,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(245,176,66,0.04) 1px, transparent 1px)",
                            backgroundSize: "48px 48px",
                            pointerEvents: "none"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/BlogPage.jsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: 1200,
                            margin: "0 auto",
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: "2rem",
                            position: "relative",
                            zIndex: 1
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    opacity: mounted ? 1 : 0,
                                    transform: mounted ? "translateY(0)" : "translateY(24px)",
                                    transition: "all 0.7s ease"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: "'Outfit', sans-serif",
                                            fontSize: 11,
                                            color: "#f5b042",
                                            letterSpacing: 3.5,
                                            textTransform: "uppercase",
                                            fontWeight: 700,
                                            marginBottom: 12
                                        },
                                        children: "✍️ Blog & Insights"
                                    }, void 0, false, {
                                        fileName: "[project]/components/BlogPage.jsx",
                                        lineNumber: 19,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        style: {
                                            fontFamily: "'Playfair Display', serif",
                                            fontSize: "clamp(2rem, 5vw, 3rem)",
                                            fontWeight: 800,
                                            color: "#fff",
                                            marginBottom: 12
                                        },
                                        children: [
                                            "Writings on Tech,",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/BlogPage.jsx",
                                                lineNumber: 21,
                                                columnNumber: 32
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: "#f5b042"
                                                },
                                                children: "Leadership & Engineering"
                                            }, void 0, false, {
                                                fileName: "[project]/components/BlogPage.jsx",
                                                lineNumber: 21,
                                                columnNumber: 38
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/BlogPage.jsx",
                                        lineNumber: 20,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: "'Lora', serif",
                                            fontSize: 15,
                                            color: "rgba(240,248,255,0.65)",
                                            maxWidth: 520,
                                            lineHeight: 1.75
                                        },
                                        children: "Exploring the intersections of modern web development, AI in FinTech, and the evolving role of engineers. Published on Medium."
                                    }, void 0, false, {
                                        fileName: "[project]/components/BlogPage.jsx",
                                        lineNumber: 23,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/BlogPage.jsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: "rgba(255,255,255,0.06)",
                                    backdropFilter: "blur(10px)",
                                    border: "1px solid rgba(245,176,66,0.2)",
                                    borderRadius: 20,
                                    padding: "1.6rem 2rem",
                                    opacity: mounted ? 1 : 0,
                                    transition: "opacity 1s ease 0.3s"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            setPage("home");
                                            window.scrollTo({
                                                top: 0
                                            });
                                        },
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 8,
                                            background: "none",
                                            border: "1px solid rgba(245,176,66,0.35)",
                                            borderRadius: 30,
                                            padding: "10px 20px",
                                            color: "#f5b042",
                                            fontFamily: "'Outfit', sans-serif",
                                            fontSize: 13,
                                            fontWeight: 600,
                                            cursor: "pointer",
                                            marginBottom: 14,
                                            transition: "all 0.2s"
                                        },
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.background = "rgba(245,176,66,0.1)";
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.background = "none";
                                        },
                                        children: "← Back to Portfolio"
                                    }, void 0, false, {
                                        fileName: "[project]/components/BlogPage.jsx",
                                        lineNumber: 28,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: "'Outfit', sans-serif",
                                            fontSize: 12,
                                            color: "rgba(240,248,255,0.5)",
                                            letterSpacing: 0.5
                                        },
                                        children: "📝 Medium: @thejspythonguy"
                                    }, void 0, false, {
                                        fileName: "[project]/components/BlogPage.jsx",
                                        lineNumber: 33,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: "'Outfit', sans-serif",
                                            fontSize: 12,
                                            color: "rgba(240,248,255,0.5)",
                                            marginTop: 6
                                        },
                                        children: "📧 thejspythonguy@gmail.com"
                                    }, void 0, false, {
                                        fileName: "[project]/components/BlogPage.jsx",
                                        lineNumber: 34,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/BlogPage.jsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/BlogPage.jsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/BlogPage.jsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 860,
                    margin: "3rem auto",
                    padding: "0 24px"
                },
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BLOGS"].map((blog)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: "#fff",
                                borderRadius: 24,
                                padding: "2rem 2.2rem",
                                marginBottom: "2rem",
                                boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
                                border: "1px solid #edf2f7",
                                transition: "all 0.25s"
                            },
                            onMouseEnter: (e)=>{
                                e.currentTarget.style.transform = "translateY(-4px)";
                                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.1)";
                            },
                            onMouseLeave: (e)=>{
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.05)";
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        height: 4,
                                        background: `linear-gradient(90deg, ${blog.color}, transparent)`,
                                        borderRadius: 4,
                                        marginBottom: 20
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/BlogPage.jsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontFamily: "'Playfair Display', serif",
                                        fontSize: "1.55rem",
                                        fontWeight: 800,
                                        color: "#0a1c30",
                                        marginBottom: 12,
                                        lineHeight: 1.3
                                    },
                                    children: blog.title
                                }, void 0, false, {
                                    fileName: "[project]/components/BlogPage.jsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: 14,
                                        marginBottom: 16,
                                        alignItems: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: "'Outfit', sans-serif",
                                                fontSize: 12,
                                                color: "#94a3b8"
                                            },
                                            children: [
                                                "📅 ",
                                                blog.date
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BlogPage.jsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: "'Outfit', sans-serif",
                                                fontSize: 12,
                                                color: "#94a3b8"
                                            },
                                            children: [
                                                "⏱️ ",
                                                blog.readTime
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BlogPage.jsx",
                                            lineNumber: 56,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: "'Outfit', sans-serif",
                                                fontSize: 12,
                                                color: "#94a3b8"
                                            },
                                            children: "📰 Medium"
                                        }, void 0, false, {
                                            fileName: "[project]/components/BlogPage.jsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, this),
                                        blog.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: "'Outfit', sans-serif",
                                                    fontSize: 11,
                                                    fontWeight: 600,
                                                    color: blog.color,
                                                    background: `${blog.color}10`,
                                                    border: `1px solid ${blog.color}25`,
                                                    padding: "2px 10px",
                                                    borderRadius: 20
                                                },
                                                children: tag
                                            }, tag, false, {
                                                fileName: "[project]/components/BlogPage.jsx",
                                                lineNumber: 59,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/BlogPage.jsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontFamily: "'Lora', serif",
                                        fontSize: 15,
                                        color: "#475569",
                                        lineHeight: 1.75,
                                        marginBottom: 20
                                    },
                                    children: blog.excerpt
                                }, void 0, false, {
                                    fileName: "[project]/components/BlogPage.jsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: blog.url,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    style: {
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: 8,
                                        border: `2px solid ${blog.color}`,
                                        color: blog.color,
                                        padding: "10px 22px",
                                        borderRadius: 30,
                                        fontFamily: "'Outfit', sans-serif",
                                        fontSize: 13,
                                        fontWeight: 700,
                                        textDecoration: "none",
                                        transition: "all 0.2s"
                                    },
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.background = blog.color;
                                        e.currentTarget.style.color = "#fff";
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.background = "transparent";
                                        e.currentTarget.style.color = blog.color;
                                    },
                                    children: "Read on Medium ↗"
                                }, void 0, false, {
                                    fileName: "[project]/components/BlogPage.jsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, blog.title, true, {
                            fileName: "[project]/components/BlogPage.jsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: "center",
                            padding: "2rem 0 3rem",
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: 14,
                            color: "#94a3b8"
                        },
                        children: "📡 More technical deep-dives coming soon — follow on Medium for updates."
                    }, void 0, false, {
                        fileName: "[project]/components/BlogPage.jsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/BlogPage.jsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/BlogPage.jsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_s(BlogPage, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
_c = BlogPage;
var _c;
__turbopack_context__.k.register(_c, "BlogPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Footer.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        style: {
            background: "#0a1c30",
            color: "rgba(200,220,235,0.75)",
            textAlign: "center",
            padding: "2rem 24px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 18,
                    color: "#f5b042",
                    fontWeight: 700,
                    marginBottom: 8
                },
                children: "Shailender Singh"
            }, void 0, false, {
                fileName: "[project]/components/Footer.jsx",
                lineNumber: 4,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 13,
                    marginBottom: 8
                },
                children: "Senior Full Stack Engineer & Tech Lead · Jacksonville, FL"
            }, void 0, false, {
                fileName: "[project]/components/Footer.jsx",
                lineNumber: 5,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 12,
                    opacity: 0.5,
                    marginTop: 12
                },
                children: "🎖️ FinTech Certified · MongoDB Certified · 12+ Years in FinTech & AI/ML"
            }, void 0, false, {
                fileName: "[project]/components/Footer.jsx",
                lineNumber: 6,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Footer.jsx",
        lineNumber: 3,
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
"[project]/index.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Navbar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Hero.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Skills$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Skills.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Experience$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Experience.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Achievements$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Achievements.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Certifications$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Certifications.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Background$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Background.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BlogPage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/BlogPage.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Footer.jsx [app-client] (ecmascript)");
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
function App() {
    _s();
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("home");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;800;900&family=Outfit:wght@300;400;500;600;700&family=Lora:ital,wght@0,400;0,600;1,400&display=swap";
            document.head.appendChild(link);
            return ({
                "App.useEffect": ()=>document.head.removeChild(link)
            })["App.useEffect"];
        }
    }["App.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: "#f4f8fc",
            minHeight: "100vh",
            fontFamily: "'Outfit', sans-serif"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        * { box-sizing: border-box; margin: 0; padding: 0; }
        button:focus { outline: none; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #f4f8fc; }
        ::-webkit-scrollbar-thumb { background: #f5b042; border-radius: 4px; }
      `
            }, void 0, false, {
                fileName: "[project]/index.jsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                page: page,
                setPage: setPage
            }, void 0, false, {
                fileName: "[project]/index.jsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            page === "blogs" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BlogPage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                setPage: setPage
            }, void 0, false, {
                fileName: "[project]/index.jsx",
                lineNumber: 35,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        setPage: setPage
                    }, void 0, false, {
                        fileName: "[project]/index.jsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Skills$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/index.jsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Experience$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/index.jsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Achievements$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/index.jsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Certifications$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/index.jsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Background$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/index.jsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/index.jsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/index.jsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(App, "C76K3mZ9v0c7/uoML3l/w9VinEM=");
_c = App;
var _c;
__turbopack_context__.k.register(_c, "App");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0r84e5_._.js.map