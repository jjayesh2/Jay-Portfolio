import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Award, Calendar } from 'lucide-react';

export const AnimatedCounter: React.FC<{ value: number; suffix?: string; label: string }> = ({ value, suffix = "", label }) => {
  const [count, setCount] = React.useState(0);
  const elementRef = React.useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = value;
          if (start === end) return;
          
          const totalDuration = 1200; // ms
          const incrementTime = Math.max(Math.floor(totalDuration / end), 20);
          
          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= end) {
              clearInterval(timer);
            }
          }, incrementTime);
          
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={elementRef} className="flex flex-col items-center justify-center p-6 rounded-2xl glassmorphism border border-white/5 relative overflow-hidden group hover:border-accent/30 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <span className="text-4xl md:text-5xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-blue mb-2">
        {count}{suffix}
      </span>
      <span className="text-xs md:text-sm text-gray-400 font-medium tracking-wider uppercase text-center">{label}</span>
    </div>
  );
};

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#030303]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono tracking-widest text-accent uppercase mb-2"
          >
            About Me
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white tracking-tight"
          >
            Engineering scalable full stack solutions.
          </motion.h3>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Bio & Education */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">Professional Profile</h4>
              <p className="text-gray-400 leading-relaxed text-lg">
                I am a software engineer specializing in backend systems and scalable architecture, 
                with a proficiency in Java, Spring Boot, and relational databases. Currently, I am actively 
                enhancing my skillset in machine learning and AI integration to bring intelligent 
                features into modern full-stack development.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Known for my strong analytical thinking, problem-solving capabilities, and rapid adaptability 
                to new tech stacks. I enjoy building applications that optimize workflow and process 
                efficiency, whether for attendance tracking or SaaS catalyst discovery engines.
              </p>
            </div>

            {/* Education Card */}
            <div className="p-6 rounded-2xl glassmorphism border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/15 transition-all duration-500" />
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 border border-accent/20 rounded-xl text-accent">
                  <GraduationCap size={24} />
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap justify-between items-center gap-2">
                    <span className="font-mono text-xs text-accent uppercase tracking-wider">Bachelor of Engineering</span>
                    <span className="flex items-center gap-1 font-mono text-xs text-gray-500">
                      <Calendar size={12} />
                      2024 - 2028
                    </span>
                  </div>
                  <h5 className="text-base font-bold text-white leading-tight">
                    KVN Naik SPS' Loknete Gopinathji Munde Institute of Engineering Education & Research, Nashik
                  </h5>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-1.5 text-sm text-gray-400">
                      <BookOpen size={14} className="text-accent-blue" />
                      <span>BE Coursework</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm">
                      <Award size={14} className="text-accent" />
                      <span className="font-mono text-white font-semibold">8.23 CGPA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Animated Statistics Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            <AnimatedCounter value={5} label="Hackathons Run" />
            <AnimatedCounter value={2} suffix="x" label="Finalist Wins" />
            <AnimatedCounter value={10} suffix="+" label="Projects Built" />
            <AnimatedCounter value={20} suffix="+" label="Tech Skills" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
