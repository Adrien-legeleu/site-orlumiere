import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@src/components/ui/accordion";
import {
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiPinterest,
  SiX,
} from "react-icons/si";

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
            <li>Présentations</li>
            <li>Produits phares</li>
            <li>A propos</li>
          </ul>
          <ul>
            <li className="text-left text-lg  mb-2">Collections</li>
            <li>Collier</li>
            <li>Bague</li>
            <li>Bracelets</li>
            <li>Montre</li>
          </ul>
          <ul>
            <li className="text-left text-lg mb-2d">A propos de nous</li>
            <li>Histoire</li>
            <li>Engagements</li>
          </ul>
        </div>
        <div className="sm:hidden 450px:w-1/2 w-3/4 ">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Home</AccordionTrigger>
              <AccordionContent>
                <a href="">Présentation</a>
              </AccordionContent>
              <AccordionContent>
                <a href="">Produits phares</a>
              </AccordionContent>
              <AccordionContent>
                <a href="">A propos</a>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Collections</AccordionTrigger>
              <AccordionContent>
                <a href="">Collier</a>
              </AccordionContent>
              <AccordionContent>
                <a href="">Bague</a>
              </AccordionContent>
              <AccordionContent>
                <a href="">Bracelets</a>
              </AccordionContent>
              <AccordionContent>
                <a href="">Montre</a>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>A propos de nous</AccordionTrigger>
              <AccordionContent>
                <a href="">Histoire</a>
              </AccordionContent>
              <AccordionContent>
                <a href="">Engagements</a>
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
