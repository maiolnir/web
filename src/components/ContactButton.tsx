import { FaArrowRightLong } from "react-icons/fa6";

export default function ContactButton({ size, className }: { size: number, className?: string }) {
  return (
    <button className={`${className} bg-accent focus:ring-text group items-center justify-center gap-3 rounded-lg text-lg font-bold text-white transition-all duration-100 hover:bg-yellow-400 focus:outline-none focus:ring-4`}>
      <span>CONTACT</span>
      <FaArrowRightLong
        className="transform transition-transform duration-100 group-hover:translate-x-1"
        size={size}
      />
    </button>
  );
}
