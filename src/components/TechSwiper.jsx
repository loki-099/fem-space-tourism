import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCreative } from 'swiper/modules'

import 'swiper/css'
import '../styles/links.css'
import 'swiper/css/effect-creative'

const TechSwiper = () => {
  return (
    <Swiper
      modules={[EffectCreative]}
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
      className='w-full h-[170px] absolute left-0'
    >
      <SwiperSlide className='bg-launch-vehicle-landscape bg-no-repeat bg-cover'></SwiperSlide>
      <SwiperSlide className='bg-spaceport-landscape bg-no-repeat bg-cover'></SwiperSlide>
      <SwiperSlide className='bg-space-capsule-landscape bg-no-repeat bg-cover'></SwiperSlide>
    </Swiper>
  )
}

export default TechSwiper