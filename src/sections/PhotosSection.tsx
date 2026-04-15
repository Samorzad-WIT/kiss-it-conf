import { photos } from '../content';

export const PhotosSection = () => {
    return (
        <section
            id="photos"
            className="py-24 bg-[#020210] relative scroll-mt-20 border-t border-[#ffffff]/5"
        >
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 font-sans">
                    GALERIA
                </h2>

                <div className="flex flex-wrap justify-center gap-4">
                    {photos.map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt={`Zdjęcie z konferencji ${i + 1}`}
                            className="h-48 md:h-64 lg:h-80 w-auto rounded-lg object-cover"
                            loading="lazy"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
