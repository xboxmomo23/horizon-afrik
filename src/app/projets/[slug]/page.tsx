import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { PROJETS, STATUS_LABELS, getProjetBySlug } from "@/data/projets";
import { MapPin, Calendar, Tag, Heart, ArrowLeft } from "lucide-react";
import { DONATION_URL } from "@/lib/constants";

export function generateStaticParams() {
  return PROJETS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const projet = getProjetBySlug(slug);
  if (!projet) return { title: "Projet introuvable" };
  return { title: projet.title, description: projet.excerpt };
}

export default async function ProjetPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const projet = getProjetBySlug(slug);
  if (!projet) notFound();

  return (
    <>
      <PageHero
        title={projet.title}
        breadcrumb={[{ label: "Projets", href: "/projets" }, { label: projet.title }]}
        backgroundImage={projet.image}
      />

      <article className="py-16 md:py-24 bg-white">
        <div className="container max-w-3xl">
          {/* Méta-infos */}
          <div className="flex flex-wrap items-center gap-4 pb-8 mb-8 border-b border-sand-200 text-sm">
            <span className="flex items-center gap-1.5 text-primary-700"><Tag className="h-4 w-4 text-accent-500" />{projet.category}</span>
            <span className="flex items-center gap-1.5 text-primary-700"><MapPin className="h-4 w-4 text-accent-500" />{projet.location}</span>
            <span className="flex items-center gap-1.5 text-primary-700"><Calendar className="h-4 w-4 text-accent-500" />{projet.year}</span>
            <span className="ml-auto px-3 py-1 rounded-full text-xs font-semibold bg-primary-100 text-primary-700">{STATUS_LABELS[projet.status]}</span>
          </div>

          {/* Contenu */}
          <div className="prose prose-lg max-w-none text-primary-900/85 leading-relaxed">
            {projet.content.map((para, idx) => <p key={idx}>{para}</p>)}
          </div>

          {/* Galerie du projet */}
          {projet.gallery && projet.gallery.length > 0 && (
            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              {projet.gallery.map((src) => (
                <div key={src} className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image src={src} alt={projet.title} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
                </div>
              ))}
            </div>
          )}

          {/* Pied de page */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-8 border-t border-sand-200">
            <Link href="/projets" className="inline-flex items-center gap-2 text-primary-700 hover:text-accent-600 font-medium transition">
              <ArrowLeft className="h-4 w-4" /> Tous les projets
            </Link>
            <Link href={DONATION_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-full font-semibold transition active:scale-95">
              <Heart className="h-4 w-4" fill="currentColor" /> Soutenir ce projet
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
