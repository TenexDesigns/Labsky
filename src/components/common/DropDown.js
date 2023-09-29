'use client'
import Link from 'next/link';
import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from 'next/router';



function DropDown() {
    const router= useRouter();
    
    const handleButtonClick1 = () => {
        router.push('/'); // Navigates to the '/about' page
      };


      const handleButtonClick2 = () => {
        router.push('/about'); // Navigates to the '/about' page
      };


  


      const handleButtonClick3 = () => {
        router.push('/services'); // Navigates to the '/about' page
      };
      const handleButtonClick4 = () => {
        router.push('/contact'); // Navigates to the '/about' page
      };


      const handleButtonClick5 = () => {
        router.push('/contact'); // Navigates to the '/about' page
      };

 
  return (
    <div className=" absolute dropdown dropdown-bottom dropdown-end">
    <label tabIndex={0} className="">

    <div className=' '>
        <button className=' border-2 border-gray-400 focus:border-4 focus:border-gray-500 px-2 py-1'>
        <RxHamburgerMenu style={{ color:'#111827', fontSize: '27px' }}  />
        </button>
      </div>
    </label>
    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
 
 
    <li>
        <button className='btn ' onClick={handleButtonClick1}>
    <div className=' hover:text-blue-500 hover:bg-gray-500 hover:px-2 hover:py-1 hover:rounded-2xl'>
   
      <Link href="/">
      Home
      </Link>
    

    </div> 
    </button> 
</li>

    
<li>
    <button className='btn ' onClick={handleButtonClick2}>

    <div className=' hover:text-blue-500 hover:bg-gray-500 hover:px-2 hover:py-1 hover:rounded-2xl'>
      
      <Link href="/about">
     About
      </Link>
  
    </div> 

    </button> 
</li>


    <li>
        <button className='btn' onClick={handleButtonClick3}>
    <div className=' hover:text-blue-500 hover:bg-gray-500 hover:px-2 hover:py-1 hover:rounded-2xl'>
     
      <Link href="/services">
      Services
      </Link>
    
    </div> 

    </button>
</li> 

    <li>

        <button className='btn ' onClick={handleButtonClick4}>

    <div className=' hover:text-blue-500 hover:bg-gray-500 hover:px-2 hover:py-1 hover:rounded-2xl'>
 
      <Link href="/contact">
      Contact
      </Link>

    </div>  
    </button>
</li>

    <li>
        <button className='btn' >

    <div className=' hover:text-blue-500 hover:bg-gray-500 hover:px-2 hover:py-1 hover:rounded-2xl'>
    <Link href='https://github.com/TenexDesigns/' target='_blank'>
    
      Source Code
      </Link>
  

      
    </div>  

    </button>
    </li>
    
 
    </ul>
  </div>
  )
}

export default DropDown