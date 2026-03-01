import { motion } from 'framer-motion';
import { wspolprace } from '../content';

export const WspolpraceSection = () => {
    return (
        <section
            id="wspolprace"
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
                        WSPÓŁPRACE / BARTERY
                    </h2>
                </motion.div>

                {/* Współprace */}
                <div className="flex justify-center flex-wrap gap-6">
                    {wspolprace.map((item) => (
                        <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.05 }}
                                viewport={{ once: true }}
                                className="max-w-md mx-auto p-8 border border-[#fd00ff]/30 bg-[#fd00ff]/5 rounded-xl backdrop-blur-sm hover:border-[#fd00ff]/60 transition-all duration-300 cursor-pointer shadow-[0_0_30px_-10px_rgba(253,0,255,0.2)]"
                            >
                                <div className="h-full flex flex-col items-center justify-center font-display text-xl gap-4 text-white tracking-widest font-bold">
                                    {item.label}
                                    <img src={item.logo} alt={item.name} className="h-10 w-auto" />
                                </div>
                            </motion.div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};
