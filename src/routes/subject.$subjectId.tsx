import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ListChecks } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { findSubject, type TestBank } from "@/lib/quiz-data";

export const Route = createFileRoute("/subject/$subjectId")({
  loader: ({ params }) => {
    const subject = findSubject(params.subjectId);
    if (!subject) throw notFound();
    return { subject };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.subject.name} — Goodluck, my Love`
          : "Subject — Goodluck, my Love",
      },
      {
        name: "description",
        content:
          loaderData?.subject.description ??
          "Choose a test bank and start reviewing.",
      },
    ],
  }),
  component: SubjectPage,
});

function SubjectPage() {
  const { subject } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-8">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          All subjects
        </Link>

        <header className="mt-6 mb-8">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-primary">
            {subject.short}
          </p>
          <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {subject.name}
          </h1>
          <p className="mt-3 text-muted-foreground">{subject.description}</p>
        </header>

        <h2 className="mb-3 font-display text-lg font-semibold">Test banks</h2>
        <ul className="space-y-3">
          {subject.banks.map((b: TestBank) => (
            <li key={b.id}>
              <Link
                to="/quiz/$subjectId/$bankId"
                params={{ subjectId: subject.id, bankId: b.id }}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-all hover:border-primary/40 hover:bg-accent/40"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <ListChecks className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="truncate font-display text-base font-semibold">
                    {b.title}
                  </h3>
                  <p className="mt-0.5 truncate text-sm text-muted-foreground">
                    {b.questions.length} questions · {b.description}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
