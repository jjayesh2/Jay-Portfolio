import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Cpu, Code2, ExternalLink } from 'lucide-react';

interface TimelineEvent {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  icon: React.ReactNode;
  link?: string;
  linkLabel?: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 'bootcamp',
    title: 'IDE Bootcamp Shortlist',
    subtitle: 'AICTE & Ministry of Education, Government of India',
    description: 'Selected for the prestigious National Level Bootcamp conducted by AICTE & Ministry of Education — recognized among the top candidates shortlisted nationwide.',
    date: 'Apr 2026',
    icon: <Cpu className="w-5 h-5 text-accent" />,
  },
  {
    id: 'oracle',
    title: 'Oracle Certified AI Foundations Associate',
    subtitle: 'Oracle Corporation',
    description: 'Earned professional certification demonstrating foundations of Artificial Intelligence, machine learning concepts, and cloud AI structures.',
    date: 'Oct 2025 - Oct 2027',
    icon: <ShieldCheck className="w-5 h-5 text-accent-blue" />,
    link: 'https://drive.google.com/file/d/1e-jVdsX_B80dHU_K-U-0z9dXVXcOMJcK/view',
    linkLabel: 'Verify Certification',
  },
  {
    id: 'hackathons',
    title: 'Hackathon Finalist',
    subtitle: 'Competed in 5 Hackathons',
    description: 'Successfully reached the final rounds in 2 major competitive hackathons. Awarded certifications in project development, architectural innovation, and technical problem-solving.',
    date: '2025',
    icon: <Code2 className="w-5 h-5 text-purple-400" />,
  },
  {
    id: 'aws',
    title: 'AWS Solutions Architecture Simulation',
    subtitle: 'Amazon Web Services (AWS)',
    description: 'Completed the AWS Solutions Architecture Job Simulation, developing models for enterprise cloud migrations, secure storage design, and serverless architectures.',
    date: '2025',
    icon: <Award className="w-5 h-5 text-emerald-400" />,
  },
];

export const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-24 relative overflow-hidden bg-[#030303]/90">
      {/* Background visual detail */}
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-accent/5 rounded-full glow-blur-1 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono tracking-widest text-accent uppercase mb-2"
          >
            Achievements
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white tracking-tight"
          >
            Milestones & Credentials
          </motion.h3>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l-2 border-white/5 ml-4 md:ml-32 space-y-12">
          {timelineEvents.map((event, idx) => (
            <div key={event.id} className="relative pl-8 md:pl-12 group">
              {/* Event Icon/Marker */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ type: 'spring', delay: idx * 0.1 }}
                className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-[#0c0c0e] border-2 border-white/10 group-hover:border-accent group-hover:shadow-[0_0_15px_rgba(0,242,254,0.3)] transition-all duration-300 flex items-center justify-center z-10"
              >
                {event.icon}
              </motion.div>

              {/* Event Date label on Desktop */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 0.6, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="hidden md:block absolute -left-[140px] top-2 w-[110px] text-right font-mono text-xs text-gray-400 group-hover:text-accent transition-colors duration-300"
              >
                {event.date}
              </motion.div>

              {/* Event Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ type: 'spring', stiffness: 80, delay: idx * 0.1 }}
                className="p-6 md:p-8 rounded-2xl glassmorphism border-white/5 hover:border-accent/20 transition-all duration-300 relative group"
              >
                <div className="flex flex-col gap-2">
                  {/* Mobile-only Date display */}
                  <span className="md:hidden font-mono text-xs text-accent/70 font-semibold uppercase">
                    {event.date}
                  </span>
                  
                  <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">
                    Milestone Achievement
                  </span>
                  
                  <h4 className="text-lg md:text-xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                    {event.title}
                  </h4>
                  
                  <h5 className="text-sm font-semibold text-gray-400">
                    {event.subtitle}
                  </h5>
                  
                  <p className="text-sm text-gray-400 leading-relaxed mt-2">
                    {event.description}
                  </p>

                  {event.link && (
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:text-white transition-colors duration-200 mt-4"
                    >
                      {event.linkLabel || 'Learn More'}
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
