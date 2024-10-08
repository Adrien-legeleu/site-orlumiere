import { Spotlight } from "@src/components/acerternity/Spotlight";

export const Landing = () => {
  return (
    <div className="flex items-center justify-center gap-20 pt-20 h-screen w-full bg-[url(/images/WhiteBg.jpg)] dark:bg-black dark:bg-[url(/)] bg-right md:bg-center flex-col">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 dark:flex hidden"
        fill="white"
      />
      <h1 className="text-center tracking-widest text-5xl 450px:text-6xl font-orbitron font-medium">
        <span>Or </span>
        <br />& <br />
        <span>Lumière</span>
      </h1>
      <p className="text-2xl 450px:text-3xl tracking-widest leading-relaxed text-center font-handlee">
        <span>Faites-vous plaisir,</span>
        <br />
        <span>Choisissez un vrai bijou</span>
      </p>
    </div>
  );
};
