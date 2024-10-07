"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function HeroTransition({ children }: { children: React.ReactNode }) {
  const [isEntering, setIsEntering] = useState(true);
  const [showLine, setShowLine] = useState(true);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsEntering(false);
    }, 1000);

    const timer2 = setTimeout(() => {
      setShowLine(false);
    }, 1200); // Ajustez ce délai pour contrôler quand le trait disparaît

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const variants = {
    enter: { clipPath: "inset(0 0 50% 0)" },
    exit: { clipPath: "inset(0 0 100% 0)" }
  };

  return (
    <div className="relative">
      <AnimatePresence>
        {showLine && (
          <motion.div
            aria-hidden="true"
            key="horizontalLine"
            className="fixed left-0 top-1/2 w-full h-[2px] bg-white origin-center z-[100]"
            initial={{ scaleX: 0, opacity: 0.5 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ scaleX: 0, opacity: 0 }}
            transition={{ 
              scaleX: { type: "spring", stiffness: 100, damping: 20, mass: 0.2 },
              opacity: { duration: 0.2, ease: "easeInOut" }
            }}
          />
        )}
      </AnimatePresence>
      <motion.div
        variants={variants}
        initial="enter"
        animate="exit"
        key="topSplit"
        className="fixed inset-0 z-50 bg-black"
        transition={{ 
          clipPath: { delay: 0.7, type: "spring", stiffness: 120, damping: 30 },
          scaleY: { duration: 0.3, times: [0, 0.5, 1] }
        }}
      />
      <motion.div
        key="bottomSplit"
        className="fixed inset-0 z-50 bg-black"
        initial={{ clipPath: "inset(50% 0 0 0)" }}
        animate={{ clipPath: "inset(100% 0 0 0)" }}
        transition={{ 
          clipPath: { delay: 0.7, type: "spring", stiffness: 120, damping: 30 },
          scaleY: { duration: 0.3, times: [0, 0.5, 1] }
        }}
      />
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isEntering ? 0 : 1, y: isEntering ? 20 : 0 }}
        transition={{ 
          duration: 0.5, 
          ease: [0.43, 0.13, 0.23, 0.96],
          delay: isEntering ? 0 : 0.2 // Léger décalage après l'animation d'entrée
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}