import { Badge } from '../components/ui/Badge';
import { MapPin, Map as MapIcon } from 'lucide-react';

export const VenueSection = () => {
    return (
        <section id="location" className="py-24 bg-[#000018] relative scroll-mt-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-t from-[#24ff54]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                    <div className="mb-8">
                        <Badge color="green">TARGET COORDINATES</Badge>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 font-sans">
                            LOKALIZACJA<span className="text-[#fd00ff]">.</span>
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 font-light leading-relaxed">
                            Spotykamy się w samym sercu kampusu Politechniki Wrocławskiej.
                            Budynek D-20 to nowoczesne centrum studenckie,
                            które na jeden dzień zamieni się w centrum polskiego IT.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="group relative p-6 bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-[#24ff54]/50 transition-colors duration-300">
                            <div className="absolute inset-0 bg-[#24ff54]/0 group-hover:bg-[#24ff54]/5 transition-colors duration-300" />
                            <div className="relative flex items-start gap-4">
                                <div className="p-3 bg-[#24ff54]/10 rounded-lg">
                                    <MapPin className="text-[#24ff54] w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-display text-[#24ff54] text-lg mb-1">ADRES</h4>
                                    <p className="text-white font-medium text-lg">ul. Janiszewskiego 8</p>
                                    <p className="text-gray-400">50-372 Wrocław, Budynek D-20</p>
                                </div>
                            </div>
                        </div>

                        <div className="group relative p-6 bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-[#fd00ff]/50 transition-colors duration-300">
                            <div className="absolute inset-0 bg-[#fd00ff]/0 group-hover:bg-[#fd00ff]/5 transition-colors duration-300" />
                            <div className="relative flex items-start gap-4">
                                <div className="p-3 bg-[#fd00ff]/10 rounded-lg">
                                    <MapIcon className="text-[#fd00ff] w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-display text-[#fd00ff] text-lg mb-1">DOJAZD</h4>
                                    <p className="text-white font-medium">Przystanek: Plac Grunwaldzki</p>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {['0', '4', '16', '33', '70'].map(num => (
                                            <span key={num} className="px-2 py-0.5 bg-[#fd00ff]/10 border border-[#fd00ff]/30 text-xs text-[#fd00ff] rounded">
                                                {num}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="order-1 lg:order-2 h-[500px] relative rounded-2xl overflow-hidden border border-[#24ff54]/30 shadow-[0_0_30px_rgba(36,255,84,0.1)] group">
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#24ff54] z-20" />
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#24ff54] z-20" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#24ff54] z-20" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#24ff54] z-20" />

                    {/* Scanline effect */}
                    <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none z-10 opacity-10" />

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.895446968189!2d17.057317177867798!3d51.11038917172585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fe82ad79bcced%3A0xfd7c70ff2ba26316!2sJaniszewskiego%208%2C%2050-372%20Wroc%C5%82aw!5e0!3m2!1spl!2spl!4v1768780573375!5m2!1spl!2spl"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(120%)' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="grayscale hover:grayscale-0 transition-all duration-700"
                    />

                    <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-3 border-t border-[#24ff54]/30 flex justify-between items-center z-10">
                        <div className="font-display text-[#24ff54] text-sm tracking-wider animate-pulse flex items-center gap-2">
                            <span className="w-2 h-2 bg-[#24ff54] rounded-full" />
                            LIVE SATELLITE FEED_
                        </div>
                        <div className="text-xs text-gray-500 font-mono">
                            MSG_ID: LOC_8392
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
