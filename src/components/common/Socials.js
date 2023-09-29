'use client'
import { BiSolidMap,BiLogoLinkedin} from "react-icons/bi";
import { IoMdCall } from "react-icons/io";
import { FaFacebookF,FaGreaterThan } from "react-icons/fa6";
import { BsTwitter ,BsInstagram} from "react-icons/bs";
import { HiOutlineMail} from "react-icons/hi";

function Socials() {
  return (
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
  )
}

export default Socials