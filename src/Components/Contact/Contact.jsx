import React from 'react'
import './contact.css'
import manStanding from '../../assets/./man standing on chats 1.png'
import paperPlane from '../../assets/./buttton paper plane 1.png'

const Contact = () => {
  return (
    <>
      <h1 className='flex items-center text-red-600 text-xl font-bold justify-center pt-10'>Contact me</h1>
      <div className='contact flex justify-center gap-20 py-16 px-16'>
        <div>
          <img src={manStanding} alt="manStanding" className='h-100'/>
        </div>
        <div >
          <form action="post" className='flex flex-col gap-10'>
            <input type="email" id='email'placeholder='Enter email address' className='p-4 rounded-md shadow-md'/> 
            <textarea id="emailContent" name="emailContent" rows="10" cols="70" className='pt-4 pl-6  shadow-md rounded-md resize-none' placeholder='Enter message:'>            
            </textarea>
            <button className='flex justify-center gap-3 items-center bg-blue-900 py-3 px-3 -mt-2 mx-40 rounded-md text-white'>Send Message <img src={paperPlane} alt="paperPlane" /></button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact