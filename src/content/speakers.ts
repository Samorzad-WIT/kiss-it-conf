import type { Speaker } from "./types";

export const speakers: Speaker[] = [
  {
    name: "Bartłomiej Gawryszczuk",
    role: "Inżynier & Prezes",
    company: "TK Games",
    topic: "Game Engineering – Inżynieria Oprogramowania w Grach",
    description:
      "Inżynier i prezes TK Games, od lat zajmujący się projektowaniem gier oraz dydaktyką Game Designu. Jako badacz skupia się na wykorzystaniu uczenia maszynowego w systemach kategoryzacji graczy, łącząc gamedev z zaawansowaną analizą danych.",
    tags: ["Game Dev", "Machine Learning", "Software Engineering"],
    image: "/prelegenci/bartlomiej_gawryszuk.jpg",
  },
  {
    name: "Jakub Dobrzański",
    role: "Machine Learning Engineer",
    company: "KN Algo",
    topic: "Zaawansowane modele AI w praktyce",
    description:
      "Główny Machine Learning Engineer w KN Algo oraz certyfikowany trener Eskadry Bielika. Student II stopnia Informatyki Technicznej, który specjalizuje się w praktycznym wdrażaniu zaawansowanych modeli sztucznej inteligencji.",
    tags: ["AI", "Machine Learning", "KN Algo"],
    image: "/prelegenci/jakub_dobrzanski.jpg",
  },
  {
    name: "Mateusz Andrzejewski",
    role: "Inżynier Oprogramowania",
    company: "KN Algo",
    topic: "Nowoczesne technologie – AI i druk 3D w praktyce inżynierskiej",
    description:
      "Student II stopnia Informatyki Technicznej, zainteresowany nowoczesnymi technologiami, sztuczną inteligencją oraz zastosowaniami druku 3D. Koncentruje się na projektowaniu funkcjonalnych rozwiązań, łącząc software z praktycznym podejściem inżynierskim.",
    tags: ["AI", "3D Printing", "Engineering"],
    image: "/prelegenci/mateusz_andrzejewski.jpeg",
  },
  {
    name: "Igor Olewicz",
    role: "Data Engineer",
    company: "KN Algo",
    topic: "Stabilne fundamenty systemów informacyjnych",
    description:
      "Specjalista z KN Algo, stawiający na nowoczesną inżynierię danych i budowanie stabilnych struktur informacyjnych. Koncentruje się na tworzeniu wydajnych fundamentów pod systemy przepływu pracy.",
    tags: ["Data Engineering", "Architecture", "KN Algo"],
    image: "/prelegenci/igor_olewicz.jpg",
  },
];
