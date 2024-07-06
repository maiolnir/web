import { useState, useRef } from "react";
import { useClickAway } from "react-use";
import Hamburger from "hamburger-react";
import MaiolnirIcon from "../assets/hammerIcon.svg";

export default function Navbar() {

  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => {
    setOpen(false);
  });

  return (
    <nav className="border-b-primary fixed flex h-[60px] w-full items-center justify-center border-b-[1px] bg-white">
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
          color="#757780"
          rounded
          label="Show menu"
        />
        {isOpen && (
          <div className="bg-info absolute -right-4 top-[54px] h-[100px] w-[100px]"></div>
        )}
      </div>
    </nav>
  );
}
