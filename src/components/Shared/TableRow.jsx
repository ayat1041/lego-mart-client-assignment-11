import { Link } from "react-router-dom";

const TableRow = ({toy}) => {
    const {_id,seller,toy_name,sub_category,quantity,img,price,rating} = toy;
  return (
    <tr>
      <td>{seller}</td>
      <td>{toy_name}</td>
      <td>{sub_category}</td>
      <td>$ {price}</td>
      <td>{quantity}</td>
      <td><Link to={`/toydetails/${_id}`}><button className="btn border-0 rounded-none shadow-sm bg-red-500">View Details</button></Link></td>
    </tr>
  );
};

export default TableRow;
