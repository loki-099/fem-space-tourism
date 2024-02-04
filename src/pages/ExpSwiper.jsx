import React, { useRef, useState } from 'react'
import { Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/links.css'

//! NOTES
//* I set a useState for swiperRef to access methods and properties of the Swiper
//* When button is clicked, handleClick is called to fire slideTo(index) method and slide to indexed slide.
//* .activeIndex shows the active index showing on the Slider, which will be useful later for rendering information.

const ExpSwiper = () => {

  const [swiperRef, setSwiperRef] = useState(null)
  const slide = useRef()

  const handleClick = (index) => {
    swiperRef.slideTo(index, 500)
    console.log(swiperRef.activeIndex);
  }

  return (
    <div className='h-screen w-screen flex flex-col items-center justify-center'>
      <div className='w-full max-w-[400px] mx-auto flex items-center'>
        <Swiper
        modules={[Virtual]}
        spaceBetween={50}
        slidesPerView={1}
        className=''
        onSwiper={setSwiperRef}
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
        <button className='p-2 mx-2 bg-white' onClick={(e) => handleClick(0)}>1</button>
        <button className='p-2 mx-2' onClick={(e) => handleClick(1)}>2</button>
        <button className='p-2 mx-2' onClick={(e) => handleClick(2)}>3</button>
      </div>
    </div>
  )
}

export default ExpSwiper