import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Check,
  Moon,
  Sun,
  Palette,
  Sparkles,
  Video,
  RotateCcw,
  CheckCircle2,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { Switch } from "@/components/ui/switch";
import { THEME_OPTIONS, useSettings, type ThemeColor, type DisplayMode } from "@/lib/theme";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — Goodluck, RNs" },
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

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-2xl px-5 pb-24 pt-6">
        {/* Back Link */}
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to subjects
          </Link>
        </div>

        {/* Page Header */}
        <header className="mt-6 mb-8">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-primary">
            Preferences
          </p>
          <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Settings
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Personalize your theme appearance, dark mode, and quiz gameplay behavior.
          </p>
        </header>

        <div className="space-y-8">
          {/* 1. Appearance Section */}
          <section className="rounded-3xl border border-border bg-card p-6 sm:p-7 shadow-xs">
            <div className="mb-6 flex items-center gap-2.5 border-b border-border/60 pb-4">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary/10 text-primary">
                <Palette className="h-4 w-4" />
              </span>
              <div>
                <h2 className="font-display text-lg font-semibold tracking-tight">Appearance</h2>
                <p className="text-xs text-muted-foreground">
                  Customize the visual identity and display mode
                </p>
              </div>
            </div>

            {/* Theme Color Picker */}
            <div className="mb-8">
              <div className="mb-3">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Theme Color
                </label>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Applied across buttons, active states, progress indicators, and UI accents.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {THEME_OPTIONS.map((opt) => {
                  const isSelected = themeColor === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setThemeColor(opt.id)}
                      className={[
                        "group relative flex items-center gap-3.5 rounded-2xl border p-3.5 text-left transition-all cursor-pointer",
                        isSelected
                          ? "border-primary bg-primary/8 ring-2 ring-primary/20"
                          : "border-border bg-background/60 hover:border-primary/40 hover:bg-accent/40",
                      ].join(" ")}
                    >
                      {/* Color circle preview */}
                      <span
                        className="relative grid h-7 w-7 shrink-0 place-items-center rounded-full shadow-xs ring-1 ring-black/10 dark:ring-white/20"
                        style={{
                          backgroundColor:
                            displayMode === "dark" ? opt.darkColorPreview : opt.colorPreview,
                        }}
                      >
                        {isSelected && (
                          <Check
                            className={`h-3.5 w-3.5 stroke-[3] ${
                              opt.id === "white" && displayMode === "dark"
                                ? "text-black"
                                : "text-white"
                            }`}
                          />
                        )}
                      </span>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <span className="font-medium text-sm text-foreground">{opt.name}</span>
                          {opt.isDefault && (
                            <span className="rounded-full bg-primary/15 px-1.5 py-0.5 text-[10px] font-semibold text-primary">
                              Default
                            </span>
                          )}
                        </div>
                        <p className="truncate text-xs text-muted-foreground">{opt.description}</p>
                      </div>

                      {isSelected && (
                        <div className="shrink-0 text-primary">
                          <CheckCircle2 className="h-4 w-4 fill-primary text-primary-foreground" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Display Mode (Light / Dark) */}
            <div>
              <div className="mb-3">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Display Mode
                </label>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Switch between light and dark backgrounds.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {/* Light Mode Option */}
                <button
                  type="button"
                  onClick={() => setDisplayMode("light")}
                  className={[
                    "flex flex-col items-start gap-2 rounded-2xl border p-4 text-left transition-all cursor-pointer",
                    displayMode === "light"
                      ? "border-primary bg-primary/8 ring-2 ring-primary/20"
                      : "border-border bg-background/60 hover:border-primary/40 hover:bg-accent/40",
                  ].join(" ")}
                >
                  <div className="flex w-full items-center justify-between">
                    <span
                      className={[
                        "grid h-8 w-8 place-items-center rounded-xl",
                        displayMode === "light"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground",
                      ].join(" ")}
                    >
                      <Sun className="h-4 w-4" />
                    </span>
                    {displayMode === "light" && (
                      <CheckCircle2 className="h-4 w-4 fill-primary text-primary-foreground" />
                    )}
                  </div>
                  <div>
                    <span className="font-medium text-sm text-foreground">Light Mode</span>
                    <p className="mt-0.5 text-xs text-muted-foreground">Bright & clean interface</p>
                  </div>
                </button>

                {/* Dark Mode Option */}
                <button
                  type="button"
                  onClick={() => setDisplayMode("dark")}
                  className={[
                    "flex flex-col items-start gap-2 rounded-2xl border p-4 text-left transition-all cursor-pointer",
                    displayMode === "dark"
                      ? "border-primary bg-primary/8 ring-2 ring-primary/20"
                      : "border-border bg-background/60 hover:border-primary/40 hover:bg-accent/40",
                  ].join(" ")}
                >
                  <div className="flex w-full items-center justify-between">
                    <span
                      className={[
                        "grid h-8 w-8 place-items-center rounded-xl",
                        displayMode === "dark"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground",
                      ].join(" ")}
                    >
                      <Moon className="h-4 w-4" />
                    </span>
                    {displayMode === "dark" && (
                      <CheckCircle2 className="h-4 w-4 fill-primary text-primary-foreground" />
                    )}
                  </div>
                  <div>
                    <span className="font-medium text-sm text-foreground">Dark Mode</span>
                    <p className="mt-0.5 text-xs text-muted-foreground">Gentle on the eyes</p>
                  </div>
                </button>
              </div>
            </div>
          </section>

          {/* 2. Gameplay / Experience Section */}
          <section className="rounded-3xl border border-border bg-card p-6 sm:p-7 shadow-xs">
            <div className="mb-6 flex items-center gap-2.5 border-b border-border/60 pb-4">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary/10 text-primary">
                <Sparkles className="h-4 w-4" />
              </span>
              <div>
                <h2 className="font-display text-lg font-semibold tracking-tight">
                  Gameplay / Experience
                </h2>
                <p className="text-xs text-muted-foreground">
                  Fine-tune quiz interactions and celebration popups
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-2xl border border-border bg-background/60 p-4 sm:p-5">
              <div className="flex items-start gap-3.5">
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Video className="h-4 w-4" />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-sm text-foreground">Correct Answer Video</h3>
                    <span
                      className={[
                        "rounded-full px-2 py-0.5 text-[11px] font-semibold",
                        correctAnswerVideo
                          ? "bg-success/15 text-success"
                          : "bg-muted text-muted-foreground",
                      ].join(" ")}
                    >
                      {correctAnswerVideo ? "On" : "Off"}
                    </span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground max-w-md">
                    Play celebration video popup when answering correctly. When turned off, correct
                    answers highlight immediately without showing the video.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:self-center pl-12 sm:pl-0">
                <span className="text-xs font-semibold text-muted-foreground">
                  {correctAnswerVideo ? "Enabled" : "Disabled"}
                </span>
                <Switch
                  checked={correctAnswerVideo}
                  onCheckedChange={setCorrectAnswerVideo}
                  aria-label="Toggle correct answer video popup"
                />
              </div>
            </div>
          </section>

          {/* 3. Live Theme Preview Card */}
          <section className="rounded-3xl border border-border bg-card p-6 sm:p-7 shadow-xs">
            <h2 className="mb-1 font-display text-base font-semibold tracking-tight">
              Live Theme Preview
            </h2>
            <p className="mb-4 text-xs text-muted-foreground">
              Preview how buttons, highlights, and cards look with your selected{" "}
              <span className="font-semibold text-primary capitalize">{themeColor}</span> theme in{" "}
              <span className="font-semibold capitalize">{displayMode} Mode</span>.
            </p>

            <div className="space-y-3 rounded-2xl border border-border bg-background/60 p-4">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-xs transition-opacity hover:opacity-90"
                >
                  Primary Action Button
                </button>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-4 py-2 text-xs font-medium text-foreground hover:bg-accent"
                >
                  Secondary Button
                </button>
                <span className="inline-flex items-center rounded-full bg-primary/15 px-2.5 py-1 text-xs font-semibold text-primary">
                  Accent Pill Badge
                </span>
              </div>

              <div className="rounded-xl border border-primary/30 bg-primary/5 p-3.5 text-xs">
                <span className="font-semibold text-primary">Sample Highlighted Box:</span>{" "}
                <span className="text-foreground/85">
                  Consistent typography, badges, and accents in {themeColor} theme.
                </span>
              </div>
            </div>
          </section>

          {/* Reset Defaults */}
          <div className="pt-2 text-center">
            <button
              type="button"
              onClick={resetToDefaults}
              className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-primary cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Reset all settings to default
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
