import { Commitments } from "@src/about/Commitments";
import { History } from "@src/about/History";
import { Footer } from "@src/features/Footer";
import { Header } from "@src/features/Header";

export default function Collection() {
  return (
    <div className="h-full">
      <Header />
      <section id="history">
        <History />
      </section>
      <section id="commitments">
        <Commitments />
      </section>
      <Footer />
    </div>
  );
}
