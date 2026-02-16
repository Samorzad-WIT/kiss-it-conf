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

const tierConfig: Record<PartnerTier, {
  label: string;
  logoSize: string;
  borderColor: string;
  glowColor: string;
}> = {
  diament: {
    label: "Partnerzy Diamantowi",
    logoSize: "h-20 md:h-24 max-w-48 md:max-w-56",
    borderColor: "border-[#fd00ff]/50",
    glowColor: "hover:shadow-[0_0_30px_rgba(0,238,255,0.23)]"
  },
  other: {
    label: "Partnerzy",
    logoSize: "h-14 md:h-16 max-w-32 md:max-w-40",
    borderColor: "border-[#fd00ff]/50",
    glowColor: "hover:shadow-[0_0_25px_rgba(255,215,0,0.25)]"
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
        group relative p-5
        border ${config.borderColor} border-opacity-20 
        bg-white/5 rounded-xl backdrop-blur-sm 
        hover:border-opacity-60 hover:bg-white/10
        transition-all duration-300 cursor-pointer
        flex flex-col items-center justify-center
        w-fit
      `}
    >
      {partner.logo ? (
        <div className="bg-white rounded-lg p-3 transition-all duration-300 group-hover:-translate-y-3">
          <img
            src={partner.logo}
            alt={`Logo ${partner.name}`}
            className={`
              ${config.logoSize} w-auto object-contain
            `}
          />
        </div>
      ) : (
        // Placeholder gdy brak logo
        <div className={`${config.logoSize} flex items-center justify-center px-4`}>
          <span className="font-display text-xl md:text-2xl text-white/80 tracking-widest group-hover:text-white transition-colors text-center whitespace-nowrap">
            {partner.name}
          </span>
        </div>
      )}

      {/* Invisible zero-height placeholder in flow — pushes card width to fit the name */}
      {partner.logo && (
        <div className="invisible h-0 whitespace-nowrap" aria-hidden="true">
          <span className={`${tier === 'other' ? 'text-sm' : 'text-xl'} font-bold`}>{partner.name}</span>
        </div>
      )}

      {/* Visible name on hover — absolute so it doesn't affect layout */}
      {partner.logo && (
        <div className="absolute bottom-1 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span className={`${tier === 'other' ? 'text-sm' : 'text-xl'} font-bold text-white font-sans drop-shadow-md whitespace-nowrap m-2`}>{partner.name}</span>
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


  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="mb-12 last:mb-0"
    >
      <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
        {partners.map((partner, index) => (
          <PartnerCard key={`${tier}-${partner.name}-${index}`} partner={partner} tier={tier} />
        ))}
      </div>
    </motion.div>
  );
};

export const PartnersSection = () => {
  // Grupowanie partnerów według poziomów
  const groupedPartners = partners.reduce<Record<PartnerTier, Partner[]>>(
    (acc, partner) => {
      acc[partner.tier].push(partner);
      return acc;
    },
    { diament: [], other: [] }
  );

  const hasPartners = partners.length > 0;
  const tierOrder: PartnerTier[] = ['diament', 'other'];

  return (
    <section
      id="partners"
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 font-sans">
            PARTNERZY WYDARZENIA
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
          <div >

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
          </p>
          <a
            href="/oferta_partnerska_1_web.pdf"
            download
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