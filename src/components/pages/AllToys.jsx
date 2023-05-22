import { useLoaderData } from "react-router-dom";
import TableRow from "../Shared/TableRow";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

const AllToys = () => {
  const data = useLoaderData();
  const [toys, setToys] = useState(data);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    if(data){
      setIsLoading(false)
    }
  },[data])

  const notify = (query) => toast(`${query} is not found`);
  const handleSearch = async(event) => {
    event.preventDefault();

    setIsLoading(true);
    const form = event.target;
    const query = form.query.value;
    const results = data.filter((toy) =>
      toy.toy_name.toLowerCase().includes(query.toLowerCase())
    );
    if (results.length) {
      setToys(results);
    } else {
      notify(query);
      setToys(data);
    }
    console.log(query, results);

    setIsLoading(false);
  };
  return (
    <div className="bg-gradient-to-b from-white via-slate-200 to-white">
      <Helmet>
        <meta charSet="utf-8" />
        <title>LegoMart | All toys</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="w-100 my-10">
        <form onSubmit={handleSearch}  data-aos="fade-right">
          <div className="input-group w-max mx-auto">
            <input
              type="text"
              name="query"
              placeholder="Search toy by name.."
              className="input input-bordered"
            />
            <button
              type="submit"
              className="btn btn-square bg-red-600 border-none hover:bg-red-900 transition-all duration-300 ease-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
      <h1 className="text-3xl lg:text-5xl font-bold text-center py-4" data-aos="fade-left">
        All toys in our collection
      </h1>
      <div className="overflow-x-auto my-10 -z-10 container mx-auto"  data-aos="fade-up">
        <table className="table table-zebra mx-auto border-4 border-red-100 shadow-lg">
          {/* head */}
          <thead>
            <tr>
              <th className="bg-red-700 text-white text-base">Seller</th>
              <th className="bg-red-700 text-white text-base">Toy Name</th>
              <th className="bg-red-700 text-white text-base">Category</th>
              <th className="bg-red-700 text-white text-base">Price</th>
              <th className="bg-red-700 text-white text-base">Quantity</th>
              <th className="bg-red-700 text-white text-base">Details</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <h1 className="text-9xl">Please wait</h1>
            ):(
              toys?.map((toy) => (
              <TableRow key={toy._id} toy={toy}></TableRow>)
              ))}
          </tbody>
        </table>
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

export default AllToys;
