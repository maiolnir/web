export default function BlueMetricsContent() {
  return (
    <>
      <div className="h-full">
        <div className="container mx-auto bg-white pt-[50px] md:pt-[80px]">
          <h1 className="font-medieval text-accent mb-10 text-center text-4xl md:text-6xl">
            Bluemetrics
          </h1>
          <div className="text-text overflow-auto px-4">
            <img
              className="float-left mb-3 mr-5 h-[150px] w-[150px] md:ml-0 md:h-[300px] md:w-[300px]"
              src="https://bluemetrics.com.br/wp-content/themes/bluemetrics/assets/dist/images/logo.svg"
            />
            <p className="text-xl leading-normal">
              Bluemetrics was one of the first customers that we ever had the pleasure to interact with!
              Here our challenge was to help the company working with a third-party business to build
              an automated solution for credit analysis.
            </p>
            <p className="mt-5 text-xl leading-normal">
              After a thorough examination of the problem the solution was a decision based tree manipulated in order to help
              analysts on their decision making.
            </p>
            <p className="mt-5 text-xl leading-normal">
              The final solution ended up revealing several new possibilities which increased safety for lending money as well as
              the interest rate recommended for each transaction.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
