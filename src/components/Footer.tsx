import { Mail } from 'lucide-react';
import { footerData, type ContactPerson } from '../content';

const ContactCard = ({ person }: { person: ContactPerson }) => (
  <div className="flex flex-row h-24 gap-4 w-full lg:w-auto">
    <img
      src={person.photoUrl}
      alt={person.name}
      className="h-full aspect-square object-cover rounded-lg flex-shrink-0 bg-[#1a1a2e]"
    />

    <div className="flex flex-col h-full min-w-0 py-0.5">
      <div className="flex flex-col gap-0.5 bg-[#d2aeff] border border-[#d2aeff] rounded-md px-2 py-1">
        <h3 className="text-[#050510] font-bold text-base md:text-lg leading-tight truncate">
          {person.name}
        </h3>

        <p className="text-[#050510]/80 text-[11px] md:text-xs leading-snug line-clamp-2">
          {person.role}
        </p>
      </div>

      <a
        href={`mailto:${person.email}`}
        className="flex items-center gap-2 text-[#c4b5fd] hover:text-white transition-colors text-xs group mt-auto pl-1"
      >
        <Mail className="w-3.5 h-3.5 text-[#d2aeff] flex-shrink-0" />
        <span className="truncate group-hover:underline">{person.email}</span>
      </a>
    </div>
  </div>
);

export const Footer = () => (
  <footer className="bg-[#050510] pt-24 pb-12 border-t border-[#ffffff]/5">
    <div id="footer"></div>
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 font-sans text-center">
        Kontakt
      </h2>

      <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row lg:justify-between gap-8 mb-16">
        {footerData.contacts.map((person, index) => (
          <ContactCard key={index} person={person} />
        ))}
      </div>

      <div className="h-px w-full bg-gradient-to-r from-[#8b5cf6]/50 via-[#8b5cf6]/30 to-transparent mb-8" />

      <div className="flex flex-col gap-8">
        <div className="flex justify-start">
          <a
            href={footerData.regulaminUrl}
            className="text-white/70 hover:text-white text-sm underline underline-offset-2 transition-colors"
          >
            Regulamin wydarzenia
          </a>
        </div>

        <div className="w-full text-center text-white/50 text-sm font-sans">
          {footerData.copyright}
        </div>
      </div>
    </div>
  </footer>
);
