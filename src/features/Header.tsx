"use client";

import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "../components/acerternity/navbar-menu";
import Link from "next/link";

import { ModeToggle } from "@src/components/ModeToggle";
import { cn } from "lib/utils";
import { MenuBurger, MenuInterface } from "./MenuBurger";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="w-full z-[100] absolute top-0 left-0 py-4 px-8 flex items-center justify-between font-montserrat">
      <h1 className=" z-50 text-2xl 450px:text-3xl tracking-wide pt-1 font-orbitron">
        Or&Lumière
      </h1>
      <div className="hidden lg:flex">
        <Navbar className="top-2" />
      </div>
      <div className="pt-1 flex flex-row items-center justify-end w-full gap-5 ">
        <div>
          <ModeToggle />
        </div>
        <div className="z-50">
          <MenuBurger isActive={isActive} toggleActive={toggleActive} />
        </div>
      </div>
      <MenuInterface isActive={isActive} toggleActive={toggleActive} />
    </div>
  );
};

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 w-1/2 max-w-2xl mx-auto z-50",
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/#presentation">Présentation</HoveredLink>
            <HoveredLink href="/#main-products">Produits phares</HoveredLink>
            <HoveredLink href="/#notice">Ce qu'ils disent sur nous</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Collections">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Collier"
              href="/collections"
              src="/images/collier (1).jpg"
              description="Explorez notre gamme de colliers raffinés, parfaits pour toutes les occasions."
            />
            <ProductItem
              title="Bagues"
              href="/collections"
              src="/images/bague-8.jpg"
              description="Découvrez nos bagues élégantes, conçues pour sublimer votre style."
            />
            <ProductItem
              title="Bracelets"
              href="/collections"
              src="/images/bracelets (3).jpg"
              description="Parcourez notre sélection de bracelets, alliant finesse et modernité."
            />
            <ProductItem
              title="Montres"
              href="/collections"
              src="/images/montre (4).jpg"
              description="Trouvez la montre idéale pour ajouter une touche d'élégance à votre tenue."
            />
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="A propos de nous">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/about/#history">Histoire</HoveredLink>
            <HoveredLink href="/about/#commitments">Engagements</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
