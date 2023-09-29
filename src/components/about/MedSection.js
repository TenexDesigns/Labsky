'use client'
import {IoPersonAddOutline} from "react-icons/io5";
import {BsCheckAll } from "react-icons/bs";
import YouTubeEmbed from '../common/YouTubeEmbed';


function MedSection({title}) {
  return (
    <div className="  w-full bg-cover relative bg-no-repeat bg-center  text-white " 
    style={{ backgroundImage: "url('img/feature.jpg')" }}> 
 


    <div className=' max-w-[90%]  mx-auto grid  grid-cols-1 lg:grid-cols-2 overflow-auto'>


    <div className='w-full p-4 mt-4 overflow-auto py-5 bg-white'>
    <div className='max-w-[90%] mx-auto'>
    <div className='  '> 
        <h1 className=' my-9 text-5xl font-bold text-black'>The Best Medical Test & Laboratory Solution</h1>
        <p className=' text-[#91A7C7]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue, iaculis id elit eget, ultrices pulvinar tortor. Quisque vel lorem porttitor, malesuada arcu quis, fringilla risus. Pellentesque eu consequat augue</p>
    </div>

    <div className='flex flex-row'>
    <div className='f flex flex-col'>
            <div className='relative flex-1 flex flex-row my-5'>
                <div className='absolute bg-[#3368C6] opacity-80 bottom-0 left-0 h-6 w-6 rounded-full'></div>
                <IoPersonAddOutline style={{fontSize:'44px', strokeWidth:'3px', color:'black'}}/>
            </div>

            <div>
            <h1 className='f font-bold  text-3xl text-black'>Experience Doctors</h1>
            <p className=' text-black my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        
        
            </div>
        </div>

        <div className='f flex flex-col'>
            <div className='relative flex-1 flex flex-row my-5'>
                <div className='absolute bg-[#3368C6] opacity-80 bottom-0 left-0 h-6 w-6 rounded-full'></div>
                <BsCheckAll style={{fontSize:'44px', color:'black'}}/>
            </div>

            <div>
            <h1 className='f font-bold  text-3xl text-black'>Advanced Microscopy</h1>
            <p className=' text-black my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        
        
            </div>
        </div>
    

    
    </div>


<button className=' bg-blue-500 text-white btn hover:bg-blue-800 border-none'>
<p className=' font-semibold'>Explore More</p>
</button>


    </div>
    </div>






 

        <div className=' flex flex-col justify-around '>
          
        <div className='h-2/3 w-full  '>
        
            </div>

            <div className='flex flex-col p-3 gap-2 h-1/3 w-full  bg-[#3368C6]'>

            <div>
   <div className='flex justify-between'>
     <p>Sample Preparation</p>
     <p> 90%</p>
   </div>
 <progress className="progress bg-white w-full" value="90" max="100"></progress>
</div> 


<div>
   <div className='flex justify-between'>
     <p>Result Accuracy</p>
     <p> 95%</p>
   </div>
 <progress className="progress bg-white w-full" value="95" max="100"></progress>
</div> 


<div>
   <div className='flex justify-between'>
     <p>Lab Equipments</p>
     <p> 90%</p>
   </div>
 <progress className="progress bg-white w-full" value="80" max="100"></progress>
</div> 

          
            </div>



        </div>


    





    </div>






 

</div>
  )
}

export default MedSection