import { Outlet } from "react-router-dom";
import Loader from "./Loader";

const Layout = () => {
  return (
    <>
      <Loader />
      <Outlet />
    </>
  );
};

export default Layout;
