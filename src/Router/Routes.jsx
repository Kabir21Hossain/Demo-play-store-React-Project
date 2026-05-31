import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Setting from "../Layout/Setting";
import Installed from "../Pages/InstalledApps/Installed";
import Apps from "../Pages/Apps/Apps";
import Home from "../Pages/HomePage/Home";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import AppDetails from "../Pages/Apps/AppDetails";

export const router = createBrowserRouter([

    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home,

            },
            {
                path: '/setting',
                Component: Setting
            },
            {
                path: '/installedApps',
                Component: Installed
            },
            {
                path: '/Apps',
                Component: Apps,
            },
            {
                path: '/dashboard',
                Component: Dashboard

            }, {
                path: "/apps/:id",
                Component: AppDetails
            }
        ],
        errorElement: <ErrorPage />
    }
]);

