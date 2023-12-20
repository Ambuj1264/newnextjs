import TabComponent from '@/components/ui/tab/TabComponent';
import React from 'react'
import Organizer from './organizer/Organizer';
import { Rating } from '@/components/ui/rating/StarRating';
import { EventsIcon } from '@/utils/svg';

const Deatils = () => {
  return (
    <div className="half-colored-div bg-gradient-to-b from-[#E7FFFB] via-white to-E7FFFB">
    <div className='container mx-auto py-10'>
      <div className='flex justify-center w-full items-stretch z-10 gap-10'>
        <div className='flex-grow shadow-sm bg-white p-5'>
          <TabComponent tabs={tabs} />
        </div>
        <div className='h-full flex-shrink-0  w-[30%]'>
          <AddsCard/>
          
        </div>
      </div>
    </div>
    </div>
  )
}

export default Deatils

const tabs = [
  { id: 'tab1', label: 'About Event', content: <p>Content for Tab 1</p> },
  { id: 'tab2', label: 'Organizer', content: <Organizer /> },
];


const AddsCard=()=>{
  return(
    <div className=" min-h-[388px] p-6 bg-white border border-gray-200 rounded-lg shadow ">
      <div className='flex justify-between items-center'>
      <div className="flex items-start ">
      <img className="w-10 h-10 me-4 rounded-full" src="/assets/images/user.png" alt="" />
      <div className='mb-5'>
        <p className='text-sm font-normal text-[#666]'>Powered by</p>
        <p className='text-[18px] font-semibold'>Visit Care</p>
      </div>
      </div>
      <Rating value={4.5}/>
      </div>
      <hr/>
      <div className='flex py-5 gap-3 items-center'>
        <EventsIcon/>
        <div>
          <p className='text-[16px] font-semibold text-[#28BCA5] mb-1'>Event from home for elderly</p>
          <p className='text-sm font-normal text-[#0A84FF]'>Where is how to Use Zoom</p>
        </div>
      </div>
</div>
  )
}