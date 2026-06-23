import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight, Heart, Quote, MapPin, Calendar } from "lucide-react";
import type { Action } from "@/data/actions";
import { PROJETS, STATUS_LABELS } from "@/data/projets";
import { DONATION_URL } from "@/lib/constants";

const statusStyles: Record<string, string> = {
  "en-cours": "bg-accent-100 text-accent-900",
  "termine": "bg-primary-100 text-primary-800",
  "a-venir": "bg-sand-200 text-primary-800",
};

export function ActionDetail({ action }: { action: Action }) {
  const Icon = action.icon;
  const linkedProjects = PROJETS.filter((p) => p.category === action.projectCategory);

  return (
    <>
      {/* Intro */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="h-14 w-14 rounded-xl bg-accent-400 grid place-items-center mb-6">
              <Icon className="h-7 w-7 text-white" />
            </div>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-700 mb-3">
              {action.subtitle}
            </span>
            <p className="text-lg md:text-xl text-primary-900/85 leading-relaxed">{action.intro}</p>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft">
            <Image src={action.image} alt={action.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* Objectifs */}
      <section className="py-20 md:py-28 bg-sand-50">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-700 mb-3">Nos objectifs</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-950 leading-tight">Ce que nous cherchons à accomplir.</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {action.objectives.map((obj) => (
              <div key={obj} className="flex items-start gap-3 bg-white rounded-xl p-5 border border-sand-200">
                <div className="h-6 w-6 rounded-full bg-primary-100 grid place-items-center shrink-0 mt-0.5">
                  <Check className="h-3.5 w-3.5 text-primary-700" />
                </div>
                <p className="text-primary-900/85 leading-relaxed">{obj}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre approche */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="max-w-2xl mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-700 mb-3">Notre approche</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-950 leading-tight">Comment nous agissons concrètement.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {action.approach.map((step, idx) => (
              <div key={step.title} className="relative bg-sand-50 rounded-2xl p-7 border border-sand-200">
                <span className="font-display text-5xl font-bold text-primary-200">0{idx + 1}</span>
                <h3 className="font-display text-xl font-semibold text-primary-950 mt-3 mb-2">{step.title}</h3>
                <p className="text-primary-800/70 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Citation */}
      <section className="py-20 md:py-28 bg-primary-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
             style={{ backgroundImage: "radial-gradient(circle, var(--color-primary-900) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="container relative max-w-3xl text-center">
          <Quote className="h-12 w-12 text-accent-400 mx-auto mb-6" />
          <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-950 leading-snug">
            « {action.quote.text} »
          </blockquote>
          <p className="mt-6 text-sm uppercase tracking-[0.2em] text-primary-700">— {action.quote.author}</p>
        </div>
      </section>

      {/* Pourquoi nous soutenir */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="max-w-2xl mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-700 mb-3">Pourquoi nous soutenir</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-950 leading-tight">
              Trois raisons concrètes de rejoindre cette action.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {action.whyMatters.map((reason, idx) => (
              <div key={reason.title} className="group bg-white rounded-2xl p-7 border-2 border-sand-200 hover:border-accent-400 transition">
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-8 w-8 rounded-full bg-accent-400 text-white grid place-items-center font-display text-sm font-bold">
                    {idx + 1}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-primary-950">{reason.title}</h3>
                </div>
                <p className="text-primary-800/70 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projets liés (s'affiche uniquement s'il y a des projets de cette catégorie) */}
      {linkedProjects.length > 0 && (
        <section className="py-20 md:py-28 bg-sand-50">
          <div className="container">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
              <div className="max-w-2xl">
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-700 mb-3">Sur le terrain</span>
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-950 leading-tight">
                  Nos projets dans ce domaine.
                </h2>
              </div>
              <Link href="/projets" className="inline-flex items-center gap-2 text-primary-700 hover:text-accent-600 font-medium transition shrink-0">
                Voir tous les projets <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {linkedProjects.map((projet) => (
                <Link key={projet.slug} href={`/projets/${projet.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-sand-200 hover:border-accent-300 hover:shadow-soft transition flex flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={projet.image} alt={projet.title} fill sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition duration-500" />
                    <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[projet.status]}`}>
                      {STATUS_LABELS[projet.status]}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-display text-lg font-semibold text-primary-950 mb-2 leading-snug">{projet.title}</h3>
                    <p className="text-sm text-primary-800/70 leading-relaxed line-clamp-2 flex-1">{projet.excerpt}</p>
                    <div className="flex items-center gap-3 mt-4 pt-4 border-t border-sand-200 text-xs text-primary-700">
                      <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-accent-500" />{projet.location}</span>
                      <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-accent-500" />{projet.year}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA final */}
      <section className="py-16 bg-primary-950 text-white">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="font-display text-2xl md:text-3xl font-semibold max-w-2xl">
            Soutenez nos actions de {action.title.toLowerCase()}.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href={DONATION_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent-400 hover:bg-accent-500 text-primary-950 px-6 py-3 rounded-full font-semibold transition active:scale-95">
              <Heart className="h-4 w-4" fill="currentColor" /> Faire un don
            </Link>
            <Link href="/nos-actions"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 px-6 py-3 rounded-full font-semibold transition">
              Toutes nos actions <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
