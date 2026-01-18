import { motion } from "framer-motion";

export const PartnersSection = () => {
  const partners = [
    { name: "TechCorp", tier: "Platinum" },
    { name: "CloudBase", tier: "Gold" },
    { name: "DevTools", tier: "Gold" },
    { name: "SecurityPlus", tier: "Silver" },
    { name: "CodeHouse", tier: "Silver" },
  ];

  return (
    <section
      id="partners"
      className="py-24 bg-[#020210] relative scroll-mt-20 border-t border-[#ffffff]/5"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 font-sans">
          PARTNERZY WYDARZENIA
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-70">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1, opacity: 1, filter: "brightness(1.2)" }}
              className="p-6 border border-white/5 bg-white/5 rounded-lg backdrop-blur-sm hover:border-[#fd00ff]/30 transition-all cursor-pointer"
            >
              <div className="h-12 flex items-center justify-center font-display text-xl text-white tracking-widest">
                {partner.name}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="my-12">
          <a href="https://solvro.pwr.edu.pl" target="_blank">
            <div className="max-w-md mx-auto p-8 border border-[#fd00ff]/30 bg-[#fd00ff]/5 rounded-xl backdrop-blur-sm hover:border-[#fd00ff]/60 transition-all duration-300 cursor-pointer shadow-[0_0_30px_-10px_rgba(253,0,255,0.2)] hover:scale-105">
              <div className="h-full flex flex-col items-center justify-center font-display text-xl gap-4 text-white tracking-widest font-bold">
                Partner Technologiczny
                <img src="/solvro.svg" alt="Solvro" className="h-10 w-auto" />
              </div>
            </div>
          </a>
        </div>

        <div className="mt-16 p-8 border border-dashed border-gray-700 rounded-xl max-w-2xl mx-auto bg-[#000018]">
          <h3 className="text-xl text-white font-bold mb-2">
            Chcesz zostać partnerem?
          </h3>
          <p className="text-gray-400 mb-4">
            Wspieraj lokalną społeczność IT i pokaż się setkom inżynierów.
          </p>
          <a
            href="/oferta_partnerska_1_web.pdf"
            download
            className="text-[#24ff54] font-display hover:underline tracking-widest inline-block"
          >
            {">>>"} POBIERZ OFERTĘ PARTNERSKĄ
          </a>
        </div>
      </div>
    </section>
  );
};
