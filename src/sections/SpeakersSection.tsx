import { motion } from "framer-motion";
import { GlitchHeader } from "../components/ui/GlitchHeader";
import { SpeakerCard } from "../components/ui/SpeakerCard";
import { speakers } from "../content";

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

export const SpeakersSection: React.FC = () => {
  return (
    <section id="speakers" className="relative">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="space-y-8"
      >
        <div className="text-center md:text-left">
          <GlitchHeader label="PRELEGENCI">
            Głos praktyków
          </GlitchHeader>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/80 md:mx-0 md:text-base">
            Eksperci, którzy na co dzień budują i utrzymują systemy o dużej skali. Zero marketingu,
            tylko realne case studies i lessons learned.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {speakers.map((speaker, index) => (
            <SpeakerCard key={speaker.name} speaker={speaker} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};


