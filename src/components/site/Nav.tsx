import { Logo } from "./Logo";

const links = [
  { href: "#problemet", label: "Problemet" },
  { href: "#proces", label: "Sådan fungerer det" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Logo />
        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-[var(--navy)]"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#kontakt"
          className="inline-flex h-10 items-center rounded-full bg-[var(--navy)] px-5 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
        >
          Få gratis udkast
        </a>
      </div>
    </header>
  );
}
