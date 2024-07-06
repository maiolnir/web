import { useState } from "react";
import Hamburger from "hamburger-react";
import MaiolnirIcon from "../assets/hammerIcon.svg";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="flex h-[60px] items-center justify-center border-b-[1px] border-b-[#F7A712] bg-white">
      <div className="flex translate-x-[-10px] items-center gap-1 ">
        <img className="h-[20px] w-[20px]" src={MaiolnirIcon} />
        <div className="ml-auto mr-auto">
          <span className="bg-gradient-to-tr from-[#F7A712] via-[#F76C00] to-[#A20021] bg-clip-text text-2xl font-black text-transparent ">
            Maiolnir
          </span>
        </div>
      </div>
      <div className="absolute right-4">
        <Hamburger toggled={isOpen} toggle={setOpen} size={20} color="#171717" />
      </div>
    </div>
  );
}
