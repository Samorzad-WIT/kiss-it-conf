export type SpeakerTag = "AI" | "Cloud" | "Security" | "Frontend" | "Backend" | "Hacker";

export interface HeroData {
  title: string;
  subtitle: string;
  dateLabel: string;
  location: string;
  systemStatus: string;
  conferenceDate: string; // ISO date string
}

export interface Speaker {
  name: string;
  role: string;
  topic: string;
  photoUrl: string;
  tags: SpeakerTag[];
}

export interface AgendaSlot {
  time: string;
  title: string;
  speaker?: string;
  track: "Main Stage" | "Architecture" | "Hands-on Labs" | "Career & Community";
  type: "Keynote" | "Talk" | "Panel" | "Workshop" | "Break";
  level?: "Beginner" | "Intermediate" | "Advanced";
}

export interface AgendaDay {
  id: string;
  label: string;
  date: string;
  slots: AgendaSlot[];
}

export interface VenueInfo {
  name: string;
  campus: string;
  address: string;
  city: string;
  description: string;
  howToGetThere: {
    publicTransport: string;
    car: string;
    extras: string;
  };
  mapEmbedUrl: string;
}

export interface SiteContent {
  hero: HeroData;
  speakers: Speaker[];
  agenda: AgendaDay[];
  venue: VenueInfo;
}

export const heroData: HeroData = {
  title: "KISS IT 2026",
  subtitle:
    "Konferencja o prostych rozwiązaniach dla złożonych systemów. Zero buzzwordów, maksimum konkretu.",
  dateLabel: "Marzec 2026 · Wrocław, Politechnika Wrocławska",
  location: "Centrum Kongresowe PWr",
  systemStatus: ">>> SYSTEM READY // KISS IT 2026 ONLINE",
  conferenceDate: "2026-03-14T09:00:00"
};

export const speakers: Speaker[] = [
  {
    name: "Dr. Natalia Kowalska",
    role: "Lead AI Engineer · Researcher",
    topic: "Minimalne modele, maksymalny impact – praktyczne AI w systemach produkcyjnych",
    photoUrl: "/images/speakers/natalia-kowalska.jpg",
    tags: ["AI", "Hacker"]
  },
  {
    name: "Marek Nowak",
    role: "Principal Cloud Architect · Fintech",
    topic: "KISS w chmurze: jak nie przeinżynierować architektury rozproszonej",
    photoUrl: "/images/speakers/marek-nowak.jpg",
    tags: ["Cloud", "Backend"]
  },
  {
    name: "Agnieszka Wiśniewska",
    role: "Senior Frontend Engineer · Design Systems",
    topic: "Interfejsy, które nie zawodzą – prostota w dużych frontendach",
    photoUrl: "/images/speakers/agnieszka-wisniewska.jpg",
    tags: ["Frontend", "Hacker"]
  },
  {
    name: "Piotr Zieliński",
    role: "Security Architect · Red Team",
    topic: "KISS Security: jak zabezpieczać systemy bez paraliżu zespołów produktowych",
    photoUrl: "/images/speakers/piotr-zielinski.jpg",
    tags: ["Security", "Backend"]
  }
];

export const agenda: AgendaDay[] = [
    {
      id: "day-1",
      label: "Dzień 1 – Systemy w praktyce",
      date: "Marzec 2026 · Dzień 1",
      slots: [
        {
          time: "08:30 – 09:30",
          title: "Rejestracja + poranna kawa",
          track: "Main Stage",
          type: "Break"
        },
        {
          time: "09:30 – 10:15",
          title: "KISS IT Opening Keynote",
          speaker: "Komitet Programowy KISS IT",
          track: "Main Stage",
          type: "Keynote"
        },
        {
          time: "10:30 – 11:15",
          title: "Minimalne modele, maksymalny impact – praktyczne AI",
          speaker: "Dr. Natalia Kowalska",
          track: "Architecture",
          type: "Talk",
          level: "Intermediate"
        },
        {
          time: "11:30 – 13:00",
          title: "Warsztat: KISS w architekturze chmurowej",
          speaker: "Marek Nowak",
          track: "Hands-on Labs",
          type: "Workshop",
          level: "Advanced"
        },
        {
          time: "13:00 – 14:00",
          title: "Lunch + networking",
          track: "Main Stage",
          type: "Break"
        },
        {
          time: "14:15 – 15:00",
          title: "Frontendy, które nie zawodzą przy release friday",
          speaker: "Agnieszka Wiśniewska",
          track: "Architecture",
          type: "Talk",
          level: "Intermediate"
        },
        {
          time: "15:15 – 16:00",
          title: "Panel: Security bez blokowania biznesu",
          speaker: "Panel dyskusyjny · prowadzi Piotr Zieliński",
          track: "Main Stage",
          type: "Panel"
        }
      ]
    },
    {
      id: "day-2",
      label: "Dzień 2 – Ludzie, kariera, community",
      date: "Marzec 2026 · Dzień 2",
      slots: [
        {
          time: "09:00 – 10:00",
          title: "Poranna kawa + expo partnerów",
          track: "Main Stage",
          type: "Break"
        },
        {
          time: "10:00 – 11:30",
          title: "Warsztat: Live-redesign legacy systemu w duchu KISS",
          speaker: "Zespół architektów partnerskich firm",
          track: "Hands-on Labs",
          type: "Workshop",
          level: "Intermediate"
        },
        {
          time: "11:45 – 12:30",
          title: "Ścieżki kariery dla inżynierów systemowych",
          speaker: "Career & Community Guests",
          track: "Career & Community",
          type: "Talk"
        },
        {
          time: "13:00 – 14:00",
          title: "Closing Keynote + podsumowanie",
          speaker: "Komitet Programowy KISS IT",
          track: "Main Stage",
          type: "Keynote"
        }
      ]
    }
  ];

export const venue: VenueInfo = {
  name: "KISS IT 2026",
  campus: "Centrum Kongresowe Politechniki Wrocławskiej",
  address: "ul. Janiszewskiego 8",
  city: "50-372 Wrocław",
  description:
    "Konferencja odbywa się na terenie kampusu Politechniki Wrocławskiej – w nowoczesnym centrum kongresowym z dużą przestrzenią expo inspirowaną klimatem Wrocław Expo i Warszawskich Dni Informatyki.",
  howToGetThere: {
    publicTransport:
      "Przystanki: Most Grunwaldzki, Plac Grunwaldzki. Linie tramwajowe i autobusowe łączą kampus z głównym dworcem PKP/PKS oraz centrum miasta.",
    car: "W okolicy dostępne są parkingi kampusowe i miejskie. Rekomendujemy przyjazd wcześniej ze względu na ograniczoną liczbę miejsc.",
    extras:
      "Z centrum miasta na kampus dojdziesz pieszo w ok. 15 minut. W pobliżu dostępne są stacje rowerów miejskich i hulajnóg."
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.195590887994!2d17.058!3d51.108!2m3!1f0!2f0!3f0"
};

export const siteContent: SiteContent = {
  hero: heroData,
  speakers,
  agenda,
  venue
};


