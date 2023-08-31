import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import HeaderSection from "./HeaderSection";
import AboutSection from "./AboutSection";
import styles from './home.module.css';
import PortfolioSection from "./PortfolioSection";
import CustomersOp from "./CustomersOp";

import { Parallax } from "react-scroll-parallax";

import heroImg1 from '../../assets/heroImg/DSC00024.jpg';
import heroImg2 from '../../assets/heroImg/DSC02774.jpg';
import heroImg3 from '../../assets/heroImg/DSC09691.jpg';
import heroImg4 from '../../assets/heroImg/DSC03021.jpg';
import heroImg5 from '../../assets/heroImg/DSC03124.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Home = () => {
    return (
        <>
        <section className={styles.hero_container}>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className={styles.hero_container}
                >
                    <HeaderSection />
                    <SwiperSlide className={styles.hero_slide}>
                        <Parallax translateY={[-20,20]}>
                            <img src={heroImg1} alt='Fotografia Ślubna Jacek Gawlyta'/>
                        </Parallax>
                    </SwiperSlide>
                    <SwiperSlide className={styles.hero_slide}>
                        <Parallax translateY={[-20,20]}>
                            <img src={heroImg2} alt='Fotografia Ślubna Jacek Gawlyta'/>
                        </Parallax>
                    </SwiperSlide>
                    <SwiperSlide className={styles.hero_slide}>
                        <Parallax translateY={[-20,20]}>
                            <img src={heroImg3} alt='Fotografia Ślubna Jacek Gawlyta'/>
                        </Parallax>
                    </SwiperSlide>
                    <SwiperSlide className={styles.hero_slide}>
                        <Parallax translateY={[-20,20]}>
                            <img src={heroImg4} alt='Fotografia Ślubna Jacek Gawlyta'/>
                        </Parallax>
                    </SwiperSlide>
                    <SwiperSlide className={styles.hero_slide}>
                        <Parallax translateY={[-20,20]}>
                            <img src={heroImg5} alt='Fotografia Ślubna Jacek Gawlyta'/>
                        </Parallax>
                    </SwiperSlide>
            </Swiper>
        </section>
        <AboutSection />
        <PortfolioSection />
        <CustomersOp />
        </>
    )
};

export default Home;