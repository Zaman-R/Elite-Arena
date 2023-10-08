import Footer from "../Footer";
import Navbar from "../Navbar";
import { useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";

const ServiceInfo = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const donation = data.find((item) => item.id === parseInt(id));
  console.log(id);
  return (
    <div>
      <Navbar></Navbar>

      <div className="flex flex-col items-center mx-auto bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={donation.image}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {donation.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {donation.description}
          </p>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default ServiceInfo;
