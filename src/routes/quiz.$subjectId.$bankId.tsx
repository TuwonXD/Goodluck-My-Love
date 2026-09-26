import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Fragment, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  X,
  RotateCcw,
  Sparkles,
  Play,
  LayoutGrid,
  CheckCircle2,
  XCircle,
  BookOpen,
  ListChecks,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { findBank, findSubject, type Question } from "@/lib/quiz-data";
import { CorrectAnswerVideoModal } from "@/components/correct-answer-video-modal";
import { useSettings } from "@/lib/theme";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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

  const [started, setStarted] = useState(false);
  const [questionCount, setQuestionCount] = useState(Math.min(10, bankTotal));
  const [sessionQuestions, setSessionQuestions] = useState<Question[]>([]);

  const [index, setIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [revealedQuestions, setRevealedQuestions] = useState<Record<number, boolean>>({});
  const [done, setDone] = useState(false);
  const [showPalette, setShowPalette] = useState(false);

  const { correctAnswerVideo } = useSettings();
  const [showCorrectVideo, setShowCorrectVideo] = useState(false);

  const q = sessionQuestions[index];
  const total = sessionQuestions.length;

  const selected = userAnswers[index] ?? null;
  const revealed = revealedQuestions[index] ?? false;

  const answeredCount = Object.keys(userAnswers).length;
  const correctCount = useMemo(() => {
    return Object.entries(userAnswers).filter(
      ([idx, ans]) => sessionQuestions[Number(idx)]?.answer === ans,
    ).length;
  }, [userAnswers, sessionQuestions]);

  const progress = useMemo(
    () => (total ? Math.round((answeredCount / total) * 100) : 0),
    [answeredCount, total],
  );

  function beginSession(count: number) {
    const shuffled = shuffle(bank.questions).slice(0, count);
    setSessionQuestions(shuffled);
    setIndex(0);
    setUserAnswers({});
    setRevealedQuestions({});
    setDone(false);
    setShowCorrectVideo(false);
    setShowPalette(false);
    setStarted(true);
  }

  function choose(i: number) {
    if (revealed) return;
    setUserAnswers((prev) => ({ ...prev, [index]: i }));
    setRevealedQuestions((prev) => ({ ...prev, [index]: true }));

    if (i === q.answer && correctAnswerVideo) {
      setShowCorrectVideo(true);
    }
  }

  function next() {
    if (index + 1 >= total) {
      setDone(true);
      return;
    }
    setIndex((i) => i + 1);
    setShowCorrectVideo(false);
  }

  function prev() {
    if (index > 0) {
      setIndex((i) => i - 1);
      setShowCorrectVideo(false);
    }
  }

  function goToQuestion(i: number) {
    setIndex(i);
    setShowCorrectVideo(false);
  }

  function restart() {
    beginSession(questionCount);
  }

  function backToSetup() {
    setStarted(false);
    setDone(false);
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 sm:px-6 pb-24 pt-6">
        {/* Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-4">
          <Link
            to="/subject/$subjectId"
            params={{ subjectId: subject.id }}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>{subject.name}</span>
            <span className="text-xs text-muted-foreground/60">({subject.short})</span>
          </Link>

          {started && !done && (
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => setShowPalette((p) => !p)}
                className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-accent cursor-pointer"
                title="Toggle Question Table Navigator"
              >
                <LayoutGrid className="h-3.5 w-3.5 text-primary" />
                <span>Question Matrix</span>
                <span className="rounded-full bg-primary/15 px-1.5 py-0.2 text-[11px] text-primary">
                  {index + 1}/{total}
                </span>
              </button>

              <div className="hidden sm:flex items-center gap-2 rounded-xl bg-card border border-border px-3 py-1.5 text-xs">
                <span className="text-muted-foreground">Score:</span>
                <span className="font-semibold text-primary">{correctCount}</span>
                <span className="text-muted-foreground">/ {answeredCount}</span>
              </div>
            </div>
          )}
        </div>

        {/* Progress Bar */}
        {started && !done && (
          <div className="mt-4">
            <div className="flex items-center justify-between text-xs text-muted-foreground mb-1.5">
              <span>Progress: {progress}% completed</span>
              <span>
                {answeredCount} of {total} answered
              </span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full bg-primary transition-[width] duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Question Palette / Matrix Table */}
        {started && !done && showPalette && (
          <section className="mt-4 rounded-2xl border border-border bg-card p-4 sm:p-5 shadow-xs animate-in fade-in-50">
            <div className="flex items-center justify-between border-b border-border/60 pb-3 mb-3">
              <div className="flex items-center gap-2">
                <LayoutGrid className="h-4 w-4 text-primary" />
                <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                  Question Table Navigator
                </h3>
              </div>
              <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                <span className="flex items-center gap-1">
                  <span className="h-2.5 w-2.5 rounded-full bg-success/80" /> Correct
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-2.5 w-2.5 rounded-full bg-destructive/80" /> Wrong
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-2.5 w-2.5 rounded-full bg-primary" /> Current
                </span>
              </div>
            </div>

            <div className="grid grid-cols-5 sm:grid-cols-10 md:grid-cols-15 gap-1.5">
              {sessionQuestions.map((_, i) => {
                const isCurrent = index === i;
                const isAnswered = userAnswers[i] !== undefined;
                const isCorrect = userAnswers[i] === sessionQuestions[i].answer;

                let btnClass =
                  "border-border bg-background text-muted-foreground hover:border-primary/50";
                if (isCurrent) {
                  btnClass =
                    "border-primary bg-primary text-primary-foreground font-bold shadow-xs ring-2 ring-primary/30";
                } else if (isAnswered) {
                  btnClass = isCorrect
                    ? "border-success/60 bg-success/15 text-success font-semibold"
                    : "border-destructive/60 bg-destructive/15 text-destructive font-semibold";
                }

                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goToQuestion(i)}
                    className={`grid h-8 w-full place-items-center rounded-lg border text-xs transition-all cursor-pointer ${btnClass}`}
                    title={`Question ${i + 1}`}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>
          </section>
        )}

        {/* Content Stages */}
        {!started ? (
          <SetupCard
            subjectName={subject.name}
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
            sessionQuestions={sessionQuestions}
            userAnswers={userAnswers}
            onRestart={restart}
            onChangeSettings={backToSetup}
            subjectId={subject.id}
          />
        ) : (
          <div className="mt-6 space-y-6">
            {/* Question Card */}
            <section className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-3 mb-5">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-xs font-semibold text-primary">
                    Question {index + 1} of {total}
                  </span>
                  <span className="text-xs text-muted-foreground truncate max-w-[200px] sm:max-w-xs">
                    {bank.title}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={prev}
                    disabled={index === 0}
                    className="inline-flex items-center gap-1 rounded-lg border border-border bg-background px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">Previous</span>
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    disabled={!revealed && userAnswers[index] === undefined}
                    className="inline-flex items-center gap-1 rounded-lg border border-border bg-background px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <span className="hidden sm:inline">
                      {index + 1 >= total ? "Results" : "Next"}
                    </span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* Question Text */}
              <h2 className="font-display text-xl font-semibold leading-relaxed tracking-tight sm:text-2xl text-foreground">
                {q.question}
              </h2>

              {/* Choices: 2-Column Table Grid */}
              <div className="mt-6">
                <div className="mb-2.5 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Select Your Answer
                  </span>
                  <span className="text-xs text-muted-foreground">4 Choices</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
                      <button
                        key={i}
                        type="button"
                        onClick={() => choose(i)}
                        disabled={revealed}
                        className={[
                          "group relative flex items-start gap-3.5 rounded-2xl border p-4 text-left text-sm transition-all cursor-pointer",
                          state === "idle" &&
                            "border-border bg-background/60 hover:border-primary/50 hover:bg-accent/40 shadow-2xs",
                          state === "correct" &&
                            "border-success/60 bg-success/10 text-foreground ring-2 ring-success/20",
                          state === "wrong" &&
                            "border-destructive/60 bg-destructive/10 text-foreground ring-2 ring-destructive/20",
                          state === "muted" &&
                            "border-border bg-card/60 text-muted-foreground opacity-60",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                      >
                        {/* Choice Letter Cell */}
                        <span
                          className={[
                            "grid h-7 w-7 shrink-0 place-items-center rounded-xl border text-xs font-bold transition-colors",
                            state === "correct" &&
                              "border-success bg-success text-success-foreground",
                            state === "wrong" &&
                              "border-destructive bg-destructive text-destructive-foreground",
                            state === "idle" &&
                              "border-border bg-card text-foreground group-hover:border-primary/50 group-hover:bg-primary group-hover:text-primary-foreground",
                            state === "muted" && "border-border bg-muted text-muted-foreground",
                          ]
                            .filter(Boolean)
                            .join(" ")}
                        >
                          {state === "correct" ? (
                            <Check className="h-3.5 w-3.5 stroke-[3]" />
                          ) : state === "wrong" ? (
                            <X className="h-3.5 w-3.5 stroke-[3]" />
                          ) : (
                            String.fromCharCode(65 + i)
                          )}
                        </span>

                        {/* Choice Text Content */}
                        <span className="min-w-0 flex-1 text-[14px] leading-relaxed pt-0.5">
                          {c}
                        </span>

                        {/* Status Icon */}
                        {state === "correct" && (
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-success self-center" />
                        )}
                        {state === "wrong" && (
                          <XCircle className="h-5 w-5 shrink-0 text-destructive self-center" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Rationale & Next Box */}
              {revealed && (
                <div
                  className={[
                    "mt-6 rounded-2xl border p-5 sm:p-6 transition-all animate-in fade-in-50",
                    selected === q.answer
                      ? "border-success/40 bg-success/5"
                      : "border-primary/30 bg-primary/5",
                  ].join(" ")}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/50 pb-3 mb-3">
                    <div className="flex items-center gap-2">
                      <Sparkles
                        className={`h-4 w-4 ${
                          selected === q.answer ? "text-success" : "text-primary"
                        }`}
                      />
                      <span
                        className={`text-xs font-bold uppercase tracking-wider ${
                          selected === q.answer ? "text-success" : "text-primary"
                        }`}
                      >
                        {selected === q.answer ? "Correct Answer!" : "Answer Rationale"}
                      </span>
                    </div>

                    <span className="text-xs text-muted-foreground">
                      Correct Key:{" "}
                      <strong className="text-foreground">
                        {String.fromCharCode(65 + q.answer)}
                      </strong>
                    </span>
                  </div>

                  <p className="text-sm font-medium text-foreground">
                    {selected === q.answer
                      ? "Great job! You answered this correctly."
                      : `The correct answer is Option ${String.fromCharCode(65 + q.answer)}: ${q.choices[q.answer]}`}
                  </p>

                  {q.rationale && (
                    <div className="mt-3 rounded-xl bg-background/80 border border-border/60 p-4 text-xs sm:text-sm leading-relaxed text-foreground/90">
                      <p className="font-semibold text-primary mb-1">Detailed Explanation:</p>
                      {q.rationale}
                    </div>
                  )}

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 pt-2">
                    <button
                      type="button"
                      onClick={prev}
                      disabled={index === 0}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-4 py-2 text-xs font-semibold transition-colors hover:bg-accent disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                    >
                      <ArrowLeft className="h-3.5 w-3.5" />
                      Previous Question
                    </button>

                    <button
                      type="button"
                      onClick={next}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-xs font-semibold text-primary-foreground shadow-xs transition-colors hover:opacity-90 cursor-pointer"
                    >
                      <span>{index + 1 >= total ? "View Final Results" : "Next Question"}</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}
            </section>
          </div>
        )}
      </main>

      {showCorrectVideo && (
        <CorrectAnswerVideoModal onContinue={() => setShowCorrectVideo(false)} />
      )}
    </div>
  );
}

function SetupCard({
  subjectName,
  bankTitle,
  bankDescription,
  bankTotal,
  questionCount,
  onChangeCount,
  onStart,
}: {
  subjectName: string;
  bankTitle: string;
  bankDescription: string;
  bankTotal: number;
  questionCount: number;
  onChangeCount: (n: number) => void;
  onStart: () => void;
}) {
  const presets = [5, 10, 15, 20, 25, 30, 40, 50].filter((n) => n < bankTotal);

  return (
    <section className="mt-8 rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-xs">
      <div className="border-b border-border/60 pb-4 mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-xs font-semibold text-primary uppercase tracking-wider">
            {subjectName}
          </span>
          <span className="text-xs text-muted-foreground">• Test Bank Setup</span>
        </div>
        <h1 className="font-display text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
          {bankTitle}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">{bankDescription}</p>
      </div>

      {/* Summary Table Overview */}
      <div className="mb-6 rounded-2xl border border-border bg-background/60 p-4">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
          Bank Overview Table
        </h2>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium text-xs text-muted-foreground py-2.5">
                Total Available Pool
              </TableCell>
              <TableCell className="font-semibold text-foreground text-right py-2.5">
                {bankTotal} Questions
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-xs text-muted-foreground py-2.5">
                Questions Selected
              </TableCell>
              <TableCell className="font-semibold text-primary text-right py-2.5">
                {questionCount} Questions
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-xs text-muted-foreground py-2.5">
                Order
              </TableCell>
              <TableCell className="text-muted-foreground text-right py-2.5">
                Randomized Shuffle
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Question Count Matrix */}
      <div>
        <label
          htmlFor="question-count"
          className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
        >
          Select Number of Questions
        </label>

        <div className="mt-3 grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-2">
          {presets.map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => onChangeCount(n)}
              className={[
                "rounded-xl border py-2.5 text-xs font-semibold transition-all cursor-pointer",
                questionCount === n
                  ? "border-primary bg-primary text-primary-foreground shadow-xs ring-2 ring-primary/20"
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
              "col-span-3 sm:col-span-2 md:col-span-1 rounded-xl border py-2.5 text-xs font-semibold transition-all cursor-pointer",
              questionCount === bankTotal
                ? "border-primary bg-primary text-primary-foreground shadow-xs ring-2 ring-primary/20"
                : "border-border bg-background text-foreground hover:border-primary/50 hover:bg-accent/40",
            ].join(" ")}
          >
            All ({bankTotal})
          </button>
        </div>

        <div className="mt-5 flex items-center gap-4 rounded-xl border border-border bg-background/50 p-3">
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
          <span className="w-16 shrink-0 rounded-lg bg-primary/10 py-1 text-center text-xs font-bold text-primary tabular-nums">
            {questionCount} Qs
          </span>
        </div>
      </div>

      <button
        onClick={onStart}
        disabled={questionCount < 1}
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-xs transition-colors hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer sm:w-auto"
      >
        <Play className="h-4 w-4 fill-current" />
        Start Review Session
      </button>
    </section>
  );
}

function ResultCard({
  correct,
  total,
  sessionQuestions,
  userAnswers,
  onRestart,
  onChangeSettings,
  subjectId,
}: {
  correct: number;
  total: number;
  sessionQuestions: Question[];
  userAnswers: Record<number, number>;
  onRestart: () => void;
  onChangeSettings: () => void;
  subjectId: string;
}) {
  const [filter, setFilter] = useState<"all" | "incorrect" | "correct">("all");
  const [expandedRationale, setExpandedRationale] = useState<Record<number, boolean>>({});

  const pct = Math.round((correct / total) * 100);
  const incorrectCount = total - correct;

  const toggleRationale = (idx: number) => {
    setExpandedRationale((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const filteredQuestions = sessionQuestions
    .map((q, idx) => ({ q, idx, userAns: userAnswers[idx] }))
    .filter((item) => {
      const isCorrect = item.userAns === item.q.answer;
      if (filter === "correct") return isCorrect;
      if (filter === "incorrect") return !isCorrect;
      return true;
    });

  const msg =
    pct >= 80
      ? "Outstanding score! You have solid mastery in this topic."
      : pct >= 60
        ? "Good effort! Review the questions you missed below to master the concepts."
        : "Keep practicing! Every rationale is an opportunity to strengthen your knowledge.";

  return (
    <section className="mt-4 space-y-4">
      {/* Top Results KPI Header Banner */}
      <div className="rounded-3xl border border-border bg-card p-4 sm:p-5 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Left: Score & Badges */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-[11px] font-bold text-primary uppercase tracking-wider">
                  Session Complete
                </span>
                <span className="text-xs text-muted-foreground font-medium">• Score Overview</span>
              </div>
              <div className="mt-1 flex items-baseline gap-2.5">
                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                  {correct}
                  <span className="text-muted-foreground font-normal text-xl sm:text-2xl">/{total}</span>
                </h2>
                <span className="rounded-xl bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">
                  {pct}% Score
                </span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground max-w-md line-clamp-1">{msg}</p>
            </div>

            {/* Quick KPI Badges */}
            <div className="flex items-center gap-2">
              <div className="rounded-xl border border-border bg-background/60 px-3 py-1.5 text-center min-w-[70px]">
                <span className="text-[10px] uppercase font-bold text-muted-foreground block">Total</span>
                <span className="text-sm font-bold text-foreground">{total}</span>
              </div>
              <div className="rounded-xl border border-success/30 bg-success/5 px-3 py-1.5 text-center min-w-[70px]">
                <span className="text-[10px] uppercase font-bold text-success block">Correct</span>
                <span className="text-sm font-bold text-success">{correct}</span>
              </div>
              <div className="rounded-xl border border-destructive/30 bg-destructive/5 px-3 py-1.5 text-center min-w-[70px]">
                <span className="text-[10px] uppercase font-bold text-destructive block">Incorrect</span>
                <span className="text-sm font-bold text-destructive">{incorrectCount}</span>
              </div>
            </div>
          </div>

          {/* Right: Action Buttons */}
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              onClick={onRestart}
              className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-xs transition-colors hover:opacity-90 cursor-pointer"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Try Again</span>
            </button>
            <button
              onClick={onChangeSettings}
              className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-foreground transition-colors hover:bg-accent cursor-pointer"
            >
              Change Count
            </button>
            <Link
              to="/subject/$subjectId"
              params={{ subjectId }}
              className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-foreground transition-colors hover:bg-accent"
            >
              Back to Banks
            </Link>
          </div>
        </div>
      </div>

      {/* Comprehensive Questions Review Table with Internal Scroll */}
      <div className="rounded-3xl border border-border bg-card p-4 sm:p-5 shadow-xs flex flex-col">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/60 pb-3 mb-3">
          <div>
            <h3 className="font-display text-sm sm:text-base font-bold tracking-tight text-foreground">
              Question Breakdown & Review Table
            </h3>
            <p className="text-xs text-muted-foreground">
              Review every answered question, choices, and clinical rationales.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 rounded-xl border border-border bg-background/60 p-1 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={[
                "rounded-lg px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer",
                filter === "all"
                  ? "bg-primary text-primary-foreground font-semibold"
                  : "text-muted-foreground hover:text-foreground",
              ].join(" ")}
            >
              All ({total})
            </button>
            <button
              type="button"
              onClick={() => setFilter("incorrect")}
              className={[
                "rounded-lg px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer",
                filter === "incorrect"
                  ? "bg-destructive text-destructive-foreground font-semibold"
                  : "text-muted-foreground hover:text-foreground",
              ].join(" ")}
            >
              Mistakes ({incorrectCount})
            </button>
            <button
              type="button"
              onClick={() => setFilter("correct")}
              className={[
                "rounded-lg px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer",
                filter === "correct"
                  ? "bg-success text-success-foreground font-semibold"
                  : "text-muted-foreground hover:text-foreground",
              ].join(" ")}
            >
              Correct ({correct})
            </button>
          </div>
        </div>

        {/* Scrollable Table View Container */}
        <div className="max-h-[360px] sm:max-h-[400px] md:max-h-[440px] overflow-y-auto rounded-2xl border border-border scrollbar-thin">
          <Table>
            <TableHeader className="sticky top-0 bg-card/95 backdrop-blur-xs z-10 border-b border-border/80 shadow-2xs">
              <TableRow>
                <TableHead className="w-12 text-center text-xs py-2.5 font-bold">#</TableHead>
                <TableHead className="min-w-[200px] text-xs py-2.5 font-bold">Question</TableHead>
                <TableHead className="hidden md:table-cell min-w-[130px] text-xs py-2.5 font-bold">
                  Your Choice
                </TableHead>
                <TableHead className="hidden md:table-cell min-w-[130px] text-xs py-2.5 font-bold">
                  Correct Answer
                </TableHead>
                <TableHead className="w-24 text-center text-xs py-2.5 font-bold">Status</TableHead>
                <TableHead className="w-24 text-right text-xs py-2.5 font-bold">Rationale</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredQuestions.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="h-24 text-center text-xs text-muted-foreground">
                    No questions match the selected filter.
                  </TableCell>
                </TableRow>
              ) : (
                filteredQuestions.map(({ q, idx, userAns }) => {
                  const isCorrect = userAns === q.answer;
                  const isExpanded = !!expandedRationale[idx];

                  return (
                    <Fragment key={idx}>
                      <TableRow className="hover:bg-accent/30 text-xs sm:text-sm">
                        {/* Number */}
                        <TableCell className="text-center font-bold text-xs py-2.5">
                          {idx + 1}
                        </TableCell>

                        {/* Question Text */}
                        <TableCell className="text-xs sm:text-sm font-medium text-foreground py-2.5">
                          <p className="line-clamp-2 leading-relaxed">{q.question}</p>
                        </TableCell>

                        {/* Your Choice */}
                        <TableCell className="hidden md:table-cell text-xs py-2.5">
                          {userAns !== undefined ? (
                            <span
                              className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs font-medium ${
                                isCorrect
                                  ? "bg-success/15 text-success"
                                  : "bg-destructive/15 text-destructive"
                              }`}
                            >
                              {String.fromCharCode(65 + userAns)}. {q.choices[userAns]}
                            </span>
                          ) : (
                            <span className="text-muted-foreground italic">Skipped</span>
                          )}
                        </TableCell>

                        {/* Correct Answer */}
                        <TableCell className="hidden md:table-cell text-xs py-2.5">
                          <span className="inline-flex items-center gap-1 rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-foreground">
                            {String.fromCharCode(65 + q.answer)}. {q.choices[q.answer]}
                          </span>
                        </TableCell>

                        {/* Status */}
                        <TableCell className="text-center py-2.5">
                          {isCorrect ? (
                            <span className="inline-flex items-center gap-1 rounded-full bg-success/15 px-2.5 py-0.5 text-xs font-semibold text-success">
                              <Check className="h-3 w-3" /> Correct
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 rounded-full bg-destructive/15 px-2.5 py-0.5 text-xs font-semibold text-destructive">
                              <X className="h-3 w-3" /> Wrong
                            </span>
                          )}
                        </TableCell>

                        {/* Rationale Toggle */}
                        <TableCell className="text-right py-2.5">
                          <button
                            type="button"
                            onClick={() => toggleRationale(idx)}
                            className="inline-flex items-center gap-1 rounded-lg border border-border bg-background px-2.5 py-1 text-xs font-medium text-primary hover:bg-accent transition-colors cursor-pointer"
                          >
                            <span>{isExpanded ? "Hide" : "View"}</span>
                            {isExpanded ? (
                              <ChevronUp className="h-3.5 w-3.5" />
                            ) : (
                              <ChevronDown className="h-3.5 w-3.5" />
                            )}
                          </button>
                        </TableCell>
                      </TableRow>

                      {/* Expandable Rationale Details Row */}
                      {isExpanded && (
                        <TableRow className="bg-muted/20">
                          <TableCell colSpan={6} className="p-3.5 sm:p-4">
                            <div className="rounded-xl border border-primary/25 bg-background p-3.5 sm:p-4 text-xs sm:text-sm space-y-2.5">
                              <div className="flex items-center gap-2 text-primary font-bold">
                                <Sparkles className="h-4 w-4" />
                                <span>Question {idx + 1} Detailed Breakdown</span>
                              </div>
                              <p className="text-foreground font-semibold leading-relaxed">{q.question}</p>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                                {q.choices.map((c, cIdx) => (
                                  <div
                                    key={cIdx}
                                    className={`rounded-lg border p-2.5 text-xs flex items-center gap-2 ${
                                      cIdx === q.answer
                                        ? "border-success/60 bg-success/10 font-semibold text-success"
                                        : cIdx === userAns
                                          ? "border-destructive/60 bg-destructive/10 text-destructive"
                                          : "border-border/60 bg-muted/30 text-muted-foreground"
                                    }`}
                                  >
                                    <span className="font-bold">
                                      {String.fromCharCode(65 + cIdx)}.
                                    </span>
                                    <span className="flex-1">{c}</span>
                                    {cIdx === q.answer && (
                                      <CheckCircle2 className="h-4 w-4 text-success ml-auto shrink-0" />
                                    )}
                                    {cIdx === userAns && cIdx !== q.answer && (
                                      <XCircle className="h-4 w-4 text-destructive ml-auto shrink-0" />
                                    )}
                                  </div>
                                ))}
                              </div>

                              {q.rationale && (
                                <div className="mt-2 rounded-lg bg-muted/40 p-3 text-muted-foreground text-xs sm:text-sm leading-relaxed">
                                  <span className="font-bold text-foreground">Rationale: </span>
                                  {q.rationale}
                                </div>
                              )}
                            </div>
                          </TableCell>
                        </TableRow>
                      )}
                    </Fragment>
                  );
                })
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
