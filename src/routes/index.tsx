import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Problem } from "@/components/site/Problem";
import { Process } from "@/components/site/Process";

import { Audience } from "@/components/site/Audience";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LokalLead — Hjemmesider der skaber kundehenvendelser" },
      {
        name: "description",
        content:
          "LokalLead hjælper vinduespudsere, rengøringsfirmaer og anlægsgartnere med moderne hjemmesider. Book en gratis gennemgang og få et skræddersyet udkast.",
      },
      { property: "og:title", content: "LokalLead — Hjemmesider der skaber kundehenvendelser" },
      {
        property: "og:description",
        content:
          "Moderne hjemmesider til lokale servicevirksomheder. Gratis og uforpligtende gennemgang.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Process />
        <Demos />
        <Audience />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
