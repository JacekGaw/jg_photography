import React from "react";
import { useNavigate } from "react-router-dom";
import styles from './headersection.module.css'
import logo2 from '../../assets/logo/Logo2.png'
import Button from "../../components/UI/Button";

const HeaderSection = () => {
    const navigate = useNavigate();
    const handleToPortfolio = () => navigate('/portfolio');

    return (
        <header className={styles.header_container}>
            {/* <img src={logo2} /> */}
            <h1>Jacek Gawlyta - Twój Fotograf Ślubny</h1>
            <div className={styles.header_row}>
                <p className={`${styles.row_item} ${styles.row_paragraph}`}><b>Hej!</b> nazywam się Jacek Gawlyta i jestem fotografem ślubnym. Uwieczniam w kadry niepowtarzalne chwile Waszego specjalnego dnia i tworzę dla Was pamiątki, które będą zawsze zachwycać. Zapraszam Was do kontaktu!</p>
                <div className={`${styles.row_item} ${styles.row_buttons}`}>
                    <Button onClick={handleToPortfolio} className='creme-transparent'>Portoflio</Button>
                    <Button className='creme-transparent'>Więcej</Button>
                </div>
            </div>
        </header>
    );
};

export default HeaderSection;