import { FaArrowRightLong } from "react-icons/fa6";
import { GrTools } from "react-icons/gr";

const Card = ({
  className,
  title,
  src,
  path,
  description,
}: {
  className: string;
  title: string;
  src: string;
  path: string;
  description: string;
}) => {
  return (
    <div className="border-error group relative mx-10 overflow-hidden rounded shadow">
      <div className="relative flex h-full flex-col md:flex-row">
        <div
          style={{
            backgroundImage: `url('${src}')`,
            backgroundSize: "cover",
          }}
          className={`${className} h-[250px] w-[300px] flex-shrink-0 flex-grow-0 overflow-hidden`}
        ></div>
        <div className="flex flex-col justify-between">
          <p className="text-info inline-block px-4 pb-4 pt-4 font-semibold leading-relaxed">
            <span className="text-text font-semibold">{title}: </span>
            {description}
          </p>
          <div className="px-4 py-6 md:flex md:justify-center">
            <a
              href={path}
              target="_blank"
              className="focus:ring-text bg-accent group mx-5 flex items-center justify-center gap-3 rounded-lg py-2 text-lg font-bold text-white transition-all duration-200 hover:bg-yellow-400 focus:outline-none focus:ring-4 md:mx-20 md:max-w-[250px] md:px-10 md:py-3"
            >
              <span className="text-xl font-semibold">Go to Artifact</span>
              <FaArrowRightLong
                className="transform transition-transform duration-200 group-hover:translate-x-1"
                size={20}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ArtifactsSection() {
  return (
    <section className="mt-28" id="artifacts">
      <div className="text-secondary mx-auto flex flex-col gap-4">
        <div className="flex flex-col gap-10">
          <div className="container mx-auto mb-10 px-5">
            <h1 className="mx-auto mb-4 flex items-center gap-2 text-4xl font-bold md:mx-0">
              <GrTools />
              Artifacts
            </h1>
            <p className="text-info leading-7">
              On each interaction with companies we may create new tools such as
              open source repositories that helped us solve a given problem. We
              call those as <i>artifacts</i> and this section is dedicated to
              listing all we have produced so far.
            </p>
          </div>
        </div>
        <div className="bg-gray-100 pb-20 pt-20">
          <div className="container mx-auto grid grid-cols-1 gap-24">
            <Card
              className="bg-white"
              title="Dr.Llama"
              src="https://miro.medium.com/v2/resize:fit:750/format:webp/1*yrWBYgvTjUlvZFD6xpiRjA.jpeg"
              description={`Video explaining in details how Dr.Llama
                works, from the Llama model up to the implementation of a customized
                transformer architecture. The goal of the system is to make automatic interpretation of blood reports.`}
              path="https://youtu.be/3yaJ-7k_Y1o"
            />
            <Card
              className="bg-black"
              title="dbt-flow"
              src="https://github.com/WillianFuks/dbt-flow/blob/master/imgs/dbt_flow_transparent_bg.png?raw=true"
              description={`This tool was created to help us implement the concept of unit-tests for SQL queries
                on top of dbt. Mocked data is created for the desired tables and a test is performed on a final node
                to confirm the transformations worked. The tool is open source.
              `}
              path="https://github.com/WillianFuks/dbt-flow/tree/master"
            />
            <Card
              className="bg-black"
              title="tfcausalimpact"
              src="https://raw.githubusercontent.com/WillianFuks/tfcausalimpact/master/notebooks/tfcausal_plot_example.png"
              description={`Many companies have the challenge of making some change to their business and not being
                able to properly measure the impact of such changes. tfcausalimpact (tfci) was created to help companies
                to run A/B tests in scenarios where the control group A is not available. The package is based on a original
                one implemented in R, this time now it's implemented in Python. The tool is open source.`}
              path="https://github.com/WillianFuks/tfcausalimpact"
            />
            <Card
              className="bg-white"
              title="djwto"
              src="https://raw.githubusercontent.com/WillianFuks/djwto/master/logo.png"
              description={`This tool was implemented when we were interacting with Wintaylor/DPSP. We needed a quick
                and cheap jwt-based auth mechanism for Django but the ones available at the time didn't offer what we needed
                so we implemented djwto from scratch. The tool is open source.`}
              path="https://github.com/WillianFuks/djwto"
            />
            <Card
              className="bg-black"
              title="pySearchML"
              src="https://avatars.githubusercontent.com/u/4665485?v=4"
              description={`Complete elasticSearch based system built on top of Kubernetes and Katib. All the infra and code is open source.`}
              path="https://github.com/WillianFuks/pySearchML"
            />
            <Card
              className="bg-white"
              title="pyClickModels"
              src="https://github.com/WillianFuks/pyClickModels/raw/master/notebooks/dbn.png"
              description={`One of the toughest implementations we ever did. This tool can compute a proxy for the concept of "Judgments" which
                stablishes how good a given item is to a given search query. The code implemented uses a Dynamic Bayesian Network with binary variables optimized via
                maximum likelihood. The code is open source.`}
              path="https://github.com/WillianFuks/pyClickModels"
            />
            <Card
              className="bg-black"
              title="Pong"
              src="https://github.com/WillianFuks/Pong/raw/master/pong.gif"
              description={`During our work with Karza Tech we ventured on implementing some Deep Reinforcement Learning tools. As we had to
                first develop the know-how, we implemented a system that plays Pong using direct reward optimization. The development is open sourced.`}
              path="https://github.com/WillianFuks/Pong"
            />
            <Card
              className="bg-black"
              title="Bigquery: From Zero to Half-Hero"
              src="https://avatars.githubusercontent.com/u/4665485?v=4"
              description={`This workshop was developed at GFG Dafiti.
                It's a hands-on self-paced tutorial for learning how to use BigQuery and more sophisticated techniques.`}
              path="https://github.com/WillianFuks/BigQuery-Workshop-From-Zero-To-Half-Hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
