const Slider = () => {
  return (
    <div className="px-6 py-12 text-center md:px-12 lg:text-left bg-[#A1A1A1]">
    <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl xl:px-32">
      <div className="grid items-center lg:grid-cols-2">
        <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
          <div
            className="block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px]">
            <h1 className="mt-2 mb-12 text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl text-stone-100">
              Arena Events , <br /> <span className=" text-blue-400">for your Gaming</span>

              
            </h1>
            
          </div>
        </div>
        <div className="md:mb-12 lg:mb-0">
          <img src="https://i.ibb.co/9tycMX5/photo-1535223289827-42f1e9919769.jpg"
            className="w-full rounded-lg shadow-lg dark:shadow-black/20" alt="" />
        </div>
      </div>
    </div>
  </div>
  );
};

export default Slider;
