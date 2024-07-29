export default function CarrefourSOTContent() {
  return (
    <>
      <div className="h-full">
        <div className="container mx-auto bg-white pt-[50px] md:pt-[80px]">
          <h1 className="font-medieval text-primary mb-10 text-center text-4xl md:text-6xl">
            Carrefour: SOT
          </h1>
          <div className="overflow-auto px-4">
            <img
              className="float-left mr-3 h-[150px] w-[150px] md:ml-0 md:h-[300px] md:w-[300px]"
              src="https://miro.medium.com/v2/resize:fit:750/format:webp/1*yrWBYgvTjUlvZFD6xpiRjA.jpeg"
            />

            <p className="text-xl leading-normal">
              Dr.Llama is the result of a consulting work rendered for an
              European-based startup whose goal was to use AI to automatically
              extract biomarkers from blood reports.
            </p>
            <p className="mt-5 text-xl leading-normal">
              Initially the solution was implemented using GPT tools, the main
              pipeline being:
            </p>
            <div className="mt-5 bg-gray-100 text-xl leading-normal">
              <ol className="flex list-inside list-decimal flex-col gap-2">
                <li>Extract text from pdf.</li>
                <li>
                  Send text to GPT models. No RAG-tool was necessary, a simple
                  Python script proved enough.
                </li>
                <li>
                  Map results with internal knowledge-base for final answer.
                </li>
              </ol>
            </div>
            <p className="mt-5 text-xl leading-normal">
              During development we realized the necessity for having a
              customized evaluation system, which was implemented using openAI`s{" "}
              <a
                className="text-blue-500 hover:underline"
                href="https://github.com/openai/evals"
              >
                Evals
              </a>{" "}
              framework.
            </p>
            <p className="mt-5 text-xl leading-normal">
              This allowed us to precisely optimize the prompting strategy.
              First results scored a success rate of <b>~70%</b>
            </p>
            <p className="mt-5 text-xl leading-normal">
              After the job was done we ventured into creating the new tool
              "Dr.Llama" which this time was based on LLama open models.
            </p>
            <p className="mt-5 text-xl leading-normal">
              Interestingly enough we found that despite Llama not being able to
              solve this challenge, by combining the GPT models with a custom
              based one results were more than <b>90%</b> successfull.
            </p>
            <p className="mb-5 mt-5 text-xl leading-normal">
              We did a YT video presenting and discussing in more details
              results. For those interested, here it follows:
            </p>
            <div className="w-full h-[200px] md:h-[315px] relative flex justify-center">
              <iframe
                width="516"
                height="315"
                src="https://www.youtube.com/embed/3yaJ-7k_Y1o?si=XAUe_R85Dx5Wisj-"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
