import vindue from "@/assets/demo-vinduespudser.jpg";
import rengoering from "@/assets/demo-rengoering.jpg";
import gartner from "@/assets/demo-anlaegsgartner.jpg";

const demos = [
  { title: "Vinduespudser", img: vindue },
  { title: "Rengøringsfirma", img: rengoering },
  { title: "Anlægsgartner", img: gartner },
];

export function Demos() {
  return (
    <section id="demoer" className="bg-[var(--sand)] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--green)]">
              Demoer
            </span>
            <h2 className="mt-4 font-display text-3xl leading-tight md:text-[40px]">
              Eksempler på moderne hjemmesider
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Konceptuelle eksempler designet til at vise, hvordan en moderne hjemmeside kan se ud.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {demos.map((d) => (
            <article
              key={d.title}
              className="group overflow-hidden rounded-2xl border border-border bg-white transition-shadow hover:shadow-[0_20px_50px_-20px_rgba(20,30,60,0.18)]"
            >
              <div className="overflow-hidden bg-[var(--navy-soft)]">
                <img
                  src={d.img}
                  alt={`Demo-projekt for ${d.title}`}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex items-center justify-between p-6">
                <div>
                  <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--green)]">
                    Demo-projekt
                  </span>
                  <h3 className="mt-1.5 font-display text-lg text-[var(--navy)]">{d.title}</h3>
                </div>
                <a
                  href="#kontakt"
                  className="inline-flex h-9 items-center rounded-full border border-border px-4 text-xs font-medium text-[var(--navy)] transition-colors hover:border-[var(--navy)]"
                >
                  Se eksempel
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
