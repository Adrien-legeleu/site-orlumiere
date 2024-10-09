import {
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiPinterest,
  SiX,
} from "react-icons/si";
import Link from "next/link"; // Si tu utilises Next.js
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@src/components/ui/accordion";

export const Footer = () => {
  return (
    <div className="pt-28 pb-5 xl:px-32 lg:px-24 px-12 w-full space-y-8 font-montserrat">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-4 items-center justify-center lg:justify-between">
        <h2 className="text-center text-black/70 dark:text-white/70 text-5xl md:text-6xl lg:text-4xl font-semibold font-orbitron">
          Or <br />&<br />
          Lumière
        </h2>
        <div className=" md:gap-20 gap-12 sm:flex hidden">
          <ul>
            <li className="text-left text-lg mb-2">Home</li>
            <li>
              <Link href="/#presentation">Présentation</Link>
            </li>
            <li>
              <Link href="/#main-products">Produits phares</Link>
            </li>
            <li>
              <Link href="/#notice">Ce qu&#39;ils disent sur nous</Link>
            </li>
          </ul>
          <ul>
            <li className="text-left text-lg mb-2">Collections</li>
            <li>
              <Link href="/collections">Collier</Link>
            </li>
            <li>
              <Link href="/collections">Bague</Link>
            </li>
            <li>
              <Link href="/collections">Bracelets</Link>
            </li>
            <li>
              <Link href="/collections">Montre</Link>
            </li>
          </ul>
          <ul>
            <li className="text-left text-lg mb-2">A propos de nous</li>
            <li>
              <Link href="/about/#history">Histoire</Link>
            </li>
            <li>
              <Link href="/about/#commitments">Engagements</Link>
            </li>
          </ul>
        </div>
        <div className="sm:hidden 450px:w-1/2 w-3/4 ">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Home</AccordionTrigger>
              <AccordionContent>
                <Link href="/#presentation">Présentation</Link>
              </AccordionContent>
              <AccordionContent>
                <Link href="/#main-products">Produits phares</Link>
              </AccordionContent>
              <AccordionContent>
                <Link href="/#notice">Ce qu&#39;ils disent sur nous</Link>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Collections</AccordionTrigger>
              <AccordionContent>
                <Link href="/collections">Collier</Link>
              </AccordionContent>
              <AccordionContent>
                <Link href="/collections">Bague</Link>
              </AccordionContent>
              <AccordionContent>
                <Link href="/collections">Bracelets</Link>
              </AccordionContent>
              <AccordionContent>
                <Link href="/collections">Montre</Link>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>A propos de nous</AccordionTrigger>
              <AccordionContent>
                <Link href="/about/#history">Histoire</Link>
              </AccordionContent>
              <AccordionContent>
                <Link href="/about/#commitments">Engagements</Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="w-full border-gray-400/70 border-[1.5px] border-dashed rounded-full"></div>
      <div className="flex sm:flex-row flex-col items-center justify-center gap-8 sm:gap-0 sm:justify-between">
        <i>@Adrien Legeleux</i>
        <div className="flex gap-8">
          <SiGithub size={20} />
          <SiInstagram size={20} />
          <SiPinterest size={20} />
          <SiX size={20} />
          <SiFacebook size={20} />
        </div>
      </div>
    </div>
  );
};
