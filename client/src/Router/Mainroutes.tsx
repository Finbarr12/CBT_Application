import { createBrowserRouter } from "react-router-dom";
import WelcomePage from "../pages/WelcomePage";

export const Mainroutes = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
]);
