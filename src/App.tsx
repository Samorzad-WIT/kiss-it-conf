import React, { useState, useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Terminal, Calendar, MapPin, ChevronRight, Hash, Monitor, Globe, Zap, Map, Coffee, Shield } from 'lucide-react';

// ==========================================
// 1. DATA LAYER (src/content/index.ts)
// ==========================================

const CONTENT = {
  heroData: {
    systemStatus: ">>> SYSTEM READY",
    title: "KISS IT",
    year: "2026",
    subtitle: "Keep It Simple, Stupid. The Architecture Conference.",
    date: "14.03.2026",
    location: "Politechnika Wrocławska, Budynek C-13",
    cta: "ZAREJESTRUJ SIĘ"
  },
  speakers: [
    {
      id: 1,
      name: "Dr. Adam Nowak",
      role: "AI Lead Architect",
      company: "Neural Systems",
      topic: "Skalowalność LLM w infrastrukturze on-premise",
      tags: ["AI", "Infrastructure", "Python"],
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      role: "Senior DevOps",
      company: "CloudCore",
      topic: "Kubernetes bez bólu głowy: KISS approach",
      tags: ["DevOps", "K8s", "Cloud"],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 3,
      name: "Krzysztof 'Hack' Wójcik",
      role: "Security Researcher",
      company: "RedTeam Ops",
      topic: "Zero Trust w 15 minut",
      tags: ["Security", "Network", "Audit"],
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 4,
      name: "Elena Rodriguez",
      role: "Frontend Architect",
      company: "Vercel",
      topic: "Mikrofrontendy - kiedy NIE warto?",
      tags: ["React", "Architecture", "Web"],
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400"
    }
  ],
  agenda: [
    { time: "09:00", title: "SYSTEM BOOT & REGISTRATION", type: "break", icon: Terminal },
    { time: "10:00", title: "KEYNOTE: The Art of Simplicity", speaker: "Dr. Adam Nowak", type: "talk", icon: Zap },
    { time: "11:30", title: "GARBAGE COLLECTION (Coffee Break)", type: "break", icon: Coffee },
    { time: "12:00", title: "Kubernetes bez bólu głowy", speaker: "Sarah Jenkins", type: "talk", icon: Monitor },
    { time: "13:30", title: "DEFRAGMENTATION (Lunch)", type: "break", icon: Database },
    { time: "14:30", title: "Zero Trust w 15 minut", speaker: "Krzysztof Wójcik", type: "talk", icon: Shield },
    { time: "16:00", title: "SYSTEM SHUTDOWN & NETWORKING", type: "break", icon: Globe }
  ],
  partners: [
    { name: "TechCorp", tier: "Platinum" },
    { name: "CloudBase", tier: "Gold" },
    { name: "DevTools", tier: "Gold" },
    { name: "SecurityPlus", tier: "Silver" },
    { name: "CodeHouse", tier: "Silver" }
  ],
  nav: [
    { label: "AGENDA", href: "#agenda" },
    { label: "PRELEGENCI", href: "#speakers" },
    { label: "LOKALIZACJA", href: "#location" },
    { label: "PARTNERZY", href: "#partners" }
  ]
};

// Placeholder component for missing lucide icon import
function Database(props: any) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  )
}

// ==========================================
// 2. CONFIG & TYPES
// ==========================================

type Speaker = typeof CONTENT.speakers[0];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

// ==========================================
// 3. UI COMPONENTS
// ==========================================

