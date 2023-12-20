import Image from 'next/image';
import React from 'react'

interface CardsProp {
    title: string;
    img: string;
    description: string;
    id: number
}

const Cards = ({ data }: { data: CardsProp }) => {
    return (
        <>
            <div key={data.id} className=" bg-white border shadow rounded-sm">
                <Image className="w-full h-full max-h-[200px]" src={data.img} alt="" width={100} height={100} />
                <div className="p-5">
                    <h5 className="mb-2 text-[16px] font-semibold tracking-tight text-gray-900 dark:text-black">{data?.title}</h5>
                    <p className="mb-3 text-sm font-normal text-[#333]">{data?.description}</p>
                </div>
            </div>

        </>
    )
}

export default Cards