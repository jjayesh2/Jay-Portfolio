import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Timeline } from './components/Timeline';
import { Contact } from './components/Contact';
import { CustomCursor } from './components/CustomCursor';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-dark-bg text-gray-300 font-sans selection:bg-accent/30 selection:text-white">
      {/* Global Custom Cursor */}
      <CustomCursor />

      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Layout Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>

      {/* Premium Footer */}
      <footer className="py-12 border-t border-white/5 bg-[#08080a] relative overflow-hidden">
        {/* Glow detail */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[100px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
          {/* Logo / Branding */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-bold text-white tracking-tight">JAYESHSanjay  JADHAV</span>
            <span className="text-xs text-gray-500 font-mono">Aspiring Java Full Stack Developer</span>
          </div>

          {/* Copyright notice */}
          <div className="flex items-center gap-1.5 text-xs text-gray-500 font-mono">
            <span>© {new Date().getFullYear()}</span>
            <span>•</span>
            <span>Crafted with</span>
            <Heart size={10} className="text-accent fill-accent animate-pulse" />
            <span>in Nashik, India</span>
          </div>

          {/* Footer Socials */}
          <div className="flex items-center gap-4">
            <a
              href="https://https://github.com/jjayesh2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-accent transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/jayeshjadhav02"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-accent transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:jayesh.jadhav.tech@gmail.com"
              className="text-gray-500 hover:text-accent transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
