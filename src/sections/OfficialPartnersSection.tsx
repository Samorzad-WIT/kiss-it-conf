import { motion, type Variants } from 'framer-motion';
import { partners, type Partner, type PartnerTier } from '../content';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
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
 * Konfiguracja poziomów partnerskich
 * Łatwo rozszerzalna o nowe poziomy
 */
const tierConfig: Record<PartnerTier, {
  label: string;
  gridCols: string;
  logoSize: string;
  borderColor: string;
  glowColor: string;
}> = {
  platinum: {
    label: "Partnerzy Platynowi",
    gridCols: "grid-cols-1 md:grid-cols-2",
    logoSize: "h-20 md:h-24",
    borderColor: "border-[#e5e4e2]",
    glowColor: "hover:shadow-[0_0_30px_rgba(229,228,226,0.3)]"
  },
  gold: {
    label: "Partnerzy Złoci",
    gridCols: "grid-cols-2 md:grid-cols-3",
    logoSize: "h-14 md:h-18",
    borderColor: "border-[#ffd700]",
    glowColor: "hover:shadow-[0_0_25px_rgba(255,215,0,0.25)]"
  },
  silver: {
    label: "Partnerzy Srebrni",
    gridCols: "grid-cols-2 md:grid-cols-4",
    logoSize: "h-12 md:h-14",
    borderColor: "border-[#c0c0c0]",
    glowColor: "hover:shadow-[0_0_20px_rgba(192,192,192,0.2)]"
  },
  community: {
    label: "Partnerzy Społecznościowi",
    gridCols: "grid-cols-3 md:grid-cols-5",
    logoSize: "h-10 md:h-12",
    borderColor: "border-[#24ff54]",
    glowColor: "hover:shadow-[0_0_15px_rgba(36,255,84,0.2)]"
  }
};

/** Komponent pojedynczego partnera */
interface PartnerCardProps {
  partner: Partner;
  tier: PartnerTier;
}

const PartnerCard = ({ partner, tier }: PartnerCardProps) => {
  const config = tierConfig[tier];

  const CardContent = (
    <motion.div
      variants={itemVariants}
      whileHover={{
        scale: 1.05,
        filter: "brightness(1.15)"
      }}
      className={`
        group relative p-6 
        border ${config.borderColor} border-opacity-20 
        bg-white/5 rounded-xl backdrop-blur-sm 
        hover:border-opacity-60 hover:bg-white/10
        ${config.glowColor}
        transition-all duration-300 cursor-pointer
        flex items-center justify-center
      `}
    >
      {partner.logo ? (
        <img
          src={partner.logo}
          alt={`Logo ${partner.name}`}
          className={`
            ${config.logoSize} w-auto object-contain
            ${partner.monochrome ? 'grayscale group-hover:grayscale-0' : ''}
            transition-all duration-300
          `}
        />
      ) : (
        // Placeholder gdy brak logo
        <div className={`${config.logoSize} flex items-center justify-center`}>
          <span className="font-display text-xl md:text-2xl text-white/80 tracking-widest group-hover:text-white transition-colors">
            {partner.name}
          </span>
        </div>
      )}

      {/* Nazwa partnera pod logo (widoczna na hover) */}
      {partner.logo && (
        <div className="absolute bottom-2 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-xs text-white/60 font-sans">{partner.name}</span>
        </div>
      )}
    </motion.div>
  );

  // Wrap w link jeśli podano URL
  if (partner.url) {
    return (
      <a
        href={partner.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        aria-label={`Odwiedź stronę partnera ${partner.name}`}
      >
        {CardContent}
      </a>
    );
  }

  return CardContent;
};

/** Komponent grupy partnerów na danym poziomie */
interface PartnerTierGroupProps {
  tier: PartnerTier;
  partners: Partner[];
}

const PartnerTierGroup = ({ tier, partners }: PartnerTierGroupProps) => {
  if (partners.length === 0) return null;

  const config = tierConfig[tier];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="mb-12 last:mb-0"
    >
      <h3 className="text-lg md:text-xl font-display tracking-widest text-white/60 text-center mb-6 uppercase">
        {config.label}
      </h3>
      <div className={`grid ${config.gridCols} gap-6 max-w-5xl mx-auto`}>
        {partners.map((partner, index) => (
          <PartnerCard key={`${tier}-${partner.name}-${index}`} partner={partner} tier={tier} />
        ))}
      </div>
    </motion.div>
  );
};

/** Placeholder dla pustej sekcji partnerów */
const PartnersPlaceholder = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto opacity-30"
  >
    {[...Array(4)].map((_, i) => (
      <div
        key={i}
        className="p-8 border border-white/10 bg-white/5 rounded-xl flex items-center justify-center"
      >
        <div className="h-12 w-24 bg-white/10 rounded animate-pulse" />
      </div>
    ))}
  </motion.div>
);

export const OfficialPartnersSection = () => {
  // Grupowanie partnerów według poziomów
  const groupedPartners = partners.reduce<Record<PartnerTier, Partner[]>>(
    (acc, partner) => {
      acc[partner.tier].push(partner);
      return acc;
    },
    { platinum: [], gold: [], silver: [], community: [] }
  );

  const hasPartners = partners.length > 0;
  const tierOrder: PartnerTier[] = ['platinum', 'gold', 'silver', 'community'];

  return (
    <section
      id="official-partners"
      className="py-24 bg-[#020210] relative scroll-mt-20 border-t border-[#ffffff]/5"
    >
      {/* Subtelny gradient w tle */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6715ff]/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Nagłówek sekcji */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display text-white mb-4 tracking-wider">
            OFICJALNI PARTNERZY WYDARZENIA
          </h2>
          <p className="text-gray-400 font-sans max-w-2xl mx-auto">
            Wspólnie tworzymy wyjątkowe doświadczenie dla społeczności IT
          </p>
        </motion.div>

        {/* Lista partnerów lub placeholder */}
        {hasPartners ? (
          <div className="space-y-16">
            {tierOrder.map((tier) => (
              <PartnerTierGroup
                key={tier}
                tier={tier}
                partners={groupedPartners[tier]}
              />
            ))}
          </div>
        ) : (
          <div className="text-center">
            <p className="text-white/50 font-sans mb-8">
              Lista partnerów zostanie ogłoszona wkrótce
            </p>
            <PartnersPlaceholder />
          </div>
        )}

        {/* CTA dla potencjalnych partnerów */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-20 p-8 md:p-12 border border-dashed border-gray-700 rounded-2xl max-w-3xl mx-auto bg-[#000018]/80 backdrop-blur-sm text-center"
        >
          <h3 className="text-2xl md:text-3xl text-white font-display mb-3 tracking-wide">
            Chcesz zostać partnerem?
          </h3>
          <p className="text-gray-400 mb-6 font-sans max-w-xl mx-auto">
            Wspieraj lokalną społeczność IT i pokaż się setkom inżynierów.
            Oferujemy różne poziomy partnerstwa dopasowane do Twoich potrzeb.
          </p>
          <a
            href="mailto:partners@kissit.pl"
            className="inline-flex items-center gap-2 text-[#24ff54] font-display text-lg hover:underline tracking-widest transition-all hover:gap-4"
          >
            <span>{'>>>'}</span>
            <span>POBIERZ OFERTĘ PARTNERSKĄ</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
