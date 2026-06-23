import { HandHeart, GraduationCap, Cpu, type LucideIcon } from "lucide-react";

export type ActionApproach = { title: string; description: string };
export type WhyMatter = { title: string; description: string };
export type ActionQuote = { text: string; author: string };

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
  whyMatters: WhyMatter[];
  quote: ActionQuote;
  projectCategory: string;
  image: string;
};

/**
 * ⚠️ CONTENU À FAIRE VALIDER PAR LE PRÉSIDENT
 * Tous les textes sont rédigés à partir de la mission générale d'Horizon Afrik.
 * Le champ `projectCategory` doit correspondre exactement au champ `category`
 * d'un projet dans projets.ts pour que le lien automatique fonctionne.
 */
export const ACTIONS: Action[] = [
  {
    slug: "solidarite-internationale",
    icon: HandHeart,
    eyebrow: "Solidarité",
    title: "Solidarité Internationale",
    subtitle: "Europe — Afrique de l'Ouest",
    shortDescription:
      "Soutien aux communautés, projets d'entraide et actions de développement dans les pays d'Afrique de l'Ouest.",
    intro:
      "La solidarité internationale est le socle de l'engagement d'Horizon Afrik. Depuis 2007, nous tissons des liens concrets entre les communautés européennes et africaines en accompagnant des projets de terrain qui répondent à des besoins identifiés localement. Notre rôle n'est pas d'imposer des solutions, mais d'épauler les porteurs d'initiatives africains avec nos ressources, notre réseau et notre expertise associative française.",
    objectives: [
      "Accompagner les porteurs de projets associatifs et individuels, en France comme en Afrique de l'Ouest.",
      "Mobiliser des financements pour des projets de solidarité nationale et internationale.",
      "Favoriser les échanges d'expériences et la capitalisation des savoirs entre acteurs des deux continents.",
      "Valoriser le bénévolat et promouvoir les initiatives portées par nos membres.",
    ],
    approach: [
      { title: "Accompagnement de projets", description: "De l'émergence de l'idée à sa réalisation, nous apportons un appui méthodologique adapté aux réalités du terrain. Nos bénévoles partagent leur expertise pour structurer, planifier et conduire chaque initiative jusqu'à son aboutissement." },
      { title: "Mobilisation de ressources", description: "Nous identifions et activons les ressources nécessaires aux projets : bailleurs publics, fondations privées, dons individuels, mécénat d'entreprises et matériels donnés." },
      { title: "Mise en réseau", description: "Nous connectons les acteurs européens et africains autour d'objectifs partagés. Les rencontres, missions de terrain et événements que nous organisons créent des liens durables entre les associations." },
    ],
    whyMatters: [
      { title: "Un impact réel", description: "Chaque euro mobilisé finance des actions concrètes, identifiées par les communautés locales elles-mêmes." },
      { title: "Une approche respectueuse", description: "Nous n'imposons pas de solutions. Nous épaulons les acteurs africains qui connaissent leur terrain mieux que personne." },
      { title: "Une présence durable", description: "Nos partenariats s'inscrivent dans le temps long, garantissant un suivi sérieux et une véritable continuité d'action." },
    ],
    quote: {
      text: "La vraie solidarité, ce n'est pas donner ce qui nous reste, c'est partager ce que l'on est.",
      author: "Esprit d'Horizon Afrik",
    },
    projectCategory: "Solidarité internationale",
    image: "/images/galerie/03-dons-alimentaires.webp",
  },
  {
    slug: "education-formation",
    icon: GraduationCap,
    eyebrow: "Éducation",
    title: "Éducation & Formation",
    subtitle: "Jeunesse africaine",
    shortDescription:
      "Programmes éducatifs, formations professionnelles et accompagnement de la jeunesse pour bâtir l'Afrique de demain.",
    intro:
      "L'éducation est le premier levier de développement durable. Convaincus que l'avenir de l'Afrique passe par sa jeunesse, nous soutenons l'accès à l'école, la formation professionnelle et l'accompagnement individuel des jeunes d'Afrique de l'Ouest. Notre conviction : donner à chaque jeune les moyens de construire son propre projet, dans son propre pays.",
    objectives: [
      "Faciliter l'accès à l'éducation et à la formation professionnelle des jeunes en situation précaire.",
      "Accompagner les jeunes dans leur orientation et leurs projets personnels.",
      "Soutenir les structures éducatives locales par le partage de matériel et de compétences.",
      "Sensibiliser aux enjeux du développement durable et de la citoyenneté active.",
    ],
    approach: [
      { title: "Soutien aux écoles", description: "Nous appuyons les écoles partenaires en Afrique de l'Ouest : fournitures scolaires, équipements, formations d'enseignants et bourses pour les élèves en difficulté." },
      { title: "Formation professionnelle", description: "Nous accompagnons des programmes de formation aux métiers porteurs localement : artisanat, agriculture, services. L'objectif est l'insertion durable dans l'économie locale." },
      { title: "Mentorat & accompagnement", description: "Nos bénévoles français et africains accompagnent individuellement des jeunes dans la construction de leurs projets : choix d'études, montage de micro-entreprises, recherche de stages." },
    ],
    whyMatters: [
      { title: "L'investissement le plus rentable", description: "Un enfant scolarisé aujourd'hui, c'est un adulte autonome demain, capable à son tour de faire grandir sa communauté." },
      { title: "Des compétences qui restent", description: "Contrairement à l'aide ponctuelle, la formation laisse une trace durable. Le savoir transmis ne s'épuise pas." },
      { title: "Une jeunesse qui reste chez elle", description: "Former localement, c'est offrir des perspectives qui réduisent la nécessité de partir chercher ailleurs un avenir possible." },
    ],
    quote: {
      text: "Éduquer un enfant, c'est éclairer une génération.",
      author: "Esprit d'Horizon Afrik",
    },
    projectCategory: "Éducation & Formation",
    image: "/images/galerie/04-enfant.webp",
  },
  {
    slug: "transfert-technologie",
    icon: Cpu,
    eyebrow: "Numérique",
    title: "Transfert de technologie",
    subtitle: "Réduction du gap numérique",
    shortDescription:
      "Partage de savoir-faire technologiques et numériques pour accélérer la transformation digitale du continent.",
    intro:
      "Le numérique représente une opportunité majeure pour l'Afrique : sauter des étapes de développement, créer de la valeur localement, désenclaver des territoires. Horizon Afrik facilite le transfert de savoir-faire, de technologies et de compétences depuis la France vers l'Afrique de l'Ouest, pour réduire concrètement la fracture numérique et soutenir l'écosystème tech local.",
    objectives: [
      "Transférer des compétences techniques et numériques vers les structures locales (associations, écoles, micro-entreprises).",
      "Équiper et former les bénéficiaires pour favoriser leur autonomie technologique.",
      "Soutenir l'innovation et l'entrepreneuriat numérique des jeunes talents africains.",
      "Sensibiliser à la cybersécurité et aux usages responsables du numérique.",
    ],
    approach: [
      { title: "Partage de savoir-faire", description: "Des professionnels français du numérique partagent leurs compétences avec des structures africaines : missions courtes, ateliers, mentorat à distance, formation de formateurs." },
      { title: "Équipement & infrastructure", description: "Nous facilitons l'accès aux outils numériques : matériel reconditionné, logiciels libres, connectivité, et accompagnement pour leur prise en main par les utilisateurs locaux." },
      { title: "Appui à l'innovation", description: "Nous soutenons les jeunes porteurs de projets tech africains : conseils, mise en réseau avec l'écosystème français, recherche de financements et de partenariats." },
    ],
    whyMatters: [
      { title: "Une révolution en marche", description: "L'Afrique connaît la plus forte croissance numérique du monde. Y participer maintenant, c'est accompagner un mouvement irréversible." },
      { title: "Le partage plutôt que l'assistance", description: "Le transfert de compétences crée de l'autonomie, là où le simple don de matériel ne fait qu'entretenir la dépendance." },
      { title: "Des écosystèmes locaux qui émergent", description: "Soutenir un développeur, c'est potentiellement faire naître une start-up, qui créera des emplois pour les générations suivantes." },
    ],
    quote: {
      text: "Le numérique ne se résume pas aux outils. C'est avant tout des compétences, et celles-ci se partagent.",
      author: "Esprit d'Horizon Afrik",
    },
    projectCategory: "Transfert de technologie",
    image: "/images/galerie/08-soutien.webp",
  },
];

export function getActionBySlug(slug: string): Action | undefined {
  return ACTIONS.find((a) => a.slug === slug);
}
