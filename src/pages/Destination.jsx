import React, { useEffect, useRef, useState } from 'react'
import Header from '../components/Header';
import information from '../information.json'
import DestinationSwiper from '../components/DestinationSwiper';

const Destination = () => {
  const [destinations, setDestinations] = useState("moon")
  const info = information
  const [cur, setCur] = useState({
    title: "",
    body: "",
    distance: "",
    travelTime: ""
  })
  const dests = ['moon', 'mars', 'europa', 'titan']
  const swiperRef = useRef(null)

  useEffect(() => {
    setCur({
      title: info.destination[destinations].title,
      body: info.destination[destinations].info,
      distance: info.destination[destinations].distance,
      travelTime: info.destination[destinations].travelTime
    })
  }, [destinations])


  return (
    <div className='w-full h-screen overflow-y-auto bg-destination-mobile bg-no-repeat bg-cover md:bg-destination-tablet xl:bg-destination-desktop'>
      <Header/>
      <div className='px-6 md:px-9 xl:px-[136px] xl:pb-14 my-6 md:my-10 flex flex-col items-center md:items-baseline'>
        <h5 className='heading-5 uppercase text-accent'><span className='font-bold opacity-25 mr-3'>01</span>Pick your destination</h5>
        <div className='w-full mt-8 md:mt-16 xl:flex xl:items-start xl:gap-32'>
          <div>
            {/* SWIPER */}
            <DestinationSwiper slide={swiperRef} setDestinations={setDestinations}/>
          </div>
          <div className='mt-7 xl:mt-0 md:mt-14 xl:flex xl:flex-col'>
            {/* BUTTONS, TITLE, INFO */}
            <div className='flex flex-col items-center xl:items-start pb-8 xl:pb-14'>
              <div className='flex gap-7'>
                {dests.map((desti, index) => (
                  <button 
                    key={index} 
                    className={`py-1 xl:py-2 mx-2 sub-heading-2 uppercase border-b-[3px] transition-all duration-200 ${destinations === desti ? 'text-accent border-white' : 'text-secondary border-transparent'}`} 
                    id={`${desti}`} 
                    onClick={() => {
                      swiperRef.current.swiper.slideTo(index, 500)
                      setDestinations(desti)
                    }}
                  >
                      {desti}
                  </button>
                ))}
              </div>
              <h2 className='mt-5 heading-2 uppercase '>{cur.title}</h2>
              <p className='body text-center xl:text-left'>{cur.body}</p>
            </div>
            {/* DISTANCE AND TRAVEL-TIME */}
            <div className='py-8 border-t-[1px] flex flex-col md:flex-row md:justify-evenly xl:justify-start gap-8 xl:gap-20'>
              <div className='flex flex-col items-center gap-3 xl:items-start'> 
                <p className='sub-heading-2 text-secondary'>AVG. DISTANCE</p>
                <p className='sub-heading-1'>{cur.distance}</p>
              </div>
              <div className='flex flex-col items-center gap-3 xl:items-start'>
                <p className='sub-heading-2 text-secondary'>EST. TRAVEL TIME</p>
                <p className='sub-heading-1'>{cur.travelTime}</p>
              </div>
            </div>
          </div>
        </div>
      </div>




      {/* <div>
        <div className='mt-14'>
          <ExpSwiper destinations={destinations} setDestinations={setDestinations}/>
          <h1 className='heading-2 text-center uppercase'>{cur.title}</h1>
          <p className='body text-center'>{cur.body}</p>
        </div>
        
      </div> */}
    </div>
  )
}

export default Destination