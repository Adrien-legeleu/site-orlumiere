import { cn } from "lib/utils";
import { SiLeaderprice } from "react-icons/si";
import { IoDiamondOutline } from "react-icons/io5";
import { FaHandshake, FaRegThumbsUp, FaRecycle, FaMedal } from "react-icons/fa";
import { TbHours24 } from "react-icons/tb";
import { MdAssistant } from "react-icons/md";

export function Commitments() {
  const features = [
    {
      title: "Qualité Supérieure",
      color: "gold", // Doré pour la qualité supérieure
      description:
        "Nous utilisons uniquement des matériaux de première qualité pour garantir la durabilité de chaque bijou.",
      icon: <IoDiamondOutline className="h-6 w-6" />,
    },
    {
      title: "Artisanat Exceptionnel",
      color: "brown", // Couleur terre pour l'artisanat
      description:
        "Nos bijoux sont minutieusement fabriqués à la main par des artisans expérimentés.",
      icon: <FaHandshake className="h-6 w-6" />,
    },
    {
      title: "Satisfaction Client",
      color: "lightblue", // Bleu ciel pour la confiance
      description:
        "Nous nous engageons à offrir une expérience client irréprochable à chaque étape.",
      icon: <FaRegThumbsUp className="h-6 w-6" />,
    },
    {
      title: "Service 24/7",
      color: "purple", // Violet pour un service constant
      description:
        "Notre service client est disponible 24 heures sur 24, 7 jours sur 7, pour répondre à vos besoins.",
      icon: <TbHours24 className="h-6 w-6" />,
    },
    {
      title: "Éco-responsabilité",
      color: "lightgreen", // Vert doux pour l'écologie
      description:
        "Nous mettons un point d&rsquo;honneur à respecter l'environnement avec des matériaux recyclés.",
      icon: <FaRecycle className="h-6 w-6" />,
    },
    {
      title: "Garantie à Vie",
      color: "darkblue", // Bleu foncé pour la sécurité
      description:
        "Tous nos bijoux sont garantis à vie pour vous assurer une totale tranquillité d&rsquo;esprit.",
      icon: <FaMedal className="h-6 w-6" />,
    },
    {
      title: "Prix Compétitifs",
      color: "orange", // Orange pour les bonnes affaires
      description:
        "Nous vous offrons le meilleur rapport qualité/prix du marché, sans compromis.",
      icon: <SiLeaderprice className="h-6 w-6" />,
    },
    {
      title: "Assistance Dédiée",
      color: "gray", // Gris léger pour le professionnalisme
      description:
        "Un service dédié pour vous aider à chaque étape de votre expérience avec nous.",
      icon: <MdAssistant className="h-6 w-6" />,
    },
  ];

  return (
    <div className="space-y-12 mt-20">
      <h2 className="text-5xl text-center  font-orbitron tracking-wider text-black/80 dark:text-white/80 font-semibold">
        Nos engagements
      </h2>
      <div className="grid font-montserrat grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
  color,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  color: string; // Accepte toutes les couleurs en tant que string
}) => {
  // Mappe les couleurs personnalisées aux classes Tailwind correspondantes
  const gradientFromColor: Record<string, string> = {
    gold: "from-yellow-400/15",
    brown: "from-amber-700/15",
    lightblue: "from-sky-300/15",
    purple: "from-purple-500/15",
    lightgreen: "from-green-300/15",
    darkblue: "from-blue-800/15",
    orange: "from-orange-500/15",
    gray: "from-gray-400/15",
  };

  const badgeColor: Record<string, string> = {
    gold: "bg-yellow-400",
    brown: "bg-amber-700",
    lightblue: "bg-sky-300",
    purple: "bg-purple-500",
    lightgreen: "bg-green-300",
    darkblue: "bg-blue-800",
    orange: "bg-orange-500",
    gray: "bg-gray-400",
  };

  const textColor: Record<string, string> = {
    gold: "text-yellow-400",
    brown: "text-amber-700",
    lightblue: "text-sky-300",
    purple: "text-purple-500",
    lightgreen: "text-green-300",
    darkblue: "text-blue-800",
    orange: "text-orange-500",
    gray: "text-gray-400",
  };

  const gradient = gradientFromColor[color] || "from-gray-500/15";
  const badge = badgeColor[color] || "bg-gray-500";
  const text = textColor[color] || "text-gray-500";

  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 rounded-md relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 ? (
        <div
          className={`opacity-0 group-hover/feature:opacity-100 rounded-md transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t ${gradient} dark:${gradient} to-transparent pointer-events-none`}
        />
      ) : (
        <div
          className={`opacity-0 group-hover/feature:opacity-100 rounded-md transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b ${gradient} dark:${gradient} to-transparent pointer-events-none`}
        />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div
          className={`absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 transition-all duration-200 origin-center group-hover/feature:bg-neutral-500 group-hover/feature:h-8`} // Couleur neutre par défaut, devient badge color au hover
        />
        <span
          className={`group-hover/feature:translate-x-2 transition duration-200 inline-block ${text}`}
        >
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
