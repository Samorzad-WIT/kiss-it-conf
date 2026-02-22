export type SpeakerTag = "AI" | "Cloud" | "Security" | "Frontend" | "Backend" | "Hacker";

export interface HeroData {
    systemStatus: string;
    title: string;
    year: string;
    subtitle: string;
    date: string;
    location: string;
    cta: string;
    ctaLink: string;
    conferenceDate: string; // ISO date string
}

export interface Speaker {
    id: number;
    name: string;
    role: string;
    company: string;
    topic: string;
    tags: string[];
    image: string;
}

export interface AgendaItem {
    time: string;
    title: string;
    speaker?: string;
    type: "talk" | "break";
    /** Lucide icon name — resolved in the component */
    icon: string;
}

export interface VenueInfo {
    sectionTitle: string;
    description: string;
    address: {
        street: string;
        city: string;
        building: string;
    };
    transport: {
        stop: string;
    };
    mapEmbedUrl: string;
}

export type PartnerTier = "diament" | "other";

export interface Partner {
    name: string;
    logo: string;
    url?: string;
    tier: PartnerTier;
}

export interface Patron {
    name: string;
    url: string;
    image: string;
}

export interface KoloNaukowe {
    name: string;
    url: string;
    logo: string;
    label: string;
}

export interface WhyAttendCard {
    /** Key referencing the icon component in WhyAttendSection */
    iconKey: "knowledge" | "networking" | "practice" | "community" | "inspiration";
    title: string;
    description: string;
    accentColor: string;
    borderColor: string;
}

export interface NavLink {
    label: string;
    href: string;
}

export interface ContactPerson {
    name: string;
    role: string;
    email: string;
    photoUrl: string;
}

export interface FooterData {
    contacts: ContactPerson[];
    regulaminUrl: string;
    copyright: string;
}
