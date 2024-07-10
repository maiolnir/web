import { useState, useRef } from "react";
import { useClickAway } from "react-use";
import Hamburger from "hamburger-react";
import MaiolnirIcon from "../assets/hammerIcon.svg";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosHome } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa";
import { MdDocumentScanner } from "react-icons/md";
import { GrTools } from "react-icons/gr";
import { HiArrowSmRight } from "react-icons/hi";
import { GrContact } from "react-icons/gr";
import { SiDocsdotrs } from "react-icons/si";

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
    },
    {
      id: "About",
      icon: SiDocsdotrs,
    },
    {
      id: "Portfolio",
      icon: MdDocumentScanner,
    },
    {
      id: "Artifacts",
      icon: GrTools,
    },
  ];

  return (
    <header className="container relative z-50 mx-auto flex h-[72px] w-full items-center border-b-[1px] bg-white lg:h-[6rem]">
      <div className="flex h-full w-full items-center">
        <div className="ml-3 flex items-center gap-1 lg:ml-0">
          <img
            className="h-[20px] w-[20px] lg:h-[30px] lg:w-[30px]"
            src={MaiolnirIcon}
          />
          <div>
            <a href="#">
              <span className="from-accent via-primary bg-gradient-to-r to-[#dd0617] bg-clip-text text-xl font-bold text-transparent lg:text-2xl">
                MAIOLNIR
              </span>
            </a>
          </div>
        </div>
        <nav className="mx-auto h-full">
          <ul className="text-text ml-6 hidden h-full items-center lg:flex lg:justify-between lg:gap-20">
            {menu.map((item) => {
              const Icon = item.icon;
              return (
                <li className="hover:border-accent group flex h-full items-center border-b-4 border-b-transparent">
                  <a
                    className="text-text group-hover:text-accent flex items-center gap-1 text-lg"
                    href={`#${item.id.toLowerCase()}`}
                  >
                    <Icon size={25} className="pt-0" />
                    <span className="">{item.id}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <button className="bg-accent focus:ring-text hover:bg-primary group relative mr-auto hidden items-center justify-center  gap-1 rounded-lg px-3 py-3  text-lg font-bold text-white transition-all duration-300 focus:outline-none focus:ring-4 lg:flex">
          <span>Contact</span>
          <HiArrowSmRight
            className="transform transition-transform duration-300 group-hover:translate-x-1"
            size={18}
          />
        </button>
      </div>

      {/* Mobile Hamburger Menu and Modal */}
      <div className="absolute right-4 lg:hidden">
        <div className="relative z-50">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={24}
            color="#F76C00"
            rounded
            label="Show menu"
          />
        </div>

        {/* Modal and Menu */}
        {isOpen && (
          <AnimatePresence>
            <div
              onClick={() => setOpen(false)}
              className="fixed bottom-0 left-0 right-0 top-0 bg-gray-500 bg-opacity-30"
            >
              <nav className="relative top-[65px] -z-[50] mx-auto w-[100vw] rounded border bg-white px-1">
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
                      <li className="border-b border-b-gray-200 pb-2">
                        <motion.a
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 100 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          onClick={() => setOpen((prev) => !prev)}
                          className={
                            "hover:bg-info active:bg-info flex w-full  justify-start gap-2 rounded  pt-3 hover:bg-opacity-10 active:text-white"
                          }
                          href={`#${item.id.toLowerCase()}`}
                        >
                          <Icon size={30} color="#333" className="pt-0" />
                          <div className="relative flex w-full items-center justify-between">
                            <span className="relative  text-2xl font-normal text-[#333]">
                              {item.id}
                            </span>
                            <div className="relative">
                              <FaChevronRight
                                size={15}
                                className="text-[#333]"
                              />
                            </div>
                          </div>
                        </motion.a>
                      </li>
                    );
                  })}
                  <li className="border-b border-b-gray-200 pb-2">
                    <motion.a
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 100 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => setOpen((prev) => !prev)}
                      className={
                        "hover:bg-info active:bg-info flex w-full  justify-start gap-2 rounded  pt-3 hover:bg-opacity-10 active:text-white text-primary"
                      }
                      href={`#contact`}
                    >
                      <GrContact size={30} className="pt-0" />
                      <div className="relative flex w-full items-center justify-between">
                        <span className="relative  text-2xl font-normal">
                          {"Contact"}
                        </span>
                        <div className="relative">
                          <FaChevronRight size={15} className="text-[#333]" />
                        </div>
                      </div>
                    </motion.a>
                  </li>
                </motion.ul>
              </nav>
            </div>
          </AnimatePresence>
        )}
      </div>
    </header>
  );
}
