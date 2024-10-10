"use client";

import { Spotlight } from "@src/components/acerternity/Spotlight";
import { useEffect, useState } from "react";

export const Landing = () => {
  const [bgPosition, setBgPosition] = useState("");

  useEffect(() => {
    // Vérifie si window est disponible (seulement sur le client)
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) {
        setBgPosition("left -150px top -80px");
      } else {
        setBgPosition("");
      }
    }
  }, []);
  return (
    <div
      className="flex items-center justify-center gap-20 pt-20 h-screen w-full bg-[url(/images/WhiteBg.jpg)] bg-cover dark:bg-black dark:bg-[url(/)] md:bg-center flex-col"
      style={{ backgroundPosition: bgPosition }}
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 dark:flex hidden"
        fill="white"
      />
      <h1 className="text-center tracking-widest text-5xl 450px:text-6xl font-orbitron font-medium">
        <span>Or </span>
        <br />& <br />
        <span>Lumière</span>
      </h1>
      <p className="text-2xl 450px:text-3xl tracking-widest leading-relaxed text-center font-handlee">
        <span>Faites-vous plaisir,</span>
        <br />
        <span>Choisissez un vrai bijou</span>
      </p>
    </div>
  );
};
