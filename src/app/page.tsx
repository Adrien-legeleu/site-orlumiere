import dynamic from "next/dynamic";
import { Header } from "@src/features/Header";
import { Landing } from "@src/home";

const Description = dynamic(
  () => import("../home/Description").then((mod) => mod.default),
  { ssr: false }
);

const Footer = dynamic(
  () => import("@src/features/Footer").then((mod) => mod.default),
  { ssr: false }
);

const MainProducts = dynamic(
  () => import("@src/home/MainProducts").then((mod) => mod.default),
  { ssr: false }
);

const Notice = dynamic(
  () => import("@src/home/Notice").then((mod) => mod.default),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <Landing />
      <section id="presentation">
        <Description />
      </section>
      <section id="main-products">
        <MainProducts />
      </section>
      <section id="notice">
        <Notice />
      </section>
      <Footer />
    </div>
  );
}
