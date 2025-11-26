import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import type { Speaker } from "../../content";
import { cn } from "../../utils/cn";

interface SpeakerCardProps {
  speaker: Speaker;
  index?: number;
}

const tagColorMap: Record<string, string> = {
  AI: "bg-kiss-purple/20 text-kiss-accent border-kiss-purple/60",
  Cloud: "bg-kiss-purple/10 text-kiss-accent border-kiss-accent/60",
  Security: "bg-kiss-pink/20 text-kiss-pink border-kiss-pink/70",
  Frontend: "bg-kiss-card/40 text-kiss-accent border-kiss-accent/70",
  Backend: "bg-kiss-card/40 text-kiss-purple border-kiss-purple/70",
  Hacker: "bg-kiss-accent/10 text-kiss-accent border-kiss-accent"
};

export const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker, index = 0 }) => {
  return (
    <motion.article
      className="relative overflow-hidden rounded-3xl bg-kiss-bg/40 p-[1px]"
      style={{
        backgroundImage: "linear-gradient(135deg,#6715ff,#fd00ff,#24ff54)",
        boxShadow: "0 0 40px rgba(253,0,255,0.3)"
      }}
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
    >
      <div className="relative flex h-full flex-col gap-4 rounded-[calc(1.5rem-2px)] bg-kiss-card/70 p-5 md:flex-row md:gap-6 md:p-6">
        {/* Accent strip */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[3px] bg-kiss-gradient opacity-70" />

        {/* Avatar placeholder */}
        <div className="relative flex shrink-0 items-center justify-center md:w-40">
          <div className="relative h-24 w-24 overflow-hidden rounded-2xl border border-kiss-purple/60 bg-kiss-bg/60 shadow-card-glow md:h-28 md:w-28">
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_0_0,#24ff54_0,transparent_55%),radial-gradient(circle_at_100%_0,#fd00ff_0,transparent_55%),radial-gradient(circle_at_50%_100%,#6715ff_0,transparent_55%)] opacity-70"
              aria-hidden="true"
            />
            <div className="relative flex h-full items-center justify-center">
              <span className="font-display text-xs uppercase tracking-[0.2em] text-kiss-accent">
                {speaker.name.split(" ")[0]}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-3">
          <header className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="text-lg font-semibold leading-tight md:text-xl">
                {speaker.name}
              </h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-kiss-accent/80 font-display">
                {speaker.role}
              </p>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-kiss-bg/80 px-3 py-1 text-[10px] font-display uppercase tracking-[0.22em] text-kiss-accent">
              <BadgeCheck className="h-3 w-3" aria-hidden="true" />
              Speaker
            </span>
          </header>

          <p className="text-sm text-white/80">{speaker.topic}</p>

          <div className="mt-1 flex flex-wrap gap-2">
            {speaker.tags.map((tag) => (
              <span
                key={tag}
                className={cn(
                  "inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-display uppercase tracking-[0.18em]",
                  tagColorMap[tag] ?? "bg-kiss-card/50 text-kiss-accent border-kiss-accent/60"
                )}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
};


