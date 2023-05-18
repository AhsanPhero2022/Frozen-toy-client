import Header from "../Home/Home/Header";
import Footer from "../Home/Home/Footer";
import { Outlet } from "react-router-dom";

const Router = () => {
  return (
    <div>
      <Header></Header>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Router;
