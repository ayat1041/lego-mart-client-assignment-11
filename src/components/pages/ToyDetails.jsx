import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
    const toy = useLoaderData();
    const {_id,toy_name,img,price,rating} = toy;
    return (
        <div>
            <h2>Toy name: {toy_name}</h2>
        </div>
    );
};

export default ToyDetails;