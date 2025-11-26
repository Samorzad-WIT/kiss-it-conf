import { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { cn } from "../../utils/cn";

interface GlitchHeaderProps {
  label?: string;
  children: string;
  className?: string;
}

export const GlitchHeader: React.FC<GlitchHeaderProps> = ({ label, children, className }) => {
  const controls = useAnimationControls();

  const triggerGlitch = async () => {
    // krótkie, losowe „szarpnięcie” nagłówka
    await controls.start({
      x: [0, -2, 2, -1, 0],
      y: [0, -1, 1, -1, 0],
      transition: { duration: 0.18, ease: "easeInOut" }
    });
  };

  // delikatny auto-glitch po wejściu
  useEffect(() => {
    const timeout = setTimeout(() => {
      void controls.start({
        x: [0, -2, 2, -1, 0],
        y: [0, -1, 1, -1, 0],
        transition: { duration: 0.18, ease: "easeInOut" }
      });
    }, 900);

    return () => clearTimeout(timeout);
  }, [controls]);

  return (
    <div
      className={cn("inline-flex flex-col items-center gap-2 md:items-start", className)}
      onMouseEnter={triggerGlitch}
    >
      {label && (
        <span className="font-display text-xs uppercase tracking-[0.3em] text-kiss-accent/80">
          {label}
        </span>
      )}
      <motion.div
        className="relative inline-block text-4xl font-semibold md:text-5xl lg:text-6xl"
        animate={controls}
      >
        {/* Base layer */}
        <motion.span
          className="relative z-10 bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(135deg,#24ff54,#fd00ff)"
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.span>

        {/* Glitch layers */}
        <span className="pointer-events-none absolute inset-0 select-none overflow-hidden">
          <span
            aria-hidden
            className="absolute inset-0 translate-x-[2px] translate-y-[-1px] text-kiss-purple/70 mix-blend-screen blur-[1px]"
          >
            {children}
          </span>
          <span
            aria-hidden
            className="absolute inset-0 -translate-x-[1px] translate-y-[1px] text-kiss-pink/70 mix-blend-screen blur-[0.5px]"
          >
            {children}
          </span>
        </span>

        {/* Scanline effect */}
        <span className="pointer-events-none absolute inset-0 z-20 opacity-40 mix-blend-soft-light">
          <span className="absolute inset-x-0 top-1/3 h-[1px] bg-gradient-to-r from-transparent via-kiss-accent/60 to-transparent" />
        </span>
      </motion.div>
    </div>
  );
};


