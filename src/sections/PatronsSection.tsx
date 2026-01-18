export const PatronsSection = () => {
  const patrons = [
    {
      name: "Patronat Honorowy Marszałka Województwa Dolnośląskiego",
      url: "https://www.duw.pl",
      image: "/patrons/dolny-slask.png",
    },
    {
      name: "Patronat Honorowy Rektora PWr",
      url: "https://pwr.edu.pl/",
      image: "/patrons/pwr-rektor.png",
    },
    {
      name: "Patronat Honorowy Wojewody Dolnośląskiego",
      url: "https://www.gov.pl/web/dolnoslaski-uw/anna-zabska",
      image: "/patrons/wojewoda.png",
    },
    {
      name: "Patronat Honorowy Dziekana WIT PWr",
      url: "https://wit.pwr.edu.pl/",
      image: "/patrons/wit.png",
    },
    {
      name: "Patronat medialny Telewizji STYK",
      url: "https://styk.pwr.edu.pl/",
      image: "/patrons/styk.png",
    },
  ];

  return (
    <section
      id="patrons"
      className="py-24 bg-[#020210] relative scroll-mt-20 border-t border-[#ffffff]/5"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 font-sans">
          PATRONI
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {patrons.map((patron, i) => (
            <a
              key={i}
              href={patron.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div
                className="p-4 border border-white/5 bg-white/5 rounded-lg backdrop-blur-sm 
                           opacity-70 hover:opacity-100 hover:scale-110 hover:border-[#fd00ff]/30 
                           transition-all duration-300 cursor-pointer flex flex-col items-center gap-4 group h-full justify-between"
              >
                <div className="w-full flex items-center justify-center p-2">
                  <img
                    src={patron.image}
                    alt={patron.name}
                    className="max-w-full rounded-lg max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>

                <div className="h-12 flex items-center justify-center font-display text-sm md:text-base text-white tracking-widest leading-tight">
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
