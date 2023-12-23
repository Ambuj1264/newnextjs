import React from 'react'
import { Rating } from '@/components/ui/rating/StarRating';
import { arr, reviewArr,paraGraph } from '@/utils/constant';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <>
         <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className='text-[16px] font-semibold text-[#333] pb-5'>Yoga Teacher Training Course in Rishikesh, India as confident teachers with a strong and solid teaching skill set ready to begin their career in the world of Yoga.</h3>
            <p className='text-[16px] font-normal text-[#666] pb-5'>Yoga Teacher Training in India at Arogya Yoga School as confident teachers with strong and solid teaching skills, ready to start their career in yoga. They develop a unique art of teaching along with a comprehensive understanding of asana, pranayama, shatkarma, alignment, ayurveda, philosophy, anatomy, mudras, mantras and meditation. Our Yoga Alliance registered Yoga Teacher Training in India is intensive and enriching for yoga beginners to More...</p>
            <div>
                <h3 className='font-bold text-xl p-5 px-0'>Past Events</h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {arr.map((item) => (
                        <div className="bg-white border shadow" key={item.id}>
                             <Image width={800} height={800} className="w-full h-full" src="/assets/images/MaskGroup.png" alt="" />
                           
                        </div>
                    ))}
                </div>
                
            </div>
            <h1 className='text-[20px] font-semibold text-[#333] pb-5 mt-5'>Terms And Conditions</h1>

           { paraGraph.map((value: string)=>
            <p className='text-[16px] font-normal text-[#666] pb-5 '>{value}</p>
          )}
        </div>

    </>
  )
}

export default About

