import { useState, useRef } from "react";
import { useClickAway } from "react-use";
import Hamburger from "hamburger-react";
import MaiolnirIcon from "../assets/hammerIcon.svg";
import { SiGoogleearthengine } from "react-icons/si";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosHome } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => {
    setOpen(false);
  });

  const menu = [
    {
      id: "Home",
      icon: IoIosHome,
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

      {/* Hamburger Menu and Modal */}
      <div className="absolute right-4">
        <div className="relative z-50">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={20}
            color="#F76C00"
            rounded
            label="Show menu"
          />
        </div>

        {/* Modal and Menu */}
        {isOpen && (
          <div
            onClick={() => setOpen(false)}
            className="fixed bottom-0 left-0 right-0 top-0 bg-gray-500 bg-opacity-30"
          >
            <AnimatePresence>
              <div className="relative top-[65px] -z-[50] mx-auto h-[400px] w-[90vw] rounded border bg-white px-1">
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 100 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col"
                >
                  {menu.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li className="border-b border-b-gray-200">
                        <motion.a
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 100 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          onClick={() => setOpen((prev) => !prev)}
                          className={
                            "hover:bg-info active:bg-info flex w-full items-center justify-start gap-2 rounded p-2 hover:bg-opacity-10 active:text-white"
                          }
                          href={`#${item.id.toLowerCase()}`}
                        >
                          <Icon size={23} color={item.color} />
                          <div className="relative flex w-full items-end justify-between pb-4">
                            <span className="relative top-3 text-sm font-normal ">
                              {item.id}
                            </span>
                            <div className="relative top-1">
                              <FaChevronRight size={15} />
                            </div>
                          </div>
                        </motion.a>
                      </li>
                    );
                  })}
                </motion.ul>
              </div>
            </AnimatePresence>
          </div>
        )}
      </div>
    </nav>
  );
}
