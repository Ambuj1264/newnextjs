import Image from 'next/image'
import React from 'react'
import SimilarsCards from './Similarcard/SimilarsCards'

const SimilarEvents = () => {
  return (
    <div className='container'>
    <div className='mx-auto py-5 flex'>
      <h2 className='text-2xl font-bold inline-block '>
        <Image src="/assets/images/Vector.png" alt='' width={25} height={10} className='inline-block '/>

         &nbsp; Similar Events</h2>
     
      </div>
      <div className='flex flex-wrap justify-evenly'>
      <SimilarsCards />
      <SimilarsCards />
      <SimilarsCards />
      </div>
    </div>
  )
}

export default SimilarEvents