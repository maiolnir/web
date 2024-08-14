export default function Footer() {
  return (
    <div className="relative mt-4 flex h-[150px] w-full justify-center bg-gradient-to-br from-[#222] to-[#444] px-6 pt-10 md:mt-10 md:h-[300px] md:pt-32">
      <div className="from-accent via-primary to-accent font-regular flex flex-col bg-gradient-to-bl bg-clip-text text-transparent ">
        <span className="font-medieval text-center text-xl md:text-5xl">
          MAIOLNIR
        </span>
        <p className="text-center text-sm md:text-base">&copy; Copyright Maiolnir</p>
      </div>
    </div>
  );
}
