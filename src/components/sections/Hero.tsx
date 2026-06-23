import Link from "next/link";
import Image from "next/image";
import { Heart, ArrowRight } from "lucide-react";
import { DONATION_PAGE } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-5rem)] lg:min-h-[calc(100svh-7.5rem)] flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero/hero-accueil.webp"
          alt="Enfants africains — solidarité Horizon Afrik"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary-950/75" />
      </div>

      <div className="container relative py-20 md:py-28">
        <div className="max-w-3xl text-white">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-300 mb-4">
            Solidarité internationale
          </span>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight">
            Ouverture, partage d'expériences, réciprocité : les principes qui fondent nos actions.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-100/90 leading-relaxed max-w-2xl">
            Horizon Afrik, humaine et solidaire, pour ici et là-bas — entre l'Europe et l'Afrique de l'Ouest.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href={DONATION_PAGE}
              className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-7 py-3.5 rounded-full font-semibold shadow-soft transition active:scale-95"
            >
              <Heart className="h-5 w-5" fill="currentColor" />
              Faire un don
            </Link>
            <Link
              href="/nos-actions"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur text-white border border-white/30 px-7 py-3.5 rounded-full font-semibold transition"
            >
              Découvrir nos actions
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
