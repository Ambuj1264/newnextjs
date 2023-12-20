import Cards from '@/components/ui/cards/Cards';
import { worksampledata } from '@/utils/constant';
import React from 'react'

const WorkSample = () => {
  return (
    <div className='bg-black'>
        <div className='container mx-auto py-5'>
        <h3 className='text-xl font-bold text-white'>Beauty in Simple things</h3>
        <div className='flex gap-10 mt-5'>
            {
             worksampledata.map((item, key)=>(
                <Cards data={item} key={key}/>
             ))
            }
        </div>
        </div>
        </div>
  )
}

export default WorkSample;

