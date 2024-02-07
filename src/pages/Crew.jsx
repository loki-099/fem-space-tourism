import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import information from '../information.json'
import CrewSwiper from '../components/CrewSwiper';
import { useRef } from 'react';

const Crew = () => {
  const [cur, setCur] = useState({
    name: "",
    position: "",
    body: ""
  })

  const crews = ['douglas-hurley', 'mark-shuttleworth', 'victor-glover', 'anousheh-ansari']
  const [curCrew, setCurCrew] = useState('douglas-hurley')
  const swiperRef = useRef()
  
  useEffect(() => {
    console.log(curCrew);
    setCur({
      name: information.crews[curCrew].name,
      position: information.crews[curCrew].position,
      body: information.crews[curCrew].info
    })
  }, [curCrew])

  return (
    <div className='relative w-full h-screen overflow-y-auto bg-crew-mobile bg-no-repeat bg-cover md:bg-crew-tablet xl:bg-crew-desktop'>
      <Header/>
      <div className='px-6 md:px-9 xl:px-[136px] xl:pb-14 my-6 md:my-10 flex flex-col items-center md:items-baseline'>
        <h5 className='heading-5 uppercase text-accent'><span className='font-bold opacity-25 mr-3'>02</span>Meet your Crew</h5>
        <div className='mt-8 w-full'>
          {/* SWIPER */}
          <div className='w-full mx-auto max-w-[500px] h-[225px]'>
            <CrewSwiper crews={crews} slide={swiperRef} setCurCrew={setCurCrew}/>
          </div>
          {/* NAME, POSITION, INFO, BUTTON */}
          <div className='mt-8 flex flex-col gap-8'>
            <div className='flex justify-center gap-4 '>
              {crews.map((crew, index) => (
                <button 
                  className={`w-[10px] h-[10px] rounded-full ${crew === curCrew ? 'bg-white' : 'bg-white/20' }`}
                  onClick={() => {
                    swiperRef.current.swiper.slideTo(index, 500)
                  }}></button>
              ))}
            </div>
            <div className='flex flex-col items-center'>
              <h4 className='heading-4 uppercase opacity-50'>{cur.position}</h4>
              <h3 className='heading-3 uppercase'>{cur.name}</h3>
              <p className='mt-4 body text-center pb-8'>{cur.body}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Crew