import { motion, type Variants } from "framer-motion";
import { Badge } from "../components/ui/Badge";
import { speakers, type Speaker } from "../content";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const SpeakerCard = ({ speaker }: { speaker: Speaker }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="group relative w-full h-full perspective-1000"
    >
      <div className="h-full border b-[2px] border-[#fd00ff]/50 rounded-lg bg-[#000018] overflow-hidden flex flex-col transition-all duration-300 ">
        {/* Kontener obrazu - kwadrat 1:1 z pełną widocznością zdjęcia */}
        <div className="relative w-full aspect-square bg-[#0a0614] overflow-hidden flex-shrink-0">
          <img
            src={speaker.image && speaker.image !== "none" ? speaker.image : "/ap.png"}
            alt={speaker.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        {/* Informacje o prelegencie */}
        <div className="flex-1 p-5 bg-gradient-to-b from-[#000018] to-[#66147a]/20 flex flex-col justify-between border-t border-[#ffffff]/5">
          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-white font-sans">
                {speaker.name}
              </h3>
              <span className="text-[#24ff54] font-display text-sm whitespace-nowrap ml-2">
                {`// ${speaker.company}`}
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-3 font-sans leading-tight">
              {speaker.role}
            </p>
            <p className="text-white text-sm font-medium border-l-2 border-[#fd00ff] pl-2 line-clamp-2">
              "{speaker.topic}"
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {speaker.tags.slice(0, 2).map((tag) => (
              <Badge key={`${speaker.name}-${tag}`}>{tag}</Badge>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const SpeakersSection = () => {
  return (
    <section id="speakers" className="py-24 bg-[#000018] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-[#ffffff]/5 pb-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 font-sans">
              PRELEGENCI<span className="text-[#fd00ff]">.</span>
            </h2>
            <p className="text-gray-400 font-display text-xl">
              {">>>"} LOAD_SPEAKERS_MODULE()
            </p>
          </div>
          <div className="hidden md:block">
            <Badge color="green">{speakers.length} EXPERTS LOADED</Badge>
          </div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 items-stretch"
        >
          {speakers.map((speaker, index) => (
            <SpeakerCard key={speaker.name ?? index} speaker={speaker} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
