import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Hjemmesider til lokale servicevirksomheder i Danmark.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-muted-foreground md:items-end">
          <a href="mailto:info.lokallead@gmail.com" className="hover:text-[var(--navy)]">
            info.lokallead@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/company/lokal-lead/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--navy)]"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-5 text-xs text-muted-foreground">
          © {new Date().getFullYear()} LokalLead. Alle rettigheder forbeholdes.
        </div>
      </div>
    </footer>
  );
}
