'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface StickyCursorProps {
  stickyElements?: string[]; // Rendons ce prop optionnel
}

const StickyCursor: React.FC<StickyCursorProps> = ({ stickyElements = [] }) => { // Valeur par défaut
  const [isHovered, setIsHovered] = useState(false);
  const [isLink, setIsLink] = useState(false);
  const cursor = useRef<HTMLDivElement>(null);

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  };

  const smoothOptions = { damping: 40, stiffness: 800, mass: 0.2 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  };

  const scale = useSpring(1, smoothOptions);

  const cursorSize = useTransform(scale, [1, 3], [10, 70]); // Augmentation du scale maximum
  const ringSize = useTransform(scale, (s) => s === 1 ? cursorSize.get() + 50 : cursorSize.get());

  const manageMouseMove = useCallback((e: MouseEvent) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX);
    mouse.y.set(clientY);
  }, [mouse.x, mouse.y]);

  const manageMouseOver = useCallback((e: MouseEvent) => {
    setIsHovered(true);
    setIsLink(e.target instanceof HTMLAnchorElement);
    scale.set(3);
  }, [scale]);

  const manageMouseLeave = useCallback(() => {
    setIsHovered(false);
    setIsLink(false);
    scale.set(1);
  }, [scale]);

  useEffect(() => {
    if (!stickyElements || stickyElements.length === 0) return; // Vérification supplémentaire

    const elements = stickyElements.flatMap(selector => 
      Array.from(document.querySelectorAll(selector))
    );
    
    elements.forEach(element => {
      element.addEventListener("mouseenter", manageMouseOver as EventListener);
      element.addEventListener("mouseleave", manageMouseLeave as EventListener);
    });

    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      elements.forEach(element => {
        element.removeEventListener("mouseenter", manageMouseOver as EventListener);
        element.removeEventListener("mouseleave", manageMouseLeave as EventListener);
      });
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [stickyElements, manageMouseMove, manageMouseOver, manageMouseLeave]);

  return (
    <>
      <motion.div 
        ref={cursor}
        style={{
          position: 'fixed',
          left: mouse.x,
          top: mouse.y,
          width: cursorSize,
          height: cursorSize,
          borderRadius: '50%',
          backgroundColor: isHovered ? 'white' : 'white',
          mixBlendMode: "difference",
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -55%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {isLink && isHovered && (
          <motion.span className='text-white font-bold text-lg font-marcellus mix-blend-difference'>
            VOIR
          </motion.span>
        )}
      </motion.div>
      <motion.div 
        style={{
          position: 'fixed',
          left: smoothMouse.x,
          top: smoothMouse.y,
          width: ringSize,
          height: ringSize,
          borderRadius: '50%',
          border: '0.2px solid #BAB1B449',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
};

export default StickyCursor;