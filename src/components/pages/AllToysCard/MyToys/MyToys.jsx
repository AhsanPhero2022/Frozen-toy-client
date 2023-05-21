import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/Provider";
import MyToysCard from "./MyToysCard";
import Swal from "sweetalert2";
import useTitle from "../../../../hook/useTitle";

const MyToys = () => {
  useTitle("MyToys");
  const { user } = useContext(AuthContext);

  const [myToys, setMyToys] = useState([]);

  const url = `https://assignment-11-server-one-ochre.vercel.app/myToys?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [url]);

  const handleDelete = (id) => {
    const proceed = confirm("are you sure you want to delete");
    if (proceed) {
      fetch(`https://assignment-11-server-one-ochre.vercel.app/frozen/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            Swal.fire({
              title: " Done!",

              text: "Deleted done",
              icon: "success",
              imageWidth: 400,
              imageHeight: 200,
            });
            const remaining = myToys.filter((myToy) => myToy._id !== id);
            setMyToys(remaining);
          }
        });
    }
  };

  const handleConfirm = (id) => {
    fetch(`https://assignment-11-server-one-ochre.vercel.app/frozen/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Well done",
            text: "Toy Updated Successful",
            icon: "success",
            imageWidth: 400,
            imageHeight: 200,
          });
        }
      });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center py-8">
        This is My Toys: {myToys.length}
      </h2>
      <div className=" w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Delete</th>
              <th>Images</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Description</th>
              <th>Update</th>
            </tr>
          </thead>

          {myToys.map((myToy) => (
            <MyToysCard
              handleConfirm={handleConfirm}
              handleDelete={handleDelete}
              key={myToy._id}
              myToy={myToy}
            ></MyToysCard>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyToys;
