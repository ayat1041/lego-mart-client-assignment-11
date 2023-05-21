import { useLoaderData } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'
import { Helmet } from "react-helmet";

import '@smastrom/react-rating/style.css'
const ToyDetails = () => {
  const toy = useLoaderData();

  const {
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
      <div className="hero min-h-screen bg-base-200">
      <Helmet>
        <meta charSet="utf-8" />
        <title>LegoMart | {toy_name}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={img}
            className="lg:w-1/3 rounded-lg shadow-2xl"
          />
          <div className="lg:pl-8">
            <h1 className="text-2xl font-bold mb-5">{toy_name}</h1>
            <h1 className="text-xl font-bold mb-5">Rated {rating}</h1>
            <p className="py-1">
              <span className="font-bold">Seller - </span>
              {seller}
            </p>
            <p className="py-1">
              <span className="font-bold">Seller Email - </span>
              {seller_mail}
            </p>
            <p className="py-1">
              <span className="font-bold">Available quantity - </span>
              {quantity}
            </p>
            <p className="py-1 pt-4 mb-4 w-[350px] text-justify text-base text-slate-400">
              {description}
            </p>
            <button className="btn border-none bg-red-600">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
