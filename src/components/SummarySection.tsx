import ThorHammer from "../assets/thor-hammer.svg";

export default function SummarySection() {
  return (
    <>
      <section className="bg-[#F1F1F1] px-1.5 py-2.5 lg:py-10">
        <div className="container mx-auto p-1.5 px-4 pt-6 flex">
          <p className=" text-base leading-7 text-info">

          <img
            src={ThorHammer}
            className="inline-block mr-1"
            height="30px"
            width="30px"
          />
            Thanks to tools from the open-source community and the power of the
            cloud, small teams can now implement data analytics solutions that
            compete with and even outperform those of larger companies.
            Customization enhances these solutions, driving greater value and
            results for businesses.{" "}
            <span className="text-primary">Maiolnir</span> aims at being an
            efficient provider for customized and performant solutions.
          </p>
        </div>
      </section>
    </>
  );
}
