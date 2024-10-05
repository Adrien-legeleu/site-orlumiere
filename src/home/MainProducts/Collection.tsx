"use client";

import { WobbleCard } from "@src/components/acerternity/wobble-card";
import React from "react";

export function Collection() {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-6 gap-4 max-w-7xl mx-auto w-full h-full p-3 "
      style={{ height: "calc(100vh - 80px)" }}
    >
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-4 bg-[url('/images/collier%20(1).jpg')] bg-cover h-full  cursor-pointer "
        className="flex  items-start justify-center h-full "
      >
        <h2 className=" text-xl text-shadow-lg md:text-3xl  font-semibold tracking-widest ">
          Collier
        </h2>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 bg-[url('/images/bague-8.jpg')]  bg-cover  h-full cursor-pointer"
        className="flex flex-col text-shadow-lg items-center h-full justify-start "
      >
        <h2 className=" text-xl md:text-3xl  font-semibold tracking-widest  ">
          Bagues
        </h2>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-3 bg-[url('/images/bracelets%20(3).jpg')]  bg-cover h-full cursor-pointer"
        className="flex items-start h-full justify-center"
      >
        <h2 className=" text-xl text-shadow-lg md:text-3xl  font-semibold tracking-widest  ">
          Bracelets
        </h2>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-3 bg-[url('/images/montre%20(4).jpg')] bg-cover h-full cursor-pointer "
        className="flex items-start text-shadow-lg h-full justify-center"
      >
        <h2 className=" text-xl md:text-3xl  font-semibold tracking-widest ">
          Montres
        </h2>
      </WobbleCard>
    </div>
  );
}
