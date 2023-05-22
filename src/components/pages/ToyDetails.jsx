import { useLoaderData } from "react-router-dom";
// eslint-disable-next-line
import { Rating } from '@smastrom/react-rating'
import { Helmet } from "react-helmet";

import '@smastrom/react-rating/style.css'
const ToyDetails = () => {
  const toy = useLoaderData();

  const {
    // eslint-disable-next-line
    _id,
    toy_name,
    img,
    seller,
    seller_mail,
    quantity,
    price,
    rating,
    description,
  } = toy;
  return (
    <div>
      {/* <h2>Toy name: {toy_name}</h2> */}
      <div className="hero min-h-screen bg-gradient-to-b from-white via-slate-200 to-white">
      <Helmet>
        <meta charSet="utf-8" />
        <title>LegoMart | {toy_name}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={img}
            className="cursor-magnify lg:w-1/3 hover:lg:w-1/2 transition-all ease-out duration-300 rounded-lg shadow-xl border-4 border-yellow-200"
          />
          <div className="lg:pl-8">
            <h1 className="text-2xl lg:text-3xl font-bold mb-5 text-yellow-500 drop-shadow-sm">{toy_name}</h1>
            <h1 className="text-xl font-bold mb-5">Rated <span className="text-green-800 text-2xl">{rating}</span></h1>
            <p className="py-0">
              <span className="font-bold">Seller - </span>
              {seller}
            </p>
            <p className="py-0">
              <span className="font-bold">Seller Email - </span>
              {seller_mail}
            </p>
            <p className="py-0">
              <span className="font-bold">Available quantity - </span>
              {quantity}
            </p>
            
            <p className="py-1 pt-4 mb-2 w-[350px] text-justify text-base text-slate-400">
              {description}
            </p>
            <p className="py-1 mb-4 text-3xl font-bold text-green-800">
              <span className="font-bold text-xl text-black">Price - </span>
              $ {price}
            </p>
            <button className="btn transition-all duration-300 ease-out h-full border-none bg-green-700 hover:bg-green-600 text-sm hover:text-lg  text-white font-bold px-4 my-5 py-2 shadow-lg">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
