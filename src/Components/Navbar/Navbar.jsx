import { NavLink } from 'react-router';
import logo from '../../assets/images/logo.png';
import { FaGithub } from "react-icons/fa6";
import Navlink from './Navlink'
const Navbar = () => {
    const routes = [
        {
            path: '/',
            text: 'Home'
        },
        {
            path: '/Apps',
            text: 'Apps'
        },
        {
            path: '/installedApps',
            text: 'Installed'
        },
        {
            path: '/dashboard',
            text: 'Dashboard'
        }
    ]


    return (
        <div className="bg-base-100 shadow-sm">
            <nav className='flex items-center justify-between container mx-auto'>
                <img src={logo} alt="logo" className="w-20 h-20" />
                <ul className='list-none flex space-x-2 items-center'>
                    {/* <Navlink link={'/'} className={'text-xl'} >Home</Navlink>
                    <Navlink link={'/Apps'} >Apps</Navlink>
                    <Navlink link={'/installedApps'} >Installed</Navlink>
                    <Navlink link={'/dashboard'} >Dashboard</Navlink>
                </ul> */}

                    {
                        routes.map((route, index) => <Navlink key={index} link={route.path} >{route.text}</Navlink>)
                    }
                </ul>
                <button className='btn text-white bg-purple-500'> <FaGithub />
                    Contribute</button>

            </nav>
        </div>
    );
};

export default Navbar;