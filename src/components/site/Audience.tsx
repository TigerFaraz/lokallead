const cards = [
  {
    title: "Professionelt førstehåndsindtryk",
    desc: "En moderne og overskuelig hjemmeside gør det nemmere for potentielle kunder at forstå, hvad I tilbyder – og tage det næste skridt.",
  },
  {
    title: "Flere kundehenvendelser",
    desc: "En tydelig struktur, stærke budskaber og nem kontakt gør det lettere for besøgende at blive til konkrete henvendelser.",
  },
  {
    title: "Skabt til lokale virksomheder",
    desc: "Uanset om I arbejder med private, erhverv eller begge dele, tilpasses hjemmesiden jeres virksomhed, ydelser og kunder.",
  },
];

export function Audience() {
  return (
    <section className="pt-8 pb-16 md:pt-12 md:pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--green)]">
            Hvem hjælper vi?
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight md:text-[40px]">
            Lavet til lokale servicevirksomheder
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-border p-8 transition-colors hover:border-[var(--navy)]/30 hover:bg-[var(--navy-soft)]/40"
            >
              <h3 className="font-display text-xl text-[var(--navy)]">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
