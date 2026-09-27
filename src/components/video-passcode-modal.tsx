import { useState, useRef, useEffect } from "react";
import { Lock, X, KeyRound, AlertCircle, CheckCircle2, ShieldCheck } from "lucide-react";

interface VideoPasscodeModalProps {
  onSuccess: () => void;
  onCancel: () => void;
}

const REQUIRED_PASSCODE = "060526";

export function VideoPasscodeModal({ onSuccess, onCancel }: VideoPasscodeModalProps) {
  const [pin, setPin] = useState<string[]>(["", "", "", "", "", ""]);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Focus the first empty slot on mount
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  // Handle escape key
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onCancel();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onCancel]);

  const verifyPasscode = (code: string) => {
    if (code === REQUIRED_PASSCODE) {
      setError(null);
      setIsSuccess(true);
      setTimeout(() => {
        onSuccess();
      }, 500);
    } else {
      setError("Incorrect passcode. Please try again.");
      setPin(["", "", "", "", "", ""]);
      setTimeout(() => {
        inputRefs.current[0]?.focus();
      }, 50);
    }
  };

  const handleInputChange = (index: number, value: string) => {
    setError(null);

    // Handle paste of whole code
    if (value.length > 1) {
      const sanitized = value.replace(/\D/g, "").slice(0, 6);
      const newPin = [...pin];
      for (let i = 0; i < 6; i++) {
        newPin[i] = sanitized[i] || "";
      }
      setPin(newPin);
      if (sanitized.length === 6) {
        verifyPasscode(sanitized);
      } else {
        const nextIndex = Math.min(sanitized.length, 5);
        inputRefs.current[nextIndex]?.focus();
      }
      return;
    }

    const digit = value.replace(/\D/g, "");
    const newPin = [...pin];
    newPin[index] = digit;
    setPin(newPin);

    if (digit && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    const currentEntered = newPin.join("");
    if (currentEntered.length === 6) {
      verifyPasscode(currentEntered);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      if (!pin[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    } else if (e.key === "Enter") {
      const fullCode = pin.join("");
      if (fullCode.length === 6) {
        verifyPasscode(fullCode);
      } else {
        setError("Please enter all 6 digits.");
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullCode = pin.join("");
    if (fullCode.length === 6) {
      verifyPasscode(fullCode);
    } else {
      setError("Please enter all 6 digits.");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4 animate-in fade-in-0 duration-150"
      role="dialog"
      aria-modal="true"
      aria-labelledby="passcode-title"
    >
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-2xl animate-in zoom-in-95 duration-150 text-foreground">
        {/* Close Button */}
        <button
          type="button"
          onClick={onCancel}
          aria-label="Close"
          className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-muted/80 hover:text-foreground cursor-pointer"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-col items-center text-center">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary mb-3 shadow-inner">
            {isSuccess ? (
              <ShieldCheck className="h-6 w-6 text-success animate-in zoom-in" />
            ) : (
              <Lock className="h-6 w-6" />
            )}
          </span>
          <h2 id="passcode-title" className="font-display text-xl font-bold tracking-tight">
            Passcode Required
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground max-w-xs">
            Enter the 6-digit passcode to enable the correct answer video celebration popup.
          </p>
        </div>

        {/* PIN Input Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="flex justify-center items-center gap-2 sm:gap-2.5">
            {pin.map((digit, idx) => (
              <input
                key={idx}
                ref={(el) => {
                  inputRefs.current[idx] = el;
                }}
                type="password"
                inputMode="numeric"
                maxLength={6}
                value={digit}
                onChange={(e) => handleInputChange(idx, e.target.value)}
                onKeyDown={(e) => handleKeyDown(idx, e)}
                disabled={isSuccess}
                aria-label={`Digit ${idx + 1}`}
                className={[
                  "h-12 w-11 sm:h-13 sm:w-12 rounded-2xl border text-center text-xl font-bold transition-all focus:outline-hidden",
                  error
                    ? "border-destructive bg-destructive/10 text-destructive ring-2 ring-destructive/30"
                    : isSuccess
                      ? "border-success bg-success/10 text-success ring-2 ring-success/30"
                      : digit
                        ? "border-primary bg-primary/10 text-foreground ring-2 ring-primary/20"
                        : "border-input bg-background/60 text-foreground focus:border-primary focus:ring-2 focus:ring-primary/30",
                ].join(" ")}
              />
            ))}
          </div>

          {/* Error / Success Feedback */}
          {error && (
            <div className="flex items-center justify-center gap-1.5 text-xs sm:text-sm font-semibold text-destructive animate-in fade-in-0 slide-in-from-top-1">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {isSuccess && (
            <div className="flex items-center justify-center gap-1.5 text-xs sm:text-sm font-semibold text-success animate-in fade-in-0">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              <span>Passcode accepted! Turning on video popup...</span>
            </div>
          )}

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 pt-3">
            <button
              type="button"
              onClick={onCancel}
              className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSuccess || pin.join("").length < 6}
              className="w-full rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground shadow-xs transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-1.5"
            >
              <KeyRound className="h-4 w-4" />
              <span>Unlock</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
