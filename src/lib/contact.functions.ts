import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  firmanavn: z.string().min(1, "Firmanavn er påkrævet"),
  hjemmeside: z.string().optional(),
  telefon: z.string().min(1, "Telefonnummer er påkrævet"),
  email: z.string().email("Indtast en gyldig email"),
  services: z.string().min(1, "Beskriv jeres services"),
  maal: z.string().min(1, "Beskriv jeres mål"),
});

export const submitContactForm = createServerFn({ method: "POST" })
  .inputValidator((data) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      firmanavn: data.firmanavn,
      hjemmeside: data.hjemmeside || null,
      telefon: data.telefon,
      email: data.email,
      services: data.services,
      maal: data.maal,
    });

    if (error) {
      console.error("[submitContactForm] insert error:", error);
      throw new Error("Kunne ikke gemme henvendelsen. Prøv igen om lidt.");
    }

    return { success: true };
  });
