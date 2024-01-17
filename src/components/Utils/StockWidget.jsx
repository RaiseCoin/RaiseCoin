import React from 'react'
import Image from "next/image";

const StockWidget = ({e}) => {
    return (
        <div className="bg-gray-50 w-full text-black rounded-xl">
            <div className="w-full rounded-t-xl flex justify-center items-center">
                <Image
                    src={e.image}
                    height={300}
                    width={400}
                    alt=""
                    className="w-full aspect-video rounded-t-xl object-cover"
                />
            </div>

            <div className="flex flex-col justify-center items-center gap-4 p-4">
                <p className="text-xl font-semibold">{e.name}</p>
                <p>{e.review}</p>
                <button className="bg-[#023047] text-white text-lg px-6 py-1 rounded-xl">
                    Read More
                </button>
            </div>
        </div>
    )
}

export default StockWidget