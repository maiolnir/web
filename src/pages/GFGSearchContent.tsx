export default function GFGSearchContent() {
  return (
    <>
      <div className="h-full">
        <div className="container mx-auto bg-white pt-[50px] md:pt-[80px]">
          <h1 className="font-medieval text-accent mb-10 text-center text-4xl md:text-6xl">
            GFG: Search
          </h1>
          <div className="text-text overflow-auto px-4">
            <img
              className="float-left mb-3 mr-5 h-[150px] w-[150px] md:ml-0 md:h-[300px] md:w-[300px]"
              src="https://mv2-production-hub.s3.amazonaws.com/uploads/company/logo/menu_bbcbff5c1f1ded46c25d28119a85c6c2.jpg"
            />
            <p className="text-xl leading-normal">
              This is a work based on a search project implemented at GFG -
              Global Fashion Group. The system was mainly designed for online
              eCommerces and their search engine.
            </p>
            <p className="mt-5 text-xl leading-normal">
              The main challenge of this project was creating a machine-learning
              based solution to obtain a numerical representation of the
              worthness of each product being sold for each query sent as a
              search.
            </p>
            <p className="mt-5 text-xl leading-normal">
              The system does not make usage of LLMs and it's still remarkably
              powerful. As it's already integrated with Elasticsearch then
              performance is adequate for production environments.
            </p>
            <p className="mt-5 text-xl leading-normal">
              By adding a machine-learning based layer on top of search results
              it's expected that performance will increase by around <b>5~6%</b>
              on Revenue Per Session with Search.
            </p>
            <p className="mt-5 text-xl leading-normal">
              We also wrote a detailed exploration of the system, more detail
              can be found here:
            </p>
            <a
              className="flex justify-center mt-5"
              href="https://medium.com/towards-data-science/building-a-complete-ai-based-search-engine-with-elasticsearch-kubeflow-and-katib-590c7b27eb8f">
              <img src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*fGgc7zEfmPCAHIq0YbJn4g.png" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
