/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import gears from '../../assets/./gears-svgrepo-com 1.svg'
import navLogo from '../../assets/./JOHN DOE_free-file 1.png'
import picture from '../../assets/./picture.png'
// import '@fontawesome/fontawesome-free/css/all.min.css'
import './header.css'

const Header = () => {

  const [isOpen, setIsOpen] = React.useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className='flex top-0 overflow-hidden sticky w-full  bg-white justify-between p-6'>
        <div>
          <img src={navLogo} alt="navLogo" />
        </div>
        <div className='flex flex-col gap-3 items-center'>
          <div className='menu-icon' onClick={toggleNavbar}>
            <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          { isOpen ?  
            <div className='flex flex-col gap-2'>
              <a href="#skills">Skills</a>
              <div className='Profile-gears flex text-red-500 '>
                <img src={gears} alt="Profile-gears" className=''/>
                <a href="#Projects">Projects</a>
              </div>
              <a href="#Contact">Contact Me</a>
            </div> 
          : ""}
        </div>
        <div className='nav-links'>
          <a href="#skills">Skills</a>
          <div className='Profile-gears flex text-red-500 '>
            <img src={gears} alt="Profile-gears" className=''/>
            <a href="#Projects">Projects</a>
          </div>
          <a href="#Contact">Contact Me</a>
        </div>
      </nav>
      <div className='header flex justify-between px-11 pt-20'>
        <div className='Bio lg:pr-32'>
          <h2>Hi👋, I'm a</h2>
          <h1>Software Developer</h1>
          <h3 className='intro'>I'm <span>John Doe,</span> a developer dedicated to making the world a better place one line of code at a time </h3>
          <button className='button'> Hire me</button>
        </div>
        <div>
          <img src={picture} alt="devPicture" className='devPicture -ml-34'/>
        </div>
      </div>
    </>
  )
}

export default Header