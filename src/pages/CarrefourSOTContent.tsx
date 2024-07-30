export default function CarrefourSOTContent() {
  return (
    <>
      <div className="h-full">
        <div className="container mx-auto bg-white pt-[50px] md:pt-[80px]">
          <h1 className="font-medieval text-accent mb-10 text-center text-4xl md:text-6xl">
            Carrefour: Source Of Truth (SOT)
          </h1>
          <div className="text-text overflow-auto px-4">
            <img
              className="float-left mb-3 mr-3 h-[150px] w-[150px] md:ml-0 md:h-[300px] md:w-[300px]"
              src="https://seeklogo.com/images/C/Carrefour-logo-DA86663E40-seeklogo.com.png"
            />
            <p className="text-xl leading-normal">
              We worked together with Carrefour`s data engineering team to
              install for the company the concept of the "<b>Source Of Truth</b>
              " of data (SOT).
            </p>
            <p className="mt-5 text-xl leading-normal">
              Obtaining it is not trivial, it means that the data that is
              offered to the business team is guaranteeded to be reliable and
              correct.
            </p>
            <p className="mt-5 text-xl leading-normal">
              The work lasted for more than a whole year and consisted of
              integrating with their cloud provider at the source of the data.
            </p>
            <p className="mt-5 text-xl leading-normal">
              The solution relied heavely on dbt, to the point where we
              implemented a new plugin for the community that helped us
              implement the concept of "<i>unit tests</i>" for SQL queries. We
              wrote about it in great detail, you can check it{" "}
              <a
                className="text-blue-500 hover:underline"
                href="https://willian-fuks.medium.com/dbt-flow-unit-testing-elt-transformations-3c2ac61dcb5c"
              >
                here
              </a>{" "}
              for more info.
            </p>
            <p className="mt-5 text-xl leading-normal">
              The final solution made it possible for the business team to find
              problematic stores, cohorts with lower than expected sales and
              inefficiencies that right away helped the company on cutting
              losses and improving revenue.
            </p>

            <p className="mb-3 mt-5 text-xl leading-normal">
              The plugin that was developed will remain open source. You can
              check it here:
            </p>
            <a href="https://github.com/WillianFuks/dbt-flow/tree/master">
              <img src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*JZkjaG0Z5wQca67s5pAFZg.jpeg" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
