"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import MagneticButton from "@/components/magneticButton";
import { ScaleButton } from "@/components/scaleButton";
import type { Metadata } from "next";
import Arrow from "@/components/arrow";

export const metadata: Metadata = {
  title: "Franck Chapelon | Développeur web front-end",
  description: "Franck Chapelon est un développeur web front-end basé en Aquitaine.",
  keywords: ["développement web", "front-end", "Aquitaine"],
  authors: [{ name: "Franck Chapelon" }],
  creator: "Franck Chapelon",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.franckchapelon.com",
    siteName: "Franck Chapelon Design",
    images: [
      {
        url: "https://www.franckchapelon.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Franck Chapelon Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@FranckChapelon",
    creator: "@FranckChapelon",
  },
};

export default function Plus() {
  return (
    <section id="plus" className="relative min-h-screen w-full flex flex-col items-center justify-center pt-32 bg-white overflow-hidden z-[201]">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="w-full md:w-1/3">
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-9xl font-marcellus mb-4"
            >
              F <span>.</span>
            </motion.h2>
            <h2 className="text-xl md:text-2xl mb-12 text-gray-600">Développeur web front-end basé à Savignac de Nontron</h2>
            
            <div className="space-y-12 relative">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200"></div>
              
              <div className="pl-8">
                <h3 className="text-2xl font-bold mb-4">Qui suis-je</h3>
                <p>Je m&apos;appelle Franck Chapelon et je suis un développeur web passionné. Je crée des expériences web uniques et engageantes.</p>
              </div>
              
              <div className="pl-8">
                <h3 className="text-2xl font-bold mb-4">Ce que je fais</h3>
                <p>Je suis spécialisé dans le développement front-end, la création d&apos;identités de marque et la conception de sites Web. J&apos;aime relever des défis créatifs et techniques.</p>
              </div>
              
              <div className="pl-8">
                <h3 className="text-2xl font-bold mb-4">Mon parcours</h3>
                <p>[Insérez ici une brève description de votre parcours et de vos expériences]</p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <Image
              src="/man.jpg"
              alt="Photo de [Votre Nom]"
              width={600}
              height={800}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-8">Créons quelque chose ensemble</h2>
          <MagneticButton>
            <ScaleButton
              text="Je suis prêt"
              hoverText="Contactez-moi"
              href="/contact"
              bg="bg-white"
              className="text-white bg-black hover:text-black flex z-10 whitespace-nowrap relative"
              icon={<Arrow />}
              target=""
              rel=""
            />
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}

