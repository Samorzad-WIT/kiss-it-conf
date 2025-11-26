import type { MouseEventHandler } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Cpu, Grid3X3 } from "lucide-react";
import { GlitchHeader } from "../components/ui/GlitchHeader";
import { heroData } from "../content";

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

export const HeroSection: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const bgTranslateX = useTransform(mouseX, [-0.5, 0.5], [-16, 16]);
  const bgTranslateY = useTransform(mouseY, [-0.5, 0.5], [-12, 12]);
  const panelRotateX = useTransform(mouseY, [-0.5, 0.5], [6, -6]);
  const panelRotateY = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove: MouseEventHandler<HTMLElement> = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.section
      className="relative flex min-h-[70vh] items-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* background grid / glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        aria-hidden="true"
        style={{ x: bgTranslateX, y: bgTranslateY }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#6715ff33,transparent_60%),radial-gradient(circle_at_bottom,#24ff5433,transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b3b5f33_1px,transparent_1px),linear-gradient(to_bottom,#3b3b5f33_1px,transparent_1px)] bg-[size:40px_40px]" />
      </motion.div>

      <motion.div
        className="grid w-full gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-8 text-center md:text-left">
          <GlitchHeader label="KONFERENCJA TECHNOLOGICZNA">
            {heroData.title}
          </GlitchHeader>

          <motion.p
            className="mx-auto max-w-xl text-sm text-white/80 md:mx-0 md:text-base"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            {heroData.subtitle}
          </motion.p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs md:justify-start md:text-sm">
            <div className="inline-flex items-center gap-2 rounded-full bg-kiss-bg/80 px-4 py-2 font-display uppercase tracking-[0.2em] text-kiss-accent">
              <Cpu className="h-4 w-4" />
              {heroData.dateLabel}
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-kiss-card/70 px-4 py-2 font-display text-[10px] uppercase tracking-[0.24em] text-kiss-accent/90">
              <Grid3X3 className="h-4 w-4" />
              {heroData.location}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
            <p className="font-display text-[10px] uppercase tracking-[0.28em] text-kiss-accent/70">
              {heroData.systemStatus}
            </p>
          </div>
        </div>

        {/* right column: system panel */}
        <motion.div
          className="glass-panel relative overflow-hidden rounded-3xl p-5 md:p-6"
          initial={{ opacity: 0, y: 32, rotateX: 0, rotateY: 0 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ rotateX: panelRotateX, rotateY: panelRotateY, transformPerspective: 900 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_0_0,#24ff5422,transparent_55%),radial-gradient(circle_at_100%_0,#fd00ff22,transparent_55%)] opacity-80" />
          <div className="relative space-y-4">
            <header className="flex items-center justify-between text-xs text-kiss-accent/80 font-display uppercase tracking-[0.2em]">
              <span>&gt;&gt;&gt; KISS-IT:2026</span>
              <span>MODE: LIVE / PWR</span>
            </header>
            <div className="h-px w-full bg-gradient-to-r from-kiss-purple/0 via-kiss-purple/80 to-kiss-pink/0" />

            <div className="space-y-2 text-[11px] text-white/80">
              <p>
                [LOG] Ładowanie modułów: <span className="text-kiss-accent">agenda</span>,{" "}
                <span className="text-kiss-accent">speakers</span>,{" "}
                <span className="text-kiss-accent">labs</span>...
              </p>
              <p>
                [OK] Środowisko: <span className="text-kiss-accent">PWr · WROCŁAW</span>
              </p>
              <p>
                [OK] Tryb: <span className="text-kiss-accent">NEON / DARK</span>
              </p>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 text-[11px] font-display uppercase tracking-[0.2em] text-white/70">
              <div className="rounded-2xl bg-kiss-bg/70 p-3">
                <p className="text-[10px] text-kiss-accent/80">TRACKI</p>
                <p className="mt-1 text-lg text-kiss-accent">4</p>
              </div>
              <div className="rounded-2xl bg-kiss-bg/70 p-3">
                <p className="text-[10px] text-kiss-accent/80">SCENY</p>
                <p className="mt-1 text-lg text-kiss-accent">2</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};


