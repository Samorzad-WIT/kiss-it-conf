import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {Coffee, MessageSquare, Mic, Users, Wrench} from "lucide-react";
import {Badge} from "../components/ui/Badge";
import {agenda, type AgendaDay, type RoomTalk} from "../content";

const ROOMS = ["S1", "S2", "S3"] as const;
type RoomKey = `s${1 | 2 | 3}`;

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

const TalkCard = ({talk, room}: { talk: RoomTalk; room?: string }) => (
    <div
        className="group relative p-4 rounded-lg border border-[#6715ff]/30 bg-[#6715ff]/10 hover:border-[#24ff54] transition-all duration-300 h-full flex flex-col">
        <div className="flex items-center justify-between gap-2 mb-2">
            {room && (
                <span className="text-xs font-display text-[#fd00ff] tracking-widest">
          {room}
        </span>
            )}
            <span className="flex items-center gap-1 text-xs font-display text-gray-500 tracking-wider">
        {typeIcon(talk.type)}
                {talk.type}
      </span>
        </div>

        <h4 className="text-sm font-bold text-white font-sans leading-snug">
            {talk.title}
        </h4>

        {talk.speaker && (
            <p className="text-xs text-gray-400 mt-auto pt-2 font-display">
                {">> "}
                <span className="text-[#24ff54]">{talk.speaker}</span>
            </p>
        )}

        {talk.level && (
            <span
                className={`text-[10px] font-display tracking-wider mt-1 ${levelColor(talk.level)}`}
            >
        [{talk.level}]
      </span>
        )}
    </div>
);

const BreakRow = ({title}: { title: string }) => (
    <div
        className="p-3 border border-dashed border-gray-700 bg-white/5 rounded-lg flex items-center justify-center gap-2 text-gray-400 font-display tracking-wider text-sm">
        <Coffee className="w-4 h-4"/>
        {title}
    </div>
);

const DesktopAgenda = ({day}: { day: AgendaDay }) => (
    <div className="hidden md:block">
        <div className="grid grid-cols-[90px_1fr_1fr_1fr] gap-3 mb-4">
            <div/>
            {ROOMS.map((r) => (
                <div
                    key={r}
                    className="text-center font-display text-[#24ff54] text-xl tracking-[.25em] border-b border-[#24ff54]/20 pb-2"
                >
                    {r}
                </div>
            ))}
        </div>

        <div className="space-y-3">
            {day.slots.map((slot, i) => (
                <motion.div
                    key={i}
                    initial={{opacity: 0, y: 12}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{delay: i * 0.06}}
                    className="grid grid-cols-[90px_1fr_1fr_1fr] gap-3 items-stretch"
                >
                    <div className="font-display text-[#24ff54] text-lg tracking-widest flex items-center">
                        {slot.time}
                    </div>

                    {slot.isBreak ? (
                        <div className="col-span-3">
                            <BreakRow title={slot.breakTitle!}/>
                        </div>
                    ) : slot.allRooms ? (
                        <div className="col-span-3">
                            <TalkCard talk={slot.allRooms}/>
                        </div>
                    ) : (
                        <>
                            {(["s1", "s2", "s3"] as RoomKey[]).map((key) => {
                                const talk = slot[key];
                                return (
                                    <div key={key}>
                                        {talk ? (
                                            <TalkCard talk={talk}/>
                                        ) : (
                                            <div className="min-h-[60px]"/>
                                        )}
                                    </div>
                                );
                            })}
                        </>
                    )}
                </motion.div>
            ))}
        </div>
    </div>
);

const MobileAgenda = ({day}: { day: AgendaDay }) => (
    <div className="md:hidden space-y-6">
        {day.slots.map((slot, i) => (
            <motion.div
                key={i}
                initial={{opacity: 0, y: 12}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: i * 0.06}}
            >
                <div className="font-display text-[#24ff54] text-xl tracking-widest mb-2">
                    {slot.time}
                </div>

                {slot.isBreak ? (
                    <BreakRow title={slot.breakTitle!}/>
                ) : slot.allRooms ? (
                    <TalkCard talk={slot.allRooms}/>
                ) : (
                    <div className="space-y-2">
                        {(["s1", "s2", "s3"] as RoomKey[]).map((key, idx) => {
                            const talk = slot[key];
                            return talk ? (
                                <TalkCard key={key} talk={talk} room={ROOMS[idx]}/>
                            ) : null;
                        })}
                    </div>
                )}
            </motion.div>
        ))}
    </div>
);

export const AgendaSection = () => {
    const [activeDay, setActiveDay] = useState(0);

    return (
        <section
            id="agenda"
            className="py-24 bg-[#050520] relative scroll-mt-20 border-t border-[#24ff54]/10"
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-12 flex flex-col items-center gap-4">
                    <Badge color="purple">TIMELINE SEQUENCE</Badge>
                    <h2 className="text-4xl md:text-5xl font-bold text-white font-sans">
                        AGENDA<span className="text-[#24ff54]">.</span>
                    </h2>
                </div>

                <div className="flex gap-3 mb-10 justify-center flex-wrap">
                    {agenda.map((day, i) => (
                        <button
                            key={day.id}
                            onClick={() => setActiveDay(i)}
                            className={`px-5 py-2 font-display text-sm tracking-widest border rounded-sm transition-all duration-200 ${
                                activeDay === i
                                    ? "border-[#24ff54] text-[#24ff54] bg-[#24ff54]/10"
                                    : "border-gray-700 text-gray-500 hover:border-gray-500 hover:text-gray-300"
                            }`}
                        >
                            {day.label}
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={agenda[activeDay].id}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.2}}
                    >
                        <DesktopAgenda day={agenda[activeDay]}/>
                        <MobileAgenda day={agenda[activeDay]}/>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};