const GlitchHeader = ({ text, subtext }: { text: string; subtext?: string }) => {
  return (
    <div className="relative inline-block group">
      <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter relative z-10 mix-blend-mode-normal font-sans">
        {text}
        <span className="text-[#24ff54]">.</span>
      </h1>
      <span className="absolute top-0 left-0 -ml-1 text-7xl md:text-9xl font-black text-[#6715ff] opacity-0 group-hover:opacity-70 animate-pulse" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)', transform: 'translate(-2px, 2px)' }}>
        {text}.
      </span>
      <span className="absolute top-0 left-0 ml-1 text-7xl md:text-9xl font-black text-[#24ff54] opacity-0 group-hover:opacity-70 animate-pulse" style={{ clipPath: 'polygon(0 80%, 100% 20%, 100% 100%, 0 100%)', transform: 'translate(2px, -2px)' }}>
        {text}.
      </span>
      {subtext && (
        <div className="font-display text-[#24ff54] text-xl md:text-2xl mt-2 tracking-widest uppercase">
          {subtext}
        </div>
      )}
    </div>
  );
};

const NeonButton = ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="relative px-8 py-4 bg-transparent group overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#24ff54] opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
      <div className="absolute inset-0 border border-[#24ff54] shadow-[0_0_10px_rgba(36,255,84,0.3)] group-hover:shadow-[0_0_20px_rgba(36,255,84,0.6)] transition-all duration-300" />
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#24ff54]" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#24ff54]" />
      <span className="relative font-display text-[#24ff54] text-xl tracking-wider flex items-center gap-2">
        {children} <ChevronRight className="w-5 h-5" />
      </span>
    </motion.button>
  );
};

const Badge = ({ children, color = "purple" }: { children: React.ReactNode; color?: "purple" | "green" }) => {
  const styles = color === "green" 
    ? "bg-[#24ff54]/10 text-[#24ff54] border-[#24ff54]/30"
    : "bg-[#6715ff]/20 text-white border-[#6715ff]/50";

  return (
    <span className={`px-3 py-1 rounded-sm border ${styles} text-xs font-display tracking-widest uppercase flex items-center gap-1`}>
      <Hash className="w-3 h-3" />
      {children}
    </span>
  );
};

const SpeakerCard = ({ speaker }: { speaker: Speaker }) => {
  return (
    <motion.div variants={itemVariants} className="group relative w-full h-[400px] perspective-1000">
      <div className="absolute inset-0 bg-gradient-to-br from-[#6715ff] via-[#fd00ff] to-[#6715ff] p-[2px] opacity-60 group-hover:opacity-100 transition-opacity duration-500 rounded-lg">
        <div className="relative h-full w-full bg-[#000018] rounded-lg overflow-hidden flex flex-col">
          <div className="relative h-2/3 overflow-hidden">
            <div className="absolute inset-0 bg-[#6715ff]/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-300" />
            <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10 z-20" />
          </div>
          <div className="flex-1 p-5 bg-gradient-to-b from-[#000018] to-[#66147a]/20 flex flex-col justify-between border-t border-[#24ff54]/20">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-white font-sans">{speaker.name}</h3>
                <span className="text-[#24ff54] font-display text-sm">{`// ${speaker.company}`}</span>
              </div>
              <p className="text-gray-400 text-sm mb-3 font-sans leading-tight">{speaker.role}</p>
              <p className="text-white text-sm font-medium border-l-2 border-[#fd00ff] pl-2 line-clamp-2">"{speaker.topic}"</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {speaker.tags.slice(0, 2).map((tag, i) => <Badge key={i}>{tag}</Badge>)}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ==========================================
// 4. SECTIONS
// ==========================================

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#000018]">
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#24ff54 1px, transparent 1px), linear-gradient(90deg, #24ff54 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      <div className="absolute inset-0 bg-radial-gradient from-[#6715ff]/20 to-transparent pointer-events-none" />
      <motion.div initial="hidden" animate="visible" variants={containerVariants} className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div variants={itemVariants} className="mb-4 inline-block">
          <div className="bg-[#24ff54]/10 border border-[#24ff54] px-4 py-1 text-[#24ff54] font-display text-lg tracking-widest flex items-center gap-2 rounded-full">
            <span className="w-2 h-2 bg-[#24ff54] rounded-full animate-pulse" />
            {CONTENT.heroData.systemStatus}
          </div>
        </motion.div>
        <motion.div variants={itemVariants} className="mb-2">
            <GlitchHeader text={CONTENT.heroData.title} />
            <h2 className="text-[#fd00ff] font-display text-4xl md:text-6xl mt-2">{CONTENT.heroData.year}</h2>
        </motion.div>
        <motion.p variants={itemVariants} className="text-gray-300 text-xl md:text-2xl font-light mb-10 font-sans max-w-2xl mx-auto">{CONTENT.heroData.subtitle}</motion.p>
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-12 text-white font-sans">
          <div className="flex items-center gap-3"><Calendar className="text-[#fd00ff] w-6 h-6" /><span className="text-lg">{CONTENT.heroData.date}</span></div>
          <div className="flex items-center gap-3"><MapPin className="text-[#24ff54] w-6 h-6" /><span className="text-lg">{CONTENT.heroData.location}</span></div>
        </motion.div>
        <motion.div variants={itemVariants}><NeonButton>{CONTENT.heroData.cta}</NeonButton></motion.div>
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#000018] to-transparent" />
    </section>
  );
};

