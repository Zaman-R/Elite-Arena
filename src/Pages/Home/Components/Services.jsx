import Card from "./Details/Card";
import PropTypes from 'prop-types';

const Services = ({ x }) => {
    console.log(x);
    return (
        <>
          <h2 className="mb-12 text-center text-4xl font-bold pt-12"> Our Services </h2>
          <div className="grid md:grid-cols-3 my-20">
          {
            x.map(val => <Card key={val.id} val={val} ></Card>)
          }
          </div>  
        </>
    );
};


Services.propTypes = {
    x: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            // Define other expected prop types and validations here
        })
    ).isRequired,
};
export default Services;
