import { useState } from "react";
import { submitContactForm } from "@/lib/contact.functions";

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
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      firmanavn: String(formData.get("firmanavn") || ""),
      hjemmeside: String(formData.get("hjemmeside") || ""),
      telefon: String(formData.get("telefon") || ""),
      email: String(formData.get("email") || ""),
      services: String(formData.get("services") || ""),
      maal: String(formData.get("maal") || ""),
    };

    try {
      await submitContactForm({ data });
      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Noget gik galt. Prøv igen.");
    }
  };

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
              onSubmit={handleSubmit}
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
                    disabled={status === "submitting"}
                    className="h-11 w-full rounded-lg border border-border bg-white px-3.5 text-sm outline-none transition-colors focus:border-[var(--navy)] disabled:opacity-60"
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
                    disabled={status === "submitting"}
                    className="w-full resize-none rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-[var(--navy)] disabled:opacity-60"
                  />
                </label>
              ))}

              {status === "success" && (
                <p className="rounded-lg bg-[var(--green-soft)] px-4 py-3 text-sm text-[var(--green)]">
                  Tak for din henvendelse! Vi vender tilbage hurtigst muligt.
                </p>
              )}
              {status === "error" && (
                <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-[var(--green)] px-6 text-sm font-medium text-white transition-transform hover:scale-[1.01] disabled:opacity-60"
              >
                {status === "submitting" ? "Sender..." : "Få mit gratis udkast"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
