import { HandHeart, Search, Share2, Award, Cpu } from "lucide-react";

const axes = [
  {
    icon: HandHeart,
    title: "Appui & accompagnement",
    description: "Soutien méthodologique aux porteurs de projets associatifs et individuels en France et en Afrique de l'Ouest.",
  },
  {
    icon: Search,
    title: "Recherche de financements",
    description: "Mobilisation de ressources pour des projets de solidarité nationale et internationale.",
  },
  {
    icon: Share2,
    title: "Échanges d'expériences",
    description: "Capitalisation des informations essentielles au développement d'un projet ou d'une structure locale.",
  },
  {
    icon: Award,
    title: "Valorisation du bénévolat",
    description: "Promotion des initiatives portées par nos membres, en valorisant l'engagement local.",
  },
  {
    icon: Cpu,
    title: "Transfert de savoir-faire",
    description: "Partage de technologies et de compétences depuis la France vers l'Afrique de l'Ouest.",
  },
];

export function MissionStatement() {
  return (
    <section className="py-20 md:py-28 bg-sand-50">
      <div className="container">
        {/* En-tête de section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-600 mb-3">
            Horizon Afrik
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-950 leading-tight">
            Une association loi 1901,<br />
            <span className="text-primary-700">au service du lien Europe-Afrique.</span>
          </h2>
          <p className="mt-6 text-lg text-primary-800/80 leading-relaxed">
            Promouvoir la solidarité, les échanges, l'entraide, les idées de paix, de fraternité
            et de développement entre les peuples d'Europe et d'Afrique francophone.
            Apolitique, nous accompagnons les initiatives associatives et œuvrons pour
            la formation, l'éducation et le développement durable en Afrique de l'Ouest.
          </p>
        </div>

        {/* Grille des 5 axes */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {axes.map((axe) => {
            const Icon = axe.icon;
            return (
              <div
                key={axe.title}
                className="group relative bg-white rounded-2xl p-6 border border-sand-200 hover:border-accent-300 hover:shadow-soft transition"
              >
                <div className="h-12 w-12 rounded-xl bg-primary-50 group-hover:bg-accent-50 grid place-items-center mb-4 transition">
                  <Icon className="h-6 w-6 text-primary-700 group-hover:text-accent-600 transition" />
                </div>
                <h3 className="font-display text-lg font-semibold text-primary-950 mb-2">
                  {axe.title}
                </h3>
                <p className="text-sm text-primary-800/70 leading-relaxed">
                  {axe.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
