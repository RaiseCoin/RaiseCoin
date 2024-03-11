import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div className='bg-gray-800'>
         <div className="flex justify-between items-center py-3 w-[87%] mx-auto bg-gray-800">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <Image src="/logoWhite.png" width={400} height={100} alt="Logo" className="w-40 to-white" />
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
          <div className="bg-gray-800 min-h-screen min-w-[87%] flex justify-center items-center">
      <Head>
        <title>Register</title>
      </Head>

      <div className="container py-5  w-[60%]">
        <h1 className=" text-sm md:text-xl font-bold text-white mb-4 text-center">Raise your round with the best! <br /> <h1 className=' text-2xl md:text-3xl'> Become a RaiseCoin Invester!</h1></h1>
        <p className="text-gray-300 mb-8 text-center">
          Already a member? <a href="/founders/signin" className=' text-blue-400'> Sign in.</a>
        </p>

        <form className="w-full">
          <div className="mb-6">
            <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="first-name">
              Your Name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="first-name" type="text" placeholder="Enter Full Name" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="last-name">
              Name of your Venture
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="last-name" type="text" placeholder="E.g. Vilson Hydrations" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="email">
              Official Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email@example.com" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="message">
              Overview of your Venture
            </label>
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Describe your Startup" rows="4"></textarea>
          </div>
          <div className="mb-6">
            <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="message">
              Your Pitch
            </label>
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Enter your message" rows="4"></textarea>
          </div>
          <div className="mb-6">
            <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="last-name">
              Previous Funding
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="last-name" type="text" placeholder="" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="last-name">
              Valuation
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="last-name" type="text" placeholder="" />
          </div>
          {/* Submit */}
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Enroll Now
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
    
  )
}

export default page