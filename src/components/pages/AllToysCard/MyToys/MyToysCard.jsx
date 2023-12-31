import { Link } from "react-router-dom";

const MyToysCard = ({ myToy, handleDelete, handleConfirm }) => {
  const { _id, img, Price, quantity, description } = myToy;

  return (
    <tbody>
      <tr>
        <th>
          <label>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-circle btn-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </label>
        </th>
        <td>
          <div className="flex  items-center space-x-3">
            <div className="avatar ">
              <div className="mask mask-squircle w-12 h-12">
                {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
              </div>
            </div>
          </div>
        </td>
        <td>{quantity}</td>
        <td>{Price}</td>
        <td>{description}</td>

        <th>
          <Link to={`/update/${_id}`}>
            <button
              onClick={() => handleConfirm(_id)}
              className=" btn btn-ghost px-3 btn-xs"
            >
              Update Toy Info
            </button>
          </Link>
        </th>
      </tr>
    </tbody>
  );
};

export default MyToysCard;
