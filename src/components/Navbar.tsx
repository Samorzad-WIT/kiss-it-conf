import { useState, useEffect } from 'react';
import { navLinks } from '../content';

/**
 * Nawigacja wg makiety Figma: pływająca "pigułka" (promień 48 px, tło #000018 @75%,
 * obramowanie #f6ecff @50%, rozmycie tła 12 px) z logo 2027 po lewej,
 * linkami w Jersey 10 (14 px, odstęp liter 1,4 px) i ostatnim linkiem jako obrysowany przycisk.
 */
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 1280) setIsMenuOpen(false);
    };
    window.addEventListener('resize', closeOnResize);
    return () => window.removeEventListener('resize', closeOnResize);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const lastIndex = navLinks.length - 1;

  return (
    <nav className="fixed left-4 right-4 top-4 z-50 md:left-[60px] md:right-[60px] md:top-[47px]">
      <div
        className={`border border-kiss-ice/50 bg-kiss-bg/75 backdrop-blur-md transition-[border-radius] duration-300 ${isMenuOpen ? 'rounded-[32px] xl:rounded-[48px]' : 'rounded-[48px]'
          }`}
      >
        <div className="mx-auto flex h-[80px] max-w-[1500px] items-center justify-between px-6">
          <button
            type="button"
            className="flex items-center"
            onClick={() => window.scrollTo(0, 0)}
            aria-label="KISS IT PWr 2027 – na górę strony"
          >
            <img src="/logo_2027.svg" alt="KISS IT PWr 2027" className="h-14 w-auto" />
          </button>

          <div className="hidden items-center gap-4 xl:flex min-[1500px]:gap-8">
            {navLinks.map((item, index) => {
              const isCta = index === lastIndex;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`group relative whitespace-nowrap font-display text-sm tracking-widest transition-colors hover:text-kiss-accent ${isCta
                      ? 'rounded-full border border-[#837694] px-3 py-1 text-[#d1d5db] hover:border-kiss-accent'
                      : 'text-[#d1d5db]'
                    }`}
                >
                  {item.label}
                  {!isCta && (
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-kiss-accent transition-all group-hover:w-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Mobile hamburger button */}
          <button
            className="flex flex-col items-end justify-center gap-1.5 p-2 xl:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className={`h-0.5 w-8 bg-kiss-accent transition-all duration-300 ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <div className={`h-0.5 w-6 bg-kiss-accent transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <div className={`h-0.5 w-8 bg-kiss-accent transition-all duration-300 ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>

        {/* Mobile menu dropdown */}
        <div
          className={`overflow-hidden transition-all duration-300 xl:hidden ${isMenuOpen ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="flex flex-col gap-1 px-6 pb-4">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={handleLinkClick}
                className="border-b border-kiss-ice/10 py-2 font-display text-sm tracking-widest text-[#d1d5db] transition-colors last:border-b-0 hover:text-kiss-accent"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
