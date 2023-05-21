import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyTableRow from "../Shared/MyTableRow";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");
  const [update, setUpdate] = useState("");
  const notify = () => toast("Successfully Updated :)");
  let toy = {
    _id: "",
    seller: "",
    toy_name: "",
    sub_category: "",
    quantity: "",
    img: "",
    price: "",
    rating: "",
    description: "",
  };
  const handleUpdateToy = (event, id) => {
    event.preventDefault();
    const form = event.target;
    const toy_name = form.toy_name.value;
    const photo = form.photo.value;
    const sub_category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const seller = form.name.value;
    const seller_mail = form.email.value;
    const updatedToy = {
      toy_name,
      img: photo,
      sub_category,
      price,
      rating,
      quantity,
      description,
      seller,
      seller_mail,
    };
    fetch(`https://lego-mart-server.vercel.app/toys/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        notify();
      });
  };
  const [objectData, setObjectData] = useState(toy);
  let {
    _id,
    seller,
    toy_name,
    sub_category,
    quantity,
    img,
    price,
    rating,
    description,
  } = objectData;

  const handleObjectDataChange = (toyData) => {
    // Update the objectData state in the parent component
    setObjectData(toyData);
  };

  useEffect(() => {
    fetch(`https://lego-mart-server.vercel.app/toys?email=${user.email}`)
      .then((res) => res.json())
      .then((toys) => {
        setData(toys);
        const sortedArray = [...toys];
        if (selectedSort === "ascending") {
          sortedArray.sort((a, b) => a.price - b.price);
        } else if (selectedSort === "descending") {
          sortedArray.sort((a, b) => b.price - a.price);
        }
        setData(sortedArray);
      });
  }, [selectedSort, user.email]);

  useEffect(() => {
    console.log(objectData);
  }, [objectData]);

  const handleSortChange = (event) => {
    const value = event.target.value;
    setSelectedSort(value);
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>LegoMart | My Toys</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {/* The button to open modal */}
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box h-max bg-gradient-to-b from-slate-300 via-slate-100 to-slate-200">
          <form
            onSubmit={() => handleUpdateToy(event, _id)}
            className="rounded px-8 pt-6 pb-8 mb-4 mx-auto"
          >
            <div className="w-full flex gap-6 justify-center">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="toyName"
                >
                  Toy Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="toyName"
                  type="text"
                  name="toy_name"
                  placeholder={toy_name}
                  defaultValue={toy_name}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="toyPhotoURL"
                >
                  Toy Photo URL
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="toyPhotoURL"
                  type="text"
                  placeholder={img}
                  defaultValue={img}
                  name="photo"
                />
              </div>
            </div>
            <div className="w-full flex gap-6 justify-center">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="category"
                >
                  Category
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="category"
                  type="text"
                  placeholder={sub_category}
                  defaultValue={sub_category}
                  name={sub_category}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="price"
                >
                  Price
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="price"
                  type="text"
                  placeholder={price}
                  defaultValue={price}
                  name={price}
                />
              </div>
            </div>
            <div className="w-full flex gap-6 justify-center">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="rating"
                >
                  Rating
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="rating"
                  type="text"
                  placeholder={rating}
                  defaultValue={rating}
                  name={rating}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="quantity"
                >
                  Available Quantity
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="quantity"
                  type="number"
                  placeholder={quantity}
                  name={quantity}
                  defaultValue={quantity}
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                placeholder={description}
                defaultValue={description}
                rows="4"
                name="description"
              ></textarea>
            </div>
            <div className="w-full flex gap-6 justify-center">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="sellerName"
                >
                  Seller Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="sellerName"
                  type="text"
                  placeholder={user?.displayName}
                  defaultValue={user?.displayName}
                  name="name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="sellerEmail"
                >
                  Seller Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="sellerEmail"
                  type="email"
                  placeholder={user?.email}
                  name="email"
                  defaultValue={user?.email}
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                POST
              </button>
            </div>
          </form>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Not today
            </label>
          </div>
        </div>
      </div>

      <h1 className="text-3xl lg:text-5xl font-bold text-center my-10">
        Your posts
      </h1>
      <div className="w-full text-center">
        <select
          onChange={handleSortChange}
          className="select select-bordered w-full max-w-xs"
        >
          <option disabled selected>
            SORT
          </option>
          <option>ascending</option>
          <option>descending</option>
        </select>
      </div>
      <div className="overflow-x-auto my-10 -z-20 container mx-auto">
        <table className="table table-zebra mx-auto">
          {/* head */}
          <thead>
            <tr>
              <th style={{ zIndex: "-11" }}>Title</th>
              <th>Photo</th>
              <th>Category</th>
              <th>Rating</th>
              <th style={{ zIndex: "-30" }}>Price</th>
              <th>Available quantity</th>
              <th>Details</th>
              <th>Remove</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((toy) => (
              <MyTableRow
                key={toy._id}
                toy={toy}
                handleObjectDataChange={handleObjectDataChange}
                setData={setData}
                data={data}
              ></MyTableRow>
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

export default MyToys;
