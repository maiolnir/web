import { FaArrowRightLong } from "react-icons/fa6";
import { MdDocumentScanner } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Card = ({
  title,
  src,
  sector,
  path
}: {
  title: string;
  src: string;
  sector: string;
  path: string
}) => {
  const navigate = useNavigate();
  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="max-w-1/2 group relative col-span-1 mx-10 h-[400px] overflow-hidden rounded bg-black">
      <div className="bg-accent flex items-center justify-between p-5 text-2xl font-semibold text-white">
        <p className="mx-auto">{title}</p>
      </div>
      <div className="relative">
        <img className="h-full w-full object-contain" src={src} />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70"></div>
      </div>
      <div className="absolute bottom-4 left-5 right-5 flex flex-col gap-3 rounded bg-white px-4 py-6 opacity-0 group-hover:opacity-100">
        <p className="text-primary font-semibold">{sector}</p>
        <button
          onClick={() => handleClick(path)}
          className="focus:ring-text bg-info group flex items-center justify-center gap-3 rounded-lg py-2 text-lg font-bold text-white transition-all duration-200 hover:bg-yellow-400 focus:outline-none focus:ring-4"
        >
          <span className="text-xl font-semibold">Explore</span>
          <FaArrowRightLong
            className="transform transition-transform duration-200 group-hover:translate-x-1"
            size={20}
          />
        </button>
      </div>
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
          <div className="container mx-auto grid grid-cols-1 gap-5 md:grid-cols-3">
            <Card
              title="Dr.Llama"
              src="https://miro.medium.com/v2/resize:fit:750/format:webp/1*yrWBYgvTjUlvZFD6xpiRjA.jpeg"
              sector="Healthcare Startup"
              path="/portfolio/drllama"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
