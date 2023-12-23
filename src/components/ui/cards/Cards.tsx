import Image from 'next/image';
import React from 'react';

interface CardsProp {
  title: string;
  img: string;
  description: string;
  id: number;
}

const Cards = ({ data }: { data: CardsProp }) => {
  return (
    <>
      <div key={data.id} className="bg-white border shadow rounded-sm w-[360px]">
        <div className="relative">
          <Image className="object-cover rounded-t-md" src={data.img} alt="" layout="responsive" width={376} height={289}  />
        </div>
        <div className="p-4 md:p-5">
          <h5 className="mb-2 text-base md:text-lg font-semibold tracking-tight text-gray-900 dark:text-black">{data?.title}</h5>
          <p className="mb-3 text-sm md:text-base font-normal text-[#333]">{data?.description}</p>
        </div>
      </div>
    </>
  )
}

export default Cards;
