import React from 'react'
import Image from "next/image";

const StockWidget = ({e}) => {
    return (
        <div className="bg-gray-50 w-full text-black rounded-xl shadow">
            <div className="w-full rounded-t-xl flex justify-center items-center">
                <Image
                    src={e.image}
                    height={300}
                    width={400}
                    alt=""
                    className="w-full aspect-video rounded-t-xl object-cover"
                />
            </div>

            <div className="flex flex-col justify-center items-center p-4">
                <p className="text-xl font-semibold self-start pb-1">{e.name}</p>
                <p className='text-gray-500 pb-4 text-sm text-justify'>{e.review}</p>
                <button className="bg-[#023047] self-end text-white text-sm px-6 py-2 rounded-lg">
                    More Details
                </button>
            </div>
        </div>
    )
}

export default StockWidget