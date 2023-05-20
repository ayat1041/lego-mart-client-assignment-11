import { Link } from "react-router-dom";

const ToyCard = ({toy}) => {

  const {_id,toy_name,img,price,rating} = toy;
  console.log(img);
  return (
    <div className="card w-96 glass p-5 bg-gradient-to-b from-[#FFFFFF] to-[#FFFFDD] rounded-none">
      <figure>
        <img
        className="h-[250px] rounded-lg"
          src={img}
          alt="car!"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{toy_name}</h2>
        <p>Price - ${price}</p>
        <p>Rating - {rating}</p>
        <p></p>
        <div className="card-actions justify-center mt-5">

          <Link to={`/toydetails/${_id}`}><button className="btn border-0 rounded-none shadow-xl bg-red-500">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
