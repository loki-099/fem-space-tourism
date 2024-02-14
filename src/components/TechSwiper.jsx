import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCreative } from 'swiper/modules'
import useGetWindowWidth from '../hooks/useGetWindowWidth'

import 'swiper/css'
import '../styles/links.css'
import 'swiper/css/effect-creative'

const TechSwiper = ( { slide, technologies, setCurTech } ) => {
  const {width} = useGetWindowWidth()
  const [swiperRef, setSwiperRef] = useState(null)

  return (
    <Swiper
      modules={[EffectCreative]}
      ref={slide}
      onSwiper={setSwiperRef}
      onSlideChange={() => {
        setCurTech(technologies[swiperRef.activeIndex])
      }}
      grabCursor={true}
      effect={'creative'}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 1],
        }
      }}
      className='w-full h-[170px] md:h-[310px] xl:h-full absolute left-0'
    >
      <SwiperSlide className={`bg-launch-vehicle-${width > 1280 ? 'portrait' : 'landscape'} bg-no-repeat bg-cover`}></SwiperSlide>
      <SwiperSlide className={`bg-spaceport-${width > 1280 ? 'portrait' : 'landscape'} bg-no-repeat bg-cover`}></SwiperSlide>
      <SwiperSlide className={`bg-space-capsule-${width > 1280 ? 'portrait' : 'landscape'} bg-no-repeat bg-cover`}></SwiperSlide>
    </Swiper>
  )
}

export default TechSwiper