import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export const NeonButton = ({ children, href }: { children: React.ReactNode; href: string }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => window.location.href = href}
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
