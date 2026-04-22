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
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 font-sans">
                        POPRZEDNIE KOŁA NAUKOWE
                    </h2>
                </motion.div>

                {/* Siatka kół naukowych */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 max-w-5xl mx-auto"
                >
                    {kolaNaukowe.map((kolo) => (
                        <motion.a
                            key={kolo.name}
                            href={kolo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, filter: 'brightness(1.15)' }}
                            className="group relative flex flex-col items-center gap-4 p-5 border border-[#fd00ff]/50 bg-white/5 rounded-xl backdrop-blur-sm hover:border-[#fd00ff]/60 hover:bg-white/10 transition-colors duration-300 cursor-pointer"
                        >
                            {/* Logo */}
                            <div className={`rounded-lg p-3 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1 ${kolo.name !== 'Solvro' ? 'bg-white' : ''}`}>
                                <img
                                    src={kolo.logo}
                                    alt={`Logo ${kolo.name}`}
                                    className="h-16 w-auto object-contain"
                                />
                            </div>

                            {/* Nazwa koła */}
                            <span className="text-sm font-bold text-white font-sans text-center tracking-wide leading-tight">
                                {kolo.name !== 'Solvro' ? kolo.name : 'Partner technologiczny'}
                            </span>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
