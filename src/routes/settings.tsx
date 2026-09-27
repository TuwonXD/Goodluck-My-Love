import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  Check,
  Moon,
  Sun,
  Palette,
  Sparkles,
  Video,
  Play,
  RotateCcw,
  CheckCircle2,
  HelpCircle,
  Eye,
  Lock,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { Switch } from "@/components/ui/switch";
import { THEME_OPTIONS, useSettings } from "@/lib/theme";
import { CorrectAnswerVideoModal } from "@/components/correct-answer-video-modal";
import { VideoPasscodeModal } from "@/components/video-passcode-modal";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — VeeRN" },
      {
        name: "description",
        content: "Customize theme colors, display mode, and interactive review options.",
      },
    ],
  }),
  component: SettingsPage,
});

function SettingsPage() {
  const {
    themeColor,
    setThemeColor,
    displayMode,
    setDisplayMode,
    correctAnswerVideo,
    setCorrectAnswerVideo,
    resetToDefaults,
  } = useSettings();

  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showPasscodeModal, setShowPasscodeModal] = useState(false);
  const [pendingPreview, setPendingPreview] = useState(false);
  const currentTheme = THEME_OPTIONS.find((t) => t.id === themeColor) ?? THEME_OPTIONS[0];

  const handleToggleVideo = (checked: boolean) => {
    if (checked) {
      // Prompt for passcode before turning on
      setPendingPreview(false);
      setShowPasscodeModal(true);
    } else {
      // Allow turning off directly
      setCorrectAnswerVideo(false);
    }
  };

  const handlePreviewClick = () => {
    if (correctAnswerVideo) {
      setShowVideoModal(true);
    } else {
      // Prompt for passcode before opening preview
      setPendingPreview(true);
      setShowPasscodeModal(true);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <div>
        <SiteHeader />
        <main className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8 py-5 sm:py-6">
          {/* Top Bar Navigation & Header */}
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-3.5">
            <div className="flex items-center gap-3">
              <Link
                to="/subjects"
                className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-3.5 py-2 text-xs sm:text-sm font-semibold text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Subjects</span>
              </Link>
              <div>
                <h1 className="font-display text-xl sm:text-2xl font-bold tracking-tight">
                  Settings & Customization
                </h1>
              </div>
            </div>

            {/* Reset Defaults button in top bar */}
            <button
              type="button"
              onClick={resetToDefaults}
              className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-3.5 py-2 text-xs sm:text-sm font-semibold text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary cursor-pointer"
              title="Reset all settings to defaults"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Reset Defaults</span>
            </button>
          </div>

          {/* 2-Column Dashboard Layout (Zoomed-in & Prominent) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Left Column: Appearance & Gameplay Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              {/* 1. Appearance Card */}
              <section className="rounded-3xl border border-border bg-card p-5 sm:p-6 shadow-xs">
                <div className="mb-4 flex items-center justify-between border-b border-border/60 pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary/10 text-primary">
                      <Palette className="h-4.5 w-4.5" />
                    </span>
                    <h2 className="font-display text-base sm:text-lg font-bold tracking-tight text-foreground">
                      Appearance
                    </h2>
                  </div>
                  <span className="rounded-full bg-primary/15 px-3 py-0.5 text-xs font-bold text-primary capitalize">
                    {currentTheme.name} · {displayMode === "dark" ? "Dark" : "Light"}
                  </span>
                </div>

                {/* Theme Color Picker: 5 Swatch Cards */}
                <div className="mb-5">
                  <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-muted-foreground mb-2.5 block">
                    Theme Color
                  </label>

                  <div className="grid grid-cols-5 gap-2.5">
                    {THEME_OPTIONS.map((opt) => {
                      const isSelected = themeColor === opt.id;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setThemeColor(opt.id)}
                          className={[
                            "group relative flex flex-col items-center gap-2 rounded-2xl border p-3 text-center transition-all cursor-pointer",
                            isSelected
                              ? "border-primary bg-primary/10 ring-2 ring-primary/30 shadow-xs"
                              : "border-border bg-background/60 hover:border-primary/40 hover:bg-accent/40",
                          ].join(" ")}
                        >
                          {/* Color circle preview */}
                          <span
                            className="relative grid h-8 w-8 sm:h-9 sm:w-9 shrink-0 place-items-center rounded-full shadow-xs ring-1 ring-black/10 dark:ring-white/20 transition-transform group-hover:scale-105"
                            style={{
                              backgroundColor:
                                displayMode === "dark" ? opt.darkColorPreview : opt.colorPreview,
                            }}
                          >
                            {isSelected && (
                              <Check
                                className={`h-4 w-4 stroke-[3] ${
                                  opt.id === "white" && displayMode === "dark"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              />
                            )}
                          </span>

                          <span className="font-bold text-xs sm:text-sm text-foreground truncate w-full">
                            {opt.name}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Display Mode Switcher */}
                <div>
                  <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-muted-foreground mb-2.5 block">
                    Display Mode
                  </label>

                  <div className="grid grid-cols-2 gap-3">
                    {/* Light Mode */}
                    <button
                      type="button"
                      onClick={() => setDisplayMode("light")}
                      className={[
                        "flex items-center gap-3 rounded-2xl border p-3.5 sm:p-4 text-left transition-all cursor-pointer",
                        displayMode === "light"
                          ? "border-primary bg-primary/10 ring-2 ring-primary/30 shadow-xs"
                          : "border-border bg-background/60 hover:border-primary/40 hover:bg-accent/40",
                      ].join(" ")}
                    >
                      <span
                        className={[
                          "grid h-8.5 w-8.5 place-items-center rounded-xl shrink-0",
                          displayMode === "light"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground",
                        ].join(" ")}
                      >
                        <Sun className="h-4.5 w-4.5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <span className="font-bold text-sm text-foreground block">
                          Light Mode
                        </span>
                        <span className="text-xs text-muted-foreground">Bright & clean</span>
                      </div>
                      {displayMode === "light" && (
                        <CheckCircle2 className="h-5 w-5 fill-primary text-primary-foreground shrink-0" />
                      )}
                    </button>

                    {/* Dark Mode */}
                    <button
                      type="button"
                      onClick={() => setDisplayMode("dark")}
                      className={[
                        "flex items-center gap-3 rounded-2xl border p-3.5 sm:p-4 text-left transition-all cursor-pointer",
                        displayMode === "dark"
                          ? "border-primary bg-primary/10 ring-2 ring-primary/30 shadow-xs"
                          : "border-border bg-background/60 hover:border-primary/40 hover:bg-accent/40",
                      ].join(" ")}
                    >
                      <span
                        className={[
                          "grid h-8.5 w-8.5 place-items-center rounded-xl shrink-0",
                          displayMode === "dark"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground",
                        ].join(" ")}
                      >
                        <Moon className="h-4.5 w-4.5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <span className="font-bold text-sm text-foreground block">
                          Dark Mode
                        </span>
                        <span className="text-xs text-muted-foreground">Gentle on eyes</span>
                      </div>
                      {displayMode === "dark" && (
                        <CheckCircle2 className="h-5 w-5 fill-primary text-primary-foreground shrink-0" />
                      )}
                    </button>
                  </div>
                </div>
              </section>

              {/* 2. Gameplay / Video Option Card */}
              <section className="rounded-3xl border border-border bg-card p-5 sm:p-6 shadow-xs">
                <div className="mb-4 flex items-center justify-between border-b border-border/60 pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary/10 text-primary">
                      <Sparkles className="h-4.5 w-4.5" />
                    </span>
                    <h2 className="font-display text-base sm:text-lg font-bold tracking-tight text-foreground">
                      Gameplay / Experience
                    </h2>
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${
                      correctAnswerVideo
                        ? "bg-success/15 text-success"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    Video: {correctAnswerVideo ? "On" : "Off"}
                  </span>
                </div>

                <div className="space-y-3.5 rounded-2xl border border-border bg-background/60 p-4 sm:p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3.5 min-w-0">
                      <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                        <Video className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-bold text-sm sm:text-base text-foreground">
                            Correct Answer Video Popup
                          </h3>
                          <span className="inline-flex items-center gap-1 rounded-md bg-primary/10 border border-primary/20 px-2 py-0.5 text-[10px] font-bold text-primary">
                            <Lock className="h-3 w-3" />
                            Passcode Protected
                          </span>
                        </div>
                        <p className="mt-0.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          Kung gusto nyo makiss bawat tamang sagot, open nyo to (baby ko na RN lang nakakaalam ng password)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 shrink-0 pt-1">
                      <span className="text-xs sm:text-sm font-semibold text-muted-foreground">
                        {correctAnswerVideo ? "On" : "Off"}
                      </span>
                      <Switch
                        checked={correctAnswerVideo}
                        onCheckedChange={handleToggleVideo}
                        aria-label="Toggle correct answer video popup"
                      />
                    </div>
                  </div>

                  {/* Video Showcase / Preview Button */}
                  <div className="flex flex-wrap items-center justify-between gap-2.5 border-t border-border/50 pt-3">
                    <span className="text-xs text-muted-foreground">
                      {correctAnswerVideo
                        ? "Watch the celebration video in full:"
                        : "Previewing requires entering the 6-digit passcode:"}
                    </span>
                    <button
                      type="button"
                      onClick={handlePreviewClick}
                      className={[
                        "inline-flex items-center gap-2 rounded-xl border px-3.5 py-2 text-xs sm:text-sm font-bold transition-all shadow-2xs cursor-pointer",
                        correctAnswerVideo
                          ? "bg-primary/15 border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary"
                          : "bg-muted/80 border-border text-muted-foreground hover:border-primary/40 hover:text-foreground hover:bg-card",
                      ].join(" ")}
                    >
                      {correctAnswerVideo ? (
                        <>
                          <Play className="h-3.5 w-3.5 fill-current" />
                          <span>Preview Video</span>
                        </>
                      ) : (
                        <>
                          <Lock className="h-3.5 w-3.5" />
                          <span>Unlock to Preview</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column: Live Interactive Theme & Quiz Preview (5 cols) */}
            <div className="lg:col-span-5">
              <section className="h-full rounded-3xl border border-border bg-card p-5 sm:p-6 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="mb-4 flex items-center justify-between border-b border-border/60 pb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary/10 text-primary">
                        <HelpCircle className="h-4.5 w-4.5" />
                      </span>
                      <h2 className="font-display text-base sm:text-lg font-bold tracking-tight text-foreground">
                        Live Preview
                      </h2>
                    </div>
                    <span className="rounded-full bg-primary/15 px-3 py-0.5 text-xs font-bold text-primary capitalize">
                      {themeColor} · {displayMode}
                    </span>
                  </div>

                  {/* Simulated Quiz UI Preview */}
                  <div className="space-y-3 rounded-2xl border border-border bg-background/60 p-4 text-xs sm:text-sm">
                    {/* Mock Question Header */}
                    <div className="flex items-center justify-between border-b border-border/40 pb-2 text-xs">
                      <span className="rounded-full bg-primary/15 px-2.5 py-0.5 font-bold text-primary">
                        Question 1 of 10
                      </span>
                      <span className="text-muted-foreground font-medium">MSN Review</span>
                    </div>

                    {/* Mock Question Prompt */}
                    <p className="font-bold text-foreground text-sm leading-snug">
                      Which nursing intervention is highest priority for this client?
                    </p>

                    {/* Mock Active Option */}
                    <div className="rounded-2xl border border-primary/60 bg-primary/10 p-3 text-foreground ring-2 ring-primary/30 flex items-center gap-2.5">
                      <span className="grid h-7 w-7 place-items-center rounded-xl bg-primary text-primary-foreground font-bold text-xs shrink-0">
                        A
                      </span>
                      <span className="font-semibold flex-1 text-xs sm:text-sm">
                        Administer prescribed IV oxygen therapy
                      </span>
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    </div>

                    {/* Mock Explanation Box */}
                    <div className="rounded-xl border border-primary/25 bg-primary/5 p-3 text-xs leading-relaxed">
                      <span className="font-bold text-primary">Rationale: </span>
                      <span className="text-foreground/90 font-medium">
                        Theme accents, borders, and buttons sync instantly.
                      </span>
                    </div>

                    {/* Mock Action Buttons */}
                    <div className="flex items-center justify-between gap-2.5 pt-1.5">
                      <button
                        type="button"
                        className="rounded-xl border border-border bg-background px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-accent cursor-pointer"
                      >
                        Prev
                      </button>
                      <button
                        type="button"
                        className="rounded-xl bg-primary px-4 py-1.5 text-xs sm:text-sm font-bold text-primary-foreground shadow-xs hover:opacity-90 cursor-pointer"
                      >
                        Next Question
                      </button>
                    </div>
                  </div>
                </div>

                {/* Footer Video Status & Note */}
                <div className="mt-4 pt-3 border-t border-border/50 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
                  <button
                    type="button"
                    onClick={() => setShowVideoModal(true)}
                    className="inline-flex items-center gap-1.5 font-bold text-primary hover:underline cursor-pointer"
                  >
                  
                  </button>
                  <span className="font-medium text-foreground/75">Saved automatically</span>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>

      <footer className="py-4 text-center text-xs text-muted-foreground border-t border-border/40">
        by Tuwon
      </footer>

      {/* Video Preview Modal */}
      {showVideoModal && (
        <CorrectAnswerVideoModal onContinue={() => setShowVideoModal(false)} />
      )}

      {/* Video Passcode Security Modal */}
      {showPasscodeModal && (
        <VideoPasscodeModal
          onSuccess={() => {
            setCorrectAnswerVideo(true);
            setShowPasscodeModal(false);
            if (pendingPreview) {
              setShowVideoModal(true);
              setPendingPreview(false);
            }
          }}
          onCancel={() => {
            setShowPasscodeModal(false);
            setPendingPreview(false);
          }}
        />
      )}
    </div>
  );
}

