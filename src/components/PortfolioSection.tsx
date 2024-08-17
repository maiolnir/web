import { FaArrowRightLong } from "react-icons/fa6";
import { MdDocumentScanner } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Card = ({
  className,
  title,
  src,
  sector,
  path,
}: {
  className: string;
  title: string;
  src: string;
  sector: string;
  path: string;
}) => {
  const navigate = useNavigate();
  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <div
      className={`${className} max-w-1/2 group relative col-span-1 mx-10 h-[400px] overflow-hidden rounded-xl`}
    >
      <div className="bg-accent flex items-center justify-between p-3 text-2xl font-semibold text-white">
        <p className="mx-auto">{title}</p>
      </div>
      <div
        style={{
          backgroundImage: `url('${src}')`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="relative h-full"
      >
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70"></div>
      </div>
      <div className="absolute bottom-4 left-5 right-5 flex flex-col gap-3 rounded bg-white px-4 py-6 opacity-0 group-hover:opacity-100">
        <p className="text-primary font-semibold">{sector}</p>
        <button
          onClick={() => handleClick(path)}
          className="focus:ring-text bg-primary group mx-5 flex items-center justify-center gap-3 rounded-lg py-2 text-lg font-bold text-white transition-all duration-200 hover:bg-yellow-400 focus:outline-none focus:ring-4"
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
            <h1 className="font-medieval mx-auto mb-4 flex items-center gap-2 text-4xl font-bold md:mx-0">
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
        <div className="bg-gradient-to-br from-[#222] to-[#444] pb-20 pt-20">
          <div className="container mx-auto grid grid-cols-1 gap-10 md:grid-cols-3">
            <Card
              className="bg-black"
              title="Dr.Llama"
              src="https://miro.medium.com/v2/resize:fit:750/format:webp/1*yrWBYgvTjUlvZFD6xpiRjA.jpeg"
              sector="Healthcare Startup"
              path="/portfolio/drllama"
            />
            <Card
              className="bg-white"
              title="Carrefour: SOT"
              src="https://seeklogo.com/images/C/Carrefour-logo-DA86663E40-seeklogo.com.png"
              sector="Retail - online/offline"
              path="/portfolio/carrefour-sot"
            />
            <Card
              className="bg-white"
              title="Wintaylor"
              src="https://saudedigitalnews.com.br/wp-content/uploads/2018/10/Grupo-DSP.png"
              sector="Healthcare, Drugstores."
              path="/portfolio/wintaylor"
            />
            <Card
              className="bg-white"
              title="Karza Technologies"
              src="https://karza.in/images/karza-logo2.svg"
              sector="Online Retail"
              path="/portfolio/karza"
            />
            <Card
              className="bg-white"
              title="Cetrix"
              src="https://cdn-images-1.medium.com/max/1067/1*9xpfYciBgbZPZwu0fuG-gw.png"
              sector="Agriculture and Food"
              path="/portfolio/cetrix"
            />
            <Card
              className="bg-white"
              title="GFG: Search"
              src="https://mv2-production-hub.s3.amazonaws.com/uploads/company/logo/menu_bbcbff5c1f1ded46c25d28119a85c6c2.jpg"
              sector="Fashion Retail"
              path="/portfolio/gfg-search"
            />
            <Card
              className="bg-white"
              title="BlueMetrics"
              src="https://bluemetrics.com.br/wp-content/themes/bluemetrics/assets/dist/images/logo.svg"
              sector="Finance Credit"
              path="/portfolio/bluemetrics"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
