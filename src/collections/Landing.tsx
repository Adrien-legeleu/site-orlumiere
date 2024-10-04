"use client";

import {
  Card,
  Carousel,
} from "@src/components/acerternity/apple-cards-carousel";
import { Tabs } from "@src/components/acerternity/tabs";
import Image from "next/image";

export function Landing() {
  const tabs = [
    {
      title: (
        <div className="bg-[url(/images/WhiteBg.jpg)] flex items-center justify-center py-16 px-24 rounded-3xl bg-cover bg-center"></div>
      ),
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-orange-200 to-orange-100">
          <p>Collier</p>

          <AppleCardsCarouselDemo />
        </div>
      ),
    },
    {
      title: (
        <div className="bg-[url(/images/WhiteBg.jpg)] flex items-center justify-center py-16 px-24 rounded-3xl bg-cover bg-center"></div>
      ),
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-orange-200 to-orange-100">
          <p>Bagues</p>
          <AppleCardsCarouselDemo />
        </div>
      ),
    },
    {
      title: (
        <div className="bg-[url(/images/WhiteBg.jpg)] flex items-center justify-center py-16 px-24 rounded-3xl bg-cover bg-center"></div>
      ),
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-orange-200 to-orange-100">
          <p>Bracelets</p>
          <AppleCardsCarouselDemo />
        </div>
      ),
    },
    {
      title: (
        <div className="bg-[url(/images/WhiteBg.jpg)] flex items-center justify-center py-16 px-24 rounded-3xl bg-cover bg-center"></div>
      ),
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-orange-200 to-orange-100">
          <p>Montres</p>
          <AppleCardsCarouselDemo />
        </div>
      ),
    },
    {
      title: (
        <div className="bg-[url(/images/WhiteBg.jpg)] flex items-center justify-center py-16 px-24 rounded-3xl bg-cover bg-center"></div>
      ),
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-orange-200 to-orange-100">
          <p>Random tab</p>
          <AppleCardsCarouselDemo />
        </div>
      ),
    },
  ];

  return (
    <div className="h-full [perspective:1000px] relative b flex flex-col mx-auto w-full  items-start justify-start mt-32 ">
      <Tabs tabs={tabs} />
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
