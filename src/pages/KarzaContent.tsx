export default function KarzaContent() {
  return (
    <>
      <div className="h-full">
        <div className="container mx-auto bg-white pt-[50px] md:pt-[80px]">
          <h1 className="font-medieval text-accent mb-10 text-center text-4xl md:text-6xl">
            Karza Technologies
          </h1>
          <div className="text-text overflow-auto px-4">
            <img
              className="float-left mb-3 mr-5 h-[150px] w-[150px] md:ml-0 md:h-[300px] md:w-[300px]"
              src="https://karza.in/images/karza-logo2.svg"
            />
            <p className="text-xl leading-normal">
              This was a work rendered for another European based company. This
              time the challenge was a prediction one where we used deep
              learning frameworks and tools to make the best possible
              predictions for sales of each item for the customers eCommerces.
            </p>
            <p className="mt-5 text-xl leading-normal">
              The challenge was quite difficult and we could only make it work
              for stores that already have enough data points for the training
              process. Still, the interaction was quite successfull, it's from
              Karza that we further develop the tool{" "}
              <a
                className="text-blue-500 hover:underline"
                href="https://github.com/WillianFuks/tfcausalimpact"
              >
                tfcausalimpact
              </a>{" "}
              as well as initial knowledge on{" "}
              <a
                className="text-blue-500 hover:underline"
                href="https://github.com/WillianFuks/Pong"
              >
                DRLs{" "}
              </a>
              was acquired.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
