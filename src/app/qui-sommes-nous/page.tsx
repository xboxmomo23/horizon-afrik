import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { PresidentMessage } from "@/components/sections/PresidentMessage";
import { Handshake, Globe2, Sprout, Users, ArrowRight, Heart } from "lucide-react";
import { SITE, DONATION_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Qui sommes-nous",
  description:
    "Découvrez Horizon Afrik : une association loi 1901 fondée en 2007 à Paris, œuvrant pour la solidarité entre l'Europe et l'Afrique de l'Ouest.",
};

const values = [
  { icon: Handshake, title: "Réciprocité", description: "Des échanges équilibrés et équitables entre le Nord et le Sud, fondés sur le respect mutuel." },
  { icon: Globe2, title: "Ouverture", description: "Promouvoir une communication positive sur l'Afrique et bâtir des ponts entre les cultures." },
  { icon: Sprout, title: "Développement durable", description: "Sensibiliser et agir pour l'environnement et un développement responsable en Afrique de l'Ouest." },
  { icon: Users, title: "Solidarité", description: "Entraide, partage d'expériences et soutien aux porteurs de projets, ici et là-bas." },
];

export default function QuiSommesNousPage() {
  return (
    <>
      <PageHero
        title="Une histoire d'amitié, d'engagement et de solidarité."
        subtitle="Depuis 2007, Horizon Afrik réunit des femmes et des hommes convaincus qu'un avenir commun se construit par le partage et la réciprocité."
        breadcrumb={[{ label: "Qui sommes-nous" }]}
        backgroundImage="/images/galerie/01-jeunes-filles.webp"
      />

      {/* Histoire */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-600 mb-3">
              Notre histoire
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-950 leading-tight">
              Née à Paris en {SITE.founded}, portée par l'amour de l'Afrique.
            </h2>
          </div>
          <div className="lg:col-span-7 prose prose-lg max-w-none text-primary-900/85 leading-relaxed">
            <p>
              Horizon Afrik est une association de loi 1901 à but non lucratif, fondée en 2007
              par un groupe d'amis et d'amoureux de l'Afrique. Apolitique, elle s'est donnée
              pour mission de promouvoir la solidarité, les échanges, l'entraide et les idées
              de paix et de fraternité entre les peuples d'Europe et d'Afrique francophone.
            </p>
            <p>
              Notre ambition : réduire le fossé qui sépare le niveau de développement de
              l'Afrique de celui des pays développés, en participant activement au développement
              des collectivités, regroupements et associations basés en Afrique de l'Ouest —
              par le conseil, le soutien et le partenariat.
            </p>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 md:py-28 bg-sand-50">
        <div className="container">
          <div className="max-w-2xl mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-600 mb-3">
              Nos valeurs
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-950 leading-tight">
              Les principes qui fondent nos actions.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="bg-white rounded-2xl p-6 border border-sand-200 hover:shadow-soft transition">
                  <div className="h-12 w-12 rounded-xl bg-primary-50 grid place-items-center mb-4">
                    <Icon className="h-6 w-6 text-primary-700" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-primary-950 mb-2">{value.title}</h3>
                  <p className="text-sm text-primary-800/70 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mot du Président (composant réutilisé) */}
      <PresidentMessage />

      {/* CTA */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="font-display text-2xl md:text-3xl font-semibold max-w-2xl">
            Envie de nous rejoindre ou de soutenir nos projets ?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href={DONATION_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-full font-semibold transition active:scale-95">
              <Heart className="h-4 w-4" fill="currentColor" /> Faire un don
            </Link>
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 px-6 py-3 rounded-full font-semibold transition">
              Nous contacter <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
