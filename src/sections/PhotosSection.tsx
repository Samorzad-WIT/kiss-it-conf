import { photos, photoRows } from '../content';

// Wysokości rzędów z makiety (1920px): 280 / 290 / 252
const rowHeights = ['md:h-[280px]', 'md:h-[290px]', 'md:h-[252px]'];

const rows = photoRows.reduce<{ src: string; index: number }[][]>((acc, count, r) => {
  const start = photoRows.slice(0, r).reduce((a, b) => a + b, 0);
  acc.push(photos.slice(start, start + count).map((src, i) => ({ src, index: start + i })));
  return acc;
}, []);
const rest = photos.slice(photoRows.reduce((a, b) => a + b, 0));

export const PhotosSection = () => {
    return (
        <section
            id="photos"
            className="py-24 bg-kiss-surface relative scroll-mt-20 overflow-hidden border-t border-[#ffffff]/5"
        >
            {/* Różowa poświata za galerią (pas 1920×400 z rozmyciem w makiecie) */}
            <div
                className="absolute inset-x-0 top-1/2 h-[900px] -translate-y-1/2 pointer-events-none"
                style={{
                    background:
                        'radial-gradient(ellipse 55% 50% at 50% 50%, rgba(253, 0, 255, 0.26) 0%, rgba(253, 0, 255, 0.08) 55%, transparent 100%)',
                }}
                aria-hidden="true"
            />

            <div className="relative max-w-[1600px] mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-kiss-ice mb-16 font-sans leading-none">
                    EDYCJA <span className="text-kiss-pink">2026</span>
                    <br />
                    ZOBACZ JAK BYŁO
                </h2>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 font-sans">
                    GALERIA 2026<span className="text-kiss-pink">.</span>
                </h3>

                <div className="flex flex-col gap-8 items-center">
                    {[...rows, ...(rest.length ? [rest.map((src, i) => ({ src, index: photos.length - rest.length + i }))] : [])].map((row, r) => (
                        <div key={r} className="flex flex-wrap lg:flex-nowrap justify-center gap-8 w-full">
                            {row.map(({ src, index }) => (
                                <img
                                    key={index}
                                    src={src}
                                    alt={`Zdjęcie z konferencji ${index + 1}`}
                                    className={`h-40 sm:h-48 w-auto lg:flex-1 lg:min-w-0 lg:max-w-[430px] rounded-card border border-kiss-ice/50 object-cover ${rowHeights[r] ?? 'md:h-[260px]'}`}
                                    loading="lazy"
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
