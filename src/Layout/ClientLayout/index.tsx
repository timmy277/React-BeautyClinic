import Footer from "./Component/Footer";
import { Outlet } from "react-router-dom";
import Header from "./Component/Header";


const Layout = () => {
  return (
    <>
      <Header />
        <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
