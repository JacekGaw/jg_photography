import React from "react";
import styles from './customersop.module.css'
import avatar1 from '../../assets/avatarImg/DSC02761.jpg';
import avatar2 from '../../assets/avatarImg/DSC02988.jpg';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Button from "../../components/UI/Button";
import { Parallax } from "react-scroll-parallax";

const opinions = [
    {
        "Names": "Dominika i Jacek",
        "Avatar": avatar2,
        "Text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
    },
    {
        "Names": "Natalia i Krzysztof",
        "Avatar": avatar1,
        "Text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
    }
];

const CustomersOp = () => {
    return (
        <>
        <section className={styles.container}>
            <header className={styles.header}>
                    <h4>Opinie klientów</h4>
            </header>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                className={styles.swiper_container}>
                
                {opinions.map((item, index) => {
                    return ( 
                        <SwiperSlide key={index} className={styles.slide} style={{backgroundImage: `url(${item.Avatar})`}}>
                            <div className={styles.slide_container}>
                                <Parallax translateX={['100px', '200px']}>
                                    <header className={styles.item_header}>
                                        <h5>--{item.Names}--</h5>
                                    </header>
                                    <p className={styles.item_text}>{item.Text}</p>
                                </Parallax>
                            </div>
                            <Parallax translateX={['200px', '100px']} className={styles.button_container}>
                                <Button className="creme">Zobacz ich historię</Button>
                            </Parallax>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
        </>
    );
};

export default CustomersOp;