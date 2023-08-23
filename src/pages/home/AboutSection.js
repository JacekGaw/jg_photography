import React from "react";
import styles from './AboutSection.module.css'
import salaImg from '../../assets/homeImages/sala_weselna.jpg';

const AboutSection = () => {
    return (
        <section className={styles.container}>
            <header className={`${styles.container_item} ${styles.container_header}`}>
                <h2>Moja Działalność Fotografa Ślubnego</h2>
                <p>Witaj na mojej stronie fotografa ślubnego, poświęconej sztuce uwieczniania Twoich wyjątkowych chwil!</p>
            </header>
            <div className={`${styles.container_item} ${styles.container_desc}`}>
                <img src={salaImg} alt="Fotografia Ślubna Wrocław" className={styles.desc_img} />
                <div className={styles.desc_text}>
                    <h3>Co robię jako Fotograf?</h3>
                    <p>Jako fotograf ślubny, skupiam się na działalności w tej właśnie tematyce. Począwszy od <h4>sesji zaręczynowych,
                        reportaży ślubnych</h4>, aż po <h4>sesje plenerowe</h4> w dniu ślubu i poza nim. Staram się być kreatywnym, tak aby nadać Waszym zdjęciom 
                         unikalnego i oryginalnego wyglądu. Mogę zagwarantować, że owocami naszej współpracy będą wspaniałe, ponadczasowe pamiątki, 
                         do których często będziecie wracać i przy nich wspominać Wasze najlepsze chwile. Zapraszam do sekcji <a href="/portfolio">Portfolio</a> gdzie 
                         możecie zobaczyć moje realizacje i przekonać się, że jestem tym, kogo właśnie szukacie!
                    </p>
                    <h3>Gdzie?</h3>
                    <p>Swoją działaność skupiam na dolnym i górnym śląsku oraz województwach sąsiednich ale nie jest dla mnie problemem
                        dalsza podróż. Zależy mi na Waszym zadowoleniu więc zawsze staram się dopasować i jeśli mam możliwość stworzyć dla Was 
                        coś pięknego o ogromnej wartości, to jestem bardziej niż chętny! Zapraszam do skorzystania z formularza kontaktowego w sekcji <a href="/kontakt">Kontakt</a>! 
                        <br /><h4>Fotograf Ślubny Śląsk</h4> <h4>Fotograf Ślubny Wrocław</h4> <h4>Fotograf Ślubny Polska</h4>
                    </p>
                    <h3>Jak?</h3>
                    <p>Mój styl fotografii opiera się zatrzymywaniu w kadrach autentycznych, naturalnych chwil. Lubię uchwycić uśmiechy, emocje i chwile wzruszenia, 
                        które na pewno będą wam towarzyszyć. Moje zdjęcia nie tylko dokumentują, ale także oddają klimat i atmosferę całego wydarzenia. 
                        Staram się złapać chwilę, taką jaka jest, a tam gdzie mogę, kreatywnie kieruję, abyście mieli niepowtarzalną
                        i unikalną pamiątkę! Zajrzyjcie do zakładki <a href="/fotografia-slubna">Fotografia Ślubna</a> gdzie przybliżam bardziej cały proces.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;