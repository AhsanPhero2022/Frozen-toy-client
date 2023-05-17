import { Outlet } from "react-router-dom";
import Header from "../Home/Home/Header";
import Footer from "../Home/Home/Footer";

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
