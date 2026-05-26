import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SITE, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site de l'association Horizon Afrik.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHero title="Mentions légales" breadcrumb={[{ label: "Mentions légales" }]} />
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-3xl prose prose-lg prose-headings:font-display prose-headings:text-primary-950 prose-p:text-primary-900/85 prose-a:text-accent-600 max-w-none">
          <h2>Éditeur du site</h2>
          <p>
            {SITE.fullName}, association régie par la loi du 1er juillet 1901.<br />
            Siège social : {CONTACT.address.street}, {CONTACT.address.zip} {CONTACT.address.city}, {CONTACT.address.country}.<br />
            Email : {CONTACT.email}<br />
            Téléphone : {CONTACT.phoneDisplay}<br />
            Numéro RNA : [À COMPLÉTER]<br />
            Numéro SIRET (le cas échéant) : [À COMPLÉTER]
          </p>

          <h2>Directeur de la publication</h2>
          <p>{SITE.president}, en qualité de Président de l'association.</p>

          <h2>Hébergeur</h2>
          <p>
            Vercel Inc.<br />
            340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.<br />
            Site : vercel.com
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L'ensemble des contenus présents sur ce site (textes, images, logo) sont la propriété
            de {SITE.fullName}, sauf mention contraire. Toute reproduction, totale ou partielle,
            est interdite sans autorisation préalable.
          </p>

          <h2>Crédits</h2>
          <p>Conception et développement : [À COMPLÉTER]. Photographies : {SITE.fullName} et partenaires.</p>

          <h2>Contact</h2>
          <p>Pour toute question relative au site, écrivez-nous à {CONTACT.email}.</p>
        </div>
      </section>
    </>
  );
}
