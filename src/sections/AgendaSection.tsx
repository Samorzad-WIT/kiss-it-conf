import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Coffee, ClipboardPen, Mic, } from "lucide-react";
import { agenda, type AgendaTimeSlot, type RoomTalk } from "../content";

const ROOM_KEYS = ["s1", "s2", "s3", "s4", "s5", "s6"] as const;
const ROOM_NAMES: Record<string, string> = {
    s1: "10AC",
    s2: "10B",
    s3: "10D",
    s4: "113",
    s5: "114",
    s6: "Recepcja",
};


const SpeechRow = ({ title }: { title: string }) => (
    <div
        className="flex items-center gap-3 p-4 border border-dashed border-[#6715ff]/50 bg-[#6715ff]/10 rounded-xl text-gray-300 font-display tracking-wider text-base">
        <ClipboardPen className="w-5 h-5 text-[#fd00ff]/70" />
        <span className="uppercase tracking-widest">{title}</span>
    </div>
);

const BreakRow = ({ title }: { title: string }) => (
    <div
        className="flex items-center gap-3 p-4 border border-dashed border-gray-700 bg-white/5 rounded-xl text-gray-400 font-display tracking-wider text-base">
        <Coffee className="w-5 h-5 text-[#24ff54]/70" />
        <span className="uppercase tracking-widest">{title}</span>
    </div>
);

