import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "../../utils/cn";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  iconRight?: boolean;
}

export const NeonButton: React.FC<NeonButtonProps> = ({
  children,
  className,
  iconRight = true,
  ...props
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.04, boxShadow: "0 0 25px rgba(36,255,84,0.9)" }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "relative inline-flex items-center gap-2 rounded-full border border-kiss-accent/60",
        "bg-kiss-accent/10 px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.16em]",
        "text-kiss-accent shadow-neon-kiss transition-colors duration-150",
        "hover:bg-kiss-accent/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kiss-accent/80",
        "font-display",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      {iconRight && (
        <ArrowRight className="h-4 w-4 animate-pulse-slow" aria-hidden="true" />
      )}
      <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-kiss-accent/10 blur-xl" />
    </motion.button>
  );
};


