// React unused in new JSX transform, but keeping for compatibility if needed or removing if strictly unused.
// Linter complained about unused 'React'.
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ParticlesBackground } from "./components/ui/ParticlesBackground";
import { HeroSection } from "./sections/HeroSection";
import { AgendaSection } from "./sections/AgendaSection";
import { SpeakersSection } from "./sections/SpeakersSection";
import { VenueSection } from "./sections/VenueSection";

<link rel="icon" href="/wrss_logo.png" sizes="any" />;

//TODO  Temporary: sections hidden until content is ready
void AgendaSection;
void SpeakersSection;
void VenueSection;

import { PartnersSection } from "./sections/PartnersSection";
import { PatronsSection } from "./sections/PatronsSection";
import { WhyAttendSection } from "./sections/WhyAttendSection.tsx";

export default function App() {
  return (
    <div className="min-h-screen bg-[#000018] text-white selection:bg-[#fd00ff] selection:text-white font-sans">
      {/* Animated particles background */}
      <ParticlesBackground />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jersey+10&family=Inter:wght@300;400;700;900&display=swap');
        
        html {
          scroll-behavior: smooth;
        }

        :root {
          --kiss-bg: #000018;
          --kiss-accent: #24ff54;
          --kiss-purple: #6715ff;
          --kiss-pink: #fd00ff;
        }

        .font-display {
          font-family: 'Jersey 10', cursive;
        }
        
        .font-sans {
          font-family: 'Inter', sans-serif;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #000018;
        }
        ::-webkit-scrollbar-thumb {
          background: #24ff54;
          border-radius: 4px;
        }
      `}</style>

      <Navbar />

      <main>
        <HeroSection />
        <WhyAttendSection />
        {/* <AgendaSection /> */}
        {/* <SpeakersSection /> */}
        {/* <VenueSection /> */}
        <PartnersSection />
        <PatronsSection />
      </main>

      <Footer />
    </div>
  );
}
