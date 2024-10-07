"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import Hero from "./hero/page";
import Projets from "./projets/page";
import Services from "./services/page";
import A_Propos from "./a_propos/page";
import HomeLoading from "./homeLoading";
import StickyCursor from "@/components/stickyCursor";
const Branding = dynamic(() => import("./branding/page"), { ssr: false });

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const stickyElements = ['h1', 'h2', 'h3', 'img', 'button']; // Ajoutez ici les sélecteurs pour les éléments que vous voulez "sticky"

  useEffect(() => {
    setIsMounted(true);
    const hasLoaded = localStorage.getItem('hasLoaded');
    if (hasLoaded) {
      setIsLoading(false);
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    localStorage.setItem('hasLoaded', 'true');
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 0);
      }
    }
  }, [isLoading]);

  if (!isMounted) {
    return null; // ou un composant de chargement si vous préférez
  }

  return (
    <main className="relative flex flex-col items-center justify-center w-full bg-white min-h-screen flex-grow">
      <StickyCursor stickyElements={stickyElements} />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <HomeLoading key="loading" onLoadingComplete={handleLoadingComplete} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <Hero />
            <Branding />
            <Projets />
            <Services />
            <A_Propos />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
