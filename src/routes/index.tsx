import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { subjects } from "@/lib/quiz-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Goodluck, my Love — PNLE Review" },
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
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-10 sm:pt-16">
        <section className="mb-12">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-primary">
            PNLE Review · Made with love
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            Study calm.
            <br />
            <span className="text-primary">Pass with confidence.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            No dashboards. No noise. Just clean question banks, honest feedback,
            and a rationale after every answer. Whenever you're ready, mahal —
            pick a subject and begin.
          </p>
        </section>

        <section>
          <div className="mb-4 flex items-baseline justify-between">
            <h2 className="font-display text-xl font-semibold">Subjects</h2>
            <span className="text-xs text-muted-foreground">
              {subjects.length} areas
            </span>
          </div>
          <ul className="space-y-3">
            {subjects.map((s) => {
              const qCount = s.banks.reduce((n, b) => n + b.questions.length, 0);
              return (
                <li key={s.id}>
                  <Link
                    to="/subject/$subjectId"
                    params={{ subjectId: s.id }}
                    className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-all hover:border-primary/40 hover:bg-accent/40"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                      <BookOpen className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline gap-2">
                        <h3 className="truncate font-display text-base font-semibold">
                          {s.name}
                        </h3>
                        <span className="shrink-0 text-[11px] uppercase tracking-wider text-muted-foreground">
                          {s.short}
                        </span>
                      </div>
                      <p className="mt-0.5 truncate text-sm text-muted-foreground">
                        {s.banks.length} banks · {qCount} questions
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <footer className="mt-16 text-center text-xs text-muted-foreground">
          Good luck, future RN. You've got this. 💗
        </footer>
      </main>
    </div>
  );
}
