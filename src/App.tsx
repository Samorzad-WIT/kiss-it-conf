import { HeroSection } from "./sections/HeroSection";
import { AgendaSection } from "./sections/AgendaSection";
import { SpeakersSection } from "./sections/SpeakersSection";
import { VenueSection } from "./sections/VenueSection";

function App() {
  return (
    <div className="min-h-screen bg-kiss-bg text-white">
      {/* global background glow */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-70"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0,#6715ff33,transparent_55%),radial-gradient(circle_at_90%_100%,#fd00ff33,transparent_55%),radial-gradient(circle_at_50%_50%,#24ff541f,transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#19193033_1px,transparent_1px),linear-gradient(to_bottom,#19193033_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-28 px-4 py-10 text-center md:items-stretch md:text-left md:gap-32 md:py-16 lg:py-20">
        <HeroSection />
        <AgendaSection />
        <SpeakersSection />
        <VenueSection />
      </div>
    </div>
  );
}

export default App;


