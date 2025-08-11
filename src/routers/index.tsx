import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "../constants";
import RadhikaJari from "../pages/radhikaJari";
import AllProduct from "../pages/radhikaJari/AllProduct";

export const Router = createBrowserRouter([
  { path: ROUTES.RADHIKA_JARI.WEB, element: <RadhikaJari /> },
  { path: ROUTES.RADHIKA_JARI.All_PRODUCT, element: <AllProduct /> },
  {
    path: "*",
    // element: <ErrorPage />,
  },
]);
