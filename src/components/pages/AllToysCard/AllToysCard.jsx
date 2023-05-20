import { Link } from "react-router-dom";

const AllToysCard = ({ frozen }) => {
  const { _id, img, title, quantity, sub_category, Price } = frozen;

  return (
    <div className=" ">
      <table className="table-auto mx-auto ">
        <thead className="bg-gray-200 ">
          <tr className="">
            <th className="px-4 py-2">Toy Image</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Sub_category</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Available Quantity</th>
            <th className="px-4 py-2">View Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-4">
              {frozen.img ? (
                <img className="h-16 w-16 rounded" src={img} alt="" />
              ) : (
                "not available"
              )}
            </td>
            <td className="px-4 py-2">{title}</td>
            <td className="px-4 py-2">{sub_category}</td>
            <td className="px-4 py-2">Price: {Price}</td>
            <td className="px-4 py-2">Quantity: {quantity}</td>
            <td className="px-4 py-2">
              <Link to={`/viewDetails/${_id}`}>
                <button className="bg-gradient-to-r from-blue-200 to-green-300  text-black btn btn-primary border-none">
                  View Details
                </button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AllToysCard;
