'use client'

import React, { useEffect } from 'react'
import { BiSolidMap,BiLogoLinkedin} from "react-icons/bi";
import { IoMdCall } from "react-icons/io";
import { FaFacebookF,FaGreaterThan } from "react-icons/fa6";
import { BsTwitter ,BsInstagram} from "react-icons/bs";
import { HiOutlineMail} from "react-icons/hi";

function Foot() {
  return (
<div className=" mt-10 h-[80vh] w-full bg-cover  bg-no-repeat bg-center flex items-center overflow-auto" 
     style={{ backgroundImage: "url('img/testimonial.jpg')" }}>
      
<div className='grid grid-cols-1 lg:grid-cols-2 max-w-[90%] mx-auto'>

  <div className=' h-96 w-full  text-white'>

<div>
  <a className="font-semibold mx-10"><h1 className='  text-blue-500  text-3xl'>Lab<span className=' text-white text-3xl'>Sky</span> </h1></a>
  </div>


<div>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue, iaculis id elit eget, ultrices pulvinar tortor.
</div>


<div className='flex flex-col gap-2 mt-4 '>

<div className='flex flex-row items-center space-x-2'>
<BiSolidMap/>
<p>123 Street, New York, USA</p>
</div>


<div className='flex flex-row items-center space-x-2'>
<IoMdCall/>
<p>123 Street, New York, USA</p>
</div>


<div className='flex flex-row items-center space-x-2'>
<HiOutlineMail style={{color:'white'}}/>
<p>123 Street, New York, USA</p>
</div>




</div>


<div className='flex flex-row mt-3 space-x-2'>
<div className=' h-10 w-10 rounded-full bg-[#3368C6] flex  items-center justify-center'>
  <BsTwitter style={{color:'white'}}/>
  </div>

  <div className=' h-10 w-10 rounded-full bg-[#3368C6] flex  items-center justify-center'>
  <FaFacebookF style={{color:'white'}}/>
  </div>


  <div className=' h-10 w-10 rounded-full bg-[#3368C6] flex  items-center justify-center'>
  <BiLogoLinkedin style={{color:'white'}}/>
  </div>


  <div className=' h-10 w-10 rounded-full bg-[#3368C6] flex  items-center justify-center'>
  <BsInstagram style={{color:'white'}}/>
  </div>
</div>



    
  </div>


  <div className='h-96 w-full '>
   

   <div className='grid grid-cols-1 lg:grid-cols-2'>

   <div>
      <h1 className=' my-4 text-2xl font-semibold text-emerald-300'> Popular Links</h1>

      <div className='flex flex-row items-center space-x-2'>
<FaGreaterThan style={{ fontSize:'12px'}}/>
<p className='text-1xl text-white'> About us</p>
      </div>


      <div className='flex flex-row items-center space-x-2'>
<FaGreaterThan style={{ fontSize:'12px'}}/>
<p className='text-1xl text-white'> Contact us</p>
      </div>


      <div className='flex flex-row items-center space-x-2'>
<FaGreaterThan style={{ fontSize:'12px'}}/>
<p className='text-1xl text-white'> Our Services</p>
      </div>

      <div className='flex flex-row items-center space-x-2'>
<FaGreaterThan style={{ fontSize:'12px'}}/>
<p className='text-1xl text-white'>Terms & Conditions</p>
      </div>


      <div className='flex flex-row items-center space-x-2'>
<FaGreaterThan style={{ fontSize:'12px'}}/>
<p className='text-1xl text-white'>Support</p>
      </div>
    </div>




    <div>
      <h1 className=' my-4  text-2xl font-semibold text-emerald-300'> Quick Links</h1>

      <div className='flex flex-row items-center space-x-2'>
<FaGreaterThan style={{ fontSize:'12px'}}/>
<p className='text-1xl text-white'> About us</p>
      </div>


      <div className='flex flex-row items-center space-x-2'>
<FaGreaterThan style={{ fontSize:'12px'}}/>
<p className='text-1xl text-white'> Contact us</p>
      </div>


      <div className='flex flex-row items-center space-x-2'>
<FaGreaterThan style={{ fontSize:'12px'}}/>
<p className='text-1xl text-white'> Our Services</p>
      </div>

      <div className='flex flex-row items-center space-x-2'>
<FaGreaterThan style={{ fontSize:'12px'}}/>
<p className='text-1xl text-white'>Terms & Conditions</p>
      </div>


      <div className='flex flex-row items-center space-x-2'>
<FaGreaterThan style={{ fontSize:'12px'}}/>
<p className='text-1xl text-white'>Support</p>
      </div>
    </div>



   </div>


<div className='flex flex-col mx-7 gap-3 '>
  <p className='text text-2xl font-bold'> New Letter </p>
<form>
  <input type='text' placeholder=' usename@email.com' className=' p-3 w-full bg-white'/>
</form>

<button className=' btn px-4 py-2 text-2xl hover:bg-black text-white bg-blue-500 w-1/3 rounded-xl'>
  Sign up
</button>

</div>
  </div>


</div>
      
       </div>
  )
}

export default Foot