import React from "react";
import logo from '../../assets/logo/Logo1.png';
import NavElement from "./NavElement";

const navigation = () => {
    return (
        <nav className="nav">
            <ul className="nav_container">
                <NavElement to="/omnie" className="nav_element">O mnie</NavElement>
                <NavElement to="/oferta" className="nav_element">Oferta</NavElement>
                <NavElement to="/portfolio" className="nav_element">Portfolio</NavElement>
                <NavElement to="/" className="nav_element nav-logo">
                    <img src={logo} alt="logo"/>
                </NavElement>
                <NavElement to="/fotografia-slubna" className="nav_element">Fotografia Ślubna</NavElement>
                <NavElement to="/kontakt" className="nav_element">Kontakt</NavElement>
                <NavElement to="/faq" className="nav_element">FAQ</NavElement>
            </ul>
        </nav>
    )
}

export default navigation;