import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Components/Errror/Error";
import Home from "../Components/Home/Home";
import Donation from "../Components/Donation/Donation";
import DonationDetails from "../Components/Pages/DonationDetails/DonationDetails";
import NewStatics from "../Components/Statistics/NewStatics";

const createRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../donete.json"),
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/statistics",
        element: <NewStatics></NewStatics>,
        loader: () => fetch("../donete.json"),
      },
      {
        path: '/camp/:id',
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch("../donete.json"),
      },
    ],
  },
]);

export default createRouter;