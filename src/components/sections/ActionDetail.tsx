import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight, Heart } from "lucide-react";
import type { Action } from "@/data/actions";
import { DONATION_PAGE } from "@/lib/constants";

export function ActionDetail({ action }: { action: Action }) {
  const Icon = action.icon;
  return (
    <>
      {/* Intro */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="h-14 w-14 rounded-xl bg-accent-500 grid place-items-center mb-6">
              <Icon className="h-7 w-7 text-white" />
            </div>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-600 mb-3">
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
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-600 mb-3">
              Nos objectifs
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-950 leading-tight">
              Ce que nous cherchons à accomplir.
            </h2>
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
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-600 mb-3">
              Notre approche
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-950 leading-tight">
              Comment nous agissons concrètement.
            </h2>
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

      {/* CTA */}
      <section className="py-16 bg-primary-950 text-white">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="font-display text-2xl md:text-3xl font-semibold max-w-2xl">
            Soutenez nos actions de {action.title.toLowerCase()}.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href={DONATION_PAGE}
              className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-full font-semibold transition active:scale-95">
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
