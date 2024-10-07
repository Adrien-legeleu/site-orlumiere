import { Button } from "@src/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface IMenuBurgerProps {
  isActive: boolean;
  toggleActive: () => void;
}

export const MenuBurger = ({ isActive, toggleActive }: IMenuBurgerProps) => {
  return (
    <div className="md:hidden">
      <div className="z-[100] cursor-pointer" onClick={toggleActive}>
        {isActive ? <X /> : <Menu />}
      </div>
    </div>
  );
};

export const MenuInterface = ({ isActive, toggleActive }: IMenuBurgerProps) => {
  return (
    <div className={`md:hidden ${isActive ? "flex" : "hidden"}`}>
      <div
        className={`fixed flex-col space-y-14 bottom-0 left-1/2 overflow-y-scroll -translate-x-1/2 bg-white dark:bg-gray-950 dark:shadow-menuBurger rounded-t-[2rem] w-screen max-w-2xl h-2/3 py-8 px-8 550px:px-16`}
        style={{ scrollbarWidth: "none" }}
      >
        <div className="absolute top-6 left-0 w-full h-2 flex ">
          <div className="bg-gray-300 dark:bg-gray-500 h-2 w-52 rounded-full mx-auto" />
        </div>
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
          <div className="grid grid-cols-2  grid-rows-[100px_100px] sm:grid-rows-[150px_150px]  gap-5 mt-5 ">
            {Images.map((img, idx) => {
              return (
                <Link href="collections" className="flex space-x-2 ">
                  <Image
                    src={img}
                    width={140}
                    height={70}
                    alt={"collection num : " + idx}
                    className="flex-shrink-0 rounded-2xl shadow-2xl w-full  object-cover"
                  />
                </Link>
              );
            })}
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
            </Link>{" "}
            <Link href="/about/#commitments">
              <Button>Nos engagements</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="fixed w-screen h-screen top-0 left-0 bg-black/50 backdrop-blur-sm -z-10" />
    </div>
  );
};

const Images = [
  "/images/collier (1).jpg",
  "/images/bague-8.jpg",
  "/images/bracelets (3).jpg",
  "/images/montre (4).jpg",
];
