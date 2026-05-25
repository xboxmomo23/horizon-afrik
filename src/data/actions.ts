import { HandHeart, GraduationCap, Cpu, type LucideIcon } from "lucide-react";

export type ActionApproach = { title: string; description: string };

export type Action = {
  slug: string;
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  intro: string;
  objectives: string[];
  approach: ActionApproach[];
  image: string;
};

export const ACTIONS: Action[] = [
  {
    slug: "solidarite-internationale",
    icon: HandHeart,
    eyebrow: "Help Them",
    title: "Solidarité Internationale",
    subtitle: "Europe — Afrique de l'Ouest",
    shortDescription:
      "Soutien aux communautés, projets d'entraide et actions de développement dans les pays d'Afrique de l'Ouest.",
    intro:
      "La solidarité internationale est au cœur de l'engagement d'Horizon Afrik. Nous accompagnons les communautés et les associations locales d'Afrique de l'Ouest dans la réalisation de projets concrets qui améliorent durablement les conditions de vie.",
    objectives: [
      "Soutenir les porteurs de projets associatifs et individuels, en France comme en Afrique.",
      "Rechercher des financements pour des projets de solidarité nationale et internationale.",
      "Favoriser les échanges d'expériences et la capitalisation des savoirs entre acteurs.",
      "Valoriser le bénévolat et les initiatives portées par nos membres.",
    ],
    approach: [
      { title: "Accompagnement de projets", description: "Un appui méthodologique de l'idée à la réalisation, adapté aux réalités du terrain." },
      { title: "Mobilisation de ressources", description: "Recherche de partenaires et de financements pour donner vie aux projets de solidarité." },
      { title: "Mise en réseau", description: "Connexion des acteurs européens et africains autour d'objectifs partagés." },
    ],
    image: "/images/galerie/03-dons-alimentaires.webp",
  },
  {
    slug: "education-formation",
    icon: GraduationCap,
    eyebrow: "Educate Them",
    title: "Éducation & Formation",
    subtitle: "Jeunesse africaine",
    shortDescription:
      "Programmes éducatifs, formations professionnelles et accompagnement de la jeunesse pour bâtir l'Afrique de demain.",
    intro:
      "Convaincus que l'éducation est le premier levier de développement, nous œuvrons pour informer, former et accompagner la jeunesse d'Afrique de l'Ouest, afin de lui donner les moyens de construire son propre avenir.",
    objectives: [
      "Faciliter l'accès à l'éducation et à la formation professionnelle.",
      "Accompagner les jeunes dans leur parcours et leurs projets.",
      "Soutenir les structures éducatives locales par le partage de compétences.",
      "Sensibiliser aux enjeux du développement durable et de la citoyenneté.",
    ],
    approach: [
      { title: "Programmes éducatifs", description: "Appui aux écoles, centres de formation et initiatives pédagogiques locales." },
      { title: "Formation professionnelle", description: "Transmission de compétences concrètes et insérantes pour les jeunes." },
      { title: "Accompagnement", description: "Mentorat et suivi pour aider chacun à concrétiser son projet." },
    ],
    image: "/images/galerie/04-enfant.webp",
  },
  {
    slug: "transfert-technologie",
    icon: Cpu,
    eyebrow: "Tech for All",
    title: "Transfert de technologie",
    subtitle: "Réduction du gap numérique",
    shortDescription:
      "Partage de savoir-faire technologiques et numériques pour accélérer la transformation digitale du continent.",
    intro:
      "Le numérique est une formidable opportunité pour l'Afrique. Horizon Afrik facilite le transfert de savoir-faire, de technologies et de compétences depuis la France vers l'Afrique de l'Ouest, afin de réduire la fracture numérique.",
    objectives: [
      "Transférer des compétences techniques et numériques vers les structures locales.",
      "Équiper et former pour favoriser l'autonomie technologique.",
      "Soutenir l'innovation et l'entrepreneuriat numérique.",
      "Réduire concrètement le fossé numérique entre les territoires.",
    ],
    approach: [
      { title: "Partage de savoir-faire", description: "Transmission de compétences techniques par des professionnels engagés." },
      { title: "Équipement & formation", description: "Accès aux outils numériques et accompagnement à leur prise en main." },
      { title: "Appui à l'innovation", description: "Soutien aux porteurs de projets technologiques locaux." },
    ],
    image: "/images/galerie/08-soutien.webp",
  },
];

export function getActionBySlug(slug: string): Action | undefined {
  return ACTIONS.find((a) => a.slug === slug);
}
