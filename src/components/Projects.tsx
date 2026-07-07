import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, Calendar, User, Zap } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  technologies: string[];
  image: string;
  github: string;
  type: string;
  date: string;
}

const projects: Project[] = [
  {
    id: 'catalyst-ai',
    title: 'catalyst-ai',
    subtitle: 'AI-Powered Catalyst Discovery Engine',
    description: 'An AI-powered SaaS web application for catalyst discovery and recommendation based on chemical reactions, featuring a highly-interactive frontend and custom ranking models.',
    details: [
      'Developed an AI-powered SaaS web application for catalyst discovery and recommendation based on chemical reactions.',
      'Built a modern React + TypeScript interface using Tailwind CSS, interactive particle animations, and Recharts visualizations.',
      'Implemented a catalyst ranking engine with weighted scoring algorithms and created reusable, responsive components for a polished user experience.'
    ],
    technologies: ['React 18', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'HTML', 'CSS', 'JavaScript', 'Recharts'],
    image: '/catalyst_ai.png',
    github: 'https://github.com/jjayesh2/catalyst-ai',
    type: 'Self Project',
    date: '2025 - 2025'
  },
  {
    id: 'smart-attendance',
    title: 'Smart Attendance & Assignment Management System',
    subtitle: 'Full-Stack Role-Based Automation Portal',
    description: 'A robust, secure full-stack attendance and assignment management platform supporting QR code and GPS-based verification, and real-time updates.',
    details: [
      'Developed a full-stack Smart Attendance & Assignment Management System with role-based access for teachers and students.',
      'Implemented QR-code and GPS-based attendance verification, assignment submission, real-time attendance updates using WebSockets, and secure authentication with PostgreSQL and Supabase.',
      'Built a responsive React + TypeScript frontend and designed a secure, normalized database with Row Level Security (RLS).'
    ],
    technologies: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'PostgreSQL', 'Supabase', 'WebSockets', 'REST API'],
    image: '/smart_attendance.png',
    github: 'https://github.com/jjayesh2/smart-attendance',
    type: 'Self Project',
    date: '2025 - 2025'
  }
];

export const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#030303]">
      {/* Background radial highlight */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-accent/5 rounded-full glow-blur-1 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono tracking-widest text-accent uppercase mb-2"
          >
            My Portfolio
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white tracking-tight"
          >
            Featured Engineering Projects
          </motion.h3>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="group rounded-3xl glassmorphism border-white/5 overflow-hidden flex flex-col justify-between hover:border-accent/30 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,242,254,0.08)]"
            >
              {/* Project Image Section */}
              <div className="relative aspect-video overflow-hidden border-b border-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-transparent to-transparent opacity-80" />
                
                {/* Tech chips on top of image */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5 max-w-[90%]">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-md bg-black/75 backdrop-blur-sm border border-white/10 text-[10px] font-mono text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2.5 py-0.5 rounded-md bg-accent/20 backdrop-blur-sm border border-accent/30 text-[10px] font-mono text-accent">
                      +{project.technologies.length - 3} More
                    </span>
                  )}
                </div>
              </div>

              {/* Project Details Section */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center gap-2 mb-3">
                    <span className="font-mono text-xs text-accent uppercase tracking-wider flex items-center gap-1.5">
                      <Zap size={12} />
                      {project.type}
                    </span>
                    <span className="font-mono text-xs text-gray-500">{project.date}</span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Card CTAs */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                  <button
                    onClick={() => setActiveProject(project)}
                    className="flex items-center gap-2 px-4.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white hover:text-black hover:bg-gradient-to-r hover:from-accent hover:to-accent-blue hover:border-transparent transition-all duration-300 cursor-pointer"
                  >
                    View Details
                    <ExternalLink size={12} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded Modal Overlay */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="w-full max-w-4xl glassmorphism rounded-3xl overflow-hidden shadow-2xl border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Banner */}
              <div className="relative aspect-video md:aspect-[21/9] overflow-hidden border-b border-white/5">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-black/40 to-transparent" />
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black/90 text-gray-400 hover:text-white rounded-full border border-white/10 transition-all cursor-pointer"
                  aria-label="Close details"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-10 space-y-6 max-h-[60vh] overflow-y-auto">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="font-mono text-xs text-accent uppercase tracking-widest flex items-center gap-1.5 mb-1">
                      <Zap size={12} />
                      {activeProject.type}
                    </span>
                    <h4 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                      {activeProject.title}
                    </h4>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-mono text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {activeProject.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <User size={14} />
                      Self-Initiated
                    </span>
                  </div>
                </div>

                {/* Subtitle */}
                <p className="text-gray-300 font-medium text-base md:text-lg italic">
                  "{activeProject.subtitle}"
                </p>

                {/* Bullet details */}
                <div className="space-y-3.5">
                  <h5 className="text-sm font-mono uppercase text-gray-500 tracking-wider">Key Implementations</h5>
                  <ul className="space-y-3">
                    {activeProject.details.map((detail, idx) => (
                      <li key={idx} className="flex gap-3 text-sm text-gray-400 leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Grid */}
                <div className="space-y-3.5">
                  <h5 className="text-sm font-mono uppercase text-gray-500 tracking-wider">Technologies Used</h5>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-xl bg-white/5 border border-white/5 text-xs font-mono text-gray-300 hover:border-accent/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-gray-300 hover:text-white hover:border-white/20 transition-all"
                  >
                    <Github size={16} />
                    View Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
