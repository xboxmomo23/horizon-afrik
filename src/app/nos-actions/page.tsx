import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { ACTIONS } from "@/data/actions";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nos actions",
  description:
    "Solidarité internationale, éducation et formation, transfert de technologie : découvrez les trois piliers d'action d'Horizon Afrik.",
};

export default function NosActionsPage() {
  return (
    <>
      <PageHero
        title="Informer et éduquer pour construire un monde solidaire, plus humain."
        subtitle="Notre engagement s'articule autour de trois piliers complémentaires, au service du développement de l'Afrique de l'Ouest."
        breadcrumb={[{ label: "Nos actions" }]}
        backgroundImage="/images/galerie/05-mains-aide.webp"
      />

      <section className="py-20 md:py-28 bg-sand-50">
        <div className="container grid md:grid-cols-3 gap-6">
          {ACTIONS.map((action) => {
            const Icon = action.icon;
            return (
              <Link key={action.slug} href={`/nos-actions/${action.slug}`}
                className="group bg-white rounded-2xl p-8 border border-sand-200 hover:border-accent-300 hover:shadow-soft transition flex flex-col">
                <div className="h-14 w-14 rounded-xl bg-primary-50 group-hover:bg-accent-500 grid place-items-center mb-6 transition">
                  <Icon className="h-7 w-7 text-primary-700 group-hover:text-white transition" />
                </div>
                <span className="block text-xs uppercase tracking-wider text-accent-600 mb-2">{action.eyebrow}</span>
                <h2 className="font-display text-2xl font-semibold text-primary-950 mb-1">{action.title}</h2>
                <p className="text-sm text-accent-700 mb-4">{action.subtitle}</p>
                <p className="text-primary-800/70 leading-relaxed flex-1">{action.shortDescription}</p>
                <span className="inline-flex items-center gap-2 text-primary-700 group-hover:text-accent-600 font-medium mt-6 transition">
                  En savoir plus
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
