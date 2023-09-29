'use client'
import HeroSection from '@/components/about/HeroSection'
import MedSection from '@/components/about/MedSection'
import Section from '@/components/about/Section'
import Team from '@/components/about/Team'
import Foot from '@/components/common/Foot'
import Message from '@/components/common/Message'
import Navbar from '@/components/common/Navbar'
import Card from '@/components/service/Card'
import Cards from '@/components/service/Cards'
import SideCard from '@/components/service/SideCard'

function index2() {
  return (
<main>

<nav>
    <Navbar/>
    </nav>


<section>
    <HeroSection/>
</section>


<main className='max-w-[90%] mx-auto overflow-auto'>

    <section>
        <Section/>
    </section>


<section>
<div className=' mx-8 gap-2 my-7 w-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>

    <Card title={'Award Winning'} body={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.'} action={'More'} image={'/img/team-1.jpg'}/>
    <Card title={'Expet Doctors'} body={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.'}  action={'More'} image={'/img/team-2.jpg'}/>
    <Card title={'Fair Prices'} body={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.'}  action={'More'} image={'/img/team-3.jpg'}/>
    <Card title={'24/7 Support'} body={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.'}  action={'More'} image={'/img/team-5.jpg'}/>
    </div>
</section>


<section>
        <Message/>
    </section>


    <section>
        <Cards/>
    </section>



    <section>
        <SideCard/>
    </section>


<section>
    <Team/>
</section>

</main>


<section>
        <MedSection/>
    </section>

<section>
    <Foot/>
</section>







</main>
  )
}

export default index2