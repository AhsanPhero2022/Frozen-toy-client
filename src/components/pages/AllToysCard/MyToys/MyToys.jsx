import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/Provider";
import MyToysCard from "./MyToysCard";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email);
  const [myToys, setMyToys] = useState([]);
  // console.log(myToys);
  const url = `http://localhost:5000/frozen?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, []);
  return (
    <div>
      <h2>this is bookings: {myToys.length}</h2>
      <div className=" w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Images</th>
              <th>Service</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
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
