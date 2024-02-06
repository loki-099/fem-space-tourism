import React, { useState } from 'react'
import Header from '../components/Header'
import information from '../information.json'
import CrewSwiper from '../components/CrewSwiper';

const Crew = () => {
  const [cur, setCur] = useState({
    name: "",
    position: "",
    body: ""
  })

  return (
    <div className='w-full h-screen overflow-y-auto bg-crew-mobile bg-no-repeat bg-cover md:bg-crew-tablet xl:bg-crew-desktop'>
      <Header/>
      <div className='px-6 md:px-9 xl:px-[136px] xl:pb-14 my-6 md:my-10 flex flex-col items-center md:items-baseline'>
        <h5 className='heading-5 uppercase text-accent'><span className='font-bold opacity-25 mr-3'>02</span>Meet your Crew</h5>
        <div className='mt-8'>
          {/* SWIPER */}
          <div className='w-full max-w-[400px] md:max-w-[500px] mx-auto flex items-center'>
            <CrewSwiper/>
          </div>
          {/* NAME, POSITION, INFO */}
          <div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Crew