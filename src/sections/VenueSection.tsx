import { MapPin, Map as MapIcon } from 'lucide-react';
import { venueData } from '../content';

export const VenueSection = () => {
    return (
        <section id="location" className="py-24 bg-kiss-bg relative scroll-mt-20 overflow-hidden">
            {/* Tło: delikatny wzór (5% krycia) z makiety */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />

            <div className="relative max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[minmax(0,520px)_minmax(0,647px)] justify-between gap-12 items-center">
                <div className="order-2 lg:order-1">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-sans leading-[1.05]">
                        {venueData.sectionTitle}
                    </h2>
                    <p className="text-lg text-kiss-ice/80 mb-8 font-light leading-relaxed">
                        {venueData.description}
                    </p>

                    <div className="space-y-5">
                        <div className="p-6 kiss-liquid-glass">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-kiss-accent/10 rounded-lg">
                                    <MapPin className="text-kiss-accent w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-display text-kiss-accent text-sm tracking-wider mb-1">ADRES</h4>
                                    <p className="text-white font-medium text-lg">{venueData.address.street}</p>
                                    <p className="text-gray-400 text-sm">{venueData.address.city}</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 kiss-liquid-glass">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-kiss-pink/10 rounded-lg">
                                    <MapIcon className="text-kiss-pink w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-display text-kiss-pink text-sm tracking-wider mb-1">DOJAZD</h4>
                                    <p className="text-white font-medium">Przystanek: {venueData.transport.stop}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="order-1 lg:order-2 h-[400px] lg:h-[555px] relative rounded-card overflow-hidden border border-kiss-ice">
                    <iframe
                        src={venueData.mapEmbedUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(120%)' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Mapa lokalizacji"
                    />
                </div>
            </div>
        </section>
    );
};
