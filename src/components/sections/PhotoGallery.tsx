import Image from "next/image";

const photos = [
  { src: "/images/galerie/01-jeunes-filles.webp", alt: "Jeunes filles souriantes en extérieur" },
  { src: "/images/galerie/02-benevole.webp", alt: "Bénévole avec une boîte de dons" },
  { src: "/images/galerie/03-dons-alimentaires.webp", alt: "Action communautaire avec dons alimentaires" },
  { src: "/images/galerie/04-enfant.webp", alt: "Enfant en extérieur" },
  { src: "/images/galerie/05-mains-aide.webp", alt: "Mains tendues pour aider" },
  { src: "/images/galerie/06-pain-partage.webp", alt: "Partage de nourriture" },
  { src: "/images/galerie/07-lagos-food-bank.webp", alt: "Initiative Lagos Food Bank" },
  { src: "/images/galerie/08-soutien.webp", alt: "Action de soutien" },
];

export function PhotoGallery() {
  return (
    <section className="py-20 md:py-28 bg-sand-50">
      <div className="container">
        <div className="max-w-2xl mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-600 mb-3">
            Sur le terrain
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-950 leading-tight">
            Faisons un changement<br />
            <span className="text-primary-700">dans la vie des autres.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {photos.map((photo, idx) => (
            <div
              key={photo.src}
              className={`relative overflow-hidden rounded-xl group ${
                idx === 0 || idx === 5 ? "row-span-2 aspect-[3/4]" : "aspect-square"
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-primary-950/0 group-hover:bg-primary-950/30 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
