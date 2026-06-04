import heroImg from "@/assets/hero-laptop.jpg";

const points = [
  "Gratis og uforpligtende gennemgang",
  "Skræddersyet hjemmesideudkast",
  "Fokus på flere kundehenvendelser",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--navy-soft),_transparent_60%)]" />
      <div className="mx-auto grid max-w-6xl gap-16 px-6 pt-20 pb-24 md:pt-28 md:pb-32 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
        <div className="flex flex-col justify-center">
          <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-white px-3.5 py-1.5 text-xs font-medium text-[var(--navy)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--green)]" />
            For lokale servicevirksomheder
          </span>
          <h1 className="font-display text-[42px] leading-[1.05] tracking-tight text-[var(--navy)] sm:text-5xl md:text-[58px]">
            Hjemmesider der skaber{" "}
            <span className="italic text-[var(--green)]">kundehenvendelser</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Vi hjælper vinduespudsere, rengøringsfirmaer og anlægsgartnere med
            moderne hjemmesider, der gør det nemmere for nye kunder at vælge jer.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#kontakt"
              className="inline-flex h-12 items-center rounded-full bg-[var(--navy)] px-6 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
            >
              Book en gratis gennemgang
            </a>
            <a
              href="#demoer"
              className="inline-flex h-12 items-center rounded-full border border-border bg-white px-6 text-sm font-medium text-[var(--navy)] transition-colors hover:border-[var(--navy)]"
            >
              Se demoer
            </a>
          </div>

          <ul className="mt-10 grid gap-2.5">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 text-sm text-foreground/80">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--green-soft)] text-[var(--green)]">
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6.5L4.5 9L10 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex items-center">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[var(--navy-soft)]/60 blur-2xl" />
          <img
            src={heroImg}
            alt="Eksempel på en moderne hjemmeside vist på en bærbar computer"
            width={1600}
            height={1200}
            className="w-full rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
