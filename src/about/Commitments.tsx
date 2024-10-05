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
      color: "green-500",
      description:
        "Nous utilisons uniquement des matériaux de première qualité pour garantir la durabilité de chaque bijou.",
      icon: <IoDiamondOutline />,
    },
    {
      title: "Artisanat Exceptionnel",
      color: "blue-500",
      description:
        "Nos bijoux sont minutieusement fabriqués à la main par des artisans expérimentés.",
      icon: <FaHandshake />,
    },
    {
      title: "Satisfaction Client",
      color: "red-500",
      description:
        "Nous nous engageons à offrir une expérience client irréprochable à chaque étape.",
      icon: <FaRegThumbsUp />,
    },
    {
      title: "Service 24/7",
      color: "green-500",
      description:
        "Notre service client est disponible 24 heures sur 24, 7 jours sur 7, pour répondre à vos besoins.",
      icon: <TbHours24 />,
    },
    {
      title: "Éco-responsabilité",
      color: "green-500",
      description:
        "Nous mettons un point d’honneur à respecter l'environnement avec des matériaux recyclés.",
      icon: <FaRecycle />,
    },
    {
      title: "Garantie à Vie",
      color: "red-500",
      description:
        "Tous nos bijoux sont garantis à vie pour vous assurer une totale tranquillité d’esprit.",
      icon: <FaMedal />,
    },
    {
      title: "Prix Compétitifs",
      color: "blue-500",
      description:
        "Nous vous offrons le meilleur rapport qualité/prix du marché, sans compromis.",
      icon: <SiLeaderprice />,
    },
    {
      title: "Assistance Dédiée",
      color: "green-500",
      description:
        "Un service dédié pour vous aider à chaque étape de votre expérience avec nous.",
      icon: <MdAssistant />,
    },
  ];

  return (
    <div className="space-y-12 mt-20">
      <h2 className="text-5xl text-center tracking-wider font-semibold">
        Nos engagements
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
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
  color: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div
          className={`absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-${color} transition-all duration-200 origin-center`}
        />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
