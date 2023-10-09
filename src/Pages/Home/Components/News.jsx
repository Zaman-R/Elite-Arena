const News = () => {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32 text-center md:text-left">
        <h2 className="mb-12 text-center text-4xl font-bold">Latest Updates</h2>

        <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
          <div className="mb-6 md:mb-0">
            <div
              className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <img
                src="https://i.ibb.co/SP5r5pW/c5bb2dd4e1804bb53390e8c70cbf11d3d2c86426-1200x628.webp"
                className="w-full"
                alt="Louvre"
              />
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-2xl font-bold">
              Days Gone Update 1.7 Patch Notes:
            </h3>
            <p className="mb-6 text-black">
              <small>
                Published <u>13.01.2022</u> by
                <a href="#!">Anna Maria Doe</a>
              </small>
            </p>
            <p className="text-black">
              This update brings the game up to version 1.7, and follows in the
              footsteps of several more PlayStation exclusives which have
              received updates in the past few days and weeks in preparation for
              the PS5 launch in November.
            </p>
          </div>
        </div>

        <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
          <div className="mb-6 md:order-2 md:mb-0">
            <div
              className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <img
                src="https://i.ibb.co/0DX5tTQ/Unreal-Engine-industry-games-News-UEWeb-Games-blog-share-img3-1200x630-1fbacc68fcbff51163d2ecf620015.jpg"
                className="w-full"
                alt="Louvre"
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
              </a>
            </div>
          </div>

          <div className="md:order-1">
            <h3 className="mb-3 text-2xl font-bold">
              Featured free Unreal Marketplace content—September 2023
            </h3>

            <p className="mb-6 text-black ">
              <small>
                Published <u>12.01.2022</u> by
                <a href="#!">Halley Frank</a>
              </small>
            </p>
            <p className="text-black  ">
              Fancy, fancy, fancy! Whether you want to stage soirées or tell
              stories with a Victorian vibe, this Palace Hall can give you that
              dash of elegance you require.Before those fists start flying, you
              need to make the fight feel right. Download a system that comes
              complete with attack sequences, combos, targeting, blocking, and
              more so your players always feel locked in.
            </p>
          </div>
        </div>

        <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
          <div className="mb-6 md:mb-0">
            <div
              className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <img
                src="https://i.ibb.co/T1RMS6b/game-ready-ces-rtx-announcement-article-OG-1200x630.jpg"
                className="w-full"
                alt="Louvre"
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-2xl font-bold">
              NVIDIA RTX Coming To 10 More Games
            </h3>

            <p className="mb-6 text-neutral-500  dark:text-neutral">
              <small>
                Published <u>10.01.2022</u> by
                <a href="#!">Joe Svan</a>
              </small>
            </p>
            <p className="text-black ">
              NVIDIA RTX is the most advanced platform for ray tracing and AI
              technologies that are revolutionizing the ways we play and create.
              And RTX momentum continues to build. Since last CES, we have added
              over 150 RTX games and applications now supporting RTX accelerated
              innovations like GPU-accelerated ray tracing, and AI powered
              NVIDIA Deep Learning Super Sampling (DLSS).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
