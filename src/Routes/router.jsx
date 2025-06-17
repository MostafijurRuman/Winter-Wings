import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Pages/MainLayout";
import ErrorPage from "../Pages/ErrorPage";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>,
    },
]);

export default router;
