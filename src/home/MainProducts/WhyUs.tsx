"use client";

import React from "react";

import { motion } from "framer-motion";
import {
  BentoGrid,
  BentoGridItem,
} from "@src/components/acerternity/bento-grid";
import { cn } from "lib/utils";

export function WhyUs() {
  return (
    <BentoGrid className="max-w-4xl mx-auto ">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className=" w-1/3 rounded-2xl bg-white  h-auto p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-start"
      >
        <h3>Notre mission</h3>
        <p className=" text-center leading-8 font-semibold text-neutral-500 mt-4">
          Créer des bijoux intemporels qui célèbrent la beauté et
          l'individualité.
        </p>
        <p className="border absolute bottom-4 border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Delusional
        </p>
      </motion.div>
      <motion.div className="h-auto relative z-20 w-1/3   rounded-2xl bg-white p-4 pb-16 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-start">
        <h3>Notre histoire</h3>
        <p className=" text-center leading-8 font-semibold text-neutral-500 mt-4">
          Fondée en 2000, notre bijouterie est née d'une passion pour
          l'artisanat et la création de pièces uniques.
        </p>
        <p className="border absolute bottom-4 border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Sensible
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-auto w-1/3 rounded-2xl bg-white p-4  dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-start"
      >
        <h3>Nos engagements</h3>
        <p className=" text-center leading-8 font-semibold text-neutral-500 mt-4">
          Nous nous engageons à utiliser des matériaux de haute qualité et à
          pratiquer une fabrication éthique.
        </p>
        <p className="border absolute bottom-4 border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Helpless
        </p>
      </motion.div>
    </motion.div>
  );
};

const items = [
  {
    title: "Pourquoi-nous ?",
    description: (
      <span className="text-xl">Le meilleur de la joaillerie !</span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: "",
  },
];
