"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";

const pricingPlans = [
  {
    name: "Basic",
    description:
      "Commencez avec les outils essentiels pour booster votre présence en ligne.",
    monthlyPrice: 69,
    annualPrice: 49,
    link: "https://github.com/ansub/syntaxUI",
    features: [
      "Stratégie SEO & Recommandations",
      "Analyse des concurrents pour vous démarquer",
      "Une page ou multi-pages",
      "Design sur mesure",
      "Blogs et réseaux sociaux SEO optimisés",
      "Formulaire de contact",
      "Site web responsive",
      "Domaine + hébergement gratuit (1 an)",
      "Support et maintenance",
    ],
  },
  {
    name: "Professional",
    description:
      "Débloquez des fonctionnalités améliorées et du contenu premium pour booster votre entreprise.",
    monthlyPrice: 299,
    annualPrice: 199,
    link: "https://github.com/ansub/syntaxUI",
    features: [
      "Tout dans le plan de base",
      "Obtenez 25 blogs premium",
      "Index jusqu&apos;à 20 pages",
      "Support premium",
      "SEO local",
      "Agent SEO",
    ],
  },
  {
    name: "Premium",
    description:
      "Profitez de toutes les fonctionnalités de notre plan professionnel et plus encore.",
    monthlyPrice: 2499,
    annualPrice: 1666,
    link: "https://github.com/ansub/syntaxUI",
    features: [
      "Tout dans le plan professionnel",
      "Obtenez des blogs premium illimités",
      "Ajoutez votre propre clé de modèle AI",
      "Support premium & sessions de formation",
    ],
  },
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"M" | "A">("M");

  const Heading = () => (
    <div className="relative z-10 my-12 flex flex-col items-center justify-center gap-4">
      <div className="flex w-full flex-col items-start justify-center space-y-4 md:items-center">
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl dark:text-white font-marcellus">
          Prix équitable, avantage inégalable.
        </p>
        <p className="text-md max-w-xl text-gray-700 md:text-center dark:text-gray-300">
          Commencez aujourd&apos;hui et faites passer votre entreprise au niveau
          supérieur.
        </p>
      </div>
      <div className="flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => setBillingCycle("M")}
          className={`rounded-lg px-4 py-2 text-sm font-medium ${
            billingCycle === "M"
              ? "bg-white text-black"
              : "text-white bg-black hover:bg-white"
          }`}
        >
          Monthly
          {billingCycle === "M" && <BackgroundShift shiftKey="monthly" />}
        </button>
        <button
          type="button"
          onClick={() => setBillingCycle("A")}
          className={`rounded-lg px-4 py-2 text-sm font-medium ${
            billingCycle === "A"
              ? "bg-white text-black"
              : "bg-mutedtext-muted-foreground"
          }`}
        >
          Annual
          {billingCycle === "A" && <BackgroundShift shiftKey="annual" />}
        </button>
      </div>
    </div>
  );

  const PricingCards = () => (
    <motion.div
      className="relative grid  gap-8 lg:gap-4 mb-20 container mx-auto"
      style={{
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
      }}
    >
      {pricingPlans.map((plan, index) => (
        <div
          key={index}
          className="w-full rounded-xl border-[1px] border-gray-500 p-6 text-left"
        >
          <div className="flex items-center gap-2">
            <div className="h-px w-[10%] bg-white rounded-full" />
            <p className="mb-1 mt-0 text-base md:-text-lg lg:-text-xl xl:text-2xl font-medium uppercase text-white font-marcellus">
              {plan.name}
            </p>
          </div>

          <p className="mt-4 mb-6 text-base text-gray-300 font-inter">
            {plan.description}
          </p>
          <div className="mb-8 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={billingCycle === "M" ? "monthly" : "annual"}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="my-0 text-5xl font-semibold text-gray-900 dark:text-gray-100"
              >
                <span>
                  €{billingCycle === "M" ? plan.monthlyPrice : plan.annualPrice}
                </span>
                <span className="text-sm font-medium">
                  /{billingCycle === "M" ? "mois" : "an"}
                </span>
              </motion.p>
            </AnimatePresence>
            <motion.button
              whileTap={{ scale: 0.985 }}
              onClick={() => {
                window.open(plan.link);
              }}
              className="mt-8 w-full rounded-lg bg-stone-700 py-2 text-sm font-inter font-normal text-white hover:bg-white hover:text-black transition-colors duration-300"
            >
              Commencer
            </motion.button>
          </div>
          {plan.features.map((feature, idx) => (
            <div key={idx} className="mb-3 flex items-center gap-2">
              <FaCheck className="text-gray-500" size={18} />
              <span className="text-sm text-stone-100">{feature}</span>
            </div>
          ))}
        </div>
      ))}
    </motion.div>
  );

  return (
    <section className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32 relative">
      <Heading />
      <PricingCards />
      <div className="flex items-center justify-center">
        <p className="text-sm text-gray-500">*Prix sans TVA</p>
      </div>
    </section>
  );
};

const BackgroundShift = ({ shiftKey }: { shiftKey: string }) => (
  <motion.span
    key={shiftKey}
    layoutId="bg-shift"
    className="absolute inset-0 -z-10 rounded-lg bg-transparent"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ type: "spring", stiffness: 200, damping: 20 }}
  />
);

export default function Tarifs() {
  return (
    <section
      id="tarifs"
      className="relative w-full flex flex-col items-center justify-center py-16 bg-stone-950 overflow-hidden z-[201]"
    >
        <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32 relative">
        <Pricing />
      </div>
    </section>
  );
}
