import React, { useState } from 'react'
import { ImCancelCircle } from "react-icons/im";


const PopUp = ({ handleOpen }) => {
    const [amt, setAmt] = useState(500)
    const handleBuy = () => {
        if (amt < 500) {
            alert("Min Investment : ₹500")
            return
        }
        alert("Invested Successfully")
    }
    return (
        <div onClick={handleOpen} className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div onClick={(e) => { e.stopPropagation() }} className="flex flex-col items-start bg-white text-gray-800 p-8 rounded-lg w-1/2">
                <div className='flex justify-between items-center w-full mb-4'>
                    <h2 className="text-2xl font-bold ">Invest Now</h2>
                    <ImCancelCircle className='text-2xl' onClick={handleOpen} />
                </div>
                <h4>Min Investment : ₹500</h4>
                <div className="flex items-center gap-4">
                    <label>Investment Amount (in INR)</label>
                    <input type="number" value={amt} onChange={(e) => setAmt(e.target.value)} className="flex-1 md:w-1/2 p-2 my-4 border border-gray-300 rounded " />
                </div>
                {amt < 500 && <p className="text-sm text-red-500">*Investment amount can't be less than min investment</p>}
                {/* <h4>No. of shares : {amt / 500}</h4> */}
                <button onClick={handleBuy} className="bg-green-500 text-white font-medium px-14 py-4 rounded hover:bg-green-600 duration-300 uppercase w-fit col-span-2 self-end">Buy</button>
            </div>
        </div>
    )
}

export default PopUp