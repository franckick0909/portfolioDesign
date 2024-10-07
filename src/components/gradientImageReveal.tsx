"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface GradientImageRevealProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const GradientImageReveal: React.FC<GradientImageRevealProps> = ({ src, alt, width, height }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  return (
    <motion.div
      initial={false}
      animate={
        isLoaded && isInView
          ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
          : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
      }
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.3 }} // L'animation se déclenche lorsque 30% de l'élément est visible
      onViewportEnter={() => setIsInView(true)}
      className="relative overflow-hidden"
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={() => setIsLoaded(true)}
        className="object-cover w-full h-auto"
      />
    </motion.div>
  );
};

export default GradientImageReveal;
