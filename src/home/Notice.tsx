import Marquee from "@src/components/ui/marquee";
import { cn } from "lib/utils";

function getRandomGradient() {
  // Génère deux couleurs aléatoires pour le dégradé
  const colors = [
    `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  ];
  return `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`;
}

const ReviewCard = ({
  name,
  username,
  body,
}: {
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-52 flex justify-between flex-col w-full cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        {/* Remplacement de l'image par une div avec un dégradé aléatoire */}
        <div
          className="rounded-full w-[40px] h-[40px]"
          style={{ background: getRandomGradient() }}
        ></div>
        <div className="flex flex-col">
          <figcaption className="text-xl font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-base font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-base">{body}</blockquote>
    </figure>
  );
};

export default function Notice() {
  return (
    <div className="relative flex h-screen mt-32 w-full flex-col rounded-lg bg-background px-4 max-w-[1500px] mx-auto">
      <h2 className="text-center font-medium tracking-wider text-2xl sm:text-4xl mb-16 font-orbitron">
        Ce qu&#39;ils disent sur nous
      </h2>
      <div className="flex flex-row items-center justify-center overflow-hidden font-montserrat">
        <Marquee
          pauseOnHover
          vertical
          className="[--duration:15s] sm:[--duration:30s] lg:[--duration:50s]"
        >
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee
          reverse
          pauseOnHover
          vertical
          className="[--duration:40s] hidden lg:flex"
        >
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee
          pauseOnHover
          vertical
          className="[--duration:50s] sm:flex hidden"
        >
          {thirdRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-x-0 top-10 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
      </div>
    </div>
  );
}

const reviews = [
  {
    name: "Sophie",
    username: "@sophie",
    body: "Les bijoux d'Or & Lumière sont absolument magnifiques.",
  },
  {
    name: "Lucas",
    username: "@lucas",
    body: "Je suis impressionné par le design et la finesse des bijoux.",
  },
  {
    name: "Emma",
    username: "@emma",
    body: "L'attention aux détails est impressionnante.",
  },
  {
    name: "Paul",
    username: "@paul",
    body: "Le bracelet que j'ai commandé est sublime.",
  },
  {
    name: "Clara",
    username: "@clara",
    body: "Je suis sans voix. Les bijoux sont d'une beauté inégalée.",
  },
  {
    name: "Antoine",
    username: "@antoine",
    body: "Je cherchais un cadeau spécial, et je l'ai trouvé.",
  },
  {
    name: "Camille",
    username: "@camille",
    body: "Chaque bijou est une véritable œuvre d'art.",
  },
  {
    name: "Louis",
    username: "@louis",
    body: "La qualité des matériaux utilisés est impressionnante.",
  },
  {
    name: "Inès",
    username: "@ines",
    body: "Je suis tombée amoureuse de mon pendentif dès que je l'ai vu.",
  },
  {
    name: "Nicolas",
    username: "@nicolas",
    body: "Le service client est fantastique et les bijoux sont magnifiques.",
  },
];

const firstRow = reviews.slice(0, reviews.length / 3);
const secondRow = reviews.slice(
  reviews.length / 3 + 1,
  (reviews.length / 3) * 2
);
const thirdRow = reviews.slice(reviews.length / 3 + 1);
