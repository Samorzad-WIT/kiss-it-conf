import { useState, useEffect } from 'react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    // { label: "AGENDA", href: "#agenda" },
    // { label: "PRELEGENCI", href: "#speakers" },
    { label: "Dlaczego KISS IT?", href: "#why-attend" },
    { label: "PARTNERZY", href: "#partners" },
    { label: "PATRONI", href: "#patrons" },
    { label: "LOKALIZACJA", href: "#location" },
    { label: "KONTAKT", href: "#footer" },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Apply blur when scrolled OR when mobile menu is open
  const shouldBlur = scrolled || isMenuOpen;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${shouldBlur ? 'bg-[#000018]/90 backdrop-blur-md border-b border-[#24ff54]/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
          <img src="/logo.svg" alt="KISS IT" className="h-10" />
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-display tracking-widest text-gray-300 hover:text-[#24ff54] transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#24ff54] transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden flex flex-col justify-center items-end gap-1.5 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-8 h-0.5 bg-[#24ff54] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-[#24ff54] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-8 h-0.5 bg-[#24ff54] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu dropdown */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-[#000018]/95 backdrop-blur-md border-b border-[#24ff54]/20 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={handleLinkClick}
              className="text-sm font-display tracking-widest text-gray-300 hover:text-[#24ff54] transition-colors py-2 border-b border-white/10"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
