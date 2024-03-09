import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi'

const HomePage = () => {
    return (
        <div className='bg-gray-100 h-screen'>
            
            <div className="flex justify-between items-center py-3 w-[87%] mx-auto bg-gray-100">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <Image src="/logoBlack.png" width={400} height={100} alt="Logo" className="w-40" />
              </Link>
              
            </div>
            <div className="hidden md:flex items-center space-x-9">
             
             
            </div>
            <div className="md:hidden flex items-center">
              <button className="outline-none mobile-menu-button">
                {/* <svg
                  className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                  x-show="!showMenu"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg> */}
              </button>
            </div>
            
          </div>
          <div className="flex flex-col items-center justify-center h-[87%] p-5 text-center text:xl bg-gray-100">
            
           
            <h1 className="text-4xl font-bold mb-4 text-gray-700">Welcome Founders!</h1>
            <p className="text-lg text-gray-700 mb-4">This is your homepage. Here you can find all the information you need.</p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"> <Link href="/founders/signup">Register </Link></button>
        </div>

        </div>
        
    );
}

export default HomePage;
