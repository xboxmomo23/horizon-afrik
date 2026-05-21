import Image from "next/image";
import { Quote } from "lucide-react";
import { SITE } from "@/lib/constants";

export function PresidentMessage() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait */}
          <div className="lg:col-span-5">
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Forme décorative derrière */}
              <div className="absolute -inset-4 bg-accent-100 rounded-3xl -rotate-3" />
              <div className="absolute -inset-4 bg-primary-100 rounded-3xl rotate-3 opacity-60" />
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-soft">
                <Image
                  src="/images/equipe/president.jpg"
                  alt={`Portrait de ${SITE.president}, Président d'Horizon Afrik`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              {/* Badge nom flottant */}
              <div className="absolute -bottom-4 -right-4 bg-primary-900 text-white rounded-2xl px-5 py-3 shadow-soft max-w-[220px]">
                <div className="font-display font-semibold leading-tight">{SITE.president}</div>
                <div className="text-xs text-accent-300 mt-0.5">Président, Horizon Afrik France</div>
              </div>
            </div>
          </div>

          {/* Texte */}
          <div className="lg:col-span-7">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-600 mb-3">
              Le mot du Président
            </span>
            <Quote className="h-10 w-10 text-accent-400 mb-4" />
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary-950 leading-snug mb-6">
              « Construisons ensemble des ponts entre nos cultures et nos économies. »
            </h2>
            <div className="prose prose-lg max-w-none text-primary-900/85 leading-relaxed space-y-4">
              <p>
                Chers membres, amis et partenaires d'Horizon Afrik, c'est avec une immense
                gratitude et une passion renouvelée que je m'adresse à vous. Depuis la fondation
                de notre association en 2007 par un groupe d'amis et d'amoureux de l'Afrique à Paris,
                notre ambition a toujours été claire : promouvoir une communication positive sur
                l'Afrique et réduire le fossé qui sépare son niveau de développement de celui des
                pays développés.
              </p>
              <p>
                Aujourd'hui, la mondialisation est une réalité pleinement intégrée en Afrique.
                Au-delà de cette globalisation, il est essentiel de réaffirmer le véritable sens
                des échanges équilibrés et équitables entre le Nord et le Sud — non pas seulement
                participer à un monde interconnecté, mais garantir que cette interconnexion
                bénéficie équitablement à tous.
              </p>
              <p>
                Notre engagement est de promouvoir des partenariats qui créent un impact positif
                et partagé pour nos peuples respectifs, fondés sur le respect mutuel, la
                compréhension et une vision commune d'un avenir meilleur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
