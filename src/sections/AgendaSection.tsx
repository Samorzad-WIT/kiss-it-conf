import { motion } from "framer-motion";
import { CalendarDays, Clock } from "lucide-react";
import { GlitchHeader } from "../components/ui/GlitchHeader";
import { agenda as agendaDays } from "../content";

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

export const AgendaSection: React.FC = () => {
  return (
    <section id="agenda" className="relative">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="space-y-8"
      >
        <div className="text-center md:text-left">
          <GlitchHeader label="AGENDA">
            Dwa dni konkretów
          </GlitchHeader>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/80 md:mx-0 md:text-base">
            Program zaprojektowany tak, żeby połączyć energię dużych scen (jak na Warszawskich
            Dniach Informatyki) z merytorycznymi ścieżkami technicznymi i strefą expo w stylu Wro
            Expo.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {agendaDays.map((day) => (
            <div
              key={day.id}
              className="glass-panel relative overflow-hidden rounded-3xl p-5 md:p-6"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_0_0,#24ff5411,transparent_55%),radial-gradient(circle_at_100%_0,#fd00ff11,transparent_55%)]" />
              <div className="relative space-y-4">
                <header className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-kiss-bg/80 text-kiss-accent">
                      <CalendarDays className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-display text-[10px] uppercase tracking-[0.24em] text-kiss-accent/80">
                        {day.date}
                      </p>
                      <p className="text-sm font-semibold md:text-base">{day.label}</p>
                    </div>
                  </div>
                </header>

                <div className="mt-2 grid gap-3 md:grid-cols-2">
                  {day.slots.map((slot, idx) => (
                    <motion.div
                      key={`${slot.time}-${slot.title}`}
                      className="rounded-2xl bg-kiss-bg/80 p-3.5 text-xs md:text-sm"
                      whileHover={{ y: -4, scale: 1.01 }}
                      transition={{ duration: 0.18, ease: "easeOut", delay: idx * 0.01 }}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="inline-flex items-center gap-2 font-display text-[10px] uppercase tracking-[0.22em] text-kiss-accent/80">
                          <Clock className="h-3.5 w-3.5" />
                          <span>{slot.time}</span>
                        </div>
                        <span className="rounded-full bg-kiss-card/70 px-2.5 py-1 text-[9px] font-display uppercase tracking-[0.2em] text-kiss-accent/80">
                          {slot.track}
                        </span>
                      </div>

                      <p className="mt-2 text-[13px] font-medium">{slot.title}</p>
                      {slot.speaker && (
                        <p className="mt-1 text-[11px] text-white/70">{slot.speaker}</p>
                      )}
                      {slot.level && (
                        <p className="mt-1 text-[10px] font-display uppercase tracking-[0.2em] text-kiss-accent/70">
                          Poziom: {slot.level}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};


