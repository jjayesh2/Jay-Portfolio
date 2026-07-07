import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-50 mix-blend-screen bg-accent/15 border border-accent/30 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(0,242,254,0.15)]"
      animate={{
        x: position.x,
        y: position.y,
        scale: isHovering ? 1.6 : 1,
        backgroundColor: isHovering ? 'rgba(0, 242, 254, 0.35)' : 'rgba(0, 242, 254, 0.15)',
        borderColor: isHovering ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 242, 254, 0.3)',
        boxShadow: isHovering ? '0 0 15px rgba(0, 242, 254, 0.4)' : '0 0 10px rgba(0, 242, 254, 0.15)',
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.2 }}
    />
  );
};
