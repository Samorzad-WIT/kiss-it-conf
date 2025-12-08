import { Hash } from 'lucide-react';

export const Badge = ({ children, color = "purple" }: { children: React.ReactNode; color?: "purple" | "green" }) => {
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
