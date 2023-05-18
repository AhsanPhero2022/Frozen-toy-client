import Slider from "react-slick";

const PhotoCollection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center my-5">
        Frozen Photo Gallery
      </h2>
      <Slider className="mx-12" {...settings}>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDMr4W1_a8pBU3IpvRhncotIa6FRtspLjPLw&usqp=CAU"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Jpz6EA9Tc0WZ59wicexH1FDasNi73zFi9A&usqp=CAU"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNVyYfdHhj4W6a74OrM_7xliEW2dHVyBIGyR4hxkDTCKBbCeyK-VRAHHakFM5vqx3KycM&usqp=CAU"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNVyYfdHhj4W6a74OrM_7xliEW2dHVyBIGyR4hxkDTCKBbCeyK-VRAHHakFM5vqx3KycM&usqp=CAU"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXBxH3iHU4mTZSx5q18ol07j9tXp6TjYqtMA&usqp=CAU"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXBxH3iHU4mTZSx5q18ol07j9tXp6TjYqtMA&usqp=CAU"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default PhotoCollection;
