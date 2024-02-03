import React, { useState } from 'react'
import { Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

//! NOTES
//* I set a useState for swiperRef to access methods and properties of the Swiper
//* When button is clicked, handleClick is called to fire slideTo(index) method and slide to indexed slide.
//* .activeIndex shows the active index showing on the Slider, which will be useful later for rendering information.

const ExpSwiper = () => {

  const [swiperRef, setSwiperRef] = useState(null)

  const handleClick = (index) => {
    swiperRef.slideTo(index, 500)
    console.log(swiperRef.activeIndex);
  }

  return (
    <div className='h-screen w-screen flex flex-col items-center justify-center'>
      <div className='w-[500px] h-[500px] flex items-center'>
        <Swiper
        modules={[Virtual]}
        spaceBetween={50}
        slidesPerView={1}
        className=' w-fit h-[90%]'
        onSwiper={setSwiperRef}
        >
          <SwiperSlide virtualIndex={0}>
            {({ isActive }) => (
              <div className={`flex items-center justify-center transition-opacity duration-300 ${isActive? 'opacity-100': 'opacity-0'}`}>
                <img src="/assets/destination/image-mars.webp" alt=""/>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex items-center justify-center'>
              <img src="/assets/destination/image-moon.webp" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex items-center justify-center'>
              <img src="/assets/destination/image-titan.webp" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='bg-green-400 px-9'>
        <button className='p-2 bg-slate-400 mx-2' onClick={() => handleClick(0)}>1</button>
        <button className='p-2 bg-slate-400 mx-2' onClick={() => handleClick(1)}>2</button>
        <button className='p-2 bg-slate-400 mx-2' onClick={() => handleClick(2)}>3</button>
      </div>
    </div>
  )
}

export default ExpSwiper