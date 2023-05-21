import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const updateToy = useLoaderData();
  const { _id, Price, quantity, description, title } = updateToy;

  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const Price = form.price.value;
    const updatedFrozen = {
      quantity,

      description,
      Price,
    };
    console.log(updatedFrozen);

    // send data to the  server
    fetch(`https://assignment-11-server-one-ochre.vercel.app/frozen/${_id}`, {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(updatedFrozen),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Toy updated Successful",
            icon: "success",
            confirmButtonText: "Well Done",
          });
        }
      });
  };

  return (
    <div className="bg-amber-200 p-16">
      <h1 className="text-center text-3xl">Update A Disney: {title} </h1>
      <form onSubmit={handleAddToy}>
        {/* form name and quantity row */}
        <div className="md:flex gap-4 ">
          <div className="form-control md:w-1/2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Update Pric</span>
              </label>
              <label className="input-group">
                <input
                  name="price"
                  defaultValue={Price}
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
                  defaultValue={quantity}
                  type="text"
                  placeholder="Quantity"
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
                  defaultValue={description}
                  type="text"
                  placeholder="Description"
                  className="input input-bordered w-full h-16 rounded"
                />
              </label>
            </div>
          </div>
        </div>
        <input
          type="submit"
          value={"Update Toy"}
          className="btn btn-block my-8"
        />
      </form>
    </div>
  );
};

export default Update;
