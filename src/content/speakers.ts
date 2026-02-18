import type { Speaker } from "./types";

export const speakers: Speaker[] = [
    {
        id: 1,
        name: "Dr. Adam Nowak",
        role: "AI Lead Architect",
        company: "Neural Systems",
        topic: "Skalowalność LLM w infrastrukturze on-premise",
        tags: ["AI", "Infrastructure", "Python"],
        image:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    },
    {
        id: 2,
        name: "Sarah Jenkins",
        role: "Senior DevOps",
        company: "CloudCore",
        topic: "Kubernetes bez bólu głowy: KISS approach",
        tags: ["DevOps", "K8s", "Cloud"],
        image:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    },
    {
        id: 3,
        name: "Krzysztof 'Hack' Wójcik",
        role: "Security Researcher",
        company: "RedTeam Ops",
        topic: "Zero Trust w 15 minut",
        tags: ["Security", "Network", "Audit"],
        image:
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    },
    {
        id: 4,
        name: "Elena Rodriguez",
        role: "Frontend Architect",
        company: "Vercel",
        topic: "Mikrofrontendy - kiedy NIE warto?",
        tags: ["React", "Architecture", "Web"],
        image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    },
];
