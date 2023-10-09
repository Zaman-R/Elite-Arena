import { useLoaderData } from 'react-router-dom';
import Navbar from '../Home/Components/Navbar';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import Reviews from './Components/Reviews';
import News from './Components/News';
import Services from './Components/Services';

const Home = () => {
     
  const x = useLoaderData();


    return (
        <div className=''>
            <Navbar></Navbar>
            <Banner></Banner>
            <News></News>
            <div className=" bg-[#A1A1A1]">
            <div className=' w-full mx-auto'><Services x={x}></Services></div>
            </div>         
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;