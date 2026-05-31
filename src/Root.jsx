
import { Outlet } from 'react-router';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { installContext } from './context';
import { useState } from 'react';

const Root = () => {
    const [installApps, setInstallApps] = useState([]);

    const installApp = (app) => {
        setInstallApps([...installApps, app]);
    }
    const unInstallApp = (t) => {
        setInstallApps(installApps.filter(app => app.id !== t.id));
    }
    return (
        <div>
            <installContext.Provider value={{ installApps, installApp, unInstallApp }}>
                <Navbar></Navbar>
                <Outlet />
                <Footer></Footer>
                <ToastContainer />
            </installContext.Provider>

        </div>
    );
};

export default Root;