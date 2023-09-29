'use client'
import React from 'react'
import Card from '../service/Card'

function Team() {
  return (

        <div className=' mx-8 gap-2 my-10 w-auto grid grid-cols-1 md:grid-cols-2 lg:flex'>


<Card image={'/img/team-1.jpg'} title={'Pathology Testing'} body={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.'} action={'Read More'}/>
<Card image={'/img/team-2.jpg'} title={'Microbiology Tests'} body={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.'} action={'Read More'}/>
<Card image={'/img/team-3.jpg'} title={'Biochemistry Tests'} body={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.'} action={'Read More'}/>
<Card image={'/img/team-4.jpg'} title={'Histopatology Tests'} body={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.'} action={'Read More'}/>


    </div>
  
  )
}

export default Team