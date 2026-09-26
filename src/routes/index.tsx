import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Layers } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { subjects } from "@/lib/quiz-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VeeRN — A PNLE Reviewer" },
      {
        name: "description",
        content:
          "A calm, focused PNLE review companion. Pick a subject, choose a test bank, and study.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 sm:px-6 pb-24 pt-10 sm:pt-16">
        <section className="mb-10">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-primary">
            VeeRN — A PNLE Reviewer
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            To Pass and
            <br />
            <span className="text-primary">Top the Board Exams</span>
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            First Take, Last Take, No Retakes!
          </p>
        </section>

        <section>
          <div className="mb-5 flex items-baseline justify-between border-b border-border/60 pb-3">
            <div>
              <h2 className="font-display text-xl font-semibold tracking-tight">Review Subjects</h2>
              <p className="text-xs text-muted-foreground">
                Select a nursing competency area to practice
              </p>
            </div>
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
              {subjects.length} Subjects
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {subjects.map((s) => {
              const qCount = s.banks.reduce((n, b) => n + b.questions.length, 0);
              return (
                <Link
                  key={s.id}
                  to="/subject/$subjectId"
                  params={{ subjectId: s.id }}
                  className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/50 hover:bg-accent/40 shadow-2xs hover:shadow-sm"
                >
                  <div className="flex items-start gap-3.5">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-105">
                      <BookOpen className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="truncate font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                          {s.name}
                        </h3>
                      </div>
                      <span className="inline-block mt-0.5 rounded-md bg-muted px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                        {s.short}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Layers className="h-3.5 w-3.5 text-primary" />
                      {s.banks.length} test bank{s.banks.length === 1 ? "" : "s"} · {qCount} Qs
                    </span>
                    <span className="inline-flex items-center gap-1 font-semibold text-primary group-hover:translate-x-0.5 transition-transform">
                      Practice <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <footer className="mt-16 text-center text-xs text-muted-foreground">by Tuwon</footer>
      </main>
    </div>
  );
}
