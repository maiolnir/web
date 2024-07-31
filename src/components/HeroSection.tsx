import Hammer from "../assets/manuel-salinas-1pZqh6NVHDc-unsplash.jpg";
import ContactButton from "./ContactButton";

export default function HeroSection() {
  return (
    <>
      <section>
        <div className="relative h-[415px] w-full bg-gradient-to-br from-[#222] to-[#444] px-6 py-10 lg:h-[650px]">
          <img
            className="absolute bottom-0 left-1/2 h-[200px] w-[200px] -translate-x-1/2 transform opacity-20 lg:left-auto lg:right-40 lg:h-1/2 lg:translate-x-0 lg:transform"
            src={Hammer}
          />
          <div className="container relative mx-auto h-full font-serif text-[#F8F8F8] lg:pt-8">
            <div className="flex flex-col justify-start gap-5 lg:w-1/2 lg:gap-10">
              <h1 className="text-4xl font-black leading-none lg:text-6xl xl:text-[80px]">
                Customized{" "}
                <span className="from-accent bg-gradient-to-r to-red-400 bg-clip-text text-transparent">
                  Data
                </span>{" "}
                Solutions For Your Business
              </h1>
              <p className="text-[20px] leading-relaxed lg:w-2/3 lg:text-[22px]">
                From data engineering to machine learning, we create bespoke
                solutions that works for you and only{" "}
                <span className="text-accent rounded bg-gray-700 p-1 text-2xl">
                  you
                </span>
                !
              </p>
              <ContactButton
                className="relative mt-2 flex w-2/3 max-w-[150px] px-1 py-2 lg:mx-0 lg:-mt-4 lg:px-3 lg:py-4"
                size={18}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
