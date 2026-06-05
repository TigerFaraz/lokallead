const fields = [
  { name: "firmanavn", label: "Firmanavn", type: "text", required: true },
  { name: "hjemmeside", label: "Hjemmeside", type: "url", required: false },
  { name: "telefon", label: "Telefonnummer", type: "tel", required: true },
  { name: "email", label: "Email", type: "email", required: true },
];

const textareas = [
  { name: "services", label: "Hvilke services tilbyder I?", rows: 3 },
  { name: "maal", label: "Hvad er jeres vigtigste mål med hjemmesiden?", rows: 3 },
];

export function Contact() {
  return (
    <section id="kontakt" className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="overflow-hidden rounded-3xl border border-border bg-[var(--navy)] text-white">
          <div className="grid gap-0 lg:grid-cols-[1fr_1.2fr]">
            <div className="p-10 md:p-14">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--green)]">
                Kontakt
              </span>
              <h2 className="mt-4 font-display text-3xl leading-tight !text-white md:text-[40px]">
                Få et gratis udkast til jeres nye hjemmeside
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/70">
                Udfyld formularen, så laver vi et skræddersyet udkast til jeres
                virksomhed og præsenterer det på et kort møde — helt uforpligtende.
              </p>

              <ul className="mt-8 space-y-3 text-sm text-white/80">
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--green)]" />
                  Gratis og uforpligtende
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--green)]" />
                  Svar inden for 1 hverdag
                </li>
              </ul>
            </div>

            <form
              className="grid gap-4 bg-white p-8 text-foreground md:p-10"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Tak! Vi vender tilbage hurtigst muligt.");
              }}
            >
              {fields.map((f) => (
                <label key={f.name} className="block">
                  <span className="mb-1.5 block text-xs font-medium text-[var(--navy)]">
                    {f.label}
                    {!f.required && <span className="ml-1 text-muted-foreground">(valgfri)</span>}
                  </span>
                  <input
                    type={f.type}
                    name={f.name}
                    required={f.required}
                    className="h-11 w-full rounded-lg border border-border bg-white px-3.5 text-sm outline-none transition-colors focus:border-[var(--navy)]"
                  />
                </label>
              ))}
              {textareas.map((t) => (
                <label key={t.name} className="block">
                  <span className="mb-1.5 block text-xs font-medium text-[var(--navy)]">
                    {t.label}
                  </span>
                  <textarea
                    name={t.name}
                    rows={t.rows}
                    required
                    className="w-full resize-none rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-[var(--navy)]"
                  />
                </label>
              ))}
              <button
                type="submit"
                className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-[var(--green)] px-6 text-sm font-medium text-white transition-transform hover:scale-[1.01]"
              >
                Få mit gratis udkast
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
