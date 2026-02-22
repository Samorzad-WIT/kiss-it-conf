import { motion, type Variants } from 'framer-motion';
import { Badge } from '../components/ui/Badge';
import { speakers, type Speaker } from '../content';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

const SpeakerCard = ({ speaker }: { speaker: Speaker }) => {
  return (
    <motion.div variants={itemVariants} className="group relative w-full h-[400px] perspective-1000">
      <div className="absolute inset-0 bg-gradient-to-br from-[#6715ff] via-[#fd00ff] to-[#6715ff] p-[2px] opacity-60 group-hover:opacity-100 transition-opacity duration-500 rounded-lg">
        <div className="relative h-full w-full bg-[#000018] rounded-lg overflow-hidden flex flex-col">
          <div className="relative h-2/3 overflow-hidden">
            <div className="absolute inset-0 bg-[#6715ff]/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-300" />
            <img src={speaker.image} alt={speaker.name} className="w-full h-full object-top object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10 z-20" />
          </div>
          <div className="flex-1 p-5 bg-gradient-to-b from-[#000018] to-[#66147a]/20 flex flex-col justify-between border-t border-[#24ff54]/20">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-white font-sans">{speaker.name}</h3>
                <span className="text-[#24ff54] font-display text-sm">{`// ${speaker.company}`}</span>
              </div>
              <p className="text-gray-400 text-sm mb-3 font-sans leading-tight">{speaker.role}</p>
              <p className="text-white text-sm font-medium border-l-2 border-[#fd00ff] pl-2 line-clamp-2">"{speaker.topic}"</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {speaker.tags.slice(0, 2).map((tag, i) => <Badge key={i}>{tag}</Badge>)}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const SpeakersSection = () => {
  return (
    <section id="speakers" className="py-24 bg-[#000018] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-[#ffffff]/10 pb-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 font-sans">PRELEGENCI<span className="text-[#fd00ff]">.</span></h2>
            <p className="text-gray-400 font-display text-xl">{'>>>'} LOAD_SPEAKERS_MODULE()</p>
          </div>
          <div className="hidden md:block"><Badge color="green">{speakers.length} EXPERTS LOADED</Badge></div>
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker) => <SpeakerCard key={speaker.id} speaker={speaker} />)}
        </motion.div>
      </div>
    </section>
  );
};
