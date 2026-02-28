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
      "https://media.istockphoto.com/id/1949501832/pl/zdj%C4%99cie/przystojny-latynoski-starszy-biznesmen-ze-skrzy%C5%BCowanymi-ramionami-u%C5%9Bmiecha-si%C4%99-do-kamery.jpg?s=2048x2048&w=is&k=20&c=9CNA1y5DgBQWq8pmRV_AdIX6R9S1PeuNs-rbz0KL_rA=",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Senior DevOps",
    company: "CloudCore",
    topic: "Kubernetes bez bólu głowy: KISS approach",
    tags: ["DevOps", "K8s", "Cloud"],
    image:
      "https://media.istockphoto.com/id/1587604256/pl/zdj%C4%99cie/portret-prawniczka-i-czarnosk%C3%B3ra-kobieta-z-tabletem-u%C5%9Bmiechni%C4%99ta-i-szcz%C4%99%C5%9Bliwa-w-biurowym.jpg?s=2048x2048&w=is&k=20&c=qGl45wpr3qqRMpZ5Y7KNn1abbhbTugNJv4k56i81euE=",
  },
  {
    id: 3,
    name: "Krzysztof 'Hack' Wójcik",
    role: "Security Researcher",
    company: "RedTeam Ops",
    topic: "Zero Trust w 15 minut",
    tags: ["Security", "Network", "Audit"],
    image:
      "https://media.istockphoto.com/id/1364917563/pl/zdj%C4%99cie/biznesmen-u%C5%9Bmiechni%C4%99ty-ze-skrzy%C5%BCowanymi-r%C4%99kami-na-bia%C5%82ym-tle.jpg?s=2048x2048&w=is&k=20&c=i9o6HIRiEbuF5IV-W_To7dBVXKKSQDBF1EClEwdukIU=",
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    role: "Frontend Architect",
    company: "Vercel",
    topic: "Mikrofrontendy - kiedy NIE warto?",
    tags: ["React", "Architecture", "Web"],
    image:
      "https://media.istockphoto.com/id/2159472620/pl/zdj%C4%99cie/pi%C4%99kna-m%C5%82oda-kobieta-biznesu-stoj%C4%85ca-u%C5%9Bmiechaj%C4%85c-si%C4%99-patrz%C4%85c-na-kamer%C4%99-w-biurze.jpg?s=2048x2048&w=is&k=20&c=g376RjLjWCRN_c-XWHaHGr3_h0veTHbdADAY_WdZgcw=",
  },
];
