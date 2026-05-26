import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Veuillez indiquer votre nom."),
  email: z.string().email("Adresse email invalide."),
  subject: z.string().min(3, "Veuillez préciser l'objet de votre message."),
  message: z.string().min(10, "Votre message doit contenir au moins 10 caractères."),
  // Honeypot anti-spam : doit rester vide
  company: z.string().max(0).optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
