import { Mail, Linkedin, Instagram, Facebook } from 'lucide-react';
import { footerData, type ContactPerson, type SocialLink } from '../content';

const socialIcons = {
  linkedin: Linkedin,
  instagram: Instagram,
  facebook: Facebook,
} as const;

const ContactCard = ({ person }: { person: ContactPerson }) => (
  <div className="flex flex-row gap-4 w-full lg:w-auto">
    <img
      src={person.photoUrl}
      alt={person.name}
      className="h-[120px] w-[120px] object-cover rounded-lg border border-kiss-ice flex-shrink-0 bg-[#1a1a2e]"
    />

    <div className="flex flex-col gap-3 min-w-0">
      <div className="flex flex-col gap-0.5 bg-kiss-lavender rounded-md px-2.5 py-1.5">
        <h3 className="text-[#050510] font-bold text-lg leading-tight">
          {person.name}
        </h3>
        <p className="text-[#050510]/80 text-xs leading-snug">{person.role}</p>
      </div>

      <div className="flex flex-col gap-1.5 pl-1">
        <a
          href={`mailto:${person.email}`}
          className="flex items-center gap-2 text-kiss-lavender hover:text-white transition-colors text-xs group"
        >
          <Mail className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="truncate group-hover:underline">{person.email}</span>
        </a>
        {person.linkedinUrl && (
          <a
            href={person.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-kiss-lavender hover:text-white transition-colors text-xs"
          >
            <Linkedin className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="truncate underline">
              {person.linkedinUrl.replace(/^https?:\/\/(www\.)?/, '')}
            </span>
          </a>
        )}
      </div>
    </div>
  </div>
);

const SocialIcon = ({ link }: { link: SocialLink }) => {
  const Icon = socialIcons[link.name];
  return (
    <a
      href={link.href}
      aria-label={link.name}
      target={link.href.startsWith('#') ? undefined : '_blank'}
      rel="noopener noreferrer"
      className="text-white/60 hover:text-kiss-accent transition-colors"
    >
      <Icon className="w-8 h-8" strokeWidth={1.75} />
    </a>
  );
};

export const Footer = () => (
  <footer className="bg-kiss-footer pt-24 pb-12 border-t border-white/5">
    <div id="footer"></div>
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 font-sans text-center">
        Kontakt do organizatorów<span className="text-kiss-pink">.</span>
      </h2>

      <div className="flex flex-col md:flex-row md:justify-center gap-10 md:gap-24 mb-14 items-center md:items-start">
        {footerData.contacts.map((person, index) => (
          <ContactCard key={index} person={person} />
        ))}
      </div>

      <div className="flex justify-center gap-6 mb-8">
        {footerData.socials.map((link) => (
          <SocialIcon key={link.name} link={link} />
        ))}
      </div>

      <div className="h-px w-full max-w-[840px] mx-auto bg-white/10 mb-8" />

      <div className="w-full text-center text-white/50 text-sm font-sans">
        {footerData.copyright}
      </div>
    </div>
  </footer>
);
