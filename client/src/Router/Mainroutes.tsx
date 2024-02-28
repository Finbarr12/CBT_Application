import { createBrowserRouter } from "react-router-dom";
import WelcomePage from "../pages/WelcomePage";
import OtpInput from "../components/OtpInput";
import Instruction from "../components/Instruction";
import Error from "../components/error/Error";
import DahLayout from "../components/Layout/DashLayout";
import DashHome from "../pages/DashHome";

export const Mainroutes = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/otp-input",
    element:<OtpInput/>
  },
  {
    path:"/instruction",
    element:<Instruction/>
  },
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/dashboard",
    element: (
        <DahLayout />
    ),
    children: [
      {
        index: true,
        element: <DashHome />,
      },
]
    }
  ]);
