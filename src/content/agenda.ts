import type {AgendaDay} from "./types";

export const agenda: AgendaDay[] = [
    {
        id: "day-1",
        label: "Dzień 1",
        slots: [
            {
                time: "09:00",
                isBreak: true,
                breakTitle: "Rejestracja + poranna kawa",
            },
            {
                time: "10:00",
                allRooms: {
                    title: "KISS IT Opening Keynote",
                    speaker: "Komitet Programowy KISS IT",
                    type: "Keynote",
                },
            },
            {
                time: "11:00",
                s1: {
                    title: "Minimalne modele, maksymalny impact – praktyczne AI",
                    speaker: "Dr. Natalia Kowalska",
                    type: "Talk",
                    level: "Intermediate",
                },
                s2: {
                    title: "KISS w chmurze: architektura rozproszona",
                    speaker: "Marek Nowak",
                    type: "Talk",
                    level: "Advanced",
                },
                s3: {
                    title: "Warsztat: Git workflows dla zespołów",
                    speaker: "Michał Lewandowski",
                    type: "Workshop",
                    level: "Beginner",
                },
            },
            {
                time: "12:00",
                isBreak: true,
                breakTitle: "Przerwa kawowa",
            },
            {
                time: "12:30",
                s1: {
                    title: "Frontendy, które nie zawodzą przy release friday",
                    speaker: "Agnieszka Wiśniewska",
                    type: "Talk",
                    level: "Intermediate",
                },
                s2: {
                    title: "Zero Trust w praktyce",
                    speaker: "Piotr Zieliński",
                    type: "Talk",
                    level: "Advanced",
                },
                s3: {
                    title: "Ścieżki kariery w IT – od juniora do architekta",
                    speaker: "Anna Kamińska",
                    type: "Talk",
                },
            },
            {
                time: "13:30",
                isBreak: true,
                breakTitle: "Lunch + networking",
            },
            {
                time: "14:30",
                s1: {
                    title: "Warsztat: KISS w architekturze chmurowej",
                    speaker: "Marek Nowak",
                    type: "Workshop",
                    level: "Advanced",
                },
                s2: {
                    title: "Observability bez vendor lock-in",
                    speaker: "Tomasz Dąbrowski",
                    type: "Talk",
                    level: "Intermediate",
                },
                s3: {
                    title: "Lightning Talks: Community Edition",
                    speaker: "Społeczność KISS IT",
                    type: "Talk",
                },
            },
            {
                time: "15:30",
                allRooms: {
                    title: "Panel: Security bez blokowania biznesu",
                    speaker: "Panel dyskusyjny · prowadzi Piotr Zieliński",
                    type: "Panel",
                },
            },
        ],
    },
    {
        id: "day-2",
        label: "Dzień 2",
        slots: [
            {
                time: "09:00",
                isBreak: true,
                breakTitle: "Poranna kawa + expo partnerów",
            },
            {
                time: "10:00",
                s1: {
                    title: "Live-redesign legacy systemu w duchu KISS",
                    speaker: "Zespół architektów partnerskich firm",
                    type: "Workshop",
                    level: "Intermediate",
                },
                s2: {
                    title: "DevEx: narzędzia, które naprawdę pomagają",
                    speaker: "Karolina Maj",
                    type: "Talk",
                    level: "Beginner",
                },
                s3: {
                    title: "Open Source: jak zacząć kontrybuować",
                    speaker: "Jakub Kowal",
                    type: "Workshop",
                    level: "Beginner",
                },
            },
            {
                time: "11:30",
                isBreak: true,
                breakTitle: "Przerwa kawowa",
            },
            {
                time: "12:00",
                s1: {
                    title: "Ścieżki kariery dla inżynierów systemowych",
                    speaker: "Career & Community Guests",
                    type: "Talk",
                },
                s2: {
                    title: "KISS w testowaniu: mniej mocków, więcej pewności",
                    speaker: "Ewa Nowicka",
                    type: "Talk",
                    level: "Intermediate",
                },
            },
            {
                time: "13:00",
                allRooms: {
                    title: "Closing Keynote + podsumowanie",
                    speaker: "Komitet Programowy KISS IT",
                    type: "Keynote",
                },
            },
        ],
    },
];
