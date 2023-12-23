import Cards from '@/components/ui/cards/Cards';
import { worksampledata } from '@/utils/constant';
import React from 'react';

const WorkSample = () => {
  return (
    <div className='bg-black'>
      <div className='container mx-auto py-5'>
        <h3 className='text-xl font-bold text-white'>Beauty in Simple things</h3>
        <div className='flex flex-col gap-2 md:flex-row md:flex-wrap md:gap-5 mt-5'>
          {worksampledata.map((item, key) => (
            <div key={key} className='w-full md:w-1/2 lg:w-1/4'>
              <Cards data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkSample;
