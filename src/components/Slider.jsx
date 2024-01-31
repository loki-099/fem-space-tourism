import React from 'react'

const Slider = ( { isOpen, setIsOpen } ) => {

  return (
    <div className={`w-[68%] h-screen absolute bg-white/[4%] ${isOpen ? 'right-0' : '-right-full'} top-0 backdrop-blur-[40px] ease-out duration-500`}>
      <button className='absolute right-6 top-9' onClick={() => {setIsOpen((prev) => !prev)}}><img src="./assets/shared/icon-close.svg" alt="" /></button>
      <nav className='mt-28 pl-8'>
        <ul className='flex flex-col gap-6'>
          <a href="" className='nav-text uppercase border-r-4'><li className='py-1'><span className='font-bold mr-3'>00</span>Home</li></a>
          <a href="" className='nav-text uppercase'><li className='py-1'><span className='font-bold mr-3'>01</span>Destination</li></a>
          <a href="" className='nav-text uppercase'><li className='py-1'><span className='font-bold mr-3'>02</span>Crew</li></a>
          <a href="" className='nav-text uppercase'><li className='py-1'><span className='font-bold mr-3'>03</span>Technology</li></a>
        </ul>
      </nav>
    </div>
  )
}

export default Slider