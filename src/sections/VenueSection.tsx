import { motion } from "framer-motion";
import { MapPin, Train, Car, Navigation } from "lucide-react";
import { GlitchHeader } from "../components/ui/GlitchHeader";
import { venue } from "../content";

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

export const VenueSection: React.FC = () => {
  return (
    <section id="venue" className="relative">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="space-y-8"
      >
        <div className="text-center md:text-left">
          <GlitchHeader label="LOKALIZACJA">
            Made in Wrocław
          </GlitchHeader>
        </div>

        <div className="grid gap-6 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-start">
          <motion.div
            className="space-y-4 text-sm text-white/80 md:text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-start gap-3">
              <div className="mt-1 rounded-2xl bg-kiss-card/70 p-2 text-kiss-accent">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="font-display text-[10px] uppercase tracking-[0.24em] text-kiss-accent/80">
                  {venue.city}
                </p>
                <p className="text-base font-semibold md:text-lg">{venue.campus}</p>
                <p className="text-xs text-white/70">
                  {venue.address}, {venue.city}
                </p>
              </div>
            </div>

            <p>{venue.description}</p>

            <div className="grid gap-3 text-xs md:grid-cols-2 md:text-sm">
              <motion.div
                className="rounded-2xl bg-kiss-bg/80 p-3"
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
              >
                <div className="flex items-center gap-2 text-kiss-accent">
                  <Train className="h-4 w-4" />
                  <p className="font-display text-[10px] uppercase tracking-[0.22em]">
                    Komunikacja miejska
                  </p>
                </div>
                <p className="mt-2 text-white/80">{venue.howToGetThere.publicTransport}</p>
              </motion.div>

              <motion.div
                className="rounded-2xl bg-kiss-bg/80 p-3"
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
              >
                <div className="flex items-center gap-2 text-kiss-accent">
                  <Car className="h-4 w-4" />
                  <p className="font-display text-[10px] uppercase tracking-[0.22em]">
                    Samochód
                  </p>
                </div>
                <p className="mt-2 text-white/80">{venue.howToGetThere.car}</p>
              </motion.div>

              <motion.div
                className="rounded-2xl bg-kiss-bg/80 p-3 md:col-span-2"
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
              >
                <div className="flex items-center gap-2 text-kiss-accent">
                  <Navigation className="h-4 w-4" />
                  <p className="font-display text-[10px] uppercase tracking-[0.22em]">
                    Dodatkowe opcje
                  </p>
                </div>
                <p className="mt-2 text-white/80">{venue.howToGetThere.extras}</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="glass-panel relative h-64 overflow-hidden rounded-3xl md:h-72"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6, scale: 1.01 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0_0,#24ff5433,transparent_55%),radial-gradient(circle_at_100%_0,#fd00ff33,transparent_55%)]" />
            <div className="relative flex h-full flex-col">
              <div className="flex items-center justify-between px-4 pt-3 text-[10px] font-display uppercase tracking-[0.22em] text-kiss-accent/80">
                <span>MAPA DOJAZDU</span>
                <span>KISS IT 2026</span>
              </div>
              <div className="mt-2 h-px bg-gradient-to-r from-kiss-purple/0 via-kiss-purple/80 to-kiss-pink/0" />
              <div className="relative m-3 flex-1 overflow-hidden rounded-2xl bg-kiss-bg">
                {/* Placeholder pod embed mapy – zostawiamy jako statyczny, by nie wiązać się z konkretną implementacją */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#25255255_1px,transparent_1px),linear-gradient(to_bottom,#25255255_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="relative flex h-full flex-col items-center justify-center gap-2 text-center text-xs text-white/70">
                  <MapPin className="h-6 w-6 text-kiss-accent" />
                  <p className="font-display text-[10px] uppercase tracking-[0.24em] text-kiss-accent/80">
                    Tutaj pojawi się interaktywna mapa
                  </p>
                  <p className="max-w-xs text-[11px]">
                    W produkcji możesz podpiąć iframe z Google Maps lub OpenStreetMap używając
                    adresu kampusu.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};


