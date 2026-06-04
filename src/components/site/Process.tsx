const steps = [
  {
    n: "01",
    title: "Book en gratis gennemgang",
    desc: "Vi gennemgår jeres nuværende hjemmeside og forstår jeres virksomhed.",
  },
  {
    n: "02",
    title: "Vi laver et hjemmesideudkast",
    desc: "På baggrund af jeres ønsker designer vi et konkret forslag.",
  },
  {
    n: "03",
    title: "Vi præsenterer det på et møde",
    desc: "I ser hjemmesiden og beslutter, om I ønsker at gå videre.",
  },
];

export function Process() {
  return (
    <section id="proces" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--green)]">
            Sådan fungerer det
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight md:text-[40px]">
            En enkel proces i tre trin
          </h2>
          <p className="mt-4 text-muted-foreground">
            Ingen lange forløb. I ser et færdigt udkast, før I beslutter noget.
          </p>
        </div>

        <ol className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
          {steps.map((s) => (
            <li
              key={s.n}
              className="relative rounded-2xl border border-border bg-white p-8"
            >
              <div className="font-display text-5xl text-[var(--green)]/40">{s.n}</div>
              <h3 className="mt-5 font-display text-xl text-[var(--navy)]">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
