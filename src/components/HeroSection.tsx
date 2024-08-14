import Hammer from "../assets/maiolnir.jpeg";
import { ReactNode, useEffect } from "react";
import ContactButton from "./ContactButton";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SlidingDiv = ({
  direction,
  children,
}: {
  direction: string;
  children: ReactNode;
}) => {
  const controls = useAnimation();

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 1 },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ x: direction === "left" ? -40 : 40, opacity: 0 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default function HeroSection() {
  return (
    <>
      <section>
        <div className="relative h-[415px] w-full bg-gradient-to-br from-[#222] to-[#444] px-6 pt-10 lg:h-[650px]">
          <div className="font-poppins container relative mx-auto h-full text-[#F8F8F8] lg:pt-8">
            <SlidingDiv direction="left">
              <div className="relative z-30 flex flex-col justify-start gap-5 md:mt-4 lg:w-1/2 lg:gap-7">
                <h1 className="text-3xl font-bold leading-none lg:text-5xl xl:text-[70px]">
                  Customized{" "}
                  <span className="from-accent bg-gradient-to-r to-red-400 bg-clip-text text-transparent">
                    Data
                  </span>{" "}
                  Solutions For Your Business
                </h1>
                <p className="text-[20px] leading-relaxed lg:w-full lg:text-[22px]">
                  From data engineering to machine learning, we create bespoke
                  solutions that works for you and only{" "}
                  <span className="text-accent">you</span>!
                </p>
                <a
                  className="w-[150px]"
                  href="https://www.linkedin.com/in/willian-fuks-62622217"
                >
                  <ContactButton
                    className="relative mt-2 flex px-1 py-2 lg:mx-0 lg:-mt-2 lg:px-3 lg:py-4"
                    size={18}
                  />
                </a>
              </div>
            </SlidingDiv>

            <img
              className="z-1 absolute bottom-0 left-1/2 h-[200px] w-[200px] -translate-x-1/2 transform rounded opacity-20 lg:left-auto lg:right-10 lg:h-[500px] lg:w-[500px] lg:translate-x-0 lg:transform lg:opacity-100"
              src={Hammer}
            />
          </div>
        </div>
      </section>
    </>
  );
}
