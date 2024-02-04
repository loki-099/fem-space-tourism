import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import ExpSwiper from '../components/ExpSwiper';
import information from '../information.json'

const Destination = () => {
  const [destinations, setDestinations] = useState("mars")
  const info = information
  const [cur, setCur] = useState({
    title: "",
    body: ""
  })

  useEffect(() => {
    setCur({
      title: info.destination[destinations].title,
      body: info.destination[destinations].info
    })
  }, [destinations])


  return (
    <div className='w-full h-screen overflow-y-auto bg-destination-mobile bg-no-repeat bg-cover md:bg-destination-tablet xl:bg-destination-desktop'>
      <Header/>
      <div>
        <div className='mt-14'>
          <ExpSwiper setDestinations={setDestinations}/>
          <h1 className='heading-2 text-center uppercase'>{cur.title}</h1>
          <p className='body text-center'>{cur.body}</p>
        </div>
        
      </div>
    </div>
  )
}

export default Destination