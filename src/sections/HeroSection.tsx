import { motion, type Variants } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { NeonButton } from '../components/ui/NeonButton';
import { GlitchHeader } from '../components/ui/GlitchHeader';
import { CountdownTimer } from '../components/ui/CountdownTimer';

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

export const HeroSection = () => {
  const content = {
    systemStatus: ">>> SYSTEM READY",
    title: "KISS IT",
    year: "2026",
    subtitle: "Keep It Simple, Stupid. The Architecture Conference.",
    date: "14.03.2026",
    location: "Politechnika Wrocławska, Budynek C-13",
    cta: "ZAREJESTRUJ SIĘ",
    ctaLink: "https://eventownik.solvro.pl/konferencja",
    conferenceDate: new Date("2026-03-14T09:00:00"),
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#000018]">
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#24ff54 1px, transparent 1px), linear-gradient(90deg, #24ff54 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      <div className="absolute inset-0 bg-radial-gradient from-[#6715ff]/20 to-transparent pointer-events-none" />
      <motion.div initial="hidden" animate="visible" variants={containerVariants} className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div variants={itemVariants} className="mb-4 inline-block">
          <div className="bg-[#24ff54]/10 border border-[#24ff54] px-4 py-1 text-[#24ff54] font-display text-lg tracking-widest flex items-center gap-2 rounded-full">
            <span className="w-2 h-2 bg-[#24ff54] rounded-full animate-pulse" />
            {content.systemStatus}
          </div>
        </motion.div>
        <motion.div variants={itemVariants} className="mb-2">
            <GlitchHeader text={content.title} />
            <h2 className="text-[#fd00ff] font-display text-4xl md:text-6xl mt-2">{content.year}</h2>
        </motion.div>
        <motion.p variants={itemVariants} className="text-gray-300 text-xl md:text-2xl font-light mb-10 font-sans max-w-2xl mx-auto">{content.subtitle}</motion.p>
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-8 text-white font-sans">
          <div className="flex items-center gap-3"><Calendar className="text-[#fd00ff] w-6 h-6" /><span className="text-lg">{content.date}</span></div>
          <div className="flex items-center gap-3"><MapPin className="text-[#24ff54] w-6 h-6" /><span className="text-lg">{content.location}</span></div>
        </motion.div>
        
        {/* Countdown Timer */}
        <motion.div variants={itemVariants} className="mb-12">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-white/50 mb-4">
            Do startu pozostało
          </p>
          <CountdownTimer targetDate={content.conferenceDate} />
        </motion.div>
        
        <motion.div variants={itemVariants}><NeonButton href={content.ctaLink}>{content.cta}</NeonButton></motion.div>
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#000018] to-transparent" />
    </section>
  );
};
