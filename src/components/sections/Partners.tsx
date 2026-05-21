import Image from "next/image";

export function Partners() {
  return (
    <section className="py-16 md:py-20 bg-white border-t border-sand-200">
      <div className="container">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-600 mb-3">
            Ils nous soutiennent
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary-950">
            Nos partenaires & soutiens
          </h2>
          <p className="mt-3 text-primary-800/70 max-w-xl mx-auto">
            Merci à tous les organismes qui rendent nos actions possibles.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto opacity-80 hover:opacity-100 transition grayscale hover:grayscale-0">
          <Image
            src="/images/partenaires/bandeau-soutiens.jpg"
            alt="Logos de nos partenaires et soutiens"
            width={1200}
            height={160}
            sizes="(max-width: 768px) 100vw, 1200px"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
