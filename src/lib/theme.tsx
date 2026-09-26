import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { ThemeColor, DisplayMode } from "./theme-options";

export type { ThemeColor, DisplayMode, ThemeOption } from "./theme-options";
export { THEME_OPTIONS } from "./theme-options";

export interface SettingsContextType {
  themeColor: ThemeColor;
  setThemeColor: (color: ThemeColor) => void;
  displayMode: DisplayMode;
  setDisplayMode: (mode: DisplayMode) => void;
  toggleDisplayMode: () => void;
  correctAnswerVideo: boolean;
  setCorrectAnswerVideo: (enabled: boolean) => void;
  resetToDefaults: () => void;
  // Aliases for backwards compatibility with useTheme:
  theme: DisplayMode;
  toggle: () => void;
}

const SettingsContext = createContext<SettingsContextType>({
  themeColor: "pink",
  setThemeColor: () => {},
  displayMode: "light",
  setDisplayMode: () => {},
  toggleDisplayMode: () => {},
  correctAnswerVideo: true,
  setCorrectAnswerVideo: () => {},
  resetToDefaults: () => {},
  theme: "light",
  toggle: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeColor, setThemeColorState] = useState<ThemeColor>("pink");
  const [displayMode, setDisplayModeState] = useState<DisplayMode>("light");
  const [correctAnswerVideo, setCorrectAnswerVideoState] = useState<boolean>(true);

  useEffect(() => {
    try {
      const storedColor = localStorage.getItem("gml-theme-color") as ThemeColor | null;
      if (storedColor && ["pink", "red", "blue", "green", "white"].includes(storedColor)) {
        setThemeColorState(storedColor);
      }

      const storedMode =
        (localStorage.getItem("gml-display-mode") as DisplayMode | null) ??
        (localStorage.getItem("gml-theme") as DisplayMode | null);
      const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
      const initialMode: DisplayMode = storedMode ?? (prefersDark ? "dark" : "light");
      setDisplayModeState(initialMode);

      const storedVideo = localStorage.getItem("gml-correct-video");
      if (storedVideo !== null) {
        setCorrectAnswerVideoState(storedVideo === "true");
      }
    } catch {
      // ignore localStorage errors in private browsing
    }
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;

    root.classList.toggle("dark", displayMode === "dark");
    root.setAttribute("data-theme", themeColor);

    try {
      localStorage.setItem("gml-theme", displayMode);
      localStorage.setItem("gml-display-mode", displayMode);
      localStorage.setItem("gml-theme-color", themeColor);
      localStorage.setItem("gml-correct-video", String(correctAnswerVideo));
    } catch {
      // ignore
    }
  }, [displayMode, themeColor, correctAnswerVideo]);

  const setThemeColor = (color: ThemeColor) => {
    setThemeColorState(color);
  };

  const setDisplayMode = (mode: DisplayMode) => {
    setDisplayModeState(mode);
  };

  const toggleDisplayMode = () => {
    setDisplayModeState((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const setCorrectAnswerVideo = (enabled: boolean) => {
    setCorrectAnswerVideoState(enabled);
  };

  const resetToDefaults = () => {
    setThemeColorState("pink");
    setDisplayModeState("light");
    setCorrectAnswerVideoState(true);
  };

  return (
    <SettingsContext.Provider
      value={{
        themeColor,
        setThemeColor,
        displayMode,
        setDisplayMode,
        toggleDisplayMode,
        correctAnswerVideo,
        setCorrectAnswerVideo,
        resetToDefaults,
        theme: displayMode,
        toggle: toggleDisplayMode,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export const useSettings = () => useContext(SettingsContext);
export const useTheme = () => useContext(SettingsContext);
