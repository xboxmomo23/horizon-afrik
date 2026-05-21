import Link from "next/link";
import { HandHeart, GraduationCap, Cpu, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: HandHeart,
    eyebrow: "Help Them",
    title: "Solidarité Internationale",
    subtitle: "Europe — Afrique",
    description: "Soutien aux communautés, projets d'entraide et actions de développement dans les pays d'Afrique de l'Ouest.",
    href: "/nos-actions/solidarite-internationale",
    color: "primary",
  },
  {
    icon: GraduationCap,
    eyebrow: "Educate Them",
    title: "Éducation & Formation",
    subtitle: "Jeunesse africaine",
    description: "Programmes éducatifs, formations professionnelles et accompagnement de la jeunesse pour bâtir l'Afrique de demain.",
    href: "/nos-actions/education-formation",
    color: "accent",
  },
  {
    icon: Cpu,
    eyebrow: "Tech for All",
    title: "Transfert de technologie",
    subtitle: "Réduction du gap numérique",
    description: "Partage de savoir-faire technologiques et numériques pour accélérer la transformation digitale du continent.",
    href: "/nos-actions/transfert-technologie",
    color: "primary",
  },
];

export function ActionsPillars() {
  return (
    <section className="py-20 md:py-28 bg-primary-950 text-white relative overflow-hidden">
      {/* Pattern décoratif subtil */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
           style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="container relative">
        <div className="max-w-2xl mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-400 mb-3">
            Nos actions
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            Informer et éduquer pour construire<br />
            <span className="text-accent-300">un monde solidaire, plus humain.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const isAccent = pillar.color === "accent";
            return (
              <Link
                key={pillar.title}
                href={pillar.href}
                className="group relative bg-primary-900/50 hover:bg-primary-800/70 border border-primary-800 hover:border-accent-500/50 rounded-2xl p-8 transition"
              >
                <div className={`h-14 w-14 rounded-xl grid place-items-center mb-6 transition ${
                  isAccent ? "bg-accent-500" : "bg-primary-700 group-hover:bg-accent-500"
                }`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <span className="block text-xs uppercase tracking-wider text-accent-400 mb-2">
                  {pillar.eyebrow}
                </span>
                <h3 className="font-display text-2xl font-semibold mb-1">
                  {pillar.title}
                </h3>
                <p className="text-sm text-accent-200 mb-4">{pillar.subtitle}</p>
                <p className="text-primary-200 leading-relaxed mb-6">
                  {pillar.description}
                </p>
                <span className="inline-flex items-center gap-2 text-accent-300 group-hover:text-accent-200 text-sm font-medium transition">
                  En savoir plus
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
