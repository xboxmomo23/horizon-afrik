import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SITE, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et protection des données personnelles d'Horizon Afrik.",
};

export default function ConfidentialitePage() {
  return (
    <>
      <PageHero title="Politique de confidentialité" breadcrumb={[{ label: "Politique de confidentialité" }]} />
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-3xl prose prose-lg prose-headings:font-display prose-headings:text-primary-950 prose-p:text-primary-900/85 prose-a:text-accent-600 prose-li:text-primary-900/85 max-w-none">
          <p>
            {SITE.fullName} accorde une grande importance à la protection de votre vie privée et
            de vos données personnelles, conformément au Règlement Général sur la Protection des
            Données (RGPD).
          </p>

          <h2>Données collectées</h2>
          <p>
            Lorsque vous utilisez notre formulaire de contact, nous collectons les données que
            vous nous transmettez : nom, adresse email, objet et contenu de votre message. Ces
            données sont utilisées uniquement pour répondre à votre demande.
          </p>

          <h2>Finalité du traitement</h2>
          <p>
            Vos données sont traitées dans le seul but de traiter vos demandes et, le cas échéant,
            de vous tenir informé de nos actions si vous y avez consenti.
          </p>

          <h2>Conservation des données</h2>
          <p>
            Vos données sont conservées pendant la durée nécessaire au traitement de votre demande,
            puis archivées ou supprimées conformément à nos obligations légales.
          </p>

          <h2>Vos droits</h2>
          <p>Conformément au RGPD, vous disposez des droits suivants :</p>
          <ul>
            <li>Droit d'accès à vos données personnelles ;</li>
            <li>Droit de rectification des données inexactes ;</li>
            <li>Droit à l'effacement de vos données ;</li>
            <li>Droit d'opposition et de limitation du traitement ;</li>
            <li>Droit à la portabilité de vos données.</li>
          </ul>
          <p>
            Pour exercer ces droits, contactez-nous à l'adresse {CONTACT.email}. Vous pouvez
            également introduire une réclamation auprès de la CNIL (www.cnil.fr).
          </p>

          <h2>Cookies</h2>
          <p>
            Ce site n'utilise pas de cookies de suivi publicitaire. Seuls des cookies techniques
            strictement nécessaires au bon fonctionnement du site peuvent être déposés.
          </p>

          <h2>Contact</h2>
          <p>Pour toute question relative à vos données personnelles : {CONTACT.email}.</p>
        </div>
      </section>
    </>
  );
}
