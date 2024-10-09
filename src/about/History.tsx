import { Timeline } from "@src/components/acerternity/timeline";
import Image from "next/image";
import React from "react";

export function History() {
  const data = [
    {
      title: "2000 - Paris, France",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg tracking-widest  leading-10 font-medium mb-8">
            ✨ En 2000, tout a commencé ! Notre fondatrice, passionnée de bijoux
            et d&#39;artisanat, a ouvert sa première boutique à Paris 🏙️,
            offrant des créations uniques et faites à la main 🖐️💍.
          </p>
          <div className="md:grid flex md:grid-cols-2 gap-4">
            <Image
              src="/images/history (1).jpeg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover max-md:max-w-44 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
            />
            <Image
              src="/images/history (5).jpeg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover max-md:max-w-44 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2005 - Salon International des Bijoux",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg tracking-widest leading-10 font-medium mb-8">
            💎 En 2005, nous avons brillé au Salon International des Bijoux ✨,
            présentant notre première collection qui a captivé le public 👏.
          </p>
          <div className="md:grid flex md:grid-cols-2 gap-4">
            <Image
              src="/images/history (4).jpeg"
              alt="salon international"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 max-md:max-w-44 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
            />
            <Image
              src="/images/history (3).jpeg"
              alt="salon international"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 max-md:max-w-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2010 - Expansion à l&#39;International",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg tracking-widest leading-10 font-medium">
            🌍 En 2010, nous avons franchi les frontières 🌐 en lançant nos
            ventes en ligne et collaborant avec des boutiques à l&#39;étranger.
            L&#39;aventure internationale commence !
          </p>
          <div className="md:grid flex md:grid-cols-2 gap-4">
            <Image
              src="/images/international.jpg"
              alt="engagement éthique"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 max-md:max-w-44 md:h-44 lg:h-48 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
            />
            <Image
              src="/images/international2.jpg"
              alt="engagement éthique"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 max-md:max-w-44 md:h-44 lg:h-48 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2015 - Engagement Éthique",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg tracking-widest leading-10 font-medium mb-8">
            🌱 En 2015, nous avons renforcé notre engagement en faveur de
            l'éthique 💚, en privilégiant des matériaux durables et en soutenant
            les artisans locaux 👩‍🎨👨‍🎨.
          </p>
          <div className="md:grid flex md:grid-cols-2 gap-4">
            <Image
              src="/images/history (1).jpg"
              alt="engagement éthique"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 max-md:max-w-44 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
            />
            <Image
              src="/images/ecology.jpg"
              alt="engagement éthique"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 max-md:max-w-44 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2020 - Récompenses et Reconnaissance",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg tracking-widest leading-10 font-medium mb-8">
            🏆 En 2020, nous avons été honorés par plusieurs prix pour
            l&#39;innovation et le design 💡, marquant une étape importante dans
            notre parcours 🚀.
          </p>
          <div className="md:grid flex md:grid-cols-2 gap-4">
            <Image
              src="/images/reward.jpg"
              alt="salon international"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 max-md:max-w-44 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
            />
            <Image
              src="/images/reward2.jpg"
              alt="salon international"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 max-md:max-w-44 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023 - Vision d'Avenir",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg tracking-widest leading-10 font-medium mb-8">
            🔮 En 2023, notre vision se tourne vers l'avenir 🌟. Nous continuons
            de créer avec passion tout en restant fidèles à notre mission de
            qualité et d'authenticité 🖤.
          </p>
          <div className="md:grid flex md:grid-cols-2 gap-4">
            <Image
              src="/images/vision.jpg"
              alt="vision 1"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 max-md:max-w-44 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
            />
            <Image
              src="/images/montre (4).jpg"
              alt="vision 2"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 max-md:max-w-44 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center px-4 py-16">
      <Timeline data={data} />
    </div>
  );
}
