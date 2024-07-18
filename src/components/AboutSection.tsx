import * as React from "react";
import { TbAnalyze } from "react-icons/tb";
import { SiDocsdotrs } from "react-icons/si";
import { FaReadme } from "react-icons/fa6";
import { GiThorHammer } from "react-icons/gi";
import { GiCycle } from "react-icons/gi";

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

export default function AboutSection() {
  return (
    <section className="mt-16" id="about">
      <div className="text-secondary mx-auto flex flex-col gap-4">
        <div className="flex flex-col gap-10">
          <div className="container mx-auto mb-10 px-5">
            <h1 className="mx-auto mb-4 flex items-center gap-2 text-4xl font-bold md:mx-0">
              <SiDocsdotrs />
              About
            </h1>
            <p className="text-info leading-7">
              At <span className="text-accent">Maiolnir</span> we build
              solutions from data engineering to data science based tools. Our
              interactions with customers are flexible and dynamic - usually it
              follows these steps:
            </p>
          </div>
          <div className="relative bg-gray-50">
            <div className="container mx-auto grid grid-cols-1 gap-14 md:grid-cols-3">
              <Card text="Inquire" icon=<TbAnalyze />>
                <p>
                  We dedicate up to a week interacting with the client. In this
                  phase we investigate potential solutions.
                </p>
              </Card>
              <Card text="Proposal" icon=<FaReadme />>
                <p>
                  We offer a detailed plan on what is intended to be implemented
                  for the next 1~2 months.
                </p>
              </Card>
              <Card text="Thunder" icon=<GiThorHammer />>
                <p>
                  Hands-on time. This period we implement the solution and make
                  adaptations along the way.
                </p>
              </Card>
              <Card text="Repeat" icon=<GiCycle />>
                <p>
                  If after the build period the client wants more
                  adaptations/changes, a new cycle begins with more hands-on
                  work.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
