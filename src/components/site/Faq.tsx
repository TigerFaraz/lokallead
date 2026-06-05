const items = [
  {
    q: "Koster det noget at få et udkast?",
    a: "Nej. Udkastet er helt gratis og uforpligtende — I betaler først noget, hvis I vælger at gå videre.",
  },
  {
    q: "Hvor lang tid tager det at få et udkast?",
    a: "Typisk har vi et udkast klar inden for en uge, efter I har udfyldt formularen.",
  },
  {
    q: "Er jeg forpligtet til at købe?",
    a: "Nej. I ser udkastet på et møde og beslutter selv, om I vil have hjemmesiden bygget. Der er ingen binding.",
  },
  {
    q: "Hvad bruger I oplysningerne fra formularen til?",
    a: "Vi bruger dem til at designe et udkast, der passer til netop jeres virksomhed, services og mål.",
  },
  {
    q: "Hvad sker der hvis jeg kan lide udkastet?",
    a: "Så aftaler vi et forløb, hvor vi bygger hjemmesiden færdig og gør den klar til at modtage henvendelser.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-[var(--sand)] py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--green)]">
            FAQ
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight md:text-[40px]">
            Ofte stillede spørgsmål
          </h2>
        </div>

        <div className="mt-12 divide-y divide-border rounded-2xl border border-border bg-white">
          {items.map((it, idx) => (
            <details key={idx} className="group p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-6 text-left">
                <span className="font-display text-lg text-[var(--navy)]">{it.q}</span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-[var(--navy)] transition-transform group-open:rotate-45">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
