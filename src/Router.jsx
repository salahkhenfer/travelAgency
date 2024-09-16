import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Tours from "./pages/Tours";
import TourDetails from "./pages/TourDetails";
import ThankYou from "./pages/ThankYou";
import SearchResultList from "./pages/SearchResultList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./components/Layout/Layout";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "tours",
        element: <Tours />,
      },
      {
        path: "tours/:id",
        element: <TourDetails />,
      },
      {
        path: "thank-you",
        element: <ThankYou />,
      },
      {
        path: "tours/search",
        element: <SearchResultList />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);

export default Routers;
