import React from 'react';

import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';

import Banner from '../Banner/Banner';
import 'swiper/css';
import 'swiper/css/autoplay';

const Carousel = () => {

    return (
        <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2000 }}
        >
            <SwiperSlide>
                <Banner src="assets/images/home-banner-1.jpg"></Banner>
            </SwiperSlide>
            <SwiperSlide>
                <Banner src="assets/images/home-banner-2.jpg"></Banner>
            </SwiperSlide>
            <SwiperSlide>
                <Banner src="assets/images/home-banner-3.jpg"></Banner>
            </SwiperSlide>
        </Swiper>
    );
}

export default Carousel;
