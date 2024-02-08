import { createBrowserRouter } from "react-router-dom";
import WelcomePage from "../assets/pages/WelcomePage";

export const Mainroutes = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
]);
