import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { GalleryLightbox, type MediaItem } from "@/components/sections/GalleryLightbox";

export const metadata: Metadata = {
  title: "Médiathèque",
  description:
    "Retrouvez en images les actions de terrain d'Horizon Afrik : solidarité, éducation et partage en Afrique de l'Ouest.",
};

const photos: MediaItem[] = [
  { src: "/images/galerie/01-jeunes-filles.webp", alt: "Jeunes filles souriantes en extérieur", caption: "Jeunesse et espoir" },
  { src: "/images/galerie/02-benevole.webp", alt: "Bénévole avec une boîte de dons", caption: "L'engagement de nos bénévoles" },
  { src: "/images/galerie/03-dons-alimentaires.webp", alt: "Action communautaire avec dons alimentaires", caption: "Distribution solidaire" },
  { src: "/images/galerie/04-enfant.webp", alt: "Enfant en extérieur", caption: "Pour les générations futures" },
  { src: "/images/galerie/05-mains-aide.webp", alt: "Mains tendues pour aider", caption: "La solidarité en action" },
  { src: "/images/galerie/06-pain-partage.webp", alt: "Partage de nourriture", caption: "Le partage au quotidien" },
  { src: "/images/galerie/07-lagos-food-bank.webp", alt: "Initiative de banque alimentaire", caption: "Soutien alimentaire" },
  { src: "/images/galerie/08-soutien.webp", alt: "Action de soutien", caption: "Accompagner et soutenir" },
];

export default function MediathequePage() {
  return (
    <>
      <PageHero
        title="Médiathèque"
        subtitle="Nos actions en images. Cliquez sur une photo pour l'agrandir."
        breadcrumb={[{ label: "Médiathèque" }]}
        backgroundImage="/images/galerie/06-pain-partage.webp"
      />

      <section className="py-20 md:py-28 bg-sand-50">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-600 mb-3">
              Galerie photos
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-950 leading-tight">
              Des moments de partage et de solidarité.
            </h2>
          </div>

          <GalleryLightbox images={photos} />

          <p className="text-center text-sm text-primary-700/60 mt-12">
            D'autres photos et vidéos seront ajoutées au fil de nos actions.
          </p>
        </div>
      </section>
    </>
  );
}
