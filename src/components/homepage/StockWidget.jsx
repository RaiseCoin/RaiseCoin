import React from 'react'
import Image from "next/image";
import Link from 'next/link';

const StockWidget = ({id,image,name,summary}) => {
    return (
        <div className="bg-gray-50 w-full text-black rounded-xl border border-gray-300">
            <div className="w-full rounded-t-xl flex justify-center items-center">
                <Image
                    src={image}
                    height={300}
                    width={400}
                    alt=""
                    className="w-full aspect-video rounded-t-xl object-cover"
                />
            </div>

            <div className="flex flex-col justify-center items-center p-4">
                <p className="text-xl font-semibold self-start pb-1">{name}</p>
                <p className='text-gray-500 pb-4 text-sm '>{summary}</p>
                <Link href={`/explore/${id}`} className="bg-[#023047] self-end text-white text-sm px-6 py-2 rounded-lg">
                    More Details
                </Link>
            </div>
        </div>
    )
}

export default StockWidget