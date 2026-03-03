import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {ChevronDown, Coffee, MessageSquare, Mic, Users, Wrench,} from "lucide-react";
import {agenda, type AgendaTimeSlot, type RoomTalk} from "../content";

const ROOM_KEYS = ["s1", "s2", "s3", "s4", "s5"] as const;
const ROOM_NAMES: Record<string, string> = {
    s1: "Sala 1",
    s2: "Sala 2",
    s3: "Sala 3",
    s4: "Sala 4",
    s5: "Sala 5",
};

const typeIcon = (type: RoomTalk["type"]) => {
    switch (type) {
        case "Keynote":
            return <Mic className="w-4 h-4"/>;
        case "Workshop":
            return <Wrench className="w-4 h-4"/>;
        case "Panel":
            return <MessageSquare className="w-4 h-4"/>;
        default:
            return <Users className="w-4 h-4"/>;
    }
};

const levelColor = (level?: RoomTalk["level"]) => {
    switch (level) {
        case "Beginner":
            return "text-[#24ff54]";
        case "Intermediate":
            return "text-yellow-400";
        case "Advanced":
            return "text-[#fd00ff]";
        default:
            return "text-gray-500";
    }
};

const BreakRow = ({title}: { title: string }) => (
    <div
        className="flex items-center gap-3 p-4 border border-dashed border-gray-700 bg-white/5 rounded-xl text-gray-400 font-display tracking-wider text-base">
        <Coffee className="w-5 h-5 text-[#24ff54]/70"/>
        <span className="uppercase tracking-widest">{title}</span>
    </div>
);

// Renders the expandable list of rooms for a single time slot
const RoomsAccordion = ({slot}: { slot: AgendaTimeSlot }) => {
    // Extract all existing talks for this slot
    const talks = ROOM_KEYS.reduce<
        { id: string; name: string; talk: RoomTalk }[]
    >((acc, key) => {
        if (slot[key]) {
            acc.push({id: key, name: ROOM_NAMES[key], talk: slot[key]!});
        }
        return acc;
    }, []);

    // Default expansion to the very first room available in the slot
    const [expandedId, setExpandedId] = useState<string | null>(
        talks.length > 0 ? talks[0].id : null,
    );

    if (talks.length === 0) return null;

    return (
        <div className="space-y-3">
            {talks.map(({id, name, talk}) => {
                const isExpanded = expandedId === id;

                return (
                    <div
                        key={id}
                        className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                            isExpanded
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
                      className="text-xs font-display text-[#fd00ff] tracking-widest bg-[#fd00ff]/10 px-2 py-0.5 rounded">
                    {name}
                  </span>
                                    <span
                                        className="flex items-center gap-1 text-xs font-display text-gray-400 tracking-wider">
                    {typeIcon(talk.type)}
                                        {talk.type}
                  </span>
                                    {talk.level && (
                                        <span
                                            className={`text-[10px] font-display tracking-wider ${levelColor(talk.level)}`}
                                        >
                      [{talk.level}]
                    </span>
                                    )}
                                </div>
                                <h4 className="text-lg md:text-xl font-bold text-white font-sans leading-snug">
                                    {talk.title}
                                </h4>
                                {/* Always show speaker if collapsed, maybe hide if expanded? Let's show it always in header or body. */}
                                {!isExpanded && talk.speaker && (
                                    <p className="text-sm text-gray-400 mt-2 font-display">
                                        {">> "}
                                        <span className="text-[#24ff54]">
                      Prelegent: {talk.speaker}
                    </span>
                                    </p>
                                )}
                            </div>

                            <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-white/5">
                                <ChevronDown
                                    className={`w-5 h-5 text-[#24ff54] transition-transform duration-300 ${
                                        isExpanded ? "rotate-180" : ""
                                    }`}
                                />
                            </div>
                        </button>

                        {/* Expandable Content body */}
                        <AnimatePresence>
                            {isExpanded && (
                                <motion.div
                                    initial={{height: 0, opacity: 0}}
                                    animate={{height: "auto", opacity: 1}}
                                    exit={{height: 0, opacity: 0}}
                                    className="overflow-hidden"
                                >
                                    <div className="px-4 pb-5 pt-0">
                                        <div className="w-full h-px bg-white/10 mb-4"/>
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
    // We only have Day 1 now, according to requirements.
    // If agenda array has more days, we just take the first.
    const day = agenda[0];

    return (
        <section
            id="agenda"
            className="py-24 relative scroll-mt-20 border-t border-[#24ff54]/10 bg-[#000018]"
        >
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <div className="mb-16">
                    <h2 className="text-5xl md:text-7xl font-bold font-display tracking-wider text-[#24ff54]">
                        Agenda
                    </h2>
                </div>

                <div className="relative">
                    {/* Vertical axis line */}
                    <div
                        className="absolute left-[13px] sm:left-[23px] md:left-[35px] top-4 bottom-0 w-[2px] bg-[#24ff54]/40
                          shadow-[0_0_15px_rgba(36,255,84,0.5)] z-0 rounded-full"
                    />

                    <div className="space-y-12 pb-12 relative z-10">
                        {day?.slots.map((slot, i) => (
                            <motion.div
                                key={i}
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true, margin: "-10%"}}
                                transition={{duration: 0.4, delay: i * 0.05}}
                                className="flex items-start gap-4 sm:gap-6 md:gap-10"
                            >
                                {/* Timeline node & time */}
                                <div
                                    className="flex flex-col sm:flex-row items-center sm:items-start sm:gap-4 shrink-0 pt-2 w-16 sm:w-28 md:w-32">
                                    <div
                                        className="w-[28px] h-[28px] rounded-full border-[2px] border-[#24ff54] bg-[#000018]
                                  shadow-[0_0_12px_#24ff54] shrink-0 z-10 hidden sm:block"
                                    />
                                    <div
                                        className="w-[16px] h-[16px] rounded-full border-[2px] border-[#24ff54] bg-[#000018]
                                  shadow-[0_0_8px_#24ff54] shrink-0 z-10 sm:hidden mt-2"
                                    />

                                    <span
                                        className="font-display text-[#24ff54] text-xl sm:text-2xl md:text-3xl mt-1 tracking-widest leading-none drop-shadow-[0_0_8px_rgba(36,255,84,0.8)]">
                    {slot.time}
                  </span>
                                </div>

                                {/* Content */}
                                <div className="flex-1 w-full min-w-0 pr-2">
                                    {slot.isBreak ? (
                                        <BreakRow title={slot.breakTitle!}/>
                                    ) : slot.allRooms ? (
                                        <div
                                            className="border border-[#6715ff]/40 bg-[#2d1257] rounded-xl p-5 shadow-[0_0_15px_rgba(103,21,255,0.15)]">
                                            <div className="flex items-center gap-2 mb-2">
                        <span
                            className="text-xs font-display text-white bg-gradient-to-r from-[#fd00ff] to-[#6715ff] px-2 py-0.5 rounded tracking-widest uppercase">
                          All Rooms
                        </span>
                                                <span
                                                    className="flex items-center gap-1 text-xs font-display text-[#24ff54] tracking-wider">
                          {typeIcon(slot.allRooms.type)}
                                                    {slot.allRooms.type}
                        </span>
                                            </div>

                                            <h4 className="text-xl md:text-2xl font-bold text-white font-sans leading-snug mb-3">
                                                {slot.allRooms.title}
                                            </h4>

                                            <div className="w-full h-px bg-white/10 mb-4"/>

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
                                        <RoomsAccordion slot={slot}/>
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
