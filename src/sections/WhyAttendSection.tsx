import { motion, type Variants } from "framer-motion";
import { Badge } from "../components/ui/Badge";
import { whyAttendCards, type WhyAttendCard } from "../content";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 80, damping: 15 },
  },
};

// Pixel art style icons as SVG components
const KnowledgeIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="pixel-icon"
  >
    <rect x="4" y="6" width="24" height="20" fill="#24ff54" fillOpacity="0.2" />
    <rect x="4" y="6" width="24" height="4" fill="#24ff54" />
    <rect x="8" y="14" width="16" height="2" fill="#24ff54" />
    <rect x="8" y="18" width="12" height="2" fill="#24ff54" />
    <rect x="8" y="22" width="8" height="2" fill="#24ff54" />
  </svg>
);

const NetworkingIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="pixel-icon"
  >
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
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="pixel-icon"
  >
    <rect x="2" y="8" width="28" height="18" fill="#6715ff" fillOpacity="0.2" />
    <rect x="2" y="8" width="28" height="4" fill="#6715ff" />
    <rect x="6" y="16" width="4" height="2" fill="#24ff54" />
    <rect x="12" y="16" width="8" height="2" fill="#d2aeff" />
    <rect x="6" y="20" width="6" height="2" fill="#fd00ff" />
    <rect x="14" y="20" width="10" height="2" fill="#d2aeff" />
  </svg>
);

const CommunityIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="pixel-icon"
  >
    <rect x="12" y="4" width="8" height="6" fill="#24ff54" />
    <rect
      x="10"
      y="10"
      width="12"
      height="4"
      fill="#24ff54"
      fillOpacity="0.6"
    />
    <rect x="2" y="16" width="6" height="5" fill="#fd00ff" />
    <rect x="1" y="21" width="8" height="3" fill="#fd00ff" fillOpacity="0.6" />
    <rect x="24" y="16" width="6" height="5" fill="#fd00ff" />
    <rect x="23" y="21" width="8" height="3" fill="#fd00ff" fillOpacity="0.6" />
    <rect x="12" y="20" width="8" height="6" fill="#6715ff" />
    <rect
      x="10"
      y="26"
      width="12"
      height="3"
      fill="#6715ff"
      fillOpacity="0.6"
    />
  </svg>
);

const InspirationIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="pixel-icon"
  >
    <rect x="12" y="2" width="8" height="4" fill="#24ff54" />
    <rect x="10" y="6" width="12" height="4" fill="#24ff54" fillOpacity="0.8" />
    <rect x="8" y="10" width="16" height="8" fill="#24ff54" fillOpacity="0.6" />
    <rect x="12" y="18" width="8" height="2" fill="#24ff54" fillOpacity="0.4" />
    <rect x="14" y="20" width="4" height="2" fill="#24ff54" fillOpacity="0.4" />
    <rect x="12" y="24" width="8" height="4" fill="#d2aeff" />
    <rect x="14" y="28" width="4" height="2" fill="#d2aeff" fillOpacity="0.6" />
  </svg>
);

/** Map iconKey from content data to actual SVG components */
const iconMap: Record<WhyAttendCard["iconKey"], React.ReactNode> = {
  knowledge: <KnowledgeIcon />,
  networking: <NetworkingIcon />,
  practice: <PracticeIcon />,
  community: <CommunityIcon />,
  inspiration: <InspirationIcon />,
};

const WhyAttendCardComponent = ({
  card,
  index,
  className,
}: {
  card: WhyAttendCard;
  index: number;
  className?: string;
}) => {
  return (
    <motion.div
      variants={cardVariants}
      className={`group relative ${className || ""}`}
      style={
        {
          "--accent-color": card.accentColor,
          "--border-color": card.borderColor,
        } as React.CSSProperties
      }
    >
      <div
        className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2"
        style={{ borderColor: card.borderColor }}
      />
      <div
        className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2"
        style={{ borderColor: card.borderColor }}
      />
      <div
        className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2"
        style={{ borderColor: card.borderColor }}
      />
      <div
        className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2"
        style={{ borderColor: card.borderColor }}
      />

      <div
        className="relative h-full p-6 bg-[#000018] border transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        style={{
          borderColor: `${card.borderColor}40`,
          boxShadow: `4px 4px 0px ${card.borderColor}20`,
        }}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${card.accentColor}10 0%, transparent 50%)`,
            boxShadow: `inset 0 0 30px ${card.accentColor}10`,
          }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.3)_50%)] bg-[length:100%_4px] pointer-events-none opacity-5" />

        <div className="relative z-10">
          <div
            className="w-14 h-14 flex items-center justify-center mb-4 border-2 transition-all duration-300 group-hover:scale-110"
            style={{
              borderColor: card.borderColor,
              backgroundColor: `${card.accentColor}10`,
            }}
          >
            {iconMap[card.iconKey]}
          </div>

          <div
            className="absolute top-4 right-4 font-display text-xs opacity-30"
            style={{ color: card.accentColor }}
          >
            {String(index + 1).padStart(2, "0")}
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
  return (
    <section
      id="why-attend"
      className="py-24 bg-[#000018] relative scroll-mt-20 overflow-hidden"
    >
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
          className="flex flex-wrap justify-center gap-8"
        >
          {whyAttendCards.map((card, index) => (
            <WhyAttendCardComponent
              key={index}
              card={card}
              index={index}
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]"
            />
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
