import React from "react";
import { Link } from "react-router-dom";
import styles from './navelement.module.css'

const NavElement = ({to, className, children}) => {
    return (
        <li className={className}>
            <Link to={to} className={styles.nav_element_link}>{children}</Link>
        </li>
    )
}

export default NavElement;