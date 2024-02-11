"use client";
import MetamaskLogo from "@/components/metamask_logo/metamask_logo";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const signin = () => {
	return (
		<div className="md:flex flex-col items-center justify-center w-full flex-1 h-[100vh] md:px-20 md:h-screen bg-gray-100 text-center">
			<div className="bg-white rounded-2xl  shadow-2xl md:flex md:w-2/3 max-w-4xl">
				<div className="md:w-3/5 p-5">
					{/*Login Section*/}
					<div className="text-left font-bold">
						<Link href="/" className="text-green-600">RaiseCoin</Link>
					</div>
					<div className="py-10">
						<h2 className="text-3xl font-bold text-green-600 mb-2">Sign In</h2>
						{/* green bar */}
						<div className="border-2 w-10 border-green-600 inline-block mb-4"></div>
						<div>
							{/* Metamask logo */}
							<MetamaskLogo />
						</div>
						<div className="flex flex-col items-center">
							<a
								href="#"
								className="mt-5 border-2 text-green-600 border-green-600 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-600 hover:text-white">
								Continue with MetaMask
							</a>
							{/*signin button*/}
						</div>
					</div>
				</div >
				<div className="md:w-2/5 bg-green-600 md:rounded-tr-2xl rounded-bl-2xl rounded-br-2xl pt-8 pb-60 md:py-36 px-12">
					{/*Signup section*/}
					<div className=" w-full h-full ">
					<h2 className="md:text-3xl text-4xl font-bold pt-8 mb-2 ">Hey, There!</h2>
					<div className="border-2 w-10 border-white inline-block mt-4 mb-4 md:mb-10"></div>
					{/*white bar*/}
					<p className=" text-2xl md:text-xl md:mb-4">
						Don't have an account?
						<br /> No worries, SignUp here.
					</p>
					<a
						href="/signup"
						className="border-2 border-white rounded-full mt-8 px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-600">
						Sign Up
					</a>
					
					{/*signup button*/}
					</div>
				</div>
			</div>
		</div>
	);
};

export default signin;
