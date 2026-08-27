import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as useTheme } from "./quiz-data-CBcWSCpW.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Heart, n as Sun, o as Moon } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-header-yc62pHdz.js
var import_jsx_runtime = require_jsx_runtime();
function SiteHeader() {
	const { theme, toggle } = useTheme();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-3xl items-center justify-between px-5 py-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "group flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid h-8 w-8 place-items-center rounded-full bg-primary/15 text-primary transition-colors group-hover:bg-primary/25",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-4 w-4 fill-current" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-lg font-semibold tracking-tight",
					children: "Goodluck, my Love"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: toggle,
				"aria-label": "Toggle theme",
				className: "grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground",
				children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-4 w-4" })
			})]
		})
	});
}
//#endregion
export { SiteHeader as t };
