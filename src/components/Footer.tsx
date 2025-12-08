import { Terminal } from 'lucide-react';

export const Footer = () => (
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
