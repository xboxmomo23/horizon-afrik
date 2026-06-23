import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, Youtube, Heart, ArrowRight } from "lucide-react";
import { CONTACT, SITE, SOCIAL, DONATION_PAGE } from "@/lib/constants";

const quickLinks = [
  { label: "Qui sommes-nous", href: "/qui-sommes-nous" },
  { label: "Nos actions", href: "/nos-actions" },
  { label: "Projets solidaires", href: "/projets" },
  { label: "Médiathèque", href: "/mediatheque" },
  { label: "Contact", href: "/contact" },
];

const actionsLinks = [
  { label: "Solidarité internationale", href: "/nos-actions/solidarite-internationale" },
  { label: "Éducation & Formation", href: "/nos-actions/education-formation" },
  { label: "Transfert de technologie", href: "/nos-actions/transfert-technologie" },
];

const legalLinks = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-confidentialite" },
];

export function Footer() {
  return (
    <footer className="bg-primary-950 text-primary-100">
      <div className="border-b border-primary-800">
        <div className="container py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-white">
              Ensemble, construisons des ponts entre l'Europe et l'Afrique.
            </h2>
            <p className="mt-2 text-primary-200">
              Votre don, même modeste, fait avancer nos projets de solidarité.
            </p>
          </div>
          <Link
            href={DONATION_PAGE}
            className="shrink-0 inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-full font-semibold shadow-soft transition active:scale-95"
          >
            <Heart className="h-4 w-4" fill="currentColor" />
            Soutenir l'association
          </Link>
        </div>
      </div>

      <div className="container py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link href="/" className="inline-flex items-center mb-5 group" aria-label={`${SITE.name} - Accueil`}>
            <div className="bg-white rounded-xl px-3 py-2 shadow-soft group-hover:shadow-lg transition">
              <Image
                src="/images/logo/logo-ha-officiel.jpg"
                alt={`Logo ${SITE.name}`}
                width={140}
                height={105}
                className="h-14 w-auto"
              />
            </div>
            <span className="ml-4 font-display text-[10px] uppercase tracking-[0.2em] text-accent-300 border-l border-primary-700 pl-4 leading-snug">
              Depuis<br />{SITE.founded}
            </span>
          </Link>
          <p className="text-primary-200 text-sm leading-relaxed">
            Association loi 1901 à but non lucratif. Nous œuvrons pour promouvoir la solidarité,
            les échanges et le développement entre les peuples d'Europe et d'Afrique de l'Ouest.
          </p>
          <div className="flex items-center gap-3 mt-6">
            <Link href={SOCIAL.facebook} aria-label="Facebook" className="h-9 w-9 grid place-items-center rounded-full bg-primary-800 hover:bg-accent-500 transition">
              <Facebook className="h-4 w-4" />
            </Link>
            <Link href={SOCIAL.linkedin} aria-label="LinkedIn" className="h-9 w-9 grid place-items-center rounded-full bg-primary-800 hover:bg-accent-500 transition">
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link href={SOCIAL.instagram} aria-label="Instagram" className="h-9 w-9 grid place-items-center rounded-full bg-primary-800 hover:bg-accent-500 transition">
              <Instagram className="h-4 w-4" />
            </Link>
            <Link href={SOCIAL.youtube} aria-label="YouTube" className="h-9 w-9 grid place-items-center rounded-full bg-primary-800 hover:bg-accent-500 transition">
              <Youtube className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-2">
          <h3 className="font-display text-base font-semibold text-white mb-4">Navigation</h3>
          <ul className="space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-primary-200 hover:text-accent-400 transition">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="font-display text-base font-semibold text-white mb-4">Nos actions</h3>
          <ul className="space-y-2.5">
            {actionsLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-primary-200 hover:text-accent-400 transition">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="font-display text-base font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5 text-primary-200">
              <MapPin className="h-4 w-4 text-accent-400 mt-0.5 shrink-0" />
              <span>
                {CONTACT.address.street}
                <br />
                {CONTACT.address.zip} {CONTACT.address.city}, {CONTACT.address.country}
              </span>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2.5 text-primary-200 hover:text-accent-400 transition">
                <Mail className="h-4 w-4 text-accent-400 shrink-0" />
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-2.5 text-primary-200 hover:text-accent-400 transition">
                <Phone className="h-4 w-4 text-accent-400 shrink-0" />
                {CONTACT.phoneDisplay}
              </a>
            </li>
          </ul>

          <div className="mt-6">
            <label htmlFor="newsletter" className="block text-xs uppercase tracking-wider text-accent-400 mb-2">
              Newsletter
            </label>
            <div className="flex gap-2">
              <input
                id="newsletter"
                type="email"
                placeholder="votre@email.fr"
                className="flex-1 min-w-0 bg-primary-800/60 border border-primary-700 rounded-md px-3 py-2 text-sm text-white placeholder:text-primary-400 focus:outline-none focus:border-accent-400"
              />
              <button
                type="button"
                aria-label="S'inscrire à la newsletter"
                className="shrink-0 bg-accent-500 hover:bg-accent-600 text-white px-3 rounded-md transition"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-800">
        <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-primary-300">
          <p>
            © {new Date().getFullYear()} {SITE.fullName}. Tous droits réservés.
          </p>
          <ul className="flex items-center gap-5">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-accent-400 transition">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
