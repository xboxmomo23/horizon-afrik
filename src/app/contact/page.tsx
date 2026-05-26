import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Horizon Afrik : 22 rue de la Saïda, 75015 Paris. Une question, un projet, l'envie de nous rejoindre ? Écrivez-nous.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contactez-nous"
        subtitle="Une question, un projet, l'envie de nous rejoindre ? Nous sommes à votre écoute."
        breadcrumb={[{ label: "Contact" }]}
      />

      <section className="py-20 md:py-28 bg-sand-50">
        <div className="container grid lg:grid-cols-12 gap-12">
          {/* Coordonnées + carte */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-600 mb-3">
                Nos coordonnées
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary-950 mb-6">
                Parlons de votre projet.
              </h2>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-4 bg-white rounded-xl p-5 border border-sand-200">
                <div className="h-11 w-11 rounded-lg bg-primary-50 grid place-items-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary-700" />
                </div>
                <div>
                  <div className="font-medium text-primary-950">Adresse</div>
                  <p className="text-sm text-primary-800/70">
                    {CONTACT.address.street}<br />
                    {CONTACT.address.zip} {CONTACT.address.city}, {CONTACT.address.country}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4 bg-white rounded-xl p-5 border border-sand-200">
                <div className="h-11 w-11 rounded-lg bg-primary-50 grid place-items-center shrink-0">
                  <Mail className="h-5 w-5 text-primary-700" />
                </div>
                <div>
                  <div className="font-medium text-primary-950">Email</div>
                  <a href={`mailto:${CONTACT.email}`} className="text-sm text-primary-800/70 hover:text-accent-600 transition">
                    {CONTACT.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4 bg-white rounded-xl p-5 border border-sand-200">
                <div className="h-11 w-11 rounded-lg bg-primary-50 grid place-items-center shrink-0">
                  <Phone className="h-5 w-5 text-primary-700" />
                </div>
                <div>
                  <div className="font-medium text-primary-950">Téléphone</div>
                  <a href={`tel:${CONTACT.phone}`} className="text-sm text-primary-800/70 hover:text-accent-600 transition">
                    {CONTACT.phoneDisplay}
                  </a>
                </div>
              </li>
            </ul>

            <div className="rounded-xl overflow-hidden border border-sand-200 h-64">
              <iframe
                title="Localisation Horizon Afrik"
                src="https://www.google.com/maps?q=22+rue+de+la+Saida+75015+Paris&output=embed"
                width="100%" height="100%" style={{ border: 0 }}
                loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Formulaire */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-sand-200 shadow-soft">
              <h2 className="font-display text-xl font-semibold text-primary-950 mb-6">Laissez-nous un message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
