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
    <div className="w-full absolute top-0 left-0 py-4 px-8 flex items-center justify-between">
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
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <Link href="/collections">idoisdoiodioidos</Link>
            <ProductItem
              title="Collier"
              href="/collections"
              src="/images/WhiteBg.jpg"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Bagues"
              href="/collections"
              src="/images/WhiteBg.jpg"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Bracelets"
              href="/collections"
              src="/images/WhiteBg.jpg"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="/collections"
              src="/images/WhiteBg.jpg"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="A propos de nous">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/history">histoire</HoveredLink>
            <HoveredLink href="/commitments">Engagements</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
