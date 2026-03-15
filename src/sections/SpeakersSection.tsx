import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
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
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const firstName = speaker.name.slice(0, speaker.name.indexOf(" ") >>> 0 || undefined);
  const lastName =
    speaker.name.indexOf(" ") !== -1
      ? speaker.name.slice(speaker.name.indexOf(" ") + 1)
      : null;

  return (
    <motion.div
      variants={itemVariants}
      className="group relative w-full h-full perspective-1000"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* --- MOBILE: horizontal card (< sm), tap to expand --- */}
      <div
        className="sm:hidden border border-[#fd00ff]/50 rounded-lg bg-[#000018] overflow-hidden transition-all duration-300 cursor-pointer"
        onClick={() => setExpanded((v) => !v)}
      >
        <div className="relative overflow-hidden">
          {/* Photo — absolutely positioned left, crops to text height */}
          <div className="absolute left-0 top-0 bottom-0 w-28 bg-[#0a0614] overflow-hidden">
            <img
              src={speaker.image && speaker.image !== "none" ? speaker.image : "/ap.png"}
              alt={speaker.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info — text drives height, padded left to clear the photo */}
          <div className="pl-[7.5rem] p-3 bg-gradient-to-r from-[#000018] to-[#66147a]/20 flex flex-col gap-1">
            <h3 className="text-base font-bold text-white font-sans leading-tight">
              {speaker.name}
            </h3>
            <span className="text-[#24ff54] font-display text-xs">
              {`// ${speaker.company}`}
            </span>
            <p className="text-gray-400 text-xs font-sans leading-tight">
              {speaker.role}
            </p>
            <p className="text-white text-xs font-medium border-l-2 border-[#fd00ff] pl-2 mt-1">
              {speaker.topic}
            </p>
            <div className="flex items-center gap-1.5 mt-auto pt-1.5">
              {speaker.tags.slice(0, 1).map((tag) => (
                <Badge key={`${speaker.name}-${tag}`}>{tag}</Badge>
              ))}
              {speaker.description && (
                <ChevronDown
                  className={`w-4 h-4 text-[#fd00ff] ml-auto transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                />
              )}
            </div>
          </div>
        </div>

        {/* Expandable description */}
        <AnimatePresence>
          {expanded && speaker.description && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div className="px-3 pb-3 pt-2 border-t border-[#fd00ff]/30">
                <p className="text-gray-300 text-sm leading-relaxed font-display">
                  {speaker.description}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* --- DESKTOP: vertical card (sm+) --- */}
      <div className="hidden sm:flex h-full border border-[#fd00ff]/50 rounded-lg bg-[#000018] overflow-hidden flex-col transition-all duration-300 relative">
        {/* Photo — 1:1 square */}
        <div className="relative w-full aspect-square bg-[#0a0614] overflow-hidden flex-shrink-0">
          <img
            src={speaker.image && speaker.image !== "none" ? speaker.image : "/ap.png"}
            alt={speaker.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Info area */}
        <div className="flex-1">
          <div className="p-5 bg-gradient-to-b from-[#000018] to-[#66147a]/20 flex flex-col justify-between h-full border-t border-[#ffffff]/5">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-white font-sans leading-tight">
                  {firstName}
                  {lastName && (
                    <>
                      <br />
                      {lastName}
                    </>
                  )}
                </h3>
                <span className="text-[#24ff54] font-display text-sm whitespace-nowrap ml-2">
                  {`// ${speaker.company}`}
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-3 font-sans leading-tight">
                {speaker.role}
              </p>
              <p className="text-white text-sm font-medium border-l-2 border-[#fd00ff] pl-2">
                {speaker.topic}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {speaker.tags.slice(0, 1).map((tag) => (
                <Badge key={`${speaker.name}-${tag}`}>{tag}</Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Hover overlay — covers ENTIRE card (photo + info) */}
        <AnimatePresence>
          {hovered && speaker.description && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="absolute inset-0 z-10 flex flex-col p-6 overflow-hidden rounded-lg"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,24,0.95) 0%, rgba(102,20,122,0.4) 100%)",
                backdropFilter: "blur(8px)",
              }}
            >
              {/* Scanline decoration */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.08) 2px, rgba(255,255,255,0.08) 4px)",
                }}
              />

              <div className="relative z-10 my-auto overflow-y-auto scrollbar-hide" style={{ scrollbarWidth: "none" }}>
                <h3 className="text-lg font-bold text-white font-sans mb-1">{speaker.name}</h3>
                <span className="text-[#24ff54] font-display text-sm mb-3 block">
                  {`// ${speaker.company}`}
                </span>
                <p className="text-gray-300 text-base leading-relaxed font-display">
                  {speaker.description}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export const SpeakersSection = () => {
  return (
    <section id="speakers" className="py-24 bg-[#000018] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-[#ffffff]/5 pb-8">
          <div className="text-left w-full">
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 items-stretch"
        >
          {speakers.map((speaker, index) => (
            <SpeakerCard key={speaker.name ?? index} speaker={speaker} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
