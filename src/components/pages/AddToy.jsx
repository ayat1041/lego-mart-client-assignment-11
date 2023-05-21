import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddToy = () => {
  const { user } = useContext(AuthContext);

  const notify = () => toast("Successfully Posted :)");
    
  
  const handlePostToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const toy_name = form.toy_name.value;
    const photo = form.photo.value;
    const sub_category = form.category.value;
    const price = parseFloat(form.price.value);
    const rating = parseFloat(form.rating.value);
    const quantity = parseInt(form.quantity.value);
    const description = form.description.value;
    const seller = form.name.value;
    const seller_mail = form.email.value;

    const newToy = {
      toy_name,
      img: photo,
      sub_category,
      price,
      rating,
      quantity,
      description,
      seller,
      seller_mail
    };
    fetch("http://localhost:5000/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        notify();
      });
  };
  return (
    <div className="mb-20">
      <div>
        <h1 className="text-3xl lg:text-5xl font-bold text-center my-10">
          Add a toy
        </h1>
      </div>
      <div className="w-full max-w-xl mx-auto">
        <form
          onSubmit={handlePostToy}
          className="bg-gradient-to-b from-slate-300 via-slate-100 to-slate-200  shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto"
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
                placeholder="Enter toy name"
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
                placeholder="Enter toy photo URL"
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
                placeholder="Enter category"
                name="category"
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
                placeholder="Enter price"
                name="price"
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
                placeholder="Enter rating"
                name="rating"
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
                placeholder="Enter available quantity"
                name="quantity"
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
              placeholder="Enter description"
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

export default AddToy;
