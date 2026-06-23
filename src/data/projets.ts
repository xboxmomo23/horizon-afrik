export type ProjetStatus = "en-cours" | "termine" | "a-venir";

export type Projet = {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  status: ProjetStatus;
  excerpt: string;
  image: string;
  content: string[];
  gallery?: string[];
};

export const STATUS_LABELS: Record<ProjetStatus, string> = {
  "en-cours": "En cours",
  "termine": "Terminé",
  "a-venir": "À venir",
};

/**
 * ⚠️ PROJETS EXEMPLES — À FAIRE VALIDER ET REMPLACER PAR LE PRÉSIDENT
 *
 * Ces projets sont des illustrations cohérentes avec la mission d'Horizon Afrik,
 * destinés à donner un aperçu visuel des pages détaillées. Aucun n'est réel.
 * À remplacer dès que le Président aura communiqué les vrais projets de l'asso.
 */
export const PROJETS: Projet[] = [
  {
    slug: "appui-ecole-rurale-mali",
    title: "Appui à une école rurale dans la région de Kayes",
    category: "Éducation & Formation",
    location: "Région de Kayes, Mali",
    year: "2024",
    status: "en-cours",
    excerpt:
      "Soutien d'une école primaire rurale par la fourniture de matériel pédagogique, la rénovation des salles de classe et l'attribution de bourses scolaires.",
    image: "/images/galerie/04-enfant.webp",
    content: [
      "Dans la région de Kayes, au Mali, l'accès à l'école reste un défi pour de nombreux enfants. Aux côtés d'une association locale partenaire, Horizon Afrik appuie depuis 2024 une école primaire qui accueille plus de 180 élèves.",
      "Notre intervention s'articule autour de trois axes : la fourniture de matériel pédagogique (manuels, cahiers, fournitures de base), la rénovation des bâtiments existants (peinture, sanitaires, mobilier) et l'attribution de bourses scolaires à une quinzaine d'élèves en situation de grande précarité.",
      "Le projet est piloté localement par l'équipe enseignante avec un suivi régulier de notre part. Il s'inscrit dans la durée et a vocation à se prolonger sur les prochaines années scolaires.",
    ],
    gallery: ["/images/galerie/01-jeunes-filles.webp", "/images/galerie/04-enfant.webp"],
  },
  {
    slug: "atelier-numerique-jeunesse-dakar",
    title: "Atelier numérique pour la jeunesse de Dakar",
    category: "Transfert de technologie",
    location: "Dakar, Sénégal",
    year: "2024",
    status: "en-cours",
    excerpt:
      "Programme de formation au numérique pour des jeunes en insertion : bureautique, web, et initiation au développement.",
    image: "/images/galerie/08-soutien.webp",
    content: [
      "Le numérique est l'un des secteurs les plus dynamiques de l'économie sénégalaise. Avec un partenaire local à Dakar, nous co-pilotons un cycle de formations destiné aux jeunes de 18 à 30 ans en recherche d'insertion professionnelle.",
      "Le programme se déroule sur trois mois et alterne théorie et pratique. Il couvre la maîtrise des outils bureautiques, la création de sites web simples, l'initiation au développement et la cybersécurité de base. Une attention particulière est portée à l'employabilité : CV, posture professionnelle, recherche de stages.",
      "Les sessions sont animées par des formateurs locaux, avec l'appui ponctuel de professionnels français qui interviennent à distance via des ateliers en visioconférence.",
    ],
  },
  {
    slug: "mission-solidarite-burkina",
    title: "Mission de solidarité au Burkina Faso",
    category: "Solidarité internationale",
    location: "Ouagadougou, Burkina Faso",
    year: "2023",
    status: "termine",
    excerpt:
      "Mission de soutien à une structure d'accueil pour femmes en difficulté : appui matériel, formation et accompagnement.",
    image: "/images/galerie/02-benevole.webp",
    content: [
      "En 2023, une délégation d'Horizon Afrik s'est rendue à Ouagadougou pour appuyer une structure locale d'accueil et d'accompagnement de femmes en difficulté. La mission a duré dix jours et a mobilisé cinq bénévoles français aux côtés des équipes locales.",
      "Au programme : remise de matériel collecté en France (vêtements, fournitures, équipements de couture), formations brèves sur la gestion de projet et le suivi administratif, et co-construction d'un plan d'action pour les douze mois suivants.",
      "Ce déplacement nous a permis de renforcer un partenariat de longue date et d'identifier de nouvelles pistes de coopération pour les années à venir.",
    ],
    gallery: ["/images/galerie/02-benevole.webp", "/images/galerie/05-mains-aide.webp"],
  },
  {
    slug: "operation-fournitures-rentree",
    title: "Opération « Fournitures de rentrée »",
    category: "Solidarité internationale",
    location: "Paris & Afrique de l'Ouest",
    year: "2023",
    status: "termine",
    excerpt:
      "Collecte annuelle de fournitures scolaires en France et acheminement vers nos écoles partenaires en Afrique de l'Ouest.",
    image: "/images/galerie/03-dons-alimentaires.webp",
    content: [
      "Chaque été, Horizon Afrik organise depuis Paris une collecte solidaire de fournitures scolaires neuves ou en très bon état. Cahiers, stylos, calculatrices, livres : tout est rassemblé, trié et conditionné par nos bénévoles.",
      "Les fournitures sont ensuite acheminées par voie maritime vers nos écoles partenaires d'Afrique de l'Ouest, à temps pour la rentrée. En 2023, plus de 300 kg de matériel ont été collectés et redistribués à trois écoles au Mali et au Sénégal.",
      "L'opération est reconduite chaque année. Les particuliers, écoles et entreprises souhaitant y contribuer peuvent nous contacter au printemps pour les modalités de don.",
    ],
  },
];

export function getProjetBySlug(slug: string): Projet | undefined {
  return PROJETS.find((p) => p.slug === slug);
}
