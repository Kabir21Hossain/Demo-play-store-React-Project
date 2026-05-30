import { NavLink } from "react-router";

const Navlink = ({ link, children, className }) => {
    return (

        <NavLink to={link} className={({ isActive }) => { return `${isActive ? 'border-b-1 border-b-gray-700 text-purple-400 pb-2' : ''} ${className ? className : ''}` }}>{children}</NavLink>

    )
}

export default Navlink;
