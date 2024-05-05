'use client'
import React, { useState } from 'react'
import Image from 'next/image';

const FlipCard = () => {

    const [isFlipped, setIsFlipped] = useState(true);

    const flipCard = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="relative w-full aspect-square cursor-pointer" onMouseEnter={() => { flipCard() }} onMouseLeave={() => { flipCard() }}>
            <div className={`absolute w-full aspect-square bg-transparent`}>
                <div className={`absolute inset-0 w-full aspect-square rounded-lg shadow-lg bg-blue-500 flex justify-center items-center ${isFlipped ? 'scale-x-100 z-10' : '-scale-x-100 z-0'} duration-500`}>
                    <Image
                        src={'/metamask.png'}
                        height={700}
                        width={700}
                        alt=""
                        className="w-full"
                    />
                </div>
                <div className={`absolute inset-0 w-full h-full rounded-lg shadow-lg bg-green-500 flex flex-col whitespace-pre-wrap justify-center items-center ${isFlipped ? '-scale-x-100 z-0' : 'scale-x-100 z-10'} duration-500`}>
                    <span className="text-white font-bold text-xl">Name </span>
                    <span className="text-white font-bold text-lg">Price: 500 ETH</span>
                    <span className="text-white font-bold text-sm">Description </span>
                </div>
            </div>
        </div>
    )
}

export default FlipCard