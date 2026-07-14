import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { CanvasBackground } from './CanvasBackground';

const words = ['Java Full Stack Developer', 'Backend Architect', 'Machine Learning Enthusiast'];

export const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Typewriter effect
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 40 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index]);

  // Cursor blink
  useEffect(() => {
    const timeout = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout);
  }, [blink]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-bg pt-20"
    >
      {/* Background Interactive Nodes */}
      <CanvasBackground />

      {/* Ambient lighting glows */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-accent/10 rounded-full glow-blur-1 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-blue/10 rounded-full glow-blur-1 pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Intro Chip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center gap-2 glassmorphism border-accent/20 px-4 py-1.5 rounded-full text-xs font-mono text-accent uppercase tracking-widest"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          Available for Opportunities
        </motion.div>

        {/* Big Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-4"
        >
          I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-blue to-violet-500 text-glow">
            Jayesh Jadhav
          </span>
        </motion.h1>

        {/* Typewriter Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="min-h-[40px] text-lg md:text-2xl font-mono text-gray-400 mb-8 max-w-2xl"
        >
          <span>{`${words[index].substring(0, subIndex)}`}</span>
          <span className={`inline-block w-[3px] h-[18px] md:h-[24px] ml-1 bg-accent ${blink ? 'opacity-100' : 'opacity-0'}`} />
        </motion.div>

        {/* Short Pitch */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg text-gray-400 max-w-2xl mb-10 leading-relaxed font-sans"
        >
          Software engineer specializing in backend systems and scalable architecture.
          Proficient in Java, Spring Boot, and databases. Currently enhancing skills in machine learning
          and AI integration.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <button
            onClick={() => handleScrollTo('projects')}
            className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-accent to-accent-blue text-black font-semibold shadow-lg hover:shadow-accent/25 hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer"
          >
            Explore Projects
            <ArrowRight size={18} />
          </button>
          <button
            onClick={() => handleScrollTo('contact')}
            className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full glassmorphism text-white border-white/10 hover:border-accent/40 hover:bg-white/5 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            Get In Touch
          </button>
        </motion.div>

        {/* Quick Contact & Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center gap-6"
        >
          <a
            href="https://github.com/jjayesh2" // Placeholder placeholder-free clean format
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glassmorphism text-gray-400 hover:text-accent hover:border-accent/30 hover:scale-110 hover:-translate-y-0.5 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/jayeshjadhav11" // Clean link format
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glassmorphism text-gray-400 hover:text-accent hover:border-accent/30 hover:scale-110 hover:-translate-y-0.5 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:jayesh.jadhav.tech@gmail.com"
            className="p-3 rounded-full glassmorphism text-gray-400 hover:text-accent hover:border-accent/30 hover:scale-110 hover:-translate-y-0.5 transition-all duration-300"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </motion.div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-1.5 h-6 rounded-full border border-gray-500 flex justify-center p-[2px]"
        >
          <div className="w-1 h-1.5 rounded-full bg-accent animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};
