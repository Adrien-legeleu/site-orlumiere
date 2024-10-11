"use client"; // Assurez-vous que c'est le premier code dans le fichier

import dynamic from "next/dynamic";
import { AuroraBackground } from "@src/components/acerternity/aurora-background";
import { Header } from "@src/features/Header";
import { History } from "@src/about/History";

// Importation dynamique pour les composants
const Commitments = dynamic(
  () => import("@src/about/Commitments").then((mod) => mod.default),
  { ssr: false }
);

const Footer = dynamic(
  () => import("@src/features/Footer").then((mod) => mod.default),
  { ssr: false }
);

export default function Collection() {
  return (
    <AuroraBackground className="h-full">
      <Header /> {/* Utilisation de l'importation dynamique pour Header */}
      <section id="history">
        <History /> {/* Composant History importé dynamiquement */}
      </section>
      <section id="commitments">
        <Commitments /> {/* Composant Commitments importé dynamiquement */}
      </section>
      <Footer /> {/* Composant Footer importé dynamiquement */}
    </AuroraBackground>
  );
}
