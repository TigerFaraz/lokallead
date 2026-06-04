const issues = [
  { title: "Gammeldags design", desc: "Hjemmesiden virker forældet og signalerer ikke kvalitet." },
  { title: "Dårlig mobiloplevelse", desc: "Sværd at læse og navigere på telefonen, hvor de fleste besøger jer." },
  { title: "Manglende tillid", desc: "Ingen klare informationer, der gør kunden tryg ved at kontakte jer." },
  { title: "Uklar kontaktmulighed", desc: "Telefonnummer og kontaktformular er gemt væk eller besværlige at finde." },
];

export function Problem() {
  return (
    <section id="problemet" className="bg-[var(--sand)] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--green)]">
              Problemet
            </span>
            <h2 className="mt-4 font-display text-3xl leading-tight md:text-[40px]">
              De fleste lokale servicevirksomheder mister kunder online
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Mange lever af mund-til-mund og anbefalinger. Men næsten alle
              potentielle kunder kigger på hjemmesiden, før de tager kontakt —
              og her bliver første indtryk afgørende.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {issues.map((i) => (
              <div
                key={i.title}
                className="rounded-2xl border border-border bg-white p-6 transition-shadow hover:shadow-[0_8px_30px_-12px_rgba(20,30,60,0.12)]"
              >
                <h3 className="font-display text-lg text-[var(--navy)]">{i.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-14 max-w-2xl font-display text-xl italic text-[var(--navy)] md:text-2xl">
          “Det betyder ofte færre kundehenvendelser end nødvendigt.”
        </p>
      </div>
    </section>
  );
}
