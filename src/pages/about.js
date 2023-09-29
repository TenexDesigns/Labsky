'use client'

import MedSection from '@/components/about/MedSection'
import Section from '@/components/about/Section'
import Team from '@/components/about/Team'
import Common from '@/components/common/Common'
import Foot from '@/components/common/Foot'
import Navbar from '@/components/common/Navbar'
import SideCard from '@/components/service/SideCard'
import Image from 'next/image'
import React from 'react'

function about() {
  return (
    <main>
<header>
<Navbar/>

</header>

<section>

    <Common title={'About'}/>
</section>



<main  className='max-w-[90%] mx-auto overflow-auto'>

<section>
<Section/>
    </section>



    <section>
       <Team/>
    </section>

    <section><SideCard/></section>

</main>


<section className=' w-full'>

    <MedSection title={'George'}/>


</section>

<section>
       <Foot/>
</section>


    </main>
  )
}

export default about