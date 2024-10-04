import { Landing } from "@src/collections";
import { Footer } from "@src/features/Footer";
import { Header } from "@src/features/Header";

export default function Collection() {
  return (
    <div className="w-full h-full">
      <Header />
      <Landing />
      <Footer />
    </div>
  );
}
