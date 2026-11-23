import { motion, type Variants } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { GlitchHeader } from '../components/ui/GlitchHeader';
import { heroData } from '../content';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

/**
 * Hero wg makiety Figma (ramka 1920×1200):
 *  - tło #000018 + gradient róż → granat (30%) + subtelna siatka (overlay 30%)
 *  - dwie warstwy "liquid" (mix-blend: lighten) – wymiary i pozycje w jednostkach vw,
 *    liczone względem szerokości makiety 1920 px, żeby kompozycja skalowała się z ekranem
 *  - treść wycentrowana: logo, "— 2027 —", podtytuł, data + miejsce, "szczegóły już wkrótce"
 *  - dolny gradient 128 px wtapiający hero w kolejną sekcję
 */
export const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-kiss-bg pt-20 2xl:min-h-[1200px]">
      {/* Gradient róż → granat */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-kiss-pink to-kiss-bg opacity-30"
        aria-hidden="true"
      />

      {/* Siatka 93 px (kafelek 124 px × skala 0.75 z makiety), tryb overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(246,236,255,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(246,236,255,0.9) 1px, transparent 1px), radial-gradient(circle, #32136c 0%, #66147a 100%)',
          backgroundSize: '93px 93px, 93px 93px, 93px 93px',
        }}
      />

      {/* Liquid 1 – obrócone o -35,6° wokół lewego górnego rogu */}
      <img
        src="/hero/liquid.webp"
        alt=""
        aria-hidden="true"
        draggable={false}
        className="pointer-events-none absolute max-w-none select-none mix-blend-lighten"
        style={{
          left: '-65.94vw',
          top: '11.31vw',
          width: '127.55vw',
          height: '69.57vw',
          transformOrigin: '0 0',
          transform: 'rotate(-35.6deg)',
        }}
      />

      {/* Liquid 2 */}
      <img
        src="/hero/liquid.webp"
        alt=""
        aria-hidden="true"
        draggable={false}
        className="pointer-events-none absolute max-w-none select-none mix-blend-lighten"
        style={{
          left: '71.67vw',
          top: '19.95vw',
          width: '86.4vw',
          height: '47.14vw',
        }}
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 mx-auto max-w-7xl px-6 text-center"
      >
        {/* Logo KISS IT PWr */}
        <motion.div variants={itemVariants} className="mb-2">
          <GlitchHeader text={heroData.title} />
        </motion.div>

        {/* — 2027 — */}
        <motion.div variants={itemVariants} className="flex items-center justify-center">
          <span className="h-px w-16 bg-kiss-ice sm:w-[124px]" />
          <h2 className="px-2 font-display text-5xl leading-[60px] text-kiss-ice sm:text-6xl">
            {heroData.year}
          </h2>
          <span className="h-px w-16 bg-kiss-ice sm:w-[124px]" />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="mx-auto mt-4 max-w-2xl font-sans text-xl font-light text-[#d1d5db] md:text-2xl"
        >
          {heroData.subtitle}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-col items-center justify-center gap-4 font-sans text-white md:flex-row md:gap-12"
        >
          <div className="flex items-center gap-3">
            <Calendar className="h-6 w-6 shrink-0 text-kiss-pink" />
            <span className="text-lg">{heroData.date}</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-6 w-6 shrink-0 text-kiss-accent" />
            <span className="text-lg">{heroData.location}</span>
          </div>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="mt-4 font-display text-2xl uppercase leading-8 tracking-[7.2px] text-white/50"
        >
          {heroData.comingSoon}
        </motion.p>
      </motion.div>

      {/* Dolny gradient (128 px) */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-kiss-bg to-transparent" />
    </section>
  );
};
