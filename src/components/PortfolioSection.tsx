import * as React from "react";
import { TbAnalyze } from "react-icons/tb";
import { FaReadme } from "react-icons/fa6";
import { GiThorHammer } from "react-icons/gi";
import { GiCycle } from "react-icons/gi";

import { MdDocumentScanner } from "react-icons/md";

const Card = ({
  text,
  icon,
  children,
}: {
  text: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <div className="border-info relative mx-auto w-[300px] rounded-md  bg-white px-6 py-8 shadow-lg">
      <div className="border-accent text-accent absolute left-1/2 top-0 flex h-[50px] w-[50px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-white text-3xl font-bold">
        {icon}
      </div>
      <p className="text-error mb-4 text-center text-2xl font-semibold">
        {text}
      </p>
      <div className="text-info leading-7">{children}</div>
    </div>
  );
};

export default function PortfolioSection() {
  return (
    <section className="mt-28" id="portfolio">
      <div className="text-secondary mx-auto flex flex-col gap-4">
        <div className="flex flex-col gap-10">
          <div className="container mx-auto mb-10 px-5">
            <h1 className="mx-auto mb-4 flex items-center gap-2 text-4xl font-bold md:mx-0">
              <MdDocumentScanner />
              Portfolio
            </h1>
            <p className="text-info leading-7">
              Here you'll find all projects we worked on so far. You'll find all
              sorts of companies and sectors, as well as everything related to
              data processing and performance optimization.
            </p>
          </div>
        </div>
        <div className="h-[1000px] bg-gray-700 pt-10">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="col-span-1 h-[400px] max-w-1/2 overflow-hidden rounded relative bg-black mx-10">
              <div className="bg-accent flex h-[30px] items-center justify-between p-5 text-xl font-semibold text-white z-50">
                <p className="mx-auto">Dr.Llama</p>
              </div>
              <img 
                className="object-contain h-full w-full"
                src="https://miro.medium.com/v2/resize:fit:750/format:webp/1*yrWBYgvTjUlvZFD6xpiRjA.jpeg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
