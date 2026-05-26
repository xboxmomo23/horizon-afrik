import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Heart, GraduationCap, HandHeart, Cpu, ShieldCheck, FileText } from "lucide-react";
import { DONATION_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Faire un don",
  description:
    "Soutenez Horizon Afrik. Votre don finance directement nos actions de solidarité, d'éducation et de transfert de technologie en Afrique de l'Ouest.",
};

const impacts = [
  { icon: HandHeart, title: "Solidarité", text: "Vous soutenez des projets d'entraide concrets sur le terrain." },
  { icon: GraduationCap, title: "Éducation", text: "Vous offrez à des jeunes l'accès à la formation et à l'avenir." },
  { icon: Cpu, title: "Technologie", text: "Vous contribuez à réduire la fracture numérique du continent." },
];

export default function FaireUnDonPage() {
  return (
    <>
      <PageHero
        title="Votre don change des vies."
        subtitle="Chaque contribution, même modeste, finance directement nos projets en Afrique de l'Ouest."
        breadcrumb={[{ label: "Faire un don" }]}
        backgroundImage="/images/galerie/05-mains-aide.webp"
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {impacts.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-sand-50 rounded-2xl p-7 border border-sand-200 text-center">
                  <div className="h-14 w-14 rounded-xl bg-accent-500 grid place-items-center mx-auto mb-5">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-primary-950 mb-2">{item.title}</h3>
                  <p className="text-sm text-primary-800/70 leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-primary-950 rounded-3xl p-8 md:p-12 text-center text-white">
            <Heart className="h-12 w-12 text-accent-400 mx-auto mb-5" fill="currentColor" />
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">Prêt à nous soutenir ?</h2>
            <p className="text-primary-100/85 max-w-xl mx-auto mb-8 leading-relaxed">
              Faites un don sécurisé en quelques clics. Votre générosité fait toute la différence
              pour les communautés que nous accompagnons.
            </p>
            <Link href={DONATION_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-soft transition active:scale-95">
              <Heart className="h-5 w-5" fill="currentColor" /> Faire un don maintenant
            </Link>

            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-10 pt-8 border-t border-primary-800 text-sm text-primary-200">
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-accent-400" /> Paiement 100% sécurisé</span>
              <span className="flex items-center gap-2"><FileText className="h-4 w-4 text-accent-400" /> Reçu fiscal sur demande</span>
            </div>
          </div>

          <p className="text-center text-sm text-primary-700/60 mt-8">
            Pour un don par virement ou par chèque, ou pour toute question, n'hésitez pas à{" "}
            <Link href="/contact" className="text-accent-600 hover:underline">nous contacter</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
