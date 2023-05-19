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
      <h1>All Toys: {frozens.length}</h1>
      <div
        className="grid grid-cols-1
      md:grid-cols-2 lg:grid-cols-3 "
      >
        {frozens.map((frozen) => (
          <AllToysCard key={frozen._id} frozen={frozen}></AllToysCard>
        ))}
      </div>
    </div>
  );
};

export default AllToys;
