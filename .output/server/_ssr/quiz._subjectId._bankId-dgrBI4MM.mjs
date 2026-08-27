import { n as findBank, r as findSubject } from "./quiz-data-WZxuSPLM.mjs";
import { A as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quiz._subjectId._bankId-dgrBI4MM.js
var $$splitComponentImporter = () => import("./quiz._subjectId._bankId-DYmYvn01.mjs");
/** Fisher-Yates shuffle — returns a new array, doesn't mutate the input. */
var Route = createFileRoute("/quiz/$subjectId/$bankId")({
	loader: ({ params }) => {
		const subject = findSubject(params.subjectId);
		const bank = findBank(params.subjectId, params.bankId);
		if (!subject || !bank) throw notFound();
		return {
			subject,
			bank
		};
	},
	head: ({ loaderData }) => ({ meta: [
		{ title: loaderData ? `${loaderData.bank.title} — Goodluck, my Love` : "Quiz — Goodluck, my Love" },
		{
			name: "description",
			content: loaderData?.bank.description ?? "Answer questions and learn from each rationale."
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
