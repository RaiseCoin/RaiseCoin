import React, { useState, useEffect } from "react";
import { ImCancelCircle } from "react-icons/im";
import { FaArrowLeft } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa6";
import {uploadMetadata} from "../../utils/uploadMetadata";
import {useAccount,useWaitForTransactionReceipt,useWriteContract,
} from "wagmi";

const PopUp = ({ handleOpen ,details}) => {
  const [amt, setAmt] = useState(500);
  const [confirmPage, setConfirmPage] = useState(false);
  const [price, setPrice] = useState(null);
  const { data: hash, isPending, writeContractAsync } = useWriteContract();
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash });
  const { address } = useAccount();


  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await fetch(
          "https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=ETH"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setPrice(data.ETH);
       
      } catch (error) {
        console.error("Failed to fetch price:", error);
      }
    };

    fetchPrice();
  }, []);


  
  const handleBuy = () => {
    if (amt < 500) {
      alert("Min Investment : ₹500");
      return;
    }
    setConfirmPage(true);
  };

  const handleTransaction = async() => {
    const nftMetadata = {
        name: details.startupNname,
        descritpion: `By acquiring this NFT, you agree to the Terms of Investment as stipulated by Raisecoin and are lawfully investing in ${details.startupNname}. This token signifies your consent and represents proof of your investment made through Raisecoin.`,
        image:details.displayImg,
        attributes:[
            {
                trait_type: "Investment Amount",
                value: `$${amt}`
            },
            {
                trait_type: "Price per Share",
                value: details.pricePerShare
            },
            {
                trait_type: "Number of Shares",
                value: Math.ceil(amt/details.pricePerShare)
            }
        ]   
  };
  let ipfsHash=null;
  try {
    ipfsHash = await uploadMetadata(nftMetadata); 

  } catch (error) {
    console.error("Error uploading file:", error);
    alert(error.message);
  }
  console.log(ipfsHash)

}

  const handleBack = () => {
    setConfirmPage(false); // Go back to the buy page
  };
  if (confirmPage) {
    // Render confirmation page
    return (
      <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white text-gray-800 p-8 rounded-lg w-1/2">
          <FaArrowLeft
            className="text-2xl cursor-pointer"
            onClick={handleBack}
          />
          <div className="my-4 text-center">
            <h1 className="text-3xl font-bold">{Math.ceil(amt/details.pricePerShare)} Shares</h1>
            
          </div>
          <div className="w-full mb-4">
            <div className="flex justify-between my-2">
              <p>Investment Amount</p>
              <p>${amt}</p>
            </div>
            <div className="flex justify-between my-2">
              <p>
                Fees <span className="text-xs text-gray-500">(?)</span>
              </p>
              <p>Free</p>
            </div>
            <div className="flex justify-between my-2 font-semibold">
              <p>Total Amount</p>
              <p>${amt}</p>
            </div>
            <div className="flex justify-between my-2 font-semibold">
              <p>Total Amount in ETH</p>
              <p className="flex items-center">
                <FaEthereum className="mr-2" />
                {price * amt}
              </p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between my-2">
              <p>
                Base Shares (Rounded Up)
              </p>
              <p>{Math.ceil(amt/details.pricePerShare)}</p>
            </div>
            <div className="flex justify-between my-2 font-semibold">
              <p>Total Shares</p>
              <p>{Math.ceil(amt/details.pricePerShare)}</p>
            </div>
          </div>
          <button onClick={handleTransaction} className="bg-green-500 text-white font-medium px-14 py-4 rounded hover:bg-green-600 duration-300 uppercase w-full mt-4">
            Confirm Transaction
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div
        onClick={handleOpen}
        className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="flex flex-col items-start bg-white text-gray-800 p-8 rounded-lg w-1/2"
        >
          <div className="flex justify-between items-center w-full mb-4">
            <h2 className="text-2xl font-bold ">Invest Now</h2>
            <ImCancelCircle className="text-2xl" onClick={handleOpen} />
          </div>
          <h4>Min Investment : $500</h4>
          <div className="flex items-center gap-4">
            <label>Investment Amount (in INR)</label>
            <input
              type="number"
              value={amt}
              onChange={(e) => setAmt(e.target.value)}
              className="flex-1 md:w-1/2 p-2 my-4 border border-gray-300 rounded "
            />
          </div>
          {amt < 500 && (
            <p className="text-sm text-red-500">
              *Investment amount can't be less than min investment
            </p>
          )}
          <button
            onClick={handleBuy}
            className="bg-green-500 text-white font-medium px-14 py-4 rounded hover:bg-green-600 duration-300 uppercase w-fit col-span-2 self-end"
          >
            Buy
          </button>
        </div>
      </div>
    );
  }
};

export default PopUp;
