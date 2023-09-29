'use client'
import React from 'react'
import Socials from '../common/Socials'

function SideCard() {
  return (
    <div className="card card-side my-5 bg-base-100 shadow-xl">
  <figure><img className='h h-full' src={'/img/team-1.jpg'} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">Dr. John Martin</h2>
    <div>
        <div className='flex flex-col my-4 text-gray-500'>
            <div>CEO & Founder</div>
            <div>Labsky, New York, USA</div>
        </div>

        <div>
            <div className=' my-8 card-title'>Biography</div>
            <div className='m my-4'>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue, iaculis id elit eget, ultrices pulvinar tortor. Quisque vel lorem porttitor, malesuada arcu quis, fringilla risus. Pellentesque eu consequat augue.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue, iaculis id elit eget, ultrices pulvinar tortor. Quisque vel lorem porttitor, malesuada arcu quis, fringilla risus. Pellentesque eu consequat augue.
                </p>

                <div>
                    <Socials/>
                </div>
            </div>
        </div>
    </div>

  </div>
</div>
  )
}

export default SideCard