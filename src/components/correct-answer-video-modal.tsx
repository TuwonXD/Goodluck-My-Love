import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface CorrectAnswerVideoModalProps {
  onContinue: () => void;
}

export function CorrectAnswerVideoModal({ onContinue }: CorrectAnswerVideoModalProps) {
  // The modal itself renders immediately (optimistic) instead of waiting on
  // the video to be ready; a skeleton fills the frame until it can play.
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onContinue();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onContinue]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 animate-in fade-in-0"
      role="dialog"
      aria-modal="true"
      aria-label="Correct answer celebration"
    >
      <div className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-card shadow-2xl animate-in zoom-in-95">
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={onContinue}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 grid h-8 w-8 place-items-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/60"
            >
              <X className="h-4 w-4" />
            </button>
          </TooltipTrigger>
          <TooltipContent>Close</TooltipContent>
        </Tooltip>
        <div className="relative aspect-[9/16] w-full bg-black">
          {!videoReady && <Skeleton className="absolute inset-0 rounded-none" />}
          <video
            src="/correct-answer.mp4"
            autoPlay
            playsInline
            onEnded={onContinue}
            onCanPlay={() => setVideoReady(true)}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="p-4 text-center">
          <button
            onClick={onContinue}
            className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
