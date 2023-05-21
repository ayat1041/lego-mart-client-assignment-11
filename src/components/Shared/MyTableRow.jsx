import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const MyTableRow = ({toy,handleObjectDataChange}) => {
    const {user} = useContext(AuthContext);
    const {_id,seller,toy_name,sub_category,quantity,img,price,rating,description} = toy;
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
      <td><Link to={`/toydetails/${_id}`}><button className="btn border-0 rounded-none shadow-sm bg-red-500">Remove</button></Link></td>
      {/* <Link to={`/toydetails/${_id}`}><button className="btn border-0 rounded-none shadow-sm bg-green-800">Update</button></Link></td> */}
      <td>
      {/* htmlFor="my-modal" */}
      <label 
        htmlFor="my-modal"
        onClick={()=>{
        handleObjectDataChange(toy)
      }} className="btn border-0 rounded-none shadow-sm bg-green-800">
        Update
      </label>
      </td>
    </tr>
    </>
    );
};

export default MyTableRow;
