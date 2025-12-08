import { motion } from 'framer-motion';
import { Terminal, Zap, Coffee, Monitor, Shield, Globe } from 'lucide-react';
import { Badge } from '../components/ui/Badge';

// Helper for Database icon mock
function Database(props: any) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  )
}

export const AgendaSection = () => {
  const agenda = [
    { time: "09:00", title: "SYSTEM BOOT & REGISTRATION", type: "break", icon: Terminal },
    { time: "10:00", title: "KEYNOTE: The Art of Simplicity", speaker: "Dr. Adam Nowak", type: "talk", icon: Zap },
    { time: "11:30", title: "GARBAGE COLLECTION (Coffee Break)", type: "break", icon: Coffee },
    { time: "12:00", title: "Kubernetes bez bólu głowy", speaker: "Sarah Jenkins", type: "talk", icon: Monitor },
    { time: "13:30", title: "DEFRAGMENTATION (Lunch)", type: "break", icon: Database },
    { time: "14:30", title: "Zero Trust w 15 minut", speaker: "Krzysztof Wójcik", type: "talk", icon: Shield },
    { time: "16:00", title: "SYSTEM SHUTDOWN & NETWORKING", type: "break", icon: Globe }
  ];

  return (
    <section id="agenda" className="py-24 bg-[#050520] relative scroll-mt-20 border-t border-[#24ff54]/10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16 text-center">
          <Badge color="purple">TIMELINE SEQUENCE</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-2 font-sans">AGENDA<span className="text-[#24ff54]">.</span></h2>
        </div>

        <div className="relative border-l-2 border-[#24ff54]/20 ml-4 md:ml-0 space-y-12">
          {agenda.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#000018] border-2 border-[#24ff54] rounded-full" />
              
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 group">
                <div className="font-display text-[#24ff54] text-xl tracking-widest min-w-[80px] pt-1">
                  {item.time}
                </div>
                
                <div className={`flex-1 p-6 rounded-lg border ${item.type === 'break' ? 'border-dashed border-gray-700 bg-white/5' : 'border-[#6715ff]/30 bg-[#6715ff]/10 hover:border-[#24ff54]'} transition-all duration-300`}>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-white font-sans">{item.title}</h3>
                    <item.icon className={`w-6 h-6 ${item.type === 'break' ? 'text-gray-500' : 'text-[#fd00ff]'}`} />
                  </div>
                  {item.speaker && (
                    <div className="text-gray-400 font-display text-sm mt-1">
                      {'>>'} SPEAKER: <span className="text-[#24ff54]">{item.speaker}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
