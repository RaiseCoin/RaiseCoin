import React from 'react'
import CompWrapper from '../Utils/CompWrapper'
import Image from 'next/image'

const HomeBanItems = ({ title, desc }) => {
    return (
        <div className='w-full flex flex-col items-start'>
            <h1 className='text-primary text-3xl font-bold '>{title} +</h1>
            <div className='flex gap-5 items-start'>
                <p className='text-gray-50 text-lg'>{desc}</p>
            </div>
        </div>
    )

}

const HomeBanner = () => {
    return (
        <div className='w-full bg-gray-950'>
            <CompWrapper>
                <div className='w-full flex justify-between items-center h-[85vh]'>
                    <div className='flex flex-col justify-between h-full py-28 w-[60%]'>
                        <h1 className='text-gray-50 text-6xl font-bold '>Investing Redefined: <span className='text-secondary'>Transparent, Secure, Rewarding.</span></h1>
                        <div className='flex gap-5 items-start justify-between w-full'>
                            <HomeBanItems title={"500M"} desc='Money Invested' />
                            <HomeBanItems title={"50%"} desc='Returns' />
                            <HomeBanItems title={"550K"} desc='Startups' />
                        </div>

                    </div>
                    <Image src={"/Homepage/HomePageBan.png"} alt='banner' width={500} height={500} className='h-full w-auto' />

                </div>
            </CompWrapper>
        </div>
    )
}

export default HomeBanner