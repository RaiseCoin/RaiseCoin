"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // Import usePathname here
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

const Navigation = () => {
  const path = usePathname();
  const { isConnected } = useAccount();

  const toggleMenu = () => {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
  };

  return (
    <>
      {path === "/signin" || path === "/signup" || path === "/founders/signin" || path === "/founders" || path === "/founders/signup" ? <></> : (
        <nav className="shadow-lg w-full sticky top-0 z-50 bg-gray-100">
          <div className="flex justify-between items-center py-3 w-[87%] mx-auto">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <Image src="/logoBlack.png" width={400} height={100} alt="Logo" className="w-40" />
              </Link>
              <div className="flex items-center border border-gray-170 rounded-xl overflow-hidden bg-white">
                <input
                  type="search"
                  name="search"
                  placeholder="Explore Investments"
                  className="px-4 py-2 w-auto md:w-80 outline-none "
                />
                <button className="flex items-center justify-center px-4 border-l">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    viewBox="0 0 50 50"
                  >
                    <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-9">
              <Link
                href="/explore"
                className="text-gray-700 font-medium hover:text-green-600 transition duration-300"
              >
                Start Investing
              </Link>
              <Link
                href="/founders"
                className="text-gray-700 font-medium hover:text-green-600 transition duration-300"
              >
                For Founders
              </Link>
              {/* <ConnectButton chainStatus="none" label="Log in" showBalance={false}/> */}
              <Link
                href="/signin"
                className="py-2 px-4 text-white bg-green-600 rounded transition duration-300 font-semibold hover:scale-105"
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className="py-2 px-4 text-white bg-green-600 rounded transition duration-300 font-semibold hover:scale-105"
              >
                Sign Up
              </Link>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="outline-none mobile-menu-button"
              >
                <svg
                  className="w-6 h-6 text-gray-500 hover:text-green-500 "
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
          <div id="mobile-menu" className="hidden md:hidden bg-gray-100">
            <ul className="flex flex-col items-center space-y-4">
              <li>
                <Link
                  href="/explore"
                  className="text-gray-700 font-medium hover:text-green-600 transition duration-300"
                >
                  Start Investing
                </Link>
              </li>
              <li className='pb-3'>
                <Link
                  href="/founders"
                  className="text-gray-700 font-medium hover:text-green-600 transition duration-300"
                >
                  For Founders
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navigation;
