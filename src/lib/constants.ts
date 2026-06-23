export const SITE = {
  name: "Horizon Afrik",
  fullName: "Association Horizon Afrik",
  description:
    "Association loi 1901 à but non lucratif œuvrant pour la solidarité entre l'Europe et l'Afrique de l'Ouest.",
  url: "https://horizonafrik.org",
  founded: 2007,
  president: "Thierno SATINA DIALLO",
} as const;

export const CONTACT = {
  email: "contact@horizonafrik.org",
  emailSecondary: "horizonafrik@gmail.com",
  phone: "+33 1 45 86 32 96",
  phoneDisplay: "01 45 86 32 96",
  address: {
    street: "22 rue de la Saïda",
    zip: "75015",
    city: "Paris",
    country: "France",
  },
} as const;

export const SOCIAL = {
  facebook: "https://facebook.com/horizonafrik",
  linkedin: "https://linkedin.com/company/horizonafrik",
  instagram: "https://instagram.com/horizonafrik",
  youtube: "https://youtube.com/@horizonafrik",
} as const;

export const DONATION_PAGE = "/faire-un-don";

// Lien externe de paiement (HelloAsso, Stripe, etc.) — à remplacer quand le patron aura tranché
export const DONATION_URL = "https://www.helloasso.com/associations/horizon-afrik/formulaires/REMPLACE_PAR_VRAIE_URL";
