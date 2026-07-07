import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Check } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success state after a few seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#030303]">
      {/* Background glow blobbies */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full glow-blur-1 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent-blue/5 rounded-full glow-blur-1 pointer-events-none" />

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
            Connection
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white tracking-tight"
          >
            Let's Build Together
          </motion.h3>
        </div>

        {/* Info & Form Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8"
          >
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white">Contact Information</h4>
              <p className="text-gray-400 leading-relaxed text-sm">
                Have an interesting project, job opportunity, or just want to chat about backend architectures 
                or ML algorithms? Feel free to drop a message or connect through my socials.
              </p>

              {/* Direct Info List */}
              <div className="space-y-4">
                {/* Email */}
                <a
                  href="mailto:jayesh.jadhav.tech@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl glassmorphism border-white/5 hover:border-accent/30 group transition-all duration-300"
                >
                  <div className="p-3 bg-white/5 rounded-lg text-accent group-hover:scale-110 transition-transform">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-gray-500 uppercase">Email Me</span>
                    <span className="text-sm font-semibold text-white group-hover:text-accent transition-colors">
                      jayesh.jadhav.tech@gmail.com
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:7507943971"
                  className="flex items-center gap-4 p-4 rounded-xl glassmorphism border-white/5 hover:border-accent/30 group transition-all duration-300"
                >
                  <div className="p-3 bg-white/5 rounded-lg text-accent-blue group-hover:scale-110 transition-transform">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-gray-500 uppercase">Call Me</span>
                    <span className="text-sm font-semibold text-white group-hover:text-accent transition-colors">
                      +91 7507943971
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-xl glassmorphism border-white/5 group transition-all duration-300">
                  <div className="p-3 bg-white/5 rounded-lg text-purple-400 group-hover:scale-110 transition-transform">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-gray-500 uppercase">Location</span>
                    <span className="text-sm font-semibold text-white">Nashik, Maharashtra, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Connect Footer */}
            <div className="pt-8 border-t border-white/5 space-y-4">
              <span className="block text-xs font-mono text-gray-500 uppercase tracking-widest">Connect on Socials</span>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/jjayesh2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glassmorphism border-white/5 text-gray-400 hover:text-white hover:border-accent/30 hover:-translate-y-1 transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/jayeshjadhav02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glassmorphism border-white/5 text-gray-400 hover:text-white hover:border-accent/30 hover:-translate-y-1 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="h-full p-8 md:p-10 rounded-3xl glassmorphism border-white/5 flex flex-col justify-center relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-5 py-3.5 rounded-xl bg-white/[0.02] border border-white/5 focus:border-accent/50 focus:bg-white/[0.04] text-white text-sm outline-none transition-all duration-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-5 py-3.5 rounded-xl bg-white/[0.02] border border-white/5 focus:border-accent/50 focus:bg-white/[0.04] text-white text-sm outline-none transition-all duration-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Hi Jayesh, I'd love to chat about a Full Stack role..."
                        className="w-full px-5 py-3.5 rounded-xl bg-white/[0.02] border border-white/5 focus:border-accent/50 focus:bg-white/[0.04] text-white text-sm outline-none resize-none transition-all duration-300"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-accent to-accent-blue text-black font-semibold shadow-lg hover:shadow-accent/25 hover:scale-[1.01] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 rounded-full border-2 border-black border-t-transparent animate-spin" />
                      ) : (
                        <>
                          Send Message
                          <Send size={16} />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12 flex flex-col items-center justify-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-accent/15 border border-accent/30 text-accent flex items-center justify-center animate-bounce">
                      <Check size={32} />
                    </div>
                    <h5 className="text-xl font-bold text-white">Message Sent Successfully!</h5>
                    <p className="text-gray-400 text-sm max-w-sm">
                      Thank you for reaching out. I have received your message and will get back to you as soon as possible.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
