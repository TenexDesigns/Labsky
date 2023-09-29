'use client'
import Navbar from '@/components/common/Navbar'
import React, { useEffect } from 'react'
import GoogleMap from '@/components/common/GoogleMap'

import { FiSmartphone, FiMail} from "react-icons/fi";
import Foot from '@/components/common/Foot'
import Common from '@/components/common/Common';










function index() {


  return (
 <main  >

        <Navbar/>
 

<section>

<Common title={'Contacts'}/>



</section>


<main className=' max-w-[90%] mx-auto '>


  <section className=''>


   <div className='max-w-[90%] md:max-w-[70%] lg:max-w-[55%] mx-auto  my-28 flex flex-col justify-center items-center '>
<div className='flex flex-col justify-center items-center mb-6 font-bold '>
<h4 className=' text-2xl md:text-4xl lg:text-6xl whitespace-nowrap'>Have Any Query? Feel Free To </h4>
<h4 className='text-2xl md:text-4xl lg:text-6xl whitespace-nowrap'>Contact Us</h4>
</div>



<p className='text-1xl md:text-2xl lg:text-3xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue, iaculis id elit eget, ultrices pulvinar tortor.</p>



   </div>



  </section>








<section>

  <div className='grid grid-cols-1 lg:grid-cols-2 '>




<div className=' h-28   bg-[#3368C6] flex flex-row items-center '>

<div className='mx-10 flex flex-row items-center'>
<div className=' relative'>

<FiSmartphone style={{color:'black',strokeWidth:'1px',fontSize:'70px'}}/>
<p className='absolute bottom-0 left-0 h-9 w-9 rounded-full bg-white'></p>

</div>


<div className='flex flex-col'>
  <p className='t text-white text-2xl'> Call us</p>
  <p className='text-white text-4xl'>+01234567890</p>

</div>
</div>
</div>

<div className=' h-28 border-t border-dashed md:border-t-0 md:border-l md:border-dashed border-gray-400 bg-[#3368C6] flex flex-row items-center '>

<div className='mx-10 flex flex-row items-center'>
<div className=' relative'>

<FiMail style={{color:'black',strokeWidth:'1px',fontSize:'70px'}}/>
<p className='absolute bottom-0 left-0 h-9 w-9 rounded-full bg-white'></p>

</div>

<div className='flex flex-col'>
  <p className='t text-white text-2xl'>Mail us</p>
  <p className='text-white text-4xl'>info@example.com</p>

</div>
</div>
</div>


<div className=' '>


  <div>
<div className=' m-2'>
 <p>The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a className=' text-blue-500 cursor-pointer hover:text-blue-700'>Download Now.</a></p> 
</div>

<form>

<div className='flex flex-row'>
<input type="text" placeholder="Type here" className=" p-4 text-1xl border-2  w-full flex-1  m-2 " />
<input type="text" placeholder="Type here" className=" p-4 text-1xl border-2 w-full flex-1  m-2" />
</div>

<div className='flex flex-col'>
  <input type='text' className='m-2 p-4 border-2' placeholder='Type here'/>
<textarea className='m-2 p-4  border-2' rows={5} placeholder='Write your comment here'>

</textarea>

</div>



</form>


<button className='m-2 px-4 py-2 bg-blue-500 font-bold text-white'>
  Send Messages
</button>


  </div>

</div>


<div className=' pt-4 pl-4 '>
  <div className=' w-full h-full '>
    <GoogleMap/>
  </div>


</div>




  </div>

</section>





</main>
<section>
       <Foot/>
</section>
 </main>
  )
}

export default index