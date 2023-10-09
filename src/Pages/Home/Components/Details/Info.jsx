import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Info = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const donation = data.find((item) => item.id === parseInt(id));

  return (
     
    <div>
    <Navbar></Navbar>
    <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
      <div className="mb-6 md:mb-0">
        <div
          className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img
            src={donation.image}
            className="w-full"
            alt="Louvre"
          />
          <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-2xl font-bold">
          {donation.title}
        </h3>
        <h2 className="text-sm font-bold mb-5">Price : ${donation.price}</h2>
        <p className="text-black"> {donation.long_description}
        </p>
      </div>
    </div>
   
   <Footer></Footer>

</div>
  );
};

export default Info;
