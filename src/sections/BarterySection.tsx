import { bartery } from '../content';

export const BarterySection = () => {
    return (
        <section
            id="bartery"
            className="py-24 bg-[#020210] relative scroll-mt-20 border-t border-[#ffffff]/5"
        >
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 font-sans">
                    WSPÓŁPRACE BARTEROWE
                </h2>

                <div className="grid grid-cols-[repeat(auto-fit,11rem)] md:grid-cols-[repeat(auto-fit,12rem)] justify-center gap-8">
                    {bartery.map((item, i) => (
                        <a
                            key={i}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block h-26 md:h-22 w-44 md:w-48"
                        >
                            <div
                                className="p-4 border bg-white/5 rounded-lg backdrop-blur-sm 
                           hover:scale-110 border-[#fd00ff]/50 
                           transition-all duration-300 cursor-pointer flex flex-col items-center gap-4 group h-full justify-start"
                            >
                                <div className="w-full h-32 flex items-center justify-center p-2 bg-white rounded-lg">
                                    <img
                                        src={item.logo}
                                        alt={item.name}
                                        className="max-w-full max-h-full object-contain transition-all duration-300"
                                    />
                                </div>

                                <div className="min-h-12 flex items-center justify-center font-display text-sm md:text-base text-white tracking-wide leading-tight text-center overflow-hidden">
                                    {item.name}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};
