import type { AgendaItem } from "./types";

export const agenda: AgendaItem[] = [
    {
        time: "09:00",
        title: "SYSTEM BOOT & REGISTRATION",
        type: "break",
        icon: "Terminal",
    },
    {
        time: "10:00",
        title: "KEYNOTE: The Art of Simplicity",
        speaker: "Dr. Adam Nowak",
        type: "talk",
        icon: "Zap",
    },
    {
        time: "11:30",
        title: "GARBAGE COLLECTION (Coffee Break)",
        type: "break",
        icon: "Coffee",
    },
    {
        time: "12:00",
        title: "Kubernetes bez bólu głowy",
        speaker: "Sarah Jenkins",
        type: "talk",
        icon: "Monitor",
    },
    {
        time: "13:30",
        title: "DEFRAGMENTATION (Lunch)",
        type: "break",
        icon: "Database",
    },
    {
        time: "14:30",
        title: "Zero Trust w 15 minut",
        speaker: "Krzysztof Wójcik",
        type: "talk",
        icon: "Shield",
    },
    {
        time: "16:00",
        title: "SYSTEM SHUTDOWN & NETWORKING",
        type: "break",
        icon: "Globe",
    },
];
