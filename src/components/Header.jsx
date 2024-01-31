import React from 'react'

const Header = ( { setIsOpen } ) => {
  return (
    <div className='px-6 md:px-0 md:pl-9'>
      <header className='flex items-center justify-between pt-6 md:pt-0'>
        <a href="/"><img src="/assets/shared/logo.svg" alt="logo" /></a>
        <nav className='hidden md:block bg-white/[4%] backdrop-blur-[40px]'>
          <ul className='flex gap-9 px-12'>
            <a href="" className='nav-text uppercase border-b-2'><li><span className='font-bold mr-3 hidden'>00</span>Home</li></a>
            <a href="" className='nav-text uppercase'><li><span className='font-bold mr-3 hidden'>01</span>Destination</li></a>
            <a href="" className='nav-text uppercase'><li><span className='font-bold mr-3 hidden'>02</span>Crew</li></a>
            <a href="" className='nav-text uppercase'><li><span className='font-bold mr-3 hidden'>03</span>Technology</li></a>
          </ul>
        </nav>
        <button 
          onClick={() => {setIsOpen((prev) => !prev)}}
          className='md:hidden'
        >
          <img src="/assets/shared/icon-hamburger.svg" alt="" />
        </button>
      </header>
    </div>
  )
}

export default Header