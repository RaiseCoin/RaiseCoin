import React from 'react'
import FlipCard from "@/components/profile/FlipCard";



const page = () => {

    return (
        <div>
            <h1 className='text-xl font-bold mb-4'>Your NFTS</h1>
            <div className='grid grid-cols-5 w-full gap-6'>
                <FlipCard />
                <FlipCard />
                <FlipCard />
                <FlipCard />
            </div>
        </div>
    )
}

export default page