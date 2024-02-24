import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCreative } from 'swiper/modules'
import useGetWindowWidth from '../hooks/useGetWindowWidth'

import 'swiper/css'
import '../styles/links.css'
import 'swiper/css/effect-creative'

// IMAGES
import launchVehicleLandscape from '/assets/technology/image-launch-vehicle-landscape.jpg'
import launchVehiclePortrait from '/assets/technology/image-launch-vehicle-portrait.jpg'
import spaceportLandscape from '/assets/technology/image-spaceport-landscape.jpg'
import spaceportPortrait from '/assets/technology/image-spaceport-portrait.jpg'
import spaceCapsuleLandscape from '/assets/technology/image-space-capsule-landscape.jpg'
import spaceCapsulePortrait from '/assets/technology/image-space-capsule-portrait.jpg'

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
      <SwiperSlide><img src={width > 1280 ? launchVehiclePortrait : launchVehicleLandscape} alt="Launch Vehicle" /></SwiperSlide>
      <SwiperSlide><img src={width > 1280 ? spaceportPortrait : spaceportLandscape} alt="Spaceport"/></SwiperSlide>
      <SwiperSlide><img src={width > 1280 ? spaceCapsulePortrait : spaceCapsuleLandscape} alt="Space Capsule"/></SwiperSlide>
    </Swiper>
  )
}

export default TechSwiper