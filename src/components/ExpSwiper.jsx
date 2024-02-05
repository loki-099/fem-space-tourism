import React, { useRef, useState } from 'react'
import { Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/links.css'

//! NOTES
//* I set a useState for swiperRef to access methods and properties of the Swiper
//* When button is clicked, handleClick is called to fire slideTo(index) method and slide to indexed slide.
//* .activeIndex shows the active index showing on the Slider, which will be useful later for rendering information.

const ExpSwiper = ({ destinations, setDestinations }) => {

  const dest = ['moon', 'mars', 'europa', 'titan']
  const [swiperRef, setSwiperRef] = useState(null)
  const slide = useRef()

  const handleClick = (index) => {
    switch (index){
      case 0:
        swiperRef.slideTo(index, 500)
        setDestinations("moon")
        break
      case 1:
        swiperRef.slideTo(index, 500)
        setDestinations("mars")
        break
      case 2:
        swiperRef.slideTo(index, 500)
        setDestinations("europa")
        break
      case 3:
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
          {dest.map((d, index) => {
            return (
              <SwiperSlide key={index}>
                {({ isActive }) => (
                  <div className={`flex items-center justify-center transition-opacity duration-300 ${isActive? 'opacity-100': 'opacity-0'}`}>
                    <img 
                      src={`/assets/destination/image-${d}.webp`} 
                      alt={d}
                      className='w-[200px]'
                    />
                  </div>
                )}
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      <div className='px-9 mt-5'>
        {dest.map((d, index) => (
          <button 
            key={index} 
            className={`py-1 px-3 mx-2 heading-5 uppercase border-2 rounded-xl transition-[border] ${destinations == d ? 'border-white' : 'border-transparent'}`} 
            id={`d`} 
            onClick={() => handleClick(index)}
          >
            {d}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ExpSwiper