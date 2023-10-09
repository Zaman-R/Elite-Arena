import { Link } from "react-router-dom";

const Card = ({val}) => {
    const {id,image,title,description,price} = val





    return (
        <div className="mb-12">
        
        <div className=" max-w-xl mx-auto bg-white border border-gray-200 rounded-lg shadow-lg dark:shadow-black/20 dark:bg-[hsla(0,0%,5%,0.55)] dark:border-gray-400" >
                <>
                    <img src={image} className="rounded-t-lg max-fit"/>
                </>
                <div className="p-5">
                <h2 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h2>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}.</p>
                    <Link to={`/serviceInfo/${id}?amount=${price}`} ><button className="btn">See More</button></Link>
                </div>

            </div>


            
            
        </div>
    );
};

export default Card;



{/* <>
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

        <img className="rounded-t-lg" src={image} alt="" />

    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}.</p>
        <Link to={`/serviceInfo/${id}?amount=${price}`} ><button className="btn">See More</button></Link>
        
    </div>
</> */}