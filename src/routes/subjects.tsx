import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, BookOpen, Layers } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { subjects } from "@/lib/quiz-data";

export const Route = createFileRoute("/subjects")({
  head: () => ({
    meta: [
      { title: "Select Subject — VeeRN PNLE Reviewer" },
      {
        name: "description",
        content:
          "Choose a nursing subject competency area to begin your PNLE board exam practice.",
      },
    ],
  }),
  component: SubjectsPage,
});

function SubjectsPage() {
  const totalQuestions = subjects.reduce(
    (acc, s) => acc + s.banks.reduce((n, b) => n + b.questions.length, 0),
    0,
  );

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <div>
        <SiteHeader />
        <main className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8 pt-5 sm:pt-7 pb-8">
          {/* Back to Landing Link */}
          <div className="mb-3">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>

          {/* Header Section */}
          <section className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-border/60 pb-4 text-center sm:text-left">
            <div>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-primary">
                PNLE Board Exam Review
              </p>
              <h1 className="mt-1 font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight whitespace-nowrap">
                To Top & <span className="text-primary">Pass the Board Exam</span>
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground font-medium">
              First Take, Last Take, No Retakes!
            </p>
          </section>

          {/* Subjects 3-Column Matrix Grid */}
          <section>
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="font-display text-base sm:text-lg font-bold tracking-tight">
                  Review Subjects
                </h2>
                <p className="text-xs text-muted-foreground">
                  Select a competency area to start practicing ({totalQuestions} total questions pool)
                </p>
              </div>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                {subjects.length} Subjects
              </span>
            </div>

            {/* 3-Column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
              {subjects.map((s) => {
                const qCount = s.banks.reduce((n, b) => n + b.questions.length, 0);
                return (
                  <Link
                    key={s.id}
                    to="/subject/$subjectId"
                    params={{ subjectId: s.id }}
                    className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-4 sm:p-5 transition-all hover:border-primary/50 hover:bg-accent/40 shadow-xs hover:shadow-sm cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-105">
                        <BookOpen className="h-5 w-5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <h3 className="truncate font-display text-base font-bold text-foreground group-hover:text-primary transition-colors">
                          {s.name}
                        </h3>
                        <span className="inline-block mt-1 rounded bg-muted px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          {s.short}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-3 text-xs sm:text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Layers className="h-3.5 w-3.5 text-primary" />
                        {s.banks.length} bank{s.banks.length === 1 ? "" : "s"} · {qCount} Qs
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
        </main>
      </div>

      <footer className="py-4 text-center text-xs text-muted-foreground border-t border-border/40">
        by Tuwon
      </footer>
    </div>
  );
}
