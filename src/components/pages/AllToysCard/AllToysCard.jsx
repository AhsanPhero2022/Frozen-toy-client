const AllToysCard = ({ frozen }) => {
  console.log(frozen);
  const { img } = frozen;
  return (
    <div className="my-8 card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Toys Images Not Available" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default AllToysCard;
