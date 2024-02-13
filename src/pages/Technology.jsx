import React, { useEffect } from 'react'
import Header from '../components/Header';
import useGetWindowWidth from '../hooks/useGetWindowWidth';
import TechSwiper from '../components/TechSwiper';

const Technology = () => {
  const { width } = useGetWindowWidth()

  return (
    <div className='relative w-full h-screen overflow-y-auto bg-technology-mobile bg-no-repeat bg-cover md:bg-technology-tablet xl:bg-technology-desktop'>
      <Header/>
      <div className='w-full px-6 md:px-9 xl:px-[136px] xl:pb-0 my-6 md:my-0 md:mt-10 md:items-baseline md:pb-0'>
        <h5 className='heading-5 uppercase text-accent'><span className='font-bold opacity-25 mr-3'>03</span>Space Launch 101</h5>
        <div className='mt-8'>
          <div className='bg-black w-full h-[170px] md:w-[500px] md:h-[500px]'>
            {/* <div className={`${width > 768 ? 'bg-launch-vehicle-portrait' : 'bg-launch-vehicle-landscape'} bg-cover bg-center w-full h-[247px] md:w-[500px] md:h-[500px] absolute left-0 right-0`}>
            </div> */}
            <TechSwiper/>
          </div>
          <h1 className='heading-1'>Hello</h1>

        </div>
      </div>
    </div>
  )
}

export default Technology