"use client";
import MetamaskLogo from "@/components/metamask_logo/metamask_logo";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const signin = () => {
	return (
		<div className="flex flex-col items-center justify-center w-full flex-1 px-20 h-[100vh] bg-gray-100 text-center">
			<div className="bg-white rounded-2xl  shadow-2xl flex w-2/3 max-w-4xl">
				<div className="w-3/5 p-5">
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
							{/* <Image
								src={`/sign_in/metamask.png`}
								height={300}
								width={300}
								className=" flex justify-center mx-auto h-52 w-72"
							/> */}
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
				</div>
				<div className="w-2/5 bg-green-600 rounded-tr-2xl rounded-br-2xl py-36 px-12">
					{/*Signup section*/}
					<h2 className="text-3xl font-bold mb-2">Hey, There!</h2>
					<div className="border-2 w-10 border-white inline-block mb-10"></div>
					{/*white bar*/}
					<p className="mb-4">
						Don't have an account?
						<br /> No worries, SignUp here.
					</p>
					<a
						href="/signup"
						className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-600">
						Sign Up
					</a>
					{/*signup button*/}
				</div>
			</div>
		</div>
	);
};

export default signin;
