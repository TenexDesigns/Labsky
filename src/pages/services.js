'use client'

import Section from '@/components/about/Section'
import Common from '@/components/common/Common'
import Foot from '@/components/common/Foot'
import Message from '@/components/common/Message'
import Navbar from '@/components/common/Navbar'
import Cards from '@/components/service/Cards'
import React from 'react'

function about() {
  return (
    <main>

<Navbar/>



<section>

    <Common title={'Services'}/>
</section>



<main>

<section>
        <Message/>
    </section>


<section>
    <Cards/>
</section>
</main>

<section>
<Section/>

</section>

<section>
       <Foot/>
</section>


    </main>
  )
}

export default about