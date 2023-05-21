import { useLoaderData } from "react-router-dom";
import TableRow from "../Shared/TableRow";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

const AllToys = () => {
  const data = useLoaderData();
  const [toys, setToys] = useState(data);

  const notify = () => toast("Nothing found :(");
  const handleSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const query = form.query.value;
    const results = data.filter((toy) =>
      toy.toy_name.toLowerCase().includes(query.toLowerCase())
    );
    if (results.length) {
      setToys(results);
    } else {
      notify();
      setToys(data);
    }
    console.log(query, results);
  };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>LegoMart | All toys</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="w-100 my-10">
        <form onSubmit={handleSearch}>
          <div className="input-group w-max mx-auto">
            <input
              type="text"
              name="query"
              placeholder="Search toy by name.."
              className="input input-bordered"
            />
            <button
              type="submit"
              className="btn btn-square bg-red-600 border-none"
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
      <h1 className="text-3xl lg:text-5xl font-bold text-center my-10">
        All toys in our collection
      </h1>
      <div className="overflow-x-auto my-10 -z-10 container mx-auto">
        <table className="table table-zebra mx-auto">
          {/* head */}
          <thead>
            <tr>
              <th style={{ zIndex: "-30" }}>Seller</th>
              <th>Toy Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {toys?.map((toy) => (
              <TableRow key={toy._id} toy={toy}></TableRow>
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
