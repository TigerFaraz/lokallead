const cards = [
  {
    title: "Vinduespudsere",
    desc: "En klar profil og nem kontakt giver flere henvendelser fra både private og erhverv.",
  },
  {
    title: "Rengøringsfirmaer",
    desc: "Et professionelt indtryk gør det lettere at vinde nye aftaler og faste kunder.",
  },
  {
    title: "Anlægsgartnere",
    desc: "Synlige billeder af jeres arbejde og en tydelig kontaktknap skaber tillid fra første klik.",
  },
];

export function Audience() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--green)]">
            Hvem hjælper vi?
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight md:text-[40px]">
            Lavet til lokale fagfolk
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
