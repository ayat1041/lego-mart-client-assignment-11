const TableRow = ({toy}) => {
    const {_id,seller,toy_name,sub_category,quantity,img,price,rating,description} = toy;
  return (
    <tr>
      <td>{seller}</td>
      <td>{toy_name}</td>
      <td>{sub_category}</td>
      <td>$ {price}</td>
      <td>{quantity}</td>
      <td className="max-w-[300px] whitespace-normal text-justify"><p style={{maxWidth: "300px!important"}}>{description}</p></td>
    </tr>
  );
};

export default TableRow;
