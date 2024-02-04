import React from 'react'
import Header from '../components/Header';

const Destination = () => {
  return (
    <div className='w-full h-screen overflow-y-auto bg-destination-mobile bg-no-repeat bg-cover md:bg-destination-tablet xl:bg-destination-desktop'>
      <Header/>
      <h1 className='text-black'>Idol</h1>
    </div>
  )
}

export default Destination