module.exports = [
"[project]/Desktop/claw-decode/site/src/components/PetZoo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PetZoo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/claw-decode/site/node_modules/.pnpm/next@15.5.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/claw-decode/site/node_modules/.pnpm/next@15.5.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const PETS = [
    {
        name: "capybara",
        rarity: "legendary",
        stars: 5,
        frames: [
            [
                "  n______n  ",
                " ( o    o ) ",
                " (   oo   ) ",
                '  `------´  '
            ],
            [
                "  n______n  ",
                " ( o    o ) ",
                " (   Oo   ) ",
                '  `------´  '
            ]
        ]
    },
    {
        name: "cactus",
        rarity: "legendary",
        stars: 5,
        frames: [
            [
                " n  ____  n ",
                " | |o  o| | ",
                " |_|    |_| ",
                "   |    |   "
            ],
            [
                "    ____    ",
                " n |o  o| n ",
                " |_|    |_| ",
                "   |    |   "
            ]
        ]
    },
    {
        name: "robot",
        rarity: "legendary",
        stars: 5,
        frames: [
            [
                "   .[||].   ",
                "  [ o  o ]  ",
                "  [ ==== ]  ",
                '  `------´  '
            ],
            [
                "   .[||].   ",
                "  [ o  o ]  ",
                "  [ -==- ]  ",
                '  `------´  '
            ]
        ]
    },
    {
        name: "ghost",
        rarity: "epic",
        stars: 4,
        frames: [
            [
                "   .----.   ",
                "  / o  o \\  ",
                "  |      |  ",
                "  ~`~``~`~  "
            ],
            [
                "   .----.   ",
                "  / o  o \\  ",
                "  |      |  ",
                "  `~`~~`~`  "
            ]
        ]
    },
    {
        name: "axolotl",
        rarity: "epic",
        stars: 4,
        frames: [
            [
                "}~(______)~{",
                "}~(o .. o)~{",
                "  ( .--. )  ",
                "  (_/  \\_)  "
            ],
            [
                "~}(______){~",
                "~}(o .. o){~",
                "  ( .--. )  ",
                "  (_/  \\_)  "
            ]
        ]
    },
    {
        name: "penguin",
        rarity: "rare",
        stars: 3,
        frames: [
            [
                "  .---.     ",
                "  (o>o)     ",
                " /(   )\\    ",
                '  `---´     '
            ],
            [
                "  .---.     ",
                "  (o>o)     ",
                " |(   )|    ",
                '  `---´     '
            ]
        ]
    },
    {
        name: "turtle",
        rarity: "rare",
        stars: 3,
        frames: [
            [
                "   _,--._   ",
                "  ( o  o )  ",
                " /[______]\\ ",
                '  ``    ``  '
            ],
            [
                "   _,--._   ",
                "  ( o  o )  ",
                " /[______]\\ ",
                '   ``  ``   '
            ]
        ]
    },
    {
        name: "snail",
        rarity: "rare",
        stars: 3,
        frames: [
            [
                " o    .--.  ",
                "  \\  ( @ )  ",
                '   \\_`--´   ',
                "  ~~~~~~~   "
            ],
            [
                "  o   .--.  ",
                "  |  ( @ )  ",
                '   \\_`--´   ',
                "  ~~~~~~~   "
            ]
        ]
    },
    {
        name: "dragon",
        rarity: "uncommon",
        stars: 2,
        frames: [
            [
                "  /^\\  /^\\  ",
                " <  o  o  > ",
                " (   ~~   ) ",
                '  `-vvvv-´  '
            ],
            [
                "  /^\\  /^\\  ",
                " <  o  o  > ",
                " (        ) ",
                '  `-vvvv-´  '
            ]
        ]
    },
    {
        name: "octopus",
        rarity: "uncommon",
        stars: 2,
        frames: [
            [
                "   .----.   ",
                "  ( o  o )  ",
                "  (______)  ",
                "  /\\/\\/\\/\\  "
            ],
            [
                "   .----.   ",
                "  ( o  o )  ",
                "  (______)  ",
                "  \\/\\/\\/\\/  "
            ]
        ]
    },
    {
        name: "owl",
        rarity: "uncommon",
        stars: 2,
        frames: [
            [
                "   /\\  /\\   ",
                "  ((o)(o))  ",
                "  (  ><  )  ",
                '   `----´   '
            ],
            [
                "   /\\  /\\   ",
                "  ((o)(o))  ",
                "  (  ><  )  ",
                "   .----.   "
            ]
        ]
    },
    {
        name: "duck",
        rarity: "common",
        stars: 1,
        frames: [
            [
                "    __      ",
                "  <(o )___  ",
                "   (  ._>   ",
                '    `--´    '
            ],
            [
                "    __      ",
                "  <(o )___  ",
                "   (  ._>   ",
                '    `--´~   '
            ]
        ]
    },
    {
        name: "goose",
        rarity: "common",
        stars: 1,
        frames: [
            [
                "     (o>    ",
                "     ||     ",
                "   _(__)_   ",
                "    ^^^^    "
            ],
            [
                "    (o>     ",
                "     ||     ",
                "   _(__)_   ",
                "    ^^^^    "
            ]
        ]
    },
    {
        name: "blob",
        rarity: "common",
        stars: 1,
        frames: [
            [
                "   .----.   ",
                "  ( o  o )  ",
                "  (      )  ",
                '   `----´   '
            ],
            [
                "  .------.  ",
                " (  o  o  ) ",
                " (        ) ",
                '  `------´  '
            ]
        ]
    },
    {
        name: "cat",
        rarity: "common",
        stars: 1,
        frames: [
            [
                "   /\\_/\\    ",
                "  ( o   o)  ",
                "  (  \u03c9  )   ",
                '  (")_(")   '
            ],
            [
                "   /\\_/\\    ",
                "  ( o   o)  ",
                "  (  \u03c9  )   ",
                '  (")_(")~  '
            ]
        ]
    },
    {
        name: "rabbit",
        rarity: "common",
        stars: 1,
        frames: [
            [
                "   (\\__/)   ",
                "  ( o  o )  ",
                " =(  ..  )= ",
                '  (")__(")  '
            ],
            [
                "   (|__/)   ",
                "  ( o  o )  ",
                " =(  ..  )= ",
                '  (")__(")  '
            ]
        ]
    },
    {
        name: "mushroom",
        rarity: "common",
        stars: 1,
        frames: [
            [
                " .-o-OO-o-. ",
                "(__________)",
                "   |o  o|   ",
                "   |____|   "
            ],
            [
                " .-O-oo-O-. ",
                "(__________)",
                "   |o  o|   ",
                "   |____|   "
            ]
        ]
    },
    {
        name: "chonk",
        rarity: "common",
        stars: 1,
        frames: [
            [
                "  /\\    /\\  ",
                " ( o    o ) ",
                " (   ..   ) ",
                '  `------´  '
            ],
            [
                "  /\\    /|  ",
                " ( o    o ) ",
                " (   ..   ) ",
                '  `------´  '
            ]
        ]
    }
];
const RARITY_STYLES = {
    legendary: "border-yellow-400/40 bg-gradient-to-b from-yellow-50 to-white",
    epic: "border-purple-400/30 bg-gradient-to-b from-purple-50 to-white",
    rare: "border-cyan/30 bg-gradient-to-b from-sky-50 to-white",
    uncommon: "border-green/20 bg-gradient-to-b from-green-50 to-white",
    common: "border-border"
};
const RARITY_TEXT = {
    legendary: "text-yellow-600",
    epic: "text-purple-600",
    rare: "text-cyan",
    uncommon: "text-green",
    common: "text-text3"
};
const STARS = {
    legendary: "\u2605\u2605\u2605\u2605\u2605",
    epic: "\u2605\u2605\u2605\u2605",
    rare: "\u2605\u2605\u2605",
    uncommon: "\u2605\u2605",
    common: "\u2605"
};
const WEIGHTS = {
    common: 60,
    uncommon: 25,
    rare: 10,
    epic: 4,
    legendary: 1
};
function PetCard({ pet }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let f = 0;
        const id = setInterval(()=>{
            f = (f + 1) % pet.frames.length;
            if (ref.current) ref.current.textContent = pet.frames[f].join("\n");
        }, 700 + Math.random() * 500);
        return ()=>clearInterval(id);
    }, [
        pet.frames
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `border rounded-xl p-4 text-center transition-all hover:-translate-y-1 hover:shadow-lg ${RARITY_STYLES[pet.rarity]}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                ref: ref,
                className: `font-mono text-xs leading-snug whitespace-pre min-h-[56px] flex items-center justify-center ${RARITY_TEXT[pet.rarity]}`,
                children: pet.frames[0].join("\n")
            }, void 0, false, {
                fileName: "[project]/Desktop/claw-decode/site/src/components/PetZoo.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "font-mono font-semibold text-sm mt-2 capitalize",
                children: pet.name
            }, void 0, false, {
                fileName: "[project]/Desktop/claw-decode/site/src/components/PetZoo.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `text-xs capitalize ${RARITY_TEXT[pet.rarity]}`,
                children: [
                    pet.rarity,
                    " · ",
                    WEIGHTS[pet.rarity],
                    "% drop"
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/claw-decode/site/src/components/PetZoo.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `text-xs mt-0.5 tracking-widest ${RARITY_TEXT[pet.rarity]}`,
                children: STARS[pet.rarity]
            }, void 0, false, {
                fileName: "[project]/Desktop/claw-decode/site/src/components/PetZoo.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/claw-decode/site/src/components/PetZoo.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
function PetZoo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "pets",
        className: "py-20 bg-surface2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs font-mono font-semibold text-brand uppercase tracking-widest mb-1",
                    children: "Hidden Feature — Buddy System"
                }, void 0, false, {
                    fileName: "[project]/Desktop/claw-decode/site/src/components/PetZoo.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "font-mono text-3xl md:text-4xl font-bold mb-2",
                    children: "ASCII Pet Zoo"
                }, void 0, false, {
                    fileName: "[project]/Desktop/claw-decode/site/src/components/PetZoo.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-text2 max-w-xl mb-3",
                    children: [
                        "18 species, 5 rarity tiers, animated ASCII sprites, hats, and personality stats. All gated behind the ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                            className: "text-brand font-mono text-sm bg-brand-bg px-1.5 py-0.5 rounded",
                            children: "BUDDY"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/claw-decode/site/src/components/PetZoo.tsx",
                            lineNumber: 70,
                            columnNumber: 113
                        }, this),
                        " feature flag."
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/claw-decode/site/src/components/PetZoo.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-text2 text-sm mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "Why this matters:"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/claw-decode/site/src/components/PetZoo.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        " This isn't a joke feature. Each companion has ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                            className: "font-mono text-xs",
                            children: "CompanionBones"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/claw-decode/site/src/components/PetZoo.tsx",
                            lineNumber: 73,
                            columnNumber: 97
                        }, this),
                        " (species, eye, hat, shiny, stats) derived from ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                            className: "font-mono text-xs",
                            children: "hash(userId)"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/claw-decode/site/src/components/PetZoo.tsx",
                            lineNumber: 73,
                            columnNumber: 202
                        }, this),
                        ", and a ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                            className: "font-mono text-xs",
                            children: "CompanionSoul"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/claw-decode/site/src/components/PetZoo.tsx",
                            lineNumber: 74,
                            columnNumber: 17
                        }, this),
                        " (name, personality) generated by the model on first hatch. Species names are encoded via ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                            className: "font-mono text-xs",
                            children: "String.fromCharCode()"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/claw-decode/site/src/components/PetZoo.tsx",
                            lineNumber: 75,
                            columnNumber: 41
                        }, this),
                        ' because "Capybara" collides with an internal model codename scanner.'
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/claw-decode/site/src/components/PetZoo.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3",
                    children: PETS.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PetCard, {
                            pet: p
                        }, p.name, false, {
                            fileName: "[project]/Desktop/claw-decode/site/src/components/PetZoo.tsx",
                            lineNumber: 79,
                            columnNumber: 26
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/claw-decode/site/src/components/PetZoo.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 grid md:grid-cols-3 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white border border-border rounded-xl p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs font-mono font-semibold text-brand uppercase tracking-widest mb-2",
                                    children: "Hats"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/claw-decode/site/src/components/PetZoo.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-1.5",
                                    children: [
                                        "\\^^^/ Crown",
                                        "[___] Top Hat",
                                        "-+- Propeller",
                                        "( ) Halo",
                                        "/^\\ Wizard",
                                        "(___) Beanie",
                                        ",> Tiny Duck"
                                    ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-xs px-2 py-1 bg-surface2 border border-border rounded",
                                            children: h
                                        }, h, false, {
                                            fileName: "[project]/Desktop/claw-decode/site/src/components/PetZoo.tsx",
                                            lineNumber: 88,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/claw-decode/site/src/components/PetZoo.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/claw-decode/site/src/components/PetZoo.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white border border-border rounded-xl p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs font-mono font-semibold text-brand uppercase tracking-widest mb-2",
                                    children: "Eye Variants"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/claw-decode/site/src/components/PetZoo.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3 text-xl",
                                    children: [
                                        "·",
                                        "✦",
                                        "×",
                                        "◉",
                                        "@",
                                        "°"
                                    ].map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-9 h-9 flex items-center justify-center bg-surface2 border border-border rounded-lg",
                                            children: e
                                        }, e, false, {
                                            fileName: "[project]/Desktop/claw-decode/site/src/components/PetZoo.tsx",
                                            lineNumber: 96,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/claw-decode/site/src/components/PetZoo.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/claw-decode/site/src/components/PetZoo.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white border border-border rounded-xl p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs font-mono font-semibold text-brand uppercase tracking-widest mb-2",
                                    children: "Companion Stats"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/claw-decode/site/src/components/PetZoo.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-1.5",
                                    children: [
                                        "DEBUGGING",
                                        "PATIENCE",
                                        "CHAOS",
                                        "WISDOM",
                                        "SNARK"
                                    ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-xs px-2 py-1 bg-green-bg text-green border border-green/15 rounded",
                                            children: s
                                        }, s, false, {
                                            fileName: "[project]/Desktop/claw-decode/site/src/components/PetZoo.tsx",
                                            lineNumber: 104,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/claw-decode/site/src/components/PetZoo.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/claw-decode/site/src/components/PetZoo.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/claw-decode/site/src/components/PetZoo.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 bg-code-bg text-code-text rounded-xl p-5 font-mono text-xs leading-relaxed relative overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "absolute top-2 right-3 text-[10px] text-text3 uppercase tracking-widest",
                            children: "buddy/prompt.ts"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/claw-decode/site/src/components/PetZoo.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        `A small [species] named [name] sits beside the user's input box and
occasionally comments in a speech bubble. You're not [name] — it's
a separate watcher.

When the user addresses [name] directly (by name), its bubble will answer.
Your job in that moment is to stay out of the way: respond in ONE line or
less, or just answer any part of the message meant for you.`
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/claw-decode/site/src/components/PetZoo.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/claw-decode/site/src/components/PetZoo.tsx",
            lineNumber: 66,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/claw-decode/site/src/components/PetZoo.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/claw-decode/site/src/components/Secrets.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Secrets
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/claw-decode/site/node_modules/.pnpm/next@15.5.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/claw-decode/site/node_modules/.pnpm/next@15.5.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const SECRETS = [
    {
        n: "01",
        t: "It's an Agent OS, Not a CLI",
        tag: "architecture",
        p: "Process management, IPC via Unix sockets, scheduled cron jobs, a markdown file system, and 43 user-space tools.",
        d: "The codebase reveals infrastructure comparable to an operating system: process management (6 task types including LocalMainSession, LocalAgentTask, RemoteAgentTask), inter-process communication (SendMessage via Unix Domain Sockets for local, Bridge protocol for cross-machine), scheduled jobs (ScheduleCron), a file system (memdir with ENTRYPOINT.md index), and user-space applications (43 tools). This isn't a chat wrapper — it's a full agent runtime."
    },
    {
        n: "02",
        t: "Memory is Just Markdown Files",
        tag: "memdir",
        p: "No RAG. No vector embeddings. No Pinecone. Plain markdown in a directory with an index file under 25KB.",
        d: "The memory system (memdir) stores everything as plain markdown files with a ENTRYPOINT.md index. The index must stay under 25KB with one-line entries under 150 characters each. Memory types: user (role/preferences), feedback (corrections), project (ongoing work), reference (external pointers). The sophistication is in Dream Mode's 4-phase consolidation — merge, fix relative dates, delete contradictions, prune stale pointers."
    },
    {
        n: "03",
        t: "Anthropic Uses Claude on Open Source",
        tag: "undercover",
        p: "Undercover mode automatically activates on public repos. There is NO force-OFF switch. Default is always ON.",
        d: "The undercover system (src/utils/undercover.ts) auto-activates when getRepoClassCached() !== 'internal'. It strips Co-Authored-By lines, model codenames, and any hint of AI involvement. The code comment says: \"Safe default is ON — Claude may push to public remotes from a CWD that isn't itself a git checkout (e.g. /tmp crash repro).\" This means every public PR from an Anthropic employee might have been AI-assisted without anyone knowing."
    },
    {
        n: "04",
        t: "Internal Model Codenames Leaked",
        tag: "models",
        p: "Capybara, Tengu, Numbat. Plus unreleased versions opus-4-7, sonnet-4-8.",
        d: "Three codenames found: Capybara (encoded via String.fromCharCode to avoid build scanners that grep for it), Tengu (feature flag prefix: tengu_kairos_cron, tengu_hive_evidence), Numbat (\"Remove this section when we launch numbat\" in prompts.ts). The undercover prompt explicitly lists these as forbidden terms. Unreleased model strings: claude-opus-4-7, claude-sonnet-4-8."
    },
    {
        n: "05",
        t: "The Virtual Pet is Real Engineering",
        tag: "buddy",
        p: "18 species with weighted rarity (1% legendary), ASCII animations, 7 hat types, 6 eye variants, 5 personality stats.",
        d: "CompanionBones (species, eye, hat, shiny, stats) are derived from hash(userId) — deterministic, not random. CompanionSoul (name, personality) is generated by the model on first hatch and stored in config. Rarity weights: common 60, uncommon 25, rare 10, epic 4, legendary 1. Stats: DEBUGGING, PATIENCE, CHAOS, WISDOM, SNARK. The pet \"watches\" your conversation and comments in a speech bubble."
    },
    {
        n: "06",
        t: "It Dreams While You're Away",
        tag: "dream",
        p: "4-phase memory consolidation during idle: Orient → Gather → Consolidate → Prune.",
        d: "Dream Mode (src/services/autoDream/consolidationPrompt.ts) runs when idle. Phase 1: ls memory dir, read index. Phase 2: check daily logs, grep JSONL transcripts narrowly. Phase 3: merge new into existing, convert relative dates to absolute, delete contradictions. Phase 4: keep index under 25KB, remove stale pointers. The prompt says: \"Don't exhaustively read transcripts. Look only for things you already suspect matter.\""
    },
    {
        n: "07",
        t: "KAIROS: The Proactive Assistant",
        tag: "kairos",
        p: "An unreleased system where Claude initiates conversations, runs scheduled tasks, and sends messages unprompted.",
        d: "KAIROS (behind the KAIROS feature flag) enables proactive behavior via BriefTool and SendUserMessage. Combined with ScheduleCron and RemoteTrigger, Claude can run tasks on a schedule, monitor things, and reach out to the user. Related flags: KAIROS_BRIEF (partial), PROACTIVE (earlier iteration), AGENT_TRIGGERS (remote API). This is Claude evolving from a tool you use into an assistant that works alongside you."
    },
    {
        n: "08",
        t: "Internal Build Has Stricter Rules",
        tag: "internal",
        p: "\"Default to NO comments.\" \"≤25 words between tool calls.\" Mandatory verification for 3+ file edits.",
        d: "The internal build (USER_TYPE === 'ant') adds: ≤25 words between tool calls, ≤100 words final responses, \"default to NO comments — only add when the WHY is non-obvious\", mandatory verification agent for 3+ file edits, \"never claim all tests pass when output shows failures\", internal-only skills (/commit, /simplify, /commit-push-pr). This is why Claude Code feels concise — internally they enforce even stricter limits."
    },
    {
        n: "09",
        t: "Species Names Are Obfuscated",
        tag: "obfuscation",
        p: "All 18 species encoded via String.fromCharCode() hex because Capybara collides with a model codename scanner.",
        d: "From types.ts: \"One species name collides with a model-codename canary in excluded-strings.txt. The check greps build output (not source), so runtime-constructing the value keeps the literal out of the bundle while the check stays armed for the actual codename.\" Example: capybara = String.fromCharCode(0x63, 0x61, 0x70, 0x79, 0x62, 0x61, 0x72, 0x61). ALL 18 species are encoded this way for uniformity."
    },
    {
        n: "10",
        t: "Multi-Agent Teams via Shared Tasks",
        tag: "coordinator",
        p: "Agents coordinate through shared task lists, not direct calls. Role-based: read-only (Explore, Plan) vs full-capability.",
        d: "TeamCreate creates a team with a shared task list. TaskCreate/TaskGet/TaskUpdate/TaskOutput provide CRUD. Agents are role-based — read-only agents (Explore, Plan) physically cannot break your code. Communication: SendMessage over Unix Domain Sockets (uds:/path/to.sock for local) or Bridge protocol (bridge:session_01AbCd for cross-machine). Messages arrive as <cross-session-message> XML tags. Discovery via ListPeers."
    }
];
function Secrets() {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "secrets",
        className: "py-20 bg-surface2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs font-mono font-semibold text-brand uppercase tracking-widest mb-1",
                    children: "Key Findings"
                }, void 0, false, {
                    fileName: "[project]/Desktop/claw-decode/site/src/components/Secrets.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "font-mono text-3xl md:text-4xl font-bold mb-2",
                    children: "10 Biggest Secrets"
                }, void 0, false, {
                    fileName: "[project]/Desktop/claw-decode/site/src/components/Secrets.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-text2 mb-8",
                    children: "Click any card to expand the full finding with source code evidence."
                }, void 0, false, {
                    fileName: "[project]/Desktop/claw-decode/site/src/components/Secrets.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 gap-3",
                    children: SECRETS.map((s)=>{
                        const isOpen = open === s.n;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `bg-white border rounded-xl overflow-hidden cursor-pointer transition-all hover:shadow-md ${isOpen ? "border-brand shadow-md" : "border-border"}`,
                            onClick: ()=>setOpen(isOpen ? null : s.n),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 mb-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono text-xs text-brand/50",
                                                                children: s.n
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/claw-decode/site/src/components/Secrets.tsx",
                                                                lineNumber: 57,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono text-[10px] px-1.5 py-0.5 bg-brand-bg text-brand rounded",
                                                                children: s.tag
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/claw-decode/site/src/components/Secrets.tsx",
                                                                lineNumber: 58,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/claw-decode/site/src/components/Secrets.tsx",
                                                        lineNumber: 56,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-mono font-bold text-sm",
                                                        children: s.t
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/claw-decode/site/src/components/Secrets.tsx",
                                                        lineNumber: 60,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-text2 text-sm mt-1",
                                                        children: s.p
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/claw-decode/site/src/components/Secrets.tsx",
                                                        lineNumber: 61,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/claw-decode/site/src/components/Secrets.tsx",
                                                lineNumber: 55,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-text3 transition-transform text-xs mt-1 ${isOpen ? "rotate-180" : ""}`,
                                                children: "▼"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/claw-decode/site/src/components/Secrets.tsx",
                                                lineNumber: 63,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/claw-decode/site/src/components/Secrets.tsx",
                                        lineNumber: 54,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/claw-decode/site/src/components/Secrets.tsx",
                                    lineNumber: 53,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[500px]" : "max-h-0"}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-5 pb-5 pt-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-t border-border pt-4 text-sm text-text2 leading-relaxed",
                                            children: s.d
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/claw-decode/site/src/components/Secrets.tsx",
                                            lineNumber: 68,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/claw-decode/site/src/components/Secrets.tsx",
                                        lineNumber: 67,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/claw-decode/site/src/components/Secrets.tsx",
                                    lineNumber: 66,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, s.n, true, {
                            fileName: "[project]/Desktop/claw-decode/site/src/components/Secrets.tsx",
                            lineNumber: 50,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/Desktop/claw-decode/site/src/components/Secrets.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/claw-decode/site/src/components/Secrets.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/claw-decode/site/src/components/Secrets.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/claw-decode/site/src/components/Tools.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Tools
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/claw-decode/site/node_modules/.pnpm/next@15.5.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/claw-decode/site/node_modules/.pnpm/next@15.5.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const TOOLS = [
    {
        n: "FileRead",
        c: "Core",
        d: "Read file contents with line ranges"
    },
    {
        n: "FileWrite",
        c: "Core",
        d: "Create or overwrite files"
    },
    {
        n: "FileEdit",
        c: "Core",
        d: "Surgical text replacement"
    },
    {
        n: "Glob",
        c: "Core",
        d: "Pattern-based file search"
    },
    {
        n: "Grep",
        c: "Core",
        d: "Content search across files"
    },
    {
        n: "NotebookEdit",
        c: "Core",
        d: "Jupyter notebook cell editing"
    },
    {
        n: "Bash",
        c: "Exec",
        d: "Shell command execution"
    },
    {
        n: "PowerShell",
        c: "Exec",
        d: "Windows PowerShell"
    },
    {
        n: "REPL",
        c: "Exec",
        d: "Interactive REPL mode",
        int: true
    },
    {
        n: "Agent",
        c: "Agent",
        d: "Spawn subagents with different capabilities"
    },
    {
        n: "TeamCreate",
        c: "Agent",
        d: "Create multi-agent teams"
    },
    {
        n: "TeamDelete",
        c: "Agent",
        d: "Remove teams"
    },
    {
        n: "SendMessage",
        c: "Agent",
        d: "Cross-session agent messaging"
    },
    {
        n: "TaskCreate",
        c: "Task",
        d: "Create coordination tasks"
    },
    {
        n: "TaskGet",
        c: "Task",
        d: "Retrieve task details"
    },
    {
        n: "TaskList",
        c: "Task",
        d: "List all tasks"
    },
    {
        n: "TaskUpdate",
        c: "Task",
        d: "Update task state"
    },
    {
        n: "TaskStop",
        c: "Task",
        d: "Stop running tasks"
    },
    {
        n: "TaskOutput",
        c: "Task",
        d: "Collect task results"
    },
    {
        n: "TodoWrite",
        c: "Task",
        d: "Manage todo items"
    },
    {
        n: "WebSearch",
        c: "Web",
        d: "Search the web"
    },
    {
        n: "WebFetch",
        c: "Web",
        d: "Fetch & extract web content"
    },
    {
        n: "MCPTool",
        c: "MCP",
        d: "Model Context Protocol integration"
    },
    {
        n: "McpAuth",
        c: "MCP",
        d: "MCP authentication"
    },
    {
        n: "ListMcpResources",
        c: "MCP",
        d: "List MCP server resources"
    },
    {
        n: "ReadMcpResource",
        c: "MCP",
        d: "Read MCP resources"
    },
    {
        n: "LSP",
        c: "IDE",
        d: "Language Server Protocol"
    },
    {
        n: "Sleep",
        c: "Session",
        d: "User-interruptible wait"
    },
    {
        n: "ScheduleCron",
        c: "Session",
        d: "Schedule recurring tasks"
    },
    {
        n: "RemoteTrigger",
        c: "Session",
        d: "Manage remote triggers via API"
    },
    {
        n: "SendUserMessage",
        c: "Session",
        d: "Proactive messages (KAIROS)",
        int: true
    },
    {
        n: "EnterPlanMode",
        c: "Nav",
        d: "Switch to planning mode"
    },
    {
        n: "ExitPlanMode",
        c: "Nav",
        d: "Exit planning mode"
    },
    {
        n: "EnterWorktree",
        c: "Nav",
        d: "Create isolated git worktree"
    },
    {
        n: "ExitWorktree",
        c: "Nav",
        d: "Leave git worktree"
    },
    {
        n: "ConfigTool",
        c: "Config",
        d: "Manage configuration"
    },
    {
        n: "SkillTool",
        c: "Config",
        d: "Execute skills"
    },
    {
        n: "ToolSearchTool",
        c: "Config",
        d: "Search available tools"
    },
    {
        n: "DiscoverSkills",
        c: "Config",
        d: "AI-powered skill search",
        int: true
    },
    {
        n: "AskUserQuestion",
        c: "UX",
        d: "Prompt user for input"
    },
    {
        n: "SyntheticOutput",
        c: "UX",
        d: "Generate synthetic tool output"
    },
    {
        n: "BriefTool",
        c: "UX",
        d: "Send KAIROS messages",
        int: true
    },
    {
        n: "TodoWrite",
        c: "UX",
        d: "Write and manage todos"
    }
];
const CAT_COLORS = {
    Core: "bg-sky-100 text-sky-700",
    Exec: "bg-orange-100 text-orange-700",
    Agent: "bg-purple-100 text-purple-700",
    Task: "bg-green-100 text-green-700",
    Web: "bg-emerald-100 text-emerald-700",
    MCP: "bg-yellow-100 text-yellow-700",
    IDE: "bg-blue-100 text-blue-700",
    Session: "bg-red-100 text-red-700",
    Nav: "bg-gray-100 text-gray-600",
    Config: "bg-gray-100 text-gray-600",
    UX: "bg-orange-100 text-orange-600"
};
function Tools() {
    const [q, setQ] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [cat, setCat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const cats = [
        "all",
        ...Array.from(new Set(TOOLS.map((t)=>t.c)))
    ];
    const filtered = TOOLS.filter((t)=>(cat === "all" || t.c === cat) && (!q || t.n.toLowerCase().includes(q.toLowerCase()) || t.d.toLowerCase().includes(q.toLowerCase())));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "tools",
        className: "py-20 bg-surface2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs font-mono font-semibold text-brand uppercase tracking-widest mb-1",
                    children: "Complete Arsenal"
                }, void 0, false, {
                    fileName: "[project]/Desktop/claw-decode/site/src/components/Tools.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "font-mono text-3xl md:text-4xl font-bold mb-2",
                    children: "All 43 Tools"
                }, void 0, false, {
                    fileName: "[project]/Desktop/claw-decode/site/src/components/Tools.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-text2 mb-6",
                    children: "Every capability is a discrete, permission-gated tool. Dashed border = internal only."
                }, void 0, false, {
                    fileName: "[project]/Desktop/claw-decode/site/src/components/Tools.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    value: q,
                    onChange: (e)=>setQ(e.target.value),
                    placeholder: "Search tools...",
                    className: "w-full max-w-sm px-4 py-2.5 bg-white border border-border rounded-lg font-mono text-sm outline-none focus:border-brand transition-colors mb-3"
                }, void 0, false, {
                    fileName: "[project]/Desktop/claw-decode/site/src/components/Tools.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-1.5 mb-5",
                    children: cats.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setCat(c),
                            className: `px-3 py-1 rounded-md font-mono text-xs font-semibold transition-all ${cat === c ? "bg-brand text-white" : "bg-white border border-border text-text2 hover:border-brand hover:text-brand"}`,
                            children: c === "all" ? `All (${TOOLS.length})` : `${c} (${TOOLS.filter((t)=>t.c === c).length})`
                        }, c, false, {
                            fileName: "[project]/Desktop/claw-decode/site/src/components/Tools.tsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/claw-decode/site/src/components/Tools.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2",
                    children: filtered.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `bg-white border rounded-lg px-4 py-3 transition-all hover:shadow-sm ${t.int ? "border-dashed border-purple/30 opacity-75" : "border-border"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-mono font-semibold text-sm",
                                    children: [
                                        t.n,
                                        t.int && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] text-purple font-normal ml-1",
                                            children: "(internal)"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/claw-decode/site/src/components/Tools.tsx",
                                            lineNumber: 97,
                                            columnNumber: 27
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/claw-decode/site/src/components/Tools.tsx",
                                    lineNumber: 95,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-text2 text-xs mt-0.5 mb-2",
                                    children: t.d
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/claw-decode/site/src/components/Tools.tsx",
                                    lineNumber: 99,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `font-mono text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${CAT_COLORS[t.c] || "bg-gray-100 text-gray-600"}`,
                                    children: t.c
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/claw-decode/site/src/components/Tools.tsx",
                                    lineNumber: 100,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, t.n + i, true, {
                            fileName: "[project]/Desktop/claw-decode/site/src/components/Tools.tsx",
                            lineNumber: 94,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/claw-decode/site/src/components/Tools.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/claw-decode/site/src/components/Tools.tsx",
            lineNumber: 75,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/claw-decode/site/src/components/Tools.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/claw-decode/site/src/components/Nav.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Nav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/claw-decode/site/node_modules/.pnpm/next@15.5.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function Nav() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-5 h-14 flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "/",
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/logo.jpg",
                            alt: "Claw Decode",
                            className: "h-8 w-8 rounded-lg object-cover"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/claw-decode/site/src/components/Nav.tsx",
                            lineNumber: 7,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-mono font-bold text-sm tracking-tight",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-brand",
                                    children: "claw"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/claw-decode/site/src/components/Nav.tsx",
                                    lineNumber: 9,
                                    columnNumber: 13
                                }, this),
                                "decode"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/claw-decode/site/src/components/Nav.tsx",
                            lineNumber: 8,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/claw-decode/site/src/components/Nav.tsx",
                    lineNumber: 6,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden md:flex items-center gap-6 text-sm font-medium text-text2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#pets",
                            className: "hover:text-brand transition-colors",
                            children: "Pets"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/claw-decode/site/src/components/Nav.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#undercover",
                            className: "hover:text-brand transition-colors",
                            children: "Undercover"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/claw-decode/site/src/components/Nav.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#secrets",
                            className: "hover:text-brand transition-colors",
                            children: "Secrets"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/claw-decode/site/src/components/Nav.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#tools",
                            className: "hover:text-brand transition-colors",
                            children: "43 Tools"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/claw-decode/site/src/components/Nav.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#patterns",
                            className: "hover:text-brand transition-colors",
                            children: "Patterns"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/claw-decode/site/src/components/Nav.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$claw$2d$decode$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://github.com/fattail4477/claw-decode",
                            target: "_blank",
                            className: "bg-text text-white px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-brand transition-colors",
                            children: "Star on GitHub"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/claw-decode/site/src/components/Nav.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/claw-decode/site/src/components/Nav.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/claw-decode/site/src/components/Nav.tsx",
            lineNumber: 5,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/claw-decode/site/src/components/Nav.tsx",
        lineNumber: 4,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/claw-decode/site/node_modules/.pnpm/next@15.5.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Desktop/claw-decode/site/node_modules/.pnpm/next@15.5.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=Desktop_claw-decode_site_5583ab03._.js.map