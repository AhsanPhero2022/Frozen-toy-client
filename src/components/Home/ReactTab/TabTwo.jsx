const TabTwo = ({ item }) => {
  const { title, img } = item;
  return (
    <div className="mx-auto card card-compact w-80 bg-base-100 shadow-xl">
      <figure className="h-40">
        <img src={img} alt="coming soooon!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Like It!</button>
        </div>
      </div>
    </div>
  );
};

export default TabTwo;
