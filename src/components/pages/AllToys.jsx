import { useEffect, useState } from "react";
import AllToysCard from "./AllToysCard/AllToysCard";
import useTitle from "../../hook/useTitle";

const AllToys = () => {
  useTitle("All Toys");
  const [frozens, setFrozens] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/frozen")
      .then((res) => res.json())
      .then((data) => {
        setFrozens(data);
      });
  }, []);

  const [visibleProducts, setVisibleProducts] = useState(20);
  const totalProducts = frozens.length;

  const handleLoadMore = () => {
    setVisibleProducts(visibleProducts + 20);
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold text-center py-8 bg-cyan-200">
        All Toys: {frozens.length}
      </h1>
      <div className=" bg-gray-100 lg:w-1/2 mx-auto my-8">
        {frozens.slice(0, visibleProducts).map((frozen) => (
          <AllToysCard
            visibleProducts={visibleProducts}
            totalProducts={totalProducts}
            handleLoadMore={handleLoadMore}
            key={frozen._id}
            frozen={frozen}
          ></AllToysCard>
        ))}
      </div>
      <div className="text-center">
        {visibleProducts < totalProducts && (
          <button
            className="my-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 "
            onClick={handleLoadMore}
          >
            Load More Toys
          </button>
        )}
      </div>
    </div>
  );
};

export default AllToys;
