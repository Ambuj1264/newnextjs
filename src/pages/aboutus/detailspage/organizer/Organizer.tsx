import { Rating } from '@/components/ui/rating/StarRating';
import { arr, reviewArr } from '@/utils/constant';
import { RightArrow } from '@/utils/svg';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Organizer = () => {
    return (
        <div>
            <h3 className='text-[16px] font-semibold text-[#333] pb-5'>Yoga Teacher Training Course in Rishikesh, India as confident teachers with a strong and solid teaching skill set ready to begin their career in the world of Yoga.</h3>
            <p className='text-[16px] font-normal text-[#666] pb-5'>Yoga Teacher Training in India at Arogya Yoga School as confident teachers with strong and solid teaching skills, ready to start their career in yoga. They develop a unique art of teaching along with a comprehensive understanding of asana, pranayama, shatkarma, alignment, ayurveda, philosophy, anatomy, mudras, mantras and meditation. Our Yoga Alliance registered Yoga Teacher Training in India is intensive and enriching for yoga beginners to More...</p>
            <div>
                <h3 className='font-bold text-xl p-5 px-0'>Past Events</h3>
                <div className='flex gap-5'>
                    {arr.map((item) => (
                        <div className="max-w-sm bg-white border   shadow" key={item.id}>
                            <Image width={100} height={100} className="w-full h-auto object-contain" src="/assets/images/pastImg.png" alt="" />
                            <div className="px-5 p-3">
                                <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">{item.date}</p>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-dark">{item.title}</h5>
                                <hr className='mb-2'></hr>
                                <div className='flex justify-between items-center'>
                                    <Link href={'/'} >
                                        <span className='text-blue-500 pt-5 text-sm'>Write Feedback</span>
                                    </Link>
                                    <Rating value={item.rating}/>
                                </div>
                            </div>

                        </div>

                    ))}
                </div>
                <hr />
                <div id='review' className='px-0 p-10'>
                    <h3 className='font-bold text-xl py-4 '>20 Reviews</h3>
                    <div>
                        {
                            reviewArr.map((item, index) => (
                                <div key={index} className='mb-5 py-2'>
                                    <div>
                                        <h3 className='text-[16px] font-semibold'>{item.date}</h3>
                                        <p className="text-[#666] text-[16px] font-normal">{item.description}</p>
                                    </div>
                                    <div className="flex items-center my-4">
                                        <img className="w-10 h-10 me-4 rounded-full" src="/assets/images/user.png" alt="" />
                                        <div className="font-medium dark:text-black">
                                            <p>Jese Leos <time dateTime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">Joined on August 2014</time></p>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            ))
                        }
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className='text-[#666] font-medium text-[16px]'>Report this profile</p>
                       <RightArrow/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Organizer;

