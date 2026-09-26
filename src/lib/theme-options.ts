export type ThemeColor = "pink" | "red" | "blue" | "green" | "white";
export type DisplayMode = "light" | "dark";

export interface ThemeOption {
  id: ThemeColor;
  name: string;
  description: string;
  colorPreview: string;
  darkColorPreview: string;
  isDefault?: boolean;
}

export const THEME_OPTIONS: ThemeOption[] = [
  {
    id: "pink",
    name: "Pink",
    description: "Original warm rose accent",
    colorPreview: "oklch(0.68 0.18 355)",
    darkColorPreview: "oklch(0.78 0.16 350)",
    isDefault: true,
  },
  {
    id: "red",
    name: "Red",
    description: "Bold crimson ruby accent",
    colorPreview: "oklch(0.60 0.22 25)",
    darkColorPreview: "oklch(0.72 0.20 25)",
  },
  {
    id: "blue",
    name: "Blue",
    description: "Calm royal ocean accent",
    colorPreview: "oklch(0.58 0.20 250)",
    darkColorPreview: "oklch(0.72 0.18 245)",
  },
  {
    id: "green",
    name: "Green",
    description: "Fresh emerald mint accent",
    colorPreview: "oklch(0.58 0.17 150)",
    darkColorPreview: "oklch(0.74 0.16 150)",
  },
  {
    id: "white",
    name: "White",
    description: "Modern minimalist monochrome",
    colorPreview: "oklch(0.20 0.01 260)",
    darkColorPreview: "oklch(0.95 0.005 260)",
  },
];
