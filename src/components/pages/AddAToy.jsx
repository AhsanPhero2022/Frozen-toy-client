import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "./Provider/Provider";
import useTitle from "../../hook/useTitle";

const AddAToy = () => {
  useTitle("Add A Toy");
  const [selectedCategory, setSelectedCategory] = useState("");
  const { user } = useContext(AuthContext);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;

    const title = form.name.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const Seller = form.seller.value;
    const email = form.sellerEmail.value;
    const ratings = form.ratings.value;
    const img = form.photo.value;
    const sub_category = form.category.value;
    const Price = form.price.value;

    const newFrozen = {
      title,
      quantity,
      email,
      Seller,
      ratings,
      img,
      sub_category,
      description,
      Price,
    };
    console.log(newFrozen);

    // send data to the  server
    fetch("http://localhost:5000/frozen", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(newFrozen),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Success!",
          text: "Toy Added Successful",
          icon: "success",
          confirmButtonText: "Well Done",
        });
      });
  };

  return (
    <div className="bg-cyan-200 p-16">
      <h1 className="text-center text-3xl">Add A Disney Toy</h1>
      <form onSubmit={handleAddToy}>
        {/* form name and quantity row */}
        <div className="md:flex gap-4 ">
          <div className="form-control md:w-1/2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Toy Name</span>
              </label>
              <label className="input-group">
                <input
                  name="name"
                  required
                  type="text"
                  placeholder="Toy Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <label className="input-group">
                <input
                  name="quantity"
                  required
                  type="text"
                  placeholder="Quantity"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
        </div>
        {/* form supplier row */}
        <div className="md:flex gap-4 ">
          <div className="form-control md:w-1/2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller</span>
              </label>
              <label className="input-group">
                <input
                  name="seller"
                  defaultValue={user?.displayName}
                  type="text"
                  placeholder="Seller Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  name="price"
                  required
                  type="text"
                  placeholder="$ 00.00"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
        </div>
        {/* form seller row */}
        <div className="md:flex gap-4 ">
          <div className="form-control md:w-1/2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Email</span>
              </label>
              <label className="input-group">
                <input
                  name="sellerEmail"
                  type="text"
                  defaultValue={user?.email}
                  placeholder="Seller Email"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  name="photo"
                  type="text"
                  placeholder="photo url"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
        </div>
        {/* form category  and details*/}
        <div className="md:flex gap-4 ">
          <div className="form-control md:w-1/2">
            <div className="form-control">
              <label className="input-group">
                <input
                  name="category"
                  value={selectedCategory}
                  id="subcategory"
                  className="input mt-9 input-bordered w-full"
                  type="text"
                />
              </label>
              <select
                className="w-24 "
                id="subcategory"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option value="">Select a category</option>
                <option className="text-green-300" value="prince">
                  prince
                </option>
                <option className="text-green-300" value="queen">
                  queen
                </option>
                <option className="text-green-300" value="olaf">
                  olaf
                </option>
              </select>
            </div>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Ratings</span>
              </label>
              <label className="input-group">
                <input
                  name="ratings"
                  required
                  type="text"
                  placeholder="Ratings"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
        </div>
        {/* form naow */}
        <div className="">
          <div className="form-control md:w-full">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <label className="input-group">
                <input
                  name="description"
                  type="text"
                  placeholder="Description"
                  className="input input-bordered w-full h-16 rounded"
                />
              </label>
            </div>
          </div>
        </div>
        <input type="submit" value={"Add Toy"} className="btn btn-block my-8" />
      </form>
    </div>
  );
};

export default AddAToy;
