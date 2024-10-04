import {
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiPinterest,
  SiX,
} from "react-icons/si";

export const Footer = () => {
  return (
    <div className="pt-28 pb-5 px-32 w-full space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-center text-4xl font-semibold">
          Or <br />&<br />
          Lumière
        </h2>
        <div className="flex gap-20">
          <ul>
            <li className="text-left text-lg">Home</li>
            <li>Présentations</li>
            <li>Produits phares</li>
            <li>Ce qu'ils disent sur nous</li>
          </ul>
          <ul>
            <li className="text-left text-lg">Collections</li>
            <li>Collier</li>
            <li>Bague</li>
            <li>Bracelets</li>
            <li>Montre</li>
          </ul>
          <ul>
            <li className="text-left text-lg">A propos de nous</li>
            <li>Histoire</li>
            <li>Engagements</li>
          </ul>
        </div>
      </div>
      <div className="w-full border-gray-400/70 border-[1.5px] border-dashed rounded-full"></div>
      <div className="flex items-center justify-between">
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
