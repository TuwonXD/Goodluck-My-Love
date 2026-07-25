import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowLeft, Check, X, RotateCcw, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { findBank, findSubject } from "@/lib/quiz-data";

export const Route = createFileRoute("/quiz/$subjectId/$bankId")({
  loader: ({ params }) => {
    const subject = findSubject(params.subjectId);
    const bank = findBank(params.subjectId, params.bankId);
    if (!subject || !bank) throw notFound();
    return { subject, bank };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.bank.title} — Goodluck, my Love`
          : "Quiz — Goodluck, my Love",
      },
      {
        name: "description",
        content:
          loaderData?.bank.description ?? "Answer questions and learn from each rationale.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: QuizPage,
});

function QuizPage() {
  const { subject, bank } = Route.useLoaderData();
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [done, setDone] = useState(false);

  const q = bank.questions[index];
  const total = bank.questions.length;
  const progress = useMemo(
    () => Math.round(((index + (revealed ? 1 : 0)) / total) * 100),
    [index, revealed, total],
  );

  function choose(i: number) {
    if (revealed) return;
    setSelected(i);
    setRevealed(true);
    if (i === q.answer) setCorrectCount((c) => c + 1);
  }

  function next() {
    if (index + 1 >= total) {
      setDone(true);
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
    setRevealed(false);
  }

  function restart() {
    setIndex(0);
    setSelected(null);
    setRevealed(false);
    setCorrectCount(0);
    setDone(false);
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-2xl px-5 pb-24 pt-6">
        <div className="flex items-center justify-between">
          <Link
            to="/subject/$subjectId"
            params={{ subjectId: subject.id }}
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            {subject.short}
          </Link>
          <span className="text-xs text-muted-foreground">
            {done ? "Done" : `Question ${index + 1} of ${total}`}
          </span>
        </div>

        <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full bg-primary transition-[width] duration-500"
            style={{ width: `${done ? 100 : progress}%` }}
          />
        </div>

        {done ? (
          <ResultCard
            correct={correctCount}
            total={total}
            onRestart={restart}
            subjectId={subject.id}
          />
        ) : (
          <>
            <header className="mt-8 mb-6">
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-primary">
                {bank.title}
              </p>
              <h1 className="font-display text-2xl font-semibold leading-snug tracking-tight sm:text-[28px]">
                {q.question}
              </h1>
            </header>

            <ul className="space-y-2.5">
              {q.choices.map((c: string, i: number) => {
                const isSelected = selected === i;
                const isAnswer = q.answer === i;
                let state = "idle";
                if (revealed) {
                  if (isAnswer) state = "correct";
                  else if (isSelected) state = "wrong";
                  else state = "muted";
                }
                return (
                  <li key={i}>
                    <button
                      onClick={() => choose(i)}
                      disabled={revealed}
                      className={[
                        "flex w-full items-center gap-3 rounded-xl border p-4 text-left text-[15px] transition-all",
                        state === "idle" &&
                          "border-border bg-card hover:border-primary/50 hover:bg-accent/40",
                        state === "correct" &&
                          "border-success/60 bg-success/10 text-foreground",
                        state === "wrong" &&
                          "border-destructive/60 bg-destructive/10 text-foreground",
                        state === "muted" &&
                          "border-border bg-card text-muted-foreground",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      <span
                        className={[
                          "grid h-7 w-7 shrink-0 place-items-center rounded-full border text-xs font-semibold",
                          state === "correct" &&
                            "border-success bg-success text-success-foreground",
                          state === "wrong" &&
                            "border-destructive bg-destructive text-destructive-foreground",
                          (state === "idle" || state === "muted") &&
                            "border-border bg-background text-muted-foreground",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                      >
                        {state === "correct" ? (
                          <Check className="h-3.5 w-3.5" />
                        ) : state === "wrong" ? (
                          <X className="h-3.5 w-3.5" />
                        ) : (
                          String.fromCharCode(65 + i)
                        )}
                      </span>
                      <span className="min-w-0 flex-1">{c}</span>
                    </button>
                  </li>
                );
              })}
            </ul>

            {revealed && (
              <div className="mt-6 rounded-2xl border border-primary/25 bg-primary/5 p-5">
                <div className="mb-1.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                  <Sparkles className="h-3.5 w-3.5" />
                  {selected === q.answer ? "Correct" : "Not quite"}
                </div>
                <p className="text-[15px] leading-relaxed text-foreground/90">
                  {selected === q.answer
                    ? "Nice — you got it."
                    : `The correct answer is ${String.fromCharCode(65 + q.answer)}. ${q.choices[q.answer]}`}
                </p>
                {q.rationale && (
                  <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
                    {q.rationale}
                  </p>
                )}
                <button
                  onClick={next}
                  className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90 sm:w-auto"
                >
                  {index + 1 >= total ? "See results" : "Next question"}
                </button>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}

function ResultCard({
  correct,
  total,
  onRestart,
  subjectId,
}: {
  correct: number;
  total: number;
  onRestart: () => void;
  subjectId: string;
}) {
  const pct = Math.round((correct / total) * 100);
  const msg =
    pct >= 80
      ? "Ang galing mo, mahal. Keep going."
      : pct >= 60
        ? "Solid effort. Review the misses and go again."
        : "Every miss is a lesson. You're closer than you think.";

  return (
    <section className="mt-10 rounded-3xl border border-border bg-card p-8 text-center">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
        Session complete
      </p>
      <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight">
        {correct}
        <span className="text-muted-foreground">/{total}</span>
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">{pct}% correct</p>
      <p className="mx-auto mt-5 max-w-sm text-[15px] text-foreground/85">
        {msg}
      </p>
      <div className="mt-7 flex flex-col justify-center gap-2 sm:flex-row">
        <button
          onClick={onRestart}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90"
        >
          <RotateCcw className="h-4 w-4" />
          Try again
        </button>
        <Link
          to="/subject/$subjectId"
          params={{ subjectId }}
          className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold transition-colors hover:bg-accent"
        >
          Back to banks
        </Link>
      </div>
    </section>
  );
}
