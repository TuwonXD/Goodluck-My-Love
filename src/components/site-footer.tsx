import { Facebook, Github, Linkedin } from "lucide-react";

export interface SocialLink {
  name: string;
  href: string;
  icon: typeof Facebook;
  ariaLabel: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/imsamuelsmh",
    icon: Facebook,
    ariaLabel: "Samuel Antonio Oracion on Facebook",
  },
  {
    name: "GitHub",
    href: "https://github.com/TuwonXD",
    icon: Github,
    ariaLabel: "Tuwon on GitHub",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/imsamuelsmh",
    icon: Linkedin,
    ariaLabel: "Samuel Antonio Oracion on LinkedIn",
  },
];

export function SiteFooter() {
  return (
    <footer className="sticky bottom-0 z-30 border-t border-border/60 bg-background/85 backdrop-blur-md py-3 text-xs text-muted-foreground mt-auto">
      <div className="mx-auto flex max-w-5xl flex-col sm:flex-row items-center justify-between gap-3 px-4 sm:px-6 md:px-8">
        <p className="text-center sm:text-left">
          for <span className="font-semibold text-foreground">Vien, RN</span>. from{" "}
          <span className="font-semibold text-foreground">Tuwon</span>
        </p>

        <div className="flex items-center gap-2">
          {SOCIAL_LINKS.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.ariaLabel}
                title={item.name}
                className="grid h-8 w-8 place-items-center rounded-full border border-border bg-card text-foreground/75 transition-all duration-150 hover:border-primary/50 hover:bg-accent/40 hover:text-primary hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 active:scale-95 cursor-pointer"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
