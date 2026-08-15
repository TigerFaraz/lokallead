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

    const { data: inserted, error } = await supabaseAdmin
      .from("contact_submissions")
      .insert({
        firmanavn: data.firmanavn,
        hjemmeside: data.hjemmeside || null,
        telefon: data.telefon,
        email: data.email,
        services: data.services,
        maal: data.maal,
      })
      .select("id")
      .single();

    if (error) {
      console.error("[submitContactForm] insert error:", error);
      throw new Error("Kunne ikke gemme henvendelsen. Prøv igen om lidt.");
    }

    try {
      const { sendTemplateEmail } = await import("@/lib/email-templates/send-email");
      await sendTemplateEmail("contact-notification", "info.lokallead@gmail.com", {
        templateData: {
          firmanavn: data.firmanavn,
          hjemmeside: data.hjemmeside || "",
          telefon: data.telefon,
          email: data.email,
          services: data.services,
          maal: data.maal,
        },
        idempotencyKey: `contact-notification-${inserted?.id ?? crypto.randomUUID()}`,
        replyTo: data.email,
      });
    } catch (mailError) {
      console.error("[submitContactForm] email error:", mailError);
    }

    return { success: true };
  });
