import React, { useEffect, useRef, useState } from 'react'
import Header from '../components/Header';
import information from '../information.json'
import SwiperComponent from '../components/SwiperComponent';

const Destination = () => {
  const [destinations, setDestinations] = useState("moon")
  const info = information
  const [cur, setCur] = useState({
    title: "",
    body: ""
  })
  const dests = ['moon', 'mars', 'europa', 'titan']
  const swiperRef = useRef(null)

  useEffect(() => {
    setCur({
      title: info.destination[destinations].title,
      body: info.destination[destinations].info
    })
  }, [destinations])


  return (
    <div className='w-full h-screen overflow-y-auto bg-destination-mobile bg-no-repeat bg-cover md:bg-destination-tablet xl:bg-destination-desktop'>
      <Header/>
      <div className='px-6 my-6 flex flex-col items-center'>
        <h5 className='heading-5 uppercase text-accent'><span className='font-bold opacity-25 mr-3'>01</span>Pick your destination</h5>
        <div className='mt-8'>
          <div className='w-full max-w-[500px] mx-auto flex items-center'>
            {/* SWIPER */}
            <SwiperComponent slide={swiperRef} setDestinations={setDestinations}/>
          </div>
          <div className='mt-7'>
            {/* BUTTONS, TITLE, INFO */}
            <div className='flex flex-col items-center'>
              <div className='flex gap-7'>
                {dests.map((desti, index) => (
                  <button 
                  key={index} 
                  className={`py-1 mx-2 sub-heading-2 uppercase border-b-[3px] transition-all duration-200 ${destinations === desti ? 'text-accent border-white' : 'text-secondary border-transparent'}`} 
                  id={`${desti}`} 
                  onClick={() => {
                    swiperRef.current.swiper.slideTo(index, 500)
                    setDestinations(desti)
                  }}>
                    {desti}
                  </button>
                ))}
              </div>
            </div>
            {/* DISTANCE AND TRAVEL-TIME */}
            <div>

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