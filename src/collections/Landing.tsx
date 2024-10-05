"use client";

import {
  Card,
  Carousel,
} from "@src/components/acerternity/apple-cards-carousel";
import { Tabs } from "@src/components/acerternity/tabs";

export function Landing() {
  const tabs = [
    {
      title: (
        <div className="bg-[url('/images/collier%20(1).jpg')] flex items-center justify-center py-16 px-24 rounded-3xl bg-cover bg-center hover:animate-bounce shadow-2xl dark:shadow-white/20"></div>
      ),
      value: "necklace",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-bl from-orange-200 to-orange-100">
          <h3 className="text-center text-4xl tracking-widest">Nos Colliers</h3>

          <AppleCardsCarouselDemoCollier />
        </div>
      ),
    },
    {
      title: (
        <div className="bg-[url(/images/bague-8.jpg)] flex items-center justify-center py-16 px-24 rounded-3xl bg-cover bg-center hover:animate-bounce shadow-2xl dark:shadow-white/20"></div>
      ),
      value: "ring",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-bl from-orange-200 to-orange-100">
          <h3 className="text-center text-4xl tracking-widest">Nos Bagues</h3>
          <AppleCardsCarouselDemoBagues />
        </div>
      ),
    },
    {
      title: (
        <div className="bg-[url('/images/bracelets%20(3).jpg')] flex items-center justify-center py-16 px-24 rounded-3xl bg-cover bg-center hover:animate-bounce shadow-2xl dark:shadow-white/20"></div>
      ),
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-bl from-orange-200 to-orange-100">
          <h3 className="text-center text-4xl tracking-widest">
            Nos blacelets
          </h3>
          <AppleCardsCarouselDemoBracelets />
        </div>
      ),
    },
    {
      title: (
        <div className="bg-[url('/images/montre%20(4).jpg')] flex items-center justify-center py-16 px-24 rounded-3xl bg-cover bg-center  hover:animate-bounce shadow-2xl dark:shadow-white/20"></div>
      ),
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-bl from-orange-200 to-orange-100">
          <h3 className="text-center text-4xl tracking-widest">Nos Montres</h3>
          <AppleCardsCarouselDemoMontres />
        </div>
      ),
    },
    {
      title: (
        <div className="bg-[url(/images/Tendance.png)] flex items-center justify-center py-16 px-24 rounded-3xl bg-cover bg-center hover:animate-bounce shadow-2xl dark:shadow-white/20"></div>
      ),
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-bl from-orange-200 to-orange-100">
          <h3 className="text-center text-4xl tracking-widest">Tendances</h3>
          <AppleCardsCarouselDemoTendances />
        </div>
      ),
    },
  ];

  return (
    <div className="h-full [perspective:1000px] relative b flex flex-col mx-auto w-full  items-start justify-start pt-32 ">
      <Tabs tabs={tabs} />
    </div>
  );
}

export function AppleCardsCarouselDemoCollier() {
  const cards = dataCollier.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full ">
      <Carousel items={cards} />
    </div>
  );
}
export function AppleCardsCarouselDemoBracelets() {
  const cards = dataBracelet.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full ">
      <Carousel items={cards} />
    </div>
  );
}
export function AppleCardsCarouselDemoBagues() {
  const cards = dataBagues.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full ">
      <Carousel items={cards} />
    </div>
  );
}
export function AppleCardsCarouselDemoMontres() {
  const cards = dataMontres.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full ">
      <Carousel items={cards} />
    </div>
  );
}
export function AppleCardsCarouselDemoTendances() {
  const cards = dataTendance.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full ">
      <Carousel items={cards} />
    </div>
  );
}

