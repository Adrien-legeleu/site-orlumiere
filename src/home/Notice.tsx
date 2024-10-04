import Marquee from "@src/components/ui/marquee";
import { cn } from "lib/utils";

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-52 flex justify-between flex-col  w-full cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2 ">
        <img className="rounded-full" width="40" height="40" alt="" src={img} />
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

export function Notice() {
  return (
    <div className="relative flex h-screen mt-32 w-full flex-col  rounded-lg bg-background px-4">
      <h2 className="text-center font-medium tracking-wider text-4xl mb-16">
        Ce qu'ils disent sur nous
      </h2>
      <div className="flex flex-row items-center justify-center overflow-hidden">
        <Marquee pauseOnHover vertical className="[--duration:50s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover vertical className="[--duration:40s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee pauseOnHover vertical className="[--duration:50s]">
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
    body: "Les bijoux d'Or & Lumière sont absolument magnifiques. Chaque pièce est unique et d'une qualité exceptionnelle. Je suis ravie de mon achat.",
    img: "https://avatar.vercel.sh/sophie",
  },
  {
    name: "Lucas",
    username: "@lucas",
    body: "Je suis impressionné par le design et la finesse des bijoux. Or & Lumière propose des pièces incroyablement élégantes. Un service irréprochable !",
    img: "https://avatar.vercel.sh/lucas",
  },
  {
    name: "Emma",
    username: "@emma",
    body: "L'attention aux détails et le soin apporté à chaque bijou sont impressionnants. Je recommande vivement Or & Lumière.",
    img: "https://avatar.vercel.sh/emma",
  },
  {
    name: "Paul",
    username: "@paul",
    body: "Le bracelet que j'ai commandé est sublime. Or & Lumière a vraiment su capturer l'élégance dans chaque création.",
    img: "https://avatar.vercel.sh/paul",
  },
  {
    name: "Clara",
    username: "@clara",
    body: "Je suis sans voix. Les bijoux d'Or & Lumière sont d'une beauté inégalée. Je reçois des compliments à chaque fois que je porte ma bague.",
    img: "https://avatar.vercel.sh/clara",
  },
  {
    name: "Antoine",
    username: "@antoine",
    body: "Je cherchais un cadeau spécial, et j'ai trouvé exactement ce que je voulais chez Or & Lumière. Un service exceptionnel et des bijoux raffinés.",
    img: "https://avatar.vercel.sh/antoine",
  },
  {
    name: "Camille",
    username: "@camille",
    body: "Chaque bijou est une véritable œuvre d'art. Or & Lumière sait comment combiner élégance et modernité. Je suis conquise.",
    img: "https://avatar.vercel.sh/camille",
  },
  {
    name: "Louis",
    username: "@louis",
    body: "La qualité des matériaux utilisés est impressionnante. Mon collier d'Or & Lumière est parfait pour toutes les occasions.",
    img: "https://avatar.vercel.sh/louis",
  },
  {
    name: "Inès",
    username: "@ines",
    body: "Je suis tombée amoureuse de mon pendentif dès que je l'ai vu. Or & Lumière offre des pièces incroyablement élégantes et originales.",
    img: "https://avatar.vercel.sh/ines",
  },
  {
    name: "Nicolas",
    username: "@nicolas",
    body: "Le service client est fantastique et les bijoux sont encore plus beaux en vrai. Or & Lumière est définitivement mon endroit préféré pour les bijoux.",
    img: "https://avatar.vercel.sh/nicolas",
  },
];

const firstRow = reviews.slice(0, reviews.length / 3);
const secondRow = reviews.slice(
  reviews.length / 3 + 1,
  (reviews.length / 3) * 2
);
const thirdRow = reviews.slice(reviews.length / 3 + 1);
