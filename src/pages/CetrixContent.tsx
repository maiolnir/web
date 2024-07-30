export default function CetrixContent() {
  return (
    <>
      <div className="h-full">
        <div className="container mx-auto bg-white pt-[50px] md:pt-[80px]">
          <h1 className="font-medieval text-accent mb-10 text-center text-4xl md:text-6xl">
            Cetrix
          </h1>
          <div className="text-text overflow-auto px-4">
            <img
              className="float-left mb-3 mr-5 h-[150px] w-[150px] md:ml-0 md:h-[300px] md:w-[300px]"
              src="https://cdn-images-1.medium.com/max/1067/1*9xpfYciBgbZPZwu0fuG-gw.png"
            />
            <p className="text-xl leading-normal">
              Welcome to one of the coolest jobs we ever undertook! This is a
              consultancy work rendered with the company <i>Cetrix</i> where we
              built an optimization tool for a big company in Brazil in the
              sector of Food and Agriculture but we can't disclose its name due
              NDA.
            </p>
            <p className="mt-5 text-xl leading-normal">
              The project used linear optimization techniques to optimize the
              allocation and distribution of containers of food and goods
              worldwide.
            </p>
            <p className="mt-5 text-xl leading-normal">
              The solution was obtained with{" "}
              <a
                className="text-blue-500 hover:underline"
                href="https://www.cvxpy.org/"
              >
                cvxpy{" "}
              </a>
              a powerful open source tool that allowed us to fully optimize the containers distribution. Final results were roughly <b>1400x</b> faster than before
              and expenses cuts were in the range of <b>50%</b>.
            </p>
            <p className="mt-5 text-xl leading-normal">
              This taught us the lesson that despite the usefullness of Excel, for better results there are better tools, even in the OS community.
            </p>
            <p className="mt-5 text-xl leading-normal">
              We wrote a detailed post explaining all that was implemented, you can check it here.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
