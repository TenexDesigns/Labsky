'use client'
import Card from './Card'

function Cards() {
  return (
    <div className=' mx-8 gap-2 w-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>


<Card image={'/img/about-1.jpg'} title={'Pathology Testing'} body={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.'} action={'Read More'}/>
<Card image={'/img/about-2.jpg'} title={'Microbiology Tests'} body={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.'} action={'Read More'}/>
<Card image={'/img/about-3.jpg'} title={'Biochemistry Tests'} body={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.'} action={'Read More'}/>
<Card image={'/img/about-2.jpg'} title={'Histopatology Tests'} body={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.'} action={'Read More'}/>
<Card image={'/img/about-1.jpg'} title={'Allergy Tests'} body={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.'} action={'Read More'}/>
<Card image={'/img/about-3.jpg'} title={'Fever Testing'} body={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.'} action={'Read More'}/>
<Card image={'/img/about-1.jpg'} title={'Urine Testing'} body={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.'} action={'Read More'}/>
<Card image={'/img/about-2.jpg'} title={'Blood Testing'} body={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.'} action={'Read More'}/>



    </div>
  )
}

export default Cards