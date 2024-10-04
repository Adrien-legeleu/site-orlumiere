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
    title: "Nos porduits phares",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa voluptatem beatae laborum molestiae, dolor sequi, autem tenetur   exercitationem nisi quos voluptatum voluptas mollitia distinctio  quisquam dolorum rem aut ratione. Aspernatur, aliquam perferendis?",
    content: (
      <div>
        <AppleCardsCarouselDemo />
      </div>
    ),
  },
  {
    title: "Pourquoi-nous ?",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa voluptatem beatae laborum molestiae, dolor sequi, autem tenetur   exercitationem nisi quos voluptatum voluptas mollitia distinctio  quisquam dolorum rem aut ratione. Aspernatur, aliquam perferendis?",
    content: (
      <div>
        <WhyUs />
      </div>
    ),
  },
  {
    title: "Notre Collection",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa voluptatem beatae laborum molestiae, dolor sequi, autem tenetur   exercitationem nisi quos voluptatum voluptas mollitia distinctio  quisquam dolorum rem aut ratione. Aspernatur, aliquam perferendis?",
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
      <h2 className="max-w-4xl pl-4 mx-auto text-center md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Nos produits tendances
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "perle rare",
    title: "Bijoux en or et sublime",
    src: "/images/WhiteBg.jpg",
  },
  {
    category: "anneau",
    title: "Bijoux en or et sublime",
    src: "/images/BlackBg.jpg",
  },
  {
    category: "pendentif",
    title: "Bijoux en or et sublime",
    src: "/images/WhiteBg.jpg",
  },

  {
    category: "bague en or",
    title: "Bijoux en or et sublime",
    src: "/images/BlackBg.jpg",
  },
  {
    category: "collier de diament",
    title: "Bijoux en or et sublime",
    src: "/images/WhiteBg.jpg",
  },
  {
    category: "Bague 400",
    title: "Bijoux en or et sublime",
    src: "/images/BlackBg.jpg",
  },
];
