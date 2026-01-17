import { useState, useEffect } from 'react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
    // { label: "LOKALIZACJA", href: "#location" },
    // { label: "PARTNERZY", href: "#partners" },
    { label: "OFERTA PARTNERSKA", href: "#partners" },
    // { label: "PATRONI", href: "#patroni" }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#000018]/90 backdrop-blur-md border-b border-[#24ff54]/20' : 'bg-transparent'}`}>
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

        <div className="md:hidden">
          <div className="w-8 h-0.5 bg-[#24ff54] mb-1.5" />
          <div className="w-6 h-0.5 bg-[#24ff54] ml-auto mb-1.5" />
          <div className="w-8 h-0.5 bg-[#24ff54]" />
        </div>
      </div>
    </nav>
  );
};
