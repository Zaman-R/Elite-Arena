
const Reviews = () => {
    return (
<div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">

<div className="relative mx-0 mt-4 flex flex-col md:flex-row items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">

  <img
    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
    alt="tania andrew"
    className="relative inline-block h-[58px] w-[58px] md:h-[80px] md:w-[80px] !rounded-full object-cover object-center"
  />

  <div className="flex flex-col md:flex-row w-full gap-0.5 md:gap-4">
    <div className="flex items-center justify-between w-full">
      <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
        Tania Andrew
      </h5>
      <div className="5 flex items-center gap-0">
        {/* Add your star icons here */}
      </div>
    </div>
    <p className="block font-sans text-base font-light leading-relaxed text-blue-gray-900 antialiased md:max-w-md">
      Frontend Lead @ Google
    </p>
  </div>
</div>

<div className="mb-6 p-0">
  <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
    I found a solution to all my design needs from Creative Tim. I use them
    as a freelancer in my hobby projects for fun! And  really affordable,
    very humble guys !!!
  </p>
</div>
</div>

    );
};

export default Reviews;