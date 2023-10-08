
const News = () => {
    return (
<div className="container my-24 mx-auto md:px-6">
  <section className="mb-32 text-center md:text-left">
    <h2 className="mb-12 text-center text-3xl font-bold">Latest articles</h2>

    <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
      <div className="mb-6 md:mb-0">
        <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
          data-te-ripple-init data-te-ripple-color="light">
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/018.jpg" className="w-full" alt="Louvre" />
            <div
              className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
            </div>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-2xl font-bold">Welcome to California</h3>
        <div
          className="mb-3 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 md:justify-start">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
            stroke="currentColor" className="mr-2 h-5 w-5">
            
          </svg>
          Travels
        </div>
        <p className="mb-6 text-neutral-500 dark:text-neutral-300">
          <small>Published <u>13.01.2022</u> by
            <a href="#!">Anna Maria Doe</a></small>
        </p>
        <p className="text-neutral-500 dark:text-neutral-300">
          Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat
          vulputate. Ut vulputate est non quam dignissim elementum. Donec a
          ullamcorper diam.
        </p>
      </div>
    </div>

    <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
      <div className="mb-6 md:order-2 md:mb-0">
        <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
          data-te-ripple-init data-te-ripple-color="light">
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/032.jpg" className="w-full" alt="Louvre" />
          <a href="#!">
            <div
              className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
            </div>
          </a>
        </div>
      </div>

      <div className="md:order-1">
        <h3 className="mb-3 text-2xl font-bold">Exhibition in Paris</h3>
        <div
          className="mb-3 flex items-center justify-center text-sm font-medium text-primary dark:text-primary-400 md:justify-start">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
            stroke="currentColor" className="mr-2 h-4 w-4">
          </svg>
          Art
        </div>
        <p className="mb-6 text-neutral-500 dark:text-neutral-300">
          <small>Published <u>12.01.2022</u> by
            <a href="#!">Halley Frank</a></small>
        </p>
        <p className="text-neutral-500 dark:text-neutral-300">
          Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet diam
          orci, nec ornare metus semper sed. Integer volutpat ornare erat
          sit amet rutrum.
        </p>
      </div>
    </div>

    <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
      <div className="mb-6 md:mb-0">
        <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
          data-te-ripple-init data-te-ripple-color="light">
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/059.jpg" className="w-full" alt="Louvre" />
          <a href="#!">
            <div
              className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
            </div>
          </a>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-2xl font-bold">Stock market boom</h3>
        <div className="mb-3 flex items-center justify-center text-sm font-medium text-yellow-600 md:justify-start">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
            stroke="currentColor" className="mr-2 h-5 w-5">
          </svg>
          Business
        </div>
        <p className="mb-6 text-neutral-500 dark:text-neutral-300">
          <small>Published <u>10.01.2022</u> by
            <a href="#!">Joe Svan</a></small>
        </p>
        <p className="text-neutral-500 dark:text-neutral-300">
          Curabitur tristique, mi a mollis sagittis, metus felis mattis
          arcu, non vehicula nisl dui quis diam. Mauris ut risus eget massa
          volutpat feugiat. Donec.
        </p>
      </div>
    </div>
  </section>

</div>
    );
};

export default News;