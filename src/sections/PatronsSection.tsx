export const PatronsSection = () => {
  const patrons = [
    {
      name: "Patronat Honorowy Wojewody Dolnośląskiego",
      url: "https://www.gov.pl/web/dolnoslaski-uw/anna-zabska",
      image: "/patrons/wojewoda.png",
    },
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
      name: "Patronat Honorowy Dziekana WIT PWr",
      url: "https://wit.pwr.edu.pl/",
      image: "/patrons/wit.png",
    },
    {
      name: "Patronat Wroclawskiego Centrum Akademickiego",
      url: "https://wca.wroclaw.pl/",
      image: "/patrons/Wca.png",
    },
    {
      name: "Patronat medialny Telewizji STYK",
      url: "https://styk.pwr.edu.pl/",
      image: "/patrons/styk.png",
    },
    {
      name: "Patronat medialny Radia LUZ",
      url: "https://radioluz.pl/",
      image: "/patrons/luz.png",
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

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-stretch">
          {patrons.map((patron, i) => (
            <a
              key={i}
              href={patron.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <div
                className="p-4 border bg-white/5 rounded-lg backdrop-blur-sm 
                           hover:scale-110 border-[#fd00ff]/50 
                           transition-all duration-300 cursor-pointer flex flex-col items-center gap-4 group h-full justify-start"
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
