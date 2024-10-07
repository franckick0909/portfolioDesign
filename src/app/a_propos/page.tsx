"use client"

import { AnimatedImage } from "@/components/animatedImage";
import { motion } from "framer-motion";
import Image from "next/image";
import MagneticButton from "@/components/magneticButton";
import { ScaleButton } from "@/components/scaleButton";

export default function A_Propos() {
  return (
    <section
      id="a_propos"
      className="relative w-full flex flex-col items-center justify-center py-16 bg-white overflow-hidden z-[201] flex-grow"
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-start justify-between gap-10 px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="flex flex-1">
          <AnimatedImage imageSrc="/man.jpg" alt="À propos" maxHeight="60vh" />
          <Image
            src="/man.jpg"
            alt="À propos"
            width={500}
            height={500}
            className="w-full h-full object-cover block md:hidden"
          />
        </div>

        <div className="flex flex-1 flex-col items-start">
          <div className="container mx-auto px-4 relative">
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-marcellus text-start mb-4"
            >
              À Propos
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="flex items-center mb-16"
            >
              <h3 className="text-2xl md:text-3xl lg:text-2xl font-inter uppercase text-stone-700">
                Qui suis-je 
              </h3>
              <div className="w-1/2 h-[1px] bg-black ml-4" />
            </motion.div>

            <div className="flex flex-col max-w-lg text-base md:text-lg text-stone-700">
              <p className="">
                Je suis un développeur web front-end, spécialisé dans la
                conception d&apos;identité et de sites Web.
              </p>
              <p className="">
                Si vous souhaitez en savoir un peu plus sur moi, cliquez sur le
                bouton ci-dessous.
              </p>
            </div>
            
            <div className="mt-8 relative inline-block">
                <MagneticButton>
                    <ScaleButton
                    text="En savoir plus"
                    hoverText="Un peu plus"
                    href="/a_propos/plus"
                    bg="bg-white"
                    icon=""
                    target=""
                    rel=""
                    className="text-white bg-black hover:text-black flex z-10 whitespace-nowrap relative"
                />
            </MagneticButton>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative py-24">
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-marcellus text-start mb-4"
            >
              À Propos
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="flex items-center mb-16"
            >
              <h3 className="text-2xl md:text-3xl lg:text-2xl font-inter uppercase text-stone-700">
                Qui suis-je 
              </h3>
              <div className="w-1/2 h-[1px] bg-black ml-4" />
            </motion.div>
          </div>
    </section>
  );
}
