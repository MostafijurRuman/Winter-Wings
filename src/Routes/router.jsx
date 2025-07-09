import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Pages/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home"
import Dashboard from "../Pages/Dashboard"
import Campaigns from "../Pages/Campaigns"
import HowToHelp from "../Pages/HowToHelp";
import CampaignDetails from "../Pages/CampaignDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoutes from "./PrivateRoutes";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/dashboard",
                element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
            },
            {
                path: "/campaigns",
                element: <Campaigns></Campaigns>,
            },
            {
                path:"/campaigns/:id",
                element: <PrivateRoutes><CampaignDetails></CampaignDetails></PrivateRoutes>,
            },
            {
                path: "/how-to-help",
                element: <HowToHelp></HowToHelp>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
        ],
    },
]);

export default router;
