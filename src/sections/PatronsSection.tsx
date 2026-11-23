import { patrons } from '../content';

export const PatronsSection = () => {
  return (
    <section
      id="patrons"
      className="py-24 bg-[#020210] relative scroll-mt-20 border-t border-[#ffffff]/5"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 font-sans">
          PATRONI 2026<span className="text-kiss-pink">.</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-[26px] max-w-[1024px] mx-auto items-stretch">
          {patrons.map((patron, i) => (
            <a
              key={i}
              href={patron.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <div
                className="p-4 kiss-liquid-glass 
                           hover:scale-110 hover:z-10
                           transition-[transform,background-color] duration-300 cursor-pointer flex flex-col items-center gap-4 group h-full justify-start"
              >
                <div className="w-full h-32 flex items-center justify-center p-2 bg-white rounded-lg">
                  <img
                    src={patron.image}
                    alt={patron.name}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                  />
                </div>

                <div className="min-h-12 flex items-center justify-center font-display text-xs md:text-sm text-white tracking-wide leading-tight text-center overflow-hidden">
                  {patron.name}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
