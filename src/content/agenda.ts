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
                    title: "Sesja Otwierająca KISS IT PWr",
                    speaker: "Igor Buszta",
                    speakerLabel: "Prowadzący",
                    description: "Oficjalne otwarcie konferencji KISS IT PWr 2026. Przedstawienie firm, gości oraz przebiegu wydarzenia.",
                },
            },

            {
                time: "10:00",
                s1: {
                    title: "Low-code/No-code - skrót do świata aplikacji",
                    speaker: "Jurand Kołodziej",
                    company: "Capgemini",
                    description: "Dzięki platformom low-code i no-code, nawet osoby bez dużego doświadczenia technicznego mogą tworzyć aplikacje wspierające realne procesy — bez lat nauki programowania. Prezentacja pokaże, że w tych technologiach najważniejsze są logiczne myślenie, umiejętność pracy z procesami i komunikacja, a nie znajomość języków programowania."
                },
                s2: {
                    title: "Tu liczy się wszystko: Wprowadzenie do komputerów dużej mocy",
                    speaker: "Anton Tustanowski",
                    company: "WCSS",
                    description: "Na tej prelekcji dowiesz się trochę o WCSS oraz dlaczego superkomputery to coś więcej niż tylko 'szybkie procesory'. Zobaczysz również, że dla ciebie próg wejścia do świata technologii HPC jest niższy, niż myślisz."
                },
                s3: {
                    title: "Autonomia łazika: architektura i implementacja",
                    speaker: "Mariusz Rychlicki",
                    company: "Projekt Scorpio",
                    description: "Projekt Scorpio pokazuje jak powstał oraz jak ewoluuje system jazdy autonomicznej ich łazików. Uczestnicy dowiedzą się, jak zbudowano własny stos autonomii - od mapowania po planowanie trajektorii - oraz w jaki sposób zapewniana jest jego niezawodność w warunkach terenowych. Przedstawione zostanie również to, jakie zadania, poza samą jazdą, łaziki Scorpio będą w stanie realizować samodzielnie."
                },
                s4: {
                    title: "XAI w wizji komputerowej i 3D: Jak zrozumieć decyzje AI?",
                    speaker: "Julia Farganus, Dominik Galus",
                    company: "KN Solvro",
                    description: "Jak zaufać 'czarnej skrzynce', gdy modele stają się coraz bardziej złożone? Podczas warsztatu przyjrzymy się technikom wyjaśnialnej sztucznej inteligencji (XAI), które pozwalają zajrzeć w głąb sieci neuronowych. Uczestnicy zobaczą, jak metody te sprawdzają się w analizie obrazu oraz w nowoczesnym modelowaniu 3D, w tym w chmurach punktów i Gaussian Splattingu."
                },
                s5: {
                    title: "Managing up - Zarządzanie swoim szefem",
                    speaker: "Marta Zakierska, Magdalena Skoczek, Jakub Porada",
                    company: "KN PM Group",
                    endTime: "11:15",
                    description: "Instrukcja obsługi Twojego PM-a, czyli jak komunikować się skutecznie ze swoim Project Managerem. "
                },
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
                    company: "BNY",
                    description: "Technologia łączy nas w ułamku sekundy, ale to różnice kulturowe często decydują o sukcesie projektów. Podczas prelekcji dowiecie się, dlaczego komunikacja w globalnych, rozproszonych zespołach IT wciąż sprawia trudności. Pokażemy, jak budować porozumienie, trafnie odczytywać intencje biznesu i skutecznie 'czytać atmosferę' w międzynarodowym środowisku technologicznym."
                },
                s2: {
                    title: "Prelekcja WPT",
                    speaker: "Marta Cinciala",
                    company: "WPT",
                    description: ""
                },
                s3: {
                    title: "Black-box optimization: gdy nie znamy wzoru, a musimy znaleźć najlepsze rozwiązanie",
                    speaker: "Jakub Czajkowski, Piotr Zatwarnicki, Konrad Waszczuk, Alik Stepaniuk",
                    company: "KN GANGStAS",
                    description: "Podczas zajęć pokażemy, czym są problemy typu black box, w których nie znamy wzoru funkcji celu i możemy jedynie testować rozwiązania (np. w symulacji, eksperymencie lub systemie produkcyjnym). Uczestnicy dowiedzą się, dlaczego klasyczne metody optymalizacji wtedy zawodzą oraz jak algorytmy ewolucyjne potrafią efektywnie przeszukiwać zarówno przestrzenie ciągłe, jak i dyskretne. Na prostym przykładzie pokażemy intuicję działania selekcji, mutacji i uczenia się struktury problemu."
                },
                s4: {
                    title: "Mendix - tworzenie aplikacji dla każdego",
                    speaker: "Jurand Kołodziej",
                    company: "Capgemini",
                    endTime: "12:00",
                    description: "Na warsztatach pokażemy, jak w szybki i prosty sposób stworzyć działającą aplikację w platformie Mendix. Uczestnicy poznają podstawy tworzenia modelu danych (domain model), budowania ekranów aplikacji oraz konfiguracji ról użytkowników i uprawnień. Omówimy też, jak wykorzystać gotowe moduły z Marketplace, które przyspieszają tworzenie funkcjonalności. Warsztaty pokażą, że do budowania aplikacji nie potrzeba lat doświadczenia programistycznego — najważniejsze są logiczne myślenie, zrozumienie procesu i umiejętne korzystanie z narzędzi low-code."
                },
                s6: {
                    title: "Wycieczka do serwerowni",
                    speaker: "WCSS",
                    company: "WCSS",
                    description: "Zapraszamy na wyjątkowe zwiedzanie serwerowni Wrocławskiego Centrum Sieciowo-Superkomputerowego (WCSS) w ramach wydarzenia KISS-IT. Podczas wycieczki zobaczysz z bliska superkomputer Lem oraz innowacyjny komputer kwantowy Odra 5. Dowiesz się, jak te potężne maszyny napędzają polską naukę i na czym polega przełomowa technologia kwantowa. To niepowtarzalna okazja, by zajrzeć do serca cyfrowej infrastruktury Dolnego Śląska. Liczba miejsc jest ograniczona, więc zachęcamy do rejestracji podczas wydarzenia przy stoisku WCSS!"
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
                    company: "JetBrains",
                    description: "Podczas tej prezentacji przyjrzymy się bliżej technologii Kotlin Multiplatform (KMP) oraz narzędziom, które rewolucjonizują sposób, w jaki współdzielimy kod. W skondensowanym, 30-minutowym formacie omówimy kluczowe zalety KMP oraz przydatne frameworki z jego ekosystemu. Krok po kroku zobaczymy, jak rozpocząć tworzenie własnej aplikacji i efektywnie wdrożyć ją na wielu platformach jednocześnie, oszczędzając czas i zasoby."
                },
                s2: {
                    title: "Trend którego nie da się zatrzymać - Biometrics an unstoppable trend",
                    speaker: "Daniel Jarząb",
                    company: "PayEye",
                    description: "Hasła, PIN-y i fizyczne urządzenia powoli odchodzą do lamusa, a ich miejsce zajmuje biometria, oferując bezprecedensowy poziom bezpieczeństwa i wygody. Podczas prelekcji Daniel Jarząb, CEO PayEye, opowie o tym, dlaczego uwierzytelnianie oparte na unikalnych cechach człowieka – ze szczególnym uwzględnieniem biometrii tęczówki oka i twarzy – to nie pieśń przyszłości, ale rewolucja, która dzieje się na naszych oczach. Dowiemy się, w jakim kierunku zmierza rynek, jak innowacje biometryczne zmieniają nasze codzienne życie oraz dlaczego adopcji tej technologii nie da się już zatrzymać."
                },
                s3: {
                    title: "Jak zbudować swoją markę osobistą w globalnym korporacyjnym świecie technologii?",
                    speaker: "Aga Światowa",
                    company: "Women in Big Data",
                    description: "Na rynku, gdzie tysiące świetnych inżynierów walczy o te same stanowiska, same twarde kompetencje nie wystarczą. W Google, Microsoft, czy Amazon nie awansuje ten, kto najlepiej pisze kod – awansuje ten, kto jest widoczny, rozpoznawalny i zapraszany do stołu, przy którym zapadają decyzje. Podczas tej 30-minutowej prelekcji dowiesz się: Dlaczego 'siedzenie cicho i robienie swoje' to najgorsza strategia kariery w międzynarodowej korporacji. Jak sprawić, żeby menedżerowie z USA, Niemiec czy Singapuru zapamiętali Twoje nazwisko – nawet jeśli pracujesz zdalnie z Wrocławia. Gdzie i jak pokazywać swoją ekspertyzę, żeby to Ty byłeś pierwszą osobą, którą pomyślą obsadzić przy prestiżowym projekcie. Konkretne narzędzia i platformy, które działają w globalnym techu – bez wstydu, bez nachalności, za to z efektem. To nie jest kolejna pogadanka o 'byciu sobą' i 'pasji'. To konkretna, 30-minutowa dawka strategii dla ludzi, którzy chcą, żeby ich kod, ich pomysły i ich kariera zostały zauważone na globalnym poziomie. Przyjdź, jeśli myślisz o karierze w międzynarodowym techu i nie chcesz być kolejnym anonimowym programistą w korporacyjnym tłumie."
                },
                s5: {
                    title: "Od pomysłu do rozwiązania, czyli design thinking w praktyce",
                    speaker: "Dawid Linek",
                    company: "KN Solvro",
                    description: "Większość aplikacji upada, bo rozwiązują problemy, których nikt nie ma. Podczas warsztatów sprawdzisz w praktyce, jak narzędzia Design Thinking pomagają wyjść z bańki własnych założeń i zbudować produkt, który zachwyci użytkowników. Wyjdziesz z konkretnym zestawem umiejętności, gotowym do wdrożenia w Twoim następnym projekcie."
                },
                s6: {
                    title: "Wycieczka do serwerowni organizowana przez WCSS",
                    speaker: "WCSS",
                    company: "WCSS",
                    description: "Zapraszamy na wyjątkowe zwiedzanie serwerowni Wrocławskiego Centrum Sieciowo-Superkomputerowego (WCSS) w ramach wydarzenia KISS-IT. Podczas wycieczki zobaczysz z bliska superkomputer Lem oraz innowacyjny komputer kwantowy Odra 5. Dowiesz się, jak te potężne maszyny napędzają polską naukę i na czym polega przełomowa technologia kwantowa. To niepowtarzalna okazja, by zajrzeć do serca cyfrowej infrastruktury Dolnego Śląska. Liczba miejsc jest ograniczona, więc zachęcamy do rejestracji podczas wydarzenia przy stoisku WCSS!"
                }
            },
            {
                time: "12:00",
                isBreak: true,
                breakTitle: "Przerwa kawowa - Pizza!",
            },
            {
                time: "13:00",
                s1: {
                    title: "Panel dyskusyjny: Wpływ AI na rynek IT i rozwój oprogramowania",
                    speaker: "Igor Buszta",
                    company: "KISS IT",
                    endTime: "14:15",
                    speakerLabel: "Prowadzący",
                    description: "Sztuczna inteligencja na stałe zrewolucjonizowała proces wytwarzania oprogramowania, stając się nieodłącznym narzędziem w codziennej pracy zespołów IT. Podczas panelu przeanalizujemy tę transformację – od szans na optymalizację pracy, po zupełnie nowe wyzwania, takie jak rosnący dług kognitywny (Cognitive Debt). Wspólnie zastanowimy się, jak w erze AI ewoluuje rola programisty, w jakim kierunku powinna zmierzać edukacja oraz jak zmieni się krajobraz rynku IT w perspektywie najbliższych 5 lat. \n \nIgor Buszta - Prowadzący panel, \nMaciej Koszarek - Capgemini, \nKrzysztof Raszczuk - InsERT, \ndr inż. Piotr Syga - Identt, \ndr hab. inż. Adrianna Kozierkiewicz, \nWiktor Sadowy - doktorant, \nJulia Kapuścińska - studentka, była Wiceprezes KN Neuron"
                },
                s2: {
                    title: "mObywatel Europa - jak regulacje prawne definiują projekty i biznes",
                    speaker: "Jan Goleński",
                    company: "IDENTT",
                    description: "Dla współczesnego menedżera dogłębna analiza podstaw prawnych to nie tylko formalność, ale kluczowy, pierwszy etap projektowania innowacyjnego produktu. W dynamicznym świecie cyfrowej tożsamości regulacje przestają być ograniczeniem, a stają się fundamentem, na którym buduje się realną przewagę konkurencyjną. Prelekcja, oparta na projekcie mObywatel Europa, stanowi praktyczne studium przypadku (case study) powstawania największego systemu tożsamości cyfrowej w Europie i Polsce z perspektywy zarządczej. Celem wystąpienia jest pokazanie studentom, że w sektorach BigTech i FinTech prawo bezpośrednio definiuje ramy strategii biznesowej i projektu."
                },
                s3: {
                    title: "Od notatek z wykładu do pierwszej pracy - praktyczne zastosowania Microsoft Copilot w życiu studenta",
                    speaker: "Jacek Czeszewski, Konrad Olszewski",
                    company: "Microsoft",
                    description: "Generatywna sztuczna inteligencja może dziś wspierać studentów nie tylko w nauce, ale również w przygotowaniu do wejścia na rynek pracy. Podczas tej sesji pokażemy, jak Microsoft Copilot może pełnić rolę osobistego asystenta studenta – pomagając w: analizie materiałów dydaktycznych i notatek z zajęć, przygotowaniu prezentacji i raportów projektowych, streszczaniu artykułów naukowych i dokumentacji, tworzeniu profesjonalnego CV i listu motywacyjnego, przygotowaniu do rozmów rekrutacyjnych, wyszukiwaniu ofert pracy i dopasowaniu kompetencji do wymagań pracodawców. \n Na praktycznych przykładach zobaczysz, jak wykorzystać AI do pracy indywidualnej i zespołowej oraz jak świadomie budować swoją przewagę konkurencyjną jeszcze w trakcie studiów."
                },
                s6: {
                    title: "Wycieczka do serwerowni",
                    speaker: "WCSS",
                    company: "WCSS",
                    description: "Zapraszamy na wyjątkowe zwiedzanie serwerowni Wrocławskiego Centrum Sieciowo-Superkomputerowego (WCSS) w ramach wydarzenia KISS-IT. Podczas wycieczki zobaczysz z bliska superkomputer Lem oraz innowacyjny komputer kwantowy Odra 5. Dowiesz się, jak te potężne maszyny napędzają polską naukę i na czym polega przełomowa technologia kwantowa. To niepowtarzalna okazja, by zajrzeć do serca cyfrowej infrastruktury Dolnego Śląska. Liczba miejsc jest ograniczona, więc zachęcamy do rejestracji podczas wydarzenia przy stoisku WCSS!"
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
                    company: "PWr in Space",
                    description: "Prelekcja o błędach w komunikacji satelitarnej przy rzeczywistych misjach kosmicznych. Dorzucone zostaną historie z koła PWr in Space. "
                },
                s3: {
                    title: "Infrastruktura CTF od kuchni",
                    speaker: "Adam Cal, Marek Tutka",
                    company: "KN White Hats",
                    description: "KN White Hats od kilku lat zajmuje się organizacją Break The Syntax CTF - jednego z największych podobnych turniejów w Polsce. Członkowie Koła opowiedzą o wydarzeniu od strony technicznej i przedstawią swoją historię: od początkowych zmagań do platformy obługującej 4000 graczy."
                },
                s4: {
                    title: "Tu liczy się wszystko: Wprowadzenie do komputerów dużej mocy",
                    speaker: "Anton Tustanowski",
                    company: "WCSS",
                    description: "Podczas warsztatów pokażemy, jak w praktyce wygląda praca z superkomputerem. Przejdziemy przez przykładowy workflow zaczynając od logowania na klaster. Uruchomimy między innymi duży model językowy na mocnych kartach graficznych. \n Zapisy na stoisku wcss miejsca ograniczone."
                },
                s4: {
                    title: "u liczy się wszystko: Wprowadzenie do komputerów dużej mocy",
                    speaker: "Anton Tustanowski",
                    company: "WCSS",
                    description: "Podczas warsztatów pokażemy, jak w praktyce wygląda praca z superkomputerem. Przejdziemy przez przykładowy workflow zaczynając od logowania na klaster. Uruchomimy między innymi duży model językowy na mocnych kartach graficznych. \n Zapisy na stoisku wcss miejsca ograniczone"
                },
                s5: {
                    title: "Neuromodulacja: kiedy technologia wchodzi do układu nerwowego",
                    speaker: "Pola Nowak",
                    company: "KN Neuron",
                    description: "Nasz układ nerwowy komunikuje się za pomocą impulsów elektrycznych – a co, jeśli nauka nauczyła się je delikatnie korygować? Neuromodulacja wykorzystuje bodźce, takie jak prąd elektryczny i pole magnetyczne, aby wspierać leczenie różnych zaburzeń. Brzmi jak koncept z filmów science fiction?"
                },
            },
            {
                time: "14:15",
                isBreak: true,
                breakTitle: "Przerwa",
            },
            {
                time: "14:30",
                s1: {
                    title: "Agentic AI: dlaczego nie będę tęsknić za pisaniem CRUDów",
                    speaker: "Maciej Małecki",
                    company: "Capgemini",
                    description: "Dawno temu, wybierając swoją ścieżkę zawodową, kierował się autentyczną fascynacją komputerami i programowaniem. Nie wiedział wtedy, jak wygląda profesjonalne pisanie kodu, ale pasja pozostała z nim przez lata. Dziś tworzy oprogramowanie, nie pisząc ani jednej linijki kodu – dzięki wykorzystaniu kodujących agentów AI. Zaskakująco spokojnie przyjął tę zmianę, która pozwoliła mu zrozumieć, co naprawdę jest istotne w procesie tworzenia oprogramowania. Podczas swojego wystąpienia opowie o tym, jak sztuczna inteligencja zmienia rolę programisty, dlaczego nie warto tęsknić za żmudnym kodowaniem CRUD-ów i jak odnaleźć w tej transformacji nową przestrzeń dla kreatywności i wpływu. Sylwetka: Maciej Małecki jest programistą i architektem oprogramowania z ponad 25-letnim doświadczeniem. Od dwóch lat odpowiada w swojej organizacji za wdrażanie technik sztucznej inteligencji w procesie kodowania. Stoi na stanowisku, że AI nie wolno ignorować – to narzędzie, które nie tylko przyspiesza pracę, ale redefiniuje samą istotę tworzenia oprogramowania."
                },
                s2: {
                    title: "Game Engineering - Inżynieria Oprogramowania w Projektowaniu Gier",
                    speaker: "Bartłomiej Gawryszuk",
                    company: "TK Games",
                    description: "Jak łączy się 'lajtowy' game design ze 'sztywnym' Software Developmentem? Dlaczego pomimo QA-ów, agile'a i innych, z olbrzymich budżetów powstają średniaki? Odpowiedzią na bolączki branży gier może być stare dobre inżynierskie podejście."
                },
                s3: {
                    title: "Jak zdobyć PIERWSZĄ pracę jako programista?",
                    speaker: "Bartosz Gotowski",
                    company: "KN Solvro",
                    description: "Masz problem ze znalezieniem pracy w IT i wysyłanie CV nic nie daje? W tej prelekcji pokazuję konkretne metody, które pomogły 6 studentom zdobyć pracę mimo trudnego rynku dla juniorów (także przez AI): cold DM-y do founderów, skuteczne rozmowy rekrutacyjne i sensowne follow-upy, gdy rekruterzy milczą."
                },
                s4: {
                    title: "Workflow w 30 minut: Pierwsze kroki z automatyzacją w n8n",
                    speaker: "Mateusz Andrzejewski, Jakub Dobrzański, Igor Olewicz",
                    company: "KN Algo",
                    description: "Naucz się jak za pomocą n8n zautomatyzować codzienne zadania."
                },
                s5: {
                    title: "Reinforcement learning - czyli czemu deepseek pokonał OpenAI",
                    speaker: "Tymek Drop",
                    company: "KN Neuron",
                    description: "Na wykładzie postaram się wytłumaczyć podstawy uczenia ze wzmocnieniem oraz pokaże przykłady w praktyce. Następnie postaram się omówić GRPO użyte w pracy deepseek'a."
                }
            }
        ]
    }
];