const dataCollier = [
  {
    category: "Collier classique",
    title: "Collier au design élégant",
    src: "/images/collier (1).jpg",
  },
  {
    category: "Collier minimaliste",
    title: "Collier discret et raffiné",
    src: "/images/collier (2).jpg",
  },
  {
    category: "Collier avec pendentif",
    title: "Collier orné d'un pendentif subtil",
    src: "/images/collier (3).jpg",
  },
  {
    category: "Collier moderne",
    title: "Collier au style contemporain",
    src: "/images/collier (4).jpg",
  },
  {
    category: "Collier délicat",
    title: "Collier avec un design raffiné",
    src: "/images/collier (5).jpg",
  },
  {
    category: "Collier travaillé",
    title: "Collier avec des détails sophistiqués",
    src: "/images/collier (6).jpg",
  },
];

const dataBracelet = [
  {
    category: "Bracelet classique",
    title: "Bracelet élégant et intemporel",
    src: "/images/bracelets (1).jpg",
  },
  {
    category: "Bracelet contemporain",
    title: "Bracelet au design moderne",
    src: "/images/bracelets (2).jpg",
  },
  {
    category: "Bracelet avec pendentif",
    title: "Bracelet avec un pendentif discret",
    src: "/images/bracelets (3).jpg",
  },
  {
    category: "Bracelet chic",
    title: "Bracelet raffiné et stylé",
    src: "/images/bracelets (4).jpg",
  },
  {
    category: "Bracelet délicat",
    title: "Bracelet au style léger et élégant",
    src: "/images/bracelets (5).jpg",
  },
];

const dataBagues = [
  {
    category: "Bague élégante",
    title: "Bague au design raffiné",
    src: "/images/bague (1).jpg",
  },
  {
    category: "Bague moderne",
    title: "Bague au style contemporain",
    src: "/images/bague (2).jpg",
  },
  {
    category: "Bague fine",
    title: "Bague discrète et élégante",
    src: "/images/bague (3).jpg",
  },
  {
    category: "Bague travaillée",
    title: "Bague au design sophistiqué",
    src: "/images/bague (4).jpg",
  },
  {
    category: "Bague délicate",
    title: "Bague avec un style élégant et raffiné",
    src: "/images/bague (5).jpg",
  },
  {
    category: "Bague minimaliste",
    title: "Bague simple et stylée",
    src: "/images/bague (6).jpg",
  },
  {
    category: "Bague classique",
    title: "Bague intemporelle et élégante",
    src: "/images/bague (7).jpg",
  },
  {
    category: "Bague sophistiquée",
    title: "Bague avec des détails élégants",
    src: "/images/bague-8.jpg",
  },
];

const dataMontres = [
  {
    category: "Montre élégante",
    title: "Montre au design moderne",
    src: "/images/montre (1).jpg",
  },
  {
    category: "Montre contemporaine",
    title: "Montre avec un style épuré",
    src: "/images/montre (2).jpg",
  },
  {
    category: "Montre classique",
    title: "Montre au design intemporel",
    src: "/images/montre (3).jpg",
  },
  {
    category: "Montre raffinée",
    title: "Montre avec un style soigné",
    src: "/images/montre (4).jpg",
  },
  {
    category: "Montre minimaliste",
    title: "Montre discrète et stylée",
    src: "/images/montre (5).jpg",
  },
  {
    category: "Montre sophistiquée",
    title: "Montre au design travaillé",
    src: "/images/montre (6).jpg",
  },
];

const dataTendance = [
  {
    category: "Montre élégante",
    title: "Montre au design moderne",
    src: "/images/montre (1).jpg",
  },
  {
    category: "Bague minimaliste",
    title: "Bague fine et contemporaine",
    src: "/images/bague (6).jpg",
  },
  {
    category: "Bracelet avec pendentif",
    title: "Bracelet avec un pendentif subtil",
    src: "/images/bracelets (2).jpg",
  },
  {
    category: "Montre classique",
    title: "Montre au style intemporel",
    src: "/images/montre (4).jpg",
  },
  {
    category: "Collier délicat",
    title: "Collier avec un design raffiné",
    src: "/images/collier (5).jpg",
  },
  {
    category: "Collier minimaliste",
    title: "Collier discret et élégant",
    src: "/images/collier (2).jpg",
  },
];