// Renders the expandable list of rooms for a single time slot
const RoomsAccordion = ({ slot, endTime }: { slot: AgendaTimeSlot; endTime?: string }) => {
    // Extract all existing talks for this slot
    const talks = ROOM_KEYS.reduce<
        { id: string; name: string; talk: RoomTalk }[]
    >((acc, key) => {
        if (slot[key]) {
            acc.push({ id: key, name: ROOM_NAMES[key], talk: slot[key]! });
        }
        return acc;
    }, []);

    const [expandedId, setExpandedId] = useState<string | null>(null);

    if (talks.length === 0) return null;

    return (
        <div className="space-y-3">
            {talks.map(({ id, name, talk }) => {
                const isExpanded = expandedId === id;

                return (
                    <div
                        key={id}
                        className={`border rounded-xl overflow-hidden transition-all duration-300 ${isExpanded
                            ? "bg-[#2d1257] border-[#6715ff]"
                            : "bg-[#6715ff]/10 border-[#6715ff]/30 hover:border-[#6715ff]/60"
                            }`}
                    >
                        {/* Header (clickable to expand/collapse) */}
                        <button
                            onClick={() => setExpandedId(isExpanded ? null : id)}
                            className="w-full text-left p-4 flex items-start sm:items-center justify-between gap-4 cursor-pointer"
                        >
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <span
                                        className="text-base font-display text-[#fd00ff] tracking-widest bg-[#fd00ff]/10 px-2 py-0.5 rounded">
                                        {name}
                                    </span>
                                    {endTime && (
                                        <span className="flex items-center gap-1 text-ms font-display text-gray-400 tracking-wider">
                                            {slot.time} – {endTime}
                                        </span>
                                    )}
                                </div>
                                <h4 className="text-lg md:text-xl font-bold text-white font-sans leading-snug">
                                    {talk.title}
                                </h4>
                                {/* Always show speaker if collapsed, maybe hide if expanded? Let's show it always in header or body. */}
                                {!isExpanded && talk.speaker && (
                                    <p className="text-nm text-gray-400 mt-2 font-display">
                                        {">> "}
                                        <span className="text-[#24ff54]">
                                            {id === "s6" ? "Organizator:" : "Prelegent:"} {talk.speaker}
                                        </span>
                                    </p>
                                )}
                            </div>

                            <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-white/5">
                                <ChevronDown
                                    className={`w-5 h-5 text-[#24ff54] transition-transform duration-300 ${isExpanded ? "rotate-180" : ""
                                        }`}
                                />
                            </div>
                        </button>

                        {/* Expandable Content body */}
                        <AnimatePresence>
                            {isExpanded && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-4 pb-5 pt-0">
                                        <div className="w-full h-px bg-white/10 mb-4" />
                                        {talk.speaker && (
                                            <p className="text-sm font-display tracking-widest mb-3 uppercase">
                                                <span className="text-gray-400">{">> "}Prelegent:</span>{" "}
                                                <span className="text-[#24ff54]">{talk.speaker}</span>
                                            </p>
                                        )}

                                        {talk.description ? (
                                            <p className="text-gray-300 text-sm md:text-base leading-relaxed font-sans">
                                                {talk.description}
                                            </p>
                                        ) : (
                                            <p className="text-gray-500 italic text-sm font-sans">
                                                Brak opisu dla tej sesji...
                                            </p>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
};

// Simplified main Agenda Component replacing Desktop / Mobile splitting to unified Timeline
export const AgendaSection = () => {
    const day = agenda[0];

    const containerRef = useRef<HTMLDivElement>(null);
    const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [lineStyle, setLineStyle] = useState<{ top: number; height: number }>({
        top: 0,
        height: 0,
    });

    const measureLine = useCallback(() => {
        const container = containerRef.current;
        if (!container) return;

        const dots = dotRefs.current.filter(Boolean) as HTMLDivElement[];
        if (dots.length < 2) return;

        const first = dots[0];
        const last = dots[dots.length - 1];

        const containerRect = container.getBoundingClientRect();
        const firstRect = first.getBoundingClientRect();
        const lastRect = last.getBoundingClientRect();

        const firstCenter = firstRect.top + firstRect.height / 2 - containerRect.top;
        const lastCenter = lastRect.top + lastRect.height / 2 - containerRect.top;

        setLineStyle({ top: firstCenter, height: lastCenter - firstCenter });
    }, []);

    useEffect(() => {
        // Measure after initial render + after framer-motion animations settle
        measureLine();
        const t1 = setTimeout(measureLine, 600);
        const t2 = setTimeout(measureLine, 1200);

        window.addEventListener("resize", measureLine);
        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            window.removeEventListener("resize", measureLine);
        };
    }, [measureLine, day]);


    return (
        <section
            id="agenda"
            className="py-24 relative scroll-mt-20 border-t border-[#24ff54]/10 bg-[#000018]"
        >
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-[#ffffff]/5 pb-8">
                    <div className="text-left w-full">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 font-sans">
                            AGENDA<span className="text-[#fd00ff]">.</span>
                        </h2>
                        <p className="text-gray-400 font-display text-xl">
                            {">>>"} LOAD_AGENDA_MODULE()
                        </p>
                    </div>
                </div>

                <div className="relative" ref={containerRef}>
                    {/* Vertical green line — spans from first dot center to last dot center */}
                    {lineStyle.height > 0 && (
                        <div
                            className="absolute left-[7px] sm:left-[13px] md:left-[13px] w-[2px] bg-[#24ff54]/40
                              shadow-[0_0_15px_rgba(36,255,84,0.5)] rounded-full"
                            style={{ top: lineStyle.top, height: lineStyle.height, zIndex: 0 }}
                        />
                    )}

                    <div className="space-y-12 relative">
                        {day?.slots.map((slot, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                onAnimationComplete={() => measureLine()}
                                className="flex items-start gap-4 sm:gap-6 md:gap-10"
                            >
                                {/* Timeline node & time */}
                                <div className="flex flex-row items-center gap-2 sm:gap-4 shrink-0 w-auto sm:w-28 md:w-32">
                                    {/* Single dot, responsive size */}
                                    <div
                                        ref={(el) => {
                                            dotRefs.current[i] = el;
                                        }}
                                        className="w-4 h-4 sm:w-7 sm:h-7 rounded-full border-2 border-[#24ff54]
                                          bg-[#000018] shrink-0"
                                        style={{ zIndex: 20 }}
                                    />

                                    <span className="font-display text-[#24ff54] text-lg sm:text-2xl md:text-3xl tracking-widest leading-none drop-shadow-[0_0_8px_rgba(36,255,84,0.8)]">
                                        {slot.time}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="flex-1 w-full min-w-0 pr-2">
                                    {slot.isBreak ? (
                                        <BreakRow title={slot.breakTitle!} />
                                    ) : slot.isSpeech ? (
                                        <SpeechRow title={slot.speechTitle ?? ""} />
                                    ) : slot.allRooms ? (
                                        <div className="border border-[#6715ff]/40 bg-[#2d1257] rounded-xl p-5 shadow-[0_0_15px_rgba(103,21,255,0.15)]">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-ms font-display text-white bg-gradient-to-r from-[#fd00ff] to-[#6715ff] px-2 py-0.5 rounded tracking-widest uppercase">
                                                    1AC
                                                </span>
                                            </div>

                                            <h4 className="text-xl md:text-2xl font-bold text-white font-sans leading-snug mb-3">
                                                {slot.allRooms.title}
                                            </h4>

                                            <div className="w-full h-px bg-white/10 mb-4" />

                                            {slot.allRooms.speaker && (
                                                <p className="text-sm font-display tracking-widest mb-3 uppercase">
                                                    <span className="text-gray-400">
                                                        {">> "}Prelegent:
                                                    </span>{" "}
                                                    <span className="text-[#24ff54]">
                                                        {slot.allRooms.speaker}
                                                    </span>
                                                </p>
                                            )}
                                            {slot.allRooms.description && (
                                                <p className="text-gray-300 text-sm md:text-base leading-relaxed font-sans mt-2">
                                                    {slot.allRooms.description}
                                                </p>
                                            )}
                                        </div>
                                    ) : (
                                        <RoomsAccordion slot={slot} endTime={day?.slots[i + 1]?.time ?? "15:00"} />
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
