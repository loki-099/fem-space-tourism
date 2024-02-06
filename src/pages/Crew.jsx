import React from 'react'
import Header from '../components/Header'

const Crew = () => {
  return (
    <div className='w-full h-screen overflow-y-auto bg-crew-mobile bg-no-repeat bg-cover md:bg-crew-tablet xl:bg-crew-desktop'>
      <Header/>
    </div>
  )
}

export default Crew