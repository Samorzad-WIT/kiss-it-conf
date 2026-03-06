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
                    description:
                        "Oficjalne otwarcie konferencji KISS IT 2026. Przedstawimy naszą wizję, omówimy, co wydarzy się podczas tego intensywnego dnia oraz jacy prelegenci uświetnią to wydarzenie. Idealny start dla każdego uczestnika!",
                },
            },
            {
                time: "11:00",
                s1: {
                    title: "Minimalne modele, maksymalny impact – praktyczne AI",
                    speaker: "Dr. Natalia Kowalska",
                    type: "Talk",
                    level: "Intermediate",
                    description:
                        "Wielkie modele językowe (LLM) zdominowały nagłówki, ale to mniejsze, zoptymalizowane modele często dostarczają największą wartość dla biznesu. Opowiem, jak trenować i wdrażać modele SLM (Small Language Models).",
                },
                s2: {
                    title: "KISS w chmurze: architektura rozproszona",
                    speaker: "Marek Nowak",
                    type: "Talk",
                    level: "Advanced",
                    description:
                        'Rozproszone systemy chmurowe często stają się niepotrzebnie skomplikowane. Przeprowadzę analizę post-mortem kilku "potworków" architektonicznych i pokażę, jak zredukować złożoność zachowując skalowalność.',
                },
                s3: {
                    title: "Warsztaty o yappowaniu (komunikacja dla IT)",
                    speaker: "Dr. Adam Nowak",
                    type: "Workshop",
                    level: "Beginner",
                    description:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                },
                s4: {
                    title: "Zabezpieczanie aplikacji w 2026 - trendy ze świata",
                    speaker: "Marta Wiśniewska",
                    type: "Talk",
                    level: "Intermediate",
                    description:
                        "Przegląd wektorów ataków, które stały się najgroźniejsze w najnowszym roku. Jak zabezpieczyć nowoczesne single-page aplikacje przed XSS i nowoczesnymi formami przejęcia konta.",
                },
                s5: {
                    title: "UX dla back-endowców: dlaczego to ma znaczenie",
                    speaker: "Tomasz Kot",
                    type: "Talk",
                    level: "Beginner",
                    description:
                        "Jeśli piszesz API, którego nikt nie potrafi użyć, to masz problem z UX. Opowiem, jak projektować interfejsy dla innych programistów zgodnie z zasadami KISS.",
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
                    description:
                        "Budowanie stabilnych aplikacji opartych na React 19 z Server Components. Jak unikać powszechnych błędów, by Twój piątkowy wdrożeniowy release nie zamienił się w koszmar weekendowy.",
                },
                s2: {
                    title: "Zero Trust w praktyce",
                    speaker: "Piotr Zieliński",
                    type: "Talk",
                    level: "Advanced",
                    description:
                        "Wdrożenie architektury Zero Trust w istniejącej firmie nie jest łatwe. Pokażę krok po kroku proces migracji na ZTNA, eliminując tradycyjne VPNowe podatności.",
                },
                s3: {
                    title: "Ścieżki kariery w IT – od juniora do architekta",
                    speaker: "Anna Kamińska",
                    type: "Talk",
                    description:
                        "Wstęp do planowania własnej ścieżki w technologicznym świecie. Zobaczymy kluczowe momenty i jak podnosić swoje kompetencje w środowisku ciągłych zmian.",
                },
                s4: {
                    title: "Warsztaty: CI/CD w pigułce",
                    speaker: "Piotr Kasprzyk",
                    type: "Workshop",
                    level: "Beginner",
                    description:
                        "Praktyczne warsztaty z automatyzacji wdrożeń od pierwszego commita aż po produkcję przy pomocy GitHub Actions.",
                },
                s5: {
                    title: "Bazy Grafowe dla totalnie początkujących",
                    speaker: "Magdalena Lis",
                    type: "Talk",
                    level: "Beginner",
                    description:
                        "Nie każdy problem można opisać w SQL-u. Bazy grafowe naturalnie modelują zależności – pokażę to na realnych przykładach sieci społecznościowych.",
                },
            },
            {
                time: "13:30",
                isBreak: true,
                breakTitle: "Lunch + networking",
            },
            {
                time: "14:30",
                allRooms: {
                    title: "Panel: Security bez blokowania biznesu",
                    speaker: "Panel dyskusyjny · prowadzi Piotr Zieliński",
                    type: "Panel",
                    description:
                        'Bezpieczeństwo bardzo często stoi w sprzeczności z szybkością dostarczania produktu na rynek. Nasi paneliści poszukają idealnych stref "złotego środka" dla różnych modeli biznesowych.',
                },
            },
        ],
    },
];
