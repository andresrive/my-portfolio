// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

import './technologies.css'
import React from 'react'
import technologies from './data'
import Technology from "./Technology";

const Technologies = () => {
    return (
        <section id='technologies'>
            <h2>Technologies I have experience with:</h2>
            <div className='container'>
                <Swiper
                    slidesPerView={1}
                    breakpoints={{
                        601: { slidesPerView: 3 },
                        1025: { slidesPerView: 4 }
                    }}
                    centeredSlides={true}
                    spaceBetween={30}
                    grabCursor={true}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    {
                        technologies.map(technology => (
                            <SwiperSlide key={technology.id}><Technology technology={technology} /></SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Technologies