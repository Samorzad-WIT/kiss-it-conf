import { motion, type Variants, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';
import { Badge } from '../components/ui/Badge';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

const cardVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 80, damping: 15 }
  }
};

// Pixel art style icons as SVG components
const KnowledgeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="pixel-icon">
    <rect x="4" y="6" width="24" height="20" fill="#24ff54" fillOpacity="0.2" />
    <rect x="4" y="6" width="24" height="4" fill="#24ff54" />
    <rect x="8" y="14" width="16" height="2" fill="#24ff54" />
    <rect x="8" y="18" width="12" height="2" fill="#24ff54" />
    <rect x="8" y="22" width="8" height="2" fill="#24ff54" />
  </svg>
);

const NetworkingIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="pixel-icon">
    <rect x="14" y="4" width="4" height="4" fill="#fd00ff" />
    <rect x="4" y="14" width="4" height="4" fill="#fd00ff" />
    <rect x="24" y="14" width="4" height="4" fill="#fd00ff" />
    <rect x="8" y="24" width="4" height="4" fill="#fd00ff" />
    <rect x="20" y="24" width="4" height="4" fill="#fd00ff" />
    <rect x="15" y="8" width="2" height="6" fill="#fd00ff" fillOpacity="0.6" />
    <rect x="8" y="15" width="6" height="2" fill="#fd00ff" fillOpacity="0.6" />
    <rect x="18" y="15" width="6" height="2" fill="#fd00ff" fillOpacity="0.6" />
    <rect x="10" y="20" width="2" height="4" fill="#fd00ff" fillOpacity="0.6" />
    <rect x="20" y="20" width="2" height="4" fill="#fd00ff" fillOpacity="0.6" />
  </svg>
);

const PracticeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="pixel-icon">
    <rect x="2" y="8" width="28" height="18" fill="#6715ff" fillOpacity="0.2" />
    <rect x="2" y="8" width="28" height="4" fill="#6715ff" />
    <rect x="6" y="16" width="4" height="2" fill="#24ff54" />
    <rect x="12" y="16" width="8" height="2" fill="#d2aeff" />
    <rect x="6" y="20" width="6" height="2" fill="#fd00ff" />
    <rect x="14" y="20" width="10" height="2" fill="#d2aeff" />
  </svg>
);

const CommunityIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="pixel-icon">
    <rect x="12" y="4" width="8" height="6" fill="#24ff54" />
    <rect x="10" y="10" width="12" height="4" fill="#24ff54" fillOpacity="0.6" />
    <rect x="2" y="16" width="6" height="5" fill="#fd00ff" />
    <rect x="1" y="21" width="8" height="3" fill="#fd00ff" fillOpacity="0.6" />
    <rect x="24" y="16" width="6" height="5" fill="#fd00ff" />
    <rect x="23" y="21" width="8" height="3" fill="#fd00ff" fillOpacity="0.6" />
    <rect x="12" y="20" width="8" height="6" fill="#6715ff" />
    <rect x="10" y="26" width="12" height="3" fill="#6715ff" fillOpacity="0.6" />
  </svg>
);

const InspirationIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="pixel-icon">
    <rect x="12" y="2" width="8" height="4" fill="#24ff54" />
    <rect x="10" y="6" width="12" height="4" fill="#24ff54" fillOpacity="0.8" />
    <rect x="8" y="10" width="16" height="8" fill="#24ff54" fillOpacity="0.6" />
    <rect x="12" y="18" width="8" height="2" fill="#24ff54" fillOpacity="0.4" />
    <rect x="14" y="20" width="4" height="2" fill="#24ff54" fillOpacity="0.4" />
    <rect x="12" y="24" width="8" height="4" fill="#d2aeff" />
    <rect x="14" y="28" width="4" height="2" fill="#d2aeff" fillOpacity="0.6" />
  </svg>
);

type CardData = {
  icon: React.ReactNode;
  title: string;
  description: string;
  extendedDescription: string;
  highlights: string[];
  accentColor: string;
  borderColor: string;
};

