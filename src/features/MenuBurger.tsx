import { Button } from "@src/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

interface IMenuBurgerProps {
  isActive: boolean;
  toggleActive: () => void;
}

export const MenuBurger = ({ isActive, toggleActive }: IMenuBurgerProps) => {
  return (
    <div className="md:hidden">
      <div>
        <button className="relative group">
          <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
            <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
              <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10"></div>
              <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75"></div>
              <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150"></div>

              <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export const MenuInterface = ({ isActive, toggleActive }: IMenuBurgerProps) => {
  return (
    <div className="md:hidden z-40">
      {/* Menu sliding animation */}
      <motion.div
        className="fixed flex-col space-y-14 bottom-0 left-1/2 overflow-y-scroll bg-white dark:bg-gray-950 dark:shadow-menuBurger rounded-t-[2rem] w-screen max-w-2xl h-2/3 py-8 px-8 550px:px-16 transform"
        style={{ scrollbarWidth: "none" }}
        initial={{ y: "100%", x: "-50%" }} // Position initiale en dehors de l'écran
        animate={isActive ? { y: "0%", x: "-50%" } : { y: "100%", x: "-50%" }} // Animation ouverture/fermeture
        transition={transition} // Utilisation des transitions définies
      >
        {/* Content */}
        <div className="absolute top-6 left-0 w-full h-2 flex ">
          <div className="bg-gray-300 dark:bg-gray-500 h-2 w-52 rounded-full mx-auto" />
        </div>

        {/* Menu items */}
        <div>
          <Link href="/">
            <h3 className="text-2xl cursor-pointer text-black/80 dark:text-white/80 font-orbitron tracking-wider">
              Home
            </h3>
          </Link>
          <div className="flex flex-row gap-5 mt-5">
            <Link href="/#presentation">
              <Button>Présentation</Button>
            </Link>
            <Link href="/#main-products">
              <Button>Produits phares</Button>
            </Link>
            <Link href="/#notice">
              <Button>Leurs avis</Button>
            </Link>
          </div>
        </div>

        <div>
          <Link href="/collections">
            <h3 className="text-2xl cursor-pointer text-black/80 dark:text-white/80 font-orbitron tracking-wider">
              Collections
            </h3>
          </Link>
          <div className="grid grid-cols-2 grid-rows-[100px_100px] sm:grid-rows-[150px_150px] gap-5 mt-5">
            {Images.map((img, idx) => (
              <Link key={idx} href="/collections" className="flex space-x-2 ">
                <Image
                  src={img}
                  width={140}
                  height={70}
                  alt={"collection num : " + idx}
                  className="flex-shrink-0 rounded-2xl shadow-2xl w-full object-cover"
                />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <Link href="/about">
            <h3 className="text-2xl cursor-pointer text-black/80 dark:text-white/80 font-orbitron tracking-wider">
              A propos de nous
            </h3>
          </Link>
          <div className="flex flex-row gap-5 mt-5">
            <Link href="/about/#history">
              <Button>Notre histoire</Button>
            </Link>
            <Link href="/about/#commitments">
              <Button>Nos engagements</Button>
            </Link>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, backdropFilter: "blur(0px)" }} // Pas de flou au départ
        animate={
          isActive
            ? { opacity: 1, backdropFilter: "blur(4px)" }
            : { opacity: 0, backdropFilter: "blur(0px)" }
        }
        transition={{ duration: 0.5, ease: "easeOut" }} // Animation fluide de 2 secondes
        style={{ display: isActive ? "flex" : "none" }} // Affiche l'élément seulement quand il est actif
        className="fixed w-screen h-screen top-0 left-0 bg-black/50 -z-10"
        onClick={toggleActive}
      />
    </div>
  );
};

const Images = [
  "/images/collier (1).jpg",
  "/images/bague-8.jpg",
  "/images/bracelets (3).jpg",
  "/images/montre (4).jpg",
];
