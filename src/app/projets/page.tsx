import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { PROJETS, STATUS_LABELS } from "@/data/projets";
import { ArrowRight, MapPin, Calendar, FolderOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Projets solidaires",
  description:
    "Découvrez les projets de solidarité, d'éducation et de transfert de technologie menés par Horizon Afrik en France et en Afrique de l'Ouest.",
};

const statusStyles: Record<string, string> = {
  "en-cours": "bg-accent-100 text-accent-700",
  "termine": "bg-primary-100 text-primary-700",
  "a-venir": "bg-sand-200 text-primary-800",
};

export default function ProjetsPage() {
  return (
    <>
      <PageHero
        title="Nos projets solidaires"
        subtitle="Des actions concrètes, menées sur le terrain avec nos partenaires, au service du développement et de la solidarité."
        breadcrumb={[{ label: "Projets" }]}
        backgroundImage="/images/galerie/02-benevole.webp"
      />

      <section className="py-20 md:py-28 bg-sand-50">
        <div className="container">
          {/* ⚠️ À RETIRER quand les vrais projets seront ajoutés */}
          {PROJETS.length > 0 && (
            <div className="mb-10 rounded-xl border border-accent-300 bg-accent-50 px-5 py-4 text-sm text-accent-900">
              <strong>Note :</strong> les projets ci-dessous sont des exemples illustratifs.
              La sélection définitive des projets de l'association sera publiée prochainement.
            </div>
          )}
          {PROJETS.length === 0 ? (
            // État vide — aucun projet pour le moment
            <div className="max-w-xl mx-auto text-center py-12">
              <div className="h-16 w-16 rounded-2xl bg-primary-100 grid place-items-center mx-auto mb-6">
                <FolderOpen className="h-8 w-8 text-primary-700" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary-950 mb-3">
                Nos projets arrivent bientôt.
              </h2>
              <p className="text-primary-800/70 leading-relaxed mb-8">
                Nous préparons la présentation détaillée de nos actions sur le terrain.
                En attendant, découvrez nos trois domaines d'engagement ou contactez-nous
                pour en savoir plus.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/nos-actions"
                  className="inline-flex items-center justify-center gap-2 bg-primary-700 hover:bg-primary-800 text-white px-6 py-3 rounded-full font-semibold transition">
                  Découvrir nos actions <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-sand-100 text-primary-800 border border-sand-300 px-6 py-3 rounded-full font-semibold transition">
                  Nous contacter
                </Link>
              </div>
            </div>
          ) : (
            // Grille des projets
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJETS.map((projet) => (
                <Link key={projet.slug} href={`/projets/${projet.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-sand-200 hover:border-accent-300 hover:shadow-soft transition flex flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={projet.image} alt={projet.title} fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition duration-500" />
                    <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[projet.status]}`}>
                      {STATUS_LABELS[projet.status]}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs uppercase tracking-wider text-accent-600 mb-2">{projet.category}</span>
                    <h2 className="font-display text-xl font-semibold text-primary-950 mb-3 leading-snug">{projet.title}</h2>
                    <p className="text-sm text-primary-800/70 leading-relaxed flex-1">{projet.excerpt}</p>
                    <div className="flex items-center gap-4 mt-5 pt-5 border-t border-sand-200 text-xs text-primary-700">
                      <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-accent-500" />{projet.location}</span>
                      <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-accent-500" />{projet.year}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
