import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Setting from "../Layout/Setting";
import Installed from "../Pages/InstalledApps/Installed";
import Apps from "../Pages/Apps/Apps";
import Home from "../Pages/HomePage/Home";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ErrorPage from '../Pages/ErrorPage/ErrorPage';

export const router = createBrowserRouter([

    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home,
                // loader: () => fetch('/data.json')
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

            }
        ],
        errorElement: <ErrorPage />
    }
]);

// export const Routes = createBrowserRouter([
//     {
//         path: '/',
//         Component: Root,
//         children: [
//             {
//                 index: true,
//                 Component: HomeLayout,
//                 children: [
//                     { index: true, Component: Home },
//                     { path: '/Apps', Component: Apps },
//                     { path: '/Installed', Component: Installed },
//                     { path: '/Setting', Component: Setting },
//                 ]
//             },
//         ]
//     }
// ])