import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { Context } from '../App'

const Header = () => {
  const [isOpen, setIsOpen] = useContext(Context)

  return (
    <div className='w-full top-0 px-6 md:px-0 md:pl-9 xl:mt-6'>
      <header className='flex items-center justify-between pt-6 md:pt-0 xl:justify-normal'>
        <a href="./" className='mr-6 w-[40px] md:w-fit'><img src="./assets/shared/logo.svg" alt="logo"/></a>
        <div className='hidden xl:block bg-white z-10 h-[1px] w-[100%] flex-1 translate-x-7'></div>
        <nav className='hidden md:block bg-white/[4%] backdrop-blur-[40px] xl:pl-5 xl:pr-[88px] xl:flex-1'>
          <ul className='flex gap-9 px-12 xl:gap-12'>
            <NavLink to='/' className='relative header nav-text uppercase'><li><span className='font-bold mr-3 hidden xl:inline'>00</span>Home</li></NavLink>
            <NavLink to='/destination' className='relative header nav-text uppercase'><li><span className='font-bold mr-3 hidden xl:inline'>01</span>Destination</li></NavLink>
            <NavLink to='/crew' className='relative header nav-text uppercase'><li><span className='font-bold mr-3 hidden xl:inline'>02</span>Crew</li></NavLink>
            <NavLink to='/technology' className='relative header nav-text uppercase'><li><span className='font-bold mr-3 hidden xl:inline'>03</span>Technology</li></NavLink>
          </ul>
        </nav>
        <button 
          onClick={() => {setIsOpen((prev) => !prev)}}
          className='md:hidden'
        >
          <img src="./assets/shared/icon-hamburger.svg" alt="" />
        </button>
      </header>
    </div>
  )
}

export default Header