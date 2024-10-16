import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "lib/utils";

type Tab = {
  title: string | React.ReactNode;
  value: string;
  content?: string | React.ReactNode;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <div className="space-y-16 450px:mx-auto  ">
      <div
        className={cn(
          "450px:flex 450px:flex-row grid grid-cols-3 max-450px:px-4 w-screen justify-center items-center gap-0 xl:gap-5 [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full 450px:w-full",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={`${tab.value}-${idx}`}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn(
              "relative px-2 lg:px-4 pt-2 rounded-full",
              tabClassName
            )}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn("absolute inset-0", activeTabClassName)}
              />
            )}

            <div className="relative block">{tab.title}</div>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        key={active.value}
        hovering={hovering}
        className={cn(
          "h-auto max-450px:w-screen max-450px:px-4",
          contentClassName
        )}
      />
    </div>
  );
};

export const FadeInDiv = ({
  className,
  tabs,

  hovering,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];

  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => tab.value === tabs[0].value;

  return (
    <div className="relative w-full h-[60vh] sm:h-screen">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn("w-full h-full absolute top-0 left-0", className)}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};
