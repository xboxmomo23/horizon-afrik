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
 * ⚠️ PROJETS D'EXEMPLE — À REMPLACER PAR DE VRAIS PROJETS
 *
 * Pour afficher l'état "aucun projet pour le moment", remplace simplement
 * le contenu du tableau par : export const PROJETS: Projet[] = [];
 *
 * Pour ajouter un vrai projet : copie un objet ci-dessous, change les valeurs,
 * et dépose l'image associée dans public/images/projets/.
 */
export const PROJETS: Projet[] = [
  {
    slug: "exemple-projet-solidarite",
    title: "Exemple — Soutien à une école rurale",
    category: "Solidarité internationale",
    location: "Afrique de l'Ouest",
    year: "2024",
    status: "en-cours",
    excerpt:
      "Ceci est un projet d'exemple. Remplacez ce texte par la description réelle d'un projet mené par l'association.",
    image: "/images/galerie/03-dons-alimentaires.webp",
    content: [
      "Ceci est un contenu d'exemple destiné à montrer la mise en page d'une fiche projet. Remplacez ce texte par le récit réel du projet : contexte, objectifs, partenaires impliqués et résultats obtenus.",
      "Vous pouvez ajouter autant de paragraphes que nécessaire. Chaque chaîne du tableau « content » correspond à un paragraphe.",
    ],
    gallery: ["/images/galerie/01-jeunes-filles.webp", "/images/galerie/04-enfant.webp"],
  },
  {
    slug: "exemple-projet-education",
    title: "Exemple — Programme de formation des jeunes",
    category: "Éducation & Formation",
    location: "Afrique de l'Ouest",
    year: "2023",
    status: "termine",
    excerpt:
      "Projet d'exemple illustrant un programme éducatif. À remplacer par un projet réel de l'association.",
    image: "/images/galerie/04-enfant.webp",
    content: [
      "Contenu d'exemple. Décrivez ici le déroulement du programme, le nombre de bénéficiaires, les compétences transmises et l'impact mesuré.",
    ],
  },
];

export function getProjetBySlug(slug: string): Projet | undefined {
  return PROJETS.find((p) => p.slug === slug);
}
