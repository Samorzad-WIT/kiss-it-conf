import { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

interface GlitchHeaderProps {
  text: string;
  subtext?: string;
}

export const GlitchHeader = ({ text, subtext }: GlitchHeaderProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  // Mouse position values - start with slight offset to show shadow depth
  const mouseX = useMotionValue(0.08);
  const mouseY = useMotionValue(-0.12);
  
  // Transform mouse position to rotation (with limits)
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);
  
  // Add spring physics for smooth movement
  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 20 });
  
  // Glitch layers offset based on mouse
  const glitchX1 = useTransform(mouseX, [-0.5, 0.5], [-4, 4]);
  const glitchY1 = useTransform(mouseY, [-0.5, 0.5], [-2, 2]);
  const glitchX2 = useTransform(mouseX, [-0.5, 0.5], [3, -3]);
  const glitchY2 = useTransform(mouseY, [-0.5, 0.5], [2, -2]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    mouseX.set(x);
    mouseY.set(y);
  };
  
  const handleMouseLeave = () => {
    // Reset to initial offset to keep shadow visible
    mouseX.set(0.08);
    mouseY.set(-0.12);
  };

  return (
    <motion.div 
      ref={ref}
      className="relative inline-block group text-nowrap cursor-default select-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        transformStyle: 'preserve-3d',
      }}
    >
      <motion.div
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {/* Main text with 3D depth */}
        <h1 
          className="text-7xl md:text-9xl font-black text-white tracking-tighter relative z-10 font-sans"
          style={{
            textShadow: `
              0 1px 0 #ccc,
              0 2px 0 #c9c9c9,
              0 3px 0 #bbb,
              0 4px 0 #b9b9b9,
              0 5px 0 #aaa,
              0 6px 1px rgba(0,0,0,.1),
              0 0 5px rgba(0,0,0,.1),
              0 1px 3px rgba(0,0,0,.3),
              0 3px 5px rgba(0,0,0,.2),
              0 5px 10px rgba(0,0,0,.25),
              0 10px 10px rgba(0,0,0,.2),
              0 20px 20px rgba(0,0,0,.15),
              0 0 60px rgba(36, 255, 84, 0.5),
              0 0 100px rgba(103, 21, 255, 0.3)
            `,
          }}
        >
          {text}
          <span className="text-[#24ff54]">.</span>
        </h1>
        
        {/* Glitch layer 1 - Purple */}
        <motion.span 
          className="absolute top-0 left-0 text-7xl md:text-9xl font-black text-[#6715ff] opacity-0 group-hover:opacity-70 select-none pointer-events-none z-0"
          style={{ 
            clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
            x: glitchX1,
            y: glitchY1,
          }}
          aria-hidden="true"
        >
          {text}.
        </motion.span>
        
        {/* Glitch layer 2 - Green */}
        <motion.span 
          className="absolute top-0 left-0 text-7xl md:text-9xl font-black text-[#24ff54] opacity-0 group-hover:opacity-70 select-none pointer-events-none z-0"
          style={{ 
            clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)',
            x: glitchX2,
            y: glitchY2,
          }}
          aria-hidden="true"
        >
          {text}.
        </motion.span>
        
        {/* Glitch layer 3 - Pink (middle slice) */}
        <motion.span 
          className="absolute top-0 left-0 text-7xl md:text-9xl font-black text-[#fd00ff] opacity-0 group-hover:opacity-50 select-none pointer-events-none z-0"
          style={{ 
            clipPath: 'polygon(0 45%, 100% 45%, 100% 55%, 0 55%)',
            x: glitchX2,
            y: glitchY1,
          }}
          animate={{
            x: [0, -3, 2, -1, 0],
            opacity: [0, 0.5, 0.3, 0.5, 0],
          }}
          transition={{
            duration: 0.15,
            repeat: Infinity,
            repeatDelay: 3,
          }}
          aria-hidden="true"
        >
          {text}.
        </motion.span>
      </motion.div>
      
      {subtext && (
        <motion.div 
          className="font-display text-[#24ff54] text-xl md:text-2xl mt-4 tracking-widest uppercase"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {subtext}
        </motion.div>
      )}
    </motion.div>
  );
};