const SpeakersSection = () => {
  return (
    <section id="speakers" className="py-24 bg-[#000018] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-[#ffffff]/10 pb-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 font-sans">PRELEGENCI<span className="text-[#fd00ff]">.</span></h2>
            <p className="text-gray-400 font-display text-xl">{'>>>'} LOAD_SPEAKERS_MODULE()</p>
          </div>
          <div className="hidden md:block"><Badge color="green">4 EXPERTS LOADED</Badge></div>
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CONTENT.speakers.map((speaker) => <SpeakerCard key={speaker.id} speaker={speaker} />)}
        </motion.div>
      </div>
    </section>
  );
};

const AgendaSection = () => {
  return (
    <section id="agenda" className="py-24 bg-[#050520] relative scroll-mt-20 border-t border-[#24ff54]/10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16 text-center">
          <Badge color="purple">TIMELINE SEQUENCE</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-2 font-sans">AGENDA<span className="text-[#24ff54]">.</span></h2>
        </div>

        <div className="relative border-l-2 border-[#24ff54]/20 ml-4 md:ml-0 space-y-12">
          {CONTENT.agenda.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#000018] border-2 border-[#24ff54] rounded-full" />
              
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 group">
                <div className="font-display text-[#24ff54] text-xl tracking-widest min-w-[80px] pt-1">
                  {item.time}
                </div>
                
                <div className={`flex-1 p-6 rounded-lg border ${item.type === 'break' ? 'border-dashed border-gray-700 bg-white/5' : 'border-[#6715ff]/30 bg-[#6715ff]/10 hover:border-[#24ff54]'} transition-all duration-300`}>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-white font-sans">{item.title}</h3>
                    <item.icon className={`w-6 h-6 ${item.type === 'break' ? 'text-gray-500' : 'text-[#fd00ff]'}`} />
                  </div>
                  {item.speaker && (
                    <div className="text-gray-400 font-display text-sm mt-1">
                      {'>>'} SPEAKER: <span className="text-[#24ff54]">{item.speaker}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LocationSection = () => {
  return (
    <section id="location" className="py-24 bg-[#000018] relative scroll-mt-20">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <Badge color="green">TARGET COORDINATES</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 font-sans">LOKALIZACJA<span className="text-[#fd00ff]">.</span></h2>
          <p className="text-xl text-gray-300 mb-8 font-light">
            Spotykamy się w samym sercu kampusu Politechniki Wrocławskiej. 
            Budynek C-13 (Serowiec) to nowoczesne centrum studenckie.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-lg">
              <MapPin className="text-[#24ff54] w-8 h-8" />
              <div>
                <h4 className="font-display text-[#24ff54] text-lg">ADRES</h4>
                <p className="text-white">Wybrzeże Wyspiańskiego 23-25, 50-370 Wrocław</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-lg">
              <Map className="text-[#fd00ff] w-8 h-8" />
              <div>
                <h4 className="font-display text-[#fd00ff] text-lg">DOJAZD</h4>
                <p className="text-white">Tramwaje: 1, 2, 4, 10, 16 (Przystanek: Most Grunwaldzki)</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative h-[400px] bg-[#050520] border-2 border-[#24ff54]/30 rounded-xl overflow-hidden group">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Radar Animation Effect */}
            <div className="w-64 h-64 border border-[#24ff54]/20 rounded-full animate-ping absolute" />
            <div className="w-48 h-48 border border-[#24ff54]/40 rounded-full absolute" />
            <MapPin className="text-[#24ff54] w-12 h-12 relative z-10 drop-shadow-[0_0_15px_rgba(36,255,84,0.8)]" />
          </div>
          <div className="absolute bottom-4 left-4 font-display text-[#24ff54] text-sm bg-black/80 px-2 py-1">
            LAT: 51.1079 N | LNG: 17.0385 E
          </div>
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(36,255,84,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(36,255,84,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
        </div>
      </div>
    </section>
  );
};

const PartnersSection = () => {
  return (
    <section id="partners" className="py-24 bg-[#020210] relative scroll-mt-20 border-t border-[#ffffff]/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 font-sans">
          PARTNERZY WYDARZENIA
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-70">
          {CONTENT.partners.map((partner, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.1, opacity: 1, filter: "brightness(1.2)" }}
              className="p-6 border border-white/5 bg-white/5 rounded-lg backdrop-blur-sm hover:border-[#fd00ff]/30 transition-all cursor-pointer"
            >
              <div className="h-12 flex items-center justify-center font-display text-xl text-white tracking-widest">
                {partner.name}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 p-8 border border-dashed border-gray-700 rounded-xl max-w-2xl mx-auto bg-[#000018]">
          <h3 className="text-xl text-white font-bold mb-2">Chcesz zostać partnerem?</h3>
          <p className="text-gray-400 mb-4">Wspieraj lokalną społeczność IT i pokaż się setkom inżynierów.</p>
          <button className="text-[#24ff54] font-display hover:underline tracking-widest">
            {'>>>'} POBIERZ OFERTĘ SPONSORSKĄ
          </button>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 5. LAYOUT & MAIN APP
// ==========================================

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#000018]/90 backdrop-blur-md border-b border-[#24ff54]/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
          <Terminal className="w-8 h-8 text-[#24ff54]" />
          <span className="font-bold text-white text-xl tracking-wider">KISS<span className="text-[#24ff54]">IT</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {CONTENT.nav.map((item) => (
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

const Footer = () => (
  <footer className="bg-[#050520] border-t border-[#6715ff]/30 py-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 text-white/50 text-sm font-sans">
          <Terminal className="w-4 h-4" />
          <span>KISS IT 2026 ARCHITECTURE CONF.</span>
        </div>
        <div className="font-display text-[#24ff54] text-lg tracking-widest">
          KEEP_IT_SIMPLE_STUPID
        </div>
        <div className="text-white/30 text-xs">
          © 2026 POLITECHNIKA WROCŁAWSKA. ALL SYSTEMS OPERATIONAL.
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#000018] text-white selection:bg-[#fd00ff] selection:text-white font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jersey+10&family=Inter:wght@300;400;700;900&display=swap');
        
        html {
          scroll-behavior: smooth;
        }

        :root {
          --kiss-bg: #000018;
          --kiss-accent: #24ff54;
          --kiss-purple: #6715ff;
          --kiss-pink: #fd00ff;
        }

        .font-display {
          font-family: 'Jersey 10', cursive;
        }
        
        .font-sans {
          font-family: 'Inter', sans-serif;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #000018;
        }
        ::-webkit-scrollbar-thumb {
          background: #24ff54;
          border-radius: 4px;
        }
      `}</style>
      
      <Navbar />
      
      <main>
        <Hero />
        <AgendaSection />
        <SpeakersSection />
        <LocationSection />
        <PartnersSection />
      </main>

      <Footer />
    </div>
  );
}