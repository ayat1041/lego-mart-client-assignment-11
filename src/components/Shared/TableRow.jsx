import { Link } from "react-router-dom";

const TableRow = ({toy}) => {
    const {_id,seller,toy_name,sub_category,quantity,img,price,rating} = toy;
  return (
    <tr className="border-4 border-red-50 shadow-lg">
      <td>{seller}</td>
      <td>{toy_name}</td>
      <td>{sub_category}</td>
      <td>$ {price}</td>
      <td>{quantity}</td>
      <td><Link to={`/toydetails/${_id}`}><button className="btn border-0 rounded-none shadow-md bg-red-500 hover:bg-red-700 transition-all duration-300 ease-out">View Details</button></Link></td>
    </tr>
  );
};

export default TableRow;
