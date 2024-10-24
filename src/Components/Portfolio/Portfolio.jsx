import React from 'react'
import gears from '../../assets/./gears-svgrepo-com 1.svg'
import Project1 from '../../assets/./Rectangle 5.png'
import Project2 from '../../assets/./Rectangle 4.png'
import Project3 from '../../assets/./Rectangle 3.png'
import arrow from '../../assets/./Arrow.png'
import './portfolio.css'

const Portfolio = () => {
  return (
    <>
      <div className=' bg-blue-900 mt-60'>
        <div className='flex items-center text-white text-xl font-bold justify-center pt-10'>
            <img src={gears} alt="Profile-gears" className=''/>
            <h1>Projects</h1>
        </div> 
        <p className='flex items-center justify-center text-white text-lg'>A selected number of projects</p>
        <div className='projects flex gap-3 justify-evenly '>
          <div className='project flex flex-col pb-6 justify-center items-center border-blue-300 rounded-md text-white border-2 my-10'>
            <img src={Project1} alt="Project1" className='w-100' />
            <p className='my-5 '>Made a social media manager template using <br /> HTML 5, CSS and JS.</p>
            <button className='flex justify-center items-center gap-3 text-white border-2 border-white p-2 w-40'>
              Learn More<img src={arrow} alt="Arrow" />
            </button>
          </div>
          <div className='project flex flex-col pb-6 justify-center items-center border-blue-300 rounded-md text-white border-2  my-10 '>
            <img src={Project2} alt="Project2" className='project3 -mt-6 rounded-t-md' />
            <p className='my-5'>Made a simple card using  HTML 5, CSS and JS.</p>
            <button className='flex justify-center items-center gap-3 text-white border-2 border-white p-2 w-40'>
              Learn More<img src={arrow} alt="Arrow" />
            </button>
          </div>
          <div className='project flex flex-col pb-6 justify-center items-center border-blue-300 rounded-md text-white border-2  my-10'>
            <img src={Project3} alt="Project3" className=' project3 -mt-6 rounded-t-md' />
            <p className='my-5 '>Made an IP address tracking website.</p>
            <button className='flex justify-center items-center gap-3 text-white border-2 border-white p-2 w-40'>
              Learn More<img src={arrow} alt="Arrow" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio