import React, { useRef, useState } from 'react'
import { Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/links.css'
import { useLocation } from 'react-router';

//! NOTES
//* I set a useState for swiperRef to access methods and properties of the Swiper
//* When button is clicked, handleClick is called to fire slideTo(index) method and slide to indexed slide.
//* .activeIndex shows the active index showing on the Slider, which will be useful later for rendering information.

const ExpSwiper = ({ setDestinations }) => {

  const [swiperRef, setSwiperRef] = useState(null)
  const slide = useRef()

  const handleClick = (index) => {
    switch (index){
      case 0:
        swiperRef.slideTo(index, 500)
        setDestinations("mars")
        break
      case 1:
        swiperRef.slideTo(index, 500)
        setDestinations("moon")
        break
      case 2:
        swiperRef.slideTo(index, 500)
        setDestinations("titan")
        break
    }
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='w-full max-w-[400px] mx-auto flex items-center'>
        <Swiper
        modules={[Virtual]}
        spaceBetween={50}
        slidesPerView={1}
        className=''
        onSwiper={setSwiperRef}
        onSlideChange={() => {
          handleClick(swiperRef.activeIndex)
          console.log(swiperRef);
        }}
        ref={slide}
        >
          <SwiperSlide>
            {({ isActive }) => (
              <div className={`flex items-center justify-center transition-opacity duration-300 ${isActive? 'opacity-100': 'opacity-0'}`}>
                <img src="/assets/destination/image-mars.webp" alt="" className='w-[170px]'/>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <div className={`flex items-center justify-center transition-opacity duration-300 ${isActive? 'opacity-100': 'opacity-0'}`}>
                <img src="/assets/destination/image-moon.webp" alt="" className='w-[170px]'/>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <div className={`flex items-center justify-center transition-opacity duration-300 ${isActive? 'opacity-100': 'opacity-0'}`}>
                <img src="/assets/destination/image-titan.webp" alt="" className='w-[170px]'/>
              </div>
            )}
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='bg-green-400 px-9 mt-5'>
        <button className='p-2 mx-2 uppercase' id='mars' onClick={(e) => handleClick(0)}>mars</button>
        <button className='p-2 mx-2 uppercase' id='moon' onClick={(e) => handleClick(1)}>moon</button>
        <button className='p-2 mx-2 uppercase' id='titan' onClick={(e) => handleClick(2)}>titan</button>
      </div>
    </div>
  )
}

export default ExpSwiper