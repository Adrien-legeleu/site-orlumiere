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
      className="flex w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2 font-montserrat"
    >
      <motion.div
        variants={first}
        className=" w-1/3 rounded-2xl bg-white h-auto p-4 dark:bg-black dark:border-white/[0.18] border border-neutral-200 flex flex-col items-center justify-start"
      >
        <h3>Notre mission</h3>
        <p className="text-center leading-8 font-semibold text-neutral-500 mt-4">
          Créer des bijoux intemporels qui célèbrent la beauté et
          l&#39;individualité.
        </p>
        <p className="border absolute bottom-4 border-indigo-500 bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Inspirant
        </p>
      </motion.div>

      <motion.div className="h-auto relative z-20 w-1/3 rounded-2xl bg-white p-4 pb-16 dark:bg-black dark:border-white/[0.18] border border-neutral-200 flex flex-col items-center justify-start">
        <h3>Notre histoire</h3>
        <p className="text-center leading-8 font-semibold text-neutral-500 mt-4">
          Fondée en 2000, notre bijouterie est née d&#39;une passion pour
          l&#39;artisanat et la création de pièces uniques.
        </p>
        <p className="border absolute bottom-4 border-blue-500 bg-blue-100 dark:bg-blue-900/20 text-blue-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Authentique
        </p>
      </motion.div>

      <motion.div
        variants={second}
        className="h-auto w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.18] border border-neutral-200 flex flex-col items-center justify-start"
      >
        <h3>Nos engagements</h3>
        <p className="text-center leading-8 font-semibold text-neutral-500 mt-4">
          Nous nous engageons à utiliser des matériaux de haute qualité et à
          pratiquer une fabrication éthique.
        </p>
        <p className="border absolute bottom-4 border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Responsable
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
  },
];
