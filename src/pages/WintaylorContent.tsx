export default function WintaylorContent() {
  return (
    <>
      <div className="h-full">
        <div className="container mx-auto bg-white pt-[50px] md:pt-[80px]">
          <h1 className="font-medieval text-accent mb-10 text-center text-4xl md:text-6xl">
            Wintaylor
          </h1>
          <div className="text-text overflow-auto px-4">
            <img
              className="float-left mb-3 mr-5 h-[150px] w-[150px] md:ml-0 md:h-[300px] md:w-[300px]"
              src="https://saudedigitalnews.com.br/wp-content/uploads/2018/10/Grupo-DSP.png"
            />
            <p className="text-xl leading-normal">
              We worked together with the company <i>Wintaylor</i> to offer a machine-learning based
              solution for <em>DPSP</em>, one of the largest drugstores retails of Brazil. The challenge
              was to make accurate predictions of products demand on each store so it'd be possible to
              optimize employees allocation.
            </p>
            <p className="mt-5 text-xl leading-normal">
              The solution was built on top of Azure cloud services and it heavily made use of Spark clusters.
              We used the tool to process in parallel thousands of works making predictions for products and stores.
            </p>
            <p className="mt-5 text-xl leading-normal">
              The final solution made use of {" "}
              <a
                className="text-blue-500 hover:underline"
                href="https://www.statsmodels.org/stable/index.html"
              >Statsmodels</a> which allowed us to reach accuracy of <b>95%</b> while minimizing confidence intervals range.
            </p>
            <p className="mt-5 text-xl leading-normal">
              Thanks to statsmodels results were obtained in a few minutes which turned out to be more than <b>10x</b> faster than
              previous solutions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
