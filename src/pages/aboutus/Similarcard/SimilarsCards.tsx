import Image from 'next/image'
import React from 'react'

const SimilarsCards = () => {
  return (
    <div className='flex-shrink-0 w-full md:w-[30%] mt-5 md:mt-2 my-2'>
<div className="max-w-sm rounded overflow-hidden shadow-lg">
  <Image width={500} height={500} className="w-full" src="/assets/images/similerEvent1.png" alt="Sunset in the mountains" />
  <div className="px-6 py-4">
  <p className="text-sm text-gray-600 flex items-center ">
  Sun 16, Oct | 6:30PM
      </p>
    <div className="font-bold text-xl mb-2"> Yoga & Meditations : Theme Based senior (35-80 years)</div>
    <p className="text-gray-700 text-base">
    Zoom India
    </p>
  </div>
        <div className=" flex justfiy-around " style={{justifyContent: "space-around"}}>
            <p className="font-bold text-l">₹ 250 Onwards</p>
            <div>
            <Image width={120} height={15} className="w-full" src="/assets/images/50Core.png" alt="Sunset in the mountains" />
            </div>

        </div>

        <hr className='my-5' />
        <div className='container mx-auto px-4 lg:mx-0 lg:px-0'>
  <div className='flex justify-between mb-2 mr-1 lg:container lg:mx-auto lg:px-4'>
    <p className='text-black text-3xl font-bold'>Free</p>
    <button className="bg-[#0A84FF] gap-2 text-white font-bold py-2 px-4 rounded inline-flex items-center">
      <Image src="/assets/images/subscriptionIcon.png" width={19} height={17} alt='icon' />
      <span>BOOK NOW</span>
    </button>
  </div>
</div>


    </div>
</div>
  )
}

export default SimilarsCards