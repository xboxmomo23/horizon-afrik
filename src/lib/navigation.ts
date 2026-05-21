export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const MAIN_NAV: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Qui sommes-nous", href: "/qui-sommes-nous" },
  {
    label: "Nos actions",
    href: "/nos-actions",
    children: [
      { label: "Solidarité internationale", href: "/nos-actions/solidarite-internationale" },
      { label: "Éducation & Formation", href: "/nos-actions/education-formation" },
      { label: "Transfert de technologie", href: "/nos-actions/transfert-technologie" },
    ],
  },
  { label: "Projets", href: "/projets" },
  { label: "Médiathèque", href: "/mediatheque" },
  { label: "Contact", href: "/contact" },
];
