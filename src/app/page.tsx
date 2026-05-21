import { Hero } from "@/components/sections/Hero";
import { MissionStatement } from "@/components/sections/MissionStatement";
import { PresidentMessage } from "@/components/sections/PresidentMessage";
import { ActionsPillars } from "@/components/sections/ActionsPillars";
import { PhotoGallery } from "@/components/sections/PhotoGallery";
import { Partners } from "@/components/sections/Partners";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MissionStatement />
      <PresidentMessage />
      <ActionsPillars />
      <PhotoGallery />
      <Partners />
      <FinalCTA />
    </>
  );
}
