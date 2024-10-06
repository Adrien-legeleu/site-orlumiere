import { Menu, X } from "lucide-react";
import { useState } from "react";

export const MenuBurger = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="">
      <div className="z-50 cursor-pointer">{isActive ? <X /> : <Menu />}</div>
      <div
        className={`fixed bottom-0 left-0 bg-white rounded-t-3xl w-screen h-2/3 z-50 ${
          isActive ? "flex" : "hidden"
        }`}
      >
        zezeeeiusdiusd
      </div>
    </div>
  );
};
