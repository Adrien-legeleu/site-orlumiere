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

export const Header = () => {
  return (
    <div className="w-full z-50 absolute top-0 left-0 py-4 px-8 flex items-center justify-between">
      <h1>Or&Lumière</h1>
      <div>
        <Navbar className="top-2" />
      </div>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
};

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
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
