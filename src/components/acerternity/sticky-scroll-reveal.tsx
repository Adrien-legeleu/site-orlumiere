import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "lib/utils";
import { Button } from "../ui/button";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    button: string;
    content?: React.ReactNode | string;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640); // Détection de la largeur d'écran
    };

    // Exécuter au montage
    handleResize();

    // Ajouter un event listener pour détecter les changements de taille de fenêtre
    window.addEventListener("resize", handleResize);

    // Nettoyer l'event listener lors du démontage du composant
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Typing the ref as a div element to avoid using 'any'
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        return distance < Math.abs(latest - cardsBreakpoints[acc])
          ? index
          : acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  // const backgroundColors = [
  //   "var(--slate-900)",
  //   "var(--black)",
  //   "var(--neutral-900)",
  // ];
  // const linearGradients = [
  //   "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
  //   "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
  //   "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  // ];

  // const [backgroundGradient, setBackgroundGradient] = useState(
  //   linearGradients[0]
  // );

  // useEffect(() => {
  //   setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  // }, [activeCard]);

  return (
    <motion.div
      // animate={{
      //   backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      // }}
      style={{ scrollbarWidth: isSmallScreen ? "none" : "auto" }}
      className="h-[30rem]   overflow-y-scroll   flex justify-center relative space-x-10 rounded-md "
      ref={ref}
    >
      <div className="div relative flex items-start pl-8 ">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-normal font-orbitron dark:text-gray-200 text-black tracking-wider"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-lg font-montserrat dark:text-gray-500 leading-8 tracking-wider text-gray-300 max-w-sm my-10"
              >
                {item.description}
              </motion.p>
              <motion.a
                href={`${index != 1 ? "/collections" : "/about"}`}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className=" font-montserrat  tracking-wider  max-w-sm "
              >
                <Button>{item.button}</Button>
              </motion.a>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        className={cn(
          "hidden lg:block   w-[60%] rounded-md sticky top-0 overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
