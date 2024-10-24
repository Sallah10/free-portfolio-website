import React from 'react'
import gmail from '../../assets/./gmail-svgrepo-com 1.svg'
import whatsapp from '../../assets/./whatsapp-svgrepo-com 1.svg'
import linkedin from '../../assets/./linkedin-svgrepo-com 1.svg'
import twitter from '../../assets/./twitter-svgrepo-com 1.png'
import github from '../../assets/./github-svgrepo-com 1.png'
import './footer.css'

const Footer = () => {
  return (
    <>
      <footer className='flex justify-evenly text-white pb-20 pt-20 text-base font-bold' >
        <div className='foot flex flex-col gap-5'>
          <h3>My social media links: </h3>
          <div className='flex justify-evenly gap-8 mb-5'>
            <img className='socials' src={linkedin} alt="linkedin" />
            <img className='socials' src={whatsapp} alt="whatsapp" />
            <img className='socials' src={twitter} alt="twitter" />
            <img className='socials' src={gmail} alt="gmail" />
          </div>
        </div>
        <div className='pt-3'>
          <h3>More Projects I've worked on:</h3>
          <div className='github flex gap-2 items-center pt-3'>
            <img className='socials ' src={github} alt="github" /> <span className='text-blue-500'>@john-doe</span>on github
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer