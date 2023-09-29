'use client'
import React from 'react'

import Image from 'next/image'


function Section() {
  return (
    <div className=' my-24'>
    <div className='g grid grid-cols-1 lg:grid-cols-2'>
            <div className='flex flex-row flex-wrap w-full'>
                <div className='  flex flex-row'>
            <div ><Image alt='books' className='w-full' width={200} height={200} src={'/img/about-1.jpg'}/> </div>
            <div ><Image alt='books'  className=' w-full' width={200} height={200} src={'/img/about-2.jpg'}/> </div>
            </div>
            <div className=' flex flex-row'>
            <div><Image  alt='books'  className=' w-full' width={200} height={200} src={'/img/about-3.jpg'}/> </div>
            <div className=' flex  items-center justify-center w-52 h-52  bg-[#3368C6]'>
                <div className=' flex items-center'>
             
                    <div className='bg-white h-11 w-11 rounded-full flex items-center justify-center'>
                    <p className=' text-2xl'>25+</p>
                    </div>
                  <p className=' text-2xl text-white'>Years of Experience</p>
    
                 </div>
    
                 </div>
            </div>
    
            </div>
    
            <div>
    
                <div>
    <div className=' my-7 text-4xl md:text-5xl font-bold'> Trusted Lab Experts and Latest Lab Technologies</div>
    
    <div className='t text-[#A0A6C4]'>Lorem ipsum dolor
     sit amet, consectetur adipiscing elit. Curabitur tellus augue, iaculis id elit eget, ultrices pulvinar tortor. Quisque vel lorem porttitor, malesuada arcu quis, fringilla risus. Pellentesque eu consequat augue.
    
    </div>
                </div>
    
                <div className=' gap-7 mx-6 my-2 text-2xl relative text-white flex  items-center flex-wrap'>
    
                <div className=' flex items-center justify-center w-52 h-52 rounded-full bg-[#3368C6]'>
                <div>
                        <div>Awards winning</div> 
                        <div className='text-4xl font-bold'>9999</div>
                        </div>
                    </div>
    
                    <div className='pl-4 flex items-center justify-center  w-52 h-52 rounded-full bg-[#8A91AC]'>
                       
                    <div>
                        <div>Complete cases</div> 
                        <div className='text-4xl font-bold'>9999</div>
                        </div>
                      
    
                    </div>
    
                    <div className=' lg:absolute lg:top-24 lg:left-24 flex items-center justify-center  w-52 h-52 rounded-full bg-[#031B4E]'>
                     
                    <div>
                        <div>Happy clients</div> 
                        <div className='text-4xl font-bold'>9999</div>
                        </div>
         
                    </div>
    
                </div>
    
            </div>
    
            </div>
    
    
    <div>
    
    </div>
    
          </div>
    
  )
}

export default Section