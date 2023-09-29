'use client'
import Team from '@/components/about/Team'
import Common from '@/components/common/Common'
import Foot from '@/components/common/Foot'
import Navbar from '@/components/common/Navbar'
import SideCard from '@/components/service/SideCard'
import React from 'react'

function about() {
  return (
    <main>

<Navbar/>



<section>

    <Common title={'Our Team '}/>
</section>



<main className='max-w-[90%] mx-auto overflow-auto'>

  <section>
    <SideCard/>
  </section>

  <section>
    <Team/>
  </section>

</main>


<section>
       <Foot/>
</section>


    </main>
  )
}

export default about