const cards: CardData[] = [
  {
    icon: <KnowledgeIcon />,
    title: "WIEDZA OD EKSPERTÓW",
    description: "Prelekcje od praktyków z branży. Zero teorii, 100% doświadczenia z produkcji.",
    extendedDescription: "Nasi prelegenci to doświadczeni architekci i inżynierowie, którzy codziennie pracują z systemami obsługującymi miliony użytkowników. Każda prezentacja to esencja lat doświadczeń skondensowana w praktyczne wskazówki.",
    highlights: ["Case studies z dużych projektów", "Błędy do uniknięcia", "Sprawdzone wzorce architektoniczne", "Q&A z ekspertami"],
    accentColor: "#24ff54",
    borderColor: "#24ff54"
  },
  {
    icon: <NetworkingIcon />,
    title: "NETWORKING",
    description: "Poznaj ludzi z pasją do IT. Buduj kontakty, które procentują przez lata.",
    extendedDescription: "Konferencja to nie tylko prelekcje - to przede wszystkim ludzie. Przerwy kawowe, lunch i afterparty to idealne okazje do nawiązania kontaktów z profesjonalistami z całej Polski.",
    highlights: ["Dedykowane strefy networkingowe", "Speed networking sessions", "Afterparty z DJ-em", "Kanał Discord dla uczestników"],
    accentColor: "#fd00ff",
    borderColor: "#fd00ff"
  },
  {
    icon: <PracticeIcon />,
    title: "PRAKTYKA > TEORIA",
    description: "Warsztaty, code review na żywo, case studies z prawdziwych projektów.",
    extendedDescription: "Wierzymy, że najlepiej uczy się przez praktykę. Dlatego oferujemy interaktywne warsztaty, live coding sessions i analizę prawdziwych systemów - nie slajdy z teorią.",
    highlights: ["Warsztaty hands-on", "Live coding & debugging", "Architektura na żywo", "Rozwiązywanie realnych problemów"],
    accentColor: "#6715ff",
    borderColor: "#6715ff"
  },
  {
    icon: <CommunityIcon />,
    title: "SPOŁECZNOŚĆ",
    description: "Dołącz do polskiej społeczności architektów IT. Razem tworzymy przyszłość.",
    extendedDescription: "KISS IT to więcej niż konferencja - to rosnąca społeczność pasjonatów dobrej architektury. Dołącz do nas i bądź częścią ruchu na rzecz prostszych, lepszych systemów.",
    highlights: ["Dostęp do zamkniętej grupy", "Comiesięczne meetupy online", "Wspólne projekty open source", "Mentoring i wsparcie"],
    accentColor: "#fd00ff",
    borderColor: "#fd00ff"
  },
  {
    icon: <InspirationIcon />,
    title: "INSPIRACJA",
    description: "Wyjdź z konferencji z głową pełną pomysłów i energią do działania.",
    extendedDescription: "Każda edycja KISS IT to zastrzyk motywacji i świeżych pomysłów. Wracasz do pracy z nową perspektywą, gotowy do wdrażania zmian i dzielenia się wiedzą z zespołem.",
    highlights: ["Keynote od wizjonerów", "Historie sukcesu", "Trendy i przyszłość IT", "Materiały do zabrania"],
    accentColor: "#24ff54",
    borderColor: "#24ff54"
  }
];

