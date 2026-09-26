import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowLeft, Check, X, RotateCcw, Sparkles, Play } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { findBank, findSubject, type Question } from "@/lib/quiz-data";
import { CorrectAnswerVideoModal } from "@/components/correct-answer-video-modal";
import { useSettings } from "@/lib/theme";

/** Fisher-Yates shuffle — returns a new array, doesn't mutate the input. */
function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

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
        title: loaderData ? `${loaderData.bank.title} — Goodluck, RNs` : "Quiz",
      },
      {
        name: "description",
        content: loaderData?.bank.description ?? "Answer questions and learn from each rationale.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: QuizPage,
});

function QuizPage() {
  const { subject, bank } = Route.useLoaderData();
  const bankTotal = bank.questions.length;

  // Setup step: pick how many questions to answer before the session starts.
  const [started, setStarted] = useState(false);
  const [questionCount, setQuestionCount] = useState(Math.min(10, bankTotal));
  const [sessionQuestions, setSessionQuestions] = useState<Question[]>([]);

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [done, setDone] = useState(false);
  const { correctAnswerVideo } = useSettings();
  const [showCorrectVideo, setShowCorrectVideo] = useState(false);

  const q = sessionQuestions[index];
  const total = sessionQuestions.length;
  const progress = useMemo(
    () => (total ? Math.round(((index + (revealed ? 1 : 0)) / total) * 100) : 0),
    [index, revealed, total],
  );

  function beginSession(count: number) {
    // Randomize question order every time a session is started, and only
    // take the number of questions the user asked for.
    const shuffled = shuffle(bank.questions).slice(0, count);
    setSessionQuestions(shuffled);
    setIndex(0);
    setSelected(null);
    setRevealed(false);
    setCorrectCount(0);
    setDone(false);
    setShowCorrectVideo(false);
    setStarted(true);
  }

  function choose(i: number) {
    if (revealed) return;
    setSelected(i);
    setRevealed(true);
    if (i === q.answer) {
      setCorrectCount((c) => c + 1);
      if (correctAnswerVideo) {
        setShowCorrectVideo(true);
      }
    }
  }

  function next() {
    if (index + 1 >= total) {
      setDone(true);
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
    setRevealed(false);
    setShowCorrectVideo(false);
  }

  function restart() {
    // Start over with a fresh shuffle of the same question count.
    beginSession(questionCount);
  }

  function backToSetup() {
    setStarted(false);
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
          {started && (
            <span className="text-xs text-muted-foreground">
              {done ? "Done" : `Question ${index + 1} of ${total}`}
            </span>
          )}
        </div>

        {started && (
          <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full bg-primary transition-[width] duration-500"
              style={{ width: `${done ? 100 : progress}%` }}
            />
          </div>
        )}

        {!started ? (
          <SetupCard
            bankTitle={bank.title}
            bankDescription={bank.description}
            bankTotal={bankTotal}
            questionCount={questionCount}
            onChangeCount={setQuestionCount}
            onStart={() => beginSession(questionCount)}
          />
        ) : done ? (
          <ResultCard
            correct={correctCount}
            total={total}
            onRestart={restart}
            onChangeSettings={backToSetup}
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
                        state === "correct" && "border-success/60 bg-success/10 text-foreground",
                        state === "wrong" &&
                          "border-destructive/60 bg-destructive/10 text-foreground",
                        state === "muted" && "border-border bg-card text-muted-foreground",
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
                    ? "WOW YOU GOT IT RIGHT! Keep going!"
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

      {showCorrectVideo && (
        <CorrectAnswerVideoModal onContinue={() => setShowCorrectVideo(false)} />
      )}
    </div>
  );
}

function SetupCard({
  bankTitle,
  bankDescription,
  bankTotal,
  questionCount,
  onChangeCount,
  onStart,
}: {
  bankTitle: string;
  bankDescription: string;
  bankTotal: number;
  questionCount: number;
  onChangeCount: (n: number) => void;
  onStart: () => void;
}) {
  const presets = [5, 10, 15, 20, 25, 30, 40, 50].filter((n) => n < bankTotal);

  return (
    <section className="mt-8 rounded-3xl border border-border bg-card p-6 sm:p-8">
      <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-primary">
        {bankTitle}
      </p>
      <h1 className="font-display text-2xl font-semibold leading-snug tracking-tight sm:text-[28px]">
        Ready to start?
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">{bankDescription}</p>

      <div className="mt-6">
        <label
          htmlFor="question-count"
          className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
        >
          How many questions?
        </label>

        <div className="mt-3 flex flex-wrap gap-2">
          {presets.map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => onChangeCount(n)}
              className={[
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                questionCount === n
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-foreground hover:border-primary/50 hover:bg-accent/40",
              ].join(" ")}
            >
              {n}
            </button>
          ))}
          <button
            type="button"
            onClick={() => onChangeCount(bankTotal)}
            className={[
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              questionCount === bankTotal
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background text-foreground hover:border-primary/50 hover:bg-accent/40",
            ].join(" ")}
          >
            All ({bankTotal})
          </button>
        </div>

        <div className="mt-5 flex items-center gap-3">
          <input
            id="question-count"
            type="range"
            min={1}
            max={bankTotal}
            step={1}
            value={questionCount}
            onChange={(e) => onChangeCount(Number(e.target.value))}
            className="h-1.5 w-full flex-1 cursor-pointer appearance-none rounded-full bg-muted accent-primary"
          />
          <span className="w-14 shrink-0 text-right text-sm font-semibold tabular-nums">
            {questionCount}
          </span>
        </div>
        <p className="mt-1.5 text-xs text-muted-foreground">
          This bank has {bankTotal} question{bankTotal === 1 ? "" : "s"}. Pick how many you want in
          this session — questions are shuffled into a new random order every time.
        </p>
      </div>

      <button
        onClick={onStart}
        disabled={questionCount < 1}
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
      >
        <Play className="h-4 w-4" />
        Start session
      </button>
    </section>
  );
}

function ResultCard({
  correct,
  total,
  onRestart,
  onChangeSettings,
  subjectId,
}: {
  correct: number;
  total: number;
  onRestart: () => void;
  onChangeSettings: () => void;
  subjectId: string;
}) {
  const pct = Math.round((correct / total) * 100);
  const msg =
    pct >= 80
      ? "Great job! You know your stuff."
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
      <p className="mx-auto mt-5 max-w-sm text-[15px] text-foreground/85">{msg}</p>
      <div className="mt-7 flex flex-col justify-center gap-2 sm:flex-row">
        <button
          onClick={onRestart}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90"
        >
          <RotateCcw className="h-4 w-4" />
          Try again
        </button>
        <button
          onClick={onChangeSettings}
          className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold transition-colors hover:bg-accent"
        >
          Change question count
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
