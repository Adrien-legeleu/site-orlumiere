import { cn } from "lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return <div className={cn(" max-w-7xl mx-auto ", className)}>{children}</div>;
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        " rounded-xl  transition duration-200 shadow-input dark:shadow-none pt-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className="group-hover/bento:translate-x-2 space-y-5 pb-10 transition duration-200">
        <div className="font-sans font-bold text-3xl text-center text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans text-center font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>
      {header}
    </div>
  );
};
