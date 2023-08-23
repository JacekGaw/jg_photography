import React from "react";
import logo from '../../assets/logo/Logo1_white.png';
import NavElement from "./NavElement";
import styles from './navigation.module.css';

const navigation = () => {

    const handleScroll = e => {
        console.log("ruszasz");
    }

    return (
        <nav className={styles.nav} onScroll={handleScroll}>
            <ul className={styles.nav_container}>
                <NavElement to="/omnie" className={styles.nav_element}>O mnie</NavElement>
                <NavElement to="/oferta" className={styles.nav_element}>Oferta</NavElement>
                <NavElement to="/portfolio" className={styles.nav_element}>Portfolio</NavElement>
                <NavElement to="/" className={`${styles.nav_element} ${styles.nav_logo}`}>
                    <img src={logo} alt="logo"/>
                </NavElement>
                <NavElement to="/fotografia-slubna" className={styles.nav_element}>Fotografia Ślubna</NavElement>
                <NavElement to="/kontakt" className={styles.nav_element}>Kontakt</NavElement>
                <NavElement to="/faq" className={styles.nav_element}>FAQ</NavElement>
            </ul>
        </nav>
    )
}

export default navigation;