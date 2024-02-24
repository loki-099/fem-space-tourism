import React, { useEffect, useRef, useState } from 'react'
import Header from '../components/Header';
import TechSwiper from '../components/TechSwiper';
import data from '../information.json'

const Technology = () => {
  const [cur, setCur] = useState({
    name: '',
    info: ''
  })
  const technologies = ["launch-vehicle", "spaceport", "space-capsule"]
  const [curTech, setCurTech] = useState('launch-vehicle')
  const swiperRef = useRef()

  useEffect(() => {
    setCur({
      name: data.technology[curTech].name,
      info: data.technology[curTech].info
    })
  }, [curTech])

  return (
    <div className='relative w-full h-screen overflow-y-auto bg-technology-mobile bg-no-repeat bg-cover md:bg-technology-tablet xl:bg-technology-desktop'>
      <Header/>
      <div className='w-full flex flex-col items-center px-6 md:px-9 xl:px-[136px] xl:pb-0 my-6 md:my-0 md:mt-10 md:items-baseline md:pb-0'>
        <h5 className='heading-5 uppercase text-accent'><span className='font-bold opacity-25 mr-3'>03</span>Space Launch 101</h5>
        <div className='mt-8 md:mt-14'>
          <div className='w-full h-[170px] md:h-[310px] xl:w-[500px] xl:h-[500px] xl:relative'>
            {/* <div className={`${width > 768 ? 'bg-launch-vehicle-portrait' : 'bg-launch-vehicle-landscape'} bg-cover bg-center w-full h-[247px] md:w-[500px] md:h-[500px] absolute left-0 right-0`}>
            </div> */}
            <TechSwiper slide={swiperRef} technologies={technologies} setCurTech={setCurTech}/>
          </div>
          {/* BUTTONS, NAME, INFO */}
          <div className='mt-12 flex flex-col items-center'>
            <div className='flex gap-4'>
              {/* BUTTONS */}
              {technologies.map((technology, ind) => (
                <button className={`heading-4 rounded-full w-10 h-10 border-[1px] ${curTech == technology ? 'bg-white border-white text-primary' : 'bg-transparent border-white/25 text-white'}`} key={ind} onClick={() => {
                  swiperRef.current.swiper.slideTo(ind, 500)
                }}>{ind + 1}</button>
              ))}
            </div>
            <div className='mt-7 flex flex-col items-center'>
              {/* NAME, INFO */}
              <p className='sub-heading-2 uppercase text-secondary'>The Terminology...</p>
              <h3 className='heading-3 uppercase mt-2'>{cur.name}</h3>
              <p className='body mt-4 text-center'>{cur.info}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technology