import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../styles/links.css'

const CrewSwiper = ( { slide, crews, setCurCrew } ) => {
  const [swiperRef, setSwiperRef] = useState(null)

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSwiper={setSwiperRef}
      onSlideChange={() => {
        setCurCrew(crews[swiperRef.activeIndex])
      }}
      className='h-full border-b-2 border-[#383B4B]'
      ref={slide}
    >
      {crews.map((name, index) => (
        <SwiperSlide className='flex justify-center'>
          {({ isActive }) => (
            <img 
              src={`./assets/crew/image-${name}.webp`} 
              alt={name}
              className={`w-auto max-h-full transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default CrewSwiper