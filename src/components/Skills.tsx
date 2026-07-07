import React from 'react';
import { motion } from 'framer-motion';
import { Code, Box, Layers, Database, Compass, CheckCircle } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: <Code className="text-accent" />,
    skills: ['Java', 'Python', 'JavaScript', 'C', 'SQL', 'PHP'],
  },
  {
    title: 'Frameworks & Libraries',
    icon: <Layers className="text-accent-blue" />,
    skills: ['Spring Boot', 'React', 'Tailwind CSS', 'Angular', 'Hibernate', 'Bootstrap 5'],
  },
  {
    title: 'Databases',
    icon: <Database className="text-purple-400" />,
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase'],
  },
  {
    title: 'Tools & Platforms',
    icon: <Box className="text-emerald-400" />,
    skills: ['Git', 'GitHub', 'IntelliJ IDEA', 'VS Code', 'MySQL Workbench', 'Vercel'],
  },
  {
    title: 'Soft Skills',
    icon: <Compass className="text-pink-400" />,
    skills: ['Problem Solving', 'Teamwork', 'Leadership', 'Time Management', 'Communication'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
} as const;

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#030303]/90">
      {/* Background glow blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-accent-blue/5 rounded-full glow-blur-1 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-500/5 rounded-full glow-blur-1 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono tracking-widest text-accent uppercase mb-2"
          >
            My Stack
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white tracking-tight"
          >
            Technologies & Tools
          </motion.h3>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="p-6 rounded-2xl glassmorphism border-white/5 relative overflow-hidden group hover:border-accent/20 hover:shadow-[0_0_20px_rgba(0,242,254,0.05)] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Header */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-white/5 rounded-xl border border-white/5 group-hover:scale-110 group-hover:border-accent/25 transition-all duration-300">
                    {category.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white tracking-tight">{category.title}</h4>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="px-3.5 py-1.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-accent/30 hover:bg-accent/5 hover:-translate-y-0.5 text-xs font-mono text-gray-300 hover:text-white transition-all duration-200 flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Extra visual anchor */}
              <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                <span>Verified Stack</span>
                <CheckCircle size={10} className="text-accent" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
