import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Visa from "../../pages/Visa/Visa";
import Login from "../../pages/Login/Login";
import SignUp from "./../../pages/SignUp/SignUp";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import MyAppointment from "../../pages/Dashboard/MyAppointments/MyAppointment";
import AllUsers from "./../../pages/Dashboard/AllUsers/AllUsers";
import PrivateRoute from "./../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/visa",
        element: <Visa></Visa>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sing-up",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyAppointment></MyAppointment>,
      },
      {
        path: "/dashboard/all-users",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);

export default router;
