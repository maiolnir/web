import { useState, useRef } from "react";
import { useClickAway } from "react-use";
import Hamburger from "hamburger-react";
import MaiolnirIcon from "../assets/hammerIcon.svg";
import { IoHomeOutline } from "react-icons/io5";
import { SiGoogleearthengine } from "react-icons/si";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => {
    setOpen(false);
  });

  const menu = [
    {
      id: "Home",
      icon: IoHomeOutline,
      color: "bg-primary",
    },
    {
      id: "How It Works",
      icon: SiGoogleearthengine,
      color: "bg-primary",
    },
  ];

  return (
    <nav className="border-b-primary fixed z-50 flex h-[60px] w-full items-center justify-center border-b-[1px] bg-white">
      <div className="flex translate-x-[-10px] items-center gap-1 ">
        <img className="h-[20px] w-[20px]" src={MaiolnirIcon} />
        <div className="ml-auto mr-auto">
          <span className="from-accent via-primary to-error bg-gradient-to-tr bg-clip-text text-2xl font-black text-transparent ">
            Maiolnir
          </span>
        </div>
      </div>

      <div ref={ref} className="absolute right-4">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={20}
          color="#F76C00"
          rounded
          label="Show menu"
        />
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 100 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute px-4 -right-4 top-[54px] -z-[50] flex h-[400px] w-[250px] flex-col border border-t-0 border-r-0 bg-white border-primary rounded"
            >
              {menu.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 100 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setOpen((prev) => !prev)}
                    className={
                      "flex w-full items-center justify-start gap-1 border-b border-b-gray-200 p-4 hover:bg-accent hover:bg-opacity-10 active:bg-accent active:text-white rounded"
                    }
                    href={`#${item.id.toLowerCase()}`}
                  >
                    <Icon
                      size={23}
                      color={item.color}
                      className="text-primary font-black "
                    />
                    <span className="text-lg">{item.id}</span>
                  </motion.a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
