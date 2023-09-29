'use client'
import Link from 'next/link';
import React from 'react'

import { RxHamburgerMenu } from "react-icons/rx";
import DropDown from './DropDown';
export default function Navbar() {
  return (
<div className='max-w-[90%] mx-auto overflow-auto'>
    <div className="navbar bg-base-100 flex-row justify-center ">
    <div className="flex-1">
      <a className="font-semibold"><h1 className='  text-blue-500  text-3xl'>Lab<span className=' text-black text-3xl'>Sky</span> </h1></a>
    </div>




<div className='  hidden  flex-1 lg:flex flex-row justify-around text-2xl font-semibold '>

<div className=' hover:text-blue-500 hover:bg-gray-500 hover:px-2 hover:py-1 hover:rounded-2xl'>
      <button onClick={()=>{}}>
      <Link href="/">
      Home
      </Link>
    
      </button>
    </div>  

    <div className=' hover:text-blue-500 hover:bg-gray-500 hover:px-2 hover:py-1 hover:rounded-2xl'>
      <button onClick={()=>{}}>
      <Link href="/about">
     About
      </Link>
      </button>
    </div>  

    <div className=' hover:text-blue-500 hover:bg-gray-500 hover:px-2 hover:py-1 hover:rounded-2xl'>
      <button onClick={()=>{}}>
      <Link href="/services">
      Services
      </Link>
      </button>
    </div>  


    <div className=' hover:text-blue-500 hover:bg-gray-500 hover:px-2 hover:py-1 hover:rounded-2xl'>
      <button onClick={()=>{}}>
      <Link href="/contact">
      Contact
      </Link>
      </button>
    </div>  


    <div className=' hover:text-blue-500 hover:bg-gray-500 hover:px-2 hover:py-1 hover:rounded-2xl'>
      <button onClick={()=>{}}>
    <Link href='https://github.com/TenexDesigns/' target='_blank'>
      Source Code
   </Link>
      </button>
    </div>  
    
 

    </div>




    <div className='flex-none lg:hidden'>
    {/* <div className=' '>
        <button className=' border-2 border-gray-400 focus:border-4 focus:border-gray-500 px-2 py-1'>
        <RxHamburgerMenu style={{ color:'#111827', fontSize: '27px' }}  />
        </button>
      </div> */}
      <DropDown/>

    </div>



  </div>

  </div>


  )
}
