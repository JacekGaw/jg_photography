import React from "react";
import { Link } from "react-router-dom";

const NavElement = ({to, className, children}) => {
    return (
        <li className={className}>
            <Link to={to}>{children}</Link>
        </li>
    )
}

export default NavElement;