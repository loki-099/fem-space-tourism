import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../styles/links.css'

const CrewSwiper = () => {
  const [swiperRef, setSwiperRef] = useState(null)
  const crews = ['douglas-hurley', 'mark-shuttleworth', 'victor-glover', 'anousheh-ansari']

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSwiper={setSwiperRef}
      className='bg-red-600'
    >
      {crews.map((name, index) => (
        <SwiperSlide className='bg-red-300'>
          {({ isActive }) => (
            <div className={`flex items-center justify-center transition-opacity duration-300`}>
              <img 
                src={`./assets/crew/image-${name}.webp`} 
                alt={name}
                className='w-[100%] md:w-[300px] xl:w-[445px]'
              />
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default CrewSwiper