import type { Partner, PartnerTier } from "./types";

/**
 * Partnerzy wydarzenia - łatwe do edycji i rozszerzenia
 * Aby dodać nowego partnera, wystarczy dodać obiekt do tablicy
 */
export const partners: Partner[] = [
    {
        name: "Capgemini",
        logo: "partners/diamond/Capgemini_Primary logo_Capgemini Blue_RGB.svg",
        url: "https://www.capgemini.com/pl-pl/",
        tier: "diament",
    },
    {
        name: "Women in Big Data Poland",
        logo: "partners/other/WIBD.svg",
        url: "https://www.linkedin.com/company/women-in-big-data-poland/",
        tier: "other",
    },
    {
        name: "IDENTT",
        logo: "partners/other/identt.png",
        url: "https://www.facebook.com/Identt",
        tier: "other",
    },
    {
        name: "WCSS",
        logo: "partners/other/wcss.png",
        url: "https://wcss.pl/",
        tier: "other",
    },
    {
        name: "PWN",
        logo: "partners/other/pwn.png",
        url: "https://pwn.pl/",
        tier: "other",
    },
];

/** Konfiguracja wyświetlania poziomów partnerskich */
export const tierConfig: Record<
    PartnerTier,
    {
        label: string;
        logoSize: string;
        borderColor: string;
        glowColor: string;
    }
> = {
    diament: {
        label: "Partnerzy Diamantowi",
        logoSize: "h-20 md:h-24 max-w-48 md:max-w-56",
        borderColor: "border-[#fd00ff]/50",
        glowColor: "hover:shadow-[0_0_30px_rgba(0,238,255,0.23)]",
    },
    other: {
        label: "Partnerzy",
        logoSize: "h-14 md:h-16 max-w-32 md:max-w-40",
        borderColor: "border-[#fd00ff]/50",
        glowColor: "hover:shadow-[0_0_25px_rgba(255,215,0,0.25)]",
    },
};

/** Kolejność wyświetlania poziomów */
export const tierOrder: PartnerTier[] = ["diament", "other"];

/** CTA sekcji partnerskiej */
export const partnerCta = {
    title: "Chcesz zostać partnerem?",
    description: "Wspieraj lokalną społeczność IT i pokaż się setkom inżynierów.",
    linkText: "POBIERZ OFERTĘ PARTNERSKĄ",
    linkHref: "/oferta_partnerska_1_web.pdf",
};

/** Nagłówek sekcji */
export const partnersSectionHeader = {
    title: "PARTNERZY WYDARZENIA",
    subtitle: "Wspólnie tworzymy wyjątkowe doświadczenie dla społeczności IT",
};
