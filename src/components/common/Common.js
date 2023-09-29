'use client'
import Link from 'next/link'
import React from 'react'

function Common({title}) {
  return (
    <div className="h-80 w-full bg-cover relative bg-no-repeat bg-center flex items-center justify-center" 
     style={{ backgroundImage: "url('img/testimonial.jpg')" }}> 
  
  <div className='absolute top-0 bottom-0 left-0 right-0 bg-[#083051] opacity-30 flex flex-row justify-center items-center'>
  
</div>

  
  <div className=' absolute flex flex-col items-center justify-center text-white'> 
    <p className=' font-bold text-5xl md:text-6xl lg:text-8xl'> {title}</p>
    <p className='text-lg space-x-3'>

    <Link href="/">
    <span className='hover:text-blue-400'>Home  /</span>

      </Link>


      <Link href="/about">
    <span className='hover:text-blue-400'>About  /</span>

      </Link>

      <Link href="/services">
    <span className='hover:text-blue-400'>Services  /</span>

      </Link>

      <Link href="/contact">
    <span className='hover:text-blue-400'>Contact  /</span>

      </Link>
     

       
       
       </p>
  </div>
</div>
    
  )
}

export default Common