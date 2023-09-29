
'use client'
import Link from 'next/link'
import React from 'react'

function HeroSection() {
  return (
    <div>

        



    <div className=" h-[100vh] w-full bg-cover relative bg-no-repeat bg-center flex items-center " 
    style={{ backgroundImage: "url('img/carousel-1.jpg')" }}> 
 
 
 <div className='absolute top-0 bottom-0 left-0 right-0 bg-[#083051] opacity-30 flex flex-row justify-center items-center'>
 
</div>


<div className=' absolute max-w-[90%] space-y-8 space-x-6 mx-auto'>


<p className='h text-5xl lg:text-9xl space-x-3 text-white font-bold'>Award Wining Laboratory Center</p>

<p className='t text-2xl text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue, iaculis id elit eget, ultrices pulvinar tortor. Quisque vel lorem porttitor, malesuada arcu quis, fringilla risus.

</p>


<button className='btn border-none hover:bg-blue-950 bg-blue-500'>
   <p className='m font-bold text-2xl px-3 py-2 text-white '>
    
    <Link href="/about">
    Explore More
      </Link>
    
    </p> 
</button>


</div>


 

</div>

    </div>
  )
}

export default HeroSection