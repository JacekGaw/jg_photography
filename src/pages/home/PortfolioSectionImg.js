import React, { useEffect, useState} from "react";
import photo1 from '../../assets/homeImages/sala_weselna.jpg';
import photo2 from '../../assets/heroImg/DSC00024-2.jpg';
import { Parallax } from "react-scroll-parallax";
import styles from './portfoliosectionimg.module.css'

const PortfolioSectionImg = () => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    useEffect(() => {
        const handleResize = () => {
            // setScreenWidth(window.innerWidth)
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);
    return (
            <div className={styles.img_container}>
                {screenWidth > 1500 &&
                    <Parallax translateY={[-20,20]}>
                        <div className={styles.img_row}>
                            <img src={photo1}/>
                            <img src={photo2}/>
                            <img src={photo1}/>
                            <img src={photo2}/>
                        </div>
                    </Parallax>
                }
                {screenWidth > 1000 &&
                    <Parallax translateY={[-30,30]}>
                        <div className={styles.img_row}>
                            <img src={photo2}/>
                            <img src={photo1}/>
                            <img src={photo2}/>
                            <img src={photo1}/>
                        </div>
                    </Parallax>
                }
                {screenWidth > 600 &&
                    <Parallax translateY={[-20,20]}>
                        <div className={styles.img_row}>
                            <img src={photo1}/>
                            <img src={photo2}/>
                            <img src={photo1}/>
                            <img src={photo2}/>
                        </div>
                    </Parallax>
                }
                <Parallax translateY={[-30,30]}>
                    <div className={styles.img_row}>
                        <img src={photo2}/>
                        <img src={photo1}/>
                        <img src={photo1}/>
                        <img src={photo2}/>
                    </div>
                </Parallax>
            </div>
    );
};

export default PortfolioSectionImg;