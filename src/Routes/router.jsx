import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Pages/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home"
import Dashboard from "../Pages/Dashboard"
import Campaigns from "../Pages/Campaigns"



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
                element: <Dashboard></Dashboard>,
            },
            {
                path: "/campaigns",
                element: <Campaigns></Campaigns>,
            },
            {
                path: "/how-to-help",
                element: <Campaigns></Campaigns>,
            },
        ],
    },
]);

export default router;
