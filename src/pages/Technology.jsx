import React from 'react'
import Header from '../components/Header';

const Technology = () => {
  return (
    <div className='relative w-full h-screen overflow-y-auto bg-technology-mobile bg-no-repeat bg-cover md:bg-technology-tablet xl:bg-technology-desktop'>
      <Header/>
      <div className='px-6 md:px-9 xl:px-[136px] xl:pb-0 my-6 md:my-0 md:mt-10 flex flex-col items-center md:items-baseline md:pb-0'>
        <h5 className='heading-5 uppercase text-accent'><span className='font-bold opacity-25 mr-3'>03</span>Space Launch 101</h5>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Technology