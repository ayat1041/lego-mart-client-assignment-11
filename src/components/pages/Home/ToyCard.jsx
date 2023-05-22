import { useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../../providers/AuthProvider";
const ToyCard = ({toy}) => {

  const {_id,toy_name,img,price,rating} = toy;
  const {user} = useContext(AuthContext)
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
        <h2 className="card-title text-2xl drop-shadow-lg mb-2">{toy_name}</h2>
        <p className="text-xl"><span className="font-bold text-xl">Price -</span> <span className="text-2xl font-semibold mr-1 text-green-800">$</span>{price}</p>
        <p className="text-2xl font-extrabold text-yellow-500"><span className="font-bold text-slate-800 text-lg mr-1">Rated </span> {rating}</p>
        <p></p>
        {user ? 
      <div className="card-actions justify-center mt-5">
      <Link to={`/toydetails/${_id}`}><button className="btn border-0 rounded-none shadow-lg bg-red-500">View Details</button></Link>
    </div>
    :  
    <div className="card-actions justify-center mt-5">
      <Link to={`/toydetails/${_id}`}><button className="btn border-0 rounded-none shadow-lg bg-red-500">View Details</button></Link>
    </div>
      }
        
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
      />
    </div>
  );
};

export default ToyCard;
