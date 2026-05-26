import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validations";
import { CONTACT } from "@/lib/constants";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Données du formulaire invalides." }, { status: 400 });
    }

    const { name, email, subject, message, company } = parsed.data;

    // Honeypot : si rempli, c'est un bot → on simule un succès sans rien envoyer
    if (company) {
      return NextResponse.json({ ok: true });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      // ⚠️ En test : "onboarding@resend.dev". En prod : une adresse de ton domaine vérifié.
      from: "Site Horizon Afrik <onboarding@resend.dev>",
      to: CONTACT.email,
      replyTo: email,
      subject: `[Contact site] ${subject}`,
      text:
        `Nouveau message depuis le formulaire de contact\n\n` +
        `Nom : ${name}\n` +
        `Email : ${email}\n` +
        `Objet : ${subject}\n\n` +
        `Message :\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Erreur envoi contact:", error);
    return NextResponse.json({ error: "Une erreur est survenue lors de l'envoi." }, { status: 500 });
  }
}
