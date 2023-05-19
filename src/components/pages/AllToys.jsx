import { useEffect, useState } from "react";
import AllToysCard from "./AllToysCard/AllToysCard";

const AllToys = () => {
  const [frozens, setFrozens] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/frozen")
      .then((res) => res.json())
      .then((data) => {
        setFrozens(data);
      });
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-semibold text-center py-8 bg-cyan-200">
        All Toys: {frozens.length}
      </h1>
      <div className=" bg-gray-100 lg:w-1/2 mx-auto my-8">
        {frozens.map((frozen) => (
          <AllToysCard key={frozen._id} frozen={frozen}></AllToysCard>
        ))}
      </div>
    </div>
  );
};

export default AllToys;
