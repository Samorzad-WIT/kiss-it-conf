import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { StarsOverlay } from "./components/ui/StarsOverlay";
import { HeroSection } from "./sections/HeroSection";

import { SpeakersSection } from "./sections/SpeakersSection";
import { VenueSection } from "./sections/VenueSection";
import { PartnersSection } from "./sections/PartnersSection";
import { KolaNaukoweSection } from "./sections/KolaNaukoweSection";
import { BarterySection } from "./sections/BarterySection.tsx";
import { PatronsSection } from "./sections/PatronsSection";
import { WhyAttendSection } from "./sections/WhyAttendSection.tsx";
import { PhotosSection } from "./sections/PhotosSection";

// Globalne style (fonty, kolory, scrollbar, zaznaczenie) są w src/index.css,
// a tokeny kolorów w tailwind.config.js (kiss-*), zgodnie z makietą Figma.

export default function App() {
  return (
    <div className="relative min-h-screen bg-kiss-page text-white font-sans">
      {/* Gwiazdki z makiety – statyczna nakładka na górze strony */}
      <StarsOverlay />

      <Navbar />

      <main>
        <HeroSection />
        <WhyAttendSection />
        <VenueSection />
        <PhotosSection />
        <PartnersSection />
        <PatronsSection />
        <KolaNaukoweSection />
        <BarterySection />
        <SpeakersSection />
      </main>

      <Footer />
    </div>
  );
}
