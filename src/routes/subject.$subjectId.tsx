import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ListChecks, HelpCircle } from "lucide-react";
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
        content: loaderData?.subject.description ?? "Choose a test bank and start reviewing.",
      },
    ],
  }),
  component: SubjectPage,
});

function SubjectPage() {
  const { subject } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <div>
        <SiteHeader />
        <main className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8 pt-5 sm:pt-7 pb-8">
          <Link
            to="/subjects"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all subjects
          </Link>

          <header className="mt-3 mb-6 border-b border-border/60 pb-4">
            <p className="mb-1 text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-primary">
              {subject.short} Area
            </p>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              {subject.name}
            </h1>
            <p className="mt-1.5 max-w-2xl text-xs sm:text-sm leading-relaxed text-muted-foreground">
              {subject.description}
            </p>
          </header>

          <section>
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="font-display text-base sm:text-lg font-bold tracking-tight">
                  Available Test Banks
                </h2>
                <p className="text-xs text-muted-foreground">
                  Choose a question set to practice
                </p>
              </div>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                {subject.banks.length} Banks
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
              {subject.banks.map((b: TestBank) => (
                <Link
                  key={b.id}
                  to="/quiz/$subjectId/$bankId"
                  params={{ subjectId: subject.id, bankId: b.id }}
                  className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-4 sm:p-5 transition-all hover:border-primary/50 hover:bg-accent/40 shadow-xs hover:shadow-sm cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-105">
                      <ListChecks className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate font-display text-base font-bold text-foreground group-hover:text-primary transition-colors">
                        {b.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm leading-relaxed text-muted-foreground line-clamp-2">
                        {b.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-3 text-xs sm:text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5 font-medium">
                      <HelpCircle className="h-3.5 w-3.5 text-primary" />
                      {b.questions.length} questions
                    </span>
                    <span className="inline-flex items-center gap-1 font-semibold text-primary group-hover:translate-x-0.5 transition-transform">
                      Start <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </main>
      </div>

      <footer className="py-4 text-center text-xs text-muted-foreground border-t border-border/40">
        by Tuwon
      </footer>
    </div>
  );
}
