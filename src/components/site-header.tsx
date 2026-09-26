import { Link } from "@tanstack/react-router";
import { Moon, Sun, Heart, Settings } from "lucide-react";
import { useSettings } from "@/lib/theme";

export function SiteHeader() {
  const { displayMode, toggleDisplayMode } = useSettings();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 sm:px-6 md:px-8 py-3.5">
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="grid h-8.5 w-8.5 place-items-center rounded-full bg-primary/15 text-primary transition-colors group-hover:bg-primary/25">
            <Heart className="h-4.5 w-4.5 fill-current" />
          </span>
          <span className="font-display text-lg sm:text-xl font-bold tracking-tight">
            VeeRN
          </span>
        </Link>
        <div className="flex items-center gap-2 sm:gap-2.5">
          <Link
            to="/subjects"
            activeProps={{
              className: "border-primary text-primary bg-primary/10",
            }}
            className="inline-flex items-center rounded-xl border border-border bg-card px-3 py-1.5 text-xs sm:text-sm font-semibold text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
          >
            Subjects
          </Link>
          <Link
            to="/settings"
            aria-label="Settings"
            activeProps={{
              className:
                "border-primary text-primary bg-primary/10 hover:bg-primary/15 hover:text-primary ring-2 ring-primary/20",
            }}
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <Settings className="h-4 w-4" />
          </Link>
          <button
            onClick={toggleDisplayMode}
            aria-label="Toggle display mode"
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer"
          >
            {displayMode === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </header>
  );
}
