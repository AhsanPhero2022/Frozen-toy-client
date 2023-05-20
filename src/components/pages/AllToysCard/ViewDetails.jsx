import { useLoaderData } from "react-router-dom";
import useTitle from "../../../hook/useTitle";

const ViewDetails = () => {
  useTitle("View Details");
  const frozen = useLoaderData();
  const { title, description, img, Price, rating, quantity } = frozen;

  return (
    <div className="bg-cyan-200 py-8 lg:py-32">
      <div className="mx-auto   card w-1/2 bg-base-100 shadow-xl">
        <figure>
          <img className="w-full" src={img} alt="Frozen" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>Details: {description}</p>
          <div className="flex  justify-evenly mt-5">
            <p>Ratings: {rating}</p>
            <p>Quantity: {quantity}</p>
            <p>Price: {Price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
