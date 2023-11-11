import React, { ReactNode, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './slider.css';

// import required modules
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { CSSSelector } from 'swiper/types';

interface ISlider {
    Components: ReactNode[]
}

export default function Slider({
    Components
}: ISlider) {

    const prevRef = useRef<HTMLDivElement | null>(null)
    const nextRef = useRef<HTMLDivElement | null>(null)

    return (
        <Swiper
        // slidesPerView={3}
        spaceBetween={30}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        effect={'coverflow'}
        coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        }}
        navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current
        }}
        modules={[EffectCoverflow, Navigation]}
        className="mySwiper"
        >
            {
                Components.map((component, index) => <SwiperSlide key={index} className="rounded-xl">{component}</SwiperSlide>)
            }
            <div ref={prevRef} className="text-white absolute left-0 top-[30%] -translate-y-1/2 bg-[rgba(255,255,255,0.5)] hover:bg-[rgba(255,255,255,0.1)] rounded-full p-1 transition-all duration-300 z-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </div>
            <div ref={nextRef} className="text-white absolute right-0 top-[30%] -translate-y-1/2 bg-[rgba(255,255,255,0.5)] hover:bg-[rgba(255,255,255,0.1)] rounded-full p-1 transition-all duration-300 z-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </div>
        </Swiper>
    );
}  