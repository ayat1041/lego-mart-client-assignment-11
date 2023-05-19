import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import FourOFour from "../components/pages/FourOFour";
import Login from "../components/pages/Login";
import SignUp from "../components/pages/SignUp";
import Home from "../components/pages/Home/Home";
import Blogs from "../components/pages/Blogs";
import AllToys from "../components/pages/AllToys";
import AddToy from "../components/pages/AddToy";
import ToyDetails from "../components/pages/ToyDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>
      },
      {
        path: "/addtoy",
        element: <AddToy></AddToy>
      },
      {
        path: "/toydetails/:id",
        element: <ToyDetails></ToyDetails>
      }
    ]
  },
  {
    path: '*',
    element: <FourOFour></FourOFour>
  }
]);

export default router;