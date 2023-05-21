import { useLoaderData } from "react-router-dom";
import TableRow from "../Shared/TableRow";

const AllToys = () => {
  const data = useLoaderData();
  return (
    <div>
      <div className="w-100 bg-red-600 mx-auto">
        <div className="input-group w-max bg-yellow-500 mx-auto">
          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered"
          />
          <button className="btn btn-square">
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
              <th className="max-w-[300px]">Details</th>
            </tr>
          </thead>
          <tbody>
            {data.map((toy) => (
              <TableRow key={toy._id} toy={toy}></TableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
