import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

type PageHeroProps = {
  title: string;
  subtitle?: string;
  breadcrumb?: Crumb[];
  backgroundImage?: string;
};

export function PageHero({ title, subtitle, breadcrumb = [], backgroundImage }: PageHeroProps) {
  return (
    <section className="relative bg-primary-950 text-white overflow-hidden">
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image src={backgroundImage} alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-900/90 to-primary-900/70" />
        </div>
      )}
      {!backgroundImage && (
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
      )}

      <div className="container relative py-16 md:py-24">
        {/* Fil d'Ariane */}
        <nav aria-label="Fil d'Ariane" className="flex items-center gap-1.5 text-sm text-primary-200 mb-4">
          <Link href="/" className="hover:text-accent-300 transition">Accueil</Link>
          {breadcrumb.map((crumb) => (
            <span key={crumb.label} className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5 text-primary-400" />
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-accent-300 transition">{crumb.label}</Link>
              ) : (
                <span className="text-accent-300">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg text-primary-100/85 leading-relaxed max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
