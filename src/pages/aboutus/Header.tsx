import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div>
            <header className="relative bg-cover bg-[url('/assets/images/headerbg.png')] min-h-[450px] w-full h-full bg-no-repeat bg-center flex items-center justify-center text-white">
                <div className="flex justify-center w-full items-stretch z-10 gap-10 container mx-auto">
                    <div className="flex-grow"><Image style={{ width: "100%" }} className=' max-h-[400px] ' src="/assets/images/headerImg.png" width={776} height={388} alt='headerimg' />
                    </div>
                    <div className='h-full flex-shrink-0  w-[30%]'>
                        <div className=" min-h-[388px] p-6 bg-white border border-gray-200 rounded-lg shadow ">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Yoga & Meditations : Theme Based senior (35-80 years)</h5>
                            <div className='flex gap-2 pb-2'>
                                <button className='bg-[#28BCA5] text-white text-sm p-1 px-3  rounded-md border border-transparent'>Online</button>
                                <button className='bg-transparent border text-[#28BCA5] text-sm p-1 px-3  rounded-md  border-[#28BCA5]'>Entertainment</button>

                            </div>
                            <div>
                                <div className='flex items-center justify-start py-5 pb-2 gap-3'>
                                    <Image src="/assets/images/icon.svg" width={19} height={17} alt='icon' />
                                    <p className='text-[#666666] text-[500] text-sm'>Dance</p>
                                </div>
                                <div className='flex items-center justify-start py-2 gap-3'>
                                    <Image src="/assets/images/icon.svg" width={19} height={17} alt='icon' />
                                    <p className='text-[#666666] text-[500] text-sm'>Sun 16, Oct | 6:30PM</p>
                                </div>
                                <div className='flex items-center justify-start py-2 gap-3'>
                                    <Image src="/assets/images/icon.svg" width={19} height={17} alt='icon' />
                                    <p className='text-[#666666] text-[500] text-sm'>Zoom India</p>
                                </div>
                                <div className='flex items-center justify-start py-2 gap-3'>
                                    <div className='flex items-center justify-start py-2 gap-3'> <Image src="/assets/images/icon.svg" width={19} height={17} alt='icon' />
                                        <p className='text-[#666666] text-[500] text-sm'>For Age 30+</p>
                                    </div>
                                </div>
                                <hr />
                                <div className='flex justify-between pt-5'>
                                    <p className='text-black text-3xl font-bold'>Free</p>
                                    <button className="bg-[#0A84FF] gap-2  text-white font-bold py-2 px-4 rounded inline-flex items-center">
                                        <Image src="/assets/images/subscriptionIcon.png" width={19} height={17} alt='icon' />

                                        <span>Download</span>
                                    </button>                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header

