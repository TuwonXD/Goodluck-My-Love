import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Sparkles,
  CheckCircle2,
  Heart,
  Palette,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { subjects } from "@/lib/quiz-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VeeRN — A PNLE Reviewer" },
      {
        name: "description",
        content:
          "A calm, distraction-free PNLE review companion built with love. Practice test questions, learn from rationales, and master the board exam.",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  const totalQuestions = subjects.reduce(
    (acc, s) => acc + s.banks.reduce((n, b) => n + b.questions.length, 0),
    0,
  );

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <div>
        <SiteHeader />
        <main className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8 py-8 sm:py-12">
          {/* Hero Section */}
          <section className="text-center flex flex-col items-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary shadow-xs mb-6">
              <Heart className="h-3.5 w-3.5 fill-current" />
              <span>VeeRN PNLE Reviewer</span>
            </div>

            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight whitespace-nowrap">
              To Top & <span className="text-primary">Pass the Board Exam</span>
            </h1>

            <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              A distraction-free study companion built to help you master the{" "}
              <strong className="text-foreground font-semibold">
                Philippine Nurse Licensure Examination (PNLE)
              </strong>
              . Practice high-yield questions, explore in-depth rationales, and build unwavering confidence.
            </p>

            <div className="mt-4 inline-flex items-center gap-2 rounded-xl bg-muted/60 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-muted-foreground">
              <GraduationCap className="h-4 w-4 text-primary" />
              <span>First Take, Last Take, No Retakes!</span>
            </div>

            {/* Main Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <Link
                to="/subjects"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-sm transition-all hover:opacity-95 hover:shadow-md cursor-pointer group"
              >
                <span>Start Reviewing</span>
                <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/settings"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border border-border bg-card px-6 py-4 text-base font-semibold text-foreground transition-colors hover:border-primary/50 hover:bg-accent/40 shadow-xs cursor-pointer"
              >
                <Palette className="h-4.5 w-4.5 text-primary" />
                <span>Customize Theme</span>
              </Link>
            </div>
          </section>

          {/* Key Feature Cards Grid */}
          <section className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {/* Feature 1 */}
            <div className="rounded-3xl border border-border bg-card p-5 sm:p-6 shadow-xs flex flex-col justify-between">
              <div>
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary mb-4">
                  <BookOpen className="h-5 w-5" />
                </span>
                <h3 className="font-display text-base sm:text-lg font-bold text-foreground">
                  9 Core Subjects
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Comprehensive coverage across Medical-Surgical, Maternal & Child, Psychiatric, CHN, Fundamentals, Pharmacology, and Recall Banks ({totalQuestions}+ questions).
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-border/50 text-xs font-semibold text-primary flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>Organized Test Banks</span>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="rounded-3xl border border-border bg-card p-5 sm:p-6 shadow-xs flex flex-col justify-between">
              <div>
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary mb-4">
                  <Sparkles className="h-5 w-5" />
                </span>
                <h3 className="font-display text-base sm:text-lg font-bold text-foreground">
                  Detailed Rationales
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Instant answer keys with clinical explanations for every option, plus a post-quiz Mistakes Review Table to focus on growth areas.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-border/50 text-xs font-semibold text-primary flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>Mistakes Review Table</span>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="rounded-3xl border border-border bg-card p-5 sm:p-6 shadow-xs flex flex-col justify-between">
              <div>
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary mb-4">
                  <Palette className="h-5 w-5" />
                </span>
                <h3 className="font-display text-base sm:text-lg font-bold text-foreground">
                  Customizable Aesthetics
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Personalize your review environment with 5 color themes (Pink, Red, Blue, Green, White), dark mode, question count pickers, and video popup controls.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-border/50 text-xs font-semibold text-primary flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>Light & Dark Mode</span>
              </div>
            </div>
          </section>
        </main>
      </div>

      <SiteFooter />
    </div>
  );
}
