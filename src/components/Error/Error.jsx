import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="lg:flex  justify-center gap-24 lg:mt-48 my-12">
      <div className="lg:w-1/2">
        <img
          className="w-full"
          src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1684487022~exp=1684487622~hmac=e9e0ac00f933b477f0945152bef262ee4e77b1db4d90f468bc3236d4367b2cdd"
          alt=""
        />
      </div>
      <div className="lg:mt-56 text-center">
        <h1 className="text-3xl font-bold">404</h1>
        <p>page not found</p>
        <Link className="underline text-purple-600" to="/">
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default Error;
