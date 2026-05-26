"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/validations";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Échec");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-lg border border-sand-300 bg-white px-4 py-3 text-primary-950 placeholder:text-primary-400 focus:outline-none focus:border-accent-400 focus:ring-2 focus:ring-accent-100 transition";

  if (status === "success") {
    return (
      <div className="bg-primary-50 border border-primary-200 rounded-2xl p-8 text-center">
        <CheckCircle2 className="h-12 w-12 text-primary-600 mx-auto mb-4" />
        <h3 className="font-display text-xl font-semibold text-primary-950 mb-2">Message envoyé !</h3>
        <p className="text-primary-800/80">Merci de nous avoir contactés. Nous vous répondrons dans les meilleurs délais.</p>
        <button onClick={() => setStatus("idle")} className="mt-6 text-sm font-medium text-accent-600 hover:text-accent-700 transition">
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Honeypot caché */}
      <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true"
        {...register("company")} className="absolute left-[-9999px] h-0 w-0 opacity-0" />

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-primary-900 mb-1.5">Nom complet *</label>
          <input id="name" {...register("name")} className={inputClass} placeholder="Votre nom" />
          {errors.name && <p className="mt-1.5 text-sm text-accent-600">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-primary-900 mb-1.5">Email *</label>
          <input id="email" type="email" {...register("email")} className={inputClass} placeholder="votre@email.fr" />
          {errors.email && <p className="mt-1.5 text-sm text-accent-600">{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-primary-900 mb-1.5">Objet *</label>
        <input id="subject" {...register("subject")} className={inputClass} placeholder="L'objet de votre message" />
        {errors.subject && <p className="mt-1.5 text-sm text-accent-600">{errors.subject.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-primary-900 mb-1.5">Message *</label>
        <textarea id="message" rows={6} {...register("message")} className={inputClass} placeholder="Votre message..." />
        {errors.message && <p className="mt-1.5 text-sm text-accent-600">{errors.message.message}</p>}
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-sm text-accent-700 bg-accent-50 border border-accent-200 rounded-lg p-3">
          <AlertCircle className="h-5 w-5 shrink-0" />
          Une erreur est survenue. Merci de réessayer ou de nous écrire directement par email.
        </div>
      )}

      <button type="submit" disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 disabled:opacity-60 disabled:cursor-not-allowed text-white px-7 py-3.5 rounded-full font-semibold shadow-soft transition active:scale-95">
        {status === "submitting" ? (
          <><Loader2 className="h-5 w-5 animate-spin" /> Envoi en cours...</>
        ) : (
          <><Send className="h-5 w-5" /> Envoyer le message</>
        )}
      </button>
    </form>
  );
}
