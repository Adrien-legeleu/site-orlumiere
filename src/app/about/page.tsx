"use client";
import { Commitments } from "@src/about/Commitments";
import { History } from "@src/about/History";
import { AuroraBackground } from "@src/components/acerternity/aurora-background";
import { Footer } from "@src/features/Footer";
import { Header } from "@src/features/Header";

export default function Collection() {
  return (
    <AuroraBackground className="h-full">
      <Header />
      <section id="history">
        <History />
      </section>
      <section id="commitments">
        <Commitments />
      </section>
      <Footer />
    </AuroraBackground>
  );
}
