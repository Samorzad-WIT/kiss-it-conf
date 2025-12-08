export const GlitchHeader = ({ text, subtext }: { text: string; subtext?: string }) => {
  return (
    <div className="relative inline-block group text-nowrap">
      <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter relative z-10 mix-blend-mode-normal font-sans">
        {text}
        <span className="text-[#24ff54]">.</span>
      </h1>
      <span className="absolute top-0 left-0 -ml-1 text-7xl md:text-9xl font-black text-[#6715ff] opacity-0 group-hover:opacity-70 animate-pulse select-none" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)', transform: 'translate(-2px, 2px)' }}>
        {text}.
      </span>
      <span className="absolute top-0 left-0 ml-1 text-7xl md:text-9xl font-black text-[#24ff54] opacity-0 group-hover:opacity-70 animate-pulse select-none" style={{ clipPath: 'polygon(0 80%, 100% 20%, 100% 100%, 0 100%)', transform: 'translate(2px, -2px)' }}>
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