const WhyAttendCard = ({ card, index, onClick }: { card: CardData; index: number; onClick: () => void }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative cursor-pointer"
      onClick={onClick}
      style={{
        '--accent-color': card.accentColor,
        '--border-color': card.borderColor
      } as React.CSSProperties}
    >

      <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2" style={{ borderColor: card.borderColor }} />
      <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2" style={{ borderColor: card.borderColor }} />
      <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2" style={{ borderColor: card.borderColor }} />
      <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2" style={{ borderColor: card.borderColor }} />

      <div
        className="relative p-6 bg-[#000018] border transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        style={{
          borderColor: `${card.borderColor}40`,
          boxShadow: `4px 4px 0px ${card.borderColor}20`
        }}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${card.accentColor}10 0%, transparent 50%)`,
            boxShadow: `inset 0 0 30px ${card.accentColor}10`
          }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.3)_50%)] bg-[length:100%_4px] pointer-events-none opacity-5" />

        <div className="relative z-10">
          <div
            className="w-14 h-14 flex items-center justify-center mb-4 border-2 transition-all duration-300 group-hover:scale-110"
            style={{
              borderColor: card.borderColor,
              backgroundColor: `${card.accentColor}10`
            }}
          >
            {card.icon}
          </div>

          <div
            className="absolute top-4 right-4 font-display text-xs opacity-30"
            style={{ color: card.accentColor }}
          >
            {String(index + 1).padStart(2, '0')}
          </div>

          <h3
            className="font-display text-lg tracking-wider mb-3 transition-colors duration-300"
            style={{ color: card.accentColor }}
          >
            {card.title}
          </h3>

          <p className="text-gray-400 text-sm font-sans leading-relaxed">
            {card.description}
          </p>

          <div
            className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
            style={{ backgroundColor: card.accentColor }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export const WhyAttendSection = () => {
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

  return (
    <section id="why-attend" className="py-24 bg-[#000018] relative scroll-mt-20 overflow-hidden">

      <AnimatePresence>
        {selectedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCard(null)}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-lg w-full bg-[#000018] border-2 p-8"
              style={{ borderColor: selectedCard.borderColor }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2" style={{ borderColor: selectedCard.borderColor }} />
              <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2" style={{ borderColor: selectedCard.borderColor }} />
              <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2" style={{ borderColor: selectedCard.borderColor }} />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2" style={{ borderColor: selectedCard.borderColor }} />

              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center border transition-colors duration-200 hover:bg-white/10"
                style={{ borderColor: selectedCard.borderColor, color: selectedCard.accentColor }}
              >
                <X size={18} />
              </button>

              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.3)_50%)] bg-[length:100%_4px] pointer-events-none opacity-10" />

              <div
                className="w-16 h-16 flex items-center justify-center mb-6 border-2"
                style={{ borderColor: selectedCard.borderColor, backgroundColor: `${selectedCard.accentColor}15` }}
              >
                {selectedCard.icon}
              </div>

              <h3
                className="font-display text-2xl tracking-wider mb-4"
                style={{ color: selectedCard.accentColor }}
              >
                {selectedCard.title}
              </h3>

              <p className="text-gray-300 font-sans leading-relaxed mb-6">
                {selectedCard.extendedDescription}
              </p>

              <div className="space-y-2">
                <p className="text-sm font-display tracking-widest text-gray-500 mb-3">
                  {'>'} HIGHLIGHTS:
                </p>
                {selectedCard.highlights.map((highlight, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-sm font-sans"
                  >
                    <span
                      className="w-2 h-2 flex-shrink-0"
                      style={{ backgroundColor: selectedCard.accentColor }}
                    />
                    <span className="text-gray-400">{highlight}</span>
                  </div>
                ))}
              </div>

              <div
                className="absolute bottom-0 left-0 right-0 h-1"
                style={{ backgroundColor: selectedCard.accentColor, opacity: 0.5 }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge color="purple">MISSION BRIEFING</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4 font-sans">
            DLACZEGO WARTO SIĘ POJAWIĆ<span className="text-[#fd00ff]">?</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {cards.slice(0, 3).map((card, index) => (
            <WhyAttendCard key={index} card={card} index={index} onClick={() => setSelectedCard(card)} />
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-2xl mx-auto lg:max-w-4xl"
        >
          {cards.slice(3).map((card, index) => (
            <WhyAttendCard key={index + 3} card={card} index={index + 3} onClick={() => setSelectedCard(card)} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 text-gray-600 font-display text-sm tracking-widest">
            <span className="w-8 h-[1px] bg-gray-700" />
            <span>SYSTEM_MSG: JOIN_US</span>
            <span className="w-8 h-[1px] bg-gray-700" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

