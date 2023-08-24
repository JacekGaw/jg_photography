import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/UI/Button";
import styles from './portfoliosection.module.css'
import PortfolioSectionImg from "./PortfolioSectionImg";


const PortfolioSection = () => {

    const navigate = useNavigate();
    const handleToPortfolio = () => navigate('/portfolio');

    return (
        <section className={styles.container}>
            <PortfolioSectionImg />
            <header className={styles.header_container}>
                <h2 className={styles.header_h2}>Portfolio</h2>
                <p className={styles.header_p}>Zebrałem swoje ulubione kadry w jedno miejsce, abyście mogli zapoznać się z moim stylem i typem fotografii. 
                    Przekonajcie się, że jestem fotografem idealnym dla Was!
                </p>
                <Button className={styles.creme} onClick={handleToPortfolio}>Portoflio</Button>
            </header>
        </section>
    );
};

export default PortfolioSection;