import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyTableRow = ({toy,handleObjectDataChange,setData,data}) => {
    const {user} = useContext(AuthContext);
    const {_id,seller,toy_name,sub_category,quantity,img,price,rating,description} = toy;
    const notify = () => toast("Deleted Successfully");
    const handleDelete = (id) =>{
        const confirmDelete = window.confirm("Are you sure you want to delete this item?");
        if (confirmDelete) {
        console.log('deleted',id);
        fetch(`https://lego-mart-server.vercel.app/toys/${id}`,{
            method: "DELETE"
        })
        .then(res=>res.json())
        .then(out=>{
            console.log(out.acknowledged);
            const newData = data.filter((item) => item._id !== id);
            setData(newData)
            notify();
        })
    }
    }
  return (
    <>
    
    <tr>
      <td className="max-w-[120px] whitespace-normal">{toy_name}</td>
      <td><img className="max-w-[60px]" src={img} alt="" /></td>
      <td className="whitespace-normal">{sub_category}</td>
      <td>{rating}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td className="max-w-[400px] whitespace-normal">{description}</td>
      <td><button onClick={()=> handleDelete(_id)} className="btn border-0 rounded-none shadow-sm bg-red-500">Remove</button></td>
      {/* <Link to={`/toydetails/${_id}`}><button className="btn border-0 rounded-none shadow-sm bg-green-800">Update</button></Link></td> */}
      <td>
      {/* htmlFor="my-modal" */}
      <label 
        htmlFor="my-modal"
        onClick={()=>{
        handleObjectDataChange(toy);
      }} className="btn border-0 rounded-none shadow-sm bg-green-800">
        Update
      </label>
      </td>
    </tr>
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
    </>
    );
};

export default MyTableRow;
