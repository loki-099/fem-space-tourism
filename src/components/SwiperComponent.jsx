import React, { useState } from 'react'
import { Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/links.css'

const SwiperComponent = ({ slide, setDestinations }) => {

  const dest = ['moon', 'mars', 'europa', 'titan']
  const [swiperRef, setSwiperRef] = useState(null)

  return (
    <div className='w-full max-w-[400px] md:max-w-[500px] mx-auto flex items-center'>
      <Swiper
      modules={[Virtual]}
      spaceBetween={50}
      slidesPerView={1}
      className=''
      onSwiper={setSwiperRef}
      onSlideChange={() => {
        setDestinations(dest[swiperRef.activeIndex])
      }}
      ref={slide}
      >
        {dest.map((d, index) => {
          return (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div className={`flex items-center justify-center transition-opacity duration-300 ${isActive? 'opacity-100': 'opacity-0'}`}>
                  <img 
                    src={`./assets/destination/image-${d}.webp`} 
                    alt={d}
                    className='w-[170px] md:w-[300px] xl:w-[445px]'
                  />
                </div>
              )}
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default SwiperComponent