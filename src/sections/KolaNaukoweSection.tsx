import { motion, type Variants } from 'framer-motion';
import { kolaNaukowe } from '../content';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08 },
    },
};

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.4, ease: 'easeOut' },
    },
};

export const KolaNaukoweSection = () => {
    return (
        <section
            id="kola-naukowe"
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
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white font-sans">
                        KOŁA NAUKOWE 2026<span className="text-kiss-pink">.</span>
                    </h2>
                </motion.div>

                {(() => {
                    const partner = kolaNaukowe.find((k) => k.name === 'Solvro');
                    const kola = kolaNaukowe.filter((k) => k.name !== 'Solvro');
                    return (
                        <>
                            {/* Partner technologiczny – duża karta */}
                            {partner && (
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    variants={itemVariants}
                                    className="flex justify-center mb-16"
                                >
                                    <motion.a
                                        href={partner.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        className="relative flex flex-col items-center justify-center gap-4 w-full max-w-[375px] h-[163px] px-6 kiss-liquid-glass hover:z-10 cursor-pointer"
                                    >
                                        <img
                                            src={partner.logo}
                                            alt={`Logo ${partner.name}`}
                                            className="h-16 w-auto object-contain"
                                        />
                                        <span className="text-sm font-bold text-white font-sans text-center">
                                            Partner technologiczny
                                        </span>
                                    </motion.a>
                                </motion.div>
                            )}

                            {/* Siatka kół naukowych */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={containerVariants}
                                className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-[26px] max-w-[1024px] mx-auto"
                            >
                                {kola.map((kolo) => (
                                    <motion.a
                                        key={kolo.name}
                                        href={kolo.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.05 }}
                                        className="group relative flex flex-col items-center justify-center gap-4 min-h-[163px] px-4 py-5 kiss-liquid-glass hover:z-10 cursor-pointer"
                                    >
                                        <div className="h-[88px] flex items-center justify-center rounded-lg bg-white overflow-hidden">
                                            <img
                                                src={kolo.logo}
                                                alt={`Logo ${kolo.name}`}
                                                className="h-full w-auto max-w-[170px] object-contain"
                                            />
                                        </div>
                                        <span className="text-sm font-bold text-white font-sans text-center leading-tight">
                                            {kolo.name}
                                        </span>
                                    </motion.a>
                                ))}
                            </motion.div>
                        </>
                    );
                })()}
            </div>
        </section>
    );
};
