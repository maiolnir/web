export default function HeroSection() {
  return (
    <>
      <section>
        <div className="relative h-[650px] w-full">
          <div className="z-50 h-full w-full bg-gradient-to-br from-[#000]  to-[#333]">
            <div className="container mx-auto flex flex-col justify-center h-full">
              <h1 className="text-7xl font-black text-[#F8F8F8] w-1/2">
                We Dig Your Data Until It Reveals!
              </h1>
            </div>
          </div>
          <div className="absolute inset-0 "></div>
        </div>
      </section>
    </>
  );
}
