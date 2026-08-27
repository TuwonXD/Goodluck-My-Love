import { r as findSubject } from "./quiz-data-WZxuSPLM.mjs";
import { A as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/subject._subjectId-DoKWhq87.js
var $$splitComponentImporter = () => import("./subject._subjectId-DCkB8D2d.mjs");
var Route = createFileRoute("/subject/$subjectId")({
	loader: ({ params }) => {
		const subject = findSubject(params.subjectId);
		if (!subject) throw notFound();
		return { subject };
	},
	head: ({ loaderData }) => ({ meta: [{ title: loaderData ? `${loaderData.subject.name} — Goodluck, my Love` : "Subject — Goodluck, my Love" }, {
		name: "description",
		content: loaderData?.subject.description ?? "Choose a test bank and start reviewing."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
