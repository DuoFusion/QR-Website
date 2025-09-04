import { createBrowserRouter } from "react-router-dom";
import RadhikaJari from "../pages/radhikaJari";
import AllProduct from "../pages/radhikaJari/AllProduct";
import { useRoutes } from "../constants/Routes";
import Error from "../pages/error";
import Layout from "../layout";

export function useAppRouter() {
  const routes = useRoutes();

  // if (!routes || Object.keys(routes.dynamic).length === 0) {
  //   return createBrowserRouter([{ path: "*", element: <Loader /> }]);
  // }

  return createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: routes.HOME, element: <div>Home</div> },
        ...Object.entries(routes.dynamic).flatMap(([_, value]) => [
          { path: value.WEB, element: <RadhikaJari /> },
          { path: value.All_PRODUCT, element: <AllProduct /> },
        ]),
        { path: "*", element: <Error /> },
      ],
    },
  ]);
}
