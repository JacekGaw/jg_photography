import React from "react";

import heroImg1 from '../../assets/heroImg/DSC00024.jpg';
import heroImg2 from '../../assets/heroImg/DSC02774.jpg';
import heroImg3 from '../../assets/heroImg/DSC09691.jpg';


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Home = () => {
    return (
        <section>
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
                >
                    <SwiperSlide><img src={heroImg1} alt='Fotografia Ślubna Jacek Gawlyta'/></SwiperSlide>
                    <SwiperSlide><img src={heroImg2} alt='Fotografia Ślubna Jacek Gawlyta'/></SwiperSlide>
                    <SwiperSlide><img src={heroImg3} alt='Fotografia Ślubna Jacek Gawlyta'/></SwiperSlide>
            </Swiper>
        </section>
    )
};

export default Home;