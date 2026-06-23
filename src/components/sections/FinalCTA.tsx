import Link from "next/link";
import Image from "next/image";
import { Heart, ArrowRight } from "lucide-react";
import { DONATION_PAGE } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/galerie/05-mains-aide.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-900/90 to-accent-900/70" />
      </div>

      <div className="container relative">
        <div className="max-w-2xl text-white">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-300 mb-3">
            Rejoignez le mouvement
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            Les dons peuvent changer leur mode de vie.
          </h2>
          <p className="mt-5 text-lg text-primary-100/90 leading-relaxed">
            Chaque contribution, même modeste, finance directement nos projets d'éducation,
            de solidarité et de transfert de compétences en Afrique de l'Ouest.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href={DONATION_PAGE}
              className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-7 py-3.5 rounded-full font-semibold shadow-soft transition active:scale-95"
            >
              <Heart className="h-5 w-5" fill="currentColor" />
              Faire un don maintenant
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur text-white border border-white/30 px-7 py-3.5 rounded-full font-semibold transition"
            >
              Devenir bénévole
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
