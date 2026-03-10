import type { AgendaDay } from "./types";

export const agenda: AgendaDay[] = [
    {
        id: "day-1",
        label: "Harmonogram Ostateczny - Prelekcje",
        slots: [
            {
                time: "09:00",
                isSpeech: true,
                speechTitle: "Rejestracja",
            },
            {
                time: "09:30",
                allRooms: {
                    title: "KISS IT PWr Otwarcie",
                    speaker: "Igor Buszta",
                    type: "Keynote",
                    description: "Oficjalne otwarcie konferencji KISS IT 2026. Przedstawimy naszą wizję, omówimy, co wydarzy się podczas tego intensywnego dnia oraz jacy prelegenci uświetnią to wydarzenie. Idealny start dla każdego uczestnika!",
                },
            },
           
            {
                time: "10:00",
                s1: {
                    title: "Low-code/No-code- skrót do świata aplikacji",
                    speaker: "Jurand Kołodziej",
                    type: "Talk",
                    description: "Dzięki platformom low-code i no-code, nawet osoby bez dużego doświadczenia technicznego mogą tworzyć aplikacje wspierające realne procesy — bez lat nauki programowania. Prezentacja pokaże, że w tych technologiach najważniejsze są logiczne myślenie, umiejętność pracy z procesami i komunikacja, a nie znajomość języków programowania."
      },
                s2: {
                    title: "Tu liczy się wszystko: Wprowadzenie do komputerów dużej mocy",
                    speaker: "Anton Tustanowski",
                    type: "Talk",
                    description: "Na tej prelekcji dowiesz się trochę o WCSS oraz dlaczego superkomputery to coś więcej niż tylko 'szybkie procesory'. Zobaczysz również, że dla ciebie próg wejścia do świata technologii HPC jest niższy, niż myślisz."
                },
                s3: {
                    title: "Autonomia łazika: architektura i implementacja",
                    speaker: "Mariusz Rychlicki",
                    type: "Talk",
                    description: "Projekt Scorpio to projekt łazika marsjańskiego biorący udział w zawodach z serii Rover Challenge, gdzie konkuruje z drużynami z całego świata. Do tej pory odnieśliśmy wiele sukcesów, szczególnie podczas Anatolian Rover Challenge oraz Australian Rover Challenge."
                },
                s4: {
                    title: "XAI w wizji komputerowej i 3D: Jak zrozumieć decyzje Al?",
                    speaker: "Julia Farganus, Dominik Galus",
                    type: "Talk",
                    description: "KN Solvro"
                },
                s5: {
                    title: "Managing up - Zarządzanie swoim szefem",
                    speaker: "Marta Zakierska, Magdalena Skoczek, Jakub Porada",
                    type: "Talk",
                    description: "Managing up - Zarządzanie swoim szefem."
                },
                s6: {
                    title: "Wycieczka do serwerowni",
                    speaker: "WCSS",
                    type: "Workshop",
                    description: "Podczas warsztatów pokażemy, jak w praktyce wygląda praca z superkomputerem. Przejdziemy przez przykładowy workflow zaczynając od logowania na klaster. Uruchomimy między innymi duży model językowy na mocnych kartach graficznych."
                }
            },
            {
                time: "10:30",
                isBreak: true,
                breakTitle: "Przerwa",
            },
            {
                time: "10:45",
                s1: {
                    title: "Soft Skills for Hard Engineers: Komunikacja w globalnych projektach technologicznych",
                    speaker: "Zuzanna Banas, Radoslaw Tertel",
                    type: "Talk",
                    description: "Technologia łączy nas w ułamku sekundy, ale to różnice kulturowe często decydują o sukcesie projektów. Podczas prelekcji dowiecie się, dlaczego komunikacja w globalnych, rozproszonych zespołach IT wciąż sprawia trudności. Pokażemy, jak budować porozumienie, trafnie odczytywać intencje biznesu i skutecznie 'czytać atmosferę' w międzynarodowym środowisku technologicznym."
                },
                s2: {
                    title: "Prelekcja WPT",
                    speaker: "Marta Cinciala",
                    type: "Talk",
                    description: "WPT hub biznesowy"
                },
                s3: {
                    title: "Black-box optimization: gdy nie znamy wzoru, a musimy znaleźć najlepsze rozwiązanie",
                    speaker: "Jakub Czajkowski, Piotr Zatwarnicki, Konrad Waszczuk, Alik Stepaniuk",
                    type: "Talk",
                    description: "KN GANGSTAS"
                },
                s4: {
                    title: "Mendix - tworzenie aplikacji dla każdego",
                    speaker: "Jurand Kołodziej",
                    type: "Talk",
                    description: "Na warsztatach pokażemy, jak w szybki i prosty sposób stworzyć działającą aplikację w platformie Mendix. Uczestnicy poznają podstawy tworzenia modelu danych (domain model), budowania ekranów aplikacji oraz konfiguracji ról użytkowników i uprawnień. Omówimy też, jak wykorzystać gotowe moduły z Marketplace, które przyspieszają tworzenie funkcjonalności. Warsztaty pokażą, że do budowania aplikacji nie potrzeba lat doświadczenia programistycznego — najważniejsze są logiczne myślenie, zrozumienie procesu i umiejętne korzystanie z narzędzi low-code."
                },
                s5: {
                    title: "Od pomysłu do rozwiązania, czyli design thinking w praktyce",
                    speaker: "Dawid Linek",
                    type: "Talk",
                    description: "Większość aplikacji upada, bo rozwiązują problemy, których nikt nie ma. Podczas warsztatów sprawdzisz w praktyce, jak narzędzia Design Thinking pomagają wyjść z bańki własnych założeń i zbudować produkt, który zachwyci użytkowników. Wyjdziesz z konkretnym zestawem umiejętności, gotowym do wdrożenia w Twoim następnym projekcie."
                },
                s6: {
                    title: "Wycieczka do serwerowni",
                    speaker: "WCSS",
                    type: "Workshop",
                    description: "Podczas warsztatów pokażemy, jak w praktyce wygląda praca z superkomputerem. Przejdziemy przez przykładowy workflow zaczynając od logowania na klaster. Uruchomimy między innymi duży model językowy na mocnych kartach graficznych."
                }
            },
            {
                time: "11:15",
                isBreak: true,
                breakTitle: "Przerwa",
            },
            {
                time: "11:30",
                s1: {
                    title: "Efektywne Kotlin Multiplatform: Budowanie aplikacji na wiele platform w 30 minut",
                    speaker: "Maciej Procyk",
                    type: "Talk",
                    description: "Podczas tej prezentacji przyjrzymy się bliżej technologii Kotlin Multiplatform (KMP) oraz narzędziom, które rewolucjonizują sposób, w jaki współdzielimy kod. W skondensowanym, 30-minutowym formacie omówimy kluczowe zalety KMP oraz przydatne frameworki z jego ekosystemu. Krok po kroku zobaczymy, jak rozpocząć tworzenie własnej aplikacji i efektywnie wdrożyć ją na wielu platformach jednocześnie, oszczędzając czas i zasoby."
                },
                s2: {
                    title: "Trend którego nie da się zatrzymać Biometrics an unstoppable trend",
                    speaker: "Daniel Jarząb",
                    type: "Talk",
                    description: "Hasła, PIN-y i fizyczne urządzenia powoli odchodzą do lamusa, a ich miejsce zajmuje biometria, oferując bezprecedensowy poziom bezpieczeństwa i wygody. Podczas prelekcji Daniel Jarząb, CEO PayEye, opowie o tym, dlaczego uwierzytelnianie oparte na unikalnych cechach człowieka – ze szczególnym uwzględnieniem biometrii tęczówki oka i twarzy – to nie pieśń przyszłości, ale rewolucja, która dzieje się na naszych oczach. Dowiemy się, w jakim kierunku zmierza rynek, jak innowacje biometryczne zmieniają nasze codzienne życie oraz dlaczego adopcji tej technologii nie da się już zatrzymać."
                },
                s3: {
                    title: "Jak zbudować swoją markę osobistą w globalnym korporacyjnym świecie technologii?",
                    speaker: "Agata Światowa",
                    type: "Talk",
                    description: "Na rynku, gdzie tysiące świetnych inżynierów walczy o te same stanowiska, same twarde kompetencje nie wystarczą. W Google, Microsoft, czy Amazon nie awansuje ten, kto najlepiej pisze kod – awansuje ten, kto jest widoczny, rozpoznawalny i zapraszany do stołu, przy którym zapadają decyzje. Podczas tej 30-minutowej prelekcji dowiesz się: Dlaczego 'siedzenie cicho i robienie swoje' to najgorsza strategia kariery w międzynarodowej korporacji. Jak sprawić, żeby menedżerowie z USA, Niemiec czy Singapuru zapamiętali Twoje nazwisko – nawet jeśli pracujesz zdalnie z Wrocławia. Gdzie i jak pokazywać swoją ekspertyzę, żeby to Ty byłeś pierwszą osobą, którą pomyślą obsadzić przy prestiżowym projekcie. Konkretne narzędzia i platformy, które działają w globalnym techu – bez wstydu, bez nachalności, za to z efektem. To nie jest kolejna pogadanka o 'byciu sobą' i 'pasji'. To konkretna, 30-minutowa dawka strategii dla ludzi, którzy chcą, żeby ich kod, ich pomysły i ich kariera zostały zauważone na globalnym poziomie. Przyjdź, jeśli myślisz o karierze w międzynarodowym techu i nie chcesz być kolejnym anonimowym programistą w korporacyjnym tłumie."
                },
                s5: {
                    title: "Neuromodulacja: kiedy technologia wchodzi do układu nerwowego",
                    speaker: "Pola Nowak",
                    type: "Talk",
                    description: "KN Neuron"
                },
                s6: {
                    title: "Wycieczka do serwerowni organizowana przez WCSS",
                    speaker: "WCSS",
                    type: "Workshop",
                    description: "Zbiórka przy recepcji"
                }
            },
            {
                time: "12:00",
                isBreak: true,
                breakTitle: "Przerwa obiadowa - Pizza!",
            },
            {
                time: "13:00",
                s1: {
                    title: "Wpływ Al na rynek IT i rozwój oprogramowania",
                    speaker: "Prowadzi: Igor Buszta",
                    type: "Talk"
                },
                s2: {
                    title: "mObywatel Europa - jak regulacje prawne definiują projekty i biznes",
                    type: "Talk",
                    description: "Dla współczesnego menedżera dogłębna analiza podstaw prawnych to nie tylko formalność, ale kluczowy, pierwszy etap projektowania innowacyjnego produktu. W dynamicznym świecie cyfrowej tożsamości regulacje przestają być ograniczeniem, a stają się fundamentem, na którym buduje się realną przewagę konkurencyjną. Prelekcja, oparta na projekcie mObywatel Europa, stanowi praktyczne studium przypadku (case study) powstawania największego systemu tożsamości cyfrowej w Europie i Polsce z perspektywy zarządczej. Celem wystąpienia jest pokazanie studentom, że w sektorach BigTech i FinTech prawo bezpośrednio definiuje ramy strategii biznesowej i projektu."
                },
                s3: {
                    title: "Od notatek z wykładu do pierwszej pracy - praktyczne zastosowania Microsoft Copilot w życiu studenta",
                    speaker: "Jacek Czeszewski, Konrad Olszewski",
                    type: "Talk",
                    description: "Generatywna sztuczna inteligencja może dziś wspierać studentów nie tylko w nauce, ale również w przygotowaniu do wejścia na rynek pracy. Podczas tej sesji pokażemy, jak Microsoft Copilot może pełnić rolę osobistego asystenta studenta – pomagając w: analizie materiałów dydaktycznych i notatek z zajęć, przygotowaniu prezentacji i raportów projektowych, streszczaniu artykułów naukowych i dokumentacji, tworzeniu profesjonalnego CV i listu motywacyjnego, przygotowaniu do rozmów rekrutacyjnych, wyszukiwaniu ofert pracy i dopasowaniu kompetencji do wymagań pracodawców. \n Na praktycznych przykładach zobaczysz, jak wykorzystać AI do pracy indywidualnej i zespołowej oraz jak świadomie budować swoją przewagę konkurencyjną jeszcze w trakcie studiów."
                },
                s6: {
                    title: "Wycieczka do serwerowni",
                    speaker: "WCSS",
                    type: "Workshop",
                    description: "Podczas warsztatów pokażemy, jak w praktyce wygląda praca z superkomputerem. Przejdziemy przez przykładowy workflow zaczynając od logowania na klaster. Uruchomimy między innymi duży model językowy na mocnych kartach graficznych."
                }
            },
            {
                time: "13:30",
                isBreak: true,
                breakTitle: "Rozdawanie RedBulli",
            },
            {
                time: "13:45",
                s2: {
                    title: "Houston, mamy problem... czyli gdy komunikacja zawodzi w kosmosie",
                    speaker: "Ewa Kasprzak, Maciej Binczarowski",
                    type: "Talk",
                    description: "PWr in Space"
                },
                s3: {
                    title: "Infrastruktura CTF od kuchni",
                    speaker: "Adam Cal, Marek Tutka",
                    type: "Talk",
                    description: "KN White Hats"
                }
            },
            {
                time: "14:15",
                isBreak: true,
                breakTitle: "Przerwa",
            },
            {
                time: "14:30",
                s1: {
                    title: "Agentic Al: dlaczego nie będę tęsknić za pisaniem CRUDow",
                    speaker: "Maciej Małecki",
                    type: "Talk",
                    description: "Dawno temu, wybierając swoją ścieżkę zawodową, kierował się autentyczną fascynacją komputerami i programowaniem. Nie wiedział wtedy, jak wygląda profesjonalne pisanie kodu, ale pasja pozostała z nim przez lata. Dziś tworzy oprogramowanie, nie pisząc ani jednej linijki kodu – dzięki wykorzystaniu kodujących agentów AI. Zaskakująco spokojnie przyjął tę zmianę, która pozwoliła mu zrozumieć, co naprawdę jest istotne w procesie tworzenia oprogramowania. Podczas swojego wystąpienia opowie o tym, jak sztuczna inteligencja zmienia rolę programisty, dlaczego nie warto tęsknić za żmudnym kodowaniem CRUD-ów i jak odnaleźć w tej transformacji nową przestrzeń dla kreatywności i wpływu. Sylwetka: Maciej Małecki jest programistą i architektem oprogramowania z ponad 25-letnim doświadczeniem. Od dwóch lat odpowiada w swojej organizacji za wdrażanie technik sztucznej inteligencji w procesie kodowania. Stoi na stanowisku, że AI nie wolno ignorować – to narzędzie, które nie tylko przyspiesza pracę, ale redefiniuje samą istotę tworzenia oprogramowania."
                },
                s2: {
                    title: "Game Engineering - Inżynieria Oprogramowania w Projektowaniu Gier",
                    speaker: "Bartłomiej Gawryszuk",
                    type: "Talk",
                    description: "KN TK Games"
                },
                s3: {
                    title: "Jak zdobyć PIERWSZĄ pracę jako programista?",
                    speaker: "Bartosz Gotowski",
                    type: "Talk",
                    description: "KN Solvro"
                },
                s4: {
                    title: "Workflow w 30 minut: Pierwsze kroki z automatyzacją w nan",
                    speaker: "Mateusz Andrzejewski, Jakub Dobrzański, Igor Olewicz",
                    type: "Talk",
                    description: "KN Algo"
                },
                s5: {
                    title: "Reinforcement learning czyli czemu deepseek pokonał openai",
                    speaker: "Tymek Drop",
                    type: "Talk",
                    description: "KN Neuron"
                }
            }
        ]
    }
];
