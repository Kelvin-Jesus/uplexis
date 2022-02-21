import React from 'react';

import { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

const TwoImagesBanner = () => {
    return (
        <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{ delay: 2000 }}
            navigation
            slidesPerView={2}
            spaceBetween={50}
            breakpoints={{
                300: {
                    slidesPerView: 1,
                },
                800: {
                    slidesPerView: 2,
                }
            }}
        >
            <SwiperSlide>
                <div className="swiper-item">
                    <img src="assets/images/home-banner-1.jpg" alt="" className="swiper-item__img" />
                    <p className="swiper-item__description">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, debitis iure? Saepe neque cupiditate alias beatae ad magni!
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-item">
                    <img src="assets/images/home-banner-2.jpg" alt="" className="swiper-item__img" />
                    <p className="swiper-item__description">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, debitis iure? Saepe neque cupiditate alias beatae ad magni! Ipsam expedita dolorem nobis iusto? Ducimus velit eos sapiente eius, est assumenda?
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-item">
                    <img src="assets/images/home-banner-2.jpg" alt="" className="swiper-item__img" />
                    <p className="swiper-item__description">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, debitis iure? Saepe neque cupiditate alias beatae ad magni! Ipsam expedita dolorem nobis iusto? Ducimus velit eos sapiente eius, est assumenda?
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-item">
                    <img src="assets/images/home-banner-1.jpg" alt="" className="swiper-item__img" />
                    <p className="swiper-item__description">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, debitis iure? Saepe neque cupiditate alias beatae ad magni! Ipsam expedita dolorem nobis iusto? Ducimus velit eos sapiente eius, est assumenda?
                    </p>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}

export default TwoImagesBanner;
