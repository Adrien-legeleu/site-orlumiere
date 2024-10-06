"use client";
import React from "react";

import { Collection } from "./MainProducts/Collection";
import { WhyUs } from "./MainProducts/WhyUs";
import { StickyScroll } from "@src/components/acerternity/sticky-scroll-reveal";
import {
  Card,
  Carousel,
} from "@src/components/acerternity/apple-cards-carousel";

const content = [
  {
    title: "Nos produits phares",
    button: "voir nos tendances",
    description:
      "Découvrez notre sélection de bijoux incontournables, conçus pour allier élégance et raffinement, afin de sublimer chaque moment spécial.",
    content: (
      <div>
        <AppleCardsCarouselDemo />
      </div>
    ),
  },
  {
    title: "Pourquoi nous ?",
    button: "nos engagements",
    description:
      "Nous mettons un point d'honneur à offrir des bijoux de qualité, fabriqués avec passion et souci du détail, garantissant la satisfaction de chaque client.",
    content: (
      <div>
        <WhyUs />
      </div>
    ),
  },
  {
    title: "Notre Collection",
    button: "notre collection",
    description:
      "Parcourez notre collection unique de bijoux, créée pour refléter l'individualité de chaque personne, avec des designs intemporels et modernes.",
    content: (
      <div>
        <Collection />
      </div>
    ),
  },
];

export function MainProducts() {
  return (
    <div className="">
      <StickyScroll content={content} />
    </div>
  );
}

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full p-5">
      <h2 className="max-w-4xl pl-4 mx-auto text-center md:text-3xl font-normal tracking-wider text-neutral-800 dark:text-neutral-200  font-orbitron">
        Nos produits tendances
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Montre élégante",
    title: "Montre au design moderne et raffiné",
    src: "/images/montre (1).jpg",
  },
  {
    category: "Bague minimaliste",
    title: "Bague fine avec un style contemporain",
    src: "/images/bague (6).jpg",
  },
  {
    category: "Bracelet avec pendentif",
    title: "Bracelet orné d'un pendentif subtil",
    src: "/images/bracelets (2).jpg",
  },
  {
    category: "Montre classique",
    title: "Montre intemporelle au style épuré",
    src: "/images/montre (4).jpg",
  },
  {
    category: "Collier élégant",
    title: "Collier délicat au design raffiné",
    src: "/images/collier (5).jpg",
  },
  {
    category: "Bague sophistiquée",
    title: "Bague avec un design élégant et travaillé",
    src: "/images/collier (2).jpg",
  },
];
