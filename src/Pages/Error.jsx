import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
          <div className="w-1/2 mx-auto">
            <h2>Oops!!! </h2>
            <Link to="/">Go back to home</Link></div>
        </div>
    );
};

export default ErrorPage;