const AddAToy = () => {
  return (
    <div>
      <h2>Add a toy</h2>
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
        </table>
      </div>
    </div>
  );
};

export default AddAToy;
