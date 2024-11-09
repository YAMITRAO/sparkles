import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Artical from "../pages/artical/Artical";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Artical />
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/signup",
        element: <SignUp/>
      }
    ]
  }
])